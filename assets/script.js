---
layout: none
---

dil=()=>{if(!localStorage.in&&localStorage.xrl){document.querySelectorAll('img').forEach(a=>{a.style.filter='blur(50px)'})}};dil()

if(!localStorage.xrl){
  (async()=>{
    let aa=await(await(await fetch('https://ipapi.co/json')).json());
    localStorage.xrl=JSON.stringify(aa);
    if(aa.country_name=='India'){localStorage.in=1}
    dil()
  })();
}

let no = {{site.data.num|jsonify}}

jdfo.onsubmit = (e) => {
    e.preventDefault();
    location.href =  fiwu.value;
}

document.querySelectorAll('.call').forEach(a=>{
    a.href='tel:+91'+no[scrt.dataset.title]
});
document.querySelectorAll('.wapp').forEach(a=>{
    a.href=`https://wa.me/+91${no[scrt.dataset.title]}?text=Hello,+I+saw+your+profile+in+${scrt.dataset.title}+(ashviarora.com).`
});





