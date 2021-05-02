(this.webpackJsonpreactportfolio=this.webpackJsonpreactportfolio||[]).push([[0],{12:function(e,s,c){},14:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c.n(t),i=c(7),n=c.n(i),r=(c(12),c(2)),l=c(3),o=c(5),j=c(4),d=c(0),h=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)(a.a.Fragment,{children:Object(d.jsxs)("header",{id:"home",children:[Object(d.jsxs)("nav",{id:"nav-wrap",children:[Object(d.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(d.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(d.jsxs)("ul",{id:"nav",className:"nav",children:[Object(d.jsx)("li",{className:"current",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(d.jsx)("div",{className:"row banner",children:Object(d.jsxs)("div",{className:"banner-text",children:[Object(d.jsxs)("h1",{className:"responsive-headline",children:["I am ",e.name,"."]}),Object(d.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:["I am a ",e.role,".",e.roleDescription]}),Object(d.jsx)("hr",{}),Object(d.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.url,target:"_blank",children:Object(d.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(d.jsx)("p",{className:"scrolldown",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(d.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),c}(t.Component),m=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)("section",{id:"about",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"three columns",children:Object(d.jsx)("img",{className:"profile-pic",src:"images/me.jpg",alt:""})}),Object(d.jsxs)("div",{className:"nine columns main-col",children:[Object(d.jsx)("h2",{children:"About Me"}),Object(d.jsx)("p",{children:e.aboutme}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"columns contact-details",children:[Object(d.jsx)("h2",{children:"Contact Details"}),Object(d.jsxs)("p",{className:"address",children:[Object(d.jsx)("span",{children:e.name}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:e.address}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:e.website})]})]})})]})]})})}}]),c}(t.Component),b=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsxs)("section",{id:"resume",children:[Object(d.jsxs)("div",{className:"row education",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Education"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(d.jsx)("div",{className:"row item",children:Object(d.jsxs)("div",{className:"twelve columns",children:[Object(d.jsx)("h3",{children:e.UniversityName}),Object(d.jsxs)("p",{className:"info",children:[e.specialization,Object(d.jsx)("span",{children:"\u2022"})," ",Object(d.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(d.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(d.jsxs)("div",{className:"row work",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Work"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(d.jsx)("div",{className:"row item",children:Object(d.jsxs)("div",{className:"twelve columns",children:[Object(d.jsx)("h3",{children:e.CompanyName}),Object(d.jsxs)("p",{className:"info",children:[e.specialization,Object(d.jsx)("span",{children:"\u2022"})," ",Object(d.jsxs)("em",{className:"date",children:[e.MonthOfLeaving," ",e.YearOfLeaving]})]}),Object(d.jsx)("p",{children:e.Achievements})]})})}))})]})]})}}]),c}(t.Component),u=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)("section",{id:"portfolio",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"twelve columns collapsed",children:[Object(d.jsx)("h1",{children:"Check Out Some of My Works."}),Object(d.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e.portfolio&&e.portfolio.map((function(e){return Object(d.jsx)("div",{className:"columns portfolio-item",children:Object(d.jsx)("div",{className:"item-wrap",children:Object(d.jsxs)("a",{href:"#modal-01",children:[Object(d.jsx)("img",{src:"".concat(e.imgurl),className:"item-img"}),Object(d.jsx)("div",{className:"overlay",children:Object(d.jsxs)("div",{className:"portfolio-item-meta",children:[Object(d.jsx)("h5",{children:e.name}),Object(d.jsx)("p",{children:e.description})]})})]})})})}))})]})})})}}]),c}(t.Component),O=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsxs)("section",{id:"contact",children:[Object(d.jsx)("div",{className:"row section-head",children:Object(d.jsx)("div",{className:"ten columns",children:Object(d.jsx)("p",{className:"lead",children:"Feel free to contact me for any work or suggestions below"})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("aside",{className:"eigth columns footer-widgets",children:Object(d.jsx)("div",{className:"widget",children:Object(d.jsxs)("h4",{children:["Linked in :",e.linkedinId]})})})})]})}}]),c}(t.Component),p=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props.resumeData;return Object(d.jsx)("footer",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"twelve columns",children:Object(d.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.url,children:Object(d.jsx)("i",{className:e.className})})})}))})}),Object(d.jsx)("div",{id:"go-top",children:Object(d.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(d.jsx)("i",{className:"icon-up-open"})})})]})})}}]),c}(t.Component),x={imagebaseurl:"https://spental.github.io/",name:"Kyle Talbott",role:"Lead Career & Technical Education Teacher ",linkedinId:"https://www.linkedin.com/in/kyle-talbott-18aba91ba/",skypeid:"https://twitter.com/spencer25242485",roleDescription:"CTE stands for Career and Technical Education. CTE programs are generally a three-year sequence of high school elective classes that provide students with the academic and technical skills, knowledge and training necessary to succeed in 21st-century careers.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/kyle-talbott-18aba91ba/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/spental",className:"fa fa-github"},{name:"skype",url:"https://twitter.com/spencer25242485",className:"fa fa-twitter"}],aboutme:"I am originally from Gloucester,I graduated from Old Dominion University in 2012 with a bachelor of science. After working at two local elementary schools and finding a passion for teaching, I returned to ODU in 2014. I obtained a Virginia teaching license endorsed in Health and Physical Education K-12 and Technology Education.",address:"Richmond, Virginia ",website:"https://spental.github.io",education:[{UniversityName:"Old Dominion University",specialization:"Bachelor of Science",MonthOfPassing:"Dec",YearOfPassing:"2012"}],work:[{CompanyName:"King & Queen County Public Schools ",Specialization:"Department Chair"}],skillsDescription:"Top Qualities ",skills:[{skillname:"Teaching"},{skillname:"Leadership"},{skillname:"Programing"}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/project2.png"},{name:"Budget Tracker",description:"Keep your money in order...",url:"images/money.png"}]},f=function(e){Object(o.a)(c,e);var s=Object(j.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{resumeData:x}),Object(d.jsx)(m,{resumeData:x}),Object(d.jsx)(u,{resumeData:x}),Object(d.jsx)(b,{resumeData:x}),Object(d.jsx)(O,{resumeData:x}),Object(d.jsx)(p,{resumeData:x})]})}}]),c}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(d.jsx)(f,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.133c0aab.chunk.js.map