(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(t,o,e){},32:function(t,o,e){"use strict";e.r(o);var l=e(0),i=e.n(l),s=e(19),a=e.n(s),c=e(12),r=(e(25),e(8)),n=e(9),b=e(11),p=e(10),u=e(2),m=e(1),g=function(t){Object(b.a)(e,t);var o=Object(p.a)(e);function e(t){var l;return Object(r.a)(this,e),(l=o.call(this,t)).state={status:""},l}return Object(n.a)(e,[{key:"toggleStatus",value:function(){var t,o=""===this.state.status&&(null===(t=this.props.section)||void 0===t?void 0:t.isSwippable)?"active":"";this.setState({status:o})}},{key:"render",value:function(){var t,o,e,l,i=this;return Object(m.jsx)("div",{className:"card ".concat(null===(t=this.props.section)||void 0===t||null===(o=t.layout)||void 0===o?void 0:o.size," ").concat(this.state.status),children:Object(m.jsxs)("div",{className:"card-wrapper ".concat(null===(e=this.props.section)||void 0===e||null===(l=e.layout)||void 0===l?void 0:l.bg),children:[Object(m.jsxs)("div",{className:"card-wrapper--front",onClick:function(){return i.toggleStatus()},children:[x(this.props.section,"front"),h(this.props.section,"front"),d(this.props.section,"front")]}),Object(m.jsxs)("div",{className:"card-wrapper--back",onClick:function(){return i.toggleStatus()},children:[h(this.props.section,"back"),x(this.props.section,"back"),v(this.props.section,"back")]})]})})}}]),e}(l.Component);function d(t,o){var e;return Object(m.jsx)("div",{className:"card-wrapper--".concat(o,"--title ").concat((null===(e=t.layout)||void 0===e?void 0:e.darkTxt)?"invert":""),children:w(null===t||void 0===t?void 0:t.title,"title",o)})}function h(t,o){return(null===t||void 0===t?void 0:t.img)?Object(m.jsx)("img",{className:"card-wrapper--".concat(o,"--img ").concat(t.invertImgColors?"invert":""),src:t.img,alt:""}):""}function x(t,o){var e,l;return(null===(e=t[o])||void 0===e?void 0:e.description)?Object(m.jsx)("h1",{className:"card-wrapper--".concat(o,"--description ").concat((null===(l=t.layout)||void 0===l?void 0:l.darkTxt)?"invert":""),children:t[o].description}):""}function v(t,o){var e;return(null===t||void 0===t?void 0:t.button)?(null===(e=t.button.path)||void 0===e?void 0:e.startsWith("http"))?Object(m.jsxs)("a",{href:t.button.path,className:"card-wrapper--".concat(o,"--button"),children:[" ",w(t.button.label,"button",o)]}):Object(m.jsxs)(c.b,{to:{pathname:t.button.path},className:"card-wrapper--".concat(o,"--button"),children:[" ",w(t.button.label,"button",o)]}):""}function w(t,o,e){return t.split("").map((function(t,l){return Object(m.jsx)("span",{className:"card-wrapper--".concat(e,"--").concat(o,"--letter"),style:{transitionDelay:"".concat(30*l,"ms")},children:t})}))}var f=function(t){Object(b.a)(e,t);var o=Object(p.a)(e);function e(t){var l;return Object(r.a)(this,e),(l=o.call(this,t)).state={},l}return Object(n.a)(e,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"cards grid",children:Object(m.jsx)("div",{className:"cards-container row",children:this.props.data.map((function(t,o){return Object(m.jsx)(g,{section:t},o)}))})})}}]),e}(l.Component),k=[{title:"Inicio",isSwippable:!1,front:{description:"Portfolio de Sebastian Velo"},layout:{bg:"yellow",darkTxt:!0,size:"col-s-12 col-m-12 col-l-4 col-xl-4"}},{title:"Mi experiencia",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience-icon.png?raw=true",isSwippable:!0,invertImgColors:!0,layout:{bg:"orange",size:"col-s-12 col-m-12 col-l-4 col-xl-4"},back:{description:"Actualmente soy Desarrollador Ssr. en Mercado Libre Argentina."},button:{label:"Ver m\xe1s",path:"/experience"},children:[{title:"Mi experiencia",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience-icon.png?raw=true",isSwippable:!0,invertImgColors:!0,layout:{bg:"black",size:"col-s-12 col-m-12 col-l-4 col-xl-4"},button:{label:"Volver",path:"/"}},{title:"Mercado Libre",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/meli.png?raw=true",isSwippable:!0,layout:{bg:"yellow d-1",size:"col-s-12 col-m-12 col-l-8 col-xl-8",darkTxt:!0},back:{description:"Nuevos desarrollos del Vendor Central de Mercado Libre Argentina."},button:{label:"Ver m\xe1s",path:"/experience"}},{title:"ICBC",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/icbc.png?raw=true",isSwippable:!0,layout:{bg:"white",size:"col-s-12 col-m-12 col-l-4 col-xl-4",darkTxt:!0},back:{description:"An\xe1lisis, mantenimiento y nuevos desarrollos del homebanking corporativo."},button:{label:"Ver m\xe1s",path:"/experience"}},{title:"Banco Galicia",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/galicia.png?raw=true",layout:{bg:"darkorange",size:"col-s-12 col-m-12 col-l-4 col-xl-4"},button:{label:"Ver m\xe1s",path:"/experience"}},{title:"ICBC",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/icbc.png?raw=true",isSwippable:!0,layout:{bg:"white",size:"col-s-12 col-m-12 col-l-4 col-xl-4",darkTxt:!0},back:{description:"Mantenimiento del homebanking corporativo."},button:{label:"Ver m\xe1s",path:"/experience"}}]},{title:"Mi formaci\xf3n",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education-icon.png?raw=true",isSwippable:!0,invertImgColors:!0,layout:{bg:"red",size:"col-s-12 col-m-12 col-l-4 col-xl-4"},back:{description:"Soy T\xe9cnico en Inform\xe1tica y he realizado distintos cursos."},button:{label:"Ver m\xe1s",path:"/education"},children:[{title:"Mi formaci\xf3n",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education-icon.png?raw=true",isSwippable:!0,invertImgColors:!0,layout:{bg:"black",size:"col-s-12 col-m-12 col-l-4 col-xl-4"},button:{label:"Volver",path:"/"}},{title:"T\xe9cnico en Inform\xe1tica",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/jh.png?raw=true",layout:{bg:"blue l-2",size:"col-s-12 col-m-12 col-l-8 col-xl-8"}},{title:"Dip. en Des. de Videojuegos",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/utn.gif?raw=true",layout:{bg:"white d-2",size:"col-s-12 col-m-12 col-l-6 col-xl-6",darkTxt:!0}},{title:"Desarrollador Java",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/exo.png?raw=true",layout:{bg:"red l-2",size:"col-s-12 col-m-12 col-l-6 col-xl-6",darkTxt:!0}}]},{title:"Mis skills",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills-icon.png?raw=true",isSwippable:!0,invertImgColors:!0,layout:{bg:"green d-2",size:"col-s-12 col-m-12 col-l-4 col-xl-4"},back:{description:"Java y ReactJS son mis principales skills."},button:{label:"Ver m\xe1s",path:"/skills"},children:[{title:"Mis skills",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills-icon.png?raw=true",isSwippable:!0,invertImgColors:!0,layout:{bg:"black",size:"col-s-12 col-m-12 col-l-4 col-xl-4"},button:{label:"Volver",path:"/"}},{title:"Java",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/java.png?raw=true",layout:{bg:"lightblue d-3",size:"col-s-6 col-m-6 col-l-2 col-xl-2"}},{title:"Spring",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/spring.png?raw=true",layout:{bg:"green d-3",size:"col-s-6 col-m-6 col-l-2 col-xl-2"}},{title:"Struts",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/struts.png?raw=true",layout:{bg:"indigo d-2",size:"col-s-6 col-m-6 col-l-2 col-xl-2"}},{title:"GIT",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/git.png?raw=true",layout:{bg:"pink d-2",size:"col-s-6 col-m-6 col-l-2 col-xl-2"}},{title:"JavaScript",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/js.png?raw=true",layout:{bg:"yellow d-1",size:"col-s-6 col-m-6 col-l-2 col-xl-2",darkTxt:!0}},{title:"jQuery",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/jquery.png?raw=true",layout:{bg:"blue l-2",size:"col-s-6 col-m-6 col-l-2 col-xl-2",darkTxt:!0}},{title:"React",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/react.png?raw=true",layout:{bg:"lightblue d-4",size:"col-s-6 col-m-6 col-l-2 col-xl-2"}},{title:"NodeJS",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/nodejs.png?raw=true",layout:{bg:"green d-4",size:"col-s-6 col-m-6 col-l-2 col-xl-2"}},{title:"Bootstrap",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/bootstrap.png?raw=true",layout:{bg:"indigo d-4",size:"col-s-6 col-m-6 col-l-2 col-xl-2"}},{title:"SASS",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/sass.png?raw=true",layout:{bg:"pink d-4",size:"col-s-6 col-m-6 col-l-2 col-xl-2"}}]},{title:"Mis proyectos",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects-icon.png?raw=true",isSwippable:!0,invertImgColors:!0,layout:{bg:"pink d-2",size:"col-s-12 col-m-12 col-l-4 col-xl-4"},back:{description:"Podr\xe1s ver en detalle mis proyectos dando click en 'Ver m\xe1s'."},button:{label:"Ver m\xe1s",path:"/proyects"},children:[{title:"Mis proyectos",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects-icon.png?raw=true",isSwippable:!0,invertImgColors:!0,layout:{bg:"black",size:"col-s-12 col-m-12 col-l-4 col-xl-4"},button:{label:"Volver",path:"/"}},{title:"LoremIpsum",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/loremipsum.png?raw=true",isSwippable:!0,invertImgColors:!0,layout:{bg:"pink d-3",size:"col-s-12 col-m-12 col-l-8 col-xl-8"},back:{description:"Una red social estilo Instagram creada con React"},button:{label:"Ver LoremIpsum",path:"https://sebastianvelo.github.io/loremipsum"}},{title:"PixelArt",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/pixelart.png?raw=true",isSwippable:!0,darkTxt:!0,layout:{bg:"white",size:"col-s-12 col-m-12 col-l-6 col-xl-6",darkTxt:!0},back:{description:"\xa1Una aplicaci\xf3n web para hacer pixel art!"},button:{label:"Ver PixelArt",path:"https://sebastianvelo.github.io/pixel-art"}},{title:"ResumeCreator",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/resumecreator.png?raw=true",isSwippable:!0,invertImgColors:!0,layout:{bg:"green d-3",size:"col-s-12 col-m-12 col-l-6 col-xl-6"},back:{description:"En resumecreator podr\xe1s crear de manera sencilla tu CV."},button:{label:"Ver ResumeCreator",path:"https://resumecreator.github.io/cvbuilder/#/"}}]},{title:"Contacto",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact-icon.png?raw=true",isSwippable:!0,invertImgColors:!0,layout:{bg:"indigo d-2",size:"col-s-12 col-m-12 col-l-4 col-xl-4"},back:{description:"\xa1Pod\xe9s contactarme por LinkedIn, GitHub o CodePen!"},button:{label:"Ver m\xe1s",path:"/contact"},children:[{title:"Contacto",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact-icon.png?raw=true",isSwippable:!0,invertImgColors:!0,layout:{bg:"black",size:"col-s-12 col-m-12 col-l-4 col-xl-4"},button:{label:"Volver",path:"/"}},{title:"GitHub",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact/github.png?raw=true",isSwippable:!0,layout:{bg:"white",size:"col-s-6 col-m-6 col-l-4 col-xl-4",darkTxt:!0},back:{description:"@sebastianvelo"},button:{label:"Ir a GitHub",path:"https://github.com/sebastianvelo"}},{title:"CodePen",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact/codepen.png?raw=true",isSwippable:!0,layout:{bg:"white d-2",size:"col-s-6 col-m-6 col-l-4 col-xl-4",darkTxt:!0},back:{description:"@sebastianvelo"},button:{label:"Ir a CodePen",path:"https://codepen.io/sebastianvelo/"}},{title:"LinkedIn",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact/linkedin.png?raw=true",isSwippable:!0,layout:{bg:"lightblue l-2",size:"col-s-12 col-m-12 col-l-6 col-xl-6",darkTxt:!0},back:{description:"/sebastian-velo"},button:{label:"Ir a LinkedIn",path:"https://www.linkedin.com/in/sebastian-velo/"}},{title:"E-Mail",img:"https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact/email.png?raw=true",isSwippable:!0,layout:{bg:"blue l-2",size:"col-s-12 col-m-12 col-l-6 col-xl-6",darkTxt:!0},back:{description:"sebastian_velo@hotmail.com"}}]}],S=function(t){Object(b.a)(e,t);var o=Object(p.a)(e);function e(t){var l;return Object(r.a)(this,e),(l=o.call(this,t)).state={},l}return Object(n.a)(e,[{key:"render",value:function(){return Object(m.jsxs)("div",{id:"App",children:[Object(m.jsx)(u.a,{exact:!0,path:["/","/home"],component:function(){return Object(m.jsx)(f,{data:k})}}),k.filter((function(t){return t.button})).map((function(t){return Object(m.jsx)(u.a,{exact:!0,path:t.button.path,component:function(){return Object(m.jsx)(f,{data:t.children})}})}))]})}}]),e}(l.Component),y=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,33)).then((function(o){var e=o.getCLS,l=o.getFID,i=o.getFCP,s=o.getLCP,a=o.getTTFB;e(t),l(t),i(t),s(t),a(t)}))};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(c.a,{children:Object(m.jsx)(S,{})})}),document.getElementById("root")),y()}},[[32,1,2]]]);
//# sourceMappingURL=main.9445a930.chunk.js.map