(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(2),r=n(3),c=n(4),l=n(6),s=n(5),u=n(7),m=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={img:""},n.onChange=function(e){var t=e.target.files.item(0),a=new FileReader;a.addEventListener("load",n.fileLoad),a.readAsDataURL(t)},n.fileLoad=function(e){n.setState({img:e.target.result})},n.submit=function(){},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("input",{type:"file",onChange:this.onChange}),this.state.img&&i.a.createElement("img",{alt:"upload-img",width:"100%",src:this.state.img}),i.a.createElement("button",{onClick:this.submit},"Submit"))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(o.render)(i.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.4ae6d20d.chunk.js.map