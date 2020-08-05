(this.webpackJsonpdatagarden=this.webpackJsonpdatagarden||[]).push([[0],{178:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),o=a(21),i=a(4),s=a(9),u=a(10),m=a(12),p=a(11),d=a(7);function h(){return function(e){return e({type:"FETCH_PLANTS"})}}a(81);var E=a(16),b=(a(51),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var a={id:Date.now(),name:e.getName.value,plantDate:e.getPlantDate.value,growTime:e.getGrowTime.value,idealWater:e.getWater.value,idealSun:e.getSun.value,picture:e.getPicture.value};console.log("Adding plant to state: ".concat(a.name)),e.props.createPlant(a),e.setState({showHide:!1})},e.state={showHide:!1},e}return Object(u.a)(a,[{key:"handleModalShowHide",value:function(){this.setState({showHide:!this.state.showHide})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn header-button-add",style:{backgroundColor:"#463239",color:"white"},onClick:function(){return e.handleModalShowHide()}},"Add Plant"),l.a.createElement(E.a,{show:this.state.showHide},l.a.createElement(E.a.Header,{style:{backgroundColor:"#7FB285",color:"white"},closeButton:!0,onClick:function(){return e.handleModalShowHide()}},l.a.createElement(E.a.Title,{style:{fontFamily:"'Roboto Slab', serif",fontSize:"30px"}},"Add Plant")),l.a.createElement(E.a.Body,{style:{backgroundColor:"#FAB3A9",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("label",null,"Name: "),l.a.createElement("br",null),l.a.createElement("input",{className:"input",ref:function(t){return e.getName=t},type:"text",placeholder:"Name"})),l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("label",null,"Planting Date: "),l.a.createElement("br",null),l.a.createElement("input",{className:"input",ref:function(t){return e.getPlantDate=t},type:"text",placeholder:"Planting Date"})),l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("label",null,"Days to Harvest: "),l.a.createElement("br",null),l.a.createElement("input",{className:"input",ref:function(t){return e.getGrowTime=t},type:"text",placeholder:"Days to Harvest"})),l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("label",null,"Ideal Water: "),l.a.createElement("br",null),l.a.createElement("input",{className:"input",ref:function(t){return e.getWater=t},type:"text",placeholder:"Ideal Water"})),l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("label",null,"Ideal Sun: "),l.a.createElement("br",null),l.a.createElement("input",{className:"input",ref:function(t){return e.getSun=t},type:"text",placeholder:"Ideal Sun"})),l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("label",null,"Picture Link: "),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"3",style:{height:"65px"},className:"input",ref:function(t){return e.getPicture=t},type:"text",placeholder:"Full Link to Picture"}))),l.a.createElement("button",{className:"btn btn-light header-button",style:{margin:"0 auto"},onClick:this.handleSubmit},"Submit"))))}}]),a}(n.Component)),g=Object(d.b)(null,{createPlant:function(e){return function(t){return t({type:"NEW_PLANT",payload:e})}}})(b),f=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).saveStorage=function(){var t=JSON.stringify(e.props.plants);console.log(t),localStorage.setItem("state",t)},e.loadStorage=function(){var t=JSON.parse(localStorage.getItem("state"));console.log(t),e.props.loadPlants(t)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPlants()}},{key:"render",value:function(){return l.a.createElement("nav",{className:"nav header-custom"},l.a.createElement("div",{className:"header-brand"},l.a.createElement("h1",null,"datagarden")),l.a.createElement("div",{className:"links"},l.a.createElement(o.b,{to:"/",className:"link-box"},l.a.createElement("button",{className:"header-button-link"},"Home")),l.a.createElement(o.b,{to:"/table",className:"link-box"},l.a.createElement("button",{className:"header-button-link"},"Table")),l.a.createElement(o.b,{to:"/chart",className:"link-box"},l.a.createElement("button",{className:"header-button-link"},"Chart"))),l.a.createElement("div",{className:"storage"},l.a.createElement("button",{className:"header-button",onClick:this.saveStorage},"Save Plants"),l.a.createElement("button",{className:"header-button",onClick:this.loadStorage},"Load Plants")),l.a.createElement(g,null))}}]),a}(n.Component),v=Object(d.b)((function(e){return{plants:e.plants.plants}}),{fetchPlants:h,loadPlants:function(e){return function(t){return t({type:"LOAD_PLANTS",payload:e})}}})(f),y=a(34),N=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t={id:n.props.id,name:n.state.name,plantDate:n.state.plantDate,growTime:n.state.growTime,idealWater:n.state.idealWater,idealSun:n.state.idealSun,picture:n.state.picture};console.log("Editing existing plant: ".concat(t.name)),n.props.editPlant(t),n.setState({showHide:!1})};var l=n.props.id,r=n.props.plants.find((function(e){return e.id===l}));return n.state={showHide:!1,name:r.name,plantDate:r.plantDate,growTime:r.growTime,idealWater:r.idealWater,idealSun:r.idealSun,picture:r.picture},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPlants()}},{key:"handleModalShowHide",value:function(){this.setState({showHide:!this.state.showHide})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn list-button",style:{backgroundColor:"#463239",color:"white"},onClick:function(){return e.handleModalShowHide()}},"Edit Plant"),l.a.createElement(E.a,{show:this.state.showHide},l.a.createElement(E.a.Header,{style:{backgroundColor:"#7FB285",color:"white"},closeButton:!0,onClick:function(){return e.handleModalShowHide()}},l.a.createElement(E.a.Title,{style:{fontFamily:"'Roboto Slab', serif",fontSize:"30px"}},"Edit Plant")),l.a.createElement(E.a.Body,{style:{backgroundColor:"#FAB3A9",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px"}},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("label",null,"Name: "),l.a.createElement("br",null),l.a.createElement("input",{className:"input",onChange:this.onChange,value:this.state.name,type:"text",name:"name",placeholder:"name"})),l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("label",null,"Planting Date: "),l.a.createElement("br",null),l.a.createElement("input",{className:"input",onChange:this.onChange,value:this.state.plantDate,type:"text",name:"plantDate",placeholder:"Planting Date"})),l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("label",null,"Days to Harvest: "),l.a.createElement("br",null),l.a.createElement("input",{className:"input",onChange:this.onChange,value:this.state.growTime,type:"text",name:"growTime",placeholder:"Days to Harvest"})),l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("label",null,"Ideal Water (inches): "),l.a.createElement("br",null),l.a.createElement("input",{className:"input",onChange:this.onChange,value:this.state.idealWater,name:"idealWater",type:"text",placeholder:"Water per week in inches"})),l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("label",null,"Ideal Sun Exposure: "),l.a.createElement("br",null),l.a.createElement("input",{className:"input",onChange:this.onChange,value:this.state.idealSun,type:"text",name:"idealSun",placeholder:"Ideal sun exposure"})),l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("label",null,"Picture Link: "),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"3",style:{height:"65px"},onChange:this.onChange,className:"input",value:this.state.picture,name:"picture",type:"text",placeholder:"Full link"}))),l.a.createElement("button",{className:"btn btn-light header-button",style:{margin:"0 auto"},onClick:this.handleSubmit},"Submit"))))}}]),a}(n.Component),w=Object(d.b)((function(e){return{plants:e.plants.plants}}),{editPlant:function(e){return function(t){return t({type:"EDIT_PLANT",payload:e})}},fetchPlants:h})(N),S=(a(84),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPlants()}},{key:"render",value:function(){var e=this,t=this.props.plants.map((function(t){return l.a.createElement("div",{className:"plant-flex-container"},l.a.createElement("div",{className:"image-container",style:{background:"linear-gradient(\n                        rgba(0, 0, 0, 0.0),\n                        rgba(0, 0, 0, 0.0)\n                    ), url(".concat(t.picture,") center"),WebkitBackgroundSize:"cover",MozBackgroundSize:"cover",OBackgroundSize:"cover",backgroundSize:"cover"}}),l.a.createElement("div",{key:t.id,className:"plant-container"},t.name.length?l.a.createElement("h3",null,t.name):l.a.createElement("h3",null,"N/A"),t.plantDate.length?l.a.createElement("p",null,l.a.createElement("span",null,"You planted on:")," ",t.plantDate):l.a.createElement("p",null,l.a.createElement("span",null,"You planted on:")," N/A"),t.growTime.length?l.a.createElement("p",null,l.a.createElement("span",null,"Days to Harvest:")," ",t.growTime," days, on average"):l.a.createElement("p",null,l.a.createElement("span",null,"Days to Harvest:")," N/A "),t.idealWater.length?l.a.createElement("p",null,l.a.createElement("span",null,"Ideal water per week:")," ",t.idealWater," inches"):l.a.createElement("p",null,l.a.createElement("span",null,"Ideal water per week:")," N/A"),t.idealSun.length?l.a.createElement("p",null,l.a.createElement("span",null,"Ideal sun:")," ",t.idealSun," sun"):l.a.createElement("p",null,l.a.createElement("span",null,"Ideal sun:")," N/A"),l.a.createElement("button",{className:"list-button",onClick:function(){return e.props.deletePlant(t.id)}},"Delete Plant"),l.a.createElement(w,{id:t.id})))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("h1",{className:"top-flex-container"},"Welcome back! Here are the crops you've planted..."),l.a.createElement("div",{className:"flex-container"},t))}}]),a}(n.Component)),x=Object(d.b)((function(e){return{plants:e.plants.plants}}),{fetchPlants:h,deletePlant:function(e){return function(t){return t({type:"DELETE_PLANT",payload:e})}}})(S),k=(a(85),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("h1",{className:"top-flex-container"},"Quick Reference Table"),l.a.createElement("div",{className:"table-container"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Plant Date"),l.a.createElement("th",{scope:"col"},"Days to Harvest"),l.a.createElement("th",{scope:"col"},"Water/wk (inches)"),l.a.createElement("th",{scope:"col"},"Ideal sun"))),l.a.createElement("tbody",null,this.props.plants.map((function(e){return l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},e.name),l.a.createElement("td",null,e.plantDate),l.a.createElement("td",null,e.growTime),l.a.createElement("td",null,e.idealWater),l.a.createElement("td",null,e.idealSun))}))))))}}]),a}(n.Component)),O=Object(d.b)((function(e){return{plants:e.plants.plants,newPlant:e.plants.plant}}),{fetchPlants:h})(k),D=a(68),j=a(49),P=a.n(j),C=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=l.a.createElement(D.a,{data:{labels:this.props.plants.map((function(e){return e.name})),datasets:[{label:"Days",backgroundColor:"#FAB3A9",data:this.props.plants.map((function(e){return e.growTime})),barPercentage:.5,borderColor:"#ec6553",borderWidth:2}]},options:{title:{display:!0,text:"Days from planting to harvest",fontSize:20},layout:{padding:20},scales:{xAxes:[{ticks:{beginAtZero:!0}}]},responsive:!0,maintainAspectRatio:!1,legend:{fullWidth:!0}}});return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("h1",{className:P.a.top},"Chart of Growing Times"),l.a.createElement("div",null,l.a.createElement("div",{className:P.a.container},e)))}}]),a}(n.Component),T=Object(d.b)((function(e){return{plants:e.plants.plants,newPlant:e.plants.plant}}),{fetchPlants:h})(C),A=a(19),W=a(70),_=a(14),H={plants:a(71)},F=Object(A.c)({plants:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PLANTS":return console.log("reducer"),Object(_.a)({},e);case"NEW_PLANT":return Object(_.a)(Object(_.a)({},e),{},{plants:e.plants.concat(t.payload)});case"EDIT_PLANT":return Object(_.a)(Object(_.a)({},e),{},{plants:e.plants.map((function(e,a){return e.id===t.payload.id?Object(_.a)(Object(_.a)({},e),{},{id:t.payload.id,name:t.payload.name,plantDate:t.payload.plantDate,growTime:t.payload.growTime,idealWater:t.payload.idealWater,idealSun:t.payload.idealSun,picture:t.payload.picture}):e}))});case"DELETE_PLANT":return Object(_.a)(Object(_.a)({},e),{},{plants:e.plants.filter((function(e){return e.id!==t.payload}))});case"LOAD_PLANTS":return Object(_.a)(Object(_.a)({},e),{},{plants:t.payload});default:return e}}}),L=[W.a],I=Object(A.e)(F,{},Object(A.d)(A.a.apply(void 0,L),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));var B=function(){return l.a.createElement(o.a,{basename:"/"},l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{store:I},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:x}),l.a.createElement(i.a,{exact:!0,path:"/State-Management",component:x}),l.a.createElement(i.a,{exact:!0,path:"/table",component:O}),l.a.createElement(i.a,{exact:!0,path:"/chart",component:T})))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root"))},49:function(e,t,a){e.exports={container:"Chart_container__1zXEl",top:"Chart_top__2SMZR"}},51:function(e,t,a){},71:function(e){e.exports=JSON.parse('[{"id":1,"name":"Tomatoes","plantDate":"4/30","growTime":"60","idealWater":"1.5","idealSun":"Full","picture":"https://ychef.files.bbci.co.uk/976x549/p04w46sp.jpg"},{"id":2,"name":"Corn","plantDate":"5/15","growTime":"80","idealWater":"1.0","idealSun":"Full","picture":"https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=4320&h=2262&url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F840195.jpg"},{"id":3,"name":"Cucumbers","plantDate":"5/15","growTime":"60","idealWater":"1.5","idealSun":"Full","picture":"https://www.healthline.com/hlcmsresource/images/AN_images/AN88-Cucumbers-732x549-thumb.jpg"},{"id":4,"name":"Carrots","plantDate":"4/30","growTime":"80","idealWater":"1.0","idealSun":"Full","picture":"https://ucarecdn.com/459eb7be-115a-4d85-b1d8-deaabc94c643/-/format/auto/-/preview/3000x3000/-/quality/lighter/"},{"id":5,"name":"Peas","plantDate":"3/15","growTime":"75","idealWater":"1.0","idealSun":"Full","picture":"https://i.dailymail.co.uk/i/newpix/2018/05/17/12/4C5A88A300000578-0-image-a-14_1526556707155.jpg"},{"id":6,"name":"Broccoli","plantDate":"8/15","growTime":"125","idealWater":"1.5","idealSun":"Full","picture":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/full-frame-shot-of-broccoli-royalty-free-image-571248799-1532377854.jpg?crop=1.00xw:0.669xh;0,0.0641xh&resize=1200:*"}]')},72:function(e,t,a){e.exports=a(178)},81:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.ec9c2245.chunk.js.map