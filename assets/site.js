(function(){
  // Live local time in Polomolok (GMT+8) for any element with data-localtime="short|long"
  function tick(){
    try{
      var t=new Intl.DateTimeFormat('en-US',{hour:'numeric',minute:'2-digit',timeZone:'Asia/Manila'}).format(new Date());
      document.querySelectorAll('[data-localtime]').forEach(function(el){
        el.textContent=el.getAttribute('data-localtime')==='long'
          ? t+' · Polomolok, Philippines (GMT+8)'
          : t+' in Polomolok (GMT+8)';
      });
    }catch(e){}
  }
  tick(); setInterval(tick,30000);

  // Copy-email button
  var btn=document.getElementById('copyEmail');
  if(btn){
    btn.addEventListener('click',function(){
      var el=document.getElementById('email');
      function done(){btn.textContent='Copied';setTimeout(function(){btn.textContent='Copy'},1800)}
      function fallback(){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);btn.textContent='Selected'}
      try{navigator.clipboard.writeText(el.textContent).then(done,fallback)}catch(e){fallback()}
    });
  }
})();
