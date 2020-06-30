(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),l=(n(0),n(163)),c={id:"get_started",title:"\u5165\u95e8 Conflux",source_url:"https://github.com/Conflux-Chain/conflux-doc/blob/master/docs/get_started.md",custom_edit_url:"https://github.com/Conflux-Chain/zh-hans.developer.conflux-chain.org/edit/master/docs/conflux-doc/get_started.md",keywords:["conflux","started","running","full node"]},o={id:"conflux-doc/get_started",isDocsHomePage:!1,title:"\u5165\u95e8 Conflux",description:"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u8bbe\u7f6econflux\u5168\u8282\u70b9\u52a0\u5165testnet\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528Conflux\u94b1\u5305\u7ba1\u7406\u8d26\u6237\u3001\u8f6c\u79fbConflux\u4ee3\u5e01\u4ee5\u53ca\u90e8\u7f72\u667a\u80fd\u5408\u7ea6\u3002",source:"@site/docs/conflux-doc/get_started.md",permalink:"/docs/conflux-doc/get_started",editUrl:"https://github.com/Conflux-Chain/zh-hans.developer.conflux-chain.org/edit/master/docs/conflux-doc/get_started.md",lastUpdatedAt:1592548239,sidebar:"docs",previous:{title:"\u5b89\u88c5",permalink:"/docs/conflux-doc/installation"},next:{title:"\u53d1\u9001\u7b2c\u4e00\u7b14\u4ea4\u6613",permalink:"/docs/conflux-doc/send_transaction"}},b=[{value:"\u8fd0\u884cConflux\u5168\u8282\u70b9",id:"\u8fd0\u884cconflux\u5168\u8282\u70b9",children:[]},{value:"\u914d\u7f6eConflux\u5168\u8282\u70b9",id:"\u914d\u7f6econflux\u5168\u8282\u70b9",children:[]},{value:"\u8fd0\u884c\u6d4b\u8bd5",id:"\u8fd0\u884c\u6d4b\u8bd5",children:[]},{value:"\u4f7f\u7528Conflux\u7684\u7f51\u9875\u7aef\u94b1\u5305",id:"\u4f7f\u7528conflux\u7684\u7f51\u9875\u7aef\u94b1\u5305",children:[]}],i={rightToc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u8bbe\u7f6econflux\u5168\u8282\u70b9\u52a0\u5165testnet\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528Conflux\u94b1\u5305\u7ba1\u7406\u8d26\u6237\u3001\u8f6c\u79fbConflux\u4ee3\u5e01\u4ee5\u53ca\u90e8\u7f72\u667a\u80fd\u5408\u7ea6\u3002"),Object(l.b)("h2",{id:"\u8fd0\u884cconflux\u5168\u8282\u70b9"},"\u8fd0\u884cConflux\u5168\u8282\u70b9"),Object(l.b)("p",null,"\u9996\u5148\uff0c\u8bf7\u6309\u7167",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/conflux-doc/installation#Install"}),"\u5b89\u88c5"),"\u4e2d\u7684\u6307\u5bfc\u7f16\u8bd1\u6784\u5efa\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),Object(l.b)("p",null,"\u5982\u8981\u624b\u52a8\u542f\u52a8Conflux\uff0c\u9700\u8981\u7f16\u8f91\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\u3002 ",Object(l.b)("inlineCode",{parentName:"p"},"run/default.toml"),":"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6839\u636e\u60a8\u7684\u516c\u5171IP\u5730\u5740\u8bbe\u7f6e",Object(l.b)("inlineCode",{parentName:"li"},"public_address"),"\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7aef\u53e3\u5e94\u8bbe\u7f6e\u4e3a32323\u3002"),Object(l.b)("li",{parentName:"ul"},"\u5c06",Object(l.b)("inlineCode",{parentName:"li"},"mining_author"),"\u8bbe\u7f6e\u4e3a\u63a5\u6536\u6316\u77ff\u5956\u52b1\u7684\u8d26\u6237\u5730\u5740\u3002"),Object(l.b)("li",{parentName:"ul"},"Conflux\u56e2\u961f\u4e3a\u6d4b\u8bd5\u7f51\u7ef4\u62a4\u4e86\u4e00\u4e9b\u5168\u529f\u80fd\u8282\u70b9\uff0c\u5b83\u4eec\u4ee5",Object(l.b)("inlineCode",{parentName:"li"},"bootnodes"),'\u7684\u5f62\u5f0f\u63d0\u4f9b\u51fa\u6765\u3002 "bootnodes"\u3002\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u5176\u4ed6\u8282\u70b9\u6765\u5f15\u5bfc\u60a8\u65b0\u521b\u5efa\u7684\u8282\u70b9\uff0c\u60a8\u5e94\u5f53\u7f16\u8f91\u8be5\u6761\u76ee\u3002')),Object(l.b)("p",null,"\u4e4b\u540e\u60a8\u5c31\u53ef\u4ee5\u6309\u5982\u4e0b\u547d\u4ee4\u6267\u884c:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ cd run\n$ ../target/release/conflux --config default.toml\n")),Object(l.b)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u4f1a\u542f\u52a8\u5168\u8282\u70b9\u5e76\u4e0eConflux\u533a\u5757\u94fe\u6d4b\u8bd5\u7f51\u540c\u6b65\u3002"),Object(l.b)("p",null,"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u5728\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55( ",Object(l.b)("inlineCode",{parentName:"p"},"run")," ) \u4e2d\u4f1a\u521b\u5efa\u4e24\u4e2a\u65b0\u76ee\u5f55 (",Object(l.b)("inlineCode",{parentName:"p"},"blockchain_db")," \u548c ",Object(l.b)("inlineCode",{parentName:"p"},"net_config"),") \u4ee5\u7559\u5b58\u6570\u636e\u3002\u9664\u4e86\u6570\u636e\u635f\u574f\u6216\u60a8\u60f3\u542f\u7528\u4e00\u4e2a\u5168\u65b0\u7684\u8282\u70b9\u8fd9\u4e24\u79cd\u4f8b\u5916\u60c5\u51b5\uff0c\u4e0d\u8981\u5220\u9664\u5b83\u4eec\u3002"),Object(l.b)("p",null,"\u5982\u82e5\u8981\u91cd\u65b0\u542f\u52a8\u4e00\u4e2a\u8282\u70b9\uff0c\u53ea\u8981\u5728\u76f8\u540c\u7684\u76ee\u5f55\u4e0b\u8fd0\u884c\u76f8\u540c\u7684\u547d\u4ee4\u5373\u53ef\u3002"),Object(l.b)("h2",{id:"\u914d\u7f6econflux\u5168\u8282\u70b9"},"\u914d\u7f6eConflux\u5168\u8282\u70b9"),Object(l.b)("p",null,"Conflux\u53ef\u4ee5\u4f7f\u7528CLI\u9009\u9879\u6216\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u914d\u7f6e\u3002\u5982CLI\u6807\u5fd7\u548c\u914d\u7f6e\u6587\u4ef6\u5bf9\u67d0\u9879\u8bbe\u7f6e\u5b58\u5728\u5dee\u5f02\uff0c\u5219\u4f18\u5148\u4ee5CLI\u9009\u9879\u4e3a\u51c6\u3002 "),Object(l.b)("p",null,"\u914d\u7f6e\u6587\u4ef6\u9075\u5faa",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/toml-lang/toml"}),"TOML"),"\u683c\u5f0f\u3002\u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\u53ef\u4ee5\u901a\u8fc7CLI\u9009\u9879",Object(l.b)("inlineCode",{parentName:"p"},"--config path/to/conflux.toml"),"\u6765\u8bbe\u7f6e\u3002\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"run")," \u76ee\u5f55\u4e0b\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6 ",Object(l.b)("inlineCode",{parentName:"p"},"default.toml"),"\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u6240\u6709\u7684\u914d\u7f6e\u9009\u9879\uff0c\u60a8\u53ef\u4ee5\u4ece\u90a3\u91cc\u5f00\u59cb\u5b9a\u5236\u60a8\u7684\u914d\u7f6e\u3002"),Object(l.b)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c",Object(l.b)("inlineCode",{parentName:"p"},"$ ./conflux --help"),"\u6765\u5217\u51fa\u6240\u6709CLI\u9009\u9879\u3002\u7edd\u5927\u591a\u6570CLI\u9009\u9879\u90fd\u4f1a\u5bf9\u5e94\u5230TOML\u6587\u4ef6\u5185\u7684\u8bbe\u7f6e\uff0c\u4f8b\u5982",Object(l.b)("inlineCode",{parentName:"p"},"--public-address 127.0.0.1:32323"),"\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u6765\u8fdb\u884c\u8bbe\u7f6e\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-toml"}),'public_address="127.0.0.1:32323"\n')),Object(l.b)("p",null,"\u5982\u679c\u8981\u8bbe\u7f6e\u4e00\u4e2a\u8282\u70b9\u5e76\u8ba9\u5b83\u52a0\u5165Conflux\u4e3b\u7f51(testnet)\uff0c\u9700\u8981\u6b63\u786e\u8bbe\u7f6e",Object(l.b)("inlineCode",{parentName:"p"},"public_address"),"\u3002\u5b83\u5e94\u88ab\u8bbe\u7f6e\u4e3a\u4ece\u4e92\u8054\u7f51\u4e0a\u516c\u5f00\u8bbf\u95ee\u4f60\u8282\u70b9\u7684IP\u5730\u5740\u3002\u5982\u679c\u8282\u70b9\u88ab\u8986\u76d6\u4e8e\u516c\u5171\u7f51\u5173\u4e0b\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u5728",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.baidu.com"}),"\u767e\u5ea6"),'\u4e2d\u641c\u7d22"ip"\u6765\u83b7\u53d6\u516c\u5171\u5730\u5740\u3002'),Object(l.b)("p",null,"\u5982\u679c\u60f3\u8ba9\u8282\u70b9\u53c2\u4e0e\u5230\u6316\u77ff\u8fc7\u7a0b\u4e2d\u53bb\uff0c\u4f60\u9700\u8981\u5728\u8bbe\u7f6e",Object(l.b)("inlineCode",{parentName:"p"},"start_mining"),'\u4e3a"true"\u4ee5\u53ca',Object(l.b)("inlineCode",{parentName:"p"},"mining_author"),"\u4e3a\u63a5\u6536\u6316\u77ff\u5956\u52b1\u7684\u8d26\u6237\u5730\u5740\u6765\u542f\u7528\u5b83\u3002"),Object(l.b)("h2",{id:"\u8fd0\u884c\u6d4b\u8bd5"},"\u8fd0\u884c\u6d4b\u8bd5"),Object(l.b)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4f7f\u7528Rust\u7f16\u5199\u7684\u5355\u5143\u6d4b\u8bd5\u548c\u7528python\u7f16\u5199\u7684\u96c6\u6210\u6d4b\u8bd5\u6848\u4f8b\u3002\u8fd9\u5141\u8bb8\u4f60\u5728\u5bf9\u4ee3\u7801\u8fdb\u884c\u90e8\u5206\u4fee\u6539\u540e\uff0c\u901a\u8fc7\u8fd0\u884c\u8fd9\u4e9b\u6d4b\u8bd5\u68c0\u67e5\u7cfb\u7edf\u662f\u5426\u8fd8\u80fd\u6b63\u5e38\u8fd0\u884c\u3002"),Object(l.b)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u6309\u7167",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/conflux-doc/installation#install-test-dependencies"}),"\u5b89\u88c5\u6d4b\u8bd5\u4f9d\u8d56\u9879"),"\u7684\u6307\u5f15\u5b89\u88c5\u4f9d\u8d56\u9879\u3002"),Object(l.b)("p",null,"\u4e4b\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e0b\u6d4b\u8bd5\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Linux:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"  $ ./dev-support/test.sh\n")),Object(l.b)("p",{parentName:"li"},"  \u8fd9\u5c06\u81ea\u52a8\u8fd0\u884cRust\u4ee3\u7801\u4e2d\u7684\u5355\u5143\u6d4b\u8bd5\u548cpython\u6d4b\u8bd5\u3002")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Others:"),Object(l.b)("p",{parentName:"li"},"  To run unit tests in Rust:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"  $ cargo test --release --all\n")),Object(l.b)("p",{parentName:"li"},"  \u8fd0\u884cpython\u96c6\u6210\u6d4b\u8bd5\uff1a"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"  $ ./tests/test_all.py\n")))),Object(l.b)("h2",{id:"\u4f7f\u7528conflux\u7684\u7f51\u9875\u7aef\u94b1\u5305"},"\u4f7f\u7528Conflux\u7684\u7f51\u9875\u7aef\u94b1\u5305"),Object(l.b)("p",null,"\u60a8\u53ef\u4ee5\u8bbf\u95ee ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://wallet.confluxscan.io"}),"Conflux web wallet"),'\u5e76\u70b9\u51fb"\u521b\u5efa\u65b0\u94b1\u5305"\u6309\u94ae\u521b\u5efa\u4e00\u4e2a\u65b0\u94b1\u5305\u5e76\u5411\u60a8\u63d0\u4f9b\u4e86\u52a9\u8bb0\u8bcd\uff08\u7528\u4e8e\u6062\u590d\u94b1\u5305\uff09\u53ca\u5bc6\u7801\uff08\u5982\u679c\u5728\u60a8\u79bb\u5f00\u7535\u8111\u65f6\u9501\u5b9a\u4e86\u94b1\u5305\uff0c\u53ef\u4f7f\u7528\u5176\u8fdb\u884c\u89e3\u9501\u64cd\u4f5c\uff09\u3002\u4e00\u65e6\u94b1\u5305\u88ab\u521b\u5efa\uff0c\u4f60\u5c31\u53ef\u4ee5\u7ba1\u7406\u4f60\u7684\u8d26\u6237\u5730\u5740\uff0c\u53d1\u9001\u4ea4\u4ee5\u53ca\u90e8\u7f72\u667a\u80fd\u5408\u7ea6\u3002'),Object(l.b)("p",null,"\u60a8\u9700\u8981\u4f7f\u7528Conflux\u4ee3\u5e01\u4ee5\u53d1\u8d77\u94fe\u4e0a\u64cd\u4f5c\u3002\n\u60a8\u53ef\u4ee5\u5b9a\u671f\uff08\u6bcf\u5c0f\u65f61\u679aConflux\u4ee3\u5e01\uff09\u4ece\u6c34\u9f99\u5934\u8d26\u6237\u4e2d\u83b7\u53d6Conflux\u4ee3\u5e01\u3002\u901a\u8fc7\u5f39\u51fa\u4e00\u4e2a\u901a\u77e5\u63d0\u793a\u6846\uff0c\u544a\u77e5\u60a8\u83b7\u53d6\u4ee3\u5e01\u3002"),Object(l.b)("p",null,"\u5728\u5f00\u53d1\u8005\u6784\u5efa\u667a\u80fd\u8fd9\u4e00\u65b9\u9762\uff0c\u53ef\u4ee5\u4f7f\u7528",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://remix.ethereum.org"}),"remix"),'\u64b0\u5199\u5e76\u7f16\u8bd1\u60a8\u7684\u5408\u7ea6\u4ee5\u751f\u6210\u5b57\u8282\u7801\uff0c\u4e4b\u540e\u53ef\u4ee5\u901a\u8fc7\u590d\u5236\u7c98\u8d34\u5230\u94b1\u5305\u7684"Contract"\u9875\u9762\u89e6\u53d1\u5408\u7ea6\u3002'))}u.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,f=p["".concat(c,".").concat(s)]||p[s]||d[s]||l;return n?a.a.createElement(f,o(o({ref:t},i),{},{components:n})):a.a.createElement(f,o({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var i=2;i<l;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);