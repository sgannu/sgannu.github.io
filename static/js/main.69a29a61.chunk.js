(this["webpackJsonpsgannu.ip"]=this["webpackJsonpsgannu.ip"]||[]).push([[0],{28:function(e,t,a){e.exports=a(51)},33:function(e,t,a){},34:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),o=a.n(i),s=(a(33),a(5)),l=a(6),c=a(10),m=a(8),u=a(7),g=a(9),p=(a(34),a(11));var h={master:{branch:"Srinivas Gannu",commit:"Pursuing horizon for providing the best solutions with passion for technology & innovation.",merge:"sgannu.e@gmail.com, 989.383.0030, Dallas, TX."},edu:[{branch:"Computer Science",tag:"2004 - Bachelor Degree",merge:"Graduated in distinction",commits:["Mathematics, Algos & DS, DB Systems, Programming, Networking, Automata etc.","Built 'C' Frontend compiler - Lexical analysis, Syntax analysis (lex & yacc)."]},{branch:"System Programming",tag:"2010 - UIUC, Champaign, IL",merge:"Certification",commits:["Algorithms, datastructures, OS, Security, Andrioid.","Andriod kernel api & app for monitoring and optimizing resources."]}],work:[{branch:"Alcatel India Ltd",tag:"2005 - R&D Associate Developer",merge:"Learnt few french words: Bonjour, c'est mon premier boulot.",commits:["Extreme programming in C, C++. Experimental and fun driven development.","Built an application layer for CAMEL protocol for SS7 stack on TCP."]},{branch:"Amdocs Inc.",tag:"2009 - Sr. Subject Matter Expert",merge:"Experienced Europe & US culture, enjoyed traveling, ping-pong & food.",commits:["Extreme programming, linux kernel, IPC/socket programming, multi threading, shared memory etc.","From C, C++ to Java & web technologies, Multi threading, web services, unit testing etc.","Front end applications, desktop tools, automate tedious tasks, pl/sql.","Shortcuts, custom tools, scripting, Reusable modules/libraries, apis."]},{branch:"Statefarm.",tag:"2012 - Senior Consultant Technical Lead",merge:"Had fun taking up challenges and build successful team.",commits:["FullStack development, experimenting on JS & JQuery, big data, Spring and other java libraries.","CI/CD pipeline on jenkins, automating version control and releases.","Encourage reusability, clean code, solid principles, design patterns.","Leadership qualities, product thinking, Delivery challenges."]},{branch:"American Airlines.",tag:"Currently - Principal Consultant Technical Lead",merge:"Work life balance/integration. Volleyball & still love ping-pong.",commits:["FullStack + devops, cloud technologies, Kubernetes, Docker, Angular vs react.","Design thinking, Agile principles, From complex design patterns to simple and SOLID code.","Focus on team success than personal. Ownership, mentoring, traning."]}]};function d(){var e=Object(p.c)(p.b.Metro,{commit:{message:{displayAuthor:!1,displayHash:!1}}});return r.a.createElement(p.a,{options:{template:e}},(function(e){var t=e.branch({name:h.master.branch});t.commit({subject:"Initial commit in Millennials era"});var a=e.branch("Education");a.commit("Personal finance, desktop with 128MB RAM and 1GB HD"),h.edu.forEach((function(t){a.merge(b(e,t),t.merge).tag(t.tag)})),t.merge(a,"Most eligible graduate for programming job!");var n=e.branch("Professional experience");n.commit("Got drivers license, Bought some business casuals and upgraded to laptop."),h.work.forEach((function(t){n.merge(b(e,t),t.merge).tag(t.tag)})),t.merge(n,h.master.commit+"Father, runner, love recreational sports (biking, volleyball, ping-pong, tennis, foosball)"),t.commit(h.master.merge)}))}function b(e,t){var a=e.branch(t.branch);return t.commits.forEach((function(e){return a.commit(e)})),a}var f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={on:!e.defaultOff},a.onChange=a.onChange.bind(Object(u.a)(a)),a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(){this.setState({on:!this.state.on}),this.props.onChange(!this.state.on)}},{key:"render",value:function(){return r.a.createElement("label",{className:"switch round"},r.a.createElement("span",{className:"switch-text "+(this.state.on?"selected":"")},this.props.on),r.a.createElement("span",{className:"switch-text right "+(this.state.on?"":"selected")},this.props.off),r.a.createElement("input",{type:"checkbox",onChange:this.onChange}),r.a.createElement("span",{className:"slider round"}))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={work:h.work.slice(0).reverse(),edu:h.edu.slice(0).reverse()},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"gray"},r.a.createElement("span",{className:"selected"},h.master.branch),"\xa0\xa0\xa0\xa0\xa0",r.a.createElement("a",{className:"gray",href:"mailto:sgannu.e@gmail.com"},r.a.createElement("img",{src:"email.png",alt:"icon",style:{width:"15px"}}),r.a.createElement("span",null,"sgannu.e@gmail.com")),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{className:"gray",href:"tel:989-383-0030"},r.a.createElement("img",{src:"phone.png",alt:"icon",style:{width:"15px"}}),r.a.createElement("span",null,"989.383.0030")),r.a.createElement("span",null,", Dallas, TX."),r.a.createElement("p",{className:"small"},h.master.commit),r.a.createElement("p",{className:"small"},"Father, runner, love recreational sports (biking, volleyball, ping-pong, tennis, foosball)."),r.a.createElement("br",null)),r.a.createElement("div",{className:"lists"},this.state.work.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("span",{className:"gray"},e.branch," (",e.tag,")"),r.a.createElement("p",{className:"gray small"},e.merge),r.a.createElement("ul",null,e.commits.map((function(e,t){return r.a.createElement("li",null,e)}))))})),this.state.edu.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("span",{className:"gray"},e.branch," (",e.tag,")"),r.a.createElement("p",{className:"gray small"},e.merge),r.a.createElement("ul",null,e.commits.map((function(e,t){return r.a.createElement("li",null,e)}))))}))))}}]),t}(r.a.Component),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={developerMode:!0},a.changeMode=a.changeMode.bind(Object(u.a)(a)),a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"changeMode",value:function(e){this.setState({developerMode:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{float:"right"}},r.a.createElement(f,{on:"developer mode",off:"recruiter mode",onChange:this.changeMode})),this.state.developerMode?r.a.createElement(d,null):r.a.createElement(v,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.69a29a61.chunk.js.map