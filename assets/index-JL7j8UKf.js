import{i as F,k as P}from"./request-Bl3HPWDP.js";import{E as K}from"./el-button-DmNjZ1pE.js";import"./el-input-DKTYgvQ_.js";import{E as Q}from"./el-input-number-BAOS3RVu.js";import{E as W,a as Z}from"./el-breadcrumb-item-CsrLH52a.js";import{_ as j,U as ee,o as d,c as _,F as S,r as I,b as e,t as r,J as M,s as G,k as g,n as U,d as i,V as se,z as te,N as R,l as Y,u as oe,e as v,w as E,f as b,a as ne,p as le,h as ae}from"./index-B9zWtJm9.js";import{u as ce}from"./cart-DFSrsTmy.js";import"./use-form-item-DwdXDC9w.js";import"./event-BE20p1dL.js";function ie(t){const a=[],o=2**t.length;for(let n=0;n<o;n+=1){const u=[];for(let s=0;s<t.length;s+=1)n&1<<s&&u.push(t[s]);a.push(u)}return a}const V="★",ue=t=>{const a={};return t&&t.length>0&&t.forEach(o=>{if(o.inventory){const n=o.specs.map(s=>s.valueName);ie(n).forEach(s=>{const c=s.join(V);a[c]||(a[c]=[]),a[c].push(o.id)})}}),a};function re(t,a){t&&t.length>0&&t.forEach(o=>{o.values.forEach(n=>{n.disabled=!a[n.name]})})}const q=t=>{const a=[];return t.forEach((o,n)=>{const u=o.values.find(s=>s.selected);u?a[n]=u.name:a[n]=void 0}),a},de=(t,a)=>{t.forEach((o,n)=>{const u=q(t);o.values.forEach(s=>{if(!s.selected){u[n]=s.name;const c=u.filter(l=>l).join(V);s.disabled=!a[c]}})})},_e={name:"XtxGoodSku",props:{goods:{type:Object,default:()=>({specs:[],skus:[]})}},emits:["change"],setup(t,{emit:a}){let o={};return ee(()=>{o=ue(t.goods.skus),re(t.goods.specs,o)}),{clickSpecs:(u,s)=>{if(s.disabled)return!1;s.selected?s.selected=!1:(u.values.forEach(l=>{l.selected=!1}),s.selected=!0),de(t.goods.specs,o);const c=q(t.goods.specs).filter(l=>l);if(c.length===t.goods.specs.length){const l=o[c.join(V)][0],p=t.goods.skus.find(h=>h.id===l);a("change",{skuId:p.id,price:p.price,oldPrice:p.oldPrice,inventory:p.inventory,specsText:p.specs.reduce((h,k)=>`${h} ${k.name}：${k.valueName}`,"").trim()})}else a("change",{})}}}},pe={class:"goods-sku"},fe=["onClick","src"],he=["onClick"];function me(t,a,o,n,u,s){return d(),_("div",pe,[(d(!0),_(S,null,I(o.goods.specs,c=>(d(),_("dl",{key:c.id},[e("dt",null,r(c.name),1),e("dd",null,[(d(!0),_(S,null,I(c.values,l=>(d(),_(S,{key:l.name},[l.picture?(d(),_("img",{key:0,class:M({selected:l.selected,disabled:l.disabled}),onClick:p=>n.clickSpecs(c,l),src:l.picture},null,10,fe)):(d(),_("span",{key:1,class:M({selected:l.selected,disabled:l.disabled}),onClick:p=>n.clickSpecs(c,l)},r(l.name),11,he))],64))),128))])]))),128))])}const ge=j(_e,[["render",me],["__scopeId","data-v-36d97954"]]),ve=t=>F({url:"/goods",params:{id:t}}),be=({id:t,type:a,limit:o=3})=>F({url:"/goods/hot",params:{id:t,type:a,limit:o}}),ke=["src"],ye={class:"ellipsis"},$e={class:"ellipsis"},xe={__name:"xiaoshi_rebang",props:{n:{type:String,required:!0}},setup(t){let a=G(),o=t,n=g([]);async function u(s){let c=await be(a.params.id);n.value=c.result}return U(()=>{u(o.n)}),(s,c)=>(d(!0),_(S,null,I(i(n),l=>(d(),_("div",{class:"xiaoshi_rebang",key:l.id},[e("img",{src:l.picture,alt:""},null,8,ke),e("p",ye,r(l.name),1),e("p",$e,r(l.desc),1),e("p",null,"¥"+r(l.price),1)]))),128))}},X=j(xe,[["__scopeId","data-v-835b0a12"]]),Se={class:"fdj"},Ee=["src"],Ie={class:"xiao"},Ce=["onMouseover"],we=["src"],je={__name:"fangdajing",props:{ps:{type:Object,required:!0}},setup(t){const a=g(null),{elementX:o,elementY:n,isOutside:u}=se(a),s=g(0),c=g(0),l=g(0),p=g(0);te([o,n,u],()=>{u.value||(o.value>100&&o.value<300&&(s.value=o.value-100),n.value>100&&n.value<300&&(c.value=n.value-100),o.value>300&&(s.value=200),o.value<100&&(s.value=0),n.value>300&&(c.value=200),n.value<100&&(c.value=0),l.value=-s.value*2,p.value=-c.value*2)});let h=g(0);return(k,N)=>(d(),_("div",Se,[e("div",{class:"zhong",ref_key:"target",ref:a},[e("img",{src:t.ps[i(h)],alt:""},null,8,Ee),e("div",{class:"hei",style:R({left:`${s.value}px`,top:`${c.value}px`})},null,4)],512),e("div",{class:"da",style:R([{backgroundImage:`url(${t.ps[i(h)]})`,backgroundPositionX:`${l.value}px`,backgroundPositionY:`${p.value}px`}])},null,4),e("ul",Ie,[(d(!0),_(S,null,I(t.ps,(y,$)=>(d(),_("li",{key:y,class:M({active:$===i(h)}),onMouseover:C=>Y(h)?h.value=$:h=$},[e("img",{src:y,alt:""},null,8,we)],42,Ce))),128))])]))}},Pe=j(je,[["__scopeId","data-v-6bb54db7"]]),f=t=>(le("data-v-b63349c9"),t=t(),ae(),t),Me={class:"goods_detail"},Ve={class:"container"},Ne={class:"mian"},Ae={class:"top"},Be={class:"left"},ze={class:"xinxi"},De={class:"item"},Le=f(()=>e("p",null,"销量人气",-1)),Oe=f(()=>e("p",null,[e("i",{class:"iconfont icon-task-filling"}),b("销量人气")],-1)),Re={class:"item"},Xe=f(()=>e("p",null,"商品评价",-1)),Fe=f(()=>e("p",null,[e("i",{class:"iconfont icon-comment-filling"}),b("查看评价")],-1)),Ge={class:"item"},Ue=f(()=>e("p",null,"收藏人气",-1)),Ye=f(()=>e("p",null,[e("i",{class:"iconfont icon-favorite-filling"}),b("收藏商品")],-1)),qe={class:"item"},Te=f(()=>e("p",null,"品牌信息",-1)),He=f(()=>e("p",null,[e("i",{class:"iconfont icon-dynamic-filling"}),b("品牌主页")],-1)),Je={class:"right"},Ke=f(()=>e("div",{class:"cuxiao"},[e("p",null,[e("span",null,"促销"),e("span",null,"12月好物放送，App领券购买直降120元")]),e("p",null,[e("span",null,"服务"),b(),e("i",null,"无忧退货"),e("i",null,"快速退款"),e("i",null,"免费包邮"),e("a",{href:"#"},"了解详情")])],-1)),Qe=f(()=>e("br",null,null,-1)),We={class:"bottom"},Ze={class:"left"},es=f(()=>e("p",{style:{"font-size":"18px",color:"#333"}},"商品详情",-1)),ss={class:"attrs"},ts={class:"dt"},os={class:"dd"},ns=["src"],ls={class:"right"},as=f(()=>e("h3",null," 24小时热榜 ",-1)),cs=f(()=>e("h3",null," 周热榜 ",-1)),is={__name:"index",setup(t){let a=ce(),o=G(),n=oe(),u=g(o.params.id),s=g({}),c=g([]);async function l(){let y=await ve(u.value);s.value=y.result,c.value=y.result.mainPictures}let p=g({});function h(y){p.value=y}let k=g(1);async function N(){var $;($=ne().userInfo)!=null&&$.token?p.value.skuId?(a.jiaFn(p.value.skuId,k.value),P.success("添加成功")):P.error("请选择规格"):(P.error("请先登录"),n.push("/login"))}return U(()=>{l()}),(y,$)=>{var A,B,z;const C=Z,T=W,H=Q,J=K;return d(),_("div",Me,[e("div",Ve,[e("div",Ne,[v(T,{separator:">"},{default:E(()=>{var m,D,L,O;return[v(C,{to:{path:"/"}},{default:E(()=>[b("首页")]),_:1}),v(C,{to:{path:`/fenlei/${(D=(m=i(s))==null?void 0:m.categories)==null?void 0:D[1].id}`}},{default:E(()=>{var x,w;return[b(r((w=(x=i(s))==null?void 0:x.categories)==null?void 0:w[1].name),1)]}),_:1},8,["to"]),v(C,{to:{path:`/fenlei/sub/${(O=(L=i(s))==null?void 0:L.categories)==null?void 0:O[0].id}`}},{default:E(()=>{var x,w;return[b(r((w=(x=i(s))==null?void 0:x.categories)==null?void 0:w[0].name),1)]}),_:1},8,["to"]),v(C,null,{default:E(()=>{var x;return[b(r((x=i(s))==null?void 0:x.name),1)]}),_:1})]}),_:1})]),e("div",Ae,[e("div",Be,[v(Pe,{ps:i(c)},null,8,["ps"]),e("div",ze,[e("div",De,[Le,e("p",null,r(i(s).salesCount)+"+",1),Oe]),e("div",Re,[Xe,e("p",null,r(i(s).commentCount)+"+",1),Fe]),e("div",Ge,[Ue,e("p",null,r(i(s).collectCount)+"+",1),Ye]),e("div",qe,[Te,e("p",null,r((A=i(s).brand)==null?void 0:A.name),1),He])])]),e("div",Je,[e("p",null,r(i(s).name),1),e("p",null,r(i(s).desc),1),e("p",null,[b(r(i(s).price)+" ",1),e("del",null,r(i(s).oldPrice),1)]),Ke,v(ge,{goods:i(s),onChange:h},null,8,["goods"]),v(H,{modelValue:i(k),"onUpdate:modelValue":$[0]||($[0]=m=>Y(k)?k.value=m:k=m)},null,8,["modelValue"]),Qe,v(J,{onClick:N,style:{"margin-top":"20px",height:"40px"}},{default:E(()=>[b("加入购物车")]),_:1})])]),e("div",We,[e("div",Ze,[es,e("ul",ss,[(d(!0),_(S,null,I((B=i(s).details)==null?void 0:B.properties,m=>(d(),_("li",{key:m.value},[e("span",ts,r(m.name),1),e("span",os,r(m.value),1)]))),128))]),(d(!0),_(S,null,I((z=i(s).details)==null?void 0:z.pictures,m=>(d(),_("img",{src:m,key:m,alt:""},null,8,ns))),128))]),e("div",ls,[as,v(X,{n:"1"}),cs,v(X,{n:"2"})])])])])}}},vs=j(is,[["__scopeId","data-v-b63349c9"]]);export{vs as default};
