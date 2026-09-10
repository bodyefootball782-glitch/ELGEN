const $ = (s) => document.querySelector(s);

function socialCard(s){
  return `<a class="social-card" style="--accent:${s.accent || '#ff1f3d'}" href="${s.url || '#'}" target="_blank" rel="noopener">
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
  const grid = $("#clipGrid");
  const clips = SITE.clips || [];
  $("#clipCount").textContent = clips.length;
  if(!clips.length){
    grid.innerHTML = `<div class="empty">No clips added yet — add them in <b>config.js</b>.</div>`;
    return;
  }
  grid.innerHTML = "";
  clips.forEach(c=>{
    const card = document.createElement("a");
    card.className = "clip-card";
    card.href = c.url || c.file || "#";
    card.target = c.url ? "_blank" : "_self";
    const isVideo = /\.(mp4|webm|ogg)$/i.test(c.file || "");
    const media = isVideo
      ? `<video class="clip-video" src="${c.file}" muted preload="metadata"></video>`
      : `<div class="clip-thumb" style="background-image:url('${c.file}')"></div>`;
    card.innerHTML = `<div class="clip-media">${media}<span class="play">▶</span></div>
      <div class="clip-body"><strong>${c.title || "Untitled clip"}</strong><small>${c.meta || ""}</small></div>`;
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

  list.forEach((x)=>{
    const wrapper = document.createElement(type === "gallery" ? "a" : "div");
    wrapper.className = type === "gallery" ? "gallery-item" : "mod-card";

    if(type === "gallery"){
      wrapper.href = x.file;
      wrapper.target = "_blank";
      wrapper.rel = "noopener";
      wrapper.innerHTML = `<img src="${x.file}" alt="${x.alt || ''}" loading="lazy">`;
    } else {
      wrapper.innerHTML = `<img src="${x.file}" alt="${x.name || ''}" loading="lazy">
        <div class="mod-info"><strong>${x.name || ''}</strong><small>${x.role || ''}</small></div>`;
    }

    const img = wrapper.querySelector("img");
    img.addEventListener("error", () => {
      wrapper.remove();
      if(type==="mods"){
        const count = container.querySelectorAll(".mod-card").length;
        $("#modCount").textContent = count;
      }
      if(!container.children.length){
        container.innerHTML = `<div class="empty">No ${type === "gallery" ? "gallery images" : "mods"} uploaded yet.</div>`;
      }
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
  tracks.forEach((t,i)=>{
    const b=document.createElement("button");
    b.textContent=t.title || `Track ${i+1}`;
    b.onclick=()=>load(i,true);
    list.appendChild(b);
  });

  function load(i,play=false){
    index=(i+tracks.length)%tracks.length;
    const t=tracks[index];
    audio.src=t.file;
    title.textContent=t.title || "Untitled";
    [...list.children].forEach((b,n)=>b.classList.toggle("active",n===index));
    if(play) audio.play().catch(()=>{});
  }

  toggle.onclick=()=>{
    if(audio.paused) audio.play().catch(()=>{});
    else audio.pause();
  };
  audio.onplay=()=>toggle.textContent="Ⅱ";
  audio.onpause=()=>toggle.textContent="▶";
  audio.onended=()=>load(index+1,true);
  audio.onerror=()=>title.textContent="Could not load this song";
  $("#playlistToggle").onclick=()=>list.classList.toggle("open");
  load(0,false);
}

function setupReveal(){
  if(!("IntersectionObserver" in window)){
    document.querySelectorAll(".reveal").forEach(x=>x.classList.add("show"));
    return;
  }
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add("show");
  }),{threshold:.08});
  document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
}

document.addEventListener("DOMContentLoaded", ()=>{
  $("#year").textContent=new Date().getFullYear();
  renderSocials();
  renderClips();
  renderImages(SITE.gallery,$("#galleryGrid"),"gallery");
  renderImages(SITE.mods,$("#modsGrid"),"mods");
  setupMusic();
  setupReveal();
});
