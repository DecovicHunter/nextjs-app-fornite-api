_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"20a2":function(e,t,i){e.exports=i("nOHt")},WdDX:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/item/[id]",function(){return i("dMU3")}])},dMU3:function(e,t,i){"use strict";i.r(t),i.d(t,"__N_SSG",(function(){return r}));var n=i("nKUr"),s=(i("q1tI"),i("20a2")),l=function(){return Object(n.jsx)("div",{className:"h-screen flex justify-center place-items-center",children:Object(n.jsx)("h1",{className:"font-bold text-xl",children:"Loading..."})})},c=function(e){var t=e.title,i=e.value;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{className:"inline font-bold text-lg",children:[t,": "]}),Object(n.jsxs)("p",{className:"inline",children:[" ",i," "]})]})},r=!0;t.default=function(e){var t,i,r,a=e.item;if(!a)return Object(n.jsx)(l,{});var o=Object(s.useRouter)(),d=Math.round(null===a||void 0===a||null===(t=a.item)||void 0===t?void 0:t.ratings.avgStars),j=Array.from({length:d},(function(e,t){return t}));return Object(n.jsx)("div",{className:"md:p-12 bg-gray-100 min-h-screen ",children:Object(n.jsxs)("div",{className:" h-full relative",children:[Object(n.jsx)("a",{onClick:function(){return o.back()},className:"inline-block absolute md:top-5 md:left-5  top-2 left-2 font-bold p-2 text-gray-100 cursor-pointer",children:"Go back"}),Object(n.jsx)("div",{className:"bg-gray-800 rounded-2xl m-2 overflow-hidden flex flex-1 justify-center",children:Object(n.jsx)("img",{src:null===(i=a.item)||void 0===i||null===(r=i.images)||void 0===r?void 0:r.icon,className:"object-cover ",alt:a.item.description})}),Object(n.jsxs)("div",{className:"p-4 flex-col  h-full",children:[Object(n.jsx)("h1",{className:"text-4xl font-bold my-4 ",children:a.item.name}),Object(n.jsx)(c,{title:"Type",value:a.item.type}),Object(n.jsx)(c,{title:"Description",value:a.item.description}),Object(n.jsx)(c,{title:"Cost",value:a.item.cost}),Object(n.jsx)(c,{title:"Rarity",value:a.item.rarity}),Object(n.jsx)(c,{title:"Series",value:a.item.series}),Object(n.jsxs)("div",{className:"flex text-center align-middle",children:[Object(n.jsxs)("p",{className:"inline font-bold text-lg",children:["Stars",Object(n.jsxs)("p",{className:"inline-block",children:["(",Math.round(a.item.ratings.avgStars),")"]}),":"]}),null===j||void 0===j?void 0:j.map((function(e){return Object(n.jsx)("img",{src:"/nextjs-app-fornite-api/icons/star.svg",width:"20"},e)})),"  "]})]})]},null===a||void 0===a?void 0:a.itemId)})}}},[["WdDX",0,2,1]]]);