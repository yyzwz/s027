"use strict";(self["webpackChunks027"]=self["webpackChunks027"]||[]).push([[2914,7047],{1709:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var i=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("添加通知公告")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"公告标题",prop:"title"}},[t("Input",{staticStyle:{width:"570px"},attrs:{type:"textarea",rows:2,maxlength:"240","show-word-limit":"",placeholder:"请输入公告标题...",clearable:""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("FormItem",{attrs:{label:"内容",prop:"content"}},[t("Input",{staticStyle:{width:"570px"},attrs:{type:"textarea",rows:10,maxlength:"240","show-word-limit":"",placeholder:"请输入公告内容...",clearable:""},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),t("FormItem",{attrs:{label:"状态",prop:"status"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"notice_status",transfer:"",clearable:"",placeholder:"请选择公告状态..."},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1),t("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000"},model:{value:e.form.sortOrder,callback:function(t){e.$set(e.form,"sortOrder",t)},expression:"form.sortOrder"}})],1),t("FormItem",{attrs:{label:"图片",prop:"imageUrl"}},[t("upload-pic-input",{staticStyle:{width:"570px"},model:{value:e.form.imageUrl,callback:function(t){e.$set(e.form,"imageUrl",t)},expression:"form.imageUrl"}})],1),t("FormItem",{attrs:{label:"附件",prop:"fileUrl"}},[t("upload-file-input",{staticStyle:{width:"570px"},model:{value:e.form.fileUrl,callback:function(t){e.$set(e.form,"fileUrl",t)},expression:"form.fileUrl"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},a=[],l=s(824),r=s(6413),o=s(2091),n=s(8188);const c={name:"add",components:{uploadPicInput:r["default"],uploadFileInput:o["default"],dict:n["default"]},data(){return{submitLoading:!1,form:{title:"",content:"",userId:"",userName:"",time:"",status:"已发布",sortOrder:0,imageUrl:"",fileUrl:""},formValidate:{}}},methods:{init(){},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,l.Fy)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},h=c;var m=s(1001),d=(0,m.Z)(h,i,a,!1,null,null,null);const u=d.exports},8533:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search"},["add"==e.currView?t("add",{on:{close:function(t){e.currView="index"},submited:e.submited}}):e._e(),"edit"==e.currView?t("edit",{attrs:{data:e.formData},on:{close:function(t){e.currView="index"},submited:e.submited}}):e._e(),t("Card",{directives:[{name:"show",rawName:"v-show",value:"index"==e.currView,expression:"currView=='index'"}]},[t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)}}},[t("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{ref:"searchForm",staticStyle:{display:"flex"},attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{attrs:{label:"",prop:"title"}},[t("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"公告标题",clearable:""},model:{value:e.searchForm.title,callback:function(t){e.$set(e.searchForm,"title",t)},expression:"searchForm.title"}})],1),t("Form-item",{attrs:{label:"",prop:"userName"}},[t("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"发布人",clearable:""},model:{value:e.searchForm.userName,callback:function(t){e.$set(e.searchForm,"userName",t)},expression:"searchForm.userName"}})],1),t("Form-item",{attrs:{label:"",prop:"status"}},[t("dict",{staticStyle:{width:"150px"},attrs:{dict:"notice_status",transfer:"",clearable:"",placeholder:"公告状态..."},model:{value:e.searchForm.status,callback:function(t){e.$set(e.searchForm,"status",t)},expression:"searchForm.status"}})],1),t("Form-item",{staticClass:"br",staticStyle:{"margin-left":"10px"}},[t("Button",{attrs:{type:"primary",icon:"ios-search",size:"small",ghost:""},on:{click:e.handleSearch}},[e._v("搜索")]),t("Button",{attrs:{type:"warning",size:"small",icon:"md-refresh",ghost:""},on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"info",size:"small",icon:"md-add",ghost:"",disabled:!e.$route.meta.permTypes.includes("add")},on:{click:e.add}},[e._v("添加")]),t("Button",{attrs:{type:"error",icon:"md-trash",size:"small",ghost:"",disabled:!e.$route.meta.permTypes.includes("delete")},on:{click:e.delAll}},[e._v("删除")]),t("Button",{attrs:{type:"success",icon:"md-paper-plane",size:"small",ghost:""},on:{click:e.excelData}},[e._v("导出")])],1),t("Form-item",{staticStyle:{position:"fixed",right:"50px",top:"130px"}},[t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"info",icon:"md-settings",size:"small",ghost:""},on:{click:function(t){e.showFilterPanelFlag=!e.showFilterPanelFlag}}},[e._v(" 列筛选")]),t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"warning",icon:"ios-help-circle-outline",size:"small",ghost:""},on:{click:function(t){e.modal1=!0}}},[e._v(" 使用教程")]),t("Modal",{attrs:{title:"使用教程"},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[t("p",[e._v("1.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("2.XXXXXXXXXXXXXXXXXXXXXXXX")]),t("p",[e._v("3.XXXXXXXXXXXXXXXXXXXXXXXX")])])],1)],1)],1)],1),t("Row",{staticClass:"operation",staticStyle:{position:"relative"}},[t("transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showFilterPanelFlag,expression:"showFilterPanelFlag"}],staticClass:"filter-panel"},[t("CheckboxGroup",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.mycolumns,(function(e){return t("div",{key:e.key},[t("Checkbox",{staticStyle:{margin:"2px 5px"},attrs:{label:e.title}})],1)})),0)],1)])],1),t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openTip,expression:"openTip"}]}),t("Row",[t("Table",{ref:"table",attrs:{loading:e.loading,height:e.tableHeight,border:"",stripe:"",size:"small",columns:e.columns,data:e.data,sortable:"custom","row-class-name":e.rowClassNmae},on:{"on-sort-change":e.changeSort,"on-selection-change":e.changeSelect,"on-row-click":e.rowClick}})],1),t("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[t("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[15,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1)],1)},a=[],l=s(824),r=s(1709),o=s(7807),n=s(8188);const c={name:"single-window",components:{add:r["default"],edit:o["default"],dict:n["default"]},data(){return{tableHeight:0,selected:["选择","序号","公告标题","内容","发布人","发布时间","状态","排序值","图片","附件","操作"],modal1:!1,openSearch:!0,openTip:!0,formData:{},currView:"index",loading:!0,searchForm:{pageNumber:1,pageSize:15,sort:"createTime",order:"desc"},selectList:[],selectCount:0,selectRow:0,columns:[{type:"selection",width:60,title:"选择",align:"center",fixed:"left"},{title:"序号",width:85,align:"center",fixed:"left",sortType:!0,render:(e,t)=>e("span",t.index+(this.searchForm.pageNumber-1)*this.searchForm.pageSize+1)},{title:"公告标题",key:"title",minWidth:200,tooltip:!0,sortable:!1},{title:"内容",key:"content",minWidth:200,tooltip:!0,sortable:!1},{title:"发布人ID",key:"userId",minWidth:200,tooltip:!0,sortable:!1},{title:"发布人",key:"userName",minWidth:150,tooltip:!0,sortable:!1},{title:"发布时间",key:"time",minWidth:180,tooltip:!0,sortable:!1},{title:"状态",key:"status",minWidth:120,tooltip:!0,sortable:!1},{title:"排序值",key:"sortOrder",minWidth:120,tooltip:!0,sortable:!1},{title:"图片",key:"imageUrl",minWidth:150,tooltip:!0,sortable:!1,render:(e,t)=>void 0==t.row.imageUrl||""==t.row.imageUrl?e("div",[e("span",{style:{color:"#ff9900"}},"未上传")]):e("img",{attrs:{src:t.row.imageUrl},style:{cursor:"zoom-in",width:"40px",margin:"2px 0","object-fit":"contain"},on:{click:()=>{this.showFile(t.row.imageUrl)}}})},{title:"附件",key:"fileUrl",minWidth:150,tooltip:!0,sortable:!1,render:(e,t)=>void 0==t.row.fileUrl||""==t.row.fileUrl?e("div",[e("span",{style:{color:"#ff9900"}},"未上传")]):e("img",{attrs:{src:s(3641)},style:{cursor:"zoom-in",width:"40px",margin:"2px 0","object-fit":"contain"},on:{click:()=>{this.showFile(t.row.fileUrl)}}})},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc",minWidth:180,align:"center",tooltip:!0},{title:"创建者",key:"createBy",sortable:!0,sortType:"desc",minWidth:100,align:"center",tooltip:!0},{title:"修改时间",key:"updateTime",minWidth:180,align:"center",tooltip:!0},{title:"修改者",key:"updateBy",minWidth:100,align:"center",tooltip:!0},{title:"操作",key:"action",align:"center",width:200,fixed:"right",render:(e,t)=>{var s=this;return e("div",[e("Button",{props:{type:"primary",size:"small",icon:"ios-create-outline",disabled:!(s.$route.meta.permTypes&&s.$route.meta.permTypes.includes("edit")),ghost:!0},style:{marginRight:"5px"},on:{click:()=>{this.edit(t.row)}}},"编辑"),e("Button",{props:{type:"error",size:"small",icon:"md-trash",disabled:!(s.$route.meta.permTypes&&s.$route.meta.permTypes.includes("delete")),ghost:!0},on:{click:()=>{this.remove(t.row)}}},"删除")])}}],data:[],pageNumber:1,pageSize:10,total:0,showFilterPanelFlag:!1}},methods:{init(){this.getDataList()},submited(){this.currView="index",this.getDataList()},changePage(e){this.searchForm.pageNumber=e,this.getDataList(),this.clearSelectAll()},changePageSize(e){this.searchForm.pageSize=e,this.getDataList()},rowClick(e,t){this.selectRow=e},rowClassNmae(e,t){return e.id==this.selectRow.id?"rowClassNmaeColor":""},excelData(){this.$refs.table.exportCsv({filename:"导出结果"})},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},handleReset(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},changeSort(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"===e.order&&(this.searchForm.order=""),this.getDataList()},clearSelectAll(){this.$refs.table.selectAll(!1)},changeSelect(e){this.selectList=e,this.selectCount=e.length},getDataList(){this.loading=!0,(0,l.vo)(this.searchForm).then((e=>{this.loading=!1,e.success&&(this.data=e.result.records,this.total=e.result.total)}))},add(){this.currView="add"},edit(e){for(let i in e)null==e[i]&&(e[i]="");let t=JSON.stringify(e),s=JSON.parse(t);this.formData=s,this.currView="edit"},remove(e){this.$Modal.confirm({title:"确认删除",content:"您确认要删除 "+e.name+" ?",loading:!0,onOk:()=>{(0,l.Zt)({ids:e.id}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.getDataList())}))}})},delAll(){this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",loading:!0,onOk:()=>{let e="";this.selectList.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),(0,l.Zt)({ids:e}).then((e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.clearSelectAll(),this.getDataList())}))}})},showFile(e){window.open(e+"?preview=true")}},mounted(){this.init(),this.tableHeight=Number(window.innerHeight-273),this.mycolumns=this.columns;let e=[];for(var t=0;t<this.selected.length;t++)for(var s=this.selected[t],i=0;i<this.columns.length;i++)this.columns[i].title==s&&e.push(this.columns[i]);this.columns=e},watch:{selected:function(e){let t=[];for(var s=0;s<this.mycolumns.length;s++){var i=this.mycolumns[s];(void 0==i.title||e.contains(i.title))&&t.push(i)}this.columns=t}}},h=c;var m=s(1001),d=(0,m.Z)(h,i,a,!1,null,null,null);const u=d.exports},3641:e=>{e.exports="data:image/png;base64,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"}}]);