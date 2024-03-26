import{_ as P,a as k,B as w,D as x,S as D,r as p,o as i,c as r,b as e,e as N,d,N as L,t as b,w as S,E as C,v as h,h as n,G as I,p as y,g as u,n as T,f as _}from"./index.c9c94c12.js";import{u as F,h as E,v as M}from"./app-variable.3f08ab6c.js";import{n as V}from"./NavScrollTo.ea3bcc36.js";F();const m=k(),U={data(){const a=T+"/";return{table:w({isLoading:!1,isReSearch:!1,rowClasses:o=>o.id==1?["aaa","is-id-one"]:["bbb","other"],columns:[{label:"ID",field:"_id",width:"5%",sortable:!1,isKey:!0},{label:"RSR Stock Number",field:"RSR_StockNumber",width:"5%",sortable:!1},{label:"UPC",field:"UPC_",width:"5%",sortable:!1},{label:"Product Description",field:"Product_Description",width:"5%",sortable:!1},{label:"Dept #",field:"Dept_",width:"5%",sortable:!1},{label:"Manufacturer Id.",field:"Manufacturer_Id",width:"5%",sortable:!1},{label:"Retail Price",field:"Retail_Price",width:"5%",sortable:!1},{label:"RSR Regular Price",field:"RSR_RegularPrice",width:"5%",sortable:!1},{label:"Product Weight (oz)",field:"Product_Weightoz",width:"5%",sortable:!1},{label:"Inventory Quantity",field:"Inventory_Quantity",width:"5%",sortable:!1},{label:"Model",field:"Model",width:"5%",sortable:!1},{label:"Full Manufacturer Name",field:"Full_ManufacturerName",width:"5%",sortable:!1},{label:"Manufacturer Part Number",field:"Manufacturer_PartNumber",width:"5%",sortable:!1},{label:"Allocated/ Closeout/ Deleted",field:"AllocatedCloseoutDeleted",width:"5%",sortable:!1},{label:"Expanded Product Description",field:"Expanded_ProductDescription",width:"5%",sortable:!1},{label:"Image Name",field:"Image_Name",width:"5%",sortable:!1,display:function(o){return o.Image_Name&&o.Image_Name!=""?'<a href="'+a+"rsr/ftp_highres_images/new_images/"+o.Image_Name.slice(0,-4)+'_HR.jpg" target="_blank"><img src="'+a+"rsr/ftp_highres_images/new_images/"+o.Image_Name.slice(0,-4)+'_HR.jpg" style="width:150px"></a>':""}},{label:"Ground Shipments Only",field:"Ground_ShipmentsOnly",width:"5%",sortable:!1},{label:"Adult Sig Required",field:"Adult_SigRequired",width:"5%",sortable:!1},{label:"Blocked from Dropship",field:"Blocked_fromDropship",width:"3%",sortable:!1},{label:"Date Entered",field:"Date_Entered",width:"3%",sortable:!1},{label:"Retail MAP",field:"Retail_MAP",width:"3%",sortable:!1},{label:"Image Disclaimer",field:"Image_Disclaimer",width:"5%",sortable:!1},{label:"Shipping Length (inches)",field:"Shipping_Lengthinches",width:"5%",sortable:!1},{label:"Shipping Width (inches)",field:"Shipping_Widthinches",width:"5%",sortable:!1},{label:"Shipping Height (inches)",field:"Shipping_Heightinches",width:"5%",sortable:!1},{label:"Reserved for Future Use",field:"Reserved_forFutureUse",width:"5%",sortable:!1}],rows:[],totalRecordCount:x(()=>this.totalCount),sortable:{order:"_id",sort:"asc"},messages:{pagingInfo:"Showing {0}-{1} of {2}",pageSizeChangeLabel:"Row count:",gotoPageLabel:"Go to page:",noDataAvailable:"No data"}}),port:"",data:w([]),ftpServerInput:"",usernameInput:"",passwordInput:"",readError:"Loading data from FTP...",isLoading:!1,totalCount:0,searchKey:"",tabName:"all",server_addr:a,is_whole_data:!1,new_filepath:""}},components:{highlightjs:E,navScrollTo:V,vueTable:M},created(){this.GetInventoryFull(),this.doSearch(0,10,"_id","asc")},mounted(){new D(document.body,{target:"#sidebar-bootstrap",offset:200})},methods:{GetInventoryFull:function(){m.GetRSRData("GetRSRInventoryConfig").then(a=>{a.status&&a.ftp_config_data&&a.ftp_config_data.length>0&&(this.ftpServerInput=a.ftp_config_data[0].ftpServer,this.usernameInput=a.ftp_config_data[0].username,this.passwordInput=a.ftp_config_data[0].password,this.port=a.ftp_config_data[0].protocol,this.new_filepath=this.server_addr+a.new_filepath,this.doSearch(0,10,"_id","asc"))}).catch(a=>{console.log(a),this.readError=a.message})},doSearch:function(a,s,c,o){this.isLoading||(this.table.isLoading=!0,m.GetTableData("getInventoriesForTable",a,s,c,o,this.tabName,this.searchKey).then(t=>{t.status&&(this.table.rows=t.data,this.totalCount=t.numberOfInventories[0].NumberOfInventories,this.table.sortable.order=c,this.table.sortable.sort=o,this.table.isLoading=!1)}).catch(t=>{console.log(t),this.readError=t.message}))},submitForm:function(){if(this.readError="Loading data from FTP... It will take about 10 minutes.",!this.ftpServerInput||this.usernameInput==""||!this.passwordInput||this.passwordInput==""){this.readError="Please input the FTP info to read data.";return}this.isLoading=!0,m.getRSRInventoryInfo(this.ftpServerInput,this.usernameInput,this.passwordInput,this.port,this.is_whole_data).then(a=>{this.isLoading=!1,a.status}).catch(a=>{this.isLoading=!1})},submitSearch:function(){this.doSearch(0,10,"_id","ASC")}}},A={class:"row justify-content-center"},G={class:"col-xl-12"},B={class:"row"},O={class:"col-xl-12"},W=e("ul",{class:"breadcrumb"},[e("li",{class:"breadcrumb-item"},[e("a",{href:"#"},"RSR")]),e("li",{class:"breadcrumb-item active"},"FTP")],-1),j={class:"page-header"},q=["href"],H=e("hr",{class:"mb-4"},null,-1),K={id:"vue3TableLite",class:"mb-5"},z=e("h4",null,"Read",-1),Q={class:"form-check form-switch mt-2 ms-2"},J={class:"form-check-label ms-2 fs-5",for:"customSwitch_price_cron"},X={class:"row"},Y={class:"col-xl-2 col-md-3 mb-2px"},Z=e("option",{value:"ftp"},"ftp://",-1),$=e("option",{value:"sftp"},"sftp://",-1),ee=e("option",{value:"ftps"},"ftps://",-1),te=[Z,$,ee],se={class:"col-xl-2 col-md-3 mb-2px"},ae={key:0,class:"invalid-feedback"},le={class:"col-xl-3 col-md-6 mb-2px"},oe={key:0,class:"invalid-feedback"},ie={class:"col-xl-3 col-md-6 mb-2px"},re={key:0,class:"invalid-feedback"},ne={class:"col-xl-2 col-md-6 mb-2px"},de={key:0,type:"submit",class:"btn btn-info w-100 active",disabled:""},ce={key:1,type:"submit",class:"btn btn-info w-100 active"},he={key:0,class:"nav nav-tabs"},ue={class:"nav-item me-1"},fe={key:1,class:"tab-content pt-3"},pe={class:"row"},be={class:"col-md-6 col-sm-0"},_e={class:"col-md-6 col-sm-12"},me={class:"row"},ge={class:"col-9"},ve=e("div",{class:"col-3"},[e("button",{type:"submit",class:"btn btn-dark w-100 active"},"Search")],-1);function we(a,s,c,o,t,f){const R=p("vue-table"),g=p("card-body"),v=p("card");return i(),r("div",A,[e("div",G,[e("div",B,[e("div",O,[W,e("h1",j,[N(" RSR Inventory NEW "),e("small",null,[e("a",{href:t.new_filepath,target:"_self"},"Download",8,q)])]),H,e("div",K,[z,e("div",Q,[d(e("input",{type:"checkbox",class:"form-check-input w-50px fs-5","onUpdate:modelValue":s[0]||(s[0]=l=>t.is_whole_data=l),id:"customSwitch_price_cron"},null,512),[[L,t.is_whole_data]]),e("label",J,b(t.is_whole_data?"Import whole images":"Import only new images"),1)]),e("form",{class:"was-validated mb-15px",onSubmit:s[5]||(s[5]=S(l=>f.submitForm(),["prevent"])),method:"POST",name:"register_form"},[e("div",X,[e("div",Y,[d(e("select",{class:"form-select","onUpdate:modelValue":s[1]||(s[1]=l=>t.port=l)},te,512),[[C,t.port]])]),e("div",se,[d(e("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=l=>t.ftpServerInput=l),class:"form-control is-invalid",placeholder:"FTP Server",required:""},null,512),[[h,t.ftpServerInput]]),t.ftpServerInput==""?(i(),r("div",ae,"Please input the FTP server address.")):n("",!0)]),e("div",le,[d(e("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=l=>t.usernameInput=l),class:"form-control is-invalid",placeholder:"Username",required:""},null,512),[[h,t.usernameInput]]),t.usernameInput==""?(i(),r("div",oe,"Please input the FTP username.")):n("",!0)]),e("div",ie,[d(e("input",{type:"password","onUpdate:modelValue":s[4]||(s[4]=l=>t.passwordInput=l),class:"form-control is-invalid",placeholder:"Password",required:""},null,512),[[h,t.passwordInput]]),t.passwordInput==""?(i(),r("div",re,"Please input the password.")):n("",!0)]),e("div",ne,[t.isLoading?(i(),r("button",de,"reading...")):(i(),r("button",ce,"Read"))])])],32),t.isLoading?n("",!0):(i(),r("ul",he,[e("li",ue,[e("a",{href:"#all_data",class:I(["nav-link",{active:t.tabName=="all"}]),"data-bs-toggle":"tab",onClick:s[6]||(s[6]=l=>{l.preventDefault(),t.tabName="all",this.doSearch(0,10,"_id","asc")})}," New Data ",2)])])),t.isLoading?n("",!0):(i(),r("div",fe,[e("div",{class:I(["tab-pane fade",{show:t.tabName=="all",active:t.tabName=="all"}]),id:"all_data"},[e("div",pe,[e("div",be,[e("h3",null,"All Data ( "+b(this.totalCount)+" )",1)]),e("div",_e,[e("form",{class:"mb-10px",onSubmit:s[8]||(s[8]=S(l=>f.submitSearch(),["prevent"])),method:"POST"},[e("div",me,[e("div",ge,[d(e("input",{type:"text","onUpdate:modelValue":s[7]||(s[7]=l=>t.searchKey=l),class:"form-control",placeholder:"Vender name or VCPN or Description"},null,512),[[h,t.searchKey]])]),ve])],32)])])],2)])),!t.isLoading&&t.table&&t.table.rows.length>0?(i(),y(v,{key:2},{default:u(()=>[_(g,null,{default:u(()=>[_(R,{class:"vue-table",columns:t.table.columns,rows:t.table.rows,total:t.table.totalRecordCount,sortable:t.table.sortable,"is-loading":t.table.isLoading,messages:t.table.messages,onDoSearch:f.doSearch,onIsFinished:s[9]||(s[9]=l=>t.table.isLoading=!1)},null,8,["columns","rows","total","sortable","is-loading","messages","onDoSearch"])]),_:1})]),_:1})):n("",!0),t.isLoading?(i(),y(v,{key:3},{default:u(()=>[_(g,null,{default:u(()=>[e("h2",null,b(t.readError),1)]),_:1})]),_:1})):n("",!0)])])])])])}const Re=P(U,[["render",we]]);export{Re as default};
