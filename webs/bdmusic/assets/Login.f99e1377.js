import{i as m,J as x,o as g,b as h,j as s,u as e,y as w,a as t,x as y,S as i,T as p,B as c,U as V,V as v,W as E,z as k,A as I,R as b,X as r,k as B}from"./vendor.2628e9e8.js";import{_ as C,s as S,l as j}from"./index.96812608.js";const M=n=>(k("data-v-c8f3790e"),n=n(),I(),n),R=M(()=>B("span",{class:"text-lg sm:text-xl"},"\u540E\u53F0\u7CFB\u7EDF\u7BA1\u7406-\u6B22\u8FCE\u767B\u5F55",-1)),U=b("\u767B\u5F55 "),N={setup(n){const d=S(),f=m(),l=x({phone:"",password:""}),_=async(u,o)=>{if(u.length!==11){r.error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7");return}if(o.length<6){r.error("\u5BC6\u7801\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E6\u4F4D");return}if(!u||!o){r.error("\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u548C\u5BC6\u7801");return}const a=await j(u,encodeURIComponent(o));a.code===200?(d.userInfo=a.profile,r({message:"\u6B22\u8FCE\u4F60\uFF1A"+a.profile.nickname,type:"success"}),await f.replace("/")):r({message:"\u767B\u5F55\u5931\u8D25"+a.msg,type:"error"})};return(u,o)=>(g(),h(e(w),{class:"block"},{default:s(()=>[t(e(y),{class:"flex flex-col w-11/12 mx-auto"},{default:s(()=>[t(e(p),null,{default:s(()=>[t(e(i),{class:"text-center loginTitle"},{default:s(()=>[R]),_:1})]),_:1}),t(e(p),{justify:"center"},{default:s(()=>[t(e(i),{span:20},{default:s(()=>[t(e(c),{modelValue:e(l).phone,"onUpdate:modelValue":o[0]||(o[0]=a=>e(l).phone=a),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801","prefix-icon":e(V),autofocus:!0,maxlength:11,"show-word-limit":!0,class:"text-base login-input"},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1}),t(e(p),{justify:"center"},{default:s(()=>[t(e(i),{span:20},{default:s(()=>[t(e(c),{modelValue:e(l).password,"onUpdate:modelValue":o[1]||(o[1]=a=>e(l).password=a),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801","prefix-icon":e(v),"show-password":!0,minlength:6,maxlength:16,class:"text-base login-input"},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1}),t(e(p),{justify:"center"},{default:s(()=>[t(e(i),{span:20},{default:s(()=>[t(e(E),{type:"primary",class:"w-full h-10 bg-[#409EFF]",onClick:o[2]||(o[2]=a=>_(e(l).phone,e(l).password))},{default:s(()=>[U]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};var L=C(N,[["__scopeId","data-v-c8f3790e"]]);export{L as default};