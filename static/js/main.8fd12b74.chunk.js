(this["webpackJsonpcovis-2020"]=this["webpackJsonpcovis-2020"]||[]).push([[0],{234:function(e,a,t){e.exports=t(480)},239:function(e,a,t){},240:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},478:function(e,a,t){},480:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),r=t(12),i=t.n(r),l=(t(239),t(240),t(82)),c=t(192),s=t(9),m=t(484),u=t(483),d=t(482),p=function(e){return e[e.length-1]},v=t(18),h={S:"#239e81",E:"#ffc663",I:"rgb(240, 2, 127)",R:"#63c3ff",H:"#8ab5ff"},k={S:o.a.createElement("span",null,"Susceptible - ",o.a.createElement("span",{style:{color:h.S},className:"highlight text-S"},"n\xe1chyln\xe1"),", ohrozen\xe1 skupina obyvate\u013estva"),E:o.a.createElement("span",null,"Exposed - ",o.a.createElement("span",{style:{color:h.E},className:"highlight text-E"},"vystaven\xed")," - v\xedrus maj\xfa v tele, ale s\xfa v inkuba\u010dnej dobe a neprejavuj\xfa sympt\xf3my"),I:o.a.createElement("span",null,"Infected - ",o.a.createElement("span",{style:{color:h.I},className:"highlight text-I"},"chor\xed"),", infek\u010dn\xed jedinci"),R:o.a.createElement("span",null,"Removed - skupina obyvate\u013estva, ktor\xe1 je z modelu ",o.a.createElement("span",{style:{color:h.R},className:"highlight text-R"},"vyl\xfa\u010den\xe1 "),", \u010di u\u017e v izol\xe1cii, vylie\u010den\xed alebo m\u0155tvi"),H:o.a.createElement("span",null,"Hospitalizovan\xed - infek\u010dn\xed jedinci, ktor\xed boli ",o.a.createElement("span",{style:{color:h.H},className:"highlight text-H"},"hospitalizovan\xed")),FATAL:o.a.createElement("span",null,"FATAL ")},f={R:"url(#R_gradient)",H:"url(#H_gradient)",S:"url(#S_gradient)"},E={T:function(e){return"de\u0148 ".concat(e)},S:function(e){return"".concat(e," n\xe1chyln\xfdch")},E:function(e){return"".concat(e," vystaven\xfdch")},I:function(e){return"".concat(e," chor\xfdch")},R:function(e){return"".concat(e," vyl\xfa\u010den\xfdch")},H:function(e){return"".concat(e," hospitalizovan\xfdch")},FATAL:function(e){return"".concat(e," m\u0155tvych")}},b={S:1,E:3,I:4,R:5,H:2},j=(t(128),t(202),t(20)),y=function(e){for(var a=Object(n.useState)([]),t=Object(s.a)(a,2),r=t[0],i=(t[1],e.N),l=e.incubationTime,c=e.infectionTime,m=e.contactRate,u=e.probabilityOfTransmission,d=e.isQuarantined,k=void 0!==d&&d,y=e.quarantinePower,g=e.curveList,w=e.quarantineStart,z=[],O=0;O<200;O+=.1)z.push(O);var S=function(e,a,t){for(var n=[],o=Object.keys(e),r=function(r){if(r%a===0){var i={T:r/a};o.map((function(e){return i[e]=[]})),o.map((function(a){return i[a].push(e[a][r]*t)})),n.push(i)}},i=0;i<e[o[0]].length;i++)r(i);return n}(function(e,a,t){var n=e.S0,o=e.E0,r=e.I0,i=e.R0,l=e.H0,c=(e.MILD0,e.MODERATE0,e.FATAL0,[n]),s=[o],m=[r],u=[i],d=[l],v=[0],h=a.alpha,k=a.beta,f=a.gamma,E=a.isQuarantined,b=a.quarantinePower,j=void 0===b?1:b,y=a.hospitalizationRate,g=void 0===y?.15:y,w=a.fatalityRate,z=void 0===w?.037:w,O=a.hospitalizationTime,S=void 0===O?14:O,x=a.quarantineStart,N=t[1]-t[0],R=!1;return t.forEach((function(e,a){e>=x&&(k=E&&!R?k*(1-Math.pow(j,2)):k,R=!0);var t=p(c)-k*p(c)*p(m)*N,n=p(s)+(k*p(c)*p(m)-h*p(s))*N,o=p(m)+(h*p(s)-f*p(m))*N,r=p(u)+f*p(m)*N,i=p(d)+(g*p(m)-1/S*p(d))*N,l=p(v)+p(d)*(z*N)*N;c.push(t),s.push(n),m.push(o),u.push(r),d.push(i),v.push(l)})),{S:c,E:s,I:m,R:u,H:d,FATAL:v}}({S0:1-1/i,E0:1/i,I0:0,R0:0,H0:0},{alpha:1/l,beta:m*u,gamma:1/c,isQuarantined:k,quarantinePower:y,quarantineStart:w},z),10,i),x=(m*u*c).toFixed(2),N=Object(n.useState)(window.innerWidth<800),R=Object(s.a)(N,2),I=R[0],$=R[1];return Object(n.useEffect)((function(){window.addEventListener("resize",(function(){return $(window.innerWidth<800)}))})),o.a.createElement("div",{class:"chart-wrapper"},o.a.createElement("div",{class:"r0 default-text"},o.a.createElement(j.a,null,"$R_0$")," = ",x," (z\xe1kladn\xe9 reproduk\u010dn\xe9 \u010d\xedslo, ktor\xe9 ur\u010duje r\xfdchlos\u0165 \u0161\xedrenia v\xedrusu)"),o.a.createElement(v.g,{height:300,width:"100%"},o.a.createElement(v.b,{height:300,data:S,margin:{top:25,right:20,left:40,bottom:10}},o.a.createElement(v.c,{strokeDasharray:"3"}),o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"R_gradient",x1:"0",y1:"0",x2:"0",y2:"1"},o.a.createElement("stop",{offset:"5%",stopColor:h.R,stopOpacity:.8}),o.a.createElement("stop",{offset:"95%",stopColor:h.R,stopOpacity:0})),o.a.createElement("linearGradient",{id:"H_gradient",x1:"0",y1:"0",x2:"0",y2:"1"},o.a.createElement("stop",{offset:"5%",stopColor:h.H,stopOpacity:.8}),o.a.createElement("stop",{offset:"95%",stopColor:h.H,stopOpacity:0})),o.a.createElement("linearGradient",{id:"S_gradient",x1:"0",y1:"0",x2:"0",y2:"1"},o.a.createElement("stop",{offset:"5%",stopColor:h.S,stopOpacity:.8}),o.a.createElement("stop",{offset:"95%",stopColor:h.S,stopOpacity:0}))),k?o.a.createElement(v.f,{x:w,stroke:"#1a2538",isFront:!1,position:"top",strokeWidth:.4},o.a.createElement(v.d,{value:"Zavedenie karant\xe9ny",position:"top"})):"",o.a.createElement(v.i,{name:"LIL uZI",tickCount:10,label:o.a.createElement("span",null,"Den"),interval:I?49:19,dataKey:"T"},o.a.createElement(v.d,{value:"dn\xed od za\u010diatku",offset:-5,position:"bottom"})),o.a.createElement(v.j,{tickFormatter:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}),o.a.createElement(v.h,{formatter:function(e,a){return"".concat(E[a](Math.round(e)))}}),r?r.map((function(e,a){return o.a.createElement(v.e,{key:a,r:1,x:e.T,y:e.confirmed})})):"",Object.keys(g).map((function(e,a){return g[e]?o.a.createElement(v.a,{key:a,type:"monotone",dataKey:e,stackId:b[e],fill:f[e]||h[e],stroke:h[e]}):""})))))},g=t(205),w=(t(474),function(e){e.defaultVal;var a=e.title,t=(e.description,e.min),n=e.max,r=e.value,i=e.setValue,l=e.step,c=e.valueFormatter,s=e.showValue;return o.a.createElement("div",{className:"slider custom-labels"},o.a.createElement("div",{className:"slider-text"},o.a.createElement("div",{className:"slider-title"},a),o.a.createElement("div",{className:"default-text"},e.children),o.a.createElement("div",{className:"slider-value"},c?s?c?c(s):s:c(r):r)),o.a.createElement(g.a,{className:"var-slider",min:t,max:n,value:r,onChange:i,trackStyle:{backgroundColor:"rgb(144, 144, 144)"},step:l,handleStyle:{border:"solid 1px #93a1ad"}}))}),z=(t(475),"\n  $$\n  \\frac{dS}{dt}=-\\beta SI \\qquad\n  \\frac{dE}{dt}={\\beta}SI-\\alpha{E} \\qquad\n  \n  "),O="\n  \\frac{dI}{dt}=\\alpha{E}-\\gamma{I} \\qquad\n  \\frac{dR}{dt}=\\gamma{I}\n  $$\n  $$R_0=\\frac{\\beta}{\\gamma}$$\n",S=function(){var e=Object(n.useState)(window.innerWidth<800),a=Object(s.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){window.addEventListener("resize",(function(){return r(window.innerWidth<800)}))})),o.a.createElement(d.a,null,o.a.createElement("div",{className:"notes-wrapper"},o.a.createElement(u.a,null,o.a.createElement("div",{className:"notes-title"},"Pozn\xe1mky")),o.a.createElement(u.a,null,o.a.createElement("div",{class:"default-text note-block"},"Vytvorili sme t\xfato kalkula\u010dku s cie\u013eom lep\u0161ie ilustrova\u0165 moment\xe1lnu situ\xe1ciu a d\xf4le\u017eitos\u0165 opatren\xed, ktor\xe9 s\xfa moment\xe1lne takmer na celom svete. \xda\u010delom n\xe1\u0161ho modelu nie je \u010do najpresnej\u0161ie predpoveda\u0165 bud\xfacnos\u0165, ale snaha pribl\xed\u017ei\u0165 matematick\xe9 modelovanie \u0161ir\u0161ej verejnosti a poskytn\xfa\u0165 jednoduch\xfa vizualiz\xe1ciu predpoved\xed.",o.a.createElement("b",null," Predvolen\xe9 hodnoty parametrov sme zalo\u017eili na viacer\xfdch \u0161t\xfadi\xe1ch, na ktor\xe9 v\xe1s v pr\xedpade v\xe4\u010d\u0161ieho z\xe1ujme m\xf4\u017eeme odk\xe1za\u0165, no tak, aby \u010do najlep\u0161ie predstavovali moment\xe1lnu situ\xe1ciu.")," Taktie\u017e v\u0161ak m\xf4\u017eete ich hodnoty meni\u0165 pod\u013ea va\u0161ej predstavy a sledova\u0165, ako na\u0161e spr\xe1vanie ovplyv\u0148uje v\xfdvoj ochorenia.",o.a.createElement("b",null," Zaveden\xedm karant\xe9ny")," (na\u013eavo hore) m\xf4\u017eete vidie\u0165 zn\xe1my \u201cflattening the curve\u201d - oddia\u013eovanie n\xe1poru a z\xedskavanie \u010dasu, o ktor\xfd moment\xe1lne v\u0161ekt\xfdm krajin\xe1m ide.",o.a.createElement("i",null," Model sme si prisp\xf4sobili pre lep\u0161ie objasnenie situ\xe1cie, a t\xfdm sme trochu zn\xed\u017eili presnos\u0165. ")),o.a.createElement("div",{class:"default-text note-block"},"Na modelovanie \u0161\xedrenia COVID-19 sme pou\u017eili jednoduch\xfd model pou\u017e\xedvan\xfd na infek\u010dn\xe9 choroby - ",o.a.createElement("a",{target:"_tab",href:"https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SEIR_model"},"model SEIR."),"Je to jednoduch\xfd, idealizovan\xfd model, ktor\xfd rozde\u013euje spolo\u010dnos\u0165 do skup\xedn (priehradok) a po\u010das priebehu choroby sa pacienti pres\xfavaj\xfa jednotliv\xfdmi skupinami. Jedn\xfdm z predpokladov je, \u017ee u\u017e vylie\u010den\xfd \u010dlovek ochorie\u0165 znova nem\xf4\u017ee. Ka\u017ed\xe1 skupina je pop\xedsan\xe1 diferenci\xe1lnymi rovnicami. Pohyb \u013eud\xed, predstavuj\xfaci progres ich choroby, je charakterizovan\xfd prechodov\xfdmi kon\u0161tantami ",o.a.createElement(j.a,null,"$\\alpha, \\beta, \\gamma$"),".",o.a.createElement(j.a,null," $\\alpha$")," z\xe1vis\xed od inkuba\u010dnej doby, ",o.a.createElement(j.a,null,"$\\beta$")," od pomeru \u013eudsk\xe9ho kontaktu a \u0161ance prenosu a ",o.a.createElement(j.a,null,"$\\gamma$")," od infek\u010dn\xe9ho \u010dasu. Viac podrobnost\xed n\xe1jdete ",o.a.createElement("a",{target:"_tab",href:"https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SEIR_model"},"tu")," alebo v ",o.a.createElement("a",{href:"https://arxiv.org/pdf/1705.01079.pdf"},"jednom")," z ve\u013ea vedeck\xfdch \u010dl\xe1nkov na t\xfato t\xe9mu.",o.a.createElement("div",{class:"note-block"},t?o.a.createElement(j.a,null,"".concat(z,"$$$$").concat(O)):o.a.createElement(j.a,null,z+O)),o.a.createElement("div",{class:"note-block"},"Z\xe1kladn\xe9 reproduk\u010dn\xe9 \u010d\xedslo ",o.a.createElement(j.a,null,"$R_0$")," pre predvolen\xe9 hodnoty v na\u0161om modeli prepo\u010d\xedtavame z pomeru \u013eudsk\xe9ho kontaktu a \u0161ance prenosu choroby pre lep\u0161iu ilustr\xe1ciu v\xfdznamu soci\xe1lneho di\u0161tancovania tak, aby sedelo s moment\xe1lnymi odhadmi expertov. Nie je to be\u017en\xe1 prax pri ochoreniach \u0161\xedriacich sa kvap\xf4\u010dkovo, no pre na\u0161e \xfa\u010dely n\xe1m to pr\xedde zauj\xedmav\xe9.")))))},x=function(){return o.a.createElement(d.a,null,o.a.createElement("hr",null),o.a.createElement("div",{className:"footer default-text"},"Pr\xedpadn\xe9 ot\xe1zky alebo feedback radi priv\xedtame na nasleduj\xfacich platform\xe1ch:",o.a.createElement("div",{className:"footer-contact"},"kristiancabala@gmail.com alebo ",o.a.createElement("a",{href:"https://www.facebook.com/kiko.cabala"},"Facebook")," ",o.a.createElement("br",null),"richard.hamerlik@gmail.com alebo ",o.a.createElement("a",{href:"https://www.facebook.com/richard.hamerlik.7"},"Facebook"))))},N=t(129),R=(t(476),t(477),["S","E","I","R","H"]),I={min:0,step:.1},$=function(e){var a=Math.log(1e4),t=(Math.log(1e8)-a)/100;return Math.exp(a+t*(e-0))},_=function(){var e=Object(n.useState)({S:!1,E:!0,I:!0,R:!0}),a=Object(s.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)($(50)),p=Object(s.a)(i,2),v=p[0],h=p[1],f=Object(n.useState)(50),E=Object(s.a)(f,2),b=E[0],j=E[1],g=Object(n.useState)(5.1),z=Object(s.a)(g,2),O=z[0],_=z[1],F=Object(n.useState)(2.38),T=Object(s.a)(F,2),V=T[0],q=T[1],H=Object(n.useState)(20),C=Object(s.a)(H,2),L=C[0],A=C[1],P=Object(n.useState)(.5),M=Object(s.a)(P,2),W=M[0],D=M[1],J=Object(n.useState)(20),Z=Object(s.a)(J,2),B=Z[0],K=Z[1],Q=Object(n.useState)(1/18),G=Object(s.a)(Q,2),U=G[0],X=G[1],Y=Object(n.useState)(!1),ee=Object(s.a)(Y,2),ae=ee[0],te=ee[1],ne=Object(n.useState)(window.innerWidth<800),oe=Object(s.a)(ne,2),re=oe[0],ie=oe[1];Object(n.useEffect)((function(){window.addEventListener("resize",(function(){return ie(window.innerWidth<800)}))}));var le=function(e){return o.a.createElement(m.a,{xs:12,sm:12,md:8,lg:8,xl:8},o.a.createElement(y,{N:v,incubationTime:O,infectionTime:V,contactRate:L,quarantinePower:W,isQuarantined:ae,quarantineStart:B,probabilityOfTransmission:U,curveList:t}),e?o.a.createElement(S,null):"")},ce=o.a.createElement(m.a,{xs:12,sm:12,md:4,lg:4,xl:4},o.a.createElement("div",{className:"curve-selection-wrapper"},R.map((function(e){return o.a.createElement("div",null,o.a.createElement(N.a,{className:"checkbox-".concat(e),name:e,checked:t[e],onChange:function(e){return a=e.target,r(Object(c.a)({},t,Object(l.a)({},a.name,a.checked)));var a}}),o.a.createElement("span",{className:"default-text"}," ",k[e]))}))),o.a.createElement(u.a,null,o.a.createElement("div",{className:"quarantine-wrapper"},o.a.createElement("div",{className:"quarantine-toggle"},o.a.createElement(N.a,{checked:ae,onChange:function(e){return te(e.target.checked)}})," ",o.a.createElement("span",{className:"bold default-text"},"Karant\xe9na")))),ae?o.a.createElement(n.Fragment,null,o.a.createElement(w,{title:"Za\u010diatok karant\xe9ny",value:B,setValue:K,min:0,max:200,step:1},"De\u0148, v ktorom bola zaveden\xe1 karant\xe9na."),o.a.createElement(w,{title:"Sila karant\xe9ny",value:W,setValue:D,min:0,max:1,step:.01},"Je to jednotka, ktor\xfa zav\xe1dzame pre ilustr\xe1ciu efektu, ktor\xfd m\xe1 soci\xe1lne di\u0161tancovanie na \u0161\xedrenie choroby. Napr\xedklad hodnota 0.8 teda predstavuje 80% zn\xed\u017eenie bl\xedzkych kontaktov a infek\u010dnej doby jedincov.")):"",o.a.createElement(w,{title:"Ve\u013ekos\u0165 popul\xe1cie",valueFormatter:function(e){return"".concat(Math.round(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," \u013eud\xed")},showValue:v,value:b,setValue:function(e){j(e),h($(b))},min:0,max:100},"Ve\u013ekos\u0165 soci\xe1lnej skupiny, v r\xe1mci ktorej modelujeme \u0161\xedrenie choroby."),o.a.createElement(w,Object.assign({},I,{title:"Infek\u010dn\xfd \u010das",value:V,valueFormatter:function(e){return"".concat(e," dn\xed")},setValue:q,max:8,step:.01}),"Doba, po\u010das ktorej jedinec potenci\xe1lne \u0161\xedri ochorenie. Priemern\xfd \u010das od vypuknutia choroby po izol\xe1ciu jedinca (\u0161t\xe1dium I -> R)."),o.a.createElement(w,{valueFormatter:function(e){return"".concat(e," dn\xed")},title:"Inkuba\u010dn\xe1 doba",value:O,setValue:_,min:0,max:10,step:.1},"Obdobie od vstupu n\xe1kazy do organizmu po vypuknutie choroby. Jedin\xfd parameter, ktor\xfd je \u010disto biologick\xfd a nevieme ho ovplyvni\u0165. Vych\xe1dzame z",o.a.createElement("a",{target:"_tab",href:"https://annals.org/aim/fullarticle/2762808/incubation-period-coronavirus-disease-2019-covid-19-from-publicly-reported"}," poslednej dostupnej \u0161t\xfadie.")),o.a.createElement(w,Object.assign({},I,{valueFormatter:function(e){return"".concat(e," bl\xedzkych kontaktov")},title:"Pomer \u013eudsk\xe9ho kontaktu",value:L,min:5,setValue:A,max:25}),"Je to priemern\xfd po\u010det",o.a.createElement("a",{target:"_tab",href:"https://www.fhi.no/en/op/novel-coronavirus-facts-advice/advice-to-health-personnel/definitions-of-probable-and-confirmed-cases-of-coronavirus-covid-19-and-con/"}," bl\xedzkych kontaktov "),", ktor\xe9 maj\xfa jedinci v popul\xe1cii. \u0164a\u017eko op\xedsate\u013en\xe1 veli\u010dina pri chorob\xe1ch \u0161iracich sa kvap\xf4\u010dkami, ale zav\xe1dzame ju pre ilustr\xe1ciu."),o.a.createElement(w,Object.assign({valueFormatter:function(e){return"".concat(100*e.toFixed(4),"%")}},I,{title:"\u0160anca prenosu choroby",value:U,setValue:X,max:1,step:1e-4}),"\u0160anca prenosu choroby pri bl\xedzkom kontakte medzi ohrozen\xfdm a infikovan\xfdm."));return o.a.createElement(d.a,{className:"containerStrapper"},"\xa0",o.a.createElement(u.a,null,o.a.createElement("span",{className:"calculator-title"},"Pandemick\xe1 kalkula\u010dka")),o.a.createElement(u.a,null,re?o.a.createElement(n.Fragment,null,le(!1)," ",ce," ",o.a.createElement(m.a,null,o.a.createElement(S,null)),"  "):o.a.createElement(n.Fragment,null,ce," ",le(!0)," ")),o.a.createElement(x,null))};t(478),t(479);var F=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(_,{className:"strapper"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[234,1,2]]]);
//# sourceMappingURL=main.8fd12b74.chunk.js.map