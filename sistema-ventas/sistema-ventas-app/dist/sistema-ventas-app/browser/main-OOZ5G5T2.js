import{a as f,b as Ee,c as ke,d as Fe}from"./chunk-2GMNFHJE.js";import{D as _e,E as be,F as we,_ as Ie,b as fe,c as he,e as ge,g as v,h as T,i as ve,j as ye,k as Se,t as Ce,u as xe,v as Me}from"./chunk-CMXQEUUI.js";import{b as re,c as ae,d as se,e as me,f as le,g as ce,i as de,j as pe,k as ue,l as O,m as N}from"./chunk-BVEO6QIJ.js";import"./chunk-IX6G3U3V.js";import{$a as Z,Cb as r,Cc as oe,Da as U,Db as a,Eb as h,Fb as Q,Gb as ee,I,Ib as M,Ja as G,Kc as ie,Lb as _,Lc as ne,M as H,Nb as F,Ub as b,Vb as s,W as P,Wb as R,Xb as L,Z as $,Za as l,_a as Y,aa as z,ba as E,bb as q,bc as te,db as J,fb as W,ga as d,gb as X,j,ka as u,la as k,oa as B,rb as g,t as w,ta as C,tb as p,ua as x,vb as K}from"./chunk-WSLSRKTI.js";var Le=(t,e)=>d(f).token$.pipe(I(1),w(o=>!o));var Oe=(t,e)=>d(f).token$.pipe(I(1),w(o=>o?!0:(d(ue).createUrlTree(["/login"]),!1)));var Be=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",loadChildren:()=>import("./chunk-YJP5ARYK.js").then(t=>t.HomeModule)},{path:"notFound",loadChildren:()=>import("./chunk-HQYDTQMN.js").then(t=>t.NotFoundModule)},{path:"admin",loadChildren:()=>import("./chunk-UEVRGAOA.js").then(t=>t.AdminModule),canActivate:[Oe]},{path:"login",loadChildren:()=>import("./chunk-CW6DZRZP.js").then(t=>t.LoginModule),canActivate:[Le]}],Te=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=k({type:e}),e.\u0275inj=E({imports:[N.forRoot(Be),N]});let t=e;return t})();function Ye(t,e){if(t&1){let i=M();Q(0),r(1,"button",8),_("click",function(){C(i);let n=F();return x(n.onToggleSidenav())}),r(2,"mat-icon"),s(3,"menu"),a()(),ee()}}function Ze(t,e){t&1&&(r(0,"a",9),s(1,"Iniciar Sesi\xF3n"),a())}function qe(t,e){if(t&1){let i=M();r(0,"button",10),s(1),r(2,"mat-icon"),s(3,"expand-more"),a()(),r(4,"mat-menu",null,1)(6,"button",11),_("click",function(){C(i);let n=F();return x(n.onLogout())}),r(7,"mat-icon"),s(8,"logout"),a(),s(9," Cerrar Sesi\xF3n "),a()()}if(t&2){let i=b(5),o=F();p("matMenuTriggerFor",i),l(),L(" ",o.data.nombre+" "+o.data.apellidos," ")}}var Re=(()=>{let e=class e{constructor(o){this.authSvc=o,this.toggleSidenav=new U,this.isLogged=!1,this.data={},this.destroy$=new j}ngOnInit(){this.authSvc.isLogged$.pipe(P(this.destroy$)).subscribe(o=>{this.isLogged=o,console.log("isLogged",this.isLogged)}),this.authSvc.tokenData$.pipe(P(this.destroy$)).subscribe(o=>{this.data=o,console.log("data",this.data)})}onToggleSidenav(){this.toggleSidenav.emit(),console.log("funciona")}onLogout(){this.authSvc.logout()}ngOnDestroy(){this.destroy$.next({}),this.destroy$.complete()}};e.\u0275fac=function(n){return new(n||e)(Y(f))},e.\u0275cmp=u({type:e,selectors:[["app-header"]],outputs:{toggleSidenav:"toggleSidenav"},decls:9,vars:5,consts:[["viewLogOut",""],["lista","matMenu"],[4,"ngIf"],[1,"titulo"],["routerLink","/home"],[1,"spacer"],["class","nomCliente","mat-button","","color","primary","routerLink","/login",4,"ngIf","ngIfElse"],[1,"nomCliente"],["mat-icon-button","",3,"click"],["mat-button","","color","primary","routerLink","/login",1,"nomCliente"],["mat-button","",1,"nomCliente",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"]],template:function(n,m){if(n&1&&(r(0,"mat-toolbar"),g(1,Ye,4,0,"ng-container",2),r(2,"span",3)(3,"a",4),s(4,"Sistema de Ventas"),a()(),h(5,"span",5),g(6,Ze,2,0,"a",6),a(),g(7,qe,10,2,"ng-template",7,0,te)),n&2){let c=b(8);K("mat-elevation-z1",!0),l(),p("ngIf",m.isLogged),l(5),p("ngIf",!m.isLogged)("ngIfElse",c)}},dependencies:[ne,O,he,fe,ge,v,T,be,_e,we],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}a[_ngcontent-%COMP%]{text-decoration:none;color:#000}mat-toolbar[_ngcontent-%COMP%]{background-color:#73ede7}.nomCliente[_ngcontent-%COMP%]{font-size:15px;background-color:#06434b}.titulo[_ngcontent-%COMP%]{font-size:40px;font-weight:bolder}"]});let t=e;return t})();var Ne=(()=>{let e=class e{constructor(){this.currentYear=new Date().getFullYear()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-footer"]],decls:20,vars:1,consts:[[1,"footer"],[1,"container"],[1,"row"],[1,"col-md-6"],[1,"texto"],[1,"col-md-6","text-md-right"],["href","#",1,"me-2"],["color","primary"],["href","#"],["color","warn"],[1,"col"],[1,"text-muted"]],template:function(n,m){n&1&&(r(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),s(5,"Sistema de Ventas Jasso"),a()(),r(6,"div",5)(7,"a",6)(8,"mat-icon",7),s(9,"facebook"),a()(),r(10,"a",8)(11,"mat-icon",9),s(12,"favorite"),a()()()(),r(13,"div",2)(14,"div",10),h(15,"hr"),a()(),r(16,"div",2)(17,"div",10)(18,"span",11),s(19),a()()()()()),n&2&&(l(19),L("",m.currentYear," Mi Empresa "))},dependencies:[v],styles:[".footer[_ngcontent-%COMP%]{position:fixed;width:100%;bottom:0;background-color:#8ad7d3;padding:10px 0;text-align:center}.texto[_ngcontent-%COMP%]{font-size:30px;color:#000}.text-muted[_ngcontent-%COMP%]{font-size:30px}"]});let t=e;return t})();function Xe(t,e){if(t&1&&(r(0,"div")(1,"a",2)(2,"mat-icon",3),s(3),a(),r(4,"span"),s(5),a()()()),t&2){let i=e.$implicit;l(),p("routerLink",i.route),l(2),R(i.icon),l(2),R(i.name)}}var De=(()=>{let e=class e{constructor(){this.menus=[]}ngOnInit(){this.generarMenu()}generarMenu(){this.menus.push({icon:"home",name:"Inicio",route:"/home"},{icon:"manage_accounts",name:"Usuarios",route:"admin/usuarios"},{icon:"category",name:"Categor\xEDas",route:"admin/categorias"},{icon:"inventory_2",name:"Productos",route:"admin/productos"},{icon:"shopping_cart",name:"Ventas",route:"ventas/ventas"},{icon:"content_paste",name:"Reportes",route:"ventas/reportes"})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-sidebar"]],decls:4,vars:1,consts:[["color","primary"],[4,"ngFor","ngForOf"],["mat-list-item","",3,"routerLink"],[1,"me-2","bt-1"]],template:function(n,m){n&1&&(r(0,"mat-toolbar",0),s(1,"Menu"),a(),r(2,"mat-nav-list"),g(3,Xe,6,3,"div",1),a()),n&2&&(l(3),p("ngForOf",m.menus))},dependencies:[ie,O,v,T,Me,xe]});let t=e;return t})();var Ve=(()=>{let e=class e{constructor(){this.title="sistema-ventas-app"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-root"]],decls:11,vars:1,consts:[["sidenav",""],["mode","push"],[3,"toggleSidenav"],["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-circus",3,"fullScreen"],[2,"font-size","20px","color","white"]],template:function(n,m){if(n&1){let c=M();r(0,"mat-sidenav-container")(1,"mat-sidenav",1,0),h(3,"app-sidebar"),a(),r(4,"mat-sidenav-content")(5,"app-header",2),_("toggleSidenav",function(){C(c);let A=b(2);return x(A.toggle())}),a(),h(6,"router-outlet")(7,"app-footer"),a()(),r(8,"ngx-spinner",3)(9,"p",4),s(10,"Loading..."),a()()}n&2&&(l(8),p("fullScreen",!0))},dependencies:[pe,ye,Se,ve,ke,Re,Ne,De],styles:["mat-sidenav[_ngcontent-%COMP%]{width:25%}mat-sidenav-container[_ngcontent-%COMP%]{height:100%}"]});let t=e;return t})();var Qe="@",et=(()=>{let e=class e{constructor(o,n,m,c,S){this.doc=o,this.delegate=n,this.zone=m,this.animationType=c,this.moduleImpl=S,this._rendererFactoryPromise=null,this.scheduler=d(q,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-MY2CGTTH.js").then(n=>n)).catch(n=>{throw new $(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:m})=>{this._engine=n(this.animationType,this.doc);let c=new m(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(o,n){let m=this.delegate.createRenderer(o,n);if(m.\u0275type===0)return m;typeof m.throwOnSyntheticProps=="boolean"&&(m.throwOnSyntheticProps=!1);let c=new D(m);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(S=>{let A=S.createRenderer(o,n);c.use(A),this.scheduler?.notify(9)}).catch(S=>{c.use(m)}),c}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(n){Z()},e.\u0275prov=z({token:e,factory:e.\u0275fac});let t=e;return t})(),D=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let i of this.replay)i(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,i){return this.delegate.createElement(e,i)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,i){this.delegate.appendChild(e,i)}insertBefore(e,i,o,n){this.delegate.insertBefore(e,i,o,n)}removeChild(e,i,o){this.delegate.removeChild(e,i,o)}selectRootElement(e,i){return this.delegate.selectRootElement(e,i)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,i,o,n){this.delegate.setAttribute(e,i,o,n)}removeAttribute(e,i,o){this.delegate.removeAttribute(e,i,o)}addClass(e,i){this.delegate.addClass(e,i)}removeClass(e,i){this.delegate.removeClass(e,i)}setStyle(e,i,o,n){this.delegate.setStyle(e,i,o,n)}removeStyle(e,i,o){this.delegate.removeStyle(e,i,o)}setProperty(e,i,o){this.shouldReplay(i)&&this.replay.push(n=>n.setProperty(e,i,o)),this.delegate.setProperty(e,i,o)}setValue(e,i){this.delegate.setValue(e,i)}listen(e,i,o){return this.shouldReplay(i)&&this.replay.push(n=>n.listen(e,i,o)),this.delegate.listen(e,i,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(Qe)}};function je(t="animations"){return W("NgAsyncAnimations"),B([{provide:J,useFactory:(e,i,o)=>new et(e,i,o,t),deps:[oe,me,X]},{provide:G,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var V=0;function He(t,e){console.log("Loading::Interceptor"),V++;let i=d(Ee);return i.show(),e(t).pipe(H(()=>{V--,V||i.hide()}))}var $e=(t,e)=>{if(t.headers.get("requireToken")){let o=d(f).tokenValue;if(o){let n=t.clone({setHeaders:{auth:`${o}`}});return e(n)}}return e(t)};var ze=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=k({type:e,bootstrap:[Ve]}),e.\u0275inj=E({providers:[de(),je(),re(ae([He,$e]),se())],imports:[ce,Te,Ie,Fe,Ce]});let t=e;return t})();le().bootstrapModule(ze,{ngZoneEventCoalescing:!0}).catch(t=>console.error(t));
