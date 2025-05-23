import{j as d,a as i,r as u,R as Q,p as V,a8 as b,I as X}from"./index.3856c2d8.js";import{C as F}from"./Card.c4039a15.js";import{S as $}from"./Select.fec0b6c9.js";import{S as x,_ as Z,d as K,a as C,m as ee,b as M,c as te}from"./react-select.esm.a0621d33.js";import{_ as ae,a as ne}from"./setPrototypeOf.fcb4f614.js";import{_ as le}from"./inheritsLoose.088992cc.js";import{T as z,a as j}from"./Transition.103a0c97.js";const g=[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],y={option:(t,e)=>({...t,fontSize:"14px"})},ie=()=>d("div",{className:" grid grid-cols-2 gap-5",children:[d("div",{children:[i("label",{htmlFor:" hh",className:"form-label ",children:"Basic"}),i(x,{className:"react-select",classNamePrefix:"select",defaultValue:g[0],options:g,styles:y,id:"hh"})]}),d("div",{children:[i("label",{htmlFor:" hh2",className:"form-label ",children:"Clearable"}),i(x,{className:"react-select",classNamePrefix:"select",defaultValue:g[1],styles:y,name:"clear",options:g,isClearable:!0,id:"hh2"})]}),d("div",{children:[i("label",{htmlFor:" hh23",className:"form-label",children:"Loading"}),i(x,{className:"react-select",classNamePrefix:"select",defaultValue:g[2],name:"loading",options:g,isLoading:!0,isClearable:!1,id:"hh23",styles:y})]}),d("div",{children:[i("label",{htmlFor:"dis",className:"form-label",children:"Disabled"}),i(x,{className:"react-select",classNamePrefix:"select",defaultValue:g[3],name:"disabled",options:g,isDisabled:!0,isClearable:!1,id:"dis",styles:y})]})]});function O(t,e){var a=function(l){return e&&u.exports.isValidElement(l)?e(l):l},o=Object.create(null);return t&&u.exports.Children.map(t,function(n){return n}).forEach(function(n){o[n.key]=a(n)}),o}function re(t,e){t=t||{},e=e||{};function a(h){return h in e?e[h]:t[h]}var o=Object.create(null),n=[];for(var l in t)l in e?n.length&&(o[l]=n,n=[]):n.push(l);var r,s={};for(var c in e){if(o[c])for(r=0;r<o[c].length;r++){var p=o[c][r];s[o[c][r]]=a(p)}s[c]=a(c)}for(r=0;r<n.length;r++)s[n[r]]=a(n[r]);return s}function S(t,e,a){return a[e]!=null?a[e]:t.props[e]}function oe(t,e){return O(t.children,function(a){return u.exports.cloneElement(a,{onExited:e.bind(null,a),in:!0,appear:S(a,"appear",t),enter:S(a,"enter",t),exit:S(a,"exit",t)})})}function se(t,e,a){var o=O(t.children),n=re(e,o);return Object.keys(n).forEach(function(l){var r=n[l];if(!!u.exports.isValidElement(r)){var s=l in e,c=l in o,p=e[l],h=u.exports.isValidElement(p)&&!p.props.in;c&&(!s||h)?n[l]=u.exports.cloneElement(r,{onExited:a.bind(null,r),in:!0,exit:S(r,"exit",t),enter:S(r,"enter",t)}):!c&&s&&!h?n[l]=u.exports.cloneElement(r,{in:!1}):c&&s&&u.exports.isValidElement(p)&&(n[l]=u.exports.cloneElement(r,{onExited:a.bind(null,r),in:p.props.in,exit:S(r,"exit",t),enter:S(r,"enter",t)}))}}),n}var ce=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},ue={component:"div",childFactory:function(e){return e}},A=function(t){le(e,t);function e(o,n){var l;l=t.call(this,o,n)||this;var r=l.handleExited.bind(Z(l));return l.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},l}var a=e.prototype;return a.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},a.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(n,l){var r=l.children,s=l.handleExited,c=l.firstRender;return{children:c?oe(n,s):se(n,r,s),firstRender:!1}},a.handleExited=function(n,l){var r=O(this.props.children);n.key in r||(n.props.onExited&&n.props.onExited(l),this.mounted&&this.setState(function(s){var c=ae({},s.children);return delete c[n.key],{children:c}}))},a.render=function(){var n=this.props,l=n.component,r=n.childFactory,s=ne(n,["component","childFactory"]),c=this.state.contextValue,p=ce(this.state.children).map(r);return delete s.appear,delete s.enter,delete s.exit,l===null?i(z.Provider,{value:c,children:p}):i(z.Provider,{value:c,children:i(l,{...s,children:p})})},e}(Q.Component);A.propTypes={component:V.exports.any,children:V.exports.node,appear:V.exports.bool,enter:V.exports.bool,exit:V.exports.bool,childFactory:V.exports.func};A.defaultProps=ue;const G=A;var de=["in","onExited","appear","enter","exit"],pe=function(e){return function(a){a.in,a.onExited,a.appear,a.enter,a.exit;var o=C(a,de);return i(e,{...o})}},me=pe,he=["component","duration","in","onExited"],L=function(e){var a=e.component,o=e.duration,n=o===void 0?1:o,l=e.in;e.onExited;var r=C(e,he),s=u.exports.useRef(null),c={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(n,"ms")},exiting:{opacity:0},exited:{opacity:0}};return i(j,{mountOnEnter:!0,unmountOnExit:!0,in:l,timeout:n,nodeRef:s,children:function(p){var h={style:b({},c[p]),ref:s};return i(a,{innerProps:h,...r})}})},w=260,fe=function(e){var a=e.children,o=e.in,n=e.onExited,l=u.exports.useRef(null),r=u.exports.useState("auto"),s=M(r,2),c=s[0],p=s[1];u.exports.useEffect(function(){var v=l.current;if(!!v){var m=window.requestAnimationFrame(function(){return p(v.getBoundingClientRect().width)});return function(){return window.cancelAnimationFrame(m)}}},[]);var h=function(m){switch(m){default:return{width:c};case"exiting":return{width:0,transition:"width ".concat(w,"ms ease-out")};case"exited":return{width:0}}};return i(j,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:o,onExited:function(){var m=l.current;!m||n==null||n(m)},timeout:w,nodeRef:l,children:function(v){return i("div",{ref:l,style:b({overflow:"hidden",whiteSpace:"nowrap"},h(v)),children:a})}})},ve=["in","onExited"],be=function(e){return function(a){var o=a.in,n=a.onExited,l=C(a,ve);return i(fe,{in:o,onExited:n,children:i(e,{cropWithEllipsis:o,...l})})}},xe=be,ge=function(e){return function(a){return i(L,{component:e,duration:a.isMulti?w:1,...a})}},Se=ge,Ve=function(e){return function(a){return i(L,{component:e,...a})}},Ce=Ve,Pe=["component"],Ee=["children"],Ne=function(e){return function(a){return a.isMulti?i(ye,{component:e,...a}):i(G,{component:e,...a})}},ye=function(e){var a=e.component,o=C(e,Pe),n=Fe(o);return i(G,{component:a,...n})},Fe=function(e){var a=e.children,o=C(e,Ee),n=o.isMulti,l=o.hasValue,r=o.innerProps,s=o.selectProps,c=s.components,p=s.controlShouldRenderValue,h=u.exports.useState(n&&p&&l),v=M(h,2),m=v[0],I=v[1],W=u.exports.useState(!1),_=M(W,2),k=_[0],R=_[1];u.exports.useEffect(function(){l&&!m&&I(!0)},[l,m]),u.exports.useEffect(function(){k&&!l&&m&&I(!1),R(!1)},[k,l,m]);var U=function(){return R(!0)},q=function(P){if(n&&u.exports.isValidElement(P)){if(P.type===c.MultiValue)return u.exports.cloneElement(P,{onExited:U});if(P.type===c.Placeholder&&m)return null}return P},Y=b(b({},r),{},{style:b(b({},r==null?void 0:r.style),{},{display:n&&l||m?"flex":"grid"})}),H=b(b({},o),{},{innerProps:Y,children:u.exports.Children.toArray(a).map(q)});return H},Me=Ne,we=["Input","MultiValue","Placeholder","SingleValue","ValueContainer"],B=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=K({components:e}),o=a.Input,n=a.MultiValue,l=a.Placeholder,r=a.SingleValue,s=a.ValueContainer,c=C(a,we);return b({Input:me(o),MultiValue:xe(n),Placeholder:Se(l),SingleValue:Ce(r),ValueContainer:Me(s)},c)},N=B();N.Input;N.MultiValue;N.Placeholder;N.SingleValue;N.ValueContainer;var Oe=ee(B);const f=[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"},{value:"orange",label:"Orange"},{value:"apple",label:"Apple"}],Ae=t=>d("div",{className:"flex justify-between items-center",children:[i("strong",{children:i("span",{className:" text-2xl font-semibold capitalize",children:t.label})}),i("span",{children:t.options.length})]}),Ie=[{label:"Ice Creams",options:[{value:"vanilla",label:"Vanilla"},{value:"Dark Chocolate",label:"Dark Chocolate"},{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"salted-caramel",label:"Salted Caramel"}]},{label:"Snacks",options:[{value:"Pizza",label:"Pizza"},{value:"Burger",label:"Burger"},{value:"Pasta",label:"Pasta"},{value:"Pretzel",label:"Pretzel"},{value:"Popcorn",label:"Popcorn"}]}],_e=Oe(),E={multiValue:(t,e)=>e.data.isFixed?{...t,opacity:"0.5"}:t,multiValueLabel:(t,e)=>e.data.isFixed?{...t,color:"#626262",paddingRight:6}:t,multiValueRemove:(t,e)=>e.data.isFixed?{...t,display:"none"}:t,option:(t,e)=>({...t,fontSize:"14px"})},D=t=>{if(t.length>0)return t.filter(e=>e.isFixed).concat(t.filter(e=>!e.isFixed))},ke=[{label:"Social Media",options:[{value:"facebook",label:"Facebook",icon:"fe:facebook"},{value:"twitter",label:"Twitter",icon:"fe:twitter"},{value:"linkedin",label:"Linkedin",icon:"fe:linkedin"},{value:"github",label:"Github",icon:"fe:github"},{value:"instagram",label:"Instagram",icon:"fe:instagram"},{value:"dribbble",label:"Dribbble",icon:"fe:dribbble"},{value:"gitlab",label:"Gitlab",icon:"fe:gitlab"}]},{label:"File Types",options:[{value:"pdf",label:"PDF",icon:"fe:file"},{value:"txt",label:"txt",icon:"fe:file-word"},{value:"image",label:"Image",icon:"fe:file-image"}]},{label:"Others",options:[{value:"figma",label:"Figma",icon:"logos:figma"},{value:"chrome",label:"Chrome",icon:"logos:chrome"},{value:"safari",label:"Safari",icon:"fe:globe"},{value:"slack",label:"Slack",icon:"logos:slack-icon"},{value:"youtube",label:"Youtube",icon:"fe:youtube"}]}],Re=({data:t,...e})=>d(te.Option,{...e,children:[i(X,{icon:t.icon}),t.label]}),$e=()=>{const[t,e]=u.exports.useState(D([f[0],f[1]])),a=(o,{action:n,removedValue:l})=>{switch(n){case"remove-value":case"pop-value":if(l.isFixed)return;break;case"clear":o=f.filter(r=>r.isFixed);break}o=D(o),e(o)};return d("div",{className:" grid lg:grid-cols-2 grid-cols-1 gap-5",children:[d("div",{children:[i("label",{className:"form-label",htmlFor:"mul_1",children:"Multi Select.."}),i(x,{isClearable:!1,defaultValue:[f[2],f[3]],styles:E,isMulti:!0,name:"colors",options:f,className:"react-select",classNamePrefix:"select",id:"mul_1"})]}),d("div",{children:[i("label",{className:"form-label",htmlFor:"mul_2",children:"Grouped Select"}),i(x,{isClearable:!1,defaultValue:f[1],options:Ie,styles:E,formatGroupLabel:Ae,className:"react-select",classNamePrefix:"select",id:"mul_2"})]}),d("div",{children:[i("label",{className:"form-label",htmlFor:"animated_1",children:"Animated Select"}),i(x,{isClearable:!1,closeMenuOnSelect:!1,components:_e,defaultValue:[f[4],f[5]],isMulti:!0,options:f,styles:E,className:"react-select",classNamePrefix:"select",id:"animated_1"})]}),d("div",{children:[i("label",{className:"form-label",htmlFor:"dis_s",children:"Fixed Options Select"}),i(x,{isClearable:!1,value:t,styles:E,isMulti:!0,onChange:a,name:"furits",className:"react-select",classNamePrefix:"select",options:f,id:"dis_s"})]}),d("div",{className:"lg:col-span-2 col-span-1",children:[i("label",{className:"form-label",htmlFor:"icon_s",children:"Icons"}),i(x,{options:ke,className:"react-select",classNamePrefix:"select",components:{Option:Re},styles:E,id:"icon_s"})]})]})},T=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],We=()=>{const[t,e]=u.exports.useState(""),[a,o]=u.exports.useState("");return d("div",{className:" space-y-5",children:[i(F,{title:"Basic Select's",children:d("div",{className:" grid xl:grid-cols-2 grid-cols-1 gap-5",children:[d("div",{className:"space-y-3",children:[i($,{label:"Basic Select",options:T,onChange:r=>{e(r.target.value)},value:t}),d("div",{className:"text-base",children:[i("span",{className:"text-slate-500 dark:text-slate-300 inline-block mr-3",children:"Selected value:"}),i("span",{className:"text-slate-900 dark:text-slate-300 font-semibold",children:t})]})]}),d("div",{className:"space-y-3",children:[i($,{label:"Size Select",options:T,onChange:r=>{o(r.target.value)},value:a,size:5}),d("div",{className:"text-base",children:[i("span",{className:"text-slate-500 dark:text-slate-300 inline-block mr-3",children:"Selected value:"}),i("span",{className:"text-slate-900 dark:text-slate-300 font-semibold",children:a})]})]})]})}),i(F,{title:"React Select",children:i(ie,{})}),i(F,{title:"React Select",children:i($e,{})})]})};export{We as default};
