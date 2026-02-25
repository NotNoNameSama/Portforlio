// CURSEUR VIOLET GLOW
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e=>{
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});

// TRANSITION ENTRE PAGES
document.querySelectorAll("a").forEach(link=>{
if(link.href && link.href.includes(".html")){
link.addEventListener("click",function(e){
e.preventDefault();
document.body.style.opacity="0";
setTimeout(()=>{
window.location = this.href;
},500);
});
}
});

// LIGHTBOX
const images = document.querySelectorAll(".gallery-img");
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

images.forEach(img=>{
img.addEventListener("click",()=>{
lightbox.classList.add("active");
lightbox.innerHTML = `<img src="${img.src}">`;
});
});

lightbox.addEventListener("click",()=>{
lightbox.classList.remove("active");
});