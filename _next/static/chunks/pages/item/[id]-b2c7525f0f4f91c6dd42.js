_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"20a2":function(e,t,n){e.exports=n("nOHt")},WdDX:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/item/[id]",function(){return n("dMU3")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var i=c(n("q1tI")),l=n("elyg"),s=n("nOHt"),o=n("vNVm"),a={};function d(e,t,n,r){if(e&&(0,l.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;a[t+"%"+n+(c?"%"+c:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),c=n&&n.pathname||"/",u=i.default.useMemo((function(){var t=(0,l.resolveHref)(c,e.href,!0),n=r(t,2),i=n[0],s=n[1];return{href:i,as:e.as?(0,l.resolveHref)(c,e.as):s||i}}),[c,e.href,e.as]),f=u.href,p=u.as,v=e.children,j=e.replace,m=e.shallow,b=e.scroll,h=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var x=i.Children.only(v),g=x&&"object"===typeof x&&x.ref,O=(0,o.useIntersection)({rootMargin:"200px"}),y=r(O,2),N=y[0],_=y[1],w=i.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);(0,i.useEffect)((function(){var e=_&&t&&(0,l.isLocalURL)(f),r="undefined"!==typeof h?h:n&&n.locale,c=a[f+"%"+p+(r?"%"+r:"")];e&&!c&&d(n,f,p,{locale:r})}),[p,f,_,h,t,n]);var M={ref:w,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,i,s,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:i,locale:o,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,n,f,p,j,m,b,h)},onMouseEnter:function(e){(0,l.isLocalURL)(f)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),d(n,f,p,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var E="undefined"!==typeof h?h:n&&n.locale,k=(0,l.getDomainLocale)(p,E,n&&n.locales,n&&n.domainLocales);M.href=k||(0,l.addBasePath)((0,l.addLocale)(p,E,n&&n.defaultLocale))}return i.default.cloneElement(x,M)};t.default=u},dMU3:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return o}));var r=n("nKUr"),c=(n("q1tI"),n("20a2")),i=n("YFqc"),l=n.n(i),s=function(){return Object(r.jsx)("div",{className:"h-screen flex justify-center place-items-center",children:Object(r.jsx)("h1",{className:"font-bold text-xl",children:"Loading..."})})},o=!0;t.default=function(e){var t,n,i,o=e.data;if(!o)return Object(r.jsx)(s,{});Object(c.useRouter)();var a=Math.round(null===o||void 0===o||null===(t=o.item)||void 0===t?void 0:t.ratings.avgStars),d=Array.from({length:a},(function(e,t){return t}));return Object(r.jsx)("div",{className:"md:p-12 bg-gray-100 min-h-screen ",children:Object(r.jsxs)("div",{className:" h-full relative",children:[Object(r.jsx)(l.a,{href:"/",children:Object(r.jsx)("a",{className:"inline-block absolute md:top-5 md:left-5  top-2 left-2 font-bold p-2 text-gray-100 cursor-pointer",children:"Go back"})}),Object(r.jsx)("div",{className:"bg-gray-800 rounded-xl  mx-2 overflow-hidden flex flex-1 justify-center",children:Object(r.jsx)("img",{src:null===(n=o.item)||void 0===n||null===(i=n.images)||void 0===i?void 0:i.icon,className:"object-cover ",alt:o.item.description})}),Object(r.jsxs)("div",{className:"p-4 flex-col  h-full",children:[Object(r.jsx)("h1",{className:"text-3xl font-bold my-5  ",children:o.item.name}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"inline font-bold text-lg",children:"Type:"}),Object(r.jsx)("p",{className:"inline",children:o.item.type})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"inline font-bold text-lg",children:"Description:"})," ",Object(r.jsx)("p",{className:"text-gray-800  text-sm inline-block ",children:o.item.description})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"inline font-bold text-lg",children:"Cost:"}),"  ",Object(r.jsx)("p",{className:"text-gray-800  text-sm inline",children:o.item.cost})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"inline font-bold text-lg",children:"Rarity:"})," ",Object(r.jsx)("p",{className:"text-gray-800  text-sm inline-block ",children:o.item.rarity})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"inline font-bold text-lg",children:"Series:"})," ",Object(r.jsx)("p",{className:"text-gray-800  text-sm inline-block ",children:o.item.series})]}),Object(r.jsxs)("div",{className:"flex text-center align-middle",children:[Object(r.jsx)("p",{className:"inline font-bold text-lg",children:"Stars: "})," ",null===d||void 0===d?void 0:d.map((function(e,t){return Object(r.jsx)("img",{src:"/icons/star.svg",width:"20"},t)})),"  ",Object(r.jsxs)("p",{className:"inline-block",children:["(",Math.round(o.item.ratings.avgStars),")"]})]})]})]},null===o||void 0===o?void 0:o.itemId)})}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,c=(0,i.useRef)(),a=(0,i.useState)(!1),d=r(a,2),u=d[0],f=d[1],p=(0,i.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,i=r.observer,l=r.elements;return l.set(e,t),i.observe(e),function(){l.delete(e),i.unobserve(e),0===l.size&&(i.disconnect(),o.delete(c))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return(0,i.useEffect)((function(){s||u||(0,l.default)((function(){return f(!0)}))}),[u]),[p,u]};var i=n("q1tI"),l=c(n("0G5g")),s="undefined"!==typeof IntersectionObserver;var o=new Map}},[["WdDX",0,2,1]]]);