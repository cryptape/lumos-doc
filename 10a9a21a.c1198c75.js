(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{109:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return r}));var a=t(22),o=t(110);function i(){var e=Object(a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,c=void 0!==r&&r,l=i.absolute,s=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(c)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+u:u}(i,t,e,n)}}}function r(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},110:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return o}))},111:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(t),p=a,g=b["".concat(r,".").concat(p)]||b[p]||f[p]||i;return t?o.a.createElement(g,c(c({ref:n},s),{},{components:t})):o.a.createElement(g,c({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=t[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},112:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(11),r=t(110),c=t(10),l=Object(a.createContext)({collectLink:function(){}}),s=t(109),u=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]])}return t};n.a=function(e){var n,t,b,f=e.isNavLink,p=e.to,g=e.href,m=e.activeClassName,d=e.isActive,h=e["data-noBrokenLinkCheck"],O=e.autoAddBaseUrl,v=void 0===O||O,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(s.b)().withBaseUrl,y=Object(a.useContext)(l),w=p||g,C=Object(r.a)(w),x=null==w?void 0:w.replace("pathname://",""),L=void 0!==x?(t=x,v&&function(e){return e.startsWith("/")}(t)?N(t):t):void 0,M=Object(a.useRef)(!1),E=f?i.e:i.c,I=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!I&&C&&window.docusaurus.prefetch(L),function(){I&&b&&b.disconnect()}}),[L,I,C]);var k=null!==(n=null==L?void 0:L.startsWith("#"))&&void 0!==n&&n,T=!L||!C||k;return L&&C&&!k&&!h&&y.collectLink(L),T?o.a.createElement("a",Object.assign({href:L},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},j)):o.a.createElement(E,Object.assign({},j,{onMouseEnter:function(){M.current||(window.docusaurus.preload(L),M.current=!0)},innerRef:function(e){var n,t;I&&e&&C&&(n=e,t=function(){window.docusaurus.prefetch(L)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(n),b.disconnect(),t())}))}))).observe(n))},to:L||""},f&&{isActive:d,activeClassName:m}))}},113:function(e,n,t){"use strict";function a(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(o&&(o+=" "),o+=n);return o}},117:function(e,n,t){"use strict";var a=t(0),o=t(118);n.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},118:function(e,n,t){"use strict";var a=t(0),o=Object(a.createContext)(void 0);n.a=o},119:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(117),r=t(113),c=t(55),l=t.n(c),s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,b=e.values,f=e.groupId,p=e.className,g=Object(i.a)(),m=g.tabGroupChoices,d=g.setTabGroupChoices,h=Object(a.useState)(c),O=h[0],v=h[1],j=a.Children.toArray(e.children);if(null!=f){var N=m[f];null!=N&&N!==O&&b.some((function(e){return e.value===N}))&&v(N)}var y=function(e){v(e),null!=f&&d(f,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},p)},b.map((function(e){var n=e.value,t=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e)},onFocus:function(){return y(n)},onClick:function(){y(n)}},t)}))),n?Object(a.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},120:function(e,n,t){"use strict";var a=t(0),o=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},68:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return f})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return m}));var a=t(3),o=t(7),i=(t(0),t(111)),r=t(109),c=t(112),l=t(119),s=t(120),u=["components"],b={id:"config",title:"Set Up the Config Manager"},f={unversionedId:"guides/config",id:"guides/config",isDocsHomePage:!1,title:"Set Up the Config Manager",description:"The config manager  (@ckb-lumos/config-manager) supports to launch a DApp with a specific chain configuration. All the other components in Lumos can leverage the configuration from the config manager directly.",source:"@site/docs\\guides\\config.md",slug:"/guides/config",permalink:"/lumos-doc/docs/guides/config",editUrl:"https://github.com/cryptape/lumos-doc/tree/master/docs/guides/config.md",version:"current",lastUpdatedAt:1624240703,sidebar:"sidebar2",previous:{title:"Install Lumos Packages",permalink:"/lumos-doc/docs/guides/installlumos"},next:{title:"Set Up the Lumos Indexer",permalink:"/lumos-doc/docs/guides/indexer"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Set Up the Config Manager by Using Pre-defined Configurations",id:"set-up-the-config-manager-by-using-pre-defined-configurations",children:[]},{value:"Set Up the Config Manager by Using a Local Config File",id:"set-up-the-config-manager-by-using-a-local-config-file",children:[{value:"Step 1. Generate the config.json file for the DEV chain.",id:"step-1-generate-the-configjson-file-for-the-dev-chain",children:[]},{value:"<strong>Step 2. Set up the config manager in the DApp.</strong>",id:"step-2-set-up-the-config-manager-in-the-dapp",children:[]}]}],g={toc:p};function m(e){var n=e.components,t=Object(o.a)(e,u);return Object(i.b)("wrapper",Object(a.a)({},g,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The config manager  (",Object(i.b)("inlineCode",{parentName:"p"},"@ckb-lumos/config-manager"),") supports to launch a DApp with a specific chain configuration. All the other components in Lumos can leverage the configuration from the config manager directly."),Object(i.b)("p",null,"A DApp can set up the config manger by using ",Object(i.b)("strong",{parentName:"p"},"pre-defined configurations")," with the ",Object(i.b)("var",null,"LUMOS_CONFIG_NAME")," variable or ",Object(i.b)("strong",{parentName:"p"},"a local configuration file")," with the ",Object(i.b)("var",null,"LUMOS_CONFIG_FILE")," variable."),Object(i.b)(l.a,{defaultValue:"configname",values:[{label:"Pre-defined Configurations",value:"configname"},{label:"A Local Configuration File",value:"congfile"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"configname",mdxType:"TabItem"},"  ",Object(i.b)("p",null,Object(i.b)("ul",null,Object(i.b)("li",null,"The ",Object(i.b)("var",null,"LUMOS_CONFIG_NAME")," variable can take the ",Object(i.b)("code",null,"LINA")," value to launch the DApp with the pre-defined configurations of the ",Object(i.b)("b",null,"Mainnet")," network."),Object(i.b)("li",null,"The ",Object(i.b)("var",null,"LUMOS_CONFIG_NAME")," variable can take the ",Object(i.b)("code",null,"AGGRON4")," value to launch the DApp with the pre-defined configurations of the ",Object(i.b)("b",null,"Testnet")," network."))),Object(i.b)("p",null,"For more information, see ",Object(i.b)(c.a,{to:Object(r.a)("/docs/guides/config#set-up-the-config-manager-by-using-pre-defined-configurations"),mdxType:"Link"},"Set Up the Config Manager by Using Pre-defined Configurations"),".")),Object(i.b)(s.a,{value:"congfile",mdxType:"TabItem"},Object(i.b)("p",null,"The ",Object(i.b)("var",null,"LUMOS_CONFIG_FILE")," variable can take the value of a local config file name, for example, ",Object(i.b)("var",null,"config.json"),", to launch the DApp with the configurations of ",Object(i.b)("b",null,"DEV chain"),"."),Object(i.b)("p",null,"For more information, see ",Object(i.b)(c.a,{to:Object(r.a)("/docs/guides/config#set-up-the-config-manager-by-using-a-local-config-file"),mdxType:"Link"},"Set Up the Config Manager by Using a Local Config File"),"."))),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"The following prerequisites apply for setting up the config manager:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The development environment is set up."),Object(i.b)("p",{parentName:"li"},"For more information, see ",Object(i.b)(c.a,{to:Object(r.a)("/docs/preparation/setupsystem"),mdxType:"Link"},"Set Up the Development Environment"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"@ckb-lumos/config-manager")," package is installed."),Object(i.b)("p",{parentName:"li"},"For more information about how to install a Lumos package, see ",Object(i.b)(c.a,{to:Object(r.a)("/docs/guides/installlumos"),mdxType:"Link"},"Install Lumos Packages"),"."))),Object(i.b)("h2",{id:"set-up-the-config-manager-by-using-pre-defined-configurations"},"Set Up the Config Manager by Using Pre-defined Configurations"),Object(i.b)("p",null,"To launch the DApp with the pre-defined ",Object(i.b)("strong",{parentName:"p"},"Mainnet")," configurations, assign ",Object(i.b)("b",null,"LINA")," to the ",Object(i.b)("var",null,"LUMOS_CONFIG_NAME")," variable."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{3}","{3}":!0},'import { env } from "process";\nimport { getConfig, initializeConfig } from "@ckb-lumos/config-manager";\nenv.LUMOS_CONFIG_NAME = "LINA";\ninitializeConfig();\nexport const CONFIG = getConfig();\n')),Object(i.b)("p",null,"To launch the DApp with the pre-defined ",Object(i.b)("strong",{parentName:"p"},"Testnet")," configurations, assign ",Object(i.b)("strong",{parentName:"p"},"AGGRON4")," to the ",Object(i.b)("var",null,"LUMOS_CONFIG_NAME")," variable."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:"{3}","{3}":!0},'import { env } from "process";\nimport { getConfig, initializeConfig } from "@ckb-lumos/config-manager";\nenv.LUMOS_CONFIG_NAME = "AGGRON4";\ninitializeConfig();\nexport const CONFIG = getConfig();\n')),Object(i.b)("h2",{id:"set-up-the-config-manager-by-using-a-local-config-file"},"Set Up the Config Manager by Using a Local Config File"),Object(i.b)("p",null,"To launch the DApp on ",Object(i.b)("strong",{parentName:"p"},"DEV chain"),", assign a local config file to the ",Object(i.b)("var",null,"LUMOS_CONFIG_FILE")," variable. Lumos can read the configurations from the config file that is specified by the ",Object(i.b)("var",null,"LUMOS_CONFIG_FILE")," variable. "),Object(i.b)("p",null,"If the ",Object(i.b)("var",null,"LUMOS_CONFIG_FILE")," variable is unsigned, Lumos reads configurations from the ",Object(i.b)("inlineCode",{parentName:"p"},"config.json")," file in the current directory."),Object(i.b)("h3",{id:"step-1-generate-the-configjson-file-for-the-dev-chain"},"Step 1. Generate the config.json file for the DEV chain."),Object(i.b)(l.a,{defaultValue:"ubuntu",values:[{label:"Ubuntu 20.04",value:"ubuntu"},{label:"macOS",value:"macos"},{label:"Windows 10",value:"windows"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"ubuntu",mdxType:"TabItem"},Object(i.b)("p",null,"Download the config generator tool, ",Object(i.b)("a",{href:"https://github.com/classicalliu/lumos-config-generator/releases/download/v0.1.1/lumos-config-generator-linux-amd64"},"lumos-config-generator-linux-amd64")," for Linux platforms."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ wget https://github.com/classicalliu/lumos-config-generator/releases/download/v0.1.1/lumos-config-generator-linux-amd64\n")),Object(i.b)("p",null,"Run the ",Object(i.b)("b",null,"lumos-config-generator-linux-amd64")," file to generate the config.json file in the project root directory."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The CKB node must be running when executing the generator to generate the config file."))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ ./lumos-config-generator-linux-amd64 ../hellolumos/config.json http://127.0.0.1:8114\n")),Object(i.b)("p",null,"For more information, see the ",Object(i.b)("a",{href:"https://github.com/classicalliu/lumos-config-generator"},"Readme")," of the generator.")),Object(i.b)(s.a,{value:"macos",mdxType:"TabItem"},Object(i.b)("p",null,"Download the config generator tool, ",Object(i.b)("a",{href:"https://github.com/classicalliu/lumos-config-generator/releases/download/v0.1.1/lumos-config-generator-macos-amd64"},"lumos-config-generator-macos-amd64")," for macOS platforms."),Object(i.b)("p",null,"Run the ",Object(i.b)("b",null,"lumos-config-generator-macos-amd64")," file to generate the config.json file."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The CKB node must be running on DEV chain when executing the generator to generate the config file."))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ ./lumos-config-generator ../hellolumos/config.json http://127.0.0.1:8114\n")),Object(i.b)("p",null,"For more information, see the ",Object(i.b)("a",{href:"https://github.com/classicalliu/lumos-config-generator"},"Readme")," of the generator.")),Object(i.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(i.b)("p",null,"Download the config generator tool, ",Object(i.b)("a",{href:"https://github.com/classicalliu/lumos-config-generator/releases/download/v0.1.1/lumos-config-generator-windows-amd64.exe"},"lumos-config-generator-windows-amd64.exe")," for Windows platforms."),Object(i.b)("p",null,"Run the ",Object(i.b)("b",null,"lumos-config-generator-linux-amd64")," file to generate the config.json file."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The CKB node must be running when executing the generator to generate the config file."))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"> lumos-config-generator-windows-amd64 C:\\hellolumos\\config.json http://127.0.0.1:8114\n")),Object(i.b)("p",null,"For more information, see the ",Object(i.b)("a",{href:"https://github.com/classicalliu/lumos-config-generator"},"Readme")," of the generator."))),Object(i.b)("h3",{id:"step-2-set-up-the-config-manager-in-the-dapp"},Object(i.b)("strong",{parentName:"h3"},"Step 2. Set up the config manager in the DApp.")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/index.ts"',title:'"hellolumos/src/index.ts"'},'import { env } from "process";\nimport { getConfig, initializeConfig } from "@ckb-lumos/config-manager";\nenv.LUMOS_CONFIG_FILE = env.LUMOS_CONFIG_FILE || "./config.json";\ninitializeConfig();\nexport const CONFIG = getConfig();\n')))}m.isMDXComponent=!0}}]);