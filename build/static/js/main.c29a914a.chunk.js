(this["webpackJsonpsgannu.ip"]=this["webpackJsonpsgannu.ip"]||[]).push([[0],{28:function(e,t,a){e.exports=a(51)},33:function(e,t,a){},34:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),o=a.n(i),c=(a(33),a(5)),s=a(6),l=a(10),m=a(8),u=a(7),g=a(9),d=(a(34),a(11));var p={master:{branch:"Srinivas Gannu",commit:"Pursuing horizon for providing the best solutions with passion for technology and innovation.",merge:"sgannu.e@gmail.com, 989.383.0030"},edu:[{branch:"Computer Science",tag:"2004 - Bachelor Degree",merge:"Graduated in distinction",commits:["Mathematics, Algos & DS, DB Systems, Programming, Networking, Automata etc","Built 'C' Frontend compiler - Lexical analysis, Syntax analysis (lex & yacc)"]},{branch:"System Programming",tag:"2010 - UIUC, Champaign, IL",merge:"Certification",commits:["Algorithms, datastructures, OS, Security, Andrioid","Andriod kernal api & app for monitoring and optimizing resources"]}],work:[{branch:"Alcatel India Ltd",tag:"2005 - Associate Developer",merge:"Learnt few french words: Bonjour, c'est mon premier boulot.",commits:["Extreme programming in C, C++. Experimental and fun driven development","Built an application layer for CAMEL protocol for SS7 stack on TCP"]},{branch:"Amdocs Inc.",tag:"2009 - Sr. Subject Matter Expert",merge:"Experienced Europe & US culture, enjoyed travelling, ping-pong & food.",commits:["Extreme programming, linux kernel, IPC/socket programming, multi threading, shared memory etc","From C, C++ to Java & web technologies, Multi threading, web services, unit testing etc","Front end applications, desktop tools, automate tidious tasks, pl/sql","Shortcuts, custom tools, scripting, Reusable modules/libraries, apis"]},{branch:"Statefarm.",tag:"2012 - Tech Lead/Architect",merge:"Had fun taking up challenges and build successfull team",commits:["FullStack development, experimenting on JS & JQuery, big data, Spring and other java libraries","CI/CD pipeline on jenkins, automating version control and releases","Encourage reusability, clean code, solid principles, design patterns","Leadership qualities, product thinking, Delivery challenges"]},{branch:"American Airlines.",tag:"Till date - Lead Analyst",merge:"Work life balance/integration. Volleyball & still love ping-pong",commits:["FullStack + devops, cloud technologies, design thinking, Agile principles, Angular vs react","From complex design patterns to simple and SOLID code","Focus on team success than personal. Ownership, mentoring, traning."]}]};function h(){var e=Object(d.c)(d.b.Metro,{commit:{message:{displayAuthor:!1,displayHash:!1}}});return r.a.createElement(d.a,{options:{template:e}},(function(e){var t=e.branch({name:p.master.branch});t.commit({subject:"Initial commit in Millennials era"});var a=e.branch("Education");a.commit("Personal finance, desktop with 128MB RAM and 1GB HD"),a.merge(function(e){var t=e.branch("Computer Science");return t.commit("Mathematics, Algos & DS, DB Systems, Programming, Networking, Automata etc"),t.commit("Built 'C' Frontend compiler - Lexical analysis, Syntax analysis (lex & yacc)"),t}(e),"Graduated in distinction").tag("2004 - Bachelor Degree"),a.merge(function(e){var t=e.branch("System Programming");return t.commit("Algorithms, datastructures, OS, Security, Andrioid"),t.commit("Andriod kernal api & app for monitoring and optimizing resources"),t}(e),"Certification").tag("2010 - UIUC, Champaign, IL"),t.merge(a,"Most eligible graduate for programming job!");var n=e.branch("Professional experience");n.commit("Got drivers license, Bought some business casuals and upgraded to laptop."),n.merge(function(e){var t=e.branch("Alcatel India Ltd");return t.commit("Extreme programming in C, C++. Experimental and fun driven development").commit("Built an application layer for CAMEL protocol for SS7 stack on TCP"),t}(e),"Learnt few french words: Bonjour, c'est mon premier boulot.").tag("2005 - Associate Developer"),n.merge(function(e){var t=e.branch("Amdocs Inc.");return t.commit("Extreme programming, linux kernel, IPC/socket programming, multi threading, shared memory etc").commit("From C, C++ to Java & web technologies, Multi threading, web services, unit testing etc").commit("Front end applications, desktop tools, automate tidious tasks, pl/sql").commit("Shortcuts, custom tools, scripting, Reusable modules/libraries, apis"),t}(e),"Experienced Europe & US culture, enjoyed travelling, ping-pong & food.").tag("2009 - Sr. Subject Matter Expert"),n.merge(function(e){var t=e.branch("Statefarm.");return t.commit("FullStack development, experimenting on JS & JQuery, big data, Spring and other java libraries").commit("CI/CD pipeline on jenkins, automating version control and releases").commit("Encourage reusability, clean code, solid principles, design patterns").commit("Leadership qualities, product thinking, Delivery challenges"),t}(e),"Had fun taking up challenges and build successfull team").tag("2012 - Tech Lead/Architect"),n.merge(function(e){var t=e.branch("American Airlines.");return t.commit("FullStack + devops, cloud technologies, design thinking, Agile principles, Angular vs react").commit("From complex design patterns to simple and SOLID code").commit("Focus on team success than personal. Ownership, mentoring, traning."),t}(e),"Work life balance/integration. Volleyball & still love ping-pong").tag("Till date - Lead Analyst").commit(p.master.commit),t.merge(n,p.master.merge)}))}var b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={on:!e.defaultOff},a.onChange=a.onChange.bind(Object(u.a)(a)),a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"onChange",value:function(){this.setState({on:!this.state.on}),this.props.onChange(!this.state.on)}},{key:"render",value:function(){return r.a.createElement("label",{className:"switch round"},r.a.createElement("span",{className:"switch-text "+(this.state.on?"selected":"")},this.props.on),r.a.createElement("span",{className:"switch-text right "+(this.state.on?"":"selected")},this.props.off),r.a.createElement("input",{type:"checkbox",onChange:this.onChange}),r.a.createElement("span",{className:"slider round"}))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={work:p.work.slice(0).reverse(),edu:p.edu.slice(0).reverse()},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"gray"},r.a.createElement("span",null,p.master.branch," - ",p.master.merge),r.a.createElement("p",{className:"small"},p.master.commit),r.a.createElement("br",null)),r.a.createElement("div",{className:"lists"},this.state.work.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("span",{className:"gray"},e.branch," (",e.tag,")"),r.a.createElement("p",{className:"gray small"},e.merge),r.a.createElement("ul",null,e.commits.map((function(e,t){return r.a.createElement("li",null,e)}))))})),this.state.edu.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("span",{className:"gray"},e.branch," (",e.tag,")"),r.a.createElement("p",{className:"gray small"},e.merge),r.a.createElement("ul",null,e.commits.map((function(e,t){return r.a.createElement("li",null,e)}))))}))))}}]),t}(r.a.Component),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={developerMode:!0},a.changeMode=a.changeMode.bind(Object(u.a)(a)),a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"changeMode",value:function(e){this.setState({developerMode:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{float:"right"}},r.a.createElement(b,{on:"developer mode",off:"recruiter mode",onChange:this.changeMode})),this.state.developerMode?r.a.createElement(h,null):r.a.createElement(v,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.c29a914a.chunk.js.map