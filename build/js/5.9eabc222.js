(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{81:function(e,t,n){var a=n(31),l=n(82);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var u={insert:"head",singleton:!1};a(l,u);e.exports=l.locals||{}},82:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n(2),u=n(4),r=n(34),i=n(1),o=[{title:"首页",uri:i.a.Home},{title:"Page1",children:[{title:"Mobx hook",uri:i.a.PageSub1},{title:"Mobx class",uri:i.a.PageSub2},{title:"useContext",uri:i.a.PageSub3},{title:"useReducer",uri:i.a.PageSub4},{title:"authorized",uri:i.a.PageSub5}]}],c=n(48),s=n(14),m=(n(81),u.Layout.Sider),d=u.Layout.Header,p=u.Layout.Content,b=u.Menu.SubMenu;t.default=Object(l.withRouter)((function(e){var t=a.useState(!1),n=t[0],i=t[1],x=e.routes,E=function(e){return a.createElement(u.Menu.Item,{key:e.title},a.createElement(l.Link,{to:e.uri?e.uri:"/"},a.createElement("span",null,e.title)))};return a.createElement(u.Layout,null,a.createElement(m,{collapsible:!0,collapsed:n,onCollapse:function(e){return i(e)},className:"layout-sidebar"},a.createElement("header",{className:"layout-sidebar__header"},a.createElement(c.b,null)),a.createElement(u.Menu,{mode:"inline",theme:"dark",multiple:!1},o.map((function(e){return e.children?function(e){return a.createElement(b,{key:e.title,title:e.title},e.children&&e.children.map((function(e){return E(e)})))}(e):E(e)})))),a.createElement(u.Layout,{className:"layout-warpper-content"},a.createElement(d,null,a.createElement("span",null,"xxx xxxx xxxx"),a.createElement(u.Button,{onClick:function(){s.a.cleanAuth()}},"Logout")),a.createElement(p,null,Object(r.a)(x,!0))))}))}}]);