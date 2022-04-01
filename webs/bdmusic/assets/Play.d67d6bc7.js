import{h as _,J as S,K as A,o as f,b as E,j as u,L as k,u as t,t as U,k as e,M as N,a as d,C as V,N as m,q as I,O,P as D,Q as H,m as y,v as g,c as x,z as L,A as X,R as $}from"./vendor.f0661d71.js";import{f as M}from"./Date.dfd4e255.js";import{_ as q,s as F,g as C}from"./index.a04f80db.js";const a=h=>(L("data-v-709908a6"),h=h(),X(),h),J={class:"flex justify-center items-center w-full text-center"},K=a(()=>e("path",{d:"M19 9l-7 7-7-7","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),Q=[K],R={class:"w-10/12 text-ellipsis truncate"},W=a(()=>e("li",{class:"w-1/12 inline-flex justify-end"},[e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor","stroke-width":"1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),G={class:"CDdisk"},Y={class:"progress"},Z={class:"order-1 text-[#dadada] text-sm antialiased"},ee={class:"order-2 text-[#a5a5a5] text-sm"},se={class:"play"},te={class:"flex items-center justify-evenly"},oe=a(()=>e("li",null,[e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),le=a(()=>e("li",null,[e("svg",{class:"h-7 w-7",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),ae=a(()=>e("path",{d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),re=a(()=>e("path",{d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),ne=[ae,re],ie=a(()=>e("circle",{cx:"12",cy:"12",r:"9"},null,-1)),ce=a(()=>e("line",{x1:"10",x2:"10",y1:"15",y2:"9"},null,-1)),ue=a(()=>e("line",{x1:"14",x2:"14",y1:"15",y2:"9"},null,-1)),de=[ie,ce,ue],he=a(()=>e("path",{d:"M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),pe=[he],_e=a(()=>e("li",null,[e("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),fe=["src"],me=["src"],we=["src"],ve=$(" \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 audio \u5143\u7D20\u3002 "),ke={setup(h){let P=_();const r=_(),o=S({currentTime:0,duration:.01,musicOverTime:"00:00",musicCurrentTime:"00:00"});let w=_(0);const s=F(),T=l=>{switch(l.target.className){case"el-progress-bar__outer":case"el-progress-bar__inner":{r.value.pause();const n=l.target.parentNode.offsetWidth,i=l.offsetX/n,B=o.currentTime=i*o.duration;r.value.currentTime=B,r.value.play()}}},j=()=>{s.showPlay=!1},p=()=>{s.checkPlay=!1,r.value.pause()},v=()=>{r.value.play(),s.checkPlay=!0,o.duration=r.value.duration,o.musicOverTime=M(o.duration)},b=l=>{o.currentTime=l.target.currentTime,w.value=o.currentTime/o.duration*100,o.musicCurrentTime=M(o.currentTime)},z=()=>{r.value.pause(),C(s.playMusic.nextMusic).then(l=>{l.data[0].url&&(s.playMusic.musicUrl=l.data[0].url,s.showPlay=!0,s.checkPlay=!0,r.value.online=r.value.play)})};return A(()=>s.musicId,(l,n)=>{n&&p(),l&&C(l).then(c=>{s.playMusic.musicUrl=c.data[0].url})},{immediate:!0}),(l,n)=>(f(),E(t(U),{class:k([{hidden:!t(s).showPlay},"w-full mx-auto overflow-hidden h-screen absolute left-0 z-50 text-[#fff]"])},{default:u(()=>{var c;return[e("div",{ref_key:"img",ref:P,style:N(`background-image:url('${(c=t(s).playMusic.album)==null?void 0:c.blurPicUrl}?param=200y200')`),class:"bg bg-cover w-full h-full absolute -z-10 bg-center overflow-hidden blur-lg scale-125 transition-all duration-1000"},null,4),d(t(V),{class:"flex items-center relative px-3"},{default:u(()=>[e("ul",J,[e("li",{class:"w-1/12 inline-flex justify-start"},[e("svg",{class:"h-7 w-7",fill:"none",stroke:"currentColor","stroke-width":"1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",onClick:j},Q)]),e("li",R,m(t(s).playMusic.name),1),W])]),_:1}),d(t(I),{class:"px-3 py-0 flex justify-center items-center text-[#fff]"},{default:u(()=>{var i;return[e("div",G,[d(t(O),{class:k([{paused:!t(s).checkPlay,play:t(s).checkPlay},"ring-50 ring-black animate-spin-slow"]),size:230,src:`${(i=t(s).playMusic.album)==null?void 0:i.blurPicUrl}?param=200y200`},null,8,["class","src"])])]}),_:1}),d(t(D),{class:"h-1/6 flex flex-col justify-evenly text-[#fff]"},{default:u(()=>[e("div",Y,[d(t(H),{percentage:t(w),class:"flex space-x-6",color:"#ff0000",onClick:n[0]||(n[0]=i=>T(i))},{default:u(()=>[e("span",Z,m(t(o).musicCurrentTime),1),e("span",ee,m(t(o).musicOverTime),1)]),_:1},8,["percentage"])]),e("div",se,[e("ul",te,[oe,le,e("li",null,[y((f(),x("svg",{class:"h-14 w-14 stroke-1",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",onClick:v},ne,512)),[[g,!t(s).checkPlay]]),y((f(),x("svg",{class:"w-14 h-14",fill:"none",stroke:"#ffffff","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",onClick:p},de,512)),[[g,t(s).checkPlay]])]),e("li",null,[e("svg",{class:"h-7 w-7",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",onClick:z},pe)]),_e])])]),_:1}),e("audio",{ref_key:"audio",ref:r,onEnded:p,onPlaying:v,onTimeupdate:n[1]||(n[1]=i=>b(i)),src:t(s).playMusic.musicUrl,autoplay:"",hidden:"",controls:""},[e("source",{src:t(s).playMusic.musicUrl,type:"audio/ogg"},null,8,me),e("source",{src:t(s).playMusic.musicUrl,type:"audio/mpeg"},null,8,we),ve],40,fe)]}),_:1},8,["class"]))}};var Me=q(ke,[["__scopeId","data-v-709908a6"]]);export{Me as default};