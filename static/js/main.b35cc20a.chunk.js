(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(4),o=n.n(i),r=(n(32),n(5)),s=n(6),l=n(9),u=n(8),h=n(24),j=n(7),b=n(14),d="FETCH_ALBUMS",p=n(13),O=n.n(p),f=0,m=[],x=1,g=n(1),v=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).fetchStateAlbums=function(){t.props.fetchAlbums()},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchAlbums()}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"albums",children:Object(g.jsx)(h.a,{dataLength:this.props.albums.length,next:this.fetchStateAlbums,hasMore:!0,loader:Object(g.jsx)("h4",{children:"Loading..."}),children:this.props.albums.map((function(t){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:t.id}),Object(g.jsx)("h3",{children:t.title}),Object(g.jsx)("h3",{children:t.url}),Object(g.jsx)("hr",{})]},t.id)}))})})}}]),n}(c.Component),_=Object(j.b)((function(t){return{albums:t.album.items}}),{fetchAlbums:function(){return function(t){0===f?O.a.get("https://jsonplaceholder.typicode.com/photos?_page=".concat(x,"&_limit=").concat(10)).then((function(e){m=e.data,console.log("First x=0:"+m),t({type:d,payload:e.data}),x+=1,f=1})):O.a.get("https://jsonplaceholder.typicode.com/photos?_page=".concat(x,"&_limit=").concat(10)).then((function(e){m=[].concat(Object(b.a)(m),Object(b.a)(e.data)),t({type:d,payload:m}),x+=1}))}}})(v),y=n(3),E=n(27),S=n(15),w={items:[]};var A=Object(y.c)({album:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(S.a)(Object(S.a)({},t),{},{items:e.payload});default:return t}}}),L=[E.a],T=Object(y.e)(A,{},Object(y.d)(y.a.apply(void 0,L),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),C=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(g.jsx)(j.a,{store:T,children:Object(g.jsx)("div",{children:Object(g.jsxs)("center",{children:[Object(g.jsx)("h1",{children:"Infinite scroll using React and Redux"}),Object(g.jsx)("hr",{}),Object(g.jsx)(_,{})]})})})}}]),n}(c.Component),D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),i(t),o(t)}))};o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root")),D()}},[[60,1,2]]]);
//# sourceMappingURL=main.b35cc20a.chunk.js.map