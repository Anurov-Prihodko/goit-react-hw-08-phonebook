(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(25),l=a(0),o=a(7),s=a(8),i=a(35),r=(a(52),a(1)),c={form:{width:400},label:{display:"flex",flexDirection:"column",marginBottom:15,fontWeight:700,fontSize:18,color:"#717579"},title:{fontWeight:700,marginBottom:15,marginTop:15,textAlign:"left",color:"#717579"},text:{color:"#000000",fontSize:14,padding:10,borderRadius:5,border:"1px solid rgba(33, 33, 33, 0.2)",outline:0},button:{fontWeight:700}};function b(){var e=Object(o.b)(),t=Object(l.useState)(""),a=Object(n.a)(t,2),b=a[0],u=a[1],j=Object(l.useState)(""),p=Object(n.a)(j,2),d=p[0],m=p[1],h=Object(l.useState)(""),f=Object(n.a)(h,2),g=f[0],x=f[1],O=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":return u(n);case"email":return m(n);case"password":return x(n);default:return}};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{style:c.title,children:"Registration page"}),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(s.a.register({name:b,email:d,password:g})),u(""),m(""),x("")},style:c.form,autoComplete:"on",children:[Object(r.jsxs)("label",{style:c.label,children:["Name",Object(r.jsx)("input",{style:c.text,type:"text",name:"name",value:b,onChange:O})]}),Object(r.jsxs)("label",{style:c.label,children:["Email",Object(r.jsx)("input",{style:c.text,type:"email",name:"email",value:d,onChange:O})]}),Object(r.jsxs)("label",{style:c.label,children:["Password",Object(r.jsx)("input",{style:c.text,type:"password",name:"password",value:g,onChange:O})]}),Object(r.jsx)(i.a,{type:"submit",style:c.button,variant:"secondary",children:"Sign up"})]})]})}}}]);
//# sourceMappingURL=register_page.4a4a9c0a.chunk.js.map