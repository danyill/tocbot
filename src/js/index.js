/**
 * Tocbot
 * Tocbot creates a toble of contents based on HTML headings on a page,
 * this allows users to easily jump to different sections of the document.
 * Tocbot was inspired by tocify (http://gregfranko.com/jquery.tocify.js/).
 * The main differences are that it works natively without any need for jquery or jquery UI).
 *
 * @author Tim Scanlin
 */

/* globals define */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory(root))
  } else if (typeof exports === 'object') {
    module.exports = factory(root)
  } else {
    root.tocbot = factory(root)
  }
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {
  'use strict'

  // Default options.
  var defaultOptions = require('./default-options.js')
  // Object to store current options.
  var options = {}
  // Object for public APIs.
  var tocbot = {}

  var BuildHtml = require('./build-html.js')
  var ParseContent = require('./parse-content.js')
  // Keep these variables at top scope once options are passed in.
  var buildHtml
  var parseContent

  // Just return if its not a browser.
  if (typeof window === 'undefined') {
    return
  }
  var supports = !!root.document.querySelector && !!root.addEventListener // Feature test
  var headingsArray

  // From: https://github.com/Raynos/xtend
  var hasOwnProperty = Object.prototype.hasOwnProperty
  function extend () {
    var target = {}
    for (var i = 0; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

  // From: https://remysharp.com/2010/07/21/throttling-function-calls
  function throttle (fn, threshhold, scope) {
    threshhold || (threshhold = 250)
    var last
    var deferTimer
    return function () {
      var context = scope || this
      var now = +new Date()
      var args = arguments
      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer)
        deferTimer = setTimeout(function () {
          last = now
          fn.apply(context, args)
        }, threshhold)
      } else {
        last = now
        fn.apply(context, args)
      }
    }
  }

  /**
   * Destroy tocbot.
   */
  tocbot.destroy = function () {
    // Clear HTML.
    try {
      document.querySelector(options.tocSelector).innerHTML = ''
    } catch (e) {
      console.warn('Element not found: ' + options.tocSelector); // eslint-disable-line
    }

    // Remove event listeners.
    document.removeEventListener('scroll', this._scrollListener, false)
    document.removeEventListener('resize', this._scrollListener, false)
    if (buildHtml) {
      document.removeEventListener('click', this._clickListener, false)
    }
  }

  /**
   * Initialize tocbot.
   * @param {object} customOptions
   */
  tocbot.init = function (customOptions) {
    // feature test
    if (!supports) {
      return
    }

    // Merge defaults with user options.
    // Set to options variable at the top.
    options = extend(defaultOptions, customOptions || {})
    this.options = options
    this.state = {}

    // Init smooth scroll if enabled (default).
    if (options.smoothScroll) {
      tocbot.zenscroll = require('zenscroll')
      tocbot.zenscroll.setup(options.smoothScrollDuration)
    }

    // Pass options to these modules.
    buildHtml = BuildHtml(options)
    parseContent = ParseContent(options)

    // For testing purposes.
    this._buildHtml = buildHtml
    this._parseContent = parseContent

    // Destroy it if it exists first.
    tocbot.destroy()

    // Get headings array.
    headingsArray = parseContent.selectHeadings(options.contentSelector, options.headingSelector)
    // Return if no headings are found.
    if (headingsArray === null) {
      return
    }

    // Build nested headings array.
    var nestedHeadingsObj = parseContent.nestHeadingsArray(headingsArray)
    var nestedHeadings = nestedHeadingsObj.nest

    // Render.
    buildHtml.render(options.tocSelector, nestedHeadings)

    // Update Sidebar and bind listeners.
    this._scrollListener = throttle(function (e) {
      buildHtml.updateToc(headingsArray)
      var isTop = e && e.target && e.target.scrollingElement && e.target.scrollingElement.scrollTop === 0
      if ((e && (e.eventPhase === 0 || e.currentTarget === null)) || isTop) {
        buildHtml.enableTocAnimation()
        buildHtml.updateToc(headingsArray)
        if (options.scrollEndCallback) {
          options.scrollEndCallback(e)
        }
      }
    }, options.throttleTimeout)
    this._scrollListener()
    document.addEventListener('scroll', this._scrollListener, false)
    document.addEventListener('resize', this._scrollListener, false)

    // Bind click listeners to disable animation.
    this._clickListener = throttle(function (event) {
      if (options.smoothScroll) {
        buildHtml.disableTocAnimation(event)
      }
      buildHtml.updateToc(headingsArray)
    }, options.throttleTimeout)
    document.addEventListener('click', this._clickListener, false)

    return this
  }

  /**
   * Refresh tocbot.
   */
  tocbot.refresh = function (customOptions) {
    tocbot.destroy()
    tocbot.init(customOptions || this.options)
  }

  // Make tocbot available globally.
  root.tocbot = tocbot

  return tocbot
})
