(this["webpackJsonpsgannu.ip"]=this["webpackJsonpsgannu.ip"]||[]).push([[0],{29:function(e,a,t){e.exports=t(52)},34:function(e,a,t){},35:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(19),o=t.n(i),s=(t(34),t(5)),c=t(6),l=t(9),m=t(8),u=t(7),d=t(10),g=(t(35),t(11));var h={master:{branch:"Srinivas Gannu",commits:["Java trainer, mentor, great listner, active learner and social.","Always curious, risk taking & open to sharing (more I share the more I gain), love open-source.","Product/framework oriented design, customer centric and deliver value all the time.","AWS, Azure and IBM cloud expertise with focus on scaling, availability and security.","Pursuing horizon for providing the best solutions with passion for technology & innovation."],info:"sgannu.e@gmail.com, https://www.linkedin.com/in/srinivasgannu, 989.383.0030, Dallas, TX.",merge:"Actively learning ML/AI, python, R and ready for next challenge!!!"},edu:[{branch:"Computer Science",tag:"2004 - Bachelor Degree",merge:"Graduated in distinction",commits:["Mathematics, Algos & DS, DB Systems, Programming, Networking, Automata etc.","Built 'C' Frontend compiler - Lexical analysis, Syntax analysis (lex & yacc)."]},{branch:"System Programming",tag:"2010 - UIUC, Champaign, IL",merge:"Certification",commits:["Algorithms, data-structures, OS, Security, Android.","Android kernel api & app for monitoring and optimizing resources."]}],work:[{branch:"Alcatel India Ltd",tag:"2005 - R&D Associate Developer",merge:"Learnt few french words: Bonjour, c'est mon premier boulot.",commits:["Extreme & Dynamic programming in C, C++. Experimental and fun driven development.","Built an application layer for CAMEL protocol for SS7 stack on TCP."]},{branch:"Amdocs Inc.",tag:"2009 - Sr. Subject Matter Expert",merge:"Experienced Europe & US culture, enjoyed traveling, ping-pong & food.",commits:["Extreme & Dynamic programming, linux kernel, IPC/socket programming, multi threading, shared memory etc.","Invented a custom production data management tool (cascaded relational DB queries).","C, C++, Java & web technologies, Multi threading, web services, PL/SQL etc.","Stressful production rollouts. Debug, fix and hot-patches on the spot.","Custom tools, scripting, large files processing, Reusable modules/libraries, apis."]},{branch:"Statefarm.",tag:"2012 - Senior Consultant Technical Lead",merge:"Had fun taking up challenges and build successful team.",commits:["Technical architecture, fullStack development, experimenting on JS & jQuery, big data, Spring and other java libraries.","Think big - Dynamic Data Driven UI to migrate IBM lotus notes apps. jQuery modules. Vertical DB structure.","CI/CD pipeline on Jenkins, automating version control and releases. Enterprise hard-controls automation.","Extended production data management tool (cascaded relational DB queries).","Encourage reusability, clean code, SOLID and GRASP principles, design patterns.","Leadership qualities, product thinking, Delivery challenges."]},{branch:"American Airlines.",tag:"Currently - Principal Consultant Technical Lead",merge:"Work life balance/integration.",commits:["Technical architecture on and off cloud, fullStack + devops, cloud technologies, Kubernetes, Docker, Angular vs react.","Think big - reusability across enterprise through inner-source.","Automation every where. Saved several hours for QA and developers through simple solutions.","Built customized chrome extensions for forms data, A11Y validation framework, nodejs lib for IBM & Azure cloud deployment scripts.","Design thinking, Agile principles, From complex design patterns to simple, SOLID and GRASP code.","Focus on team success than personal. Ownership, mentoring, training and technical/behavioral screening."]}]};function p(){var e=Object(g.c)(g.b.Metro,{commit:{message:{displayAuthor:!1,displayHash:!1}}});return r.a.createElement(g.a,{options:{template:e}},(function(e){var a=e.branch({name:h.master.branch});a.commit({subject:"Initial commit in Millennials era"});var t=e.branch("Education");t.commit("Personal finance, desktop with 128MB RAM and 1GB HD"),h.edu.forEach((function(a){t.merge(f(e,a),a.merge).tag(a.tag)})),a.merge(t,"Most eligible graduate for programming job!");var n=e.branch("Professional experience");n.commit("Got drivers license, Bought some business casuals and upgraded to laptop."),h.work.forEach((function(a){n.merge(f(e,a),a.merge).tag(a.tag)})),a.merge(n,h.master.merge),h.master.commits.forEach((function(e){return a.commit(e)})),a.commit(h.master.info)}))}function f(e,a){var t=e.branch(a.branch);return a.commits.forEach((function(e){return t.commit(e)})),t}var v=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).state={on:!e.defaultOff},t.onChange=t.onChange.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"onChange",value:function(){this.setState({on:!this.state.on}),this.props.onChange(!this.state.on)}},{key:"render",value:function(){return r.a.createElement("label",{className:"switch round"},r.a.createElement("span",{className:"switch-text "+(this.state.on?"selected":"")},this.props.on),r.a.createElement("span",{className:"switch-text right "+(this.state.on?"":"selected")},this.props.off),r.a.createElement("input",{type:"checkbox",onChange:this.onChange}),r.a.createElement("span",{className:"slider round"}))}}]),a}(r.a.Component),b=(t(28),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).state={work:h.work.slice(0).reverse(),edu:h.edu.slice(0).reverse(),masterCommits:h.master.commits.slice(0).reverse()},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"gray"},r.a.createElement("span",{className:"selected"},h.master.branch),"\xa0\xa0",r.a.createElement("a",{className:"gray",href:"mailto:sgannu.e@gmail.com"},r.a.createElement("img",{src:"email.png",alt:"icon",style:{width:"15px"}}),r.a.createElement("span",null,"sgannu.e@gmail.com")),"\xa0\xa0",r.a.createElement("a",{className:"gray",href:"https://www.linkedin.com/in/srinivasgannu"},r.a.createElement("img",{src:"lin.png",alt:"icon",style:{width:"15px"}}),r.a.createElement("span",null,"https://www.linkedin.com/in/srinivasgannu")),"\xa0\xa0",r.a.createElement("a",{className:"gray",href:"tel:989-383-0030"},r.a.createElement("img",{src:"phone.png",alt:"icon",style:{width:"15px"}}),r.a.createElement("span",null,"989.383.0030")),r.a.createElement("span",null,", Dallas, TX."),this.state.masterCommits.map((function(e,a){return r.a.createElement("p",{className:"small"},e)})),r.a.createElement("br",null)),r.a.createElement("div",{className:"lists"},this.state.work.map((function(e,a){return r.a.createElement("div",null,r.a.createElement("span",{className:"gray"},e.branch," (",e.tag,")"),r.a.createElement("p",{className:"gray small"},e.merge),r.a.createElement("ul",null,e.commits.map((function(e,a){return r.a.createElement("li",null,e)}))))})),this.state.edu.map((function(e,a){return r.a.createElement("div",null,r.a.createElement("span",{className:"gray"},e.branch," (",e.tag,")"),r.a.createElement("p",{className:"gray small"},e.merge),r.a.createElement("ul",null,e.commits.map((function(e,a){return r.a.createElement("li",null,e)}))))}))))}}]),a}(r.a.Component)),E=b,y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).state={developerMode:!0},t.changeMode=t.changeMode.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"changeMode",value:function(e){this.setState({developerMode:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"no-print",style:{float:"right",position:"obsolute",left:"50px"}},r.a.createElement(v,{on:"developer mode",off:"recruiter mode",onChange:this.changeMode})),this.state.developerMode?r.a.createElement(p,null):r.a.createElement(E,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.23717c0a.chunk.js.map