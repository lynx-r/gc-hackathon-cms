(self.webpackChunkredbook_cms=self.webpackChunkredbook_cms||[]).push([[8137],{1491:(C,f,o)=>{var l,D;/*!
* JavaScript Cookie v2.2.1
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/(function(i){var d;if(l=i,D=typeof l=="function"?l.call(f,o,f,C):l,D!==void 0&&(C.exports=D),d=!0,C.exports=i(),d=!0,!d){var O=window.Cookies,t=window.Cookies=i();t.noConflict=function(){return window.Cookies=O,t}}})(function(){function i(){for(var t=0,E={};t<arguments.length;t++){var M=arguments[t];for(var P in M)E[P]=M[P]}return E}function d(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function O(t){function E(){}function M(_,s,n){if(!(typeof document>"u")){n=i({path:"/"},E.defaults,n),typeof n.expires=="number"&&(n.expires=new Date(new Date*1+n.expires*864e5)),n.expires=n.expires?n.expires.toUTCString():"";try{var v=JSON.stringify(s);/^[\{\[]/.test(v)&&(s=v)}catch{}s=t.write?t.write(s,_):encodeURIComponent(String(s)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),_=encodeURIComponent(String(_)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var r="";for(var e in n)n[e]&&(r+="; "+e,n[e]!==!0&&(r+="="+n[e].split(";")[0]));return document.cookie=_+"="+s+r}}function P(_,s){if(!(typeof document>"u")){for(var n={},v=document.cookie?document.cookie.split("; "):[],r=0;r<v.length;r++){var e=v[r].split("="),a=e.slice(1).join("=");!s&&a.charAt(0)==='"'&&(a=a.slice(1,-1));try{var I=d(e[0]);if(a=(t.read||t)(a,I)||d(a),s)try{a=JSON.parse(a)}catch{}if(n[I]=a,_===I)break}catch{}}return _?n[_]:n}}return E.set=M,E.get=function(_){return P(_,!1)},E.getJSON=function(_){return P(_,!0)},E.remove=function(_,s){M(_,"",i(s,{expires:-1}))},E.defaults={},E.withConverter=O,E}return O(function(){})})},88137:(C,f,o)=>{"use strict";o.r(f),o.d(f,{ADMIN_PERMISSIONS_EE:()=>W,ROUTES_EE:()=>h,SETTINGS_LINKS_EE:()=>m});var l=o(92132),D=o(21272),i=o(55506),d=o(1491),O=o(54894),t=o(17703),E=o(26384),M=o(15126),P=o(63299),_=o(67014),s=o(59080),n=o(79275),v=o(14718),r=o(82437),e=o(61535),a=o(5790),I=o(12083),L=o(35223),K=o(5409),c=o(74930),S=o(2600),p=o(48940),j=o(41286),w=o(56336),x=o(13426),N=o(84624),y=o(77965),F=o(54257),G=o(71210),J=o(51187),z=o(39404),V=o(58692),Y=o(501),Z=o(57646),$=o(23120),H=o(44414),Q=o(25962),X=o(14664),k=o(42588),b=o(90325),q=o(62785),oo=o(87443),no=o(41032),to=o(22957),_o=o(93179),Eo=o(73055),so=o(15747),ao=o(85306),io=o(26509),ro=o(32058),eo=o(81185),lo=o(82261);const B=()=>{const A=(0,t.W5)("/auth/login/:authResponse"),{formatMessage:U}=(0,O.A)(),{push:R}=(0,t.W6)(),T=D.useCallback(()=>{R(`/auth/oops?info=${encodeURIComponent(U({id:"Auth.form.button.login.providers.error",defaultMessage:"We cannot connect you through the selected provider."}))}`)},[R,U]),{setToken:g}=(0,E.a)("AuthResponse");return D.useEffect(()=>{if(A?.params.authResponse==="error"&&T(),A?.params.authResponse==="success"){const u=d.get("jwtToken");u?(g(u),d.remove("jwtToken"),R("/auth/login")):T()}},[A,T,g,R]),(0,l.jsx)(i.Bl,{})},W={settings:{auditLogs:{main:[{action:"admin::audit-logs.read",subject:null}],read:[{action:"admin::audit-logs.read",subject:null}],update:[{action:"admin::audit-logs.update",subject:null}]},"review-workflows":{main:[{action:"admin::review-workflows.read",subject:null}],read:[{action:"admin::review-workflows.read",subject:null}],create:[{action:"admin::review-workflows.create",subject:null}],delete:[{action:"admin::review-workflows.delete",subject:null}],update:[{action:"admin::review-workflows.update",subject:null}]},sso:{main:[{action:"admin::provider-login.read",subject:null}],read:[{action:"admin::provider-login.read",subject:null}],update:[{action:"admin::provider-login.update",subject:null}]}}},h=[{Component:()=>({default:B}),to:"/auth/login/:authResponse",exact:!0}],m=()=>({global:[...window.strapi.features.isEnabled(window.strapi.features.SSO)?[{intlLabel:{id:"Settings.sso.title",defaultMessage:"Single Sign-On"},to:"/settings/single-sign-on",id:"sso"}]:[],...window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS)?[{intlLabel:{id:"Settings.review-workflows.page.title",defaultMessage:"Review Workflows"},to:"/settings/review-workflows",id:"review-workflows"}]:[]],admin:[...window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS)?[{intlLabel:{id:"global.auditLogs",defaultMessage:"Audit Logs"},to:"/settings/audit-logs?pageSize=50&page=1&sort=date:DESC",id:"auditLogs"}]:[]]})}}]);
