"use strict";(self.webpackChunkant_table_excel=self.webpackChunkant_table_excel||[]).push([[561],{96218:function(ue,O,e){e.r(O);var n=e(85434),R=e(67294),w=e(85893);O.default=function(){var Z=(0,R.useMemo)(function(){return[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u5E74\u9F84",dataIndex:"age",sorter:function(Q,X){return Q.age-X.age}},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7535\u8BDD",dataIndex:"phone"}]},[]),v=[{name:"\u5F20\u4E09",age:12,address:"\u5317\u4EAC",phone:1388888888},{name:"\u5F204",age:13,address:"\u4E0A\u6D77",phone:1388888888},{name:"\u5F205",age:14,address:"\u676D\u5DDE",phone:1388888888}];return(0,w.jsx)(n.iA,{columns:Z,dataSource:v,rowKey:"name",meta:{contextMenus:[{children:"item1 ",data:{label:"item1"}}],handleItemClick:console.log}})}},19786:function(ue,O,e){e.r(O);var n=e(5574),R=e.n(n),w=e(85434),Z=e(93513),v=e(67294),k=e(85893);O.default=function(){var Q=(0,v.useMemo)(function(){return[{title:"Drag",key:"Drag",render:function(y,m,M){return(0,k.jsx)("a",{className:"drag-handle",href:"#",children:"Drag"})}},{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u5E74\u9F84",dataIndex:"age",sorter:function(y,m){return y.age-m.age}},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7535\u8BDD",dataIndex:"phone"}]},[]),X=[{name:"\u5F203",age:12,address:"\u5317\u4EAC",phone:1388888888},{name:"\u5F204",age:13,address:"\u4E0A\u6D77",phone:1388888888},{name:"\u5F205",age:14,address:"\u676D\u5DDE5",phone:1388888888},{name:"\u5F206",age:14,address:"\u676D\u5DDE6",phone:1388888888},{name:"\u5F207",age:14,address:"\u676D\u5DDE7",phone:1388888888}],G=(0,v.useState)({name:{order:2}}),ne=R()(G,2),o=ne[0],re=ne[1],H=function(y,m,M,I){m(function(f){var C=f.findIndex(function(s){return s.dataIndex==="age"}),g=f.findIndex(function(s){return s.dataIndex==="address"});return(0,Z.Uy)(f,function(s){C!==-1&&(s[C].visible=!1),g!==-1&&(s[g].visible=!1),s[M].visible=y})}),console.log("column",I)};return(0,k.jsx)(w.iA,{columns:Q,columnsState:o,onColumnsStateChange:re,dataSource:X,rowKey:"name",onCheckboxChange:H})}},96071:function(ue,O,e){e.r(O);var n=e(85434),R=e(67294),w=e(85893);O.default=function(){var Z=(0,R.useMemo)(function(){return[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7535\u8BDD",dataIndex:"phone"}]},[]),v=[{name:"\u5F20\u4E09",age:12,address:"\u5317\u4EAC",phone:1388888888},{name:"\u5F204",age:13,address:"\u4E0A\u6D77",phone:1388888888},{name:"\u5F205",age:14,address:"\u676D\u5DDE",phone:1388888888}],k={name:{order:2}};return(0,w.jsx)(n.iA,{columns:Z,defaultColumnsState:k,dataSource:v,rowKey:"name"})}},85434:function(ue,O,e){e.d(O,{iA:function(){return Ge}});var n=e(67294),R=(0,n.createContext)({columnsState:{},setColumnsState:function(){},setColumnState:function(){}}),w=function(){return useContext(R)},Z=e(5574),v=e.n(Z),k=function(t){return(0,n.useCallback)(t||function(){},[t])};function Q(h){var t=h.value,l=h.defaultValue,a=h.finalValue,r=h.onChange,i=k(r),p=(0,n.useState)(l!==void 0?l:a),E=v()(p,2),U=E[0],B=E[1],j=(0,n.useCallback)(function(S){B(S),i==null||i(S)},[i]);return t!==void 0?[t,i,!0]:[U,j,!1]}var X=e(9783),G=e.n(X),ne=e(97857),o=e.n(ne),re=e(13769),H=e.n(re),Y=function(t){var l=useState(t),a=_slicedToArray(l,2),r=a[0],i=a[1],p=useState(t),E=_slicedToArray(p,2),U=E[0],B=E[1];return t!==U&&(B(t),i(t)),[r,i]},y=null,m=function(t,l,a){var r=(0,n.useState)(a!=null&&a.immediate?void 0:t),i=v()(r,2),p=i[0],E=i[1];t!==p&&(l(t,p),E(t))},M=e(25968),I=e(6226),f=e(26713),C=e(71577),g=e(66569),s=e(62748),A=e(93513),c=e(75282),me=e(40581),ie=e(54663),de=e(65570),ce=e(1706),u=e(85893),ye=["onResize","width","onResizeStart","onResizeStop"],Ie=function(t){var l=t.onResize,a=t.width,r=t.onResizeStart,i=t.onResizeStop,p=H()(t,ye);return a?(0,u.jsx)(ce.Resizable,{width:a,height:0,onResize:l,onResizeStart:r,onResizeStop:i,children:(0,u.jsx)("th",o()({},p))}):(0,u.jsx)("th",o()({},p))},Pe=e(15009),Se=e.n(Pe),Re=e(99289),je=e.n(Re),xe=e(74494),Te=e(17917),Ce=e(96074),Ae=e(72220),ze=["meta","setIsOpenedExcel","columns","dataSource"],Ue=function(t){var l=t.meta,a=t.setIsOpenedExcel,r=t.columns,i=t.dataSource,p=H()(t,ze),E=(0,n.useMemo)(function(){return i||[]},[i]),U=(0,n.useState)(l.filename||"my-excel"),B=v()(U,2),j=B[0],S=B[1],q=(0,n.useCallback)(function(W){return S(W.target.value.trim())},[]),ae=function(){var W=je()(Se()().mark(function ee(){var $,b,K;return Se()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(E){T.next=2;break}return T.abrupt("return");case 2:return T.next=4,Promise.resolve().then(e.bind(e,72220));case 4:b=T.sent,K=b.exportTableData,K(r==null||($=r.map)===null||$===void 0?void 0:$.call(r,function(te){return o()(o()({},te),{},{field:te.dataIndex})}),(0,Ae.formatAntTable)(E,r),j);case 7:case"end":return T.stop()}},ee)}));return function(){return W.apply(this,arguments)}}(),N=function(){ae(),a(!1)};return(0,u.jsxs)(xe.Z,o()(o()({title:"\u5BFC\u51FAExcel",onOk:N,onCancel:function(){return a(!1)}},p),{},{children:[(0,u.jsx)(Te.Z,{value:j,onChange:q,placeholder:"\u6587\u4EF6\u540D"}),(0,u.jsx)(Ce.Z,{})]}))},Be=(0,n.memo)(Ue),ge=e(32808),J=function(t){if(!t)return"";var l=t.key,a=l===void 0?"":l,r=t.dataIndex,i=r===void 0?"":r;return!a&&!i?(console.warn("[ant-table-excel],\u9519\u8BEF: \u8BF7\u4E3A\u5217 ".concat(JSON.stringify(t,null,2)," \u8865\u5145 key \u6216 dataIndex, \u5426\u5219\u8BE5\u5217\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528")),""):(a||i).toString()},We=function(t){return function(l,a){var r=t[J(l)]||{},i=t[J(a)]||{};return(r.order||l.order||0)-(i.order||a.order||0)}},Ee=function(t,l){return function(a){var r=t[J(a)]||{};return Object.prototype.hasOwnProperty.call(r,"visible")?r.visible:Object.prototype.hasOwnProperty.call(a,"visible")?a.visible:l||!0}},fe=function(t,l){return t[J(l)]||{}},Ke=["columns","meta","setIsOpenedSetting"],Le=function(t,l,a){return t.map(function(r){return o()(o()({},r),{},{visible:!!Ee(l,a)(r),disabled:fe(l,r).disabled})})},Fe=function(t){var l=t.columns,a=t.meta,r=t.setIsOpenedSetting,i=H()(t,Ke),p=(0,n.useContext)(R),E=p.columnsState,U=p.setColumnsState,B=(0,n.useState)(Le(l,E,!!a.defaultVisible)),j=v()(B,2),S=j[0],q=j[1],ae=(0,n.useState)(!0),N=v()(ae,2),W=N[0],ee=N[1],$=(0,n.useState)(!1),b=v()($,2),K=b[0],le=b[1];m(S,function(_){var P=_.every(function(z){return z.visible}),L=_.every(function(z){return!z.visible});le(P),ee(!L&&!P)},{immediate:!0});var T=function(P){ee(!1),le(P.target.checked),q(S.map(function(L){return o()(o()({},L),{},{visible:P.target.checked})}))},te=(0,n.useCallback)(function(){console.log("ok");var _=(0,A.Uy)(E,function(P){S.forEach(function(L){var z=J(L);P[z]=o()(o()({},P[z]),{},{visible:L.visible})})});U(_),r(!1)},[E,S,U,r]);return(0,u.jsxs)(xe.Z,o()(o()({title:"\u5217\u8BBE\u7F6E",onOk:te,onCancel:function(){return r(!1)}},i),{},{children:[(0,u.jsx)(ge.Z,{indeterminate:W,onChange:T,checked:K,children:"\u5168\u9009"}),(0,u.jsx)(Ce.Z,{}),(0,u.jsx)(f.Z,{size:"small",children:S.map(function(_,P){return(0,u.jsx)(ge.Z,{checked:_.visible,onChange:function(z){var oe=z.target.checked;if(console.log("onChange",oe),a.onCheckboxChange){var se;(se=a.onCheckboxChange)===null||se===void 0||se.call(a,oe,q,P,_)}else q((0,A.Uy)(S,function(he){he[P].visible=oe}))},disabled:_.disabled,children:typeof _.title=="function"?_.title({}):_.title},J(_))})})]}))},Ve=(0,n.memo)(Fe),Ze=["columns","defaultColumnsState","columnsState","onColumnsStateChange","meta","dataSource"],be="menu-id",ke=function(t){var l,a=t.columns,r=t.defaultColumnsState,i=t.columnsState,p=t.onColumnsStateChange,E=t.meta,U=t.dataSource,B=H()(t,Ze),j=(0,n.useMemo)(function(){return a||[]},[a]),S=(0,n.useMemo)(function(){return o()({defaultVisible:!0},E)},[E]),q=(0,n.useState)([]),ae=v()(q,2),N=ae[0],W=ae[1];m(U,function(d){W(d||[])});var ee=Q({value:i,defaultValue:r,finalValue:{},onChange:p}),$=v()(ee,2),b=$[0],K=$[1],le=(0,n.useState)(!1),T=v()(le,2),te=T[0],_=T[1],P=(0,n.useState)(!1),L=v()(P,2),z=L[0],oe=L[1],se=(0,c.av)({id:be}),he=se.show,ve=(0,n.useCallback)(function(d,x,F){console.log("log:setColumnState",d,x,F),console.log("prev",JSON.stringify(b));var D=(0,A.Uy)(b,function(V){V[d]=o()(o()({},V[d]),{},G()({},x,F))});console.log("newColumns",JSON.stringify(D)),K(D)},[b,K]),He=(0,n.useMemo)(function(){return{columnsState:b,setColumnsState:K,setColumnState:ve}},[b,K,ve]),Je=(0,n.useState)(!1),Ne=v()(Je,2),_e=Ne[1],$e=function(x){console.log("start resize"),_e(!0),x.stopPropagation(),x.preventDefault()},Qe=function(){console.log("end resize"),_e(!1)},pe=(0,n.useCallback)(function(d){return function(x,F){var D=F.size,V=J(d);console.log("size",D),ve(V,"width",D.width)}},[ve]),Me=(0,n.useMemo)(function(){return j.filter(Boolean).sort(We(b)).filter(Ee(b,S.defaultVisible)).map(function(d){var x;return o()(o()({},d),{},{width:((x=fe(b,d))===null||x===void 0?void 0:x.width)||d.width,onHeaderCell:function(D){var V;return{width:((V=fe(b,D))===null||V===void 0?void 0:V.width)||D.width,onResize:pe(D),onResizeStart:$e,onResizeStop:Qe}}})})},[j,b,pe,S.defaultVisible]),Xe={onDragEnd:function(x,F){var D=(0,s.q)(Me,x,F),V=(0,A.Uy)(b,function(De){D.forEach(function(qe,et){var Oe=J(qe);De[Oe]=o()(o()({},De[Oe]),{},{order:et})})});K(V)},nodeSelector:"th",ignoreSelector:".ant-table-cell-fix-left"},Ye={onDragEnd:function(x,F){var D=(0,s.q)(N,x,F);W(D)},handleSelector:".drag-handle"};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(R.Provider,{value:He,children:[(0,u.jsxs)(M.Z,{wrap:!1,children:[(0,u.jsx)(I.Z,{flex:1}),(0,u.jsx)(I.Z,{flex:"none",children:(0,u.jsxs)(f.Z,{style:{marginBottom:8,marginLeft:"auto"},children:[(0,u.jsx)(C.ZP,{onClick:function(){return _(!0)},children:"\u5217\u8BBE\u7F6E"}),(0,u.jsx)(C.ZP,{onClick:function(){return oe(!0)},children:"excel"})]})})]}),(0,u.jsx)(ie.Z.DragColumn,o()(o()({},Xe),{},{children:(0,u.jsx)(ie.Z.DragColumn,o()(o()({},Ye),{},{children:(0,u.jsx)(g.Z,o()({columns:Me,onRow:function(x){return{onContextMenu:function(D){he({event:D,props:x})}}},components:{header:{cell:Ie}},dataSource:N},B))}))})),te&&(0,u.jsx)(Ve,{columns:j,open:te,setIsOpenedSetting:_,meta:S}),z&&(0,u.jsx)(Be,{columns:j,dataSource:N,open:z,setIsOpenedExcel:oe,meta:S}),((l=S.contextMenus)===null||l===void 0?void 0:l.length)&&(0,u.jsx)(c.v2,{id:be,children:S.contextMenus.map(function(d,x){return(0,u.jsx)(c.ck,o()(o()({onClick:S.handleItemClick},d),{},{children:d.children}),d.key||x)})})]})})},we=(0,n.memo)(ke),Ge=we},72220:function(ue,O,e){e.r(O),e.d(O,{exportTableData:function(){return H},formatAntTable:function(){return ne}});var n=e(15009),R=e.n(n),w=e(99289),Z=e.n(w),v=e(52677),k=e.n(v),Q=e(26815),X=e(75982),G={style:"thin",color:{argb:"FFAEA1C5"}},ne=function(m,M){var I=[];return m?(m.forEach(function(f){var C={};M.forEach(function(g){var s=(0,Q.Z)(f,g.dataIndex);if(g.render){var A,c;s=k()((A=g.render)===null||A===void 0?void 0:A.call(g,s,f))==="object"?s:(c=g.render)===null||c===void 0?void 0:c.call(g,s,f)}C[g.dataIndex]=s}),I.push(C)}),I):[]};function o(y,m){y.xlsx.writeBuffer({useStyles:!0}).then(function(M){var I=new Blob([M],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),f=window.URL.createObjectURL(I),C=document.createElement("a");C.href=f,m.endsWith(".xlsx")||(m+=".xlsx"),C.download=m,C.click(),window.URL.revokeObjectURL(f)})}function re(y,m,M,I,f){var C={rate:"0.00%",money:"$0.00",int:"0",string:"@"},g=new y.Workbook;g.creator="EMA\u9E70\u773C2.0\u7CFB\u7EDF";var s=g.addWorksheet(f,{properties:{tabColor:{argb:"ffeaff8f"},defaultRowHeight:20}});s.columns=m.map(function(c){return{header:c.title||c.headerName,key:c.dataIndex||c.field,width:(c.width||100)/7,height:70,style:{font:{size:12,bold:!0},alignment:{vertical:"middle",horizontal:c.oldType==="string"?"left":"right"},numFmt:C[c.oldType]||"General"}}});var A=M.filter(function(c){return c.total_row}).length+1;s.views=[{state:"frozen",xSplit:m.filter(function(c){return c.fixedColumn}).length,ySplit:A}],I.forEach(function(c,me){var ie=s.addRow(c);ie.eachCell({includeEmpty:!0},function(de){var ce=me+1>=A;ce&&(de.font={bold:!1,size:12}),me%2===0&&(de.fill={type:"pattern",pattern:"solid",fgColor:{argb:ce?"FFF7F1FD":"FFF6D6B9"}},de.border={top:G,bottom:G,left:G,right:G})})}),o(g,f)}function H(y,m,M){return Y.apply(this,arguments)}function Y(){return Y=Z()(R()().mark(function y(m,M,I){var f,C;return R()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!(0,X.Z)(M)){s.next=2;break}return s.abrupt("return");case 2:return s.next=4,e.e(295).then(e.t.bind(e,74295,23));case 4:f=s.sent,C=f.default,re(C,m,M,M,I);case 7:case"end":return s.stop()}},y)})),Y.apply(this,arguments)}}}]);
