(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/marvel-lcg-randomizer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0a73":function(e,t,n){"use strict";var a=n("bd2d"),r=n.n(a);r.a},"2d27":function(e,t,n){"use strict";var a=n("bbc2"),r=n.n(a);r.a},3473:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[e._m(0),n("button",{staticClass:"randomize-button",on:{click:e.randomize}},[e._v("Randomize")]),n("PlayerSelector",{model:{value:e.numberOfPlayer,callback:function(t){e.numberOfPlayer=t},expression:"numberOfPlayer"}}),n("PackSelector",{attrs:{packs:e.data.packs},model:{value:e.selectedPacks,callback:function(t){e.selectedPacks=t},expression:"selectedPacks"}}),n("DifficultySelector",{attrs:{difficulties:e.data.difficulties},model:{value:e.randomizationOptions.selectedDifficulties,callback:function(t){e.$set(e.randomizationOptions,"selectedDifficulties",t)},expression:"randomizationOptions.selectedDifficulties"}}),n("RandomizationOptions",{model:{value:e.randomizationOptions,callback:function(t){e.randomizationOptions=t},expression:"randomizationOptions"}}),e.randomizationOptions.scenario?n("Scenario",{attrs:{scenario:e.selectedScenario}}):e._e(),e.randomizationOptions.decks?n("DeckList",{attrs:{"available-decks":e.selectedDecks,"number-of-player":e.numberOfPlayer}}):e._e(),n("Changelog"),n("Contribute")],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[a("img",{staticClass:"logo",attrs:{src:n("b640"),alt:"Marvel Champions"}})])}],s=(n("4de4"),n("c975"),n("d81d"),[{name:"Rhino - The Break In!",img:"images/scenarios/MC01en_97A.jpg",pack:"Core Set"},{name:"Klaw - Underground Distribution",img:"images/scenarios/MC01en_116A.jpg",pack:"Core Set"},{name:"Ultron - The Crimson Cowl",img:"images/scenarios/MC01en_137A.jpg",pack:"Core Set"},{name:"Green Goblin - Risky Business",img:"images/scenarios/02004.jpg",pack:"Green Goblin"},{name:"Green Goblin - Mutagen Formula",img:"images/scenarios/02017.jpg",pack:"Green Goblin"},{name:"Wrecking Crew - Breakout",img:"images/scenarios/MC03en_1A.jpg",pack:"Wrecking Crew",decks:[{name:"Bulldozer",minModules:0},{name:"Piledriver",minModules:0},{name:"Thunderball",minModules:0},{name:"Wrecker",minModules:0}],difficulties:[["Standard","Standard (All Villains A)"],["Expert","Bulldozer A, Piledriver A, Thunderball A, Wrecker B"],["Expert","Bulldozer A, Piledriver A, Thunderball B, Wrecker A"],["Expert","Bulldozer A, Piledriver B, Thunderball A, Wrecker A"],["Expert","Bulldozer B, Piledriver A, Thunderball A, Wrecker A"],["Expert","Bulldozer A, Piledriver A, Thunderball B, Wrecker B"],["Expert","Bulldozer A, Piledriver B, Thunderball A, Wrecker B"],["Expert","Bulldozer A, Piledriver B, Thunderball B, Wrecker A"],["Expert","Bulldozer B, Piledriver A, Thunderball A, Wrecker B"],["Expert","Bulldozer B, Piledriver A, Thunderball B, Wrecker A"],["Expert","Bulldozer B, Piledriver B, Thunderball A, Wrecker A"],["Expert","Bulldozer A, Piledriver B, Thunderball B, Wrecker B"],["Expert","Bulldozer B, Piledriver A, Thunderball B, Wrecker B"],["Expert","Bulldozer B, Piledriver B, Thunderball A, Wrecker B"],["Expert","Bulldozer B, Piledriver B, Thunderball B, Wrecker A"],["Expert","Expert (All Villains B)"],["Nightmare","Nightmare (All Villains A+B)"]]}]),o=[{name:"Bomb Scare",img:"images/modules/MC01en_109.jpg",pack:"Core Set"},{name:"The Masters of Evil",img:"images/modules/MC01en_128.jpg",pack:"Core Set"},{name:"Under Attack",img:"images/modules/MC01en_151.jpg",pack:"Core Set"},{name:"The Legions of Hydra",img:"images/modules/MC01en_180.jpg",pack:"Core Set"},{name:"The Doomsday Chair",img:"images/modules/MC01en_183.jpg",pack:"Core Set"},{name:"Goblin Gimmicks",img:"images/modules/mc02en_card_goblin-glider.png",pack:"Green Goblin"},{name:"A Mess of Things",img:"images/modules/02037.jpg",pack:"Green Goblin"},{name:"Power Drain",img:"images/modules/02041.jpg",pack:"Green Goblin"},{name:"Running Interference",img:"images/modules/02046.jpg",pack:"Green Goblin"}],c=[{hero:"Spider-man",heroImg:"images/heroes/mc01en_card_spider-man.png",alterEgo:"Peter Parker",alterEgoImg:"images/heroes/mc01en_card_peter-parker.png",pack:"Core Set"},{hero:"Captain Marvel",heroImg:"images/heroes/mc01en_card_captain-marvel.png",alterEgo:"Carol Danvers",alterEgoImg:"images/heroes/mc01en_card_carol-danvers.png",pack:"Core Set"},{hero:"She-Hulk",heroImg:"images/heroes/mc01en_card_she-hulk.png",alterEgo:"Jennifer Walters",alterEgoImg:"images/heroes/mc01en_card_jennifer-walters.png",pack:"Core Set"},{hero:"Iron Man",heroImg:"images/heroes/mc01en_iron-man.png",alterEgo:"Tony Stark",alterEgoImg:"images/heroes/mc01en_card_tony-stark.png",pack:"Core Set"},{hero:"Black Panther",heroImg:"images/heroes/mc01en_card_black-panther.png",alterEgo:"T'Challa",alterEgoImg:"images/heroes/mc01en_card_tchalla.png",pack:"Core Set"},{hero:"Captain America",heroImg:"images/heroes/mc04en_card_captain-america.png",alterEgo:"Steeve Rogers",alterEgoImg:"images/heroes/mc04en_card_steve-rogers.png",pack:"Captain America"},{hero:"Ms. Marvel",heroImg:"images/heroes/mc05en_ms-marvel.png",alterEgo:"Kamala Khan",alterEgoImg:"images/heroes/mc05en_kamala-khan.png",pack:"Ms. Marvel"},{hero:"Thor",heroImg:"images/heroes/mc06en_a1_thor.png",alterEgo:"Odinson",alterEgoImg:"images/heroes/mc06en_a1_odinson.png",pack:"Thor"},{hero:"Black Widow",heroImg:"images/heroes/mc07en_black-widow.png",alterEgo:"Natasha Romanoff",alterEgoImg:"images/heroes/mc07en_natasha-romanoff.png",pack:"Black Widow"},{hero:"Doctor Strange",heroImg:"images/heroes/mc08en_doctor-strange.png",alterEgo:"Stephen Strange",alterEgoImg:"images/heroes/mc08en_stephen-strange.png",pack:"Doctor Strange"},{hero:"Hulk",heroImg:"images/heroes/mc09en-hulk.png",alterEgo:"Bruce Banner",alterEgoImg:"images/heroes/mc09en_bruce-banner.png",pack:"Hulk"}],l=[{name:"Aggression",img:"images/aspects/MC01en_55.jpg",packs:["Core Set","Thor"]},{name:"Justice",img:"images/aspects/MC01en_62.jpg",packs:["Core Set","Black widow"]},{name:"Leadership",img:"images/aspects/MC01en_72.jpg",packs:["Core Set","Captain America"]},{name:"Protection",img:"images/aspects/MC01en_79.jpg",packs:["Core Set","Ms. Marvel","Doctor Strange"]}],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"player-selector panel"},[n("p",{staticClass:"panel-insert"},[e._v("Select the number of players")]),n("div",{staticClass:"player-buttons"},[n("button",{attrs:{disabled:1===e.value},on:{click:function(t){return e.$emit("input",1)}}},[e._v("Solo")]),n("button",{attrs:{disabled:2===e.value},on:{click:function(t){return e.$emit("input",2)}}},[e._v("Duo")]),n("button",{attrs:{disabled:3===e.value},on:{click:function(t){return e.$emit("input",3)}}},[e._v("3 players")]),n("button",{attrs:{disabled:4===e.value},on:{click:function(t){return e.$emit("input",4)}}},[e._v("4 players")])])])},d=[],m={name:"PlayerSelector",props:{value:{default:1}},methods:{addPlayer:function(){this.$emit("input",Math.min(this.value+1,4))},removePlayer:function(){this.$emit("input",Math.max(this.value-1,1))}}},p=m,f=(n("84e3"),n("2877")),v=Object(f["a"])(p,u,d,!1,null,"438c5f32",null),h=v.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-insert"},[e._v(" Custom Options ")]),e.shown?n("div",[n("div",[n("button",{attrs:{disabled:e.value.additionalModules<=0},on:{click:function(t){e.additionalModulesChange((e.value.additionalModules||0)-1)}}},[e._v("-")]),e._v(" "+e._s(e.value.additionalModules||0)+" "),n("button",{on:{click:function(t){e.additionalModulesChange(parseInt(e.value.additionalModules||0)+1)}}},[e._v("+")]),e._v(" Extra Modules ")]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value.scenario,expression:"value.scenario"}],attrs:{type:"checkbox",name:"scenario",id:"scenario"},domProps:{checked:Array.isArray(e.value.scenario)?e._i(e.value.scenario,null)>-1:e.value.scenario},on:{change:function(t){var n=e.value.scenario,a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);a.checked?s<0&&e.$set(e.value,"scenario",n.concat([i])):s>-1&&e.$set(e.value,"scenario",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.value,"scenario",r)}}}),e._v(" Generate Scenario ")])]),n("div",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value.decks,expression:"value.decks"}],attrs:{type:"checkbox",name:"scenario",id:"decks"},domProps:{checked:Array.isArray(e.value.decks)?e._i(e.value.decks,null)>-1:e.value.decks},on:{change:function(t){var n=e.value.decks,a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);a.checked?s<0&&e.$set(e.value,"decks",n.concat([i])):s>-1&&e.$set(e.value,"decks",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.value,"decks",r)}}}),e._v(" Generate Player Decks ")])]),n("div",{staticClass:"panel-insert-content",on:{click:function(t){e.shown=!e.shown}}},[e._v(" Hide Options ")])]):n("div",[n("div",{staticClass:"panel-insert-content",on:{click:function(t){e.shown=!e.shown}}},[e._v(" Show Options ")])])])},_=[],k=(n("a4d3"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3"));function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(k["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={name:"RandomizationOptions",props:{value:{default:{}}},data:function(){return{shown:!1}},methods:{additionalModulesChange:function(e){var t=y({},this.value);t.additionalModules=e,this.$emit("input",t)}}},O=C,w=Object(f["a"])(O,g,_,!1,null,"26453d6c",null),S=w.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"packs-selector panel"},[n("div",{staticClass:"panel-insert"},[e._v(" Selected packs ")]),e.shown?e._e():n("div",{staticClass:"packs-selected"},[e._v(" "+e._s(e.value.join(", "))+" ")]),e.shown?n("div",{staticClass:"packs"},e._l(e.packs,(function(t,a){return n("div",{key:a,staticClass:"pack-type-column"},[n("h3",[e._v(e._s(a))]),e._l(t,(function(t){return n("label",{key:t},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.value.indexOf(t)>=0},on:{input:function(n){return e.togglePack(t,n.target.checked)}}}),e._v(e._s(t)+" ")])}))],2)})),0):e._e(),n("div",{staticClass:"toggle"},[n("div",{staticClass:"panel-insert-content",on:{click:function(t){e.shown=!e.shown}}},[e.shown?n("span",[e._v("Finish Selection")]):n("span",[e._v("Add/Remove Packs")])])])])},P=[],E=(n("fb6a"),n("a434"),{name:"PackSelector",props:{value:{default:["Core Set"]},packs:{default:["Core Set"]}},data:function(){return{shown:!1}},methods:{togglePack:function(e,t){var n=this.value.slice(0);t?n.push(e):n.splice(n.indexOf(e),1),this.$emit("input",n)}}}),x=E,j=(n("6048"),Object(f["a"])(x,A,P,!1,null,"2c18682e",null)),M=j.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.scenario?n("div",{staticClass:"scenario-randomizer panel"},[n("div",{staticClass:"title panel-insert",on:{click:function(t){e.shown=!e.shown}}},[e._v("Scenario")]),e.shown?n("div",{staticClass:"content"},[n("div",[n("div",{staticClass:"main-scenario"},[n("img",{attrs:{src:e.scenario.scenario.img,alt:e.scenario.scenario.name}}),n("div",{staticClass:"panel-insert-content"},[e._v(" "+e._s(e.scenario.scenario.name)+"("+e._s(e.scenario.scenario.pack)+") ")])]),e._l(e.scenario.modules,(function(t,a){var r=t.deck,i=t.modules;return n("div",{key:a},[i.length>0?n("div",{staticClass:"deck"},[e.scenario.modules.length>1?n("div",{staticClass:"deck-name"},[e._v("Deck "+e._s(r.name))]):e._e(),n("div",{staticClass:"modules"},e._l(i,(function(t,a){return n("div",{key:a},[n("img",{attrs:{src:t.img,alt:t.name}}),n("div",{staticClass:"panel-insert-content"},[e._v(" "+e._s(t.name)+"("+e._s(t.pack)+") ")])])})),0)]):e._e()])}))],2),n("div",{staticClass:"difficulty panel-insert-content"},[e._v(" Difficulty: "),n("span",{staticClass:"difficulty-value"},[e._v(" "+e._s(e.scenario.difficulty)+" ")])])]):e._e()]):e._e()},z=[],D={name:"Scenario.vue",props:{scenario:{required:!0}},data:function(){return{shown:!0}}},$=D,I=(n("2d27"),Object(f["a"])($,B,z,!1,null,"19673fbd",null)),T=I.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero-randomizer panel"},[n("div",{staticClass:"title panel-insert",on:{click:function(t){e.shown=!e.shown}}},[e._v("Players' Deck")]),e.availableDecks.length<e.numberOfPlayer?n("div",{staticClass:"warning"},[e._v(" Not enough Heroes for all the players. ")]):e._e(),e.shown?n("div",{staticClass:"decks"},e._l(e.selectedDecks,(function(t,a){var r=t.hero,i=t.aspect;return n("div",{key:a,staticClass:"hero-deck"},[n("h2",{staticClass:"panel-insert-content"},[e._v("Player "+e._s(a+1)+" "),0===a?n("span",[e._v("(First Player)")]):e._e()]),n("div",{staticClass:"cards"},[n("img",{attrs:{src:r.alterEgoImg,alt:r.alterEgo}}),n("img",{attrs:{src:r.heroImg,alt:r.hero}}),n("img",{attrs:{src:i.img,alt:i.name}})]),n("div",{staticClass:"name panel-insert-content"},[e._v(" "+e._s(r.alterEgo)+" / "+e._s(r.hero)+"("+e._s(r.pack)+") + "+e._s(i.name)+" ")])])})),0):e._e()])},W=[],H={name:"DeckList",props:{numberOfPlayer:{default:1},availableDecks:{default:[],required:!0}},data:function(){return{shown:!0}},computed:{selectedDecks:function(){return this.availableDecks.slice(0,this.numberOfPlayer)}}},N=H,R=(n("dbac"),Object(f["a"])(N,G,W,!1,null,"79cfa96e",null)),F=R.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"changelog panel"},[n("div",{staticClass:"panel-insert",on:{click:function(t){e.shown=!e.shown}}},[e._v("Changelog")]),e.shown?n("div",[e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5)]):e._e()])},L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On may 24th 2020")]),n("ul",[n("li",[e._v("Add Hulk")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On february 16th 2020")]),n("ul",[n("li",[e._v("Add Black Widow and Doctor Strange")]),n("li",[e._v("Update Green Goblin and Wrecking Crew pictures")]),n("li",[e._v("Add contribute note at the bottom of the page")]),n("li",[e._v("Add first player indicator in deck list")]),n("li",[e._v("Add custom options to generate only scenario or decks")]),n("li",[e._v("Add difficulty selector")]),n("li",[e._v("Add Wrecking Crew custom difficulties")]),n("li",[e._v("Add Nightmare difficulty in selectable difficulties (All 3 levels of a villains)")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On january 2nd 2020")]),n("ul",[n("li",[e._v("Add offline availability")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On december 23rd 2019")]),n("ul",[n("li",[e._v("Refactored the randomization for a bit more of future proofing")]),n("li",[e._v("Add support for first customization option: Extra modules")])]),n("h3",[e._v("On december 15th 2019")]),n("ul",[n("li",[e._v("Add saving of the selected packs you own in your browser")]),n("li",[e._v("Add the changelog list")]),n("li",[e._v("Display pack selection by categories (Heroes, Modules, Scenarios)")]),n("li",[e._v("A bit of redesign")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On december 13th 2019")]),n("ul",[n("li",[e._v("Add Support for Multiple packs")]),n("li",[e._v("Add scenarios and modules from Green Goblins and Wrecking Crew")]),n("li",[e._v("Add Heroes Ms. Marvel, Captain America and Thor")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"changelog-entry"},[n("h3",[e._v("On december 12th 2019 (and before)")]),n("ul",[n("li",[e._v("Add Scenario randomization")]),n("li",[e._v("Add Hero randomization")]),n("li",[e._v("Add Number of player selection")])])])}],U={name:"Changelog",data:function(){return{shown:!0}}},q=U,K=(n("c3cb"),Object(f["a"])(q,J,L,!1,null,"40c6177f",null)),V=K.exports,Q=(n("a630"),n("3ca3"),n("3835")),X=n("d4ec"),Y=n("bee2");function Z(e){for(var t=e.slice(0),n=t.length-1;n>0;n--){var a=Math.floor(Math.random()*(n+1)),r=[t[a],t[n]];t[n]=r[0],t[a]=r[1]}return t}var ee=function(){function e(){Object(X["a"])(this,e)}return Object(Y["a"])(e,[{key:"randomizeScenario",value:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{additionalModules:0},r=a.additionalModules,i=void 0===r?0:r,s=Z(e).shift(),o=s.decks||[{name:"encounter"}],c=Z(t),l=o.map((function(e){var t=(void 0!==e.minModules?e.minModules:1)+i;return{deck:e,modules:c.splice(0,t)}})),u=(s.difficulties||[]).filter((function(e){var t=Object(Q["a"])(e,1),a=t[0];return n.indexOf(a.toLowerCase())>=0})).map((function(e){var t=Object(Q["a"])(e,2),n=t[1];return n})),d=u||n,m=d[Math.floor(Math.random()*d.length)]||"No difficulty available";return{scenario:s,modules:l,difficulty:m}}},{key:"randomizeHeroes",value:function(e,t){var n=Z(e),a=Z(t);return Array.from({length:Math.min(4,n.length)},(function(e,t){return{hero:n[t],aspect:a[t]}}))}}]),e}(),te=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ne=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" Fork this project or contribute on "),n("a",{attrs:{href:"https://github.com/Naouak/marvel-lcg-randomizer",target:"_blank"}},[e._v("Github")]),e._v(". ")])}],ae={name:"Contribute"},re=ae,ie=Object(f["a"])(re,te,ne,!1,null,"1fec2e7b",null),se=ie.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"difficulties-selector panel"},[n("div",{staticClass:"panel-insert"},[e._v(" Selected difficulties ")]),e.shown?e._e():n("div",{staticClass:"difficulties-selected"},[e._v(" "+e._s(e.value.join(", "))+" ")]),e.shown?n("div",{staticClass:"difficulties"},[n("h3",[e._v("Difficulties")]),e._l(e.difficulties,(function(t){return n("div",{key:t,staticClass:"difficulty-type-column"},[n("label",[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.value.indexOf(t)>=0},on:{input:function(n){return e.toggleDifficulty(t,n.target.checked)}}}),e._v(e._s(t)+" ")])])}))],2):e._e(),n("div",{staticClass:"toggle"},[n("div",{staticClass:"panel-insert-content",on:{click:function(t){e.shown=!e.shown}}},[e.shown?n("span",[e._v("Finish Selection")]):n("span",[e._v("Select difficulties")])])])])},ce=[],le={name:"DifficultySelector",props:{value:{default:["Standard","Expert"]},difficulties:{default:["Standard","Expert"]}},data:function(){return{shown:!1}},methods:{toggleDifficulty:function(e,t){var n=this.value.slice(0);t?n.push(e):n.splice(n.indexOf(e),1),this.$emit("input",n)}}},ue=le,de=(n("0a73"),Object(f["a"])(ue,oe,ce,!1,null,"16eea743",null)),me=de.exports,pe=["standard","expert","nightmare"],fe=window.localStorage,ve={Heroes:c.map((function(e){return e.pack})).filter((function(e,t,n){return n.indexOf(e)===t})),Scenarios:s.map((function(e){return e.pack})).filter((function(e,t,n){return n.indexOf(e)===t})),Modules:o.map((function(e){return e.pack})).filter((function(e,t,n){return n.indexOf(e)===t}))},he=new ee,ge=null;try{ge=JSON.parse(fe.getItem("selectedPacks"))||["Core Set"]}catch(Oe){ge=["Core Set"],fe.removeItem("selectedPacks")}var _e={name:"app",data:function(){return{data:{scenarios:s,modules:o,heroes:c,aspects:l,packs:ve,difficulties:pe},selectedPacks:ge,selectedScenario:null,selectedDecks:[],numberOfPlayer:1,randomizationOptions:{scenario:1,decks:1,selectedDifficulties:["standard","expert"]}}},watch:{selectedPacks:function(){fe.setItem("selectedPacks",JSON.stringify(this.selectedPacks)),this.randomize()},randomizationOptions:{handler:function(){this.randomize()},deep:!0}},created:function(){this.randomize()},computed:{availableScenarios:function(){var e=this;return this.data.scenarios.filter((function(t){return e.selectedPacks.indexOf(t.pack)>=0}))},availableModules:function(){var e=this;return this.data.modules.filter((function(t){return e.selectedPacks.indexOf(t.pack)>=0}))},availableHeroes:function(){var e=this;return this.data.heroes.filter((function(t){return e.selectedPacks.indexOf(t.pack)>=0}))},availableDifficulties:function(){var e=this;return this.data.difficulties.filter((function(t){return e.randomizationOptions.selectedDifficulties.indexOf(t)>=0}))}},methods:{randomize:function(){this.selectedScenario=he.randomizeScenario(this.availableScenarios,this.availableModules,this.availableDifficulties,this.randomizationOptions),this.selectedDecks=he.randomizeHeroes(this.availableHeroes,this.data.aspects)}},components:{DifficultySelector:me,Contribute:se,Changelog:V,PackSelector:M,PlayerSelector:h,DeckList:F,Scenario:T,RandomizationOptions:S}},ke=_e,be=(n("034f"),Object(f["a"])(ke,r,i,!1,null,null,null)),ye=be.exports,Ce=n("9483");Object(Ce["a"])("".concat("/marvel-lcg-randomizer/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(ye)}}).$mount("#app")},6048:function(e,t,n){"use strict";var a=n("6e31"),r=n.n(a);r.a},"6e31":function(e,t,n){},"84e3":function(e,t,n){"use strict";var a=n("e421"),r=n.n(a);r.a},"85ec":function(e,t,n){},a3ab:function(e,t,n){},b640:function(e,t,n){e.exports=n.p+"img/logo.7184bee2.jpg"},bbc2:function(e,t,n){},bd2d:function(e,t,n){},c3cb:function(e,t,n){"use strict";var a=n("a3ab"),r=n.n(a);r.a},dbac:function(e,t,n){"use strict";var a=n("3473"),r=n.n(a);r.a},e421:function(e,t,n){}});
//# sourceMappingURL=app.dd33c26c.js.map