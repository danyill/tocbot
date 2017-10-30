
          window.__NEXT_REGISTER_PAGE('/changelog', function() {
            var comp = module.exports=webpackJsonp([5],{365:function(e,n,t){e.exports=t(366)},366:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(6),d=o(i),s=t(177),l=o(s),h=t(182),r=o(h),c=t(183),a=o(c),u=t(388),p=o(u),m=function(e){return d.default.createElement(l.default,{title:a.default.title,subtitle:"Changelog",description:a.default.description,stylesheets:a.default.stylesheets,topLinks:a.default.topLinks,bodyHtml:p.default.bodyHtml,repo:a.default.repo,user:a.default.user,siteId:a.default.siteId,extraElements:d.default.createElement(r.default,null)})};n.default=m},388:function(e,n){e.exports={bodyContent:"## Changelog\n\n\n\n### 3.0.6\n\n##### Fixed\n- Edge / IE 11 should work better now\n\n\n### 3.0.5\n\n##### Fixed\n- Readme updates\n- Add onclick handler option\n\n\n### 3.0.4\n\n##### Added\n- Worked on improving testing, no user facing changes\n\n\n### 3.0.3\n\n##### Changed\n- Get next.js v3 working for exporting the project page\n\n##### Added\n- Updated readme to explain how to handle fixed headers [#58](https://github.com/tscanlin/tocbot/issues/58)\n- Add note about excluding smooth scroll from certain elements\n\n\n#### 3.0.2\n\n##### Changed\n- Added dist files to address [#55](https://github.com/tscanlin/tocbot/issues/55)\n\n\n#### 3.0.1\n\n##### Changed\n- Using [next-export](https://github.com/tscanlin/next-export) for deployments now.\n\n\n#### 3.0.0\n\n##### **BREAKING CHANGE**\n- Switched from using smooth-scroll to [zenzcroll](https://github.com/zengabor/zenscroll) for reasons.. [#40](https://github.com/tscanlin/tocbot/issues/40)\n\n##### Added\n- Using [standard](https://github.com/feross/standard) for code styling now.\n\n\n### 2.X.X\n\n#### 2.4.0\n\n##### Docs\n- Moved toc on the project page to the right side to emphasize content more. Added `.toc-right` class for this.\n- Switched to using [next.js](https://github.com/zeit/next.js) with [processmd](https://github.com/tscanlin/processmd) for the website and removed old build scripts.\n- Removed optimizely/oui and added tachyons.\n- Moved changelog into it's own markdown file.\n- Build to `\\static` instead of `\\build`.\n\n##### Added\n- Added `src/components` with the template used for the website. This can now be more easily reused by other projects.\n\n##### Fixed\n- Fix test commands to work better\n\n\n#### 2.3.2\n\n##### Fixed\n- [patch] Fix for smooth-scroll callback to work properly. [#36](https://github.com/tscanlin/tocbot/issues/36)\n- [patch] Fix for cdnjs to update properly. [#35](https://github.com/tscanlin/tocbot/issues/35)\n\n\n#### 2.3.1\n\n##### Fixed\n- [patch] Fix for clicking svgs to not throw an exception. [#33](https://github.com/tscanlin/tocbot/issues/33)\n\n\n#### 2.3.0\n\n##### Changed\n- [patch] Fix for proper header not being selected due to sub-pixel rounding issues. [#31](https://github.com/tscanlin/tocbot/pull/31)\n- [dev] Updated test commands to be able to selectively run tests and debug them more easily. [#29](https://github.com/tscanlin/tocbot/pull/29)\n\n\n#### 2.2.2\n\n##### Changed\n- [patch] Removed updateUrl option from docs since it doesn't work, see: [smooth-scroll #283](https://github.com/cferdinandi/smooth-scroll/pull/283).\n\n\n#### 2.2.1\n\n##### Added\n- [patch] Made bower.json reference unminified file.\n\n\n#### 2.2.0\n\n##### Added\n- [minor] Added bower.json to provide bower support.\n\n\n#### 2.1.5\n\n##### Added\n- [patch] Added `overflow-y: auto` to the `.toc selector so that it scrolls` (#17).\n- [dev] Added to deploy script to commit /dist files to master.\n- [dev] Added to package.json for cdnjs.\n\n\n#### 2.1.4\n\n##### Added\n- [patch] `includeHtml` option to mirror markup from the headings in the TOC (#14).\n- [patch] `listItemClass` will be omitted if an empty string in passed.\n- [dev] `test:watch` command.\n- [dev] more tests.\n\n\n#### 2.1.3\n\n##### Added\n- [patch] `listItemClass` option to set classes on list items (#12).\n\n\n#### 2.1.2\n\n##### Fixed\n- [patch] prevent errors from being thrown when elements are not present and add tests.\n\n\n#### 2.1.1\n\n##### Changed\n- [patch] update file size estimates in the docs.\n- [patch] switch from throwing errors to using console.warn.\n\n\n#### 2.1.0\n\n##### Added\n- [minor] add `positionFixedSelector` option to specify the element to add a fixed position class to.\n- [dev] use travis-ci for builds.\n\n\n#### 2.0.0\n\n##### Added\n- [major] smooth-scroll is included by default now.\n- [patch] throttling support to improve performance, also the `throttleTimeout` option.\n- [patch] new \"try it now\" option on documentation site.\n\n##### Changed\n- [minor] broke up scss files and separate tocbot styles better.\n- [minor] default option for `contentSelector` to be `.js-toc-content`.\n- [minor] default option for `ignoreSelector` to be `.js-toc-ignore`.\n- [minor] default option for `collapsibleClass` to be `.is-collapsible`.\n- [patch] reorder `default-options.js`.\n- [patch] update documentation.\n\n##### Removed\n- [patch] dependency on classList to improve browser support.\n\n##### Fixed\n- [minor] new and improved tests using jsdom.\n- [dev] switched from gulp to npm scripts.\n- [dev] switched from browserify to webpack.\n- [dev] switched from swig to react for building the documentation.\n\n\n\n### 1.X.X\n\n#### 1.0.0\n- First published source code.",bodyHtml:'<h2 id="changelog">Changelog</h2>\n<h3 id="3-0-6">3.0.6</h3>\n<h5 id="fixed">Fixed</h5>\n<ul>\n<li>Edge / IE 11 should work better now</li>\n</ul>\n<h3 id="3-0-5">3.0.5</h3>\n<h5 id="fixed">Fixed</h5>\n<ul>\n<li>Readme updates</li>\n<li>Add onclick handler option</li>\n</ul>\n<h3 id="3-0-4">3.0.4</h3>\n<h5 id="added">Added</h5>\n<ul>\n<li>Worked on improving testing, no user facing changes</li>\n</ul>\n<h3 id="3-0-3">3.0.3</h3>\n<h5 id="changed">Changed</h5>\n<ul>\n<li>Get next.js v3 working for exporting the project page</li>\n</ul>\n<h5 id="added">Added</h5>\n<ul>\n<li>Updated readme to explain how to handle fixed headers <a href="https://github.com/tscanlin/tocbot/issues/58">#58</a></li>\n<li>Add note about excluding smooth scroll from certain elements</li>\n</ul>\n<h4 id="3-0-2">3.0.2</h4>\n<h5 id="changed">Changed</h5>\n<ul>\n<li>Added dist files to address <a href="https://github.com/tscanlin/tocbot/issues/55">#55</a></li>\n</ul>\n<h4 id="3-0-1">3.0.1</h4>\n<h5 id="changed">Changed</h5>\n<ul>\n<li>Using <a href="https://github.com/tscanlin/next-export">next-export</a> for deployments now.</li>\n</ul>\n<h4 id="3-0-0">3.0.0</h4>\n<h5 id="-breaking-change-"><strong>BREAKING CHANGE</strong></h5>\n<ul>\n<li>Switched from using smooth-scroll to <a href="https://github.com/zengabor/zenscroll">zenzcroll</a> for reasons.. <a href="https://github.com/tscanlin/tocbot/issues/40">#40</a></li>\n</ul>\n<h5 id="added">Added</h5>\n<ul>\n<li>Using <a href="https://github.com/feross/standard">standard</a> for code styling now.</li>\n</ul>\n<h3 id="2-x-x">2.X.X</h3>\n<h4 id="2-4-0">2.4.0</h4>\n<h5 id="docs">Docs</h5>\n<ul>\n<li>Moved toc on the project page to the right side to emphasize content more. Added <code>.toc-right</code> class for this.</li>\n<li>Switched to using <a href="https://github.com/zeit/next.js">next.js</a> with <a href="https://github.com/tscanlin/processmd">processmd</a> for the website and removed old build scripts.</li>\n<li>Removed optimizely/oui and added tachyons.</li>\n<li>Moved changelog into it&#39;s own markdown file.</li>\n<li>Build to <code>\\static</code> instead of <code>\\build</code>.</li>\n</ul>\n<h5 id="added">Added</h5>\n<ul>\n<li>Added <code>src/components</code> with the template used for the website. This can now be more easily reused by other projects.</li>\n</ul>\n<h5 id="fixed">Fixed</h5>\n<ul>\n<li>Fix test commands to work better</li>\n</ul>\n<h4 id="2-3-2">2.3.2</h4>\n<h5 id="fixed">Fixed</h5>\n<ul>\n<li>[patch] Fix for smooth-scroll callback to work properly. <a href="https://github.com/tscanlin/tocbot/issues/36">#36</a></li>\n<li>[patch] Fix for cdnjs to update properly. <a href="https://github.com/tscanlin/tocbot/issues/35">#35</a></li>\n</ul>\n<h4 id="2-3-1">2.3.1</h4>\n<h5 id="fixed">Fixed</h5>\n<ul>\n<li>[patch] Fix for clicking svgs to not throw an exception. <a href="https://github.com/tscanlin/tocbot/issues/33">#33</a></li>\n</ul>\n<h4 id="2-3-0">2.3.0</h4>\n<h5 id="changed">Changed</h5>\n<ul>\n<li>[patch] Fix for proper header not being selected due to sub-pixel rounding issues. <a href="https://github.com/tscanlin/tocbot/pull/31">#31</a></li>\n<li>[dev] Updated test commands to be able to selectively run tests and debug them more easily. <a href="https://github.com/tscanlin/tocbot/pull/29">#29</a></li>\n</ul>\n<h4 id="2-2-2">2.2.2</h4>\n<h5 id="changed">Changed</h5>\n<ul>\n<li>[patch] Removed updateUrl option from docs since it doesn&#39;t work, see: <a href="https://github.com/cferdinandi/smooth-scroll/pull/283">smooth-scroll #283</a>.</li>\n</ul>\n<h4 id="2-2-1">2.2.1</h4>\n<h5 id="added">Added</h5>\n<ul>\n<li>[patch] Made bower.json reference unminified file.</li>\n</ul>\n<h4 id="2-2-0">2.2.0</h4>\n<h5 id="added">Added</h5>\n<ul>\n<li>[minor] Added bower.json to provide bower support.</li>\n</ul>\n<h4 id="2-1-5">2.1.5</h4>\n<h5 id="added">Added</h5>\n<ul>\n<li>[patch] Added <code>overflow-y: auto</code> to the <code>.toc selector so that it scrolls</code> (#17).</li>\n<li>[dev] Added to deploy script to commit /dist files to master.</li>\n<li>[dev] Added to package.json for cdnjs.</li>\n</ul>\n<h4 id="2-1-4">2.1.4</h4>\n<h5 id="added">Added</h5>\n<ul>\n<li>[patch] <code>includeHtml</code> option to mirror markup from the headings in the TOC (#14).</li>\n<li>[patch] <code>listItemClass</code> will be omitted if an empty string in passed.</li>\n<li>[dev] <code>test:watch</code> command.</li>\n<li>[dev] more tests.</li>\n</ul>\n<h4 id="2-1-3">2.1.3</h4>\n<h5 id="added">Added</h5>\n<ul>\n<li>[patch] <code>listItemClass</code> option to set classes on list items (#12).</li>\n</ul>\n<h4 id="2-1-2">2.1.2</h4>\n<h5 id="fixed">Fixed</h5>\n<ul>\n<li>[patch] prevent errors from being thrown when elements are not present and add tests.</li>\n</ul>\n<h4 id="2-1-1">2.1.1</h4>\n<h5 id="changed">Changed</h5>\n<ul>\n<li>[patch] update file size estimates in the docs.</li>\n<li>[patch] switch from throwing errors to using console.warn.</li>\n</ul>\n<h4 id="2-1-0">2.1.0</h4>\n<h5 id="added">Added</h5>\n<ul>\n<li>[minor] add <code>positionFixedSelector</code> option to specify the element to add a fixed position class to.</li>\n<li>[dev] use travis-ci for builds.</li>\n</ul>\n<h4 id="2-0-0">2.0.0</h4>\n<h5 id="added">Added</h5>\n<ul>\n<li>[major] smooth-scroll is included by default now.</li>\n<li>[patch] throttling support to improve performance, also the <code>throttleTimeout</code> option.</li>\n<li>[patch] new &quot;try it now&quot; option on documentation site.</li>\n</ul>\n<h5 id="changed">Changed</h5>\n<ul>\n<li>[minor] broke up scss files and separate tocbot styles better.</li>\n<li>[minor] default option for <code>contentSelector</code> to be <code>.js-toc-content</code>.</li>\n<li>[minor] default option for <code>ignoreSelector</code> to be <code>.js-toc-ignore</code>.</li>\n<li>[minor] default option for <code>collapsibleClass</code> to be <code>.is-collapsible</code>.</li>\n<li>[patch] reorder <code>default-options.js</code>.</li>\n<li>[patch] update documentation.</li>\n</ul>\n<h5 id="removed">Removed</h5>\n<ul>\n<li>[patch] dependency on classList to improve browser support.</li>\n</ul>\n<h5 id="fixed">Fixed</h5>\n<ul>\n<li>[minor] new and improved tests using jsdom.</li>\n<li>[dev] switched from gulp to npm scripts.</li>\n<li>[dev] switched from browserify to webpack.</li>\n<li>[dev] switched from swig to react for building the documentation.</li>\n</ul>\n<h3 id="1-x-x">1.X.X</h3>\n<h4 id="1-0-0">1.0.0</h4>\n<ul>\n<li>First published source code.</li>\n</ul>\n',title:"Changelog",dir:"pages",base:"_CHANGELOG.json",ext:".json",sourceBase:"CHANGELOG.md",sourceExt:".md"}}},[365]);
            return { page: comp.default }
          })
        