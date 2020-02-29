(function(e){function t(t){for(var s,i,o=t[0],l=t[1],c=t[2],p=0,m=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);v&&v(t);while(m.length)m.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],s=!0,o=1;o<r.length;o++){var l=r[o];0!==n[l]&&(s=!1)}s&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},n={app:0},a=[];function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/tp-infrastruktur/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var v=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0270":function(e,t,r){"use strict";var s=r("8bb6"),n=r.n(s);n.a},"189c":function(e,t,r){"use strict";var s=r("dc62"),n=r.n(s);n.a},"362c":function(e,t,r){"use strict";var s=r("72dc"),n=r.n(s);n.a},5244:function(e,t,r){"use strict";var s=r("d396"),n=r.n(s);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("v-app",[r("v-fade-transition",{attrs:{"leave-absolute":"","hide-on-leave":""}},[r("router-view",{staticClass:"content"})],1)],1),r("Footer")],1)},a=[],i=r("358f"),o={components:{Header:i["Header"],Footer:i["Footer"]}},l=o,c=(r("5c0b"),r("2877")),v=r("6544"),p=r.n(v),m=r("7496"),u=r("0789"),g=Object(c["a"])(l,n,a,!1,null,null,null),d=g.exports;p()(g,{VApp:m["a"],VFadeTransition:u["a"]});var k=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h2",{staticClass:"text-left mb-3"},[e._v("Infrastruktur")]),r("p",{staticClass:"text-left"},[e._v("Selvbetjente tjenester for å hjelpe utviklere i Oslo kommune med effektiv utvikling og forvaltning av digitale løsninger.")]),r("tjenesteoversikt"),r("h3",{staticClass:"text-left"},[e._v("Spørsmål?")]),r("p",{staticClass:"text-left"},[e._v("Kontakt oss på Slack "),r("a",{attrs:{href:"https://app.slack.com/client/T6W3G5A4C/C6XTG3FGW"}},[e._v("#team-infrastruktur")]),e._v(" eller spør vår chatbot Clippy! "),r("TextInput",{staticStyle:{display:"inline-block","margin-right":"1em"},model:{value:e.botQuestion,callback:function(t){e.botQuestion=t},expression:"botQuestion"}}),r("BaseButton",{staticStyle:{margin:"1em 0 1em 0"},attrs:{primary:""}},[e._v("Spør Clippy!")]),r("img",{staticClass:"float-right",attrs:{alt:"clippy",src:"https://media.giphy.com/media/13V60VgE2ED7oc/giphy.gif"}})],1)],1)},h=[],_=r("bcd3"),b=r("8204"),j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"pr-0 pl-0 mt-8"},[r("v-row",{attrs:{"no-gutters":""}},e._l(e.tjenester,(function(t,s){return r("v-col",[r("v-card",{key:"tjenesteboks-"+s,attrs:{height:"300px",to:t.side,id:t.id,flat:"",tile:""}},[r("v-card-title",[r("v-icon",{attrs:{large:"",left:""}},[e._v(" "+e._s(t.illustrasjon)+" ")]),r("span",[e._v(e._s(t.overskrift))])],1),r("v-card-text",{staticClass:"text-left boks-tekst"},[e._v(e._s(t.beskrivelse))])],1)],1)})),1)],1)},y=[],x={name:"Tjenesteoversikt",data:function(){return{tjenester:[{id:"bygg",overskrift:"Bygg og deploy",illustrasjon:"mdi-rocket",beskrivelse:"Automatisere testing, pakking og utrulling av applikasjoner og tjenester.",side:{name:"Bygg"}},{id:"sikkerhet",overskrift:"Sikkerhet",illustrasjon:"mdi-security",beskrivelse:"Sikre applikasjonen med innlogging både for ansatte og innbyggere.",side:{name:"Sikkerhet"}},{id:"lagring",overskrift:"Lagring",illustrasjon:"mdi-database",beskrivelse:"Enkel tilgang på sikker datalagring.",side:{name:"Lagring"}},{id:"integrasjoner",overskrift:"Integrasjoner",illustrasjon:"mdi-cogs",beskrivelse:"Koble sammen applikasjoner og tjenester med meldingskøer.",side:{name:"Integrasjoner"}},{id:"overvakning",overskrift:"Overvåkning",illustrasjon:"mdi-speedometer",beskrivelse:"Bedre kontroll på hvordan applikasjonen din oppfører seg i sanntid med dashboards, varsling og logger.",side:{name:"Overvakning"}}]}}},w=x,C=(r("362c"),r("b0af")),I=r("99d9"),E=r("62ad"),O=r("a523"),S=r("132d"),V=r("0fd9"),$=Object(c["a"])(w,j,y,!1,null,"6e2e6852",null),B=$.exports;p()($,{VCard:C["a"],VCardText:I["a"],VCardTitle:I["b"],VCol:E["a"],VContainer:O["a"],VIcon:S["a"],VRow:V["a"]});var T={name:"Home",components:{BaseButton:_["BaseButton"],TextInput:b["TextInput"],Tjenesteoversikt:B},data:function(){return{botQuestion:"Spørsmål"}}},H=T,D=(r("9c9d"),Object(c["a"])(H,f,h,!1,null,"29f5b4d0",null)),P=D.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Help"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("img",{staticStyle:{position:"fixed",bottom:"2em",right:"2em"},attrs:{alt:"clippy",src:"https://media.giphy.com/media/13V60VgE2ED7oc/giphy.gif"}}),r("h1",[e._v("Hjelp")]),e._m(0),r("h2",[e._v("Komponenter")]),r("p",[e._v(" Vi har laget noen komponenter dere kan bruke for å komme kjapt i gang. For eksempel har dere tilgang til komponenten BaseButton som kan brukes slik: "),r("br"),r("TextInput",{staticStyle:{display:"inline-block","margin-right":"1em"},model:{value:e.exampleText,callback:function(t){e.exampleText=t},expression:"exampleText"}}),r("BaseButton",{staticStyle:{margin:"1em 0 1em 0"},attrs:{primary:""}},[e._v("Submit")]),r("br"),e._v(" Dere står fritt til å modifisere de eksisterende komponentene eller lage egne om dere trenger det. Ta en titt på "),r("a",{attrs:{href:"https://tuuturu.github.io/vue/?path=/story/buttons-button--primary"}},[e._v("oversikten over komponentene")]),e._v(" for å se hva som er tilgjengelig. ")],1),r("h2",[e._v("Farger")]),e._m(1),r("br"),r("div",{staticClass:"exampleColor",attrs:{id:"exampleRed"}},[e._v("$red")]),r("div",{staticClass:"exampleColor",attrs:{id:"examplePurple"}},[e._v("$purple-visited")]),r("div",{staticClass:"exampleColor",attrs:{id:"exampleGreen"}},[e._v("$green")]),r("div",{staticClass:"exampleColor",attrs:{id:"exampleBeige"}},[e._v("$beige")]),r("h2",[e._v("Typografi")]),e._m(2),r("h2",[e._v("Vue + IDE")]),e._m(3)])},M=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Eksempler på bruk av følgende komponenter, farger og verktøy finnes i kildekoden til denne filen. Denne ligger i "),r("a",{attrs:{href:"https://github.com/oslokommune/tp-infrastruktur/blob/master/src/views/Help.vue"}},[e._v(" prosjekt-mappe/src/views/Help.vue ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Fargene er hentet ut fra "),r("a",{attrs:{href:"https://styleguide.oslo.kommune.no/#/pattern/globals-colors-palette"}},[e._v("Oslo Styleguide")]),e._v(" og dere har tilgang til alle fargene via scss importen "),r("code",[e._v("@import '~@oslokommune/styling/style';")]),r("br"),e._v(" For eksempel kan man bruke: ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Vi har lagt til stiler på lenker, H1, H2 og H3 samt paragrafer. Hvis dere ønsker å endre disse globale stilene eller legge til egne kan dette gjøres i "),r("a",{attrs:{href:"https://github.com/oslokommune/tp-infrastruktur/blob/master/src/App.vue"}},[e._v("prosjekt-mappe/src/App.vue")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Pro tip for utvikling i Vue med et IDE: pek på "),r("span",{staticClass:"bold"},[e._v("/node_modules/@vue/cli-service/webpack.config.js")]),e._v(" for å fortelle IDE'et hvordan Vue gjør webpack config. ")])}],K={name:"help",components:{BaseButton:_["BaseButton"],TextInput:b["TextInput"]},data:function(){return{exampleText:"Mye rar text"}}},G=K,R=(r("0270"),Object(c["a"])(G,A,M,!1,null,"fc35dcbe",null)),L=R.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Inspiration"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Inspirasjon")]),e._m(0),e._m(1),e._m(2),r("h2",[e._v("Minispill")]),e._m(3),r("h2",[e._v("God storytelling")]),e._m(4),r("h2",[e._v("Kommunikasjonskanal")]),e._m(5),r("h2",[e._v("Videoer")]),e._m(6),r("h2",[e._v("Klassiske produktpresentasjonssider")]),e._m(7)])},J=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Tenk utenfor boksen!"),r("br"),e._v("Det er mange måter man kan presentere et produkt! Dere kan fokusere på forklarende tekster og bilder eller lage en video, lage et minispill, lage en superenkel chatbot eller fokusere på en liten bit av funksjonaliteten produktet deres tilbyr✨")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",[e._v("Rett på sak! "),r("br"),e._v("Demo/miniversjon/getting started guide av produktet")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.jetbrains.com/lp/mono/"}},[e._v("https://www.jetbrains.com/lp/mono/")])]),r("li",[r("a",{attrs:{href:"https://safe.page/buildsecurely/"}},[e._v("https://safe.page/buildsecurely/")])]),r("li",[r("a",{attrs:{href:"https://www.duolingo.com/"}},[e._v("https://www.duolingo.com/")])]),r("li",[r("a",{attrs:{href:"https://trello.com/guide"}},[e._v("https://trello.com/guide")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://im-a-good-boye.itch.io/down-scroll"}},[e._v("https://im-a-good-boye.itch.io/down-scroll")])]),r("li",[r("a",{attrs:{href:"https://ohmaigawd.itch.io/afterlife-the-game"}},[e._v("https://ohmaigawd.itch.io/afterlife-the-game")])]),r("li",[r("a",{attrs:{href:"https://leodantas.itch.io/the-cake-is-a-what"}},[e._v("https://leodantas.itch.io/the-cake-is-a-what")])]),r("li",[r("a",{attrs:{href:"https://ncase.me/trust/"}},[e._v("https://ncase.me/trust/")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html"}},[e._v("https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html")])]),r("li",[r("a",{attrs:{href:"https://www.defeatboco.com/worlds.html"}},[e._v("https://www.defeatboco.com/worlds.html")])]),r("li",[r("a",{attrs:{href:"https://thebearandhisscarf.com/"}},[e._v("https://thebearandhisscarf.com/")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://insomnobot3000.com/"}},[e._v("http://insomnobot3000.com/")])]),r("li",[r("a",{attrs:{href:"https://growthbot.org/chat"}},[e._v("https://growthbot.org/chat")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://insomnobot3000.com/"}},[e._v("http://insomnobot3000.com/")])]),r("li",[r("a",{attrs:{href:"https://growthbot.org/chat"}},[e._v("https://growthbot.org/chat")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl"}},[e._v("https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl")])]),r("li",[r("a",{attrs:{href:"https://mailchimp.com/"}},[e._v("https://mailchimp.com/")])])])}],U={name:"inspiration"},Q=U,q=(r("5244"),Object(c["a"])(Q,F,J,!1,null,"30db4845",null)),N=q.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Awards"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Premier 🏆️")]),r("p",[e._v("I tillegg til å bli vurdert av en jury vil dere kunne samle inn ekstra poeng og creds om dere gjør noen oppgaver forbundet med løsningen og utviklingen av den. Disse er:")]),r("br"),e._m(0),r("br"),e._m(1)])},Y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("⭐ Brukt/integrert mot ekstern ressurs (API, datasett, Slack, bilde etc.)")]),r("li",[e._v("⭐ Brukertestet")]),r("li",[e._v("⭐ Integrasjon med annet team sitt produkt")]),r("li",[e._v("⭐ Skissert ut flere konsepter")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Oppdater disse målene underveis ettersom dere klarer dem i vår eminente "),r("a",{attrs:{href:"https://okr.oslo.systems/product/hackathon",target:"_blank"}},[e._v("OKR-tracker")])])}],z={name:"awards"},W=z,Z=(r("a7eb"),Object(c["a"])(W,X,Y,!1,null,"2e874d1c",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Awards"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Ressurser️")]),r("a",{attrs:{href:"https://docs.google.com/presentation/d/1hULJEx092QZYeUhy5K15L67b0vYTlYnDDw7qQIrjuBg/edit#slide=id.g6ea9cd5290_2_122"}},[e._v("Presentasjonen")]),r("h2",[e._v("Beskrivelse av produktområdene")]),e._m(0),r("h2",[e._v("Maler og verktøy")]),e._m(1),r("h2",[e._v("Skrivetips")]),r("h3",[e._v("Hvordan skrive klartekst")]),e._m(2),r("h3",[e._v("Aktiv stemme")]),r("p",[e._v("Passiv stemme gir en tekst en høytidelig og formell stil og skaper avstand mellom tekst og leser. En aktiv stemme gir en mindre formell stil og avstand mellom tekst og leser blir mindre. Derfor vil vi bruke aktiv stemme i dokumentasjonen vår. Aktiv stemme bruker konkrete, aktive verb, korte setninger og direkte tiltale (du-form). Denne teksten bruker aktiv stemme, hvor du som leser dette tiltales direkte.")]),r("h3",[e._v("Eksempel på passiv stemme:")]),r("span",[e._v("Maskinen kan skrus på ved å trykke på knappen")]),r("h3",[e._v("Eksempel på aktiv stemme:")]),r("span",[e._v("Trykk på knappen for å skru av maskinen")])])},re=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://docs.google.com/presentation/d/1hqH6mUmLMdX9TtFVXjfqvUze5kuYzq-ZyN9v1Va5xm0/edit#slide=id.g7e2e960ec4_2_18",target:"_blank"}},[e._v("Dataplattform")])]),r("li",[r("a",{attrs:{href:"https://docs.google.com/presentation/d/1G9a7gGHC7JrWv4levx8we8iVeEfbKyr9z7X6CequxTs/edit#slide=id.g7df26df15c_0_87",target:"_blank"}},[e._v("Informasjonsforvaltning")])]),r("li",[r("a",{attrs:{href:"#",target:"_blank"}},[e._v("Infrastruktur")])]),r("li",[r("a",{attrs:{href:"https://confluence.oslo.kommune.no/pages/viewpage.action?spaceKey=UKENC&title=2020-02-11+Presentasjon+ITAS+-+Marvin+-+Sky+OPaaS",target:"_blank"}},[e._v("Plattform")])]),r("li",[r("a",{attrs:{href:"https://sites.google.com/byr.oslo.kommune.no/okr-og-oppdrag/utviklerportalen",target:"_blank"}},[e._v("Utviklerportalen")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://medium.com/kjernemodellen/slik-bruker-du-kjernemodellen-40de60a46850",target:"_blank"}},[e._v("Kjernemodellen")]),e._v(" - et verktøy for å forenkle, prioritere og få ting til å skje.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Plasser viktig informasjon først")]),r("li",[e._v("Skriv korte setninger: En idé per setning")]),r("li",[e._v("Varier rytmen i setninger: Forskjellig lengde")]),r("li",[e._v("Bryt opp teksten i paragrafer: Hver paragraf handler om hver sin ting")]),r("li",[e._v("Unngå sjargong. Hvis du må likevel, forklar hva det betyr første gang du bruker begrepet.")]),r("li",[e._v('Unngå tvetydige svar, som for eksempel "mange ganger", "fort" og "mye"')]),r("li",[e._v("Bruk vanlige ord - unngå lange ord og ukjente forkortelser")]),r("li",[e._v("Bruk aktiv stemme")])])}],se={name:"awards"},ne=se,ae=(r("189c"),Object(c["a"])(ne,te,re,!1,null,"23ce660a",null)),ie=ae.exports,oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:e.items}}),s("h2",{staticClass:"text-left"},[s("v-icon",{attrs:{large:""}},[e._v("mdi-security")]),e._v(" Sikkerhet")],1),s("img",{staticClass:"float-right",attrs:{src:r("59bc"),width:"300px"}}),s("h3",{staticClass:"text-left mb-1"},[e._v("Ansattautentisering – Keycloak")]),s("p",{staticClass:"text-left"},[e._v("Keycloak er en autentiseringstjeneste som tilbyr innlogging både for ansatte og innbyggere. Keycloak støtter OpenIDConnect og SAML 2.0, og gir single sign on på tvers av tjenester og protokoller. Om en ansatt skal logge inn må det kontrolleres organisasjonstilhørighet. Sjekken lages i appen og ikke Keycloak.")]),s("img",{staticClass:"float-right",attrs:{src:r("c8a5"),width:"300px"}}),s("h3",{staticClass:"text-left mb-1"},[e._v("Innbyggerautentisering – Keycloak")]),s("p",{staticClass:"text-left"},[e._v("Keycloak er en autentiseringstjeneste som tilbyr innlogging både for ansatte og innbyggere. Keycloak støtter OpenIDConnect og SAML 2.0, og gir single sign on på tvers av tjenester og protokoller. Innbyggere videresendes til ID-porten.")])],1)},le=[],ce={name:"Sikkerhet",data:function(){return{items:[{text:"Infrastruktur",disabled:!1,to:"/"},{text:"Sikkerhet",disabled:!0}]}}},ve=ce,pe=r("2bc5"),me=Object(c["a"])(ve,oe,le,!1,null,null,null),ue=me.exports;p()(me,{VBreadcrumbs:pe["a"],VIcon:S["a"]});var ge=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:e.items}}),r("h2",{staticClass:"text-left"},[r("v-icon",{attrs:{large:""}},[e._v("mdi-rocket")]),e._v(" Bygg og deploy")],1),r("h3",{staticClass:"text-left"},[e._v("Versjonskontroll - Github")]),r("p",{staticClass:"text-left"},[e._v("Git og GitHub er et verktøy for versjonskontroll der man kan behandle og ble gjennom kode og informasjon lastet opp av deg selv og andre. GitHub er nyttig når man jobber flere på samme prosjekt. Versjonskontrollen gjør det mulig å gå tilbake til tidligere versjoner dersom noe går galt.")]),r("h3",{staticClass:"text-left"},[e._v("Jenkins")]),r("p",{staticClass:"text-left"},[e._v("Det er installert en versjon av Jenkins i Kubernetes-clusteret k8s-test. En kan gå inn på Jenkins Dashboard for ITAS for å se på aktiviteten på byggserveren. Opplegget rundt bygg er bassert på at Github-organisajonene registreres i Jenkins, og at det opprettes en Jenkinsfile i rot-katalogen på de repositoriene som skal bygges. Trigging av bygg skjer ved hjelp av webhooks. Når det skjer endringer i et repository vil Jenkins bli varslet og et nytt bygg blir startet.")]),r("h3",{staticClass:"text-left"},[e._v("Mediebibliotek – Nexus")]),r("p",{staticClass:"text-left"},[e._v("Et verktøy for håndtering av kompilert kode, docker containere, artefakter mm. Nexus brukes bl. annet av jenkins for å laste opp docker containere og/eller kompilert kode etter automatisk bygg, og av kubernetes for å hente containere ved deploy.")])],1)},de=[],ke={name:"Bygg",data:function(){return{items:[{text:"Infrastruktur",disabled:!1,to:"/"},{text:"Bygg og deploy",disabled:!0}]}}},fe=ke,he=Object(c["a"])(fe,ge,de,!1,null,null,null),_e=he.exports;p()(he,{VBreadcrumbs:pe["a"],VIcon:S["a"]});var be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:e.items}}),r("h2",{staticClass:"text-left"},[r("v-icon",{attrs:{large:""}},[e._v("mdi-cogs")]),e._v(" Integrasjoner")],1),r("h3",{staticClass:"text-left"},[e._v("Meldingshåndtering – ActiveMQ")]),r("p",{staticClass:"text-left"},[e._v("Meldingsbuss for tjenester som kommuniserer med komponenter driftet hos Oslo kommune. Løsningen har asynkron meldingsleveranse og er satt opp med feilhåndteringstiltak om noe skulle gå galt. Tjenesten kommer med en management konsoll i form av en webapplikasjon, hvor meldinger, køer og topics kan bli vedlikeholdt.")])],1)},je=[],ye={name:"Integrasjoner",data:function(){return{items:[{text:"Infrastruktur",disabled:!1,to:"/"},{text:"Integrasjoner",disabled:!0}]}}},xe=ye,we=Object(c["a"])(xe,be,je,!1,null,null,null),Ce=we.exports;p()(we,{VBreadcrumbs:pe["a"],VIcon:S["a"]});var Ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:e.items}}),r("h2",{staticClass:"text-left"},[r("v-icon",{attrs:{large:""}},[e._v("mdi-database")]),e._v(" Lagring")],1),r("h3",{staticClass:"text-left"},[e._v("Fillagring – Minio")]),r("p",{staticClass:"text-left"},[e._v('En "komponent" vi tilbyr som skal gjøre det enkelt for hvert enkelt team å spinne opp en fillagringstjeneste i sine egne namespaces, basert på MinIO. Denne kan brukes i stedet for dokudb.')])],1)},Ee=[],Oe={name:"Lagring",data:function(){return{items:[{text:"Infrastruktur",disabled:!1,to:"/"},{text:"Lagring",disabled:!0}]}}},Se=Oe,Ve=Object(c["a"])(Se,Ie,Ee,!1,null,null,null),$e=Ve.exports;p()(Ve,{VBreadcrumbs:pe["a"],VIcon:S["a"]});var Be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:e.items}}),r("h2",{staticClass:"text-left"},[r("v-icon",{attrs:{large:""}},[e._v("mdi-speedometer")]),e._v(" Overvåkning")],1),r("h3",{staticClass:"text-left"},[e._v("Dashboards - Grafana")]),r("p",{staticClass:"text-left"},[e._v("Overvåkningsløsning for komponenter som kjører på kjøremiljøene driftet av Oslo kommune. Løsningen består av et dashboard i Grafana, og en Slack-app som varsler om hendelser – både overvåkning- og loggvarsler. Målgruppen er utviklerteam i Oslo kommune, per i dag begrenset til team som benytter Oslo kommune sin tjenesteplattform. ")]),r("h3",{staticClass:"text-left"},[e._v("Metrics - Prometheus")]),r("p",{staticClass:"text-left"},[e._v("Metrics er tallbaserte data som beskriver en egenskap ved et system på et gitt tidspunkt. Ved å undersøke ulike metrics om et system, og sjekke hvordan verdiene forandrer seg over tid, kan man få et godt innblikk i hvordan systemet oppfører seg.")]),r("h3",{staticClass:"text-left"},[e._v("Historiske besøksdata")]),e._m(0)],1)},Te=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"text-left"},[r("a",{attrs:{href:"https://apis.k8s-test.oslo.kommune.no/katalog/data/besokshistorikk-tjenester"}},[e._v("Datasett")]),e._v(" med statistikk over unike besøk per tjeneste")])}],He={name:"Overvåkning",data:function(){return{items:[{text:"Infrastruktur",disabled:!1,to:"/"},{text:"Overvåkning",disabled:!0}]}}},De=He,Pe=Object(c["a"])(De,Be,Te,!1,null,null,null),Ae=Pe.exports;p()(Pe,{VBreadcrumbs:pe["a"],VIcon:S["a"]}),s["a"].use(k["a"]);var Me=[{path:"/",name:"Home",component:P},{path:"/help",name:"Help",component:L},{path:"/inspiration",name:"Inspiration",component:N},{path:"/awards",name:"Awards",component:ee},{path:"/resources",name:"Resources",component:ie},{path:"/sikkerhet",name:"Sikkerhet",component:ue},{path:"/bygg",name:"Bygg",component:_e},{path:"/lagring",name:"Lagring",component:$e},{path:"/integrasjoner",name:"Integrasjoner",component:Ce},{path:"/overvakning",name:"Overvakning",component:Ae}],Ke=new k["a"]({routes:Me}),Ge=Ke,Re=(r("5363"),r("f309"));s["a"].use(Re["a"]);var Le=new Re["a"]({});s["a"].config.productionTip=!1,new s["a"]({router:Ge,vuetify:Le,render:function(e){return e(d)}}).$mount("#app")},"59bc":function(e,t,r){e.exports=r.p+"img/add-mapper.2e99a42e.png"},"5c0b":function(e,t,r){"use strict";var s=r("7694"),n=r.n(s);n.a},"69ad":function(e,t,r){},"72dc":function(e,t,r){},7694:function(e,t,r){},"8bb6":function(e,t,r){},"9c9d":function(e,t,r){"use strict";var s=r("af1d"),n=r.n(s);n.a},a7eb:function(e,t,r){"use strict";var s=r("69ad"),n=r.n(s);n.a},af1d:function(e,t,r){},c8a5:function(e,t,r){e.exports=r.p+"img/default-groups.79a48eb1.png"},d396:function(e,t,r){},dc62:function(e,t,r){}});
//# sourceMappingURL=app.8f6e1cc4.js.map