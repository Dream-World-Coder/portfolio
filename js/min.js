const observer=new IntersectionObserver((e=>{e.forEach((e=>{console.log(e),e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")}))})),hiddenElements=document.querySelectorAll(".hidden");hiddenElements.forEach((e=>observer.observe(e)));const cursor=document.querySelector(".cursor");document.addEventListener("mousemove",(e=>{cursor.style.left=e.pageX+"px",cursor.style.top=e.pageY+"px"}));const invert_button=document.getElementById("invert-button"),hello=document.getElementById("hello"),h=document.querySelector(".letter"),skill=document.getElementById("skill"),pro=document.getElementById("pro"),con=document.getElementById("con");function toggleDarkMode(){const e=document.documentElement,t=document.getElementById("sun-icon"),n=document.getElementById("moon-icon");e.classList.toggle("invert"),t.style.display="none"===t.style.display?"inline":"none",n.style.display="none"===n.style.display?"inline":"none";const s=e.classList.contains("invert");localStorage.setItem("darkMode",s)}function scrollToTarget(e,t){const n=window.pageYOffset,s=e-n;let o;window.requestAnimationFrame((function e(l){o||(o=l);const i=l-o,c=easeInOutCubic(Math.min(i/t,1));window.scrollTo(0,n+s*c),i<t&&window.requestAnimationFrame(e)}))}function easeInOutCubic(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1}hello.addEventListener("mouseover",(function(){cursor.style.transform="scale(3)"})),hello.addEventListener("mouseout",(function(){cursor.style.transform="scale(1)"})),invert_button.addEventListener("mouseover",(function(){cursor.style.transform="scale(2.4)",invert_button.style.filter="invert(100%)"})),invert_button.addEventListener("mouseout",(function(){cursor.style.transform="scale(1)",invert_button.style.filter="invert(0%)"})),skill.addEventListener("mouseover",(function(){cursor.style.transform="scale(3)"})),skill.addEventListener("mouseout",(function(){cursor.style.transform="scale(1)"})),pro.addEventListener("mouseover",(function(){cursor.style.transform="scale(3)"})),pro.addEventListener("mouseout",(function(){cursor.style.transform="scale(1)"})),con.addEventListener("mouseover",(function(){cursor.style.transform="scale(3)"})),con.addEventListener("mouseout",(function(){cursor.style.transform="scale(1)"})),document.addEventListener("DOMContentLoaded",(()=>{if("true"===localStorage.getItem("darkMode")){const e=document.documentElement,t=document.getElementById("sun-icon"),n=document.getElementById("moon-icon");e.classList.add("invert"),t.style.display="none",n.style.display="inline"}})),document.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(function(e){if(this.getAttribute("href").startsWith("#")||!this.getAttribute("href").startsWith("http")){e.preventDefault();const t=this.getAttribute("href"),n=document.querySelector(t);if(!n)return;const s=n.getBoundingClientRect().top+window.pageYOffset,o=Math.abs(s-window.scrollY);scrollToTarget(s,Math.min(1e3,o))}}))})),document.addEventListener("scroll",(function(){const e=document.querySelectorAll("section"),t=.3*window.innerHeight;e.forEach((e=>{e.getBoundingClientRect().top<=t?e.classList.add("reveal"):e.classList.remove("reveal")}))}));const Default=document.querySelector(".default"),python=document.querySelector(".python"),ai_tools=document.querySelector(".ai-tools"),html_css=document.querySelector(".html-css"),ui_ux=document.querySelector(".ui-ux"),js=document.querySelector(".js"),c_cpp=document.querySelector(".c-cpp"),git=document.querySelector(".git"),other=document.querySelector(".others"),p=document.getElementById("python"),a=document.getElementById("ai"),htm=document.getElementById("html-css"),u=document.getElementById("ui-ux"),j=document.getElementById("js"),c=document.getElementById("c"),cpp=document.getElementById("cpp"),g=document.getElementById("git"),gimp=document.getElementById("gimp"),script=document.getElementById("script");p.addEventListener("mouseover",(function(){Default.style.display="none",python.style.display="block"})),a.addEventListener("mouseover",(function(){Default.style.display="none",ai_tools.style.display="block"})),htm.addEventListener("mouseover",(function(){Default.style.display="none",html_css.style.display="block"})),u.addEventListener("mouseover",(function(){Default.style.display="none",ui_ux.style.display="block"})),j.addEventListener("mouseover",(function(){Default.style.display="none",js.style.display="block"})),c.addEventListener("mouseover",(function(){Default.style.display="none",c_cpp.style.display="block"})),cpp.addEventListener("mouseover",(function(){Default.style.display="none",c_cpp.style.display="block"})),g.addEventListener("mouseover",(function(){Default.style.display="none",git.style.display="block"})),gimp.addEventListener("mouseover",(function(){Default.style.display="none",other.style.display="block"})),script.addEventListener("mouseover",(function(){Default.style.display="none",other.style.display="block"})),p.addEventListener("mouseout",(function(){Default.style.display="block",python.style.display="none"})),a.addEventListener("mouseout",(function(){Default.style.display="block",ai_tools.style.display="none"})),htm.addEventListener("mouseout",(function(){Default.style.display="block",html_css.style.display="none"})),u.addEventListener("mouseout",(function(){Default.style.display="block",ui_ux.style.display="none"})),j.addEventListener("mouseout",(function(){Default.style.display="block",js.style.display="none"})),c.addEventListener("mouseout",(function(){Default.style.display="block",c_cpp.style.display="none"})),cpp.addEventListener("mouseout",(function(){Default.style.display="block",c_cpp.style.display="none"})),g.addEventListener("mouseout",(function(){Default.style.display="block",git.style.display="none"})),gimp.addEventListener("mouseout",(function(){Default.style.display="block",other.style.display="none"})),script.addEventListener("mouseout",(function(){Default.style.display="block",other.style.display="none"}));const nav=document.getElementById("nav"),svg=document.getElementById("svg"),ul=document.getElementById("ul"),li=document.querySelector(".li"),l1=document.getElementById("l1"),l2=document.getElementById("l2"),l3=document.getElementById("l3"),l4=document.getElementById("l4"),s1=document.getElementById("s1"),s1d1=document.getElementById("s1d1"),sp1=document.getElementById("sp1"),sp2=document.getElementById("sp2"),sp3=document.getElementById("sp3"),sp4=document.getElementById("sp4"),closeIcon=document.querySelector(".close-icon"),navMenu=document.querySelector(".nav-menu");svg.addEventListener("click",(function(){nav.classList.toggle("visible"),ul.classList.toggle("visible"),l1.classList.toggle("animate-li"),l1.style.animationDelay="0ms",l2.classList.toggle("animate-li"),l2.style.animationDelay="100ms",l3.classList.toggle("animate-li"),l3.style.animationDelay="200ms",l4.classList.toggle("animate-li"),l4.style.animationDelay="300ms",nav.classList.contains("visible")?(sp1.classList.add("appear"),sp2.classList.add("appear"),sp3.classList.add("appear"),sp4.classList.add("appear"),navMenu.style.display="none",closeIcon.style.display="flex"):(sp1.classList.remove("appear"),sp2.classList.remove("appear"),sp3.classList.remove("appear"),sp4.classList.remove("appear"),closeIcon.style.display="none",navMenu.style.display="flex")})),closeIcon.addEventListener("click",(function(){nav.classList.remove("visible"),ul.classList.remove("visible"),sp1.classList.remove("appear"),sp2.classList.remove("appear"),sp3.classList.remove("appear"),sp4.classList.remove("appear"),closeIcon.style.display="none",navMenu.style.display="flex"}));const eBox=document.getElementById("email-box");eBox.addEventListener("mouseover",(function(){cursor.style.display="none"})),eBox.addEventListener("mouseout",(function(){cursor.style.display="block"}));
