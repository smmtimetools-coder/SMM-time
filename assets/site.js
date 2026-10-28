(function(){
  var T0=Date.now();
  var ROOT=document.documentElement.getAttribute("data-root")||"";
  var ROUTES={"home": "", "services": "poslugy/", "smm": "poslugy/kompleksnyi-smm/", "target": "poslugy/tarhetovana-reklama/", "mascot": "poslugy/brend-maskot/", "audit": "poslugy/smm-audyt/", "education": "poslugy/navchannia-ta-konsultatsii/", "expertise": "poslugy/rozpakuvannia-ekspertnosti/", "cases": "kejsy/", "okpsy": "kejsy/okpsy-pharma/", "dyvys": "kejsy/dyvys-ukrainske/", "minka": "kejsy/minka-beauty/", "evi": "kejsy/evi/", "karabas": "kejsy/karabas/", "opera": "kejsy/kyivska-opera/", "philharmonic": "kejsy/natsionalna-filarmoniia/", "khpi": "kejsy/khpi/", "dnipro": "kejsy/dnipro-biudzhet-uchasti/", "toys": "kejsy/insta-mahazyn-ihrashok/", "telelikar": "kejsy/telelikar/", "cheese": "kejsy/syrni-tsukerky/", "mascots": "kejsy/maskoty-minka-okpsy/", "badik": "kejsy/maskot-badyk/", "symphony": "kejsy/symphony-rock-suknia/", "contacts": "kontakty/"};
  function url(id){return (ROOT+(ROUTES[id]||""))||"./"}
  var SECTION={home:"home",services:"services",smm:"services",target:"services",mascot:"services",audit:"services",education:"services",expertise:"services",
    cases:"cases",okpsy:"cases",dyvys:"cases",minka:"cases",evi:"cases",karabas:"cases",opera:"cases",philharmonic:"cases",khpi:"cases",dnipro:"cases",toys:"cases",telelikar:"cases",cheese:"cases",mascots:"cases",badik:"cases",symphony:"cases",contacts:"contacts"};
  var ARROW='<path d="M130.3 11.3C130.3 11.3 130.3 11.4 117.5 11.4C104.6 11.4 78.9 11.3 58.9 11.2C39 11.1 25.6 10.9 18.2 10.7C10.8 10.5 9.8 10.3 9.6 9.7C9 7.7 11.4 6.3 15.1 5.3M15.1 5.3C20.3 4 28.1 3.5 34.9 2.9M15.1 5.3C21.6 4.5 29.2 3.6 34.9 2.9M15.1 5.3C8.8 6.2 3.4 7.1 2 7.6C5.1 9.4 19.5 15.9 42.4 25C46.1 26.4 47 26.9 49.8 29.4M34.9 2.9C37.7 2.7 40.3 2.5 42.4 2.2C46.1 1.7 41.9 2.1 34.9 2.9Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>';

  function tabs(sec){
    function t(id,label,cls,last){
      var cur=sec===id?' aria-current="page"':'';
      return '<a class="tab '+cls+(last?' tab--last':'')+'" href="'+url(id)+'"'+cur+'><span>'+label+'</span></a>';
    }
    return '<a class="tab tab--home" href="'+url('home')+'"'+(sec==='home'?' aria-current="page"':'')+'><span>про нас</span></a>'+t('services','послуги','t-services')+t('cases','кейси','t-cases')+
      t('contacts','контакти','t-contacts');
  }
  function footer(sec){
    return '<div class="wrap foot"><nav class="tabs">'+tabs(sec)+'</nav><div class="dark fcard">'+
      '<div class="fcontacts"><a href="tel:+380666894847">+38 (066) 689 48 47</a><a href="mailto:gaydash.lesia@smm-time.com">gaydash.lesia@smm-time.com</a>'+
      '<div class="pills"><a href="https://www.instagram.com/gaydash.lesia/" target="_blank" rel="noopener">інстаграм</a><a href="https://www.facebook.com/lesia.gaydash/" target="_blank" rel="noopener">фейсбук</a><a href="https://t.me/Lesia_Haidash" target="_blank" rel="noopener">телеграм</a></div></div>'+
      '<img class="flogo" src="'+ROOT+'img/logo.webp" alt="SMM TIME">'+
      '<p class="fcopy"><span>© '+new Date().getFullYear()+' SMM TIME</span><span>AI-based SMM-агенція</span></p></div></div>';
  }
  var CASES=[["badik","Маскот Бадик для OKPsy Pharma: за години замість місяців"],["mascots","Розробка маскотів"],["okpsy","OKPsy Pharma: AI-стратегія та маскот «БАДик» для бренду БАДів"],["dyvys","«Дивись Українське»: українське кіно у 30+ країнах"],["minka","MINKA.BEAUTY: SMM-стратегія для мексиканського бренду косметики"],["evi","Веганські цукерки «EVI»: система контенту для Instagram"],["karabas","Karabas.com: просування культурних подій під час війни"],["opera","Контент-стратегія <br>для Київської опери"],
    ["philharmonic","Просування концертів Національної філармонії України"],["khpi","Рекламна кампанія із залучення абітурієнтів ХПІ"],["dnipro","Бюджет участі Дніпра: 1,5&nbsp;млн показів реклами за 25 днів"],["toys","Інста-магазин іграшок: 1000+ діалогів у Direct по ≈&nbsp;8&nbsp;грн"],["telelikar","«Телелікар» від «9&#8209;1&#8209;1»: 1000+ підписників у Facebook щомісяця"],["cheese","Крафтові сирні цукерки: контентна воронка без реклами"],["symphony","«Symphony ROCK Resonance» і «СУКНЯ»: таргет на дві культурні події"]];
  /* case categories (as in the Notion «кейси SMM TIME» page) */
  var CATS=[["smm","SMM","ведення","svcp_smm","50% 62%"],["target","таргетована","реклама","svcp_target","50% 45%"],["both","таргет","+ SMM","svcp_audit","50% 40%"],["mascot","маскоти","","svcp_smm","50% 50%"]];
  var CASE_CAT={okpsy:"smm",dyvys:"target",minka:"smm",evi:"smm",opera:"smm",karabas:"both",philharmonic:"target",khpi:"target",dnipro:"target",toys:"both",telelikar:"both",cheese:"smm",mascots:"mascot",badik:"mascot",symphony:"target"};
  function plural(n){var m10=n%10,m100=n%100;return n+' '+(m10===1&&m100!==11?'кейс':(m10>=2&&m10<=4&&(m100<12||m100>14)?'кейси':'кейсів'))}
  function catCount(id){return CASES.filter(function(c){return (" "+(CASE_CAT[c[0]]||"")+" ").indexOf(" "+id+" ")>-1}).length}
  function cats(){
    return '<div class="cat-grid">'+CATS.map(function(c){
      return '<a class="cat" href="'+url('cases')+'#'+c[0]+'"><img src="'+ROOT+'img/'+c[3]+'.webp" alt="" style="object-position:'+c[4]+'">'+
        '<span class="cat-t"><span>'+c[1]+'</span><span class="cat-t2">'+c[2]+'</span></span></a>';
    }).join('')+'</div>';
  }
  function caseLinks(){
    return '<a class="chip chip--link chip--all" href="'+url('cases')+'">усі кейси →</a>'+CATS.map(function(c){return '<a class="chip chip--link" href="'+url('cases')+'#'+c[0]+'">'+(c[1]+' '+c[2]).trim()+'</a>'}).join('');
  }
  function cases(withFilter,only){
    var chips='';
    if(withFilter){
      chips='<div class="chips" role="tablist" aria-label="Категорії кейсів"><button type="button" class="chip" data-cat="all" aria-pressed="true">усі <span>'+CASES.length+'</span></button>'+
        CATS.map(function(c){return '<button type="button" class="chip" data-cat="'+c[0]+'" aria-pressed="false">'+(c[1]+' '+c[2]).trim()+' <span>'+catCount(c[0])+'</span></button>'}).join('')+'</div>';
    }
    var list=only?only.map(function(id){return CASES.filter(function(c){return c[0]===id})[0]}).filter(Boolean):CASES;
    return chips+'<div class="case-grid">'+list.map(function(c,i){
      return '<a class="case" data-cat="'+(CASE_CAT[c[0]]||'')+'" style="--i:'+i+'" href="'+url(c[0])+'"><img loading="lazy" decoding="async" src="'+ROOT+'img/card_'+c[0]+'.webp" alt="Обкладинка кейсу: '+c[1].replace(/<[^>]+>/g,' ').replace(/"/g,'&quot;')+'" width="1230" height="1000"><h3>'+c[1]+'</h3></a>';
    }).join('')+'</div>';
  }
  function filterCases(root,cat){
    if(!CATS.some(function(c){return c[0]===cat}))cat='all';
    root.querySelectorAll('.chip').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.cat===cat))});
    var i=0;root.querySelectorAll('.case').forEach(function(a){var on=cat==='all'||(' '+a.dataset.cat+' ').indexOf(' '+cat+' ')>-1;a.hidden=!on;a.classList.remove('case--solo');if(on){a.style.setProperty('--i',i++)}});
    var vis=[].filter.call(root.querySelectorAll('.case'),function(a){return !a.hidden});
    if(vis.length%2===1)vis[vis.length-1].classList.add('case--solo');
    var em=root.querySelector('.cases-empty');if(!em){em=document.createElement('p');em.className='cases-empty';em.textContent='Кейси в цій категорії скоро з’являться.';root.appendChild(em)}em.hidden=vis.length>0;
  }
  function services(){
    function tile(id,img,label,wide,pos){
      return '<a class="tile'+(wide?' tile--wide':'')+'" href="'+url(id)+'"><img src="'+ROOT+'img/'+img+'.webp" alt="" style="object-position:'+(pos||'50% 50%')+'"><svg class="frame" aria-hidden="true"><path/></svg><span class="lbl">'+label+'</span></a>';
    }
    function mascotTile(){
      return '<a class="tile tile--ai" href="'+url('mascot')+'"><span class="ai-bg"></span><span class="ai-mark" aria-hidden="true">AI</span><span class="ai-list" aria-hidden="true">концепт · пози · емоції · анімація</span><svg class="frame" aria-hidden="true"><path/></svg><span class="lbl">AI-персонажі (маскот)<span class="soon">нове</span></span></a>';
    }
    return '<div class="svc-grid">'+tile('smm','svcp_smm','комплексний smm з AI',false,'50% 62%')+tile('target','svcp_target','таргетована реклама з AI',false,'50% 45%')+
      mascotTile()+tile('audit','svcp_audit','AI-аудит соцмереж',false,'50% 48%')+
      tile('education','svcp_edu','навчання: AI для SMM-команди',false,'50% 55%')+tile('expertise','svcp_expert','розпакування експертності з AI',false,'50% 30%')+'</div>';
  }


  document.querySelectorAll('.page').forEach(function(p){
    var sec=SECTION[p.dataset.page];
    p.querySelectorAll('[data-tabs]').forEach(function(n){n.innerHTML=tabs(sec)});
    p.querySelectorAll('[data-footer]').forEach(function(n){n.innerHTML=footer(sec)});
    p.querySelectorAll('[data-cats]').forEach(function(n){n.innerHTML=cats()});
    p.querySelectorAll('[data-cases]').forEach(function(n){
      var f=n.hasAttribute('data-filter'),only=n.dataset.featured?n.dataset.featured.split(','):null;n.innerHTML=cases(f,only);
      if(f){
        n.addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b)return;filterCases(n,b.dataset.cat);try{history.replaceState(null,'',b.dataset.cat==='all'?location.pathname:'#'+b.dataset.cat)}catch(err){}});
        filterCases(n,(location.hash||'').slice(1));
        window.addEventListener('hashchange',function(){filterCases(n,(location.hash||'').slice(1))});
      }else filterCases(n,'all');
    });
    p.querySelectorAll('[data-catlinks]').forEach(function(n){n.innerHTML=caseLinks()});
    p.querySelectorAll('[data-services]').forEach(function(n){n.innerHTML=services()});
  });
  /* breadcrumbs: Головна / Розділ / Сторінка — at the bottom of the hero card, plus schema.org markup for Google */
  var CRUMB={home:['Головна'],services:['Послуги','home'],smm:['Комплексний SMM з AI','services'],target:['Таргетована реклама','services'],mascot:['Бренд-маскот','services'],
    ai:['AI-контент','services'],audit:['SMM-аудит','services'],education:['Навчання та консультації','services'],expertise:['Розпакування експертності','services'],
    cases:['Кейси','home'],okpsy:['OKPsy Pharma','cases'],dyvys:['«Дивись Українське»','cases'],minka:['MINKA.BEAUTY','cases'],evi:['EVI','cases'],karabas:['Karabas.com','cases'],opera:['Київська опера','cases'],philharmonic:['Національна філармонія','cases'],khpi:['ХПІ','cases'],dnipro:['Дніпровська міська рада','cases'],toys:['Інста-магазин іграшок','cases'],telelikar:['Телелікар','cases'],cheese:['Сирні цукерки','cases'],mascots:['Розробка маскотів','cases'],badik:['Маскот Бадик','cases'],symphony:['Symphony ROCK і «СУКНЯ»','cases'],
    contacts:['Контакти','home']};
  (function(){
    var page=document.querySelector('.page');if(!page)return;
    var id=page.dataset.page;if(!CRUMB[id]||id==='home')return;
    var chain=[],cur=id;while(cur){chain.unshift(cur);cur=CRUMB[cur][1]}
    var html=chain.map(function(c,i){
      var last=i===chain.length-1;
      return last?'<li><span aria-current="page">'+CRUMB[c][0]+'</span></li>':'<li><a href="'+url(c)+'">'+CRUMB[c][0]+'</a></li>';
    }).join('');
    var nav=document.createElement('nav');nav.className='crumbs';nav.setAttribute('aria-label','Хлібні крихти');nav.innerHTML='<ol>'+html+'</ol>';
    var card=page.querySelector('header .hcard');if(card){card.classList.add('hcard--crumbs');card.appendChild(nav)}
    var ld={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":chain.map(function(c,i){
      return {"@type":"ListItem","position":i+1,"name":CRUMB[c][0],"item":new URL(url(c),location.href).href}})};
    var sc=document.createElement('script');sc.type='application/ld+json';sc.textContent=JSON.stringify(ld);document.head.appendChild(sc);
  })();
  document.querySelectorAll('svg[data-arrow]').forEach(function(s){s.setAttribute('viewBox','0 0 132.3 31.4');s.setAttribute('fill','none');s.setAttribute('aria-hidden','true');s.innerHTML=ARROW});
  document.querySelectorAll('[data-pack] li').forEach(function(li){li.innerHTML='<img src="'+ROOT+'img/check_arrow.svg" alt="" aria-hidden="true">'+'<span>'+li.innerHTML+'</span>'});

  /* tile shape: rounded corners + small chamfered bottom-right corner with rounded joints */
  function shapeTile(t){
    var w=t.clientWidth,h=t.clientHeight;if(!w||!h)return;
    var small=w<520,r=small?14:20,c=small?24:Math.max(28,Math.min(54,w*.075)),k=Math.min(10,c*.4),q=k*Math.SQRT1_2,f=function(n){return Math.round(n*10)/10};
    var d='M'+r+' 0H'+f(w-r)+'A'+r+' '+r+' 0 0 1 '+w+' '+r+'V'+f(h-c-k)+'Q'+w+' '+f(h-c)+' '+f(w-q)+' '+f(h-c+q)+
      'L'+f(w-c+q)+' '+f(h-q)+'Q'+f(w-c)+' '+h+' '+f(w-c-k)+' '+h+'H'+r+'A'+r+' '+r+' 0 0 1 0 '+f(h-r)+'V'+r+'A'+r+' '+r+' 0 0 1 '+r+' 0Z';
    var img=t.querySelector('img,.ai-bg');img.style.clipPath="path('"+d+"')";img.style.borderRadius='0';
    var svg=t.querySelector('.frame');svg.setAttribute('viewBox','0 0 '+w+' '+h);svg.querySelector('path').setAttribute('d',d);
  }
  var ro=window.ResizeObserver?new ResizeObserver(function(es){es.forEach(function(e){shapeTile(e.target)})}):null;
  document.querySelectorAll('.tile').forEach(function(t){shapeTile(t);if(ro)ro.observe(t)});

  /* short words never hang at the end of a line */
  (function(){
    var re=/(^|[\s («“"„\/])([A-Za-zА-ЯҐЄІЇа-яґєії’'\d]{1,3})[ \t\n]+(?=\S)/g;
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){
      var p=n.parentNode&&n.parentNode.nodeName;return /SCRIPT|STYLE|TEXTAREA/.test(p)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});
    var n,list=[];while((n=w.nextNode()))list.push(n);
    list.forEach(function(t){
      var s=t.nodeValue,prev;
      do{prev=s;s=s.replace(re,'$1$2 ')}while(s!==prev);
      s=s.replace(/ ([–—→])/g,' $1');
      if(s!==t.nodeValue)t.nodeValue=s;
    });
  })();

  /* lead forms (contacts page + pop-up): sent to a Make webhook that posts them to the Telegram group «Заявки з сайту smm time».
     If sending fails, the visitor gets a ready-made e-mail to Lesia as a fallback. */
  var LEAD_EMAIL='gaydash.lesia@smm-time.com';
  var LEAD_ENDPOINT='https://hook.eu2.make.com/fej79qds67zdai6c5fh7ut7xylc3gvdw';
  function wire(form){
    var box=form.parentNode,sent=box.querySelector('.sent'),ok=box.querySelector('.ok'),err=form.querySelector('.err'),btn=form.querySelector('[type=submit]'),letter='';
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var name=form.name.value.trim(),mail=form.email.value.trim(),msg=form.msg.value.trim(),svc=form.service?form.service.value.trim():'';
      if(Date.now()-T0<3000||(form._honey&&form._honey.value)){form.hidden=true;form.parentNode.querySelector('.ok').hidden=false;return}
      if(!name){err.textContent='Вкажіть, будь ласка, ім’я.';form.name.focus();return}
      if(!/^\S+@\S+\.\S+$/.test(mail)){err.textContent='Перевірте емейл: він має виглядати як name@mail.com.';form.email.focus();return}
      err.textContent='';
      letter='Ім’я: '+name+'\nЕмейл: '+mail+(svc?'\nПослуга: '+svc:'')+(msg?'\n\n'+msg:'');
      if(form._honey&&form._honey.value){form.hidden=true;ok.hidden=false;return}
      var label=btn.textContent;btn.disabled=true;btn.textContent='Надсилаємо…';
      fetch(LEAD_ENDPOINT,{method:'POST',body:new URLSearchParams({name:name,email:mail,service:svc,msg:msg,page:location.href})})
      .then(function(r){
        if(r.ok){form.reset();form.hidden=true;ok.hidden=false}
        else throw new Error('not sent');
      }).catch(function(){
        sent.querySelector('.s-mail').href='mailto:'+LEAD_EMAIL+'?subject='+encodeURIComponent('Заявка з сайту SMM TIME'+(svc?' — '+svc:''))+'&body='+encodeURIComponent(letter);
        sent.querySelector('.s-note').textContent='';
        form.hidden=true;sent.hidden=false;
      }).then(function(){btn.disabled=false;btn.textContent=label});
    });
    sent.querySelector('.s-copy').addEventListener('click',function(){
      var note=sent.querySelector('.s-note'),txt='Кому: '+LEAD_EMAIL+'\n'+letter;
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(function(){note.textContent='Текст скопійовано.'},function(){note.textContent=txt})}
      else{note.textContent=txt}
    });
    sent.querySelector('.s-back').addEventListener('click',function(){sent.hidden=true;form.hidden=false});
    ok.querySelector('.ok-back').addEventListener('click',function(){ok.hidden=true;form.hidden=false});
  }
  document.querySelectorAll('.lead-form').forEach(wire);
  /* stacking order for mobile sticky cards */
  ['.steps','.svc-grid','.why-grid','.team-grid','.who-grid'].forEach(function(sel){document.querySelectorAll(sel).forEach(function(g){[].forEach.call(g.children,function(c,i){c.style.setProperty('--i',i)})})});
  document.querySelectorAll('[data-reviews]').forEach(function(r){var nav=r.nextElementSibling;if(!nav)return;nav.addEventListener('click',function(e){var b=e.target.closest('[data-rev]');if(!b)return;var c=r.querySelector('.rev');var step=c?c.getBoundingClientRect().width+parseFloat(getComputedStyle(r).columnGap||0):r.clientWidth;r.scrollBy({left:step*+b.dataset.rev,behavior:'smooth'})})});

  /* pop-up */
  var pop=document.getElementById('pop'),popBox=pop.querySelector('.pop-box'),popForm=pop.querySelector('form'),lastFocus=null;
  function openPop(svc){
    popForm.hidden=false;pop.querySelector('.sent').hidden=true;pop.querySelector('.ok').hidden=true;popForm.querySelector('.err').textContent='';
    popForm.service.value=svc||'';
    lastFocus=document.activeElement;pop.hidden=false;document.documentElement.style.overflow='hidden';
    setTimeout(function(){popForm.name.focus()},60);
  }
  function closePop(){pop.hidden=true;document.documentElement.style.overflow='';if(lastFocus&&lastFocus.focus)lastFocus.focus()}
  document.addEventListener('click',function(e){
    var t=e.target.closest('[data-pop]');
    if(t){e.preventDefault();openPop(t.dataset.pop);return}
    if(e.target.closest('[data-close]'))closePop();
  },true);
  document.addEventListener('keydown',function(e){
    if(pop.hidden)return;
    if(e.key==='Escape'){closePop();return}
    if(e.key==='Tab'){
      var f=[].filter.call(popBox.querySelectorAll('button,input,textarea,a[href]'),function(el){return el.offsetParent!==null});
      if(!f.length)return;var first=f[0],last=f[f.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
    }
  });

  /* floating Telegram button */
  (function(){
    if(document.querySelector('.tg-float'))return;
    var a=document.createElement('a');a.className='tg-float';a.href='https://t.me/Lesia_Haidash';a.target='_blank';a.rel='noopener';
    a.setAttribute('aria-label','Написати Лесі в Telegram');
    a.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.9 4.4 18.7 19.6c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13.3 1.4 11.8c-1-.3-1-1 .2-1.5l18.9-7.3c.9-.3 1.6.2 1.4 1.4z"/></svg><span>Написати Лесі</span>';
    document.body.appendChild(a);
  })();
})();
