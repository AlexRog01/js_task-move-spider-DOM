document.addEventListener("click",e=>{let t=document.querySelector(".wall"),l=document.querySelector(".spider");if(t!==e.target)return;let c=t.clientHeight,i=t.clientWidth,o=l.offsetWidth/2,r=e.offsetY-o,d=e.offsetX-o;r<0?r=0:r>c-o&&(r=c-2*o),d<0?d=0:d>i-o&&(d=i-2*o),l.style.top=`${r}px`,l.style.left=`${d}px`});//# sourceMappingURL=index.513fb43d.js.map

//# sourceMappingURL=index.513fb43d.js.map
