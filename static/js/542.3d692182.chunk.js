"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[542],{542:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var t=r(9434),a=r(1413),i={email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"}},l={email:"",password:""},u=r(5854),o=r(9e3),s=r(8543),c="loginForm_form__Wz1vX",d=r(184),p=function(e){var n=e.onSubmit,r=(0,s.Z)({initialState:l,onSubmit:n}),t=r.state,p=r.handleChange,f=r.handleSubmit,m=t.email,h=t.password;return(0,d.jsxs)("form",{className:c,onSubmit:f,children:[(0,d.jsx)(u.Z,(0,a.Z)({value:m,handleChange:p},i.email)),(0,d.jsx)(u.Z,(0,a.Z)({value:h,handleChange:p},i.password)),(0,d.jsx)(o.Z,{children:"Login"})]})},f=r(8724),m=r(6348),h=function(){var e=(0,t.I0)();return(0,d.jsxs)("div",{className:m.Z.wrapper,children:[(0,d.jsx)("h1",{children:"Login"}),(0,d.jsx)(p,{onSubmit:function(n){e((0,f.x4)(n))}})]})}},9e3:function(e,n,r){r.d(n,{Z:function(){return i}});var t="button_btn__aZIRC",a=r(184),i=function(e){var n=e.children,r=e.type,i=void 0===r?"submit":r;return(0,a.jsx)("button",{className:t,type:i,children:n})}},5854:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(1413);function a(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=r(5984),l=r(2791),u="textField_wrapper__50VcK",o="textField_field__38YRA",s=r(184),c=["label","handleChange"],d=function(e){var n=e.label,r=e.handleChange,d=a(e,c),p=(0,l.useMemo)((function(){return(0,i.x0)()}),[]);return(0,s.jsxs)("div",{className:u,children:[(0,s.jsx)("label",{htmlFor:p,children:n}),(0,s.jsx)("input",(0,t.Z)({className:o,id:p,onChange:r},d))]})}},8543:function(e,n,r){var t=r(4942),a=r(1413),i=r(9439),l=r(2791);n.Z=function(e){var n=e.initialState,r=e.onSubmit,u=(0,l.useState)((0,a.Z)({},n)),o=(0,i.Z)(u,2),s=o[0],c=o[1],d=(0,l.useCallback)((function(e){var n=e.target,r=n.name,i=n.value;c((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,t.Z)({},r,i))}))}),[c]);return{state:s,setState:c,handleChange:d,handleSubmit:function(e){e.preventDefault(),r((0,a.Z)({},s)),c((0,a.Z)({},n))}}}},6348:function(e,n){n.Z={wrapper:"page_wrapper__WFrsw"}},5984:function(e,n,r){r.d(n,{x0:function(){return t}});var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=542.3d692182.chunk.js.map