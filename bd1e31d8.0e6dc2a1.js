(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{109:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var a=n(22),l=n(110);function c(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var c=void 0===a?{}:a,o=c.forcePrependBaseUrl,i=void 0!==o&&o,r=c.absolute,b=void 0!==r&&r;if(!n)return n;if(n.startsWith("#"))return n;if(Object(l.b)(n))return n;if(i)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+s:s}(c,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},110:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function l(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return l}))},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),s=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=r(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(o,".").concat(d)]||p[d]||u[d]||c;return n?l.a.createElement(h,i(i({ref:t},b),{},{components:n})):l.a.createElement(h,i({ref:t},b))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},112:function(e,t,n){"use strict";var a=n(0),l=n.n(a),c=n(11),o=n(110),i=n(10),r=Object(a.createContext)({collectLink:function(){}}),b=n(109),s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};t.a=function(e){var t,n,p,u=e.isNavLink,d=e.to,h=e.href,m=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],f=e.autoAddBaseUrl,g=void 0===f||f,v=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),k=Object(b.b)().withBaseUrl,y=Object(a.useContext)(r),w=d||h,T=Object(o.a)(w),N=null==w?void 0:w.replace("pathname://",""),C=void 0!==N?(n=N,g&&function(e){return e.startsWith("/")}(n)?k(n):n):void 0,_=Object(a.useRef)(!1),x=u?c.e:c.c,B=i.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!B&&T&&window.docusaurus.prefetch(C),function(){B&&p&&p.disconnect()}}),[C,B,T]);var D=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,K=!C||!T||D;return C&&T&&!D&&!j&&y.collectLink(C),K?l.a.createElement("a",Object.assign({href:C},w&&!T&&{target:"_blank",rel:"noopener noreferrer"},v)):l.a.createElement(x,Object.assign({},v,{onMouseEnter:function(){_.current||(window.docusaurus.preload(C),_.current=!0)},innerRef:function(e){var t,n;B&&e&&T&&(t=e,n=function(){window.docusaurus.prefetch(C)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:C||""},u&&{isActive:O,activeClassName:m}))}},113:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}},117:function(e,t,n){"use strict";var a=n(0),l=n(118);t.a=function(){var e=Object(a.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},118:function(e,t,n){"use strict";var a=n(0),l=Object(a.createContext)(void 0);t.a=l},119:function(e,t,n){"use strict";var a=n(0),l=n.n(a),c=n(117),o=n(113),i=n(55),r=n.n(i),b=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,u=e.groupId,d=e.className,h=Object(c.a)(),m=h.tabGroupChoices,O=h.setTabGroupChoices,j=Object(a.useState)(i),f=j[0],g=j[1],v=a.Children.toArray(e.children);if(null!=u){var k=m[u];null!=k&&k!==f&&p.some((function(e){return e.value===k}))&&g(k)}var y=function(e){g(e),null!=u&&O(u,e)},w=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(o.a)("tabs__item",r.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},120:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return l.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(3),l=n(7),c=(n(0),n(111)),o=n(109),i=n(112),r=n(119),b=n(120),s=["components"],p={id:"ckbnode",title:"CKB Nodes and Networks"},u={unversionedId:"reference/ckbnode",id:"reference/ckbnode",isDocsHomePage:!1,title:"CKB Nodes and Networks",description:"The CKB nodes used in the DApp development are full nodes that are the verifiers of the CKB network. A CKB full node verifies new blocks and transactions, relays blocks and transactions, and selects the chain fork on which it agrees.",source:"@site/docs\\reference\\ckbnode.md",slug:"/reference/ckbnode",permalink:"/lumos-doc/docs/reference/ckbnode",editUrl:"https://github.com/cryptape/lumos-doc/tree/master/docs/reference/ckbnode.md",version:"current",lastUpdatedAt:1625021749,sidebar:"sidebar2",previous:{title:"Manage Accounts",permalink:"/lumos-doc/docs/guides/manageaccounts"},next:{title:"CKB Accounts and Capacity",permalink:"/lumos-doc/docs/reference/ckbaccount"}},d=[{value:"CKB Networks",id:"ckb-networks",children:[]},{value:"Installation Options",id:"installation-options",children:[]},{value:"Install a CKB Node by Using Tippy",id:"install-a-ckb-node-by-using-tippy",children:[]},{value:"Install a CKB Node by Using the Pre-built Installer Package",id:"install-a-ckb-node-by-using-the-pre-built-installer-package",children:[{value:"Step 1. Download the CKB pre-built installer package.",id:"step-1-download-the-ckb-pre-built-installer-package",children:[]},{value:"Step 2. Verify the CKB tool are working and check versions.",id:"step-2-verify-the-ckb-tool-are-working-and-check-versions",children:[]},{value:"Step 3. Run the CKB node.",id:"step-3-run-the-ckb-node",children:[]}]}],h={toc:d};function m(e){var t=e.components,n=Object(l.a)(e,s);return Object(c.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The CKB nodes used in the DApp development are ",Object(c.b)("strong",{parentName:"p"},"full nodes")," that are the verifiers of the CKB network. A CKB full node verifies new blocks and transactions, relays blocks and transactions, and selects the chain fork on which it agrees."),Object(c.b)("h2",{id:"ckb-networks"},"CKB Networks"),Object(c.b)("p",null,"A CKB node can be set up to connect and interact with one of the following CKB networks:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Mainnet (Lina)"),": Mainnet is the main CKB public network. The real-time information of the Lina Mainnet can be checked on the ",Object(c.b)("a",{parentName:"p",href:"https://explorer.nervos.org/"},"CKB Explorer")," page.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Testnet (Aggron4)"),": Testnet is used to test applications integration and smart contracts in real environment with actual data. "),Object(c.b)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"For the first time to run a node on the ",Object(c.b)("strong",{parentName:"p"},"Testnet"),", syncing data requires upwards of one hour for the current number (",Object(c.b)("strong",{parentName:"p"},"1,300,000+"),") of blocks depending on the network connection. The real-time block number on the Testnet can be checked on the ",Object(c.b)("a",{parentName:"p",href:"https://explorer.nervos.org/aggron"},"CKB Explorer")," page.",Object(c.b)("br",null))))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"DEV Chain"),":  DEV chain is a local blockchain that provides an efficient and useful development mode for building and testing applications."))),Object(c.b)("h2",{id:"installation-options"},"Installation Options"),Object(c.b)("p",null,"There are two options for installing a CKB node:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},Object(c.b)(i.a,{to:Object(o.a)("/docs/reference/ckbnode#install-a-ckb-node-by-using-tippy"),mdxType:"Link"},"Install a CKB node by using Tippy"))),Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Tippy")," is a tool that helps set up and manage CKB nodes. It can install and start running a CKB node by one simple click.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)(i.a,{to:Object(o.a)("/docs/reference/ckbnode#install-a-ckb-node-by-using-the-pre-built-installer-package"),mdxType:"Link"},"Install a CKB node by using the pre-built installer package"),Object(c.b)("p",{parentName:"li"},"The pre-built installer package contains the following tools: "),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"ckb"),": The ckb tool is the main tool that initiates configurations, run CKB nodes, synching block data and mining. ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"ckb-cli"),": ckb-cli is a command line tool that provides the functions of RPC requests, creating CKB addresses, managing wallets, sending transactions, and depositing to Nervos DAO etc."))))),Object(c.b)("h2",{id:"install-a-ckb-node-by-using-tippy"},"Install a CKB Node by Using Tippy"),Object(c.b)("p",null,"Tippy supports to install and manage CKB nodes on all major platforms including Linux, macOS, and Windows."),Object(c.b)(r.a,{defaultValue:"ubuntu",values:[{label:"Ubuntu 20.04",value:"ubuntu"},{label:"macOS",value:"macos"},{label:"Windows 10",value:"windows"}],mdxType:"Tabs"},Object(c.b)(b.a,{value:"ubuntu",mdxType:"TabItem"},Object(c.b)("p",null,Object(c.b)("b",null,"Step 1. Download Tippy.")),Object(c.b)("p",null,"Download the ",Object(c.b)("b",null,"tippy-linux-x64.tar.gz")," file and unzip it. By default, the files are unzipped into the tippy-linux-x64 folder. All versions of Tippy can be found on the ",Object(c.b)("a",{href:"https://github.com/nervosnetwork/tippy/releases"},Object(c.b)("i",{class:"feather icon-download"}),"Tippy Releases")," page."),Object(c.b)("p",null,Object(c.b)("b",null,"Step 2. Make Tippy executable and run Tippy.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash",metastring:"{1-3}","{1-3}":!0},"$ chmod +x ./tippy-linux-x64/Tippy\n$ cd tippy-linux-x64\n$ ./Tippy\n")),Object(c.b)("p",null,"If a desktop GUI is installed, double click the Tippy file under the tippy-linux-x64 folder to run Tippy."),Object(c.b)("p",null,"A web page on ",Object(c.b)("a",null,"http://localhost:5000/Home")," will be opened in a browser after the execution or the double click. If the page is not opened, open the browser and type ",Object(c.b)("a",null,"http://localhost:5000/Home")," in the address field to access the Tippy web UI."),Object(c.b)("p",null,Object(c.b)("b",null,"Step 3. Create a CKB chain.")),Object(c.b)("p",null,Object(c.b)("b",null,"DEV chain")," is the recommended network for the later examples and CKB starters. For more information about CKB networks, see ",Object(c.b)(i.a,{to:Object(o.a)("/docs/reference/ckbnode#ckb-networks"),mdxType:"Link"},"CKB Networks"),"."),Object(c.b)("p",null,"To create a CKB node on ",Object(c.b)("b",null,"DEV chain"),", click the ",Object(c.b)("b",null,"Launch a CKB devnet instantly")," button on the home page."),Object(c.b)("img",{src:Object(o.a)("img/tippycreate.png")}),Object(c.b)("p",null,"To create a CKB node on the ",Object(c.b)("b",null,"other")," networks, click ",Object(c.b)("b",null,"Create a customized chain")," to choose the network in the ",Object(c.b)("b",null,"Chain Type")," dropdown list of the ",Object(c.b)("b",null,"Create Chain")," form."),Object(c.b)("p",null,"The CKB node starts running just after it is created. It can be stopped or restarted on the Tippy ",Object(c.b)("b",null,"Dashboard"),". Details of blocks and transactions of the chain can be checked on the ",Object(c.b)("b",null,"Blocks")," and ",Object(c.b)("b",null,"Transactions")," pages that are visible when the node is started."),Object(c.b)("b",null,"Step 4. Shorten DEV chain epoch and block interval."),Object(c.b)("p",null,"An epoch is a period of time for a set of blocks. To develop and test transactions with lock period like DAO operations, the ",Object(c.b)("code",null,"genesis_epoch_length")," and the ",Object(c.b)("code",null,"permanent_difficulty_in_dummy")," parameters in the ",Object(c.b)("b",null,"dev.toml")," file can be adjusted to shorten the chain epoch."),Object(c.b)("p",null,"The default value for the ",Object(c.b)("code",null,"genesis_epoch_length")," parameter is 1000 meaning that an epoch is the time for producing 1,000 blocks."),Object(c.b)("p",null,"When ",Object(c.b)("code",null,"permanent_difficulty_in_dummy")," is set to ",Object(c.b)("var",null,"true"),", all epochs skip the difficulty adjustment. This parameter is typically used in combination with ",Object(c.b)("code",null,"genesis_epoch_length"),"."),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"The chain specific configuration files like dev.toml and data files are located in Home/.config/Tippy/chain-",Object(c.b)("var",null,"number"),"."))),Object(c.b)("p",null,"To shorten DEV chain epoch and block interval:"),Object(c.b)("ol",null,Object(c.b)("li",null,Object(c.b)("p",null,"Stop the DEV chain and delete the data files of the chain."),Object(c.b)("p",null,"$HOME/.config/Tippy/chain-",Object(c.b)("var",null,"number"),"/data"),Object(c.b)("p",null,"$HOME/.config/Tippy/chain-",Object(c.b)("var",null,"number"),"/indexer-data")),Object(c.b)("li",null,Object(c.b)("p",null,"Modify the value for ",Object(c.b)("code",null,"genesis_epoch_length")," and ",Object(c.b)("code",null,"permanent_difficulty_in_dummy")," in the dev.toml file."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-toml",metastring:'title="$HOME/.config/Tippy/chain-number/specs/dev.toml"',title:'"$HOME/.config/Tippy/chain-number/specs/dev.toml"'},'genesis_epoch_length = 10  # The unit of meansurement is "block".\npermanent_difficulty_in_dummy = true\n'))),Object(c.b)("li",null,Object(c.b)("p",null,"Modify the value for ",Object(c.b)("code",null,"value")," under the ",Object(c.b)("code",null,"miner.workers")," section  in the ",Object(c.b)("b",null,"ckb-miner.toml")," file."),Object(c.b)("p",null,"The default mining interval is 5,000 milliseconds (5 seconds). That means a new block is generated at intervals of every 5 seconds."),Object(c.b)("p",null,"To modify the value in the [miner.workers] section to generate a new block every second (1,000 milliseconds):"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-toml",metastring:'title="$HOME/.config/Tippy/chain-number/ckb-miner.toml" {4}',title:'"$HOME/.config/Tippy/chain-number/ckb-miner.toml"',"{4}":!0},'[[miner.workers]]\nworker_type = "Dummy"\ndelay_type = "Constant"\nvalue = 1000\n'))),Object(c.b)("li",null,Object(c.b)("p",null,"Restart the DEV chain on Tippy Dashboard.")))),Object(c.b)(b.a,{value:"macos",mdxType:"TabItem"},Object(c.b)("p",null,Object(c.b)("b",null,"Step 1. Download Tippy.")),Object(c.b)("p",null,Object(c.b)("ul",null,Object(c.b)("li",null,"Download the ",Object(c.b)("b",null,"Tippy.dmg")," file. All versions of Tippy can be found on the ",Object(c.b)("a",{href:"https://github.com/nervosnetwork/tippy/releases"},Object(c.b)("i",{class:"feather icon-download"}),"Tippy Releases")," page."),Object(c.b)("li",null,"Open the Tippy.dmg file and drag ",Object(c.b)("b",null,"Tippy.app")," to the Applications folder."))),Object(c.b)("p",null,Object(c.b)("b",null,"Step 2. Run Tippy.")),Object(c.b)("p",null,"Click Tippy.app in the Applications folder to run Tippy."),Object(c.b)("p",null,"A web page on ",Object(c.b)("a",null,"http://localhost:5000/Home")," will be opened in a browser after the execution or the double click. If the page is not opened, open the browser and type ",Object(c.b)("a",null,"http://localhost:5000/Home")," in the address field to access the Tippy web UI."),Object(c.b)("p",null,Object(c.b)("b",null,"Step 3. Create a CKB chain.")),Object(c.b)("p",null,Object(c.b)("b",null,"DEV chain")," is the recommended network for the later examples and CKB starters. For more information about CKB networks, see ",Object(c.b)(i.a,{to:Object(o.a)("/docs/reference/ckbnode#ckb-networks"),mdxType:"Link"},"CKB Networks"),"."),Object(c.b)("p",null,"To create a CKB node on ",Object(c.b)("b",null,"DEV chain"),", click the ",Object(c.b)("b",null,"Launch a CKB devnet instantly")," button on the home page."),Object(c.b)("img",{src:Object(o.a)("img/tippycreate.png")}),Object(c.b)("p",null,"To create a CKB node on the ",Object(c.b)("b",null,"other")," networks, click ",Object(c.b)("b",null,"Create a customized chain")," to choose the network in the ",Object(c.b)("b",null,"Chain Type")," dropdown list of the ",Object(c.b)("b",null,"Create Chain")," form."),Object(c.b)("p",null,"The CKB node starts running just after it is created. It can be stopped or restarted on the Dashboard. Details of blocks and transactions of the chain can be checked on the Blocks and Transaction pages."),Object(c.b)("b",null,"Step 4. Shorten DEV chain epoch and block interval."),Object(c.b)("p",null,"An epoch is a period of time for a set of blocks. To develop and test transactions with lock period like DAO operations, the ",Object(c.b)("code",null,"genesis_epoch_length")," and the ",Object(c.b)("code",null,"permanent_difficulty_in_dummy")," parameters in the ",Object(c.b)("b",null,"dev.toml")," file can be adjusted to shorten the chain epoch."),Object(c.b)("p",null,"The default value for the ",Object(c.b)("code",null,"genesis_epoch_length")," parameter is 1000 meaning that an epoch is the time for producing 1,000 blocks."),Object(c.b)("p",null,"When ",Object(c.b)("code",null,"permanent_difficulty_in_dummy")," is set to ",Object(c.b)("var",null,"true"),", all epochs skip the difficulty adjustment. This parameter is typically used in combination with ",Object(c.b)("code",null,"genesis_epoch_length"),"."),Object(c.b)("p",null,"To shorten DEV chain epoch and block interval:"),Object(c.b)("ol",null,Object(c.b)("li",null,Object(c.b)("p",null,"Stop the DEV chain and delete the data files of the chain."),Object(c.b)("p",null,"~/Libary/Application Support/Tippy/chain-",Object(c.b)("var",null,"number"),"/data"),Object(c.b)("p",null,"~/Libary/Application Support/Tippy/chain-",Object(c.b)("var",null,"number"),"/indexer-data")),Object(c.b)("li",null,Object(c.b)("p",null,"Modify the value for ",Object(c.b)("code",null,"genesis_epoch_length")," and ",Object(c.b)("code",null,"permanent_difficulty_in_dummy")," in the dev.toml file."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-toml",metastring:'title="~/Libary/Application Support/Tippy/chain-number/specs/dev.toml"',title:'"~/Libary/Application','Support/Tippy/chain-number/specs/dev.toml"':!0},'genesis_epoch_length = 10  # The unit of meansurement is "block".\npermanent_difficulty_in_dummy = true\n'))),Object(c.b)("li",null,Object(c.b)("p",null,"Modify the value for ",Object(c.b)("code",null,"value")," under the ",Object(c.b)("code",null,"miner.workers")," section  in the ",Object(c.b)("b",null,"ckb-miner.toml")," file."),Object(c.b)("p",null,"The default mining interval is 5,000 milliseconds (5 seconds). That means a new block is generated at intervals of every 5 seconds."),Object(c.b)("p",null,"To modify the value in the [miner.workers] section to generate a new block every second (1,000 milliseconds):"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-toml",metastring:'title="~/Libary/Application Support/Tippy/chain-number/ckb-miner.toml" {4}',title:'"~/Libary/Application','Support/Tippy/chain-number/ckb-miner.toml"':!0,"{4}":!0},'[[miner.workers]]\nworker_type = "Dummy"\ndelay_type = "Constant"\nvalue = 1000\n'))),Object(c.b)("li",null,Object(c.b)("p",null,"Restart the DEV chain on Tippy Dashboard.")))),Object(c.b)(b.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("p",null,Object(c.b)("b",null,"Step 1. Download Tippy.")),Object(c.b)("p",null,"Download the ",Object(c.b)("b",null,"tippy-win-x64.zip")," file and unzip the file. By default, the files are unzipped into the tippy-win-x64 folder. All versions can be found on the ",Object(c.b)("a",{href:"https://github.com/nervosnetwork/tippy/releases"},Object(c.b)("i",{class:"feather icon-download"}),"Tippy Releases")," page."),Object(c.b)("p",null,Object(c.b)("b",null,"Step 2. Run Tippy.")),Object(c.b)("p",null,"Double click the Tippy.exe file under the tippy-win-x64 folder to run Tippy."),Object(c.b)("p",null,"A web page on ",Object(c.b)("a",null,"http://localhost:5000/Home")," will be opened in a browser after the double click. If the page is not opened, open the browser and type ",Object(c.b)("a",null,"http://localhost:5000/Home")," in the address field to access the Tippy web UI."),Object(c.b)("p",null,Object(c.b)("b",null,"Step 3. Create a CKB chain.")),Object(c.b)("p",null,Object(c.b)("b",null,"DEV chain")," is the recommended network for the later examples and CKB starters. For more information about CKB networks, see ",Object(c.b)(i.a,{to:Object(o.a)("/docs/reference/ckbnode#ckb-networks"),mdxType:"Link"},"CKB Networks"),"."),Object(c.b)("p",null,"To create a CKB node on ",Object(c.b)("b",null,"DEV chain"),", click the ",Object(c.b)("b",null,"Launch a CKB devnet instantly")," button on the home page."),Object(c.b)("img",{src:Object(o.a)("img/tippycreate.png")}),Object(c.b)("p",null,"To create a CKB node on the ",Object(c.b)("b",null,"other")," networks, click ",Object(c.b)("b",null,"Create a customized chain")," to choose the network in the ",Object(c.b)("b",null,"Chain Type")," dropdown list of the ",Object(c.b)("b",null,"Create Chain")," form."),Object(c.b)("p",null,"The CKB node starts running just after it is created. It can be stopped or restarted on the Dashboard. Details of blocks and transactions of the chain can be checked on the Blocks and Transaction pages."),Object(c.b)("b",null,"Step 4. Shorten DEV chain epoch and block interval."),Object(c.b)("p",null,"An epoch is a period of time for a set of blocks. To develop and test transactions with lock period like DAO operations, the ",Object(c.b)("code",null,"genesis_epoch_length")," and the ",Object(c.b)("code",null,"permanent_difficulty_in_dummy")," parameters in the ",Object(c.b)("b",null,"dev.toml")," file can be adjusted to shorten the chain epoch."),Object(c.b)("p",null,"The default value for the ",Object(c.b)("code",null,"genesis_epoch_length")," parameter is 1000 meaning that an epoch is the time for producing 1,000 blocks."),Object(c.b)("p",null,"When ",Object(c.b)("code",null,"permanent_difficulty_in_dummy")," is set to ",Object(c.b)("var",null,"true"),", all epochs skip the difficulty adjustment. This parameter is typically used in combination with ",Object(c.b)("code",null,"genesis_epoch_length"),"."),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"The chain specific configuration files and data files are located in C:/Users/",Object(c.b)("var",null,"username"),"/AppData/Roaming/Tippy/chain-",Object(c.b)("var",null,"number"),". "))),Object(c.b)("p",null,"To shorten DEV chain epoch and block interval:"),Object(c.b)("ol",null,Object(c.b)("li",null,Object(c.b)("p",null,"Stop the DEV chain and delete the data files of the chain."),Object(c.b)("p",null,"C:/Users/",Object(c.b)("var",null,"username"),"/AppData/Roaming/Tippy/chain-",Object(c.b)("var",null,"number"),"/data"),Object(c.b)("p",null,"C:/Users/",Object(c.b)("var",null,"username"),"/AppData/Roaming/Tippy/chain-",Object(c.b)("var",null,"number"),"/indexer-data")),Object(c.b)("li",null,Object(c.b)("p",null,"Modify the value for ",Object(c.b)("code",null,"genesis_epoch_length")," and ",Object(c.b)("code",null,"permanent_difficulty_in_dummy")," in the dev.toml file."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-toml",metastring:'title="C:/Users/username/AppData/Roaming/Tippy/chain-number/specs/dev.toml"',title:'"C:/Users/username/AppData/Roaming/Tippy/chain-number/specs/dev.toml"'},'genesis_epoch_length = 10  # The unit of meansurement is "block".\npermanent_difficulty_in_dummy = true\n'))),Object(c.b)("li",null,Object(c.b)("p",null,"Modify the value for ",Object(c.b)("code",null,"value")," under the ",Object(c.b)("code",null,"miner.workers")," section  in the ",Object(c.b)("b",null,"ckb-miner.toml")," file."),Object(c.b)("p",null,"The default mining interval is 5,000 milliseconds (5 seconds). That means a new block is generated at intervals of every 5 seconds."),Object(c.b)("p",null,"To modify the value in the [miner.workers] section to generate a new block every second (1,000 milliseconds):"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-toml",metastring:'title="C:/Users/username/AppData/Roaming/Tippy/chain-number/ckb-miner.toml" {4}',title:'"C:/Users/username/AppData/Roaming/Tippy/chain-number/ckb-miner.toml"',"{4}":!0},'[[miner.workers]]\nworker_type = "Dummy"\ndelay_type = "Constant"\nvalue = 1000\n'))),Object(c.b)("li",null,Object(c.b)("p",null,"Restart the DEV chain on Tippy Dashboard."))))),Object(c.b)("h2",{id:"install-a-ckb-node-by-using-the-pre-built-installer-package"},"Install a CKB Node by Using the Pre-built Installer Package"),Object(c.b)("h3",{id:"step-1-download-the-ckb-pre-built-installer-package"},"Step 1. Download the CKB pre-built installer package."),Object(c.b)(r.a,{defaultValue:"ubuntu",values:[{label:"Ubuntu 20.04",value:"ubuntu"},{label:"macOS",value:"macos"},{label:"Windows 10",value:"windows"}],mdxType:"Tabs"},Object(c.b)(b.a,{value:"ubuntu",mdxType:"TabItem"},Object(c.b)("p",null,"Download the ",Object(c.b)("b",null,"ckb_v0.",Object(c.b)("var",null,"xx.x"),"_x86_64-unknown-linux-gnu.tar.gz")," file and unzip the file."),Object(c.b)("p",null,"The following commands download the 0.39.0 version and unzip the file into the ckb_v0.39.0_x86_64-unknown-linux-gnu folder. All releases can be found on the ",Object(c.b)("a",{title:"Download",href:"https://github.com/nervosnetwork/ckb/releases"},Object(c.b)("i",{class:"feather icon-download"}),"CKB releases")," page."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ curl -LO https://github.com/nervosnetwork/ckb/releases/download/v0.39.0/ckb_v0.39.0_x86_64-unknown-linux-gnu.tar.gz\n$ tar xzf ckb_v0.39.0_x86_64-unknown-linux-gnu.tar.gz\n"))),Object(c.b)(b.a,{value:"macos",mdxType:"TabItem"},Object(c.b)("p",null,"Download the ",Object(c.b)("b",null,"ckb_v0.",Object(c.b)("var",null,"xx.x"),"_x86_64-unknown-apple-darwin.zip")," file."),Object(c.b)("p",null,"The following command downloads the 0.39.0 version. All releases can be found on the ",Object(c.b)("a",{title:"Download",href:"https://github.com/nervosnetwork/ckb/releases"},Object(c.b)("i",{class:"feather icon-download"}),"CKB releases")," page."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash",metastring:"{1}","{1}":!0},"$ curl -LO https://github.com/nervosnetwork/ckb/releases/download/v0.39.0/ckb_v0.39.0_x86_64-apple-darwin.zip\n")),Object(c.b)("p",null,"Double-click the ckb_v0.39.0_x86_64-apple-darwin.zip file to unzip it.")),Object(c.b)(b.a,{value:"windows",mdxType:"TabItem"},Object(c.b)("p",null,"Download the ",Object(c.b)("b",null,"ckb_v0.",Object(c.b)("var",null,"xx.x"),"_x86_64-pc-windows-msvc.zip")," file and unzip the file."),Object(c.b)("p",null,"This guide downloads and uses the 0.39.0 version. All releases can be found on the ",Object(c.b)("a",{title:"Download",href:"https://github.com/nervosnetwork/ckb/releases"},Object(c.b)("i",{class:"feather icon-download"}),"CKB releases")," page."))),Object(c.b)("h3",{id:"step-2-verify-the-ckb-tool-are-working-and-check-versions"},"Step 2. Verify the CKB tool are working and check versions."),Object(c.b)("p",null,"To verify the CKB tool, navigate into the unzipped folder where the ckb tool locates and execute the following command:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash",metastring:"{1}","{1}":!0},"ckb -V\nckb 0.39.0\n")),Object(c.b)("h3",{id:"step-3-run-the-ckb-node"},"Step 3. Run the CKB node."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"DEV chain")," is the recommended network for the later examples and CKB starters. For more information about CKB networks, see ",Object(c.b)(i.a,{to:Object(o.a)("/docs/reference/ckbnode#ckb-networks"),mdxType:"Link"},"CKB Networks"),"."),Object(c.b)(r.a,{defaultValue:"dev",values:[{label:"DEV Chain",value:"dev"},{label:"Testnet",value:"testnet"},{label:"Mainnet",value:"mainnet"}],mdxType:"Tabs"},Object(c.b)(b.a,{value:"dev",mdxType:"TabItem"},Object(c.b)("p",null,Object(c.b)("b",null,"1. Initialize the CKB node on the DEV blockchain.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash",metastring:"{1}","{1}":!0},"ckb init -C devnet -c dev\nWARN: mining feature is disabled because of lacking the block assembler config options\nInitialized CKB directory in devnet\ncreate specs/dev.toml\ncreate ckb.toml\ncreate ckb-miner.toml\ncreate default.db-options\n")),Object(c.b)("p",null,Object(c.b)("b",null,"2. Shorten DEV chain epoch and block interval.")),Object(c.b)("ul",null,Object(c.b)("li",null,Object(c.b)("p",null,"Modify ",Object(c.b)("code",null,"genesis_epoch_length")," and ",Object(c.b)("code",null,"permanent_difficulty_in_dummy")," in the devnet/specs/",Object(c.b)("b",null,"dev.toml")," config file that was created in the initialization step."),Object(c.b)("p",null,"To modify ",Object(c.b)("code",null,"genesis_epoch_length")," and ",Object(c.b)("code",null,"permanent_difficulty_in_dummy"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-toml",metastring:'title="devnet/specs/dev.toml"',title:'"devnet/specs/dev.toml"'},'genesis_epoch_length = 10  # The unit of meansurement is "block".\npermanent_difficulty_in_dummy = true\n'))),Object(c.b)("li",null,Object(c.b)("p",null,"Modify the ",Object(c.b)("code",null,"value")," parameter under the ",Object(c.b)("code",null,"miner.workers")," section  in the ",Object(c.b)("b",null,"ckb-miner.toml")," file."),Object(c.b)("p",null,"The default mining interval is 5,000 milliseconds (5 seconds). That means a new block is generated at intervals of every 5 seconds."),Object(c.b)("p",null,"To modify the value in the [miner.workers] section to generate a new block every second (1,000 milliseconds):"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-toml",metastring:'title="devnet/ckb-miner.toml" {4}',title:'"devnet/ckb-miner.toml"',"{4}":!0},'[[miner.workers]]\nworker_type = "Dummy"\ndelay_type = "Constant"\nvalue = 1000\n')))),Object(c.b)("p",null,Object(c.b)("b",null,"3. Start the CKB node on DEV chain.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash",metastring:"{1}","{1}":!0},"ckb run -C devnet\n"))),Object(c.b)(b.a,{value:"testnet",mdxType:"TabItem"},Object(c.b)("p",null,Object(c.b)("b",null,"1. Initialize the Testnet node.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash",metastring:"{1}","{1}":!0},"ckb init --chain testnet -C testnet\nWARN: mining feature is disabled because of lacking the block assembler config options\nInitialized CKB directory in testnet\ncreate ckb.toml\ncreate ckb-miner.toml\n")),Object(c.b)("p",null,Object(c.b)("b",null,"2. Start the CKB Testnet node.")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"For the first time to run a node on the ",Object(c.b)("strong",{parentName:"p"},"Testnet"),", syncing data requires upwards of one hour for the current number (",Object(c.b)("strong",{parentName:"p"},"1,300,000+"),") of blocks depending on the network connection. The real-time block number on the Testnet can be checked on the ",Object(c.b)("a",{parentName:"p",href:"https://explorer.nervos.org/aggron"},"CKB Explorer")," page.",Object(c.b)("br",null)))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash",metastring:"{1}","{1}":!0},"ckb run -C testnet\n"))),Object(c.b)(b.a,{value:"mainnet",mdxType:"TabItem"},Object(c.b)("p",null,Object(c.b)("b",null,"1. Initialize the Mainnet node.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash",metastring:"{1}","{1}":!0},"ckb init --chain mainnet -C mainnet\nWARN: mining feature is disabled because of lacking the block assembler config options\nInitialized CKB directory in mainnet\ncreate ckb.toml\ncreate ckb-miner.toml\n")),Object(c.b)("p",null,Object(c.b)("b",null,"2. Start the CKB Mainnet node.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash",metastring:"{1}","{1}":!0},"ckb run -C mainnet\n")))))}m.isMDXComponent=!0}}]);