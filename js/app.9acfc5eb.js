(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],v=0,u=[];v<i.length;v++)o=i[v],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(u.length)u.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==s[l]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},s={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/tp-infrastruktur/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"00a5":function(e,t,r){},"01e1":function(e,t,r){"use strict";var n=r("00a5"),s=r.n(n);s.a},"212f":function(e,t,r){"use strict";var n=r("61bc"),s=r.n(n);s.a},3521:function(e,t,r){"use strict";var n=r("8ce8"),s=r.n(n);s.a},"3f6b":function(e,t,r){"use strict";var n=r("7806"),s=r.n(n);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("v-app",[r("v-fade-transition",{attrs:{"leave-absolute":"","hide-on-leave":""}},[r("router-view",{staticClass:"content"})],1)],1),r("Footer")],1)},a=[],o=r("f564"),i={components:{Header:o["Header"],Footer:o["Footer"]}},l=i,c=(r("5c0b"),r("2877")),p=r("6544"),v=r.n(p),u=r("7496"),m=r("0789"),g=Object(c["a"])(l,s,a,!1,null,null,null),d=g.exports;v()(g,{VApp:u["a"],VFadeTransition:m["a"]});var k=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h4",{staticClass:"text-left mb-3"},[e._v("Infrastruktur")]),r("p",{staticClass:"text-left"},[e._v("Selvbetjente tjenester for å hjelpe utviklere i Oslo kommune med effektiv utvikling og forvaltning av digitale løsninger.")]),r("tjenesteoversikt")],1)},h=[],_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",e._l(e.tjenester,(function(t,n){return r("v-col",[r("v-card",{key:"tjenesteboks-"+n,attrs:{height:"300px",to:t.side}},[r("v-card-title",[r("v-icon",{attrs:{large:"",left:""}},[e._v(" "+e._s(t.illustrasjon)+" ")]),r("span",[e._v(e._s(t.overskrift))])],1),r("v-card-text",{staticClass:"text-left"},[e._v(e._s(t.beskrivelse))])],1)],1)})),1)],1)},b=[],j={name:"Tjenesteoversikt",data:function(){return{tjenester:[{overskrift:"Bygg og deploy",illustrasjon:"mdi-rocket",beskrivelse:"Automatisere testing, pakking og utrulling av applikasjoner og tjenester.",side:{name:"Bygg"}},{overskrift:"Sikkerhet",illustrasjon:"mdi-security",beskrivelse:"Sikre applikasjonen med innlogging både for ansatte og innbyggere.",side:{name:"Sikkerhet"}},{overskrift:"Lagring",illustrasjon:"mdi-database",beskrivelse:"Enkel tilgang på sikker datalagring.",side:{name:"Lagring"}},{overskrift:"Integrasjoner",illustrasjon:"mdi-math-integral",beskrivelse:"Koble sammen applikasjoner og tjenester med meldingskøer.",side:{name:"Integrasjoner"}},{overskrift:"Overvåkning",illustrasjon:"mdi-speedometer",beskrivelse:"Bedre kontroll på hvordan applikasjonen din oppfører seg i sanntid med dashboards, varsling og logger.",side:{name:"Overvakning"}}]}}},y=j,x=r("b0af"),w=r("99d9"),C=r("62ad"),E=r("a523"),I=r("132d"),O=r("0fd9"),$=Object(c["a"])(y,_,b,!1,null,"7bd82676",null),S=$.exports;v()($,{VCard:x["a"],VCardText:w["a"],VCardTitle:w["b"],VCol:C["a"],VContainer:E["a"],VIcon:I["a"],VRow:O["a"]});var H,K,T={name:"Home",components:{Tjenesteoversikt:S}},V=T,A=(r("3f6b"),Object(c["a"])(V,f,h,!1,null,"7dc6de48",null)),B=A.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Help"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("img",{staticStyle:{position:"fixed",bottom:"2em",right:"2em"},attrs:{alt:"clippy",src:"https://media.giphy.com/media/13V60VgE2ED7oc/giphy.gif"}}),r("h1",[e._v("Hjelp")]),e._m(0),r("h2",[e._v("Komponenter")]),r("p",[e._v(" Vi har laget noen komponenter dere kan bruke for å komme kjapt i gang. For eksempel har dere tilgang til komponenten BaseButton som kan brukes slik: "),r("br"),r("TextInput",{staticStyle:{display:"inline-block","margin-right":"1em"},model:{value:e.exampleText,callback:function(t){e.exampleText=t},expression:"exampleText"}}),r("BaseButton",{staticStyle:{margin:"1em 0 1em 0"},attrs:{primary:""}},[e._v("Submit")]),r("br"),e._v(" Dere står fritt til å modifisere de eksisterende komponentene eller lage egne om dere trenger det. Ta en titt på "),r("a",{attrs:{href:"https://tuuturu.github.io/vue/?path=/story/buttons-button--primary"}},[e._v("oversikten over komponentene")]),e._v(" for å se hva som er tilgjengelig. ")],1),r("h2",[e._v("Farger")]),e._m(1),r("br"),r("div",{staticClass:"exampleColor",attrs:{id:"exampleRed"}},[e._v("$red")]),r("div",{staticClass:"exampleColor",attrs:{id:"examplePurple"}},[e._v("$purple-visited")]),r("div",{staticClass:"exampleColor",attrs:{id:"exampleGreen"}},[e._v("$green")]),r("div",{staticClass:"exampleColor",attrs:{id:"exampleBeige"}},[e._v("$beige")]),r("h2",[e._v("Typografi")]),e._m(2),r("h2",[e._v("Vue + IDE")]),e._m(3)])},P=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Eksempler på bruk av følgende komponenter, farger og verktøy finnes i kildekoden til denne filen. Denne ligger i "),r("a",{attrs:{href:"https://github.com/oslokommune/tp-infrastruktur/blob/master/src/views/Help.vue"}},[e._v(" prosjekt-mappe/src/views/Help.vue ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Fargene er hentet ut fra "),r("a",{attrs:{href:"https://styleguide.oslo.kommune.no/#/pattern/globals-colors-palette"}},[e._v("Oslo Styleguide")]),e._v(" og dere har tilgang til alle fargene via scss importen "),r("code",[e._v("@import '~@tuuturu/styling/style';")]),r("br"),e._v(" For eksempel kan man bruke: ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Vi har lagt til stiler på lenker, H1, H2 og H3 samt paragrafer. Hvis dere ønsker å endre disse globale stilene eller legge til egne kan dette gjøres i "),r("a",{attrs:{href:"https://github.com/oslokommune/tp-infrastruktur/blob/master/src/App.vue"}},[e._v("prosjekt-mappe/src/App.vue")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Pro tip for utvikling i Vue med et IDE: pek på "),r("span",{staticClass:"bold"},[e._v("/node_modules/@vue/cli-service/webpack.config.js")]),e._v(" for å fortelle IDE'et hvordan Vue gjør webpack config. ")])}],M=r("6789"),R=r("36b8"),L={name:"help",components:{BaseButton:M["BaseButton"],TextInput:R["TextInput"]},data:function(){return{exampleText:"Mye rar text"}}},F=L,G=(r("01e1"),Object(c["a"])(F,D,P,!1,null,"73b8dcd3",null)),U=G.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Inspiration"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Inspirasjon")]),e._m(0),e._m(1),e._m(2),r("h2",[e._v("Minispill")]),e._m(3),r("h2",[e._v("God storytelling")]),e._m(4),r("h2",[e._v("Kommunikasjonskanal")]),e._m(5),r("h2",[e._v("Videoer")]),e._m(6),r("h2",[e._v("Klassiske produktpresentasjonssider")]),e._m(7)])},J=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Tenk utenfor boksen!"),r("br"),e._v("Det er mange måter man kan presentere et produkt! Dere kan fokusere på forklarende tekster og bilder eller lage en video, lage et minispill, lage en superenkel chatbot eller fokusere på en liten bit av funksjonaliteten produktet deres tilbyr✨")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",[e._v("Rett på sak! "),r("br"),e._v("Demo/miniversjon/getting started guide av produktet")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.jetbrains.com/lp/mono/"}},[e._v("https://www.jetbrains.com/lp/mono/")])]),r("li",[r("a",{attrs:{href:"https://safe.page/buildsecurely/"}},[e._v("https://safe.page/buildsecurely/")])]),r("li",[r("a",{attrs:{href:"https://www.duolingo.com/"}},[e._v("https://www.duolingo.com/")])]),r("li",[r("a",{attrs:{href:"https://trello.com/guide"}},[e._v("https://trello.com/guide")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://im-a-good-boye.itch.io/down-scroll"}},[e._v("https://im-a-good-boye.itch.io/down-scroll")])]),r("li",[r("a",{attrs:{href:"https://ohmaigawd.itch.io/afterlife-the-game"}},[e._v("https://ohmaigawd.itch.io/afterlife-the-game")])]),r("li",[r("a",{attrs:{href:"https://leodantas.itch.io/the-cake-is-a-what"}},[e._v("https://leodantas.itch.io/the-cake-is-a-what")])]),r("li",[r("a",{attrs:{href:"https://ncase.me/trust/"}},[e._v("https://ncase.me/trust/")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html"}},[e._v("https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html")])]),r("li",[r("a",{attrs:{href:"https://www.defeatboco.com/worlds.html"}},[e._v("https://www.defeatboco.com/worlds.html")])]),r("li",[r("a",{attrs:{href:"https://thebearandhisscarf.com/"}},[e._v("https://thebearandhisscarf.com/")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://insomnobot3000.com/"}},[e._v("http://insomnobot3000.com/")])]),r("li",[r("a",{attrs:{href:"https://growthbot.org/chat"}},[e._v("https://growthbot.org/chat")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://insomnobot3000.com/"}},[e._v("http://insomnobot3000.com/")])]),r("li",[r("a",{attrs:{href:"https://growthbot.org/chat"}},[e._v("https://growthbot.org/chat")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl"}},[e._v("https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl")])]),r("li",[r("a",{attrs:{href:"https://mailchimp.com/"}},[e._v("https://mailchimp.com/")])])])}],N={name:"inspiration"},Y=N,z=(r("212f"),Object(c["a"])(Y,q,J,!1,null,"8395b308",null)),Q=z.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Awards"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Premier 🏆️")]),r("p",[e._v("I tillegg til å bli vurdert av en jury vil dere kunne samle inn ekstra poeng og creds om dere gjør noen oppgaver forbundet med løsningen og utviklingen av den. Disse er:")]),r("br"),e._m(0),r("br"),e._m(1)])},Z=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("⭐ Brukt/integrert mot ekstern ressurs (API, datasett, Slack, bilde etc.)")]),r("li",[e._v("⭐ Brukertestet")]),r("li",[e._v("⭐ Integrasjon med annet team sitt produkt")]),r("li",[e._v("⭐ Skissert ut flere konsepter")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Oppdater disse målene underveis ettersom dere klarer dem i vår eminente "),r("a",{attrs:{href:"https://okr.oslo.systems/product/hackathon",target:"_blank"}},[e._v("OKR-tracker")])])}],W={name:"awards"},ee=W,te=(r("9aa7"),Object(c["a"])(ee,X,Z,!1,null,"2afce1f6",null)),re=te.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Awards"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Ressurser️")]),r("a",{attrs:{href:"https://docs.google.com/presentation/d/1hULJEx092QZYeUhy5K15L67b0vYTlYnDDw7qQIrjuBg/edit#slide=id.g6ea9cd5290_2_122"}},[e._v("Presentasjonen")]),r("h2",[e._v("Beskrivelse av produktområdene")]),e._m(0),r("h2",[e._v("Maler og verktøy")]),e._m(1),r("h2",[e._v("Skrivetips")]),r("h3",[e._v("Hvordan skrive klartekst")]),e._m(2),r("h3",[e._v("Aktiv stemme")]),r("p",[e._v("Passiv stemme gir en tekst en høytidelig og formell stil og skaper avstand mellom tekst og leser. En aktiv stemme gir en mindre formell stil og avstand mellom tekst og leser blir mindre. Derfor vil vi bruke aktiv stemme i dokumentasjonen vår. Aktiv stemme bruker konkrete, aktive verb, korte setninger og direkte tiltale (du-form). Denne teksten bruker aktiv stemme, hvor du som leser dette tiltales direkte.")]),r("h3",[e._v("Eksempel på passiv stemme:")]),r("span",[e._v("Maskinen kan skrus på ved å trykke på knappen")]),r("h3",[e._v("Eksempel på aktiv stemme:")]),r("span",[e._v("Trykk på knappen for å skru av maskinen")])])},se=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://docs.google.com/presentation/d/1hqH6mUmLMdX9TtFVXjfqvUze5kuYzq-ZyN9v1Va5xm0/edit#slide=id.g7e2e960ec4_2_18",target:"_blank"}},[e._v("Dataplattform")])]),r("li",[r("a",{attrs:{href:"https://docs.google.com/presentation/d/1G9a7gGHC7JrWv4levx8we8iVeEfbKyr9z7X6CequxTs/edit#slide=id.g7df26df15c_0_87",target:"_blank"}},[e._v("Informasjonsforvaltning")])]),r("li",[r("a",{attrs:{href:"#",target:"_blank"}},[e._v("Infrastruktur")])]),r("li",[r("a",{attrs:{href:"https://confluence.oslo.kommune.no/pages/viewpage.action?spaceKey=UKENC&title=2020-02-11+Presentasjon+ITAS+-+Marvin+-+Sky+OPaaS",target:"_blank"}},[e._v("Plattform")])]),r("li",[r("a",{attrs:{href:"https://sites.google.com/byr.oslo.kommune.no/okr-og-oppdrag/utviklerportalen",target:"_blank"}},[e._v("Utviklerportalen")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://medium.com/kjernemodellen/slik-bruker-du-kjernemodellen-40de60a46850",target:"_blank"}},[e._v("Kjernemodellen")]),e._v(" - et verktøy for å forenkle, prioritere og få ting til å skje.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Plasser viktig informasjon først")]),r("li",[e._v("Skriv korte setninger: En idé per setning")]),r("li",[e._v("Varier rytmen i setninger: Forskjellig lengde")]),r("li",[e._v("Bryt opp teksten i paragrafer: Hver paragraf handler om hver sin ting")]),r("li",[e._v("Unngå sjargong. Hvis du må likevel, forklar hva det betyr første gang du bruker begrepet.")]),r("li",[e._v('Unngå tvetydige svar, som for eksempel "mange ganger", "fort" og "mye"')]),r("li",[e._v("Bruk vanlige ord - unngå lange ord og ukjente forkortelser")]),r("li",[e._v("Bruk aktiv stemme")])])}],ae={name:"awards"},oe=ae,ie=(r("3521"),Object(c["a"])(oe,ne,se,!1,null,"7553d664",null)),le=ie.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h4",{staticClass:"text-left"},[n("router-link",{attrs:{to:"/"}},[e._v("Infrastruktur")]),e._v(" > Sikkerhet")],1),n("hr"),n("img",{staticClass:"float-right",attrs:{src:r("59bc"),width:"400px"}}),n("h2",{staticClass:"text-left"},[e._v("Ansattautentisering – Keycloak")]),n("p",{staticClass:"text-left"},[e._v("Keycloak er en autentiseringstjeneste som tilbyr innlogging både for ansatte og innbyggere. Keycloak støtter OpenIDConnect og SAML 2.0, og gir single sign on på tvers av tjenester og protokoller. Om en ansatt skal logge inn må det kontrolleres organisasjonstilhørighet. Sjekken lages i appen og ikke Keycloak.")]),n("h2",{staticClass:"text-left"},[e._v("Innbyggerautentisering – Keycloak")]),n("img",{staticClass:"float-right",attrs:{src:r("c8a5"),width:"400px"}}),n("p",{staticClass:"text-left"},[e._v("Keycloak er en autentiseringstjeneste som tilbyr innlogging både for ansatte og innbyggere. Keycloak støtter OpenIDConnect og SAML 2.0, og gir single sign on på tvers av tjenester og protokoller. Innbyggere videresendes til ID-porten.")])])},pe=[],ve={name:"Sikkerhet"},ue=ve,me=Object(c["a"])(ue,ce,pe,!1,null,null,null),ge=me.exports,de=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ke=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",{staticClass:"text-left"},[e._v("Bygg og deploy")]),r("h2",{staticClass:"text-left"},[e._v("Versjonskontroll - Github")]),r("p",{staticClass:"text-left"},[e._v("Git og GitHub er et verktøy for versjonskontroll der man kan behandle og ble gjennom kode og informasjon lastet opp av deg selv og andre. GitHub er nyttig når man jobber flere på samme prosjekt. Versjonskontrollen gjør det mulig å gå tilbake til tidligere versjoner dersom noe går galt.")]),r("h2",{staticClass:"text-left"},[e._v("Jenkins")]),r("p",{staticClass:"text-left"},[e._v("Et eller annet om jenkins")]),r("h2",{staticClass:"text-left"},[e._v("Mediebibliotek – Nexus")]),r("p",{staticClass:"text-left"},[e._v("Et verktøy for håndtering av kompilert kode, docker containere, artefakter mm. Nexus brukes bl. annet av jenkins for å laste opp docker containere og/eller kompilert kode etter automatisk bygg, og av kubernetes for å hente containere ved deploy.")])])}],fe={},he=Object(c["a"])(fe,de,ke,!1,null,null,null),_e=he.exports,be=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},je=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",{staticClass:"text-left"},[e._v("Integrasjoner")]),r("h2",{staticClass:"text-left"},[e._v("Meldingshåndtering – ActiveMQ")]),r("p",{staticClass:"text-left"},[e._v("Meldingsbuss for tjenester som kommuniserer med komponenter driftet hos Oslo kommune. Løsningen har asynkron meldingsleveranse og er satt opp med feilhåndteringstiltak om noe skulle gå galt. Tjenesten kommer med en management konsoll i form av en webapplikasjon, hvor meldinger, køer og topics kan bli vedlikeholdt.")])])}],ye={},xe=Object(c["a"])(ye,be,je,!1,null,null,null),we=xe.exports,Ce=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ee=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",{staticClass:"text-left"},[e._v("Sikkerhet")]),n("img",{staticClass:"float-right",attrs:{src:r("59bc"),width:"400px"}}),n("h2",{staticClass:"text-left"},[e._v("Ansattautentisering – Keycloak")]),n("p",{staticClass:"text-left"},[e._v("Keycloak er en autentiseringstjeneste som tilbyr innlogging både for ansatte og innbyggere. Keycloak støtter OpenIDConnect og SAML 2.0, og gir single sign on på tvers av tjenester og protokoller. Om en ansatt skal logge inn må det kontrolleres organisasjonstilhørighet. Sjekken lages i appen og ikke Keycloak.")]),n("h2",{staticClass:"text-left"},[e._v("Innbyggerautentisering – Keycloak")]),n("img",{staticClass:"float-right",attrs:{src:r("c8a5"),width:"400px"}}),n("p",{staticClass:"text-left"},[e._v("Keycloak er en autentiseringstjeneste som tilbyr innlogging både for ansatte og innbyggere. Keycloak støtter OpenIDConnect og SAML 2.0, og gir single sign on på tvers av tjenester og protokoller. Innbyggere videresendes til ID-porten.")])])}],Ie={},Oe=Object(c["a"])(Ie,Ce,Ee,!1,null,null,null),$e=Oe.exports,Se={},He=Object(c["a"])(Se,H,K,!1,null,null,null),Ke=He.exports;n["a"].use(k["a"]);var Te=[{path:"/",name:"Home",component:B},{path:"/help",name:"Help",component:U},{path:"/inspiration",name:"Inspiration",component:Q},{path:"/awards",name:"Awards",component:re},{path:"/resources",name:"Resources",component:le},{path:"/sikkerhet",name:"Sikkerhet",component:ge},{path:"/bygg",name:"Bygg",component:_e},{path:"/lagring",name:"Lagring",component:$e},{path:"/integrasjoner",name:"Integrasjoner",component:we},{path:"/overvakning",name:"Overvakning",component:Ke}],Ve=new k["a"]({routes:Te}),Ae=Ve,Be=(r("5363"),r("f309"));n["a"].use(Be["a"]);var De=new Be["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Ae,vuetify:De,render:function(e){return e(d)}}).$mount("#app")},"59bc":function(e,t,r){e.exports=r.p+"img/add-mapper.2e99a42e.png"},"5c0b":function(e,t,r){"use strict";var n=r("7694"),s=r.n(n);s.a},"61bc":function(e,t,r){},7694:function(e,t,r){},7806:function(e,t,r){},"8ce8":function(e,t,r){},9661:function(e,t,r){},"9aa7":function(e,t,r){"use strict";var n=r("9661"),s=r.n(n);s.a},c8a5:function(e,t,r){e.exports=r.p+"img/default-groups.79a48eb1.png"}});
//# sourceMappingURL=app.9acfc5eb.js.map