(this.webpackJsonpdatagarden=this.webpackJsonpdatagarden||[]).push([[0],{171:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),c=a.n(r),o=a(17),s=a(3),i=a(12),u=a(13),m=a(16),p=a(15),d=a(14),b=function(){return function(e){console.log("fetching..."),fetch(null).then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_PLANTS",payload:t})}))}};a(76);var h=function(){return l.a.createElement("nav",{className:"nav header-custom"},l.a.createElement("div",{className:"header-brand"},l.a.createElement("span",{style:{fontFamily:"'Lexend Zetta', sans-serif"}},"data"),l.a.createElement("span",{style:{fontFamily:"'Bebas Neue', cursive"}}," Garden")),l.a.createElement(o.b,{to:"/",className:"link-box"},l.a.createElement("button",{className:"header-button"},"Home")),l.a.createElement(o.b,{to:"/table",className:"link-box"},l.a.createElement("button",{className:"header-button"},"Table")),l.a.createElement(o.b,{to:"/chart",className:"link-box"},l.a.createElement("button",{className:"header-button"},"Chart")))},E=(a(78),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e){e.newPlant&&this.props.plants.unshift(e.newPlant)}},{key:"render",value:function(){var e=this.props.plants.map((function(e){return l.a.createElement("div",{className:"plant-flex-container"},l.a.createElement("div",{className:"image-container",style:{background:"linear-gradient(\n                        rgba(0, 0, 0, 0.0),\n                        rgba(0, 0, 0, 0.0)\n                    ), url(".concat(e.picture,") center"),WebkitBackgroundSize:"cover",MozBackgroundSize:"cover",OBackgroundSize:"cover",backgroundSize:"cover"}}),l.a.createElement("div",{key:e.id,className:"plant-container"},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,l.a.createElement("span",null,"You planted on:")," ",e.plantDate),l.a.createElement("p",null,l.a.createElement("span",null,"Days to Harvest:")," ",e.growTime," days, on average"),l.a.createElement("p",null,l.a.createElement("span",null,"Ideal water per week:")," ",e.idealWater," inches"),l.a.createElement("p",null,l.a.createElement("span",null,"Ideal sun:")," ",e.idealSun," sun")))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement("h1",{className:"top-flex-container"},"Welcome back! Here are the crops you've planted."),l.a.createElement("div",{className:"flex-container"},e))}}]),a}(n.Component)),f=Object(d.b)((function(e){return{plants:e.plants.plants,newPlant:e.plants.plant}}),{fetchPlants:b})(E),g=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement("h1",null,"Table"))}}]),a}(n.Component),v=a(63),y=(a(171),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=l.a.createElement(v.a,{type:"horizontalBar",data:{labels:this.props.plants.map((function(e){return e.name})),datasets:[{label:"Days",backgroundColor:"lightblue",data:this.props.plants.map((function(e){return e.growTime}))}]},options:{title:{display:!0,text:"Days from planting to harvest",fontSize:20},scales:{yAxes:[{ticks:{beginAtZero:!0}}]},responsive:!0,legend:{display:!0,position:"right"}}});return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement("div",null,l.a.createElement("h1",null,"Chart"),l.a.createElement("div",{className:"chart-container"},e)))}}]),a}(n.Component)),O=Object(d.b)((function(e){return{plants:e.plants.plants,newPlant:e.plants.plant}}),{fetchPlants:b})(y),N=a(10),j=a(65),w=a(23),k={plants:a(66),plant:{}},S=Object(N.c)({plants:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PLANTS":return console.log("reducer"),Object(w.a)(Object(w.a)({},e),{},{plants:t.payload});case"NEW_PLANT":return console.log("reducer"),Object(w.a)(Object(w.a)({},e),{},{plant:t.payload});default:return e}}}),x=[j.a],T=Object(N.e)(S,{},Object(N.d)(N.a.apply(void 0,x),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));var _=function(){return l.a.createElement(o.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{store:T},l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:f}),l.a.createElement(s.a,{exact:!0,path:"/State-Management",component:f}),l.a.createElement(s.a,{exact:!0,path:"/table",component:g}),l.a.createElement(s.a,{exact:!0,path:"/chart",component:O})))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null)),document.getElementById("root"))},66:function(e){e.exports=JSON.parse('[{"id":1,"name":"Tomatoes","plantDate":"4/30","growTime":"60","idealWater":"1.5","idealSun":"Full","picture":"https://ychef.files.bbci.co.uk/976x549/p04w46sp.jpg"},{"id":2,"name":"Corn","plantDate":"5/15","growTime":"80","idealWater":"1.0","idealSun":"Full","picture":"https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=4320&h=2262&url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F840195.jpg"},{"id":3,"name":"Cucumbers","plantDate":"5/15","growTime":"60","idealWater":"1.5","idealSun":"Full","picture":"https://www.healthline.com/hlcmsresource/images/AN_images/AN88-Cucumbers-732x549-thumb.jpg"}]')},67:function(e,t,a){e.exports=a(172)},76:function(e,t,a){},78:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.9ef990c9.chunk.js.map