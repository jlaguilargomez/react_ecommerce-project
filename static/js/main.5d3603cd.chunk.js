(this["webpackJsonpecommerce-project"]=this["webpackJsonpecommerce-project"]||[]).push([[0],{47:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(1),i=n.n(r),c=n(32),s=n.n(c),l=(n(47),n(16)),o=n.n(l),u=n(5),d=n(23),p=n(18),b=n(19),m=n(22),h=n(21),j=n(11),g="SET_CURRENT_USER",O=n(9),f=n(24),v=n(7),x=(n(53),Object(v.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,i=e.history,c=e.linkUrl,s=e.match;return Object(a.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){i.push("".concat(s.url).concat(c))},children:[Object(a.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(a.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),y=(n(55),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"directory-menu",children:this.state.sections.map((function(e){var t=e.id,n=Object(f.a)(e,["id"]);return Object(a.jsx)(x,Object(u.a)({},n),t)}))})}}]),n}(i.a.Component)),w=(n(56),function(){return Object(a.jsx)("div",{className:"homepage",children:Object(a.jsx)(y,{})})}),k=(n(57),function(e){var t=e.children,n=e.isGoogleSignIn,r=e.inverted,i=Object(f.a)(e,["children","isGoogleSignIn","inverted"]);return Object(a.jsx)("button",Object(u.a)(Object(u.a)({className:"".concat(r?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},i),{},{children:t}))}),N="TOGGLE_CART_DROPDOWN",U="ADD_ITEM",C=(n(58),Object(j.b)(null,(function(e){return{addItem:function(t){return e(function(e){return{type:U,payload:e}}(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,i=t.price,c=t.imageUrl;return Object(a.jsxs)("div",{className:"collection-item",children:[Object(a.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),Object(a.jsxs)("div",{className:"collection-footer",children:[Object(a.jsx)("span",{className:"name",children:r}),Object(a.jsx)("span",{className:"price",children:i})]}),Object(a.jsx)(k,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})}))),E=(n(59),function(e){var t=e.title,n=e.items;return Object(a.jsxs)("div",{className:"collection-preview",children:[Object(a.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(a.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(a.jsx)(C,{item:e},e.id)}))})]})}),S=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],I=(n(60),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={collections:S},a}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state.collections;return Object(a.jsx)("div",{className:"shop-page",children:e.map((function(e){var t=e.id,n=Object(f.a)(e,["id"]);return Object(a.jsx)(E,Object(u.a)({},n),t)}))})}}]),n}(i.a.Component)),B=n(29),P=(n(61),function(e){var t=e.handleChange,n=e.label,r=Object(f.a)(e,["handleChange","label"]);return Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("input",Object(u.a)({className:"form-input",type:"text",onChange:t},r)),n?Object(a.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})}),T=n(30),A=(n(75),n(63),function(){var e=Object(d.a)(o.a.mark((function e(t,n){var a,r,i,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=W.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(r=e.sent,console.log(r),r.exists){e.next=20;break}return i=t.displayName,c=t.email,s=new Date,e.prev=10,e.next=13,a.set(Object(u.a)({displayName:i,email:c,createdAt:s},n));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.log("error creating user",e.t0.message);case 18:e.next=21;break;case 20:console.log("user already exists");case 21:return e.abrupt("return",a);case 22:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t,n){return e.apply(this,arguments)}}());T.a.initializeApp({apiKey:"AIzaSyB5U5Ly9Hcz2ZuY3jkjlXIsdoEbgdD-HqU",authDomain:"crwn-db-184a3.firebaseapp.com",projectId:"crwn-db-184a3",storageBucket:"crwn-db-184a3.appspot.com",messagingSenderId:"444987592494",appId:"1:444987592494:web:5f1793646db2add42934bf",measurementId:"G-7TZLEQBTD0"});var D=T.a.auth(),W=T.a.firestore(),G=new T.a.auth.GoogleAuthProvider;G.setCustomParameters({prompt:"select_account"});var J=function(){return D.signInWithPopup(G)},M=(T.a,n(65),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(d.a)(o.a.mark((function t(n){var a,r,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.state,r=a.email,i=a.password,t.prev=2,t.next=5,D.signInWithEmailAndPassword(r,i);case 5:e.setState({email:"",password:""}),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(2);case 10:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.value,r=n.name;e.setState(Object(B.a)({},r,a))},e.state={email:"",password:""},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"sign-in",children:[Object(a.jsx)("h2",{children:"I already have an account"}),Object(a.jsx)("span",{children:"Sign in with your email and password"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)(P,{type:"email",name:"email",id:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),Object(a.jsx)(P,{type:"password",name:"password",id:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)(k,{type:"submit",children:"Sign In"}),Object(a.jsx)(k,{type:"button",onClick:J,isGoogleSignIn:!0,children:"Sign In With Google"})]})]})]})}}]),n}(i.a.Component)),q=(n(66),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(d.a)(o.a.mark((function t(n){var a,r,i,c,s,l,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,i=a.email,c=a.password,s=a.confirmPassword,c===s){t.next=5;break}return alert("Password must be equal"),t.abrupt("return");case 5:return t.prev=5,t.next=8,D.createUserWithEmailAndPassword(i,c);case 8:return l=t.sent,u=l.user,t.next=12,A(u,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=17;break;case 15:t.prev=15,t.t0=t.catch(5);case 17:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(B.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,i=e.confirmPassword;return Object(a.jsxs)("div",{className:"sign-up",children:[Object(a.jsx)("h2",{className:"title",children:"I do not have an account"}),Object(a.jsx)("span",{children:"Sign up with your email and password"}),Object(a.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(a.jsx)(P,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(a.jsx)(P,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(a.jsx)(P,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),Object(a.jsx)(P,{type:"password",name:"confirmPassword",value:i,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(a.jsx)(k,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(i.a.Component)),z=(n(67),function(){return Object(a.jsxs)("div",{className:"sign-in-sign-up",children:[Object(a.jsx)(M,{}),Object(a.jsx)(q,{})]})}),R=(n(68),n(20));function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var V=r.createElement("desc",null,"Created with Sketch."),F=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function Q(e,t){var n=e.title,a=e.titleId,i=L(e,["title","titleId"]);return r.createElement("svg",H({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":a},i),void 0===n?r.createElement("title",{id:a},"Group"):n?r.createElement("title",{id:a},n):null,V,F)}var X=r.forwardRef(Q),Y=(n.p,function(e){return e.cart}),K=Object(O.a)([Y],(function(e){return e.cartItems})),_=Object(O.a)([Y],(function(e){return e.hidden})),Z=Object(O.a)([K],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),$=Object(O.a)([K],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),ee=Object(O.a)([function(e){return e.user}],(function(e){return e.currentUser}));n(69);function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ae=r.createElement("g",null),re=r.createElement("g",null),ie=r.createElement("g",null),ce=r.createElement("g",null),se=r.createElement("g",null),le=r.createElement("g",null),oe=r.createElement("g",null),ue=r.createElement("g",null),de=r.createElement("g",null),pe=r.createElement("g",null),be=r.createElement("g",null),me=r.createElement("g",null),he=r.createElement("g",null),je=r.createElement("g",null),ge=r.createElement("g",null);function Oe(e,t){var n=e.title,a=e.titleId,i=ne(e,["title","titleId"]);return r.createElement("svg",te({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ae,re,ie,ce,se,le,oe,ue,de,pe,be,me,he,je,ge)}var fe=r.forwardRef(Oe),ve=(n.p,n(70),Object(O.b)({itemCount:Z})),xe=Object(j.b)(ve,(function(e){return{toggleCartDropdown:function(){return e({type:N})}}}))((function(e){var t=e.toggleCartDropdown,n=e.itemCount;return console.log("cartItems: ",n),Object(a.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(a.jsx)(fe,{className:"shopping-icon"}),Object(a.jsx)("span",{className:"item-count",children:n})]})})),ye=(n(71),function(e){var t=e.item,n=t.imageUrl,r=t.price,i=t.name,c=t.quantity;return Object(a.jsxs)("div",{className:"cart-item",children:[Object(a.jsx)("img",{src:n,alt:"item"}),Object(a.jsxs)("div",{className:"item-details",children:[Object(a.jsx)("span",{className:"name",children:i}),Object(a.jsxs)("span",{className:"price",children:[c," x $",r]})]})]})}),we=(n(72),Object(O.b)({cartItems:K})),ke=Object(v.g)(Object(j.b)(we)((function(e){var t=e.cartItems,n=e.history;return Object(a.jsxs)("div",{className:"cart-dropdown",children:[Object(a.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(a.jsx)(ye,{item:e},e.id)})):Object(a.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(a.jsx)(k,{onClick:function(){return n.push("/checkout")},children:"GO TO CHECKOUT"})]})}))),Ne=Object(O.b)({currentUser:ee,hidden:_}),Ue=Object(j.b)(Ne)((function(e){var t=e.currentUser,n=e.hidden;return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(R.b,{to:"/",children:Object(a.jsx)(X,{className:"logo"})}),Object(a.jsxs)("div",{className:"options",children:[Object(a.jsx)(R.b,{className:"option",to:"/shop",children:"SHOP"}),Object(a.jsx)(R.b,{className:"option",to:"/contact",children:"CONTACT"}),t?Object(a.jsx)("div",{className:"option",onClick:function(){return D.signOut()},children:"SIGN OUT"}):Object(a.jsx)(R.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(a.jsx)(xe,{})]}),n?null:Object(a.jsx)(ke,{})]})})),Ce=(n(73),Object(O.b)({cartItems:K,total:$})),Ee=Object(j.b)(Ce)((function(e){var t=e.cartItems,n=e.total;return Object(a.jsxs)("div",{className:"checkout-page",children:[Object(a.jsxs)("div",{className:"checkout-header",children:[Object(a.jsx)("div",{className:"header-block",children:Object(a.jsx)("span",{children:"Product"})}),Object(a.jsx)("div",{className:"header-block",children:Object(a.jsx)("span",{children:"Description"})}),Object(a.jsx)("div",{className:"header-block",children:Object(a.jsx)("span",{children:"Quantity"})}),Object(a.jsx)("div",{className:"header-block",children:Object(a.jsx)("span",{children:"Price"})}),Object(a.jsx)("div",{className:"header-block",children:Object(a.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return e.name})),Object(a.jsx)("div",{className:"total",children:Object(a.jsxs)("span",{children:["TOTAL: $",n]})})]})})),Se=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).unSubscribeFromAuth=null,e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unSubscribeFromAuth=D.onAuthStateChanged(function(){var t=Object(d.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,A(n);case 3:t.sent.onSnapshot((function(t){e(Object(u.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unSubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)(Ue,{}),Object(a.jsxs)(v.d,{children:[Object(a.jsx)(v.b,{exact:!0,path:"/",component:w}),Object(a.jsx)(v.b,{path:"/shop/:id",component:I}),Object(a.jsx)(v.b,{exact:!0,path:"/checkout",component:Ee}),Object(a.jsx)(v.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(a.jsx)(v.a,{to:"/"}):Object(a.jsx)(z,{})}}),Object(a.jsx)(v.a,{to:"/"})]})]})}}]),n}(i.a.Component),Ie=Object(O.b)({currentUser:ee}),Be=Object(j.b)(Ie,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:g,payload:e}}(t))}}}))(Se),Pe=n(25),Te=n(40),Ae=n.n(Te),De={currentUser:null},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(u.a)(Object(u.a)({},e),{},{currentUser:t.payload});default:return e}},Ge=n(41),Je=function(e,t){var n=e.find((function(e){return e.id===t.id}));return console.log("existingCartItem: ",n),n?e.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Ge.a)(e),[Object(u.a)(Object(u.a)({},t),{},{quantity:1})])},Me={hidden:!0,cartItems:[]},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(u.a)(Object(u.a)({},e),{},{hidden:!e.hidden});case U:return Object(u.a)(Object(u.a)({},e),{},{cartItems:Je(e.cartItems,t.payload)});default:return e}},ze=Object(Pe.c)({user:We,cart:qe}),Re=[Ae.a],He=Object(Pe.d)(ze,Pe.a.apply(void 0,Re));s.a.render(Object(a.jsx)(j.a,{store:He,children:Object(a.jsx)(R.a,{children:Object(a.jsx)(Be,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.5d3603cd.chunk.js.map