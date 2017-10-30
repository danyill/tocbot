
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([4],{389:function(s,n,e){s.exports=e(390)},390:function(s,n,e){"use strict";function t(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(n,"__esModule",{value:!0});var a=e(6),o=t(a),l=e(177),i=t(l),c=e(182),r=t(c),p=e(183),h=t(p),d=e(391),m=t(d),u=function(s){return o.default.createElement(i.default,{title:h.default.title,subtitle:h.default.subtitle,description:h.default.description,stylesheets:h.default.stylesheets,topLinks:h.default.topLinks,bodyHtml:m.default.bodyHtml,repo:h.default.repo,user:h.default.user,siteId:h.default.siteId,extraElements:o.default.createElement(r.default,null)})};n.default=u},391:function(s,n){s.exports={bodyContent:"<h1 class=\"dn\">\n<a href=\"http://tscanlin.github.io/tocbot\">Tocbot</a>\n</h1>\n\n<a class=\"no-decoration\" href=\"https://travis-ci.org/tscanlin/tocbot\" target=\"_blank\"><img src=\"https://travis-ci.org/tscanlin/tocbot.svg?branch=master\" alt=\"travis-ci\" /></a>\n\nTocbot builds a [table of contents](https://en.wikipedia.org/wiki/Table_of_contents) (TOC) from headings in an HTML document. This is useful for documentation websites or long markdown pages because it makes them easier to navigate. This library was inspired by [Tocify](http://gregfranko.com/jquery.tocify.js/), the main difference is that Tocbot uses native DOM methods and avoids the jQuery & jQuery UI dependencies.\n\n\n## Get Started\n\nYou can use npm to install it or include the script on the page with HTML.\n\n[**Download it here**](https://github.com/tscanlin/tocbot/releases/)\n\n\n### Include JS\n\nInstall it with npm.\n\n```sh\nnpm install --save tocbot\n```\n\nOR\n\nInclude the script at the bottom of the page before the closing body tag.\n\n```html\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/tocbot/3.0.5/tocbot.min.js\"><\/script>\n```\n\n\n### Include CSS\n\nCSS is used for expanding & collapsing groupings and some basic styling.\n\n```html\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/tocbot/3.0.5/tocbot.css\">\n```\n\nOR\n\nIf you installed it with npm and use sass / postcss you might try importing the styles from 'node_modules', [see the includePath option documentation for more info](https://github.com/sass/node-sass#includepaths)\n\n```scss\n@import 'tocbot/src/scss/tocbot-core';\n@import 'tocbot/src/scss/tocbot-default-theme';\n```\n\n\n### Usage\n\nInitialize the script\n\n```js\ntocbot.init({\n  // Where to render the table of contents.\n  tocSelector: '.js-toc',\n  // Where to grab the headings to build the table of contents.\n  contentSelector: '.js-toc-content',\n  // Which headings to grab inside of the contentSelector element.\n  headingSelector: 'h1, h2, h3',\n});\n```\n\n**NOTE:** Make sure headings have id attributes, tocbot and your browser needs these to make hashes jump to the proper heading, some markdown libraries (like [marked](https://github.com/chjj/marked)) already do this for you.\n\nIf content in the div has changed then trigger a refresh (optionally with new options).\n\n```javascript\ntocbot.refresh();\n```\n\n\n## Examples\n\n- [Tocbot Homepage](http://tscanlin.github.io/tocbot/)\n- [Optimizely's Developer Documentation](https://developers.optimizely.com/x/solutions/javascript/reference/index.html)\n\nIf you'd like to add your page to this list open a pull request.\n\n\n## Requirements\n\nThis library uses **vanilla JavaScript**. It is less than 350 bytes of CSS and about 3.6Kb of JavaScript (minified and gzipped). The only dependency this script has is [zenscroll](https://github.com/zengabor/zenscroll) (which is small and has no dependencies). **NOTE:** to exclude anchor elements from smooth scrolling, add the class `noZensmooth` ([source](https://github.com/zengabor/zenscroll#16-exclude-a-link-from-the-automatic-smooth-scrolling)).\n\nThis script works in **all modern browsers and IE 9+**.\n\nMake sure rendered headings have id attributes, some markdown libraries (like [marked](https://github.com/chjj/marked)) already do this.\n\n### Fixed headers\n\nTo handle anchor links properly when you have a fixed header, I recommend using CSS similar to the following:\n\n```css\nh1::before, h2::before, h3::before, h4::before, h5::before, h6::before {\n    display: block;\n    content: \" \";\n    height: 60px;\n    margin-top: -60px;\n    visibility: hidden;\n}\n```\n\nThis is better than javascript solutions since it will work when javascript is disabled.\n\n\n## API\n\n### Options\n\n```javascript\n// Where to render the table of contents.\ntocSelector: '.js-toc',\n// Where to grab the headings to build the table of contents.\ncontentSelector: '.js-toc-content',\n// Which headings to grab inside of the contentSelector element.\nheadingSelector: 'h1, h2, h3',\n// Headings that match the ignoreSelector will be skipped.\nignoreSelector: '.js-toc-ignore',\n// Main class to add to links.\nlinkClass: 'toc-link',\n// Extra classes to add to links.\nextraLinkClasses: '',\n// Class to add to active links,\n// the link corresponding to the top most heading on the page.\nactiveLinkClass: 'is-active-link',\n// Main class to add to lists.\nlistClass: 'toc-list',\n// Extra classes to add to lists.\nextraListClasses: '',\n// Class that gets added when a list should be collapsed.\nisCollapsedClass: 'is-collapsed',\n// Class that gets added when a list should be able\n// to be collapsed but isn't necessarily collpased.\ncollapsibleClass: 'is-collapsible',\n// Class to add to list items.\nlistItemClass: 'toc-list-item',\n// How many heading levels should not be collpased.\n// For example, number 6 will show everything since\n// there are only 6 heading levels and number 0 will collpase them all.\n// The sections that are hidden will open\n// and close as you scroll to headings within them.\ncollapseDepth: 0,\n// Smooth scrolling enabled.\nsmoothScroll: true,\n// Smooth scroll duration.\nsmoothScrollDuration: 420,\n// Callback for scroll end (requires: smoothScroll).\nscrollEndCallback: function (e) {},\n// Headings offset between the headings and the top of the document (this is meant for minor adjustments).\nheadingsOffset: 1,\n// Timeout between events firing to make sure it's\n// not too rapid (for performance reasons).\nthrottleTimeout: 50,\n// Element to add the positionFixedClass to.\npositionFixedSelector: null,\n// Fixed position class to add to make sidebar fixed after scrolling\n// down past the fixedSidebarOffset.\npositionFixedClass: 'is-position-fixed',\n// fixedSidebarOffset can be any number but by default is set\n// to auto which sets the fixedSidebarOffset to the sidebar\n// element's offsetTop from the top of the document on init.\nfixedSidebarOffset: 'auto',\n// includeHtml can be set to true to include the HTML markup from the\n// heading node instead of just including the textContent.\nincludeHtml: false,\n// onclick function to apply to all links in toc. will be called with\n// the event as the first parameter, and this can be used to stop,\n// propagation, prevent default or perform action\nonClick: false,\n```\n\n\n### Methods\n\n#### .init\n\nInitialize tocbot with an options object.\n\n```javascript\ntocbot.init(options)\n```\n\n#### .destroy\n\nDestroy tocbot and remove event listeners.\n\n```javascript\ntocbot.destroy()\n```\n\n#### .refresh\n\nRefresh tocbot if the document changes and it needs to be rebuilt.\n\n```javascript\ntocbot.refresh()\n```\n\n\n## Roadmap\n\n- More tests\n- React.js support (make react support native without direct dom manipulation)\n\n\n## Contributing\n\nContributions and suggestions are welcome! Please feel free to open an issue if you run into a problem or have a feature request. I'll do my best to respond in a timely fashion.\n\nIf you want to open a pull request just fork the repo but please make sure all tests and lint pass.\n\n\n### Running Tests\n\n#### All tests\n```bash\nnpm run test\n```\n\n#### With debugger\nYou can run tests through [node-inspector](https://github.com/node-inspector/node-inspector).\n\n[For now, you may need to use node v6 or lower](https://github.com/node-inspector/node-inspector/issues/950#issuecomment-264289415)...\n```bash\nnvm use 6\n```\n\nOnce you're on node v6 or lower:\n```bash\nnpm install node-inspector\n```\n\nNow that node-inspector is installed, you can run the tests!\n```bash\nnpm run test:debug\n```\n\n## Steps to publish\n\n- Push a branch and open a pull request\n- run `npm version <patch|minor|major>`\n- Update readme.md with notes\n- Merge the pull request\n- commit dist/\n- run `npm publish`\n- make release on github\n\n\n## License\n\n[MIT]('http://opensource.org/licenses/MIT')",bodyHtml:'<h1 class="dn">\n<a href="http://tscanlin.github.io/tocbot">Tocbot</a>\n</h1>\n\n<p><a class="no-decoration" href="https://travis-ci.org/tscanlin/tocbot" target="_blank"><img src="https://travis-ci.org/tscanlin/tocbot.svg?branch=master" alt="travis-ci" /></a></p>\n<p>Tocbot builds a <a href="https://en.wikipedia.org/wiki/Table_of_contents">table of contents</a> (TOC) from headings in an HTML document. This is useful for documentation websites or long markdown pages because it makes them easier to navigate. This library was inspired by <a href="http://gregfranko.com/jquery.tocify.js/">Tocify</a>, the main difference is that Tocbot uses native DOM methods and avoids the jQuery &amp; jQuery UI dependencies.</p>\n<h2 id="get-started">Get Started</h2>\n<p>You can use npm to install it or include the script on the page with HTML.</p>\n<p><a href="https://github.com/tscanlin/tocbot/releases/"><strong>Download it here</strong></a></p>\n<h3 id="include-js">Include JS</h3>\n<p>Install it with npm.</p>\n<pre><code class="hljs lang-sh">npm <span class="hljs-keyword">install</span> <span class="hljs-comment">--save tocbot</span>\n</code></pre>\n<p>OR</p>\n<p>Include the script at the bottom of the page before the closing body tag.</p>\n<pre><code class="hljs lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdnjs.cloudflare.com/ajax/libs/tocbot/3.0.5/tocbot.min.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre>\n<h3 id="include-css">Include CSS</h3>\n<p>CSS is used for expanding &amp; collapsing groupings and some basic styling.</p>\n<pre><code class="hljs lang-html">&lt;link <span class="hljs-attribute">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attribute">href</span>=<span class="hljs-string">"https://cdnjs.cloudflare.com/ajax/libs/tocbot/3.0.5/tocbot.css"</span>&gt;\n</code></pre>\n<p>OR</p>\n<p>If you installed it with npm and use sass / postcss you might try importing the styles from &#39;node_modules&#39;, <a href="https://github.com/sass/node-sass#includepaths">see the includePath option documentation for more info</a></p>\n<pre><code class="hljs lang-scss">@<span class="hljs-keyword">import</span> <span class="hljs-string">\'tocbot/src/scss/tocbot-core\'</span>;\n@<span class="hljs-keyword">import</span> <span class="hljs-string">\'tocbot/src/scss/tocbot-default-theme\'</span>;\n</code></pre>\n<h3 id="usage">Usage</h3>\n<p>Initialize the script</p>\n<pre><code class="hljs lang-js"><span class="hljs-selector-tag">tocbot</span><span class="hljs-selector-class">.init</span>({\n  <span class="hljs-comment">// Where to render the table of contents.</span>\n  <span class="hljs-attribute">tocSelector</span>: <span class="hljs-string">\'.js-toc\'</span>,\n  <span class="hljs-comment">// Where to grab the headings to build the table of contents.</span>\n  <span class="hljs-attribute">contentSelector</span>: <span class="hljs-string">\'.js-toc-content\'</span>,\n  <span class="hljs-comment">// Which headings to grab inside of the contentSelector element.</span>\n  <span class="hljs-attribute">headingSelector</span>: <span class="hljs-string">\'h1, h2, h3\'</span>,\n});\n</code></pre>\n<p><strong>NOTE:</strong> Make sure headings have id attributes, tocbot and your browser needs these to make hashes jump to the proper heading, some markdown libraries (like <a href="https://github.com/chjj/marked">marked</a>) already do this for you.</p>\n<p>If content in the div has changed then trigger a refresh (optionally with new options).</p>\n<pre><code class="hljs lang-javascript">tocbot.refresh()<span class="hljs-comment">;</span>\n</code></pre>\n<h2 id="examples">Examples</h2>\n<ul>\n<li><a href="http://tscanlin.github.io/tocbot/">Tocbot Homepage</a></li>\n<li><a href="https://developers.optimizely.com/x/solutions/javascript/reference/index.html">Optimizely&#39;s Developer Documentation</a></li>\n</ul>\n<p>If you&#39;d like to add your page to this list open a pull request.</p>\n<h2 id="requirements">Requirements</h2>\n<p>This library uses <strong>vanilla JavaScript</strong>. It is less than 350 bytes of CSS and about 3.6Kb of JavaScript (minified and gzipped). The only dependency this script has is <a href="https://github.com/zengabor/zenscroll">zenscroll</a> (which is small and has no dependencies). <strong>NOTE:</strong> to exclude anchor elements from smooth scrolling, add the class <code>noZensmooth</code> (<a href="https://github.com/zengabor/zenscroll#16-exclude-a-link-from-the-automatic-smooth-scrolling">source</a>).</p>\n<p>This script works in <strong>all modern browsers and IE 9+</strong>.</p>\n<p>Make sure rendered headings have id attributes, some markdown libraries (like <a href="https://github.com/chjj/marked">marked</a>) already do this.</p>\n<h3 id="fixed-headers">Fixed headers</h3>\n<p>To handle anchor links properly when you have a fixed header, I recommend using CSS similar to the following:</p>\n<pre><code class="hljs lang-css"><span class="hljs-selector-tag">h1</span>::before, <span class="hljs-selector-tag">h2</span>::before, <span class="hljs-selector-tag">h3</span>::before, <span class="hljs-selector-tag">h4</span>::before, <span class="hljs-selector-tag">h5</span>::before, <span class="hljs-selector-tag">h6</span>::before {\n    <span class="hljs-attribute">display</span>: block;\n    <span class="hljs-attribute">content</span>: <span class="hljs-string">" "</span>;\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">60px</span>;\n    <span class="hljs-attribute">margin-top</span>: -<span class="hljs-number">60px</span>;\n    <span class="hljs-attribute">visibility</span>: hidden;\n}\n</code></pre>\n<p>This is better than javascript solutions since it will work when javascript is disabled.</p>\n<h2 id="api">API</h2>\n<h3 id="options">Options</h3>\n<pre><code class="hljs lang-javascript"><span class="hljs-comment">// Where to render the table of contents.</span>\n<span class="hljs-string">tocSelector:</span> <span class="hljs-string">\'.js-toc\'</span>,\n<span class="hljs-comment">// Where to grab the headings to build the table of contents.</span>\n<span class="hljs-string">contentSelector:</span> <span class="hljs-string">\'.js-toc-content\'</span>,\n<span class="hljs-comment">// Which headings to grab inside of the contentSelector element.</span>\n<span class="hljs-string">headingSelector:</span> <span class="hljs-string">\'h1, h2, h3\'</span>,\n<span class="hljs-comment">// Headings that match the ignoreSelector will be skipped.</span>\n<span class="hljs-string">ignoreSelector:</span> <span class="hljs-string">\'.js-toc-ignore\'</span>,\n<span class="hljs-comment">// Main class to add to links.</span>\n<span class="hljs-string">linkClass:</span> <span class="hljs-string">\'toc-link\'</span>,\n<span class="hljs-comment">// Extra classes to add to links.</span>\n<span class="hljs-string">extraLinkClasses:</span> <span class="hljs-string">\'\'</span>,\n<span class="hljs-comment">// Class to add to active links,</span>\n<span class="hljs-comment">// the link corresponding to the top most heading on the page.</span>\n<span class="hljs-string">activeLinkClass:</span> <span class="hljs-string">\'is-active-link\'</span>,\n<span class="hljs-comment">// Main class to add to lists.</span>\n<span class="hljs-string">listClass:</span> <span class="hljs-string">\'toc-list\'</span>,\n<span class="hljs-comment">// Extra classes to add to lists.</span>\n<span class="hljs-string">extraListClasses:</span> <span class="hljs-string">\'\'</span>,\n<span class="hljs-comment">// Class that gets added when a list should be collapsed.</span>\n<span class="hljs-string">isCollapsedClass:</span> <span class="hljs-string">\'is-collapsed\'</span>,\n<span class="hljs-comment">// Class that gets added when a list should be able</span>\n<span class="hljs-comment">// to be collapsed but isn\'t necessarily collpased.</span>\n<span class="hljs-string">collapsibleClass:</span> <span class="hljs-string">\'is-collapsible\'</span>,\n<span class="hljs-comment">// Class to add to list items.</span>\n<span class="hljs-string">listItemClass:</span> <span class="hljs-string">\'toc-list-item\'</span>,\n<span class="hljs-comment">// How many heading levels should not be collpased.</span>\n<span class="hljs-comment">// For example, number 6 will show everything since</span>\n<span class="hljs-comment">// there are only 6 heading levels and number 0 will collpase them all.</span>\n<span class="hljs-comment">// The sections that are hidden will open</span>\n<span class="hljs-comment">// and close as you scroll to headings within them.</span>\n<span class="hljs-string">collapseDepth:</span> <span class="hljs-number">0</span>,\n<span class="hljs-comment">// Smooth scrolling enabled.</span>\n<span class="hljs-string">smoothScroll:</span> <span class="hljs-literal">true</span>,\n<span class="hljs-comment">// Smooth scroll duration.</span>\n<span class="hljs-string">smoothScrollDuration:</span> <span class="hljs-number">420</span>,\n<span class="hljs-comment">// Callback for scroll end (requires: smoothScroll).</span>\n<span class="hljs-string">scrollEndCallback:</span> function (e) {},\n<span class="hljs-comment">// Headings offset between the headings and the top of the document (this is meant for minor adjustments).</span>\n<span class="hljs-string">headingsOffset:</span> <span class="hljs-number">1</span>,\n<span class="hljs-comment">// Timeout between events firing to make sure it\'s</span>\n<span class="hljs-comment">// not too rapid (for performance reasons).</span>\n<span class="hljs-string">throttleTimeout:</span> <span class="hljs-number">50</span>,\n<span class="hljs-comment">// Element to add the positionFixedClass to.</span>\n<span class="hljs-string">positionFixedSelector:</span> <span class="hljs-literal">null</span>,\n<span class="hljs-comment">// Fixed position class to add to make sidebar fixed after scrolling</span>\n<span class="hljs-comment">// down past the fixedSidebarOffset.</span>\n<span class="hljs-string">positionFixedClass:</span> <span class="hljs-string">\'is-position-fixed\'</span>,\n<span class="hljs-comment">// fixedSidebarOffset can be any number but by default is set</span>\n<span class="hljs-comment">// to auto which sets the fixedSidebarOffset to the sidebar</span>\n<span class="hljs-comment">// element\'s offsetTop from the top of the document on init.</span>\n<span class="hljs-string">fixedSidebarOffset:</span> <span class="hljs-string">\'auto\'</span>,\n<span class="hljs-comment">// includeHtml can be set to true to include the HTML markup from the</span>\n<span class="hljs-comment">// heading node instead of just including the textContent.</span>\n<span class="hljs-string">includeHtml:</span> <span class="hljs-literal">false</span>,\n<span class="hljs-comment">// onclick function to apply to all links in toc. will be called with</span>\n<span class="hljs-comment">// the event as the first parameter, and this can be used to stop,</span>\n<span class="hljs-comment">// propagation, prevent default or perform action</span>\n<span class="hljs-string">onClick:</span> <span class="hljs-literal">false</span>,\n</code></pre>\n<h3 id="methods">Methods</h3>\n<h4 id="-init">.init</h4>\n<p>Initialize tocbot with an options object.</p>\n<pre><code class="hljs lang-javascript"><span class="hljs-selector-tag">tocbot</span><span class="hljs-selector-class">.init</span>(<span class="hljs-selector-tag">options</span>)\n</code></pre>\n<h4 id="-destroy">.destroy</h4>\n<p>Destroy tocbot and remove event listeners.</p>\n<pre><code class="hljs lang-javascript"><span class="hljs-selector-tag">tocbot</span><span class="hljs-selector-class">.destroy</span>()\n</code></pre>\n<h4 id="-refresh">.refresh</h4>\n<p>Refresh tocbot if the document changes and it needs to be rebuilt.</p>\n<pre><code class="hljs lang-javascript"><span class="hljs-selector-tag">tocbot</span><span class="hljs-selector-class">.refresh</span>()\n</code></pre>\n<h2 id="roadmap">Roadmap</h2>\n<ul>\n<li>More tests</li>\n<li>React.js support (make react support native without direct dom manipulation)</li>\n</ul>\n<h2 id="contributing">Contributing</h2>\n<p>Contributions and suggestions are welcome! Please feel free to open an issue if you run into a problem or have a feature request. I&#39;ll do my best to respond in a timely fashion.</p>\n<p>If you want to open a pull request just fork the repo but please make sure all tests and lint pass.</p>\n<h3 id="running-tests">Running Tests</h3>\n<h4 id="all-tests">All tests</h4>\n<pre><code class="hljs lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> <span class="hljs-built_in">test</span></span>\n</code></pre>\n<h4 id="with-debugger">With debugger</h4>\n<p>You can run tests through <a href="https://github.com/node-inspector/node-inspector">node-inspector</a>.</p>\n<p><a href="https://github.com/node-inspector/node-inspector/issues/950#issuecomment-264289415">For now, you may need to use node v6 or lower</a>...</p>\n<pre><code class="hljs lang-bash">nvm <span class="hljs-keyword">use</span> <span class="hljs-number">6</span>\n</code></pre>\n<p>Once you&#39;re on node v6 or lower:</p>\n<pre><code class="hljs lang-bash">npm install <span class="hljs-keyword">node</span><span class="hljs-title">-inspector</span>\n</code></pre>\n<p>Now that node-inspector is installed, you can run the tests!</p>\n<pre><code class="hljs lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> <span class="hljs-built_in">test</span>:debug</span>\n</code></pre>\n<h2 id="steps-to-publish">Steps to publish</h2>\n<ul>\n<li>Push a branch and open a pull request</li>\n<li>run <code>npm version &lt;patch|minor|major&gt;</code></li>\n<li>Update readme.md with notes</li>\n<li>Merge the pull request</li>\n<li>commit dist/</li>\n<li>run <code>npm publish</code></li>\n<li>make release on github</li>\n</ul>\n<h2 id="license">License</h2>\n<p><a href="&#39;http://opensource.org/licenses/MIT&#39;">MIT</a></p>\n',title:"Tocbot",dir:"pages",base:"_README.json",ext:".json",sourceBase:"README.md",sourceExt:".md"}}},[389]);
            return { page: comp.default }
          })
        