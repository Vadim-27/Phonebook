"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[41],{6041:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(9434),r=n(2791),s=function(e){return e.contacts.items},c=function(e){var t=e.filter,n=e.contacts;if(!t)return n.items;var a=t.toLowerCase();return n.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},o=n(8447),i=n(184),u=function(){var e=(0,a.I0)(),t=(0,a.v9)(c),n=t.map((function(t){var n=t.id,a=t.name,r=t.number;return(0,i.jsxs)("li",{children:[a,":",r,(0,i.jsx)("button",{type:"button",onClick:function(){return function(t){e((0,o.ze)(t))}(n)},children:"Delete"})]},n)}));return(0,i.jsx)("ul",{children:n})},l=function(e){return e.filter},m=n(5653),d="myContactFilter_filterBox__INQfb",f="myContactFilter_myFormInput__IuZes",h=function(){var e=(0,a.I0)(),t=(0,a.v9)(l);return(0,i.jsx)("div",{className:d,children:(0,i.jsxs)("label",{children:["Find contacts by name",(0,i.jsx)("input",{className:f,type:"text",name:"filter",value:t,onChange:function(t){var n=t.currentTarget;e((0,m.T)(n.value))},placeholder:"Filter contact"})]})})},p=n(4942),x=n(1413),v=n(9439),_={name:"",number:""},b="myContactForm_myForm__P-zOE",j="myContactForm_myFormInput__UGgg8",C="myContactForm_myFormBtn__cbT9u",y=function(){var e=(0,r.useState)((0,x.Z)({},_)),t=(0,v.Z)(e,2),n=t[0],c=t[1],u=(0,a.v9)(s),l=(0,a.I0)(),m=function(){c((0,x.Z)({},_))},d=function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return(0,x.Z)((0,x.Z)({},e),{},(0,p.Z)({},n,a))}))},f=n.name,h=n.number;return(0,i.jsxs)("form",{className:b,onSubmit:function(e){if(e.preventDefault(),u.find((function(e){var t=e.name,a=n.name.toLowerCase();return t.toLowerCase()===a})))return m(),alert("".concat(f," is already is contacts"));l((0,o.xe)((0,x.Z)({},n))),m()},children:[(0,i.jsx)("label",{htmlFor:"",children:"Name"}),(0,i.jsx)("input",{className:j,type:"text",name:"name",value:f,onChange:d,placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,i.jsx)("label",{htmlFor:"",children:"Number"}),(0,i.jsx)("input",{className:j,type:"tel",name:"number",value:h,onChange:d,placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,i.jsxs)("button",{className:C,type:"submint",children:[" ","Add contact"]})]})},N="myContact_title__Ux-ou",F="myContact_message__4ffbf",g=function(){var e=(0,a.v9)(c),t=(0,a.I0)();(0,r.useEffect)((function(){t((0,o.CL)())}),[t]);var n=Boolean(e.length);return(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:N,children:"Phonebook"}),(0,i.jsx)(y,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:N,children:"Contact"}),(0,i.jsx)(h,{}),n?(0,i.jsx)(u,{}):(0,i.jsx)("p",{className:F,children:"No saved contacts"})]})]})},Z=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{}),";"]})}}}]);
//# sourceMappingURL=41.f67e0c65.chunk.js.map