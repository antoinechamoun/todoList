/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Body.js":
/*!*********************!*\
  !*** ./src/Body.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n\n\nlet project = Object.assign({}, _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\nproject.name='today'\nlet wash = Object.create(_Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\nwash.title='wash'\nlet clean = Object.create(_Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\nclean.title='clean'\nlet workout = Object.create(_Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\nworkout.title='workout'\nproject.todoList=[wash, clean, workout]\n\nconst Body = () =>{\n\nconst container = document.createElement('div')\n\ncontainer.innerHTML=`\n    <div>\n        <h1>${project.name}</h1>\n        <div>\n            <div class='todo-details'>\n                ${project.todoList[0].title}\n            </div>\n        </div>\n    </div>\n`\n\nreturn container\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Body);\n\n//# sourceURL=webpack://todolist/./src/Body.js?");

/***/ }),

/***/ "./src/Footer.js":
/*!***********************!*\
  !*** ./src/Footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// footer container\nconst Footer = document.createElement(\"div\")\nFooter.className='footer'\n\nconst par = document.createElement(\"p\")\npar.className = 'footer-txt'\npar.innerHTML=`Copyright &copy; 2022 antoinechamoun`\n\n// append children to main div\nFooter.appendChild(par)\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://todolist/./src/Footer.js?");

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// header\nconst Header = document.createElement(\"div\")\nHeader.className = \"header\"\n\n// Logo image\nconst img = document.createElement(\"span\")\nimg.className = \"material-symbols-outlined logo-img\"\nimg.innerHTML=\"fact_check\"\n\n// title\nconst title = document.createElement(\"h1\")\ntitle.innerText = \"TODO List\"\ntitle.className = \"title-txt\"\n\n//add children to header\nHeader.appendChild(img)\nHeader.appendChild(title)\n\n// export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://todolist/./src/Header.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Project = {\n    name:\"\",\n    id:0,\n    todoList:[],\n\n    addTodo(todo) {\n        this.todoList.push(todo)\n    },\n    \n    removeTodo(idx){\n        this.todoList.forEach((_, id)=>{\n            if(id === idx){\n                this.todoList.splice(id, 1)\n            }\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todolist/./src/Project.js?");

/***/ }),

/***/ "./src/Sidebar.js":
/*!************************!*\
  !*** ./src/Sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"projectsList\": () => (/* binding */ projectsList),\n/* harmony export */   \"show\": () => (/* binding */ show)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n\n// import Todo from \"./Todo\"\n// import { compareAsc, format } from 'date-fns'\n\nlet projectsList = JSON.parse(localStorage.getItem('projects')) || []\nif(projectsList.length>0){\n    projectsList = projectsList.map((project)=>{\n        const temp = Object.create(_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n        console.log(temp);\n        temp.name=project.name\n        temp.todoList=project.todoList\n        return temp\n    })\n}\n\nconsole.log(projectsList);\nlet show = (localStorage.getItem(\"show\")==='true') || false\nconst Sidebar = document.createElement(\"div\")\nSidebar.className = 'sidebar'\n\nconst notifications = document.createElement(\"ul\")\nnotifications.className =\"notifications\"\nconst options = ['Inbox', 'Today', 'This week']\n\n\noptions.forEach((item, id)=>{\n    const option = document.createElement(\"div\")\n    const liOption = document.createElement(\"li\")\n    option.className = 'line-option'\n    const inboxLogo = document.createElement(\"span\")\n    inboxLogo.className=\"material-symbols-outlined edit\"\n    \n    if( id === 0){\n        inboxLogo.innerText='upcoming'\n    }else if(id === 1){\n        inboxLogo.innerText='inbox'\n    }else if(id === 2){\n        inboxLogo.innerText='calendar_view_week'\n    }\n\n    liOption.className = 'menu'\n    liOption.appendChild(inboxLogo)\n    const optionText = document.createElement('p')\n    optionText.className='option-text'\n    optionText.innerText=item\n    liOption.appendChild(optionText)\n    notifications.appendChild(liOption)\n\n})\n\nconst projectsDiv = document.createElement(\"div\")\nprojectsDiv.className='projects-list'\n\nconst projectList = document.createElement('div')\nprojectList.className = 'project-item-list'\n\nconst projects = document.createElement(\"h1\")\nprojects.innerText = \"Projects\"\nprojects.className = \"project-title\"\nprojectsDiv.appendChild(projects)\n\n\nprojectsList.forEach((item)=>{\n    const singleProject = document.createElement('div')\n    singleProject.className='single-project'\n\n    const left = document.createElement(\"div\")\n    left.className = 'left-side'\n    \n    const right = document.createElement('div')\n    right.className = 'right-side'\n    const projectItem = document.createElement(\"span\")\n    projectItem.className ='material-symbols-outlined edit'\n    projectItem.innerText = 'list'\n\n    const projectName = document.createElement(\"p\")\n    projectName.innerText=item.name\n\n    const projectClose = document.createElement(\"span\")\n    projectClose.id = item.id\n    projectClose.className ='material-symbols-outlined edit close'\n    projectClose.innerText = 'close'\n\n\n    left.appendChild(projectItem)\n    left.appendChild(projectName)\n    right.appendChild(projectClose)\n    singleProject.appendChild(left)\n    singleProject.appendChild(right)\n    projectList.appendChild(singleProject)\n})\nprojectsDiv.appendChild(projectList)\n\nconst formProject = document.createElement(\"div\")\nformProject.className= show ? 'form show':'form'\nformProject.innerHTML=`\n<input type='text' class='project-name'/>\n<button type='button' class='add-btn'>Create</button>\n`\n\nconst addProject = document.createElement(\"div\")\naddProject.className='new-project'\naddProject.innerHTML=`\n<span class='material-symbols-outlined edit'>add</span>\n<p>Add Project</p>\n`\n\nSidebar.appendChild(notifications)\nSidebar.appendChild(projectsDiv)\nSidebar.appendChild(formProject)\nSidebar.appendChild(addProject)\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);\n\n//# sourceURL=webpack://todolist/./src/Sidebar.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Todo(title, description, dueDate, priority){\n    return{\n        title, \n        description, \n        dueDate, \n        priority, \n    }\n}\n\nlet asd = Object.create(Todo)\nasd.title='asd'\nconsole.log(asd); \n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todolist/./src/Todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./src/Footer.js\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ \"./src/Sidebar.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Body */ \"./src/Body.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n\n\n\n\n\n\n\n\n\n\nlet id = +localStorage.getItem(\"id\") || 0\n// div content\nconst content = document.getElementById('content')\n\n// container of all sections\nconst container = document.createElement(\"div\")\ncontainer.className='container'\n\n// append children to container\ncontainer.appendChild(_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\ncontainer.appendChild(_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\ncontainer.appendChild(_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n// container.appendChild(Body)\n// append children to content\ncontent.appendChild(container)\n\n// functionality\nconst projectClose = document.querySelector('.close')\n\nfunction createProject(){\n    if(formProject.value!==''){\n        const prj = Object.create(_Project__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n        prj.name=formProject.value\n        prj.id=id\n        id++\n        localStorage.setItem(\"id\", id)\n        _Sidebar__WEBPACK_IMPORTED_MODULE_2__.projectsList.push(prj)\n        formProject.value=''\n        _Sidebar__WEBPACK_IMPORTED_MODULE_2__.show=false\n        localStorage.setItem(\"show\", false)\n        localStorage.setItem('projects', JSON.stringify(_Sidebar__WEBPACK_IMPORTED_MODULE_2__.projectsList))\n        location.reload()\n    }\n}\n\nfunction removeProject(e){\n    _Sidebar__WEBPACK_IMPORTED_MODULE_2__.projectsList.forEach((item,id)=>{\n        if(item.id === +e.srcElement.id){\n            _Sidebar__WEBPACK_IMPORTED_MODULE_2__.projectsList.splice(id,1)\n        }\n    })\n    localStorage.setItem('projects', JSON.stringify(_Sidebar__WEBPACK_IMPORTED_MODULE_2__.projectsList))\n    location.reload()\n}\n\nfunction showHiddenForm(){\n    _Sidebar__WEBPACK_IMPORTED_MODULE_2__.show=!_Sidebar__WEBPACK_IMPORTED_MODULE_2__.show\n    localStorage.setItem(\"show\", _Sidebar__WEBPACK_IMPORTED_MODULE_2__.show)\n    location.reload()\n}\n\nconst formProject = document.querySelector('.project-name')\nconst addBtn=document.querySelector('.add-btn')\n\naddBtn.addEventListener('click', createProject)\nprojectClose && projectClose.addEventListener('click', removeProject)\n\nconst showForm = document.querySelector('.new-project')\nshowForm && showForm.addEventListener('click', showHiddenForm)\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;