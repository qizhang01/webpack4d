(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{93:function(e,t,n){"use strict";n.r(t);var u=n(0),o=u.createContext({count:0,setCount:function(e){console.log(e)}}),l=n(4),c=u.useContext,r=function(){var e=c(o),t=e.count,n=e.setCount;return u.createElement("div",null,u.createElement("h4",null,"Page Child"),u.createElement(l.Button,{onClick:function(){return n(t+1)}},"Add"))},a=u.useState;t.default=function(){var e=a(0),t=e[0],n=e[1];return u.createElement(u.Fragment,null,u.createElement(o.Provider,{value:{count:t,setCount:n}},u.createElement("h4",null,"根组件 cont: ",t),u.createElement(r,null)))}}}]);