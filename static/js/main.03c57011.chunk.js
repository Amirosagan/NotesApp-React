(this["webpackJsonpreact-notes-app"]=this["webpackJsonpreact-notes-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),r=n.n(s),o=(n(14),n(9)),l=n(2),i=n(7),d=n(5),j=n(0),u=function(e){var t=e.id,n=e.text,a=e.date,c=e.handleDeleteNote;return Object(j.jsxs)("div",{className:"note",children:[Object(j.jsx)("span",{children:n}),Object(j.jsxs)("div",{className:"note-footer",children:[Object(j.jsx)("small",{children:a}),Object(j.jsx)(d.a,{onClick:function(){return c(t)},className:"delete-icon",size:"1.3em"})]})]})},h=function(e){var t=e.handleAddNote,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],r=c[1];return Object(j.jsxs)("div",{className:"note new",children:[Object(j.jsx)("textarea",{rows:"8",cols:"10",placeholder:"Type to add a note...",value:s,onChange:function(e){100-e.target.value.length>=0&&r(e.target.value)}}),Object(j.jsxs)("div",{className:"note-footer",children:[Object(j.jsxs)("small",{children:[100-s.length," Remaining"]}),Object(j.jsx)("button",{className:"save",onClick:function(){s.trim().length>0&&(t(s),r(""))},children:"Save"})]})]})},b=function(e){var t=e.notes,n=e.handleAddNote,a=e.handleDeleteNote;return Object(j.jsxs)("div",{className:"notes-list",children:[t.map((function(e){return Object(j.jsx)(u,{id:e.id,text:e.text,date:e.date,handleDeleteNote:a})})),Object(j.jsx)(h,{handleAddNote:n})]})},O=function(e){var t=e.handleSearchNote;return Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)(d.b,{className:"search-icons",size:"1.3em"}),Object(j.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"type to search..."})]})},x=function(e){var t=e.handleToggleDarkMode;return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{children:"Notes"}),Object(j.jsx)("button",{onClick:function(){return t((function(e){return!e}))},className:"save",children:"Toggle Mode \ud83c\udf19"})]})},f=function(){var e=Object(a.useState)([{id:Object(i.a)(),text:"Dont forget your tasks in collage \ud83d\ude2a",date:"01/10/2022"}]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),d=r[0],u=r[1],h=Object(a.useState)(!1),f=Object(l.a)(h,2),v=f[0],N=f[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-notes-app-data"));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("react-notes-app-data",JSON.stringify(n))}),[n]);return Object(j.jsx)("div",{className:"".concat(v&&"dark-mode"),children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(x,{handleToggleDarkMode:N}),Object(j.jsx)(O,{handleSearchNote:u}),Object(j.jsx)(b,{notes:n.filter((function(e){return e.text.toLowerCase().includes(d)})),handleAddNote:function(e){var t=new Date,a={id:Object(i.a)(),text:e,date:t.toLocaleDateString()},s=[].concat(Object(o.a)(n),[a]);c(s)},handleDeleteNote:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}})]})})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.03c57011.chunk.js.map