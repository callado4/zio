"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8164],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"concurrent",title:"Concurrent State Management",sidebar_label:"Concurrent"},c=void 0,i={unversionedId:"reference/state/concurrent",id:"reference/state/concurrent",title:"Concurrent State Management",description:"In concurrent programming, we can categorize state management into two general approaches:",source:"@site/docs/reference/state/concurrent-state-management.md",sourceDirName:"reference/state",slug:"/reference/state/concurrent",permalink:"/reference/state/concurrent",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/state/concurrent-state-management.md",tags:[],version:"current",frontMatter:{id:"concurrent",title:"Concurrent State Management",sidebar_label:"Concurrent"},sidebar:"reference-sidebar",previous:{title:"Sequential",permalink:"/reference/state/sequential"},next:{title:"Global Shared State",permalink:"/reference/state/global-shared-state"}},s={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In concurrent programming, we can categorize state management into two general approaches:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/reference/state/global-shared-state"},"Global Shared State")),"- ZIO provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref")," data type for managing global states that are shared across all fibers and can be updated and accessed concurrently.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/reference/state/fiber-local-state"},"Fiber-local State")),"\u2014 ZIO provides two data types called ",(0,a.kt)("inlineCode",{parentName:"p"},"Fiberref")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ZState")," that can be used to maintain the state in a concurrent environment, but each fiber has its own state. Their states are not shared between other fibers. This prevents them from clobbering each other's state."))))}u.isMDXComponent=!0}}]);