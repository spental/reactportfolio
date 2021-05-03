(this.webpackJsonpreactportfolio=this.webpackJsonpreactportfolio||[]).push([[0],{12:function(e,s,t){},14:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t.n(c),i=t(7),n=t.n(i),r=(t(12),t(2)),l=t(3),o=t(5),j=t(4),h=t(0),d=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(h.jsx)(a.a.Fragment,{children:Object(h.jsxs)("header",{id:"home",children:[Object(h.jsxs)("nav",{id:"nav-wrap",children:[Object(h.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(h.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(h.jsxs)("ul",{id:"nav",className:"nav",children:[Object(h.jsx)("li",{className:"current",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(h.jsx)("div",{className:"row banner",children:Object(h.jsxs)("div",{className:"banner-text",children:[Object(h.jsxs)("h1",{className:"responsive-headline",children:["I am ",e.name,"."]}),Object(h.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:["I am a ",e.role,".",e.roleDescription]}),Object(h.jsx)("hr",{}),Object(h.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,target:"_blank",children:Object(h.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(h.jsx)("p",{className:"scrolldown",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(h.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),t}(c.Component),m=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(h.jsx)("section",{id:"about",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"three columns",children:Object(h.jsx)("img",{className:"profile-pic",src:"images/me.jpg",alt:""})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("h2",{children:"About Me"}),Object(h.jsx)("p",{children:e.aboutme}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"columns contact-details",children:[Object(h.jsx)("h2",{children:"Contact Details"}),Object(h.jsxs)("p",{className:"address",children:[Object(h.jsx)("span",{children:e.name}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:e.address}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:e.website})]})]})})]})]})})}}]),t}(c.Component),b=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(h.jsxs)("section",{id:"resume",children:[Object(h.jsxs)("div",{className:"row education",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Education"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(h.jsx)("div",{className:"row item",children:Object(h.jsxs)("div",{className:"twelve columns",children:[Object(h.jsx)("h3",{children:e.UniversityName}),Object(h.jsxs)("p",{className:"info",children:[e.specialization,Object(h.jsx)("span",{children:"\u2022"})," ",Object(h.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(h.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(h.jsxs)("div",{className:"row work",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsxs)("h1",{children:[Object(h.jsx)("span",{children:"Work"}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"https://github.com/spental/SpencerTeacherProfile/blob/main/attachments/Kyle_Talbott_Resume.PDF",children:" Resume"})})]})}),Object(h.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(h.jsx)("div",{className:"row item",children:Object(h.jsxs)("div",{className:"twelve columns",children:[Object(h.jsx)("h3",{children:e.CompanyName}),Object(h.jsxs)("p",{className:"info",children:[e.specialization,Object(h.jsx)("span",{children:"\u2022"})," ",Object(h.jsxs)("em",{className:"date",children:[e.MonthOfLeaving," ",e.YearOfLeaving]})]}),Object(h.jsx)("p",{})]})})}))})]})]})}}]),t}(c.Component),u=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(h.jsx)("section",{id:"portfolio",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"twelve columns collapsed",children:[Object(h.jsx)("h1",{children:"Check Out Some of My Works."}),Object(h.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e.portfolio&&e.portfolio.map((function(e){return Object(h.jsxs)("div",{className:"columns portfolio-item",children:[Object(h.jsx)("div",{className:"item-wrap",children:Object(h.jsxs)("a",{href:e.url,children:[Object(h.jsx)("img",{src:"".concat(e.imgurl),className:"item-img"}),Object(h.jsx)("div",{className:"overlay",children:Object(h.jsxs)("div",{className:"portfolio-item-meta",children:[Object(h.jsx)("h5",{children:e.name}),Object(h.jsx)("p",{children:e.description})]})})]})}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:e.url,children:"Application Deployed "})}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:e.giturl,children:"GitHub Link "})})]})}))})]})})})}}]),t}(c.Component),p=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(h.jsxs)("section",{id:"contact",children:[Object(h.jsx)("div",{className:"row section-head",children:Object(h.jsx)("div",{className:"ten columns",children:Object(h.jsx)("p",{className:"lead",children:"Feel free to contact me for any work or suggestions below"})})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("aside",{className:"eigth columns footer-widgets",children:Object(h.jsx)("div",{className:"widget",children:Object(h.jsxs)("h4",{children:["Linked in :",e.linkedinId]})})})})]})}}]),t}(c.Component),O=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"twelve columns",children:Object(h.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("i",{className:e.className})})})}))})}),Object(h.jsx)("div",{id:"go-top",children:Object(h.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(h.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(c.Component),x={imagebaseurl:"https://spental.github.io/",name:"Kyle Talbott",role:"Lead Career & Technical Education Teacher ",linkedinId:"https://www.linkedin.com/in/kyle-talbott-18aba91ba/",skypeid:"https://twitter.com/spencer25242485",roleDescription:"CTE stands for Career and Technical Education. CTE programs are generally a three-year sequence of high school elective classes that provide students with the academic and technical skills, knowledge and training necessary to succeed in 21st-century careers.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/kyle-talbott-18aba91ba/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/spental",className:"fa fa-github"},{name:"skype",url:"https://twitter.com/spencer25242485",className:"fa fa-twitter"}],aboutme:"I am originally from Gloucester,I graduated from Old Dominion University in 2012 with a bachelor of science. After working at two local elementary schools and finding a passion for teaching, I returned to ODU in 2014. I obtained a Virginia teaching license endorsed in Health and Physical Education K-12 and Technology Education.",address:"Richmond, Virginia ",website:"https://spental.github.io",education:[{UniversityName:"Old Dominion University",specialization:"Bachelor of Science",MonthOfPassing:"Dec",YearOfPassing:"2012"}],work:[{CompanyName:"King & Queen County Public Schools ",Specialization:"Department Chair"}],skillsDescription:"Top Qualities ",skills:[{skillname:"Teaching"},{skillname:"Leadership"},{skillname:"Programing"}],portfolio:[{name:"Note Taker Application",description:"My note Taker ",imgurl:"images/note.png",url:"https://my-adhd-helper.herokuapp.com/",giturl:"https://github.com/spental/MyADHDhelper"},{name:"Workout Tracker",description:"Track your Health",imgurl:"images/fit.png",giturl:"https://github.com/spental/hw17-WorkOutTracker",url:"https://workalerts.herokuapp.com/?id=608f3489e044c90021bdaa6f"},{name:"Burger Maker",description:"Create Patties ",imgurl:"images/burger.png",giturl:"https://github.com/spental/burger",url:"https://blooming-scrubland-22942.herokuapp.com/"},{name:"Budget Tracker",description:"Keep your money in order...",url:"https://momoneymoproblems.herokuapp.com/",giturl:"https://github.com/spental/moremoneymoreproblems",imgurl:"images/money.png"}]},f=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{resumeData:x}),Object(h.jsx)(m,{resumeData:x}),Object(h.jsx)(u,{resumeData:x}),Object(h.jsx)(b,{resumeData:x}),Object(h.jsx)(p,{resumeData:x}),Object(h.jsx)(O,{resumeData:x})]})}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(h.jsx)(f,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.5e31418f.chunk.js.map