(function(){"use strict";var n={7544:function(n,t,e){var a=e(3751),i=e(641),o=e(33);const r={id:"app",class:"business-card"},l={class:"card"},c=["src"],s={class:"info"},u={class:"title"},f={class:"contact"},h=["href"],d=["href"],p=["href"];function m(n,t,e,a,m,v){return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.Lk)("div",l,[(0,i.Lk)("img",{class:"photo",src:m.photo,alt:"Profile Photo"},null,8,c),(0,i.Lk)("div",s,[(0,i.Lk)("h1",null,(0,o.v_)(m.name),1),(0,i.Lk)("p",u,(0,o.v_)(m.position)+" at "+(0,o.v_)(m.company),1),(0,i.Lk)("p",f,[(0,i.Lk)("a",{href:"mailto:"+m.email},(0,o.v_)(m.email),9,h),t[1]||(t[1]=(0,i.Lk)("br",null,null,-1)),(0,i.Lk)("a",{href:"tel:"+m.phone},(0,o.v_)(m.phone),9,d),t[2]||(t[2]=(0,i.Lk)("br",null,null,-1)),(0,i.Lk)("a",{href:m.linkedin,target:"_blank"},"LinkedIn",8,p)]),(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...n)=>v.generateVCard&&v.generateVCard(...n)),class:"save-button"},"Save Contact")]),t[3]||(t[3]=(0,i.Lk)("div",{class:"footer"},[(0,i.Lk)("p",null,"Implemented by Ziyad")],-1))])])}e(4603),e(7566),e(8721);var v={name:"App",data(){return{name:"Ziyad Al-Wagdani",firstName:"Ziyad",lastName:"Al-Wagdani",position:"Automation Engineer",company:"Rua Almadinah",email:"z.wagdani@ruaalmadinah.com",phone:"+966559968801",linkedin:"https://www.linkedin.com/in/zalwagdani/",photo:"https://media.licdn.com/dms/image/v2/D4D03AQGusNMhmRj1Sw/profile-displayphoto-shrink_400_400/B4DZSS.PyDG8Ao-/0/1737632579599?e=1743033600&v=beta&t=T_0vnFazAjenWmPEO0uDovqsQwPMhDMilXzNhTRt4mw"}},methods:{generateVCard(){const n=`\nBEGIN:VCARD\nVERSION:3.0\nFN:${this.name} \nN:${this.lastName};${this.firstName};;;\nORG:${this.company}\nTEL:${this.phone}\nEMAIL:${this.email}\nURL:${this.linkedin}\nPHOTO;VALUE=URI:${this.photo}\nEND:VCARD\n      `,t=new Blob([n],{type:"text/vcard"}),e=document.createElement("a");e.href=URL.createObjectURL(t),e.download=`${this.name}_business_card.vcf`,e.click()}}},k=e(6262);const b=(0,k.A)(v,[["render",m],["__scopeId","data-v-3350a406"]]);var L=b;(0,a.Ef)(L).mount("#app")}},t={};function e(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return n[a].call(o.exports,o,o.exports,e),o.exports}e.m=n,function(){var n=[];e.O=function(t,a,i,o){if(!a){var r=1/0;for(u=0;u<n.length;u++){a=n[u][0],i=n[u][1],o=n[u][2];for(var l=!0,c=0;c<a.length;c++)(!1&o||r>=o)&&Object.keys(e.O).every((function(n){return e.O[n](a[c])}))?a.splice(c--,1):(l=!1,o<r&&(r=o));if(l){n.splice(u--,1);var s=i();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=n.length;u>0&&n[u-1][2]>o;u--)n[u]=n[u-1];n[u]=[a,i,o]}}(),function(){e.d=function(n,t){for(var a in t)e.o(t,a)&&!e.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:t[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,a){var i,o,r=a[0],l=a[1],c=a[2],s=0;if(r.some((function(t){return 0!==n[t]}))){for(i in l)e.o(l,i)&&(e.m[i]=l[i]);if(c)var u=c(e)}for(t&&t(a);s<r.length;s++)o=r[s],e.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return e.O(u)},a=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=e.O(void 0,[504],(function(){return e(7544)}));a=e.O(a)})();
//# sourceMappingURL=app.acd53379.js.map