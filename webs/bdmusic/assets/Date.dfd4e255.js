const r=o=>{const t=parseInt(Math.floor(o/3600)),n=parseInt(Math.floor(o/60%60)),e=Math.ceil(Math.floor(o%60)),a=t<10?"0"+t:t,s=e>59?59:e;return`${a>0?`${a}:`:""}${n<10?"0"+n:n}:${s<10?"0"+s:s}`},c=o=>{const t=new Date(o),n=t.getFullYear(),e=t.getMonth()+1,a=t.getDate();return`${n}-${e}-${a}`};export{c as a,r as f};