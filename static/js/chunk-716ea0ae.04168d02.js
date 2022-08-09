(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-716ea0ae"],{"063d":function(e,t,o){"use strict";o("f432")},"06bb":function(e,t,o){"use strict";o("d67e")},"09d7":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mybutton"},[o("el-button",{class:{disabled:e.disabled},style:e.btnStyle,attrs:{disabled:e.disabled,type:"primary",icon:e.icon},on:{click:e.clickFn}},[e._t("lastIcon"),e._t("default"),e._t("rightIcon")],2)],1)},s=[],n={name:"MyButton",data:function(){return{}},props:{icon:{type:String},btnStyle:{type:Object},disabled:{type:Boolean,default:!1}},created:function(){},methods:{clickFn:function(){this.$emit("click")}},computed:{}},l=n,r=(o("95a8"),o("2877")),i=Object(r["a"])(l,a,s,!1,null,"40b17dc2",null);t["a"]=i.exports},"0dbe":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"peopleManger"},[o("SerchBar",{attrs:{lastInpTitle:"人员搜索"},on:{search:e.onSearch}}),o("Button",{staticClass:"addBtn",attrs:{icon:"el-icon-circle-plus-outline"},on:{click:e.sureBtn}},[e._v("新建")]),o("peopleTable"),o("Dialog",{attrs:{isShow:e.businessIsShow},on:{"update:isShow":function(t){e.businessIsShow=t},"update:is-show":function(t){e.businessIsShow=t},save:e.sureBtn}}),o("FooterPage",{attrs:{taskList:e.workList,listIsShow:!e.workList.totalCount,lastDisabled:e.lastDisabled,rightDisabled:e.rightDisabled},on:{lastPage:e.lastPage,nextPage:e.nextPage}})],1)},s=[],n=o("c7eb"),l=o("1da1"),r=o("5530"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"peopleManger"},[o("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"","empty-text":"暂无数据",data:e.workList.currentPageRecords,border:!1}},[o("el-table-column",{attrs:{prop:"pageIndex",label:"序号",width:"100",type:"index",index:e.indexMethod,"empty-text":"暂无数据"}}),o("el-table-column",{attrs:{prop:"userName",label:"人员名称",width:"250"}}),o("el-table-column",{attrs:{prop:"regionName",label:"归属区域",width:"210"}}),o("el-table-column",{attrs:{prop:"role.roleName",label:"角色",width:"250"}}),o("el-table-column",{attrs:{prop:"mobile",label:"联系电话",width:"250"}}),o("el-table-column",{attrs:{prop:"taskId",label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.sureBtn(a.id)}}},[e._v(" 修改 ")]),o("el-button",{staticClass:"delBtn",attrs:{type:"text",size:"small"},on:{click:function(t){return e.deleteRow(a.id)}}},[e._v(" 删除 ")])]}}])})],1),o("Dialog",{attrs:{isShow:e.businessIsShow},on:{"update:isShow":function(t){e.businessIsShow=t},"update:is-show":function(t){e.businessIsShow=t},save:e.sureBtn}})],1)},c=[],u=o("2f62"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"table-input"},[o("Dialog",{attrs:{title:"编辑人员",businessIsShow:e.isShow},on:{close:e.onClose,cancelBtn:e.onClose,sureBtn:e.onaddBtn}},[o("el-form",{ref:"form",attrs:{model:e.peopleInfo,"label-width":"80px",rules:e.formRules}},[o("el-form-item",{attrs:{label:"人员名称：",prop:"userName"}},[o("el-input",{attrs:{placeholder:"请输入",maxlength:"5","show-word-limit":""},model:{value:e.peopleInfo.userName,callback:function(t){e.$set(e.peopleInfo,"userName",t)},expression:"peopleInfo.userName"}})],1),o("el-form-item",{attrs:{label:"角色：",prop:"roleName"}},[o("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.peopleInfo.roleName,callback:function(t){e.$set(e.peopleInfo,"roleName",t)},expression:"peopleInfo.roleName"}},e._l(e.roleList,(function(e){return o("el-option",{key:e.roleId,attrs:{label:e.roleName,value:e.roleId}})})),1)],1),o("el-form-item",{attrs:{label:"联系电话：",prop:"mobile"}},[o("el-input",{attrs:{placeholder:"请输入",maxlength:"11","show-word-limit":""},model:{value:e.peopleInfo.mobile,callback:function(t){e.$set(e.peopleInfo,"mobile",t)},expression:"peopleInfo.mobile"}})],1),o("el-form-item",{attrs:{label:"负责区域：",prop:"regionName"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.peopleInfo.regionName,callback:function(t){e.$set(e.peopleInfo,"regionName",t)},expression:"peopleInfo.regionName"}},e._l(e.areaList.currentPageRecords,(function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),o("el-form-item",{attrs:{label:"头像：",prop:"image"}},[o("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?o("img",{staticClass:"avatar",attrs:{src:e.peopleInfo.image}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),o("div",{staticClass:"info"},[e._v("支持扩展名：jpg、png，文件不得大于100kb")]),o("el-form-item",{staticClass:"status",attrs:{label:"状态：",prop:"status"}},[o("el-radio-group",{model:{value:e.peopleInfo.status,callback:function(t){e.$set(e.peopleInfo,"status",t)},expression:"peopleInfo.status"}},[o("el-radio",{attrs:{label:!0}},[e._v("是否启用")])],1)],1)],1)],1)],1)},d=[],f=(o("d3b7"),o("3ca3"),o("ddb0"),o("2b3d"),o("9861"),o("9039")),b=o("996f"),m={name:"EditInfo",props:{isShow:{type:Boolean,default:!1}},components:{Dialog:f["a"]},data:function(){return{businessIsShow:!1,imageUrl:"http://lkd2-java.itheima.net/image/avatar.png",formRules:{userName:[{required:!0,message:"请输入姓名",trigger:"blur"}],roleName:[{required:!0,message:"请输入区域名",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"}],image:[{required:!0,message:"请上传头像",trigger:"blur"}]},editInfo:{userName:"",roleId:1,roleName:"",mobile:"",regionName:"",image:"",status:"true",regionId:""},peopleList:{}}},created:function(){},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(u["e"])("people",["peopleInfo"])),Object(u["e"])("people",["roleList"])),Object(u["e"])("people",["areaList"])),methods:{onClose:function(){this.$emit("update:isShow",!1),this.$refs.form.resetFields()},onaddBtn:function(){var e=this;return Object(l["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.peopleInfo),e.peopleList={userName:e.peopleInfo.userName,roleId:e.peopleInfo.roleId,mobile:e.peopleInfo.mobile,regionId:e.peopleInfo.regionId,status:e.peopleInfo.status,image:e.peopleInfo.image,regionName:e.peopleInfo.regionName},t.next=4,Object(b["d"])(e.peopleList,e.peopleInfo.userId);case 4:e.$parent.$parent.getPeopleList(),e.onClose();case 6:case"end":return t.stop()}}),t)})))()},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,o=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),o||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&o}}},h=m,g=(o("063d"),o("2877")),I=Object(g["a"])(h,p,d,!1,null,"50764512",null),v=I.exports,w={data:function(){return{businessIsShow:!1,peopleInfos:{userName:"",roleId:"",mobile:"",regionName:"",status:"",image:""}}},components:{Dialog:v},created:function(){},computed:Object(r["a"])(Object(r["a"])({},Object(u["e"])("people",["workList"])),Object(u["e"])("people",["peopleInfo"])),methods:Object(r["a"])(Object(r["a"])({},Object(u["b"])("people",["setpeopleInfoList"])),{},{indexMethod:function(e){return e+1},sureBtn:function(e){var t=this;return Object(l["a"])(Object(n["a"])().mark((function o(){return Object(n["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,t.setpeopleInfoList(e);case 2:console.log(t.peopleInfo),t.businessIsShow=!0;case 4:case"end":return o.stop()}}),o)})))()},deleteRow:function(e){var t=this;return Object(l["a"])(Object(n["a"])().mark((function o(){return Object(n["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,Object(b["c"])(e);case 2:t.$parent.getPeopleList();case 3:case"end":return o.stop()}}),o)})))()}})},k=w,y=(o("06bb"),Object(g["a"])(k,i,c,!1,null,"f25434d6",null)),j=y.exports,S=o("5c57"),O=o("09d7"),x=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"table-input"},[o("Dialog",{attrs:{title:"新增人员",businessIsShow:e.isShow},on:{close:e.onClose,cancelBtn:e.onClose,sureBtn:e.onaddBtn}},[o("el-form",{ref:"form",attrs:{model:e.peopleInfo,"label-width":"80px",rules:e.formRules}},[o("el-form-item",{attrs:{label:"人员名称：",prop:"userName"}},[o("el-input",{attrs:{placeholder:"请输入",maxlength:"5","show-word-limit":""},model:{value:e.peopleInfo.userName,callback:function(t){e.$set(e.peopleInfo,"userName",t)},expression:"peopleInfo.userName"}})],1),o("el-form-item",{attrs:{label:"角色：",prop:"roleId"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.peopleInfo.roleId,callback:function(t){e.$set(e.peopleInfo,"roleId",t)},expression:"peopleInfo.roleId"}},e._l(this.roleList,(function(e){return o("el-option",{key:e.value,attrs:{label:e.roleName,value:e.roleId}})})),1)],1),o("el-form-item",{attrs:{label:"联系电话：",prop:"mobile"}},[o("el-input",{attrs:{placeholder:"请输入",maxlength:"11","show-word-limit":""},model:{value:e.peopleInfo.mobile,callback:function(t){e.$set(e.peopleInfo,"mobile",t)},expression:"peopleInfo.mobile"}})],1),o("el-form-item",{attrs:{label:"负责区域：",prop:"regionId"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.peopleInfo.regionId,callback:function(t){e.$set(e.peopleInfo,"regionId",t)},expression:"peopleInfo.regionId"}},e._l(this.areaList.currentPageRecords,(function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),o("el-form-item",{attrs:{label:"头像：",prop:"image"}},[o("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.peopleInfo.image?o("img",{staticClass:"avatar",attrs:{src:e.peopleInfo.image}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),o("div",{staticClass:"info"},[e._v("支持扩展名：jpg、png，文件不得大于100kb")]),o("el-form-item",{staticClass:"status",attrs:{label:"状态："}},[o("el-radio-group",{model:{value:e.peopleInfo.status,callback:function(t){e.$set(e.peopleInfo,"status",t)},expression:"peopleInfo.status"}},[o("el-radio",{attrs:{label:!0}},[e._v("是否启用")])],1)],1)],1)],1)],1)},B=[],L={props:{isShow:{type:Boolean,default:!1}},components:{Dialog:f["a"]},data:function(){return{peopleInfo:{userName:"",roleId:"",mobile:"",regionId:"",regionName:"",status:"",image:""},formRules:{userName:[{required:!0,message:"请输入姓名",trigger:"blur"}],roleName:[{required:!0,message:"请输入角色",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"}],regionId:[{required:!0,message:"请填写区域",trigger:"blur"}],image:[{required:!0,message:"请上传头像",trigger:"blur"}]},businessIsShow:!1}},created:function(){},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(u["e"])("people",["workList"])),Object(u["e"])("people",["roleList"])),Object(u["e"])("people",["areaList"])),methods:{onClose:function(){this.$emit("update:isShow",!1),console.log(this.roleList)},onaddBtn:function(){var e=this;return Object(l["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.$refs.form.validate(),t.next=4,Object(b["a"])(e.peopleInfo);case 4:e.$message.success("添加成功"),e.$emit("save"),e.onClose(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},handleAvatarSuccess:function(e,t){this.peopleInfo.image=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type,o=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),o||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&o}}},_=L,C=(o("3c7f"),Object(g["a"])(_,x,B,!1,null,"461dd98e",null)),$=C.exports,N=o("3d7a"),P={name:"PeopleManger",data:function(){return{businessIsShow:!1,name:""}},components:{Button:O["a"],SerchBar:S["a"],Dialog:$,peopleTable:j,FooterPage:N["a"]},created:function(){this.getPeopleList()},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(u["b"])("people",["setWorkPeople"])),Object(u["b"])("people",["setRoleList"])),Object(u["b"])("people",["setWorkCountList"])),Object(u["b"])("people",["setAreaList"])),{},{getPeopleList:function(e){var t=this;return Object(l["a"])(Object(n["a"])().mark((function o(){return Object(n["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,t.setWorkPeople(e);case 2:return o.next=4,t.setRoleList(e);case 4:return o.next=6,t.setWorkCountList(e);case 6:return o.next=8,t.setAreaList(e);case 8:case"end":return o.stop()}}),o)})))()},sureBtn:function(){this.businessIsShow=!0},close:function(){this.businessIsShow=!1},lastPage:function(){this.setWorkPeople({pageIndex:this.workList.pageIndex-1})},nextPage:function(){this.setWorkPeople({pageIndex:this.workList.pageIndex-0+1})},onSearch:function(e){this.setWorkPeople(e)}}),computed:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(u["e"])("people",["workList"])),Object(u["e"])("people",["roleList"])),Object(u["e"])("people",["workCountList"])),Object(u["e"])("people",["areaList"])),Object(u["e"])("people",["peopleInfo"])),{},{lastDisabled:function(){return this.workList.pageIndex<="1"},rightDisabled:function(){return this.workList.pageIndex>=this.workList.totalPage}})},D=P,M=(o("4df2"),Object(g["a"])(D,a,s,!1,null,"6fc1538c",null));t["default"]=M.exports},"0eb5":function(e,t,o){"use strict";o("0ecc")},"0ecc":function(e,t,o){},"15d8":function(e,t,o){},"1f99":function(e,t,o){},"3c64":function(e,t,o){},"3c7f":function(e,t,o){"use strict";o("52bb")},"3d7a":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.listIsShow?e._e():o("div",{staticClass:"total"},[!1===e.lastDisabled||!1===e.rightDisabled?[o("span",[e._v("共"+e._s(e.taskList.totalCount)+"条数据 第"+e._s(e.taskList.pageIndex)+"/ "+e._s(Math.ceil(e.taskList.totalCount/10))+"页")]),o("div",{staticClass:"page-button"},[o("MyButton",{attrs:{btnStyle:e.pageBtnStyle,disabled:e.lastDisabled},on:{click:e.lastPage}},[e._v("上一页 ")]),o("MyButton",{attrs:{btnStyle:e.pageBtnStyle,disabled:e.rightDisabled},on:{click:e.nextPage}},[e._v("下一页 ")])],1)]:e._e()],2)},s=[],n=o("09d7"),l={name:"FooterPage",data:function(){return{pageBtnStyle:{background:"#d5ddf8",width:"70px",height:"32px",color:"#000",fontWeight:"400",marginLeft:"25px"}}},props:{listIsShow:{type:Boolean},taskList:{type:Object},lastDisabled:{type:Boolean},rightDisabled:{type:Boolean}},created:function(){},methods:{lastPage:function(){this.$emit("lastPage")},nextPage:function(){this.$emit("nextPage")}},computed:{},components:{MyButton:n["a"]}},r=l,i=(o("0eb5"),o("2877")),c=Object(i["a"])(r,a,s,!1,null,"1154a776",null);t["a"]=c.exports},"4c68":function(e,t,o){"use strict";o("1f99")},"4df2":function(e,t,o){"use strict";o("fccb")},"4ff3":function(e,t,o){"use strict";o("3c64")},"52bb":function(e,t,o){},"5c57":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"search"},[o("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[o("el-form-item",{attrs:{label:e.lastInpTitle+":"}},[o("el-input",{ref:"lastInput",attrs:{placeholder:"请输入",clearable:""},model:{value:e.taskCode,callback:function(t){e.taskCode=t},expression:"taskCode"}})],1),e.rightInpTitle?o("el-form-item",{attrs:{label:e.rightInpTitle+":"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:!0},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},e._l(e.typeList,(function(e){return o("el-option",{key:e.statusId,attrs:{label:e.statusName,value:e.statusId}})})),1)],1):e._e(),o("el-form-item",[o("MyButton",{attrs:{icon:"el-icon-search",btnStyle:e.searchButStyle},on:{click:e.searchBtnFn}},[e._v(" 查询 ")])],1)],1)],1)},s=[],n=o("09d7"),l={name:"SearchBar",data:function(){return{taskCode:"",status:"",searchButStyle:{background:"#5f84ff"}}},props:{lastInpTitle:{type:String},rightInpTitle:{type:String},typeList:{type:Array}},created:function(){},methods:{searchBtnFn:function(){this.$emit("search",this.taskCode,this.status)}},computed:{},components:{MyButton:n["a"]}},r=l,i=(o("4ff3"),o("2877")),c=Object(i["a"])(r,a,s,!1,null,"3cb6acbc",null);t["a"]=c.exports},9039:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:e.title,visible:e.isShow,width:e.width,"destroy-on-close":e.isDestroy},on:{"update:visible":function(t){e.isShow=t},close:e.close,open:e.open}},[e._t("default"),e.isInfoDialog?o("div",{staticClass:"bottom-btn"},[o("MyButton",{attrs:{btnStyle:e.infoStyle},on:{click:e.infoBtn}},[e._v("重新创建")])],1):e._e(),e.removeDialog?o("div",{staticClass:"bottom-btn"},[o("MyButton",{attrs:{btnStyle:e.infoStyle},on:{click:e.removeBtn}},[e._v("取消工单")])],1):e._e(),e.twoBtn?o("div",{staticClass:"bottom-btn"},[o("MyButton",{attrs:{btnStyle:e.cancelStyle},on:{click:e.cancelBtn}},[e._v("取 消 ")]),o("MyButton",{attrs:{btnStyle:e.sureStyle},on:{click:e.sureBtn}},[e._v("确 定 ")])],1):e._e()],2)},s=[],n=o("09d7"),l={name:"Dialog",data:function(){return{isShow:"",cancelStyle:{background:"#fbf4f0",color:"#655b56"},sureStyle:{background:"linear-gradient(135deg,#ff9743,#ff5e20)",color:"#fff",marginLeft:"24px"},infoStyle:{background:"#fbf4f0",color:"#655b56"}}},props:{businessIsShow:{typeof:Boolean,default:!1},title:{typeof:String},isInfoDialog:{type:Boolean,default:!1},twoBtn:{type:Boolean,default:!0},removeDialog:{type:Boolean,default:!1},isDestroy:{type:Boolean,default:!1},width:{typeof:String,default:"630px"}},created:function(){},methods:{cancelBtn:function(){this.$emit("cancelBtn")},sureBtn:function(){this.$emit("sureBtn")},open:function(){this.$emit("open")},close:function(){this.$emit("close")},infoBtn:function(){this.$emit("infoBtn")},removeBtn:function(){this.$emit("removeBtn")}},computed:{},watch:{businessIsShow:{immediate:!0,handler:function(){this.isShow=this.businessIsShow}}},components:{MyButton:n["a"]}},r=l,i=(o("4c68"),o("2877")),c=Object(i["a"])(r,a,s,!1,null,"023d4138",null);t["a"]=c.exports},"95a8":function(e,t,o){"use strict";o("15d8")},d67e:function(e,t,o){},f432:function(e,t,o){},fccb:function(e,t,o){}}]);