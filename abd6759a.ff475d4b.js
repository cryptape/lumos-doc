(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{109:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(22),o=n(110);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},110:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},112:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(11),i=n(110),c=n(10),s=Object(r.createContext)({collectLink:function(){}}),u=n(109),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,p,b=e.isNavLink,d=e.to,f=e.href,m=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,h=void 0===v||v,w=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=Object(u.b)().withBaseUrl,y=Object(r.useContext)(s),k=d||f,N=Object(i.a)(k),x=null==k?void 0:k.replace("pathname://",""),C=void 0!==x?(n=x,h&&function(e){return e.startsWith("/")}(n)?g(n):n):void 0,P=Object(r.useRef)(!1),L=b?a.e:a.c,E=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&N&&window.docusaurus.prefetch(C),function(){E&&p&&p.disconnect()}}),[C,E,N]);var T=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,B=!C||!N||T;return C&&N&&!T&&!j&&y.collectLink(C),B?o.a.createElement("a",Object.assign({href:C},k&&!N&&{target:"_blank",rel:"noopener noreferrer"},w)):o.a.createElement(L,Object.assign({},w,{onMouseEnter:function(){P.current||(window.docusaurus.preload(C),P.current=!0)},innerRef:function(e){var t,n;E&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(C)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:C||""},b&&{isActive:O,activeClassName:m}))}},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(111)),i=n(109),c=n(112),s=["components"],u={id:"workflow",title:"Workflow"},l={unversionedId:"introduction/workflow",id:"introduction/workflow",isDocsHomePage:!1,title:"Workflow",description:"The development of a DApp generally follows the following basic steps:",source:"@site/docs\\introduction\\workflow.md",slug:"/introduction/workflow",permalink:"/lumos-doc/docs/introduction/workflow",editUrl:"https://github.com/cryptape/lumos-doc/tree/master/docs/introduction/workflow.md",version:"current",lastUpdatedAt:1624240703,sidebar:"sidebar2",previous:{title:"Lumos Components (Packages)",permalink:"/lumos-doc/docs/introduction/lumoscomponents"},next:{title:"Set Up the Development Environment",permalink:"/lumos-doc/docs/preparation/setupsystem"}},p=[],b={toc:p};function d(e){var t=e.components,n=Object(o.a)(e,s);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The development of a DApp generally follows the following basic steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Prepare the basic skills:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The basic knowledge on Nervos CKB. For more information, see ",Object(a.b)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/introduction"},"Nervos CKB Basics"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The knowledge of CKB Data Model. For more information, see ",Object(a.b)("a",{parentName:"p",href:"https://docs.nervos.org/docs/reference/introduction"},"Nervos CKB Reference")," and ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md"},"CKB Data Structure"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Programming skills of Node.js projects for desktop applications or server applications.")))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",null,"Set up the development environment.",Object(a.b)("p",{parentName:"li"},"For more information, see ",Object(a.b)(c.a,{to:Object(i.a)("/docs/preparation/setupsystem"),mdxType:"Link"},"Set Up the Development Environment"),"."))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",null,"Create CKB accounts for the development and testing.",Object(a.b)("p",{parentName:"li"},"For more information, see ",Object(a.b)(c.a,{to:Object(i.a)("/docs/preparation/createaccount"),mdxType:"Link"},"Create Accounts"),"."))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",null,"Initialize a project and add Lumos packages as dependencies to the project.",Object(a.b)("p",{parentName:"li"},"For more information about how to add Lumos packages to a project, see ",Object(a.b)(c.a,{to:Object(i.a)("/docs/guides/installlumos"),mdxType:"Link"},"Install Lumos Packages"),"."))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",null,"Establish the connection to the CKB network by setting up the config manager and the Lumos indexer.",Object(a.b)("br",null),"For more information about how to set up the config manager, see ",Object(a.b)(c.a,{to:Object(i.a)("/docs/guides/config"),mdxType:"Link"},"Set Up the Config Manger"),".",Object(a.b)("p",{parentName:"li"},"For more information about how to set up the Lumos indexer, see ",Object(a.b)(c.a,{to:Object(i.a)("/docs/guides/indexer"),mdxType:"Link"},"Set Up the Lumos Indexer"),"."))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",null,"Program the DApp functions by using Lumos to deal with user queries and transaction requests.",Object(a.b)("p",{parentName:"li"},"For more information about the usage of Lumos, see the sections in the Guides and Examples.")))))}d.isMDXComponent=!0}}]);