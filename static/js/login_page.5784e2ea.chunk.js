(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var o=n(25),a=n(0),i=n(7),l=n(8),r=n(35),s=(n(52),n(1)),c={form:{width:400},label:{display:"flex",flexDirection:"column",marginBottom:15,fontWeight:700,fontSize:18,color:"#717579"},title:{fontWeight:700,marginBottom:15,marginTop:15,textAlign:"left",color:"#717579"},text:{color:"#000000",fontSize:14,padding:10,borderRadius:5,border:"1px solid rgba(33, 33, 33, 0.2)",outline:0},button:{fontWeight:700}};function u(){var e=Object(i.b)(),t=Object(a.useState)(""),n=Object(o.a)(t,2),u=n[0],b=n[1],d=Object(a.useState)(""),p=Object(o.a)(d,2),f=p[0],h=p[1],j=function(e){var t=e.target,n=t.name,o=t.value;switch(n){case"email":return b(o);case"password":return h(o);default:return}};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{style:c.title,children:"Login page"}),Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(l.a.logIn({email:u,password:f})),b(""),h("")},style:c.form,autoComplete:"off",children:[Object(s.jsxs)("label",{style:c.label,children:["Email",Object(s.jsx)("input",{style:c.text,type:"email",name:"email",value:u,onChange:j})]}),Object(s.jsxs)("label",{style:c.label,children:["Password",Object(s.jsx)("input",{style:c.text,type:"password",name:"password",value:f,onChange:j})]}),Object(s.jsx)(r.a,{type:"submit",style:c.button,variant:"secondary",children:"Sign up"})]})]})}}}]);
//# sourceMappingURL=login_page.5784e2ea.chunk.js.map