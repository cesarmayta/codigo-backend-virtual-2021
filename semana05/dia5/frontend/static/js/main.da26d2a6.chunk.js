(this["webpackJsonpproyecto-final-pos"]=this["webpackJsonpproyecto-final-pos"]||[]).push([[0],{176:function(e,a,t){},284:function(e,a,t){},286:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t(23),n=t.n(s),r=t(32),i=t(11),o=t(34),d=t(1),l=function(e){var a=e.objPlatoPedido;return Object(d.jsxs)("li",{className:"comanda__item",children:[Object(d.jsxs)("p",{className:"comanda__nombre",children:[Object(d.jsx)("span",{children:Object(d.jsx)("strong",{children:a.plato_nom})}),Object(d.jsxs)("span",{children:["Precio: S/ ",a.plato_pre]})]}),Object(d.jsx)("p",{className:"comanda__cantidad",children:a.cantidad}),Object(d.jsx)("p",{className:"comanda__precio",children:Object(d.jsxs)("strong",{children:["S/ ",+a.cantidad*+a.plato_pre]})})]})},j=t(8),b=t(294),O=t(129),u=t.n(O),p=t(10),h=t.n(p),m=t(16),x="https://backposapi.herokuapp.com",f="INICIO_CARGANDO_MESAS",v="FIN_CARGANDO_MESAS",_="SET_MESAS",N="SET_SELECCIONAR_MESA",g="INICIO_CARGANDO_CATEGORIAS",y="FIN_CARGANDO_CATEGORIAS",S="SET_CATEGORIAS",A="SET_SELECCIONAR_CATEGORIA",C="INICIO_CARGANDO_PLATOS_POR_CATEGORIA",I="FIN_CARGANDO_PLATOS_POR_CATEGORIA",P="SET_PLATOS_POR_CATEGORIA",w="AGREGAR_PLATO_A_PEDIDO",D="ELIMINAR_PEDIDO",E="INICIO_CARGANDO_LOGIN",k="FIN_CARGANDO_LOGIN",R="SET_SUCCESS_LOGIN",T="INICIO_CARGANDO_PLATOS",M="SET_PLATOS",G="FIN_CARGANDO_PLATOS",L="INICIO_CARGANDO_PEDIDOS_DB",B="SET_PEDIDOS_DB",F="FIN_CARGANDO_PEDIDOS_DB",J=t(20),U=t.n(J),z=t(298),H=t(293),Y=function(){var e=Object(m.a)(h.a.mark((function e(a,t){var c,s,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={usu_id:2,mesa_id:t,pedido_est:"pagado",pedido_nro:Object(z.a)(),pedido_fech:Object(H.a)(new Date,"yyyy-MM-dd hh:mm:ss"),pedidoplatos:a.platos.map((function(e){return{plato_id:e.plato_id,pedidoplato_cant:e.cantidad}}))},s="".concat(x,"/pedido"),e.next=4,U.a.post(s,JSON.stringify(c),{headers:{"Content-type":"application/json"}});case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),Z=function(e){var a=e.mostrar,t=e.setMostrar,s=Object(j.b)(),n=Object(c.useState)(!1),r=Object(o.a)(n,2),i=r[0],l=r[1],O=Object(j.c)((function(e){return e.pedido})).pedidos,p=Object(j.c)((function(e){return e.mesa})).idMesaSeleccionada,h=O.find((function(e){return e.mesaId===p})),m=0;h&&(m=h.platos.reduce((function(e,a){return e+ +a.cantidad*+a.plato_pre}),0));return Object(d.jsxs)(b.a,{size:"xl",show:a,onHide:function(){return t(!1)},children:[Object(d.jsx)(b.a.Header,{closeButton:!0,children:Object(d.jsx)(b.a.Title,{children:"Modal heading"})}),Object(d.jsx)(b.a.Body,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsxs)("div",{className:"invoice",children:[Object(d.jsx)("div",{className:"invoice-company text-inverse f-w-600",children:"CodiGo - POS"}),Object(d.jsxs)("div",{className:"invoice-header",children:[Object(d.jsxs)("div",{className:"invoice-from",children:[Object(d.jsx)("small",{children:"from"}),Object(d.jsxs)("address",{className:"m-t-5 m-b-5",children:[Object(d.jsx)("strong",{className:"text-inverse",children:"Twitter, Inc."}),Object(d.jsx)("br",{}),"Street Address",Object(d.jsx)("br",{}),"City, Zip Code",Object(d.jsx)("br",{}),"Phone: (123) 456-7890",Object(d.jsx)("br",{}),"Fax: (123) 456-7890"]})]}),Object(d.jsxs)("div",{className:"invoice-to",children:[Object(d.jsx)("small",{children:"to"}),Object(d.jsxs)("address",{className:"m-t-5 m-b-5",children:[Object(d.jsx)("strong",{className:"text-inverse",children:"Company Name"}),Object(d.jsx)("br",{}),"Street Address",Object(d.jsx)("br",{}),"City, Zip Code",Object(d.jsx)("br",{}),"Phone: (123) 456-7890",Object(d.jsx)("br",{}),"Fax: (123) 456-7890"]})]}),Object(d.jsxs)("div",{className:"invoice-date",children:[Object(d.jsx)("small",{children:"Invoice / July period"}),Object(d.jsx)("div",{className:"date text-inverse m-t-5",children:"August 3,2012"}),Object(d.jsxs)("div",{className:"invoice-detail",children:["#0000123DSS",Object(d.jsx)("br",{}),"Services Product"]})]})]}),Object(d.jsxs)("div",{className:"invoice-content",children:[Object(d.jsx)("div",{className:"table-responsive",children:Object(d.jsxs)("table",{className:"table table-invoice",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Descripci\xf3n"}),Object(d.jsx)("th",{className:"text-center",width:"10%",children:"P. Unitario"}),Object(d.jsx)("th",{className:"text-center",width:"10%",children:"Cantidad"}),Object(d.jsx)("th",{className:"text-right",width:"20%",children:"Sub Total"})]})}),Object(d.jsx)("tbody",{children:h?h.platos.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("span",{className:"text-inverse",children:e.plato_nom})}),Object(d.jsxs)("td",{className:"text-center",children:["S/ ",e.plato_pre]}),Object(d.jsx)("td",{className:"text-center",children:e.cantidad}),Object(d.jsxs)("td",{className:"text-right",children:["S/"," ",+e.plato_pre*+e.cantidad]})]})})):null})]})}),Object(d.jsxs)("div",{className:"invoice-price",children:[Object(d.jsx)("div",{className:"invoice-price-left",children:Object(d.jsxs)("div",{className:"invoice-price-row",children:[Object(d.jsxs)("div",{className:"sub-price",children:[Object(d.jsx)("small",{children:"SUBTOTAL"}),Object(d.jsx)("span",{className:"text-inverse",children:"$4,500.00"})]}),Object(d.jsx)("div",{className:"sub-price",children:Object(d.jsx)("i",{className:"fa fa-plus text-muted"})}),Object(d.jsxs)("div",{className:"sub-price",children:[Object(d.jsx)("small",{children:"PAYPAL FEE (5.4%)"}),Object(d.jsx)("span",{className:"text-inverse",children:"$108.00"})]})]})}),Object(d.jsxs)("div",{className:"invoice-price-right",children:[Object(d.jsx)("small",{children:"TOTAL"})," ",Object(d.jsxs)("span",{className:"f-w-600",children:["S/ ",m]})]})]})]}),Object(d.jsxs)("div",{className:"invoice-note",children:["* Make all cheques payable to [Your Company Name]",Object(d.jsx)("br",{}),"* Payment is due within 30 days",Object(d.jsx)("br",{}),"* If you have any questions concerning this invoice, contact [Name, Phone Number, Email]"]}),Object(d.jsxs)("div",{className:"invoice-footer",children:[Object(d.jsx)("p",{className:"text-center m-b-5 f-w-600",children:"THANK YOU FOR YOUR BUSINESS"}),Object(d.jsxs)("p",{className:"text-center",children:[Object(d.jsxs)("span",{className:"m-r-10",children:[Object(d.jsx)("i",{className:"fa fa-fw fa-lg fa-globe"})," ","matiasgallipoli.com"]}),Object(d.jsxs)("span",{className:"m-r-10",children:[Object(d.jsx)("i",{className:"fa fa-fw fa-lg fa-phone-volume"})," ","T:016-18192302"]}),Object(d.jsxs)("span",{className:"m-r-10",children:[Object(d.jsx)("i",{className:"fa fa-fw fa-lg fa-envelope"})," ","rtiemps@gmail.com"]})]})]})]})})})}),Object(d.jsx)(b.a.Footer,{children:Object(d.jsx)("button",{className:"btn btn-success",onClick:function(){h&&(l(!0),Y(h,p).then((function(e){e.ok&&(s({type:D,payload:p}),t(!1),u.a.fire({icon:"success",title:"\xc9xito!",text:"Pedido pagado con \xe9xito"})),l(!1)})))},disabled:i,children:"PAGAR"})})]})},q=function(){var e=Object(j.c)((function(e){return e.pedido})).pedidos,a=Object(j.c)((function(e){return e.mesa})),t=a.idMesaSeleccionada,s=a.mesas,n=Object(c.useState)(!1),r=Object(o.a)(n,2),i=r[0],b=r[1],O=s.find((function(e){return e.mesa_id===t})),u=e.find((function(e){return e.mesaId===t}));return Object(d.jsxs)("div",{className:"boleta",children:[Object(d.jsxs)("h3",{children:["Pedido Mesa: \xa0",Object(d.jsx)("span",{className:"color-secundario",children:O?O.mesa_nro:"seleccione"})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"comanda",children:[Object(d.jsx)("h4",{className:"comanda__mesa",children:O?"Mesa ".concat(O.mesa_nro):"seleccione"}),Object(d.jsx)("p",{className:"comanda__usuario",children:"Carlos Jimenez"}),Object(d.jsx)("hr",{}),Object(d.jsx)("ul",{className:"comanda__lista",children:u?u.platos.map((function(e,a){return Object(d.jsx)(l,{objPlatoPedido:e},a)})):null}),-1!==t?Object(d.jsx)("button",{className:"boton boton-success boton-block",onClick:function(){b(!0)},children:"PAGAR"}):null]}),Object(d.jsx)(Z,{mostrar:i,setMostrar:b})]})},X=function(e){var a=e.objCategoria,t=Object(j.b)(),c=Object(j.c)((function(e){return e.categoria})).idCategoriaSeleccionada===a.categoria_id?"active":"";return Object(d.jsxs)("li",{onClick:function(){var e;t((e=a.categoria_id,{type:A,payload:e}))},className:c,children:[Object(d.jsx)("img",{src:"/images/plato_blanco.svg",alt:""}),Object(d.jsx)("span",{children:a.categoria_nom})]})},$=t(73),K=t(74),V=function(){var e=Object(j.c)((function(e){return e.categoria})),a=e.categorias,t=e.cargandoCategorias;return Object(d.jsx)("nav",{className:"menu",children:Object(d.jsx)("ul",{className:"menu__lista",children:t?Object(d.jsx)($.a,{icon:K.a,spin:!0,size:"3x",color:"white"}):a.map((function(e){return Object(d.jsx)(X,{objCategoria:e},e.categoria_id)}))})})},W=function(){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("div",{className:"header__logo",children:Object(d.jsx)("img",{src:"/images/logo.svg",alt:""})}),Object(d.jsxs)("div",{className:"header__buscador",children:[Object(d.jsx)("img",{src:"/images/search.svg",alt:""}),Object(d.jsx)("input",{type:"text",className:"header__input",placeholder:"Busca un t\xe9rmino"})]}),Object(d.jsxs)("div",{className:"header__usuario",children:[Object(d.jsx)(r.b,{to:"/admin/dashboard",className:"btn btn-success",children:"Ir a Dashboard"}),Object(d.jsx)("img",{src:"https://randomuser.me/api/portraits/men/90.jpg",alt:""}),Object(d.jsx)("span",{children:"Jorge Garnica"})]})]})},Q=function(e){var a=e.objMesa,t=Object(j.b)(),c=+Object(j.c)((function(e){return e.mesa})).idMesaSeleccionada===+a.mesa_id?"activo":"";return Object(d.jsxs)("li",{className:"mesas__mesa ".concat(c),onClick:function(){var e;t((e=a.mesa_id,{type:N,payload:e}))},children:[Object(d.jsx)("span",{className:"mesas__titulo",children:"Mesa"}),Object(d.jsx)("span",{className:"mesas__numero",children:a.mesa_nro})]})},ee=function(){var e=Object(j.c)((function(e){return e.mesa})),a=e.mesas,t=e.cargandoMesas;return Object(d.jsxs)("div",{className:"mesas",children:[Object(d.jsx)("ul",{className:"mesas__lista",children:!0===t?Object(d.jsx)($.a,{icon:K.a,spin:!0,size:"3x",color:"white"}):a.map((function(e){return Object(d.jsx)(Q,{objMesa:e},e.mesa_id)}))}),Object(d.jsx)("div",{className:"mesas__info"})]})},ae=function(e){var a=e.objPlato,t=Object(j.b)(),c=Object(j.c)((function(e){return e.mesa})).idMesaSeleccionada;return Object(d.jsxs)("div",{className:"carta__plato",children:[Object(d.jsx)("img",{src:a.plato_img,alt:""}),Object(d.jsx)("h4",{className:"carta__titulo",children:a.plato_nom}),Object(d.jsxs)("span",{className:"carta__precio",children:["S/ ",a.plato_pre]}),Object(d.jsxs)("div",{className:"carta__botones",children:[Object(d.jsx)("button",{className:"boton boton-outline-primary boton-restar",children:"-1"}),Object(d.jsx)("button",{className:"boton boton-outline-primary boton-sumar",onClick:function(){-1!==c&&t(function(e,a){return{type:w,payload:{objPlato:e,mesaId:a}}}(a,c))},children:"+1"})]})]})},te=function(){var e=Object(j.c)((function(e){return e.categoria})),a=e.idCategoriaSeleccionada,t=e.categorias,s=Object(j.c)((function(e){return e.plato})).platosPorCategoria,n=t.find((function(e){return e.categoria_id===a})),r=Object(j.b)();return Object(c.useEffect)((function(){var e;-1!==a&&r((e=a,function(){var a=Object(m.a)(h.a.mark((function a(t){var c,s;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:C}),c="".concat(x,"/categoria/").concat(e,"/platos"),a.next=4,U.a.get(c);case 4:s=a.sent,t({type:P,payload:s.data.content.Platos}),t({type:I});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()))}),[a,r]),Object(d.jsxs)("div",{className:"carta",children:[Object(d.jsxs)("h3",{children:["Lista de Platos Categoria: \xa0"," ",Object(d.jsx)("span",{className:"color-secundario",children:n?n.categoria_nom:"Seleccione Categoria"})]}),Object(d.jsx)("div",{className:"carta__platos",children:s.map((function(e){return Object(d.jsx)(ae,{objPlato:e},e.plato_id)}))})]})},ce=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(W,{}),Object(d.jsxs)("main",{className:"pos-container",children:[Object(d.jsx)(V,{}),Object(d.jsxs)("section",{className:"tabla",children:[Object(d.jsx)(ee,{}),Object(d.jsxs)("div",{className:"pedido",children:[Object(d.jsx)(te,{}),Object(d.jsx)(q,{})]})]})]})]})},se=function(){var e=Object(j.b)();return e(function(){var e=Object(m.a)(h.a.mark((function e(a){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:f}),t="".concat(x,"/mesa"),e.next=4,U.a.get(t);case 4:c=e.sent,a({type:_,payload:c.data.content}),a({type:v});case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),e(function(){var e=Object(m.a)(h.a.mark((function e(a){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:g}),t="".concat(x,"/categoria"),e.next=4,U.a.get(t);case 4:c=e.sent,a({type:S,payload:c.data.content}),a({type:y});case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(i.d,{children:Object(d.jsx)(i.b,{path:"/pos/pos",component:ce})})})},ne=t(13),re=t(7),ie=(t(176),function(){return{type:E}}),oe=function(){return{type:k}},de=function(e){var a=Object(j.b)(),t=Object(j.c)((function(e){return e.auth})),s=t.autenticado;t.cargando;s&&e.history.push("/admin/dashboard");var n=Object(c.useState)({correo:"jgarnica@gmail.com",password:"codigo2021"}),r=Object(o.a)(n,2),i=r[0],l=r[1],b=function(e){l(Object(re.a)(Object(re.a)({},i),{},Object(ne.a)({},e.target.name,e.target.value)))};return Object(d.jsx)("main",{className:"login",children:Object(d.jsxs)("div",{className:"login__form",children:[Object(d.jsx)("h1",{children:"Inicio de Sesi\xf3n"}),Object(d.jsxs)("form",{className:"formulario",onSubmit:function(e){var t,c;e.preventDefault(),a((t=i.correo,c=i.password,function(){var e=Object(m.a)(h.a.mark((function e(a){var s,n,r,i,o,d;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(ie()),s="".concat(x,"/login"),console.log(t),console.log(c),e.next=6,U.a.post(s,JSON.stringify({username:t,password:c}),{headers:{"Content-type":"application/json"}});case 6:200===(n=e.sent).status&&(console.log(n.data),r=n.data.token,localStorage.setItem("token",r),i=r.split(".")[1],o=atob(i),d=JSON.parse(o),a({type:R,payload:{autenticado:!0,usu_nom:d.usu_nom,usu_id:d.usu_id,usu_tipo:d.usu_tipo,token:r}})),a(oe());case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()))},children:[Object(d.jsx)("label",{htmlFor:"",children:"Email:"}),Object(d.jsx)("input",{type:"email",className:"formulario__input",placeholder:"Email",name:"correo",value:i.correo,onChange:b}),Object(d.jsx)("label",{htmlFor:"",children:"Password:"}),Object(d.jsx)("input",{type:"password",className:"formulario__input",placeholder:"Password",name:"password",value:i.password,onChange:b}),Object(d.jsx)("button",{className:"formulario__submit",type:"submit",children:"Iniciar Sesi\xf3n"})]})]})})},le=function(){return Object(d.jsx)(i.d,{children:Object(d.jsx)(i.b,{path:"/auth/login",component:de})})},je=t(296),be=t(297),Oe=t(292),ue=t(295),pe=t(130),he=Object(i.g)((function(e){return Object(d.jsx)("header",{children:Object(d.jsxs)(je.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(d.jsx)(je.a.Brand,{href:"#home",children:"React-Bootstrap"}),Object(d.jsx)(je.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsxs)(je.a.Collapse,{id:"basic-navbar-nav",children:[Object(d.jsxs)(be.a,{className:"mr-auto",children:[Object(d.jsx)(be.a.Link,{href:"#home",children:"Home"}),Object(d.jsx)(be.a.Link,{href:"#link",children:"Link"}),Object(d.jsxs)(Oe.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(d.jsx)(Oe.a.Item,{href:"#action/3.1",children:"Action"}),Object(d.jsx)(Oe.a.Item,{href:"#action/3.2",children:"Another action"}),Object(d.jsx)(Oe.a.Item,{href:"#action/3.3",children:"Something"}),Object(d.jsx)(Oe.a.Divider,{}),Object(d.jsx)(Oe.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),Object(d.jsx)(ue.a,{inline:!0,children:Object(d.jsx)(pe.a,{variant:"outline-success",type:"button",onClick:function(){e.history.push("/pos/pos")},children:"Ir a POS"})})]})]})})})),me=t(134),xe={scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},fe=function(){var e=Object(j.c)((function(e){return e.plato})),a=e.platos,t=e.cargandoPlatos,c=Object(j.c)((function(e){return e.pedido})).pedidosDB,s=[],n=[];a.length>0&&c.length>0&&(s=c.map((function(e){var a=new Date(e.pedido_fech);return Object(H.a)(a,"MM/dd hh:mm")})),n=c.map((function(e){var t=0;return e.pedidoplatos.forEach((function(e){var c=a.find((function(a){return a.plato_id===e.plato_id}));t+=+c.plato_pre*+e.pedidoplato_cant})),t})));var r={labels:s,datasets:[{label:"Monto de venta",data:n,backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1}]};return Object(d.jsxs)("main",{className:"container",children:[Object(d.jsxs)("h1",{className:"display-4 mt-5",children:["Dashboard CodiGo - ",Object(d.jsx)("span",{className:"text-danger",children:"POS"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)(me.a,{data:r,options:xe})})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("div",{className:"card bg-dark text-white",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h4",{className:"card-title",children:"Platos"}),Object(d.jsx)("h5",{className:"display-4 text-center",children:t?Object(d.jsx)("div",{class:"spinner-border text-light",role:"status",children:Object(d.jsx)("span",{class:"sr-only",children:"Loading..."})}):a.length})]})})}),Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("div",{className:"card bg-primary text-white",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h4",{className:"card-title",children:"Mesas"}),Object(d.jsx)("h5",{className:"display-4 text-center",children:"12"})]})})}),Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("div",{className:"card bg-primary text-white",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h4",{className:"card-title",children:"Usuarios"}),Object(d.jsx)("h5",{className:"display-4 text-center",children:"12"})]})})})]})]})},ve=function(){var e=Object(j.b)();return e(function(){var e=Object(m.a)(h.a.mark((function e(a){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:T}),t="".concat(x,"/plato"),e.next=4,U.a.get(t);case 4:c=e.sent,console.log(c),a({type:M,payload:c.data.content}),a({type:G});case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),e(function(){var e=Object(m.a)(h.a.mark((function e(a){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:L}),console.log("MOSTRANDO PEDIDOS"),t="".concat(x,"/pedido"),e.next=5,U.a.get(t);case 5:c=e.sent,console.log(c.data),a({type:B,payload:c.data.pedidos}),a({type:F});case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(he,{}),Object(d.jsx)(i.d,{children:Object(d.jsx)(i.b,{path:"/admin/dashboard",component:fe})})]})},_e=function(e){var a=Object(j.c)((function(e){return e.auth})),t=a.autenticado;return a.cargando?Object(d.jsx)("p",{children:"CARGANDO..."}):t?Object(d.jsx)(i.b,{path:e.path,component:e.component}):Object(d.jsx)(i.a,{to:"/auth/login"})},Ne=function(){return Object(j.b)()(function(){var e=Object(m.a)(h.a.mark((function e(a){var t,c,s,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(ie()),t=localStorage.getItem("token");try{t?(c=t.split(".")[1],s=atob(c),n=JSON.parse(s),a({type:R,payload:{autenticado:!0,usu_nom:n.usu_nom,usu_id:n.usu_id,usu_tipo:n.usu_tipo,token:t}}),a(oe())):a(oe())}catch(r){console.log("errosh"),localStorage.removeItem("token"),a(oe())}case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),Object(d.jsx)(r.a,{children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/pos",component:se}),Object(d.jsx)(i.b,{path:"/auth",component:le}),Object(d.jsx)(_e,{path:"/admin",component:ve}),Object(d.jsx)(i.a,{to:"/pos/pos"})]})})},ge=(t(284),t(285),t(56)),ye=t(133),Se={autenticado:!1,token:null,usu_nom:null,cargando:!1,usu_tipo:null,usu_id:null},Ae={categorias:[],cargandoCategorias:!1,idCategoriaSeleccionada:-1},Ce={mesas:[],cargandoMesas:!1,idMesaSeleccionada:-1},Ie=t(14),Pe={pedidosDB:[],cargandoPedidosDB:!1,pedidos:[]},we={platosPorCategoria:[],cargandoPlatosPorCategoria:!1,platos:[],cargandoPlatos:!1},De="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ge.c,Ee=Object(ge.b)({mesa:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case N:return Object(re.a)(Object(re.a)({},e),{},{idMesaSeleccionada:a.payload});case f:return Object(re.a)(Object(re.a)({},e),{},{cargandoMesas:!0});case v:return Object(re.a)(Object(re.a)({},e),{},{cargandoMesas:!1});case _:return Object(re.a)(Object(re.a)({},e),{},{mesas:a.payload});default:return e}},categoria:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case A:return Object(re.a)(Object(re.a)({},e),{},{idCategoriaSeleccionada:a.payload});case g:return Object(re.a)(Object(re.a)({},e),{},{cargandoCategorias:!0});case y:return Object(re.a)(Object(re.a)({},e),{},{cargandoCategorias:!1});case S:return Object(re.a)(Object(re.a)({},e),{},{categorias:a.payload});default:return e}},plato:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case T:return Object(re.a)(Object(re.a)({},e),{},{cargandoPlatos:!0});case G:return Object(re.a)(Object(re.a)({},e),{},{cargandoPlatos:!1});case M:return Object(re.a)(Object(re.a)({},e),{},{platos:a.payload});case C:return Object(re.a)(Object(re.a)({},e),{},{cargandoPlatosPorCategoria:!0});case I:return Object(re.a)(Object(re.a)({},e),{},{cargandoPlatosPorCategoria:!1});case P:return Object(re.a)(Object(re.a)({},e),{},{platosPorCategoria:a.payload});default:return e}},pedido:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case L:return Object(re.a)(Object(re.a)({},e),{},{cargandoPedidosDB:!0});case F:return Object(re.a)(Object(re.a)({},e),{},{cargandoPedidosDB:!1});case B:return Object(re.a)(Object(re.a)({},e),{},{pedidosDB:a.payload});case w:var t=Object(Ie.a)(e.pedidos),c=t.findIndex((function(e){return e.mesaId===a.payload.mesaId}));if(c>=0){var s=t[c].platos.findIndex((function(e){return e.plato_id===a.payload.objPlato.plato_id}));if(s>=0)t[c].platos[s].cantidad+=1;else{var n=Object(re.a)(Object(re.a)({},a.payload.objPlato),{},{cantidad:1});t[c].platos.push(n)}}else{var r={mesaId:a.payload.mesaId,platos:[Object(re.a)(Object(re.a)({},a.payload.objPlato),{},{cantidad:1})]};t.push(r)}return Object(re.a)(Object(re.a)({},e),{},{pedidos:t});case D:var i=Object(Ie.a)(e.pedidos);return i=i.filter((function(e){return e.mesaId!==a.payload})),Object(re.a)(Object(re.a)({},e),{},{pedidos:i});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return Object(re.a)(Object(re.a)({},e),{},{cargando:!0});case k:return Object(re.a)(Object(re.a)({},e),{},{cargando:!1});case R:return Object(re.a)(Object(re.a)({},e),a.payload);default:return e}}}),ke=Object(ge.d)(Ee,De(Object(ge.a)(ye.a)));n.a.render(Object(d.jsx)(j.a,{store:ke,children:Object(d.jsx)(Ne,{})}),document.getElementById("root"))}},[[286,1,2]]]);
//# sourceMappingURL=main.da26d2a6.chunk.js.map