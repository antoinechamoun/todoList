(()=>{"use strict";const e=document.querySelector("[inbox-list]"),t=document.querySelector("[today-list]"),n=document.querySelector("[weekly-list]"),o=document.querySelector("[create-new-project-btn]"),c=document.querySelector("[clear-project-btn]"),i=document.querySelector("[create-project-form]"),l=document.querySelector("[add-project-btn]"),d=document.querySelector("[add-project-input]"),r=document.querySelector("[projects-list]"),s=document.querySelector("[data-new-list-form]"),a=document.querySelector("[data-new-list-input]"),u=document.querySelector(".task-list-title"),m=document.querySelector("[data-lists]"),p=document.querySelector("[tasks-list-container]"),g=document.getElementById("task-template");document.querySelector(".task");let S=JSON.parse(localStorage.getItem("projects"))||[],y=(localStorage.getItem("show"),JSON.parse(localStorage.getItem("selectedList"))||{});function v(){E();let e=document.getElementById(`${y.id}`);e&&(e.style.backgroundColor="rgb(2, 115, 115)",u.innerText=y.title,k(),q())}function f(){d.value="",i.className="form"}function k(){m.innerText="",void 0!==y.tasks&&y.tasks.forEach((e=>{const t=document.importNode(g.content,!0),n=t.querySelector("input");n.id=e.id,n.checked=e.completed;const o=t.querySelector("label");o.htmlFor=e.id,o.append(e.title),m.appendChild(t)}))}function E(){r.innerText="",S.map((e=>{const t=document.createElement("div");t.id=e.id,t.className="single-project";const n=document.createElement("div");n.className="left-side",n.id=e.id;const o=document.createElement("span");o.id=e.id,o.innerText="list",o.classList="material-symbols-outlined edit";const c=document.createElement("p");c.innerText=e.title,c.id=e.id;const i=document.createElement("div");i.className="right-side",i.id=e.id;const l=document.createElement("span");l.id=e.id,l.innerText="close",l.classList="material-symbols-outlined edit close",n.appendChild(o),n.appendChild(c),i.appendChild(l),t.appendChild(n),t.appendChild(i),r.appendChild(t)}))}function h(){E(),v(),f(),a.value=""}function q(){localStorage.setItem("projects",JSON.stringify(S)),localStorage.setItem("selectedList",JSON.stringify(y))}function L(){h(),q()}o.addEventListener("click",(function(){i.classList="form show"})),c.addEventListener("click",f),l.addEventListener("click",(function(e){e.preventDefault(),void 0!==d.value&&""!==d.value&&(S.push({title:d.value,id:(new Date).getTime().toString()}),L())})),r.addEventListener("click",(function(e){var t;"close"===e.target.innerText?(S=S.filter((t=>t.id!==e.target.id)),console.log(S),L()):(t=e.target.id,S.forEach((e=>{t===e.id&&(y=e)})),v())})),s.addEventListener("submit",(function(e){e.preventDefault(),void 0!==y.tasks?y.tasks.push({title:a.value,completed:!1,id:(new Date).getTime().toString()}):(y.tasks=[],y.tasks[0]={title:a.value,completed:!1,id:(new Date).getTime().toString()}),k(),L()})),p.addEventListener("click",(function(e){(e.target.id||e.target.htmlFor)&&console.log(e)})),e.addEventListener("click",(e=>{console.log(e)})),t.addEventListener("click",(e=>{console.log(e)})),n.addEventListener("click",(e=>{console.log(e)})),h()})();