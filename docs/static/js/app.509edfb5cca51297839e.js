webpackJsonp([0],{A2zF:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiM4ODQ0ZWUiIHZpZXdCb3g9IjAgMCAzNSAzNSI+PHBhdGggZD0iTTEyIDJjNS41MTQgMCAxMCA0LjQ4NiAxMCAxMHMtNC40ODYgMTAtMTAgMTAtMTAtNC40ODYtMTAtMTAgNC40ODYtMTAgMTAtMTB6bTAtMmMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptNiAxM2gtNXY1aC0ydi01aC01di0yaDV2LTVoMnY1aDV2MnoiLz48L3N2Zz4="},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},o=s("VU/8")({name:"app"},n,!1,function(t){s("z2lM")},null,null).exports,c=s("/ocq"),a={name:"Notelist",data:function(){return{noteList:[{title:"Custumer's address",text:""},{title:"12/22 daily meeting",text:""}],noteTitle:"",selectedItems:[],focusNote:0}},created:function(){window.addEventListener("keyup",this.changeFocus)},methods:{addItem:function(){""!==this.noteTitle&&(this.noteList.lenth<1&&(this.focusNote=0),this.noteList.push({title:this.noteTitle,text:""}),this.noteTitle="")},isFocus:function(t){return t===this.focusNote},isSelected:function(t){return this.selectedItems.includes(t)},removeItem:function(t){this.noteList.splice(t,1),this.focusNote-1>=0&&this.setFocus(this.focusNote-1)},removeSelectItems:function(){for(var t=this.selectedItems.length-1;t>=0;t-=1)this.removeItem(this.selectedItems[t]);this.selectedItems=[]},selectItem:function(t){this.selectedItems.includes(t)?this.selectedItems=this.selectedItems.filter(function(e){return e!==t}):this.selectedItems.push(t),this.sortArray(this.selectedItems)},onEnter:function(t){"Enter"===t.key&&this.addItem()},setFocus:function(t){this.focusNote=t},changeFocus:function(t){switch(t.key){case"ArrowUp":this.focusNote>=1&&this.setFocus(this.focusNote-1);break;case"ArrowDown":this.focusNote<this.noteList.length-1&&this.setFocus(this.focusNote+1)}},sortArray:function(t){return t.sort(function(t,e){return t<e?-1:t>e?1:0})},isAllSelected:function(){return this.selectedItems.length===this.noteList.length},selectAllItems:function(){if(this.isAllSelected())this.selectedItems=[];else{this.selectedItems=[];for(var t=0,e=this.noteList.length-1;e>=0;e-=1)this.selectedItems.push(t),t+=1}}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"wrapper"}},[i("h1",{staticClass:"title"},[t._v("Note-taking App")]),t._v(" "),i("div",{staticClass:"header"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.noteTitle,expression:"noteTitle"}],staticClass:"note-title",attrs:{placeholder:"Add a new note here"},domProps:{value:t.noteTitle},on:{keyup:t.onEnter,input:function(e){e.target.composing||(t.noteTitle=e.target.value)}}}),t._v(" "),i("img",{staticClass:"add",attrs:{src:s("A2zF")},on:{click:t.addItem}})]),t._v(" "),i("div",{staticClass:"content-wrapper"},[i("div",{staticClass:"board"},[i("div",{staticClass:"actions"},[i("input",{staticClass:"select-all",attrs:{type:"checkbox"},domProps:{checked:t.isAllSelected()},on:{click:t.selectAllItems}}),t._v(" "),i("label",{staticClass:"select-label"},[t._v("All")]),t._v(" "),i("img",{staticClass:"remove",attrs:{src:s("dTKk")},on:{click:t.removeSelectItems}})]),t._v(" "),i("div",{staticClass:"notes"},t._l(t.noteList,function(e,s){return i("li",[i("div",{class:{highlight:t.isFocus(s)},on:{click:function(e){t.setFocus(s)}}},[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.isSelected(s)},on:{click:function(e){t.selectItem(s)}}}),t._v(" "),i("span",{staticClass:"note"},[t._v("\n              "+t._s(e.title)+"\n            ")])])])}))]),t._v(" "),i("div",{staticClass:"details"},[t.noteList.length>0?i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.noteList[t.focusNote].text,expression:"noteList[focusNote].text"}],attrs:{placeholder:"Write a description here"},domProps:{value:t.noteList[t.focusNote].text},on:{input:function(e){e.target.composing||t.$set(t.noteList[t.focusNote],"text",e.target.value)}}}):t._e()])])])},staticRenderFns:[]},r=s("VU/8")(a,l,!1,function(t){s("VTK0")},"data-v-5e442f20",null).exports;i.a.use(c.a);var u=new c.a({routes:[{path:"/",name:"Notetaking",component:r}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:u,template:"<App/>",components:{App:o}})},VTK0:function(t,e){},dTKk:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAzNSAzNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjODg0NGVlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTE5IDI0aC0xNGMtMS4xMDQgMC0yLS44OTYtMi0ydi0xN2gtMXYtMmg2di0xLjVjMC0uODI3LjY3My0xLjUgMS41LTEuNWg1Yy44MjUgMCAxLjUuNjcxIDEuNSAxLjV2MS41aDZ2MmgtMXYxN2MwIDEuMTA0LS44OTYgMi0yIDJ6bTAtMTloLTE0djE2LjVjMCAuMjc2LjIyNC41LjUuNWgxM2MuMjc2IDAgLjUtLjIyNC41LS41di0xNi41em0tOSA0YzAtLjU1Mi0uNDQ4LTEtMS0xcy0xIC40NDgtMSAxdjljMCAuNTUyLjQ0OCAxIDEgMXMxLS40NDggMS0xdi05em02IDBjMC0uNTUyLS40NDgtMS0xLTFzLTEgLjQ0OC0xIDF2OWMwIC41NTIuNDQ4IDEgMSAxczEtLjQ0OCAxLTF2LTl6bS0yLTdoLTR2MWg0di0xeiIvPjwvc3ZnPg=="},z2lM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.509edfb5cca51297839e.js.map