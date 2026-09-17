const $ = (s) => document.querySelector(s);

function socialCard(s){
  return `<a class="social-card" data-platform="${s.name || ''}" style="--accent:${s.accent || '#ff1f3d'}" href="${s.url || '#'}" target="_blank" rel="noopener">
    <div class="social-top"><span class="social-icon">${s.icon || ''}</span><span class="social-arrow">↗</span></div>
    <div><div class="social-name">${s.name || ''}</div><div class="followers">${s.followers || ''}</div></div>
  </a>`;
}

function renderSocials(){
  const grid = $("#socialGrid");
  grid.innerHTML = (SITE.socials || []).map(socialCard).join("");
  $("#platformCount").textContent = (SITE.socials || []).length;
}

function renderClips(){
  const section = $("#clips");
  const grid = $("#clipGrid");
  const clips = SITE.clips || [];
  $("#clipCount").textContent = clips.length;
  if(!clips.length){ section.hidden = true; const navClip=document.querySelector('nav a[href="#clips"]'); if(navClip) navClip.hidden=true; return; }
  section.hidden = false;
  grid.innerHTML = "";
  clips.forEach(c=>{
    const card = document.createElement("a");
    card.className = "clip-card";
    card.href = c.url || c.file || "#";
    card.target = c.url ? "_blank" : "_self";
    const isVideo = /\.(mp4|webm|ogg)$/i.test(c.file || "");
    const media = isVideo ? `<video class="clip-video" src="${c.file}" muted preload="metadata"></video>` : `<div class="clip-thumb" style="background-image:url('${c.file}')"></div>`;
    card.innerHTML = `<div class="clip-media">${media}<span class="play">▶</span></div><div class="clip-body"><strong>${c.title || "Untitled clip"}</strong><small>${c.meta || ""}</small></div>`;
    grid.appendChild(card);
  });
}

function renderImages(items, container, type){
  const list = items || [];
  container.innerHTML = "";
  if(!list.length){
    container.innerHTML = `<div class="empty">No ${type === "gallery" ? "gallery images" : "mods"} uploaded yet.</div>`;
    if(type==="mods") $("#modCount").textContent = 0;
    return;
  }
  list.forEach(x=>{
    const wrapper = document.createElement(type === "gallery" ? "a" : "div");
    wrapper.className = type === "gallery" ? "gallery-item" : "mod-card";
    if(type === "gallery"){
      wrapper.href = x.file; wrapper.target = "_blank"; wrapper.rel = "noopener";
      wrapper.innerHTML = `<img src="${x.file}" alt="${x.alt || ''}" loading="lazy">`;
    } else {
      wrapper.innerHTML = `<img src="${x.file}" alt="${x.name || ''}" loading="lazy"><div class="mod-info"><strong>${x.name || ''}</strong><small>${x.role || ''}</small></div>`;
    }
    const img = wrapper.querySelector("img");
    img.addEventListener("error",()=>{
      wrapper.remove();
      if(type==="mods") $("#modCount").textContent = container.querySelectorAll(".mod-card").length;
      if(!container.querySelector(".mod-card,.gallery-item")) container.innerHTML = `<div class="empty">No ${type === "gallery" ? "gallery images" : "mods"} uploaded yet.</div>`;
    });
    container.appendChild(wrapper);
  });
  if(type==="mods") $("#modCount").textContent = container.querySelectorAll(".mod-card").length;
}

function setupMusic(){
  const audio=$("#audio"), toggle=$("#musicToggle"), title=$("#trackTitle"), list=$("#playlist");
  const tracks = SITE.music || [];
  if(!tracks.length){ $("#musicPlayer").style.display="none"; return; }
  let index=0;
  list.innerHTML="";
  tracks.forEach((t,i)=>{ const b=document.createElement("button"); b.textContent=t.title || `Track ${i+1}`; b.onclick=()=>load(i,true); list.appendChild(b); });
  function load(i,play=false){
    index=(i+tracks.length)%tracks.length; const t=tracks[index]; audio.src=t.file; title.textContent=t.title || "Untitled";
    [...list.children].forEach((b,n)=>b.classList.toggle("active",n===index)); if(play) audio.play().catch(()=>{});
  }
  toggle.onclick=()=>audio.paused ? audio.play().catch(()=>{}) : audio.pause();
  audio.onplay=()=>toggle.textContent="Ⅱ"; audio.onpause=()=>toggle.textContent="▶"; audio.onended=()=>load(index+1,true); audio.onerror=()=>title.textContent="Could not load this song";
  $("#playlistToggle").onclick=()=>list.classList.toggle("open"); load(0,false);
}

function setupReveal(){
  if(!("IntersectionObserver" in window)){document.querySelectorAll(".reveal").forEach(x=>x.classList.add("show"));return;}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.08});
  document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
}

function setupFX(){
  const root=document.body;
  [0,1].forEach(i=>{const b=document.createElement("div");b.className=`red-beam ${i?'two':'one'}`;root.appendChild(b)});
  const particles=document.createElement("div"); particles.id="particles"; root.appendChild(particles);
  for(let i=0;i<42;i++){
    const p=document.createElement("i"); p.className="particle"; p.style.left=`${Math.random()*100}%`; p.style.setProperty("--drift",`${(Math.random()-.5)*180}px`); p.style.animationDuration=`${8+Math.random()*14}s`; p.style.animationDelay=`${-Math.random()*18}s`; particles.appendChild(p);
  }
  if(matchMedia('(pointer:fine)').matches){
    const dot=document.createElement("div"), glow=document.createElement("div"); dot.className="cursor-dot"; glow.className="cursor-glow"; root.append(dot,glow);
    let mx=innerWidth/2,my=innerHeight/2,gx=mx,gy=my;
    addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
    function animate(){gx+=(mx-gx)*.12;gy+=(my-gy)*.12;glow.style.left=gx+'px';glow.style.top=gy+'px';requestAnimationFrame(animate)} animate();
    document.addEventListener("mouseover",e=>{if(e.target.closest('a,button,.mod-card,.gallery-item'))dot.classList.add('hover');else dot.classList.remove('hover')});
  }
}

document.addEventListener("DOMContentLoaded",()=>{
  $("#year").textContent=new Date().getFullYear(); renderSocials(); renderClips(); renderImages(SITE.gallery,$("#galleryGrid"),"gallery"); renderImages(SITE.mods,$("#modsGrid"),"mods"); setupMusic(); setupReveal(); setupFX();
});
