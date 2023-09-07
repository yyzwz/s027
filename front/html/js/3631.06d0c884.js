"use strict";(self["webpackChunks027"]=self["webpackChunks027"]||[]).push([[3631,6524],{7328:(t,e,s)=>{s.r(e),s.d(e,{default:()=>u});var i=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("div",{attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"edit-head"},[e("a",{staticClass:"back-title",on:{click:t.close}},[e("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),e("div",{staticClass:"head-name"},[t._v("添加政府政策")]),e("span"),e("a",{staticClass:"window-close",on:{click:t.close}},[e("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),e("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[e("FormItem",{attrs:{label:"政策标题",prop:"title"}},[e("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",type:"textarea",rows:2,maxlength:"240","show-word-limit":"",placeholder:"请输入政策标题..."},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("FormItem",{attrs:{label:"内容",prop:"content"}},[e("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",type:"textarea",rows:10,maxlength:"240","show-word-limit":"",placeholder:"请输入政策内容..."},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),e("FormItem",{attrs:{label:"状态",prop:"status"}},[e("dict",{staticStyle:{width:"570px"},attrs:{dict:"notice_status",transfer:"",clearable:"",placeholder:"请选择政策状态..."},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),e("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[e("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000"},model:{value:t.form.sortOrder,callback:function(e){t.$set(t.form,"sortOrder",e)},expression:"form.sortOrder"}})],1),e("FormItem",{attrs:{label:"图片",prop:"imageUrl"}},[e("upload-pic-input",{staticStyle:{width:"570px"},model:{value:t.form.imageUrl,callback:function(e){t.$set(t.form,"imageUrl",e)},expression:"form.imageUrl"}})],1),e("FormItem",{attrs:{label:"附件",prop:"fileUrl"}},[e("upload-file-input",{staticStyle:{width:"570px"},model:{value:t.form.fileUrl,callback:function(e){t.$set(t.form,"fileUrl",e)},expression:"form.fileUrl"}})],1),e("Form-item",{staticClass:"br"},[e("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),e("Button",{on:{click:t.handleReset}},[t._v("重置")]),e("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1)},a=[],l=s(4281),o=s(8188),r=s(6413),n=s(2091);const c={name:"add",components:{uploadPicInput:r["default"],uploadFileInput:n["default"],dict:o["default"]},data(){return{submitLoading:!1,form:{title:"",content:"",userId:"",userName:"",time:"",status:"",sortOrder:0,imageUrl:"",fileUrl:""},formValidate:{}}},methods:{init(){},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((t=>{t&&(0,l.u$)(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},h=c;var m=s(1001),d=(0,m.Z)(h,i,a,!1,null,null,null);const u=d.exports},4709:(t,e,s)=>{s.r(e),s.d(e,{default:()=>u});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},["add"==t.currView?e("add",{on:{close:function(e){t.currView="index"},submited:t.submited}}):t._e(),"edit"==t.currView?e("edit",{attrs:{data:t.formData},on:{close:function(e){t.currView="index"},submited:t.submited}}):t._e(),e("Card",{directives:[{name:"show",rawName:"v-show",value:"index"==t.currView,expression:"currView=='index'"}]},[e("Row",{directives:[{name:"show",rawName:"v-show",value:t.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch.apply(null,arguments)}}},[e("Form",{ref:"searchForm",attrs:{model:t.searchForm,inline:"","label-width":0}},[e("Form-item",{ref:"searchForm",staticStyle:{display:"flex"},attrs:{model:t.searchForm,inline:"","label-width":0}},[e("Form-item",{attrs:{label:"",prop:"title"}},[e("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"政策标题",clearable:""},model:{value:t.searchForm.title,callback:function(e){t.$set(t.searchForm,"title",e)},expression:"searchForm.title"}})],1),e("Form-item",{attrs:{label:"",prop:"content"}},[e("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"内容",clearable:""},model:{value:t.searchForm.content,callback:function(e){t.$set(t.searchForm,"content",e)},expression:"searchForm.content"}})],1),e("Form-item",{attrs:{label:"",prop:"status"}},[e("dict",{staticStyle:{width:"150px"},attrs:{dict:"notice_status",transfer:"",clearable:"",placeholder:"政策状态"},model:{value:t.searchForm.status,callback:function(e){t.$set(t.searchForm,"status",e)},expression:"searchForm.status"}})],1),e("Form-item",{staticClass:"br",staticStyle:{"margin-left":"10px"}},[e("Button",{attrs:{type:"primary",icon:"ios-search",size:"small",ghost:""},on:{click:t.handleSearch}},[t._v("搜索")]),e("Button",{attrs:{type:"warning",size:"small",icon:"md-refresh",ghost:""},on:{click:t.handleReset}},[t._v("重置")]),e("Button",{attrs:{type:"info",size:"small",icon:"md-add",ghost:"",disabled:!t.$route.meta.permTypes.includes("add")},on:{click:t.add}},[t._v("添加")]),e("Button",{attrs:{type:"error",icon:"md-trash",size:"small",ghost:"",disabled:!t.$route.meta.permTypes.includes("delete")},on:{click:t.delAll}},[t._v("删除")]),e("Button",{attrs:{type:"success",icon:"md-paper-plane",size:"small",ghost:""},on:{click:t.excelData}},[t._v("导出")])],1),e("Form-item",{staticStyle:{position:"fixed",right:"50px",top:"130px"}},[e("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"info",icon:"md-settings",size:"small",ghost:""},on:{click:function(e){t.showFilterPanelFlag=!t.showFilterPanelFlag}}},[t._v(" 列筛选")]),e("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"warning",icon:"ios-help-circle-outline",size:"small",ghost:""},on:{click:function(e){t.modal1=!0}}},[t._v(" 使用教程")]),e("Modal",{attrs:{title:"使用教程"},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[e("p",[t._v("1.XXXXXXXXXXXXXXXXXXXXXXXX")]),e("p",[t._v("2.XXXXXXXXXXXXXXXXXXXXXXXX")]),e("p",[t._v("3.XXXXXXXXXXXXXXXXXXXXXXXX")])])],1)],1)],1)],1),e("Row",{staticClass:"operation",staticStyle:{position:"relative"}},[e("transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFilterPanelFlag,expression:"showFilterPanelFlag"}],staticClass:"filter-panel"},[e("CheckboxGroup",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.mycolumns,(function(t){return e("div",{key:t.key},[e("Checkbox",{staticStyle:{margin:"2px 5px"},attrs:{label:t.title}})],1)})),0)],1)])],1),e("Row",{directives:[{name:"show",rawName:"v-show",value:t.openTip,expression:"openTip"}]}),e("Row",[e("Table",{ref:"table",attrs:{loading:t.loading,height:t.tableHeight,border:"",stripe:"",size:"small",columns:t.columns,data:t.data,sortable:"custom","row-class-name":t.rowClassNmae},on:{"on-sort-change":t.changeSort,"on-selection-change":t.changeSelect,"on-row-click":t.rowClick}})],1),e("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[e("Page",{attrs:{current:t.searchForm.pageNumber,total:t.total,"page-size":t.searchForm.pageSize,"page-size-opts":[15,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}})],1)],1)],1)},a=[],l=s(4281),o=s(7328),r=s(3478),n=s(8188);const c={name:"single-window",components:{add:o["default"],edit:r["default"],dict:n["default"]},data(){return{tableHeight:0,selected:["选择","序号","政策标题","内容","发布人","发布时间","状态","排序值","图片","附件","操作"],modal1:!1,openSearch:!0,openTip:!0,formData:{},currView:"index",loading:!0,searchForm:{pageNumber:1,pageSize:15,sort:"createTime",order:"desc"},selectList:[],selectCount:0,selectRow:0,columns:[{type:"selection",width:60,title:"选择",align:"center",fixed:"left"},{title:"序号",width:85,align:"center",fixed:"left",sortType:!0,render:(t,e)=>t("span",e.index+(this.searchForm.pageNumber-1)*this.searchForm.pageSize+1)},{title:"政策标题",key:"title",minWidth:120,tooltip:!0,sortable:!1},{title:"内容",key:"content",minWidth:120,tooltip:!0,sortable:!1},{title:"发布人ID",key:"userId",minWidth:120,tooltip:!0,sortable:!1},{title:"发布人",key:"userName",minWidth:120,tooltip:!0,sortable:!1},{title:"发布时间",key:"time",minWidth:120,tooltip:!0,sortable:!1},{title:"状态",key:"status",minWidth:120,tooltip:!0,sortable:!1},{title:"排序值",key:"sortOrder",minWidth:120,tooltip:!0,sortable:!1},{title:"图片",key:"imageUrl",minWidth:120,tooltip:!0,sortable:!1,render:(t,e)=>void 0==e.row.imageUrl||""==e.row.imageUrl?t("div",[t("span",{style:{color:"#ff9900"}},"未上传")]):t("img",{attrs:{src:e.row.imageUrl},style:{cursor:"zoom-in",width:"40px",margin:"2px 0","object-fit":"contain"},on:{click:()=>{this.showFile(e.row.imageUrl)}}})},{title:"附件",key:"fileUrl",minWidth:120,tooltip:!0,sortable:!1,render:(t,e)=>void 0==e.row.fileUrl||""==e.row.fileUrl?t("div",[t("span",{style:{color:"#ff9900"}},"未上传")]):t("img",{attrs:{src:s(3641)},style:{cursor:"zoom-in",width:"40px",margin:"2px 0","object-fit":"contain"},on:{click:()=>{this.showFile(e.row.fileUrl)}}})},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc",minWidth:180,align:"center",tooltip:!0},{title:"创建者",key:"createBy",sortable:!0,sortType:"desc",minWidth:100,align:"center",tooltip:!0},{title:"修改时间",key:"updateTime",minWidth:180,align:"center",tooltip:!0},{title:"修改者",key:"updateBy",minWidth:100,align:"center",tooltip:!0},{title:"操作",key:"action",align:"center",width:200,fixed:"right",render:(t,e)=>{var s=this;return t("div",[t("Button",{props:{type:"primary",size:"small",icon:"ios-create-outline",disabled:!(s.$route.meta.permTypes&&s.$route.meta.permTypes.includes("edit")),ghost:!0},style:{marginRight:"5px"},on:{click:()=>{this.edit(e.row)}}},"编辑"),t("Button",{props:{type:"error",size:"small",icon:"md-trash",disabled:!(s.$route.meta.permTypes&&s.$route.meta.permTypes.includes("delete")),ghost:!0},on:{click:()=>{this.remove(e.row)}}},"删除")])}}],data:[],pageNumber:1,pageSize:10,total:0,showFilterPanelFlag:!1}},methods:{init(){this.getDataList()},submited(){this.currView="index",this.getDataList()},changePage(t){this.searchForm.pageNumber=t,this.getDataList(),this.clearSelectAll()},changePageSize(t){this.searchForm.pageSize=t,this.getDataList()},rowClick(t,e){this.selectRow=t},rowClassNmae(t,e){return t.id==this.selectRow.id?"rowClassNmaeColor":""},excelData(){this.$refs.table.exportCsv({filename:"导出结果"})},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},handleReset(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},changeSort(t){this.searchForm.sort=t.key,this.searchForm.order=t.order,"normal"===t.order&&(this.searchForm.order=""),this.getDataList()},clearSelectAll(){this.$refs.table.selectAll(!1)},changeSelect(t){this.selectList=t,this.selectCount=t.length},getDataList(){this.loading=!0,(0,l.G$)(this.searchForm).then((t=>{this.loading=!1,t.success&&(this.data=t.result.records,this.total=t.result.total)}))},add(){this.currView="add"},edit(t){for(let i in t)null==t[i]&&(t[i]="");let e=JSON.stringify(t),s=JSON.parse(e);this.formData=s,this.currView="edit"},remove(t){this.$Modal.confirm({title:"确认删除",content:"您确认要删除 "+t.name+" ?",loading:!0,onOk:()=>{(0,l.S8)({ids:t.id}).then((t=>{this.$Modal.remove(),t.success&&(this.$Message.success("操作成功"),this.getDataList())}))}})},delAll(){this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",loading:!0,onOk:()=>{let t="";this.selectList.forEach((function(e){t+=e.id+","})),t=t.substring(0,t.length-1),(0,l.S8)({ids:t}).then((t=>{this.$Modal.remove(),t.success&&(this.$Message.success("操作成功"),this.clearSelectAll(),this.getDataList())}))}})},showFile(t){window.open(t+"?preview=true")}},mounted(){this.init(),this.tableHeight=Number(window.innerHeight-273),this.mycolumns=this.columns;let t=[];for(var e=0;e<this.selected.length;e++)for(var s=this.selected[e],i=0;i<this.columns.length;i++)this.columns[i].title==s&&t.push(this.columns[i]);this.columns=t},watch:{selected:function(t){let e=[];for(var s=0;s<this.mycolumns.length;s++){var i=this.mycolumns[s];(void 0==i.title||t.contains(i.title))&&e.push(i)}this.columns=e}}},h=c;var m=s(1001),d=(0,m.Z)(h,i,a,!1,null,null,null);const u=d.exports},3641:t=>{t.exports="data:image/png;base64,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"}}]);