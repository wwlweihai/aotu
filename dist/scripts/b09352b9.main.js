function config(a,b,c){c.setBaseUrl("data"),b.otherwise("/index"),a.state("index",{url:"/index",templateUrl:"module/index/index.html",controller:"index"}).state("admin",{url:"/admin",templateUrl:"module/admin/admin.html",controller:"admin"}).state("m",{url:"/m",templateUrl:"module/m/m.html",controller:"index"})}function index(a,b,c){function d(){console.log(JSON.stringify(c.form));var b=AV.Object.extend("applicant"),d=new b;d.save(c.form,{success:function(b){alert("报名成功！"),a.location.href="http://chengdu.auto.163.com/"}})}function e(a,b){c.form.gift=b[a].name,angular.forEach(b,function(b,c){a!=c&&(b.checked=!1)})}function f(a){var b=AV.Object.extend("gift"),d=(new b,new AV.Query(b));d.find({success:function(b){c.$apply(function(){a(b)})},error:function(a,b){c.err=!0}})}c.signUp=d,c.updateSelection=e,c.form={},c.data={},c.data.gifts=[],c.data.brandList=[],c.data.areaList=[{name:"成都市"},{name:"绵阳市"},{name:"自贡市"},{name:"攀枝花市"},{name:"泸州市"},{name:"德阳市"},{name:"广元市"},{name:"遂宁市"},{name:"乐山市"},{name:"内江市"},{name:"资阳市"},{name:"南充市"},{name:"达州市"},{name:"雅安市"},{name:"广安市"},{name:"巴中市"},{name:"眉山市"}],c.form.area=c.data.areaList[0].name;var g=b.one("cars.json");g.get().then(function(a){c.data.brandList=a.result}),c.brandSelect=function(){var a=[];c.form.brand=c.data.brand.N,angular.forEach(c.data.brand.List,function(b,c){angular.forEach(b.List,function(b,c){a.push({N:b.N})})}),console.log(JSON.stringify(a)),c.data.seriesList=a},f(function(a){for(var b=0;b<a.length;b++){var d=a[b].attributes;""!=d.name&&c.data.gifts.push(d)}})}function admin(a,b){function c(){b.err=!1,b.gift={},b.gift.name="礼物",b.gift.url="images/apple.png",e(function(a){for(var c=0;c<a.length;c++){var d=a[c];b.gridOptions.data.push(d.attributes)}}),f(function(a){for(var c=0;c<a.length;c++){var d=a[c].attributes;d.id=a[c].id,console.log(d),""!=d.name&&b.giftGridOptions.data.push(d)}})}function d(a){console.log(a);var c=AV.Object.extend("gift"),c=new c;c.save(a,{success:function(c){alert("添加礼物成功！"),b.$apply(function(){a.name="",a.url=""})}})}function e(a){var c=AV.Object.extend("applicant"),d=new AV.Query(c);d.find({success:function(c){console.log(c),b.$apply(function(){a(c)})},error:function(a,c){b.err=!0}})}function f(a){var c=AV.Object.extend("gift"),d=new AV.Query(c);d.find({success:function(c){b.$apply(function(){a(c)})},error:function(a,c){b.err=!0}})}c(),b.data={},b.readyUpload=!1,b.addGift=d,b.gridOptions={enableGridMenu:!0,enableSorting:!0,enableHorizontalScrollbar:a.scrollbars.NEVER,columnDefs:[{name:"name",displayName:"姓名",maxWidth:80},{name:"tel",displayName:"电话",maxWidth:80},{name:"gift",displayName:"礼物",maxWidth:80},{name:"area",displayName:"地区",maxWidth:80},{name:"brand",displayName:"品牌",maxWidth:150},{name:"series",displayName:"车系",maxWidth:150}],onRegisterApi:function(a){}},b.giftGridOptions={enableGridMenu:!0,enableSorting:!0,enableHorizontalScrollbar:a.scrollbars.NEVER,columnDefs:[{field:"name",displayName:"礼物名称",maxWidth:200},{field:"edit",displayName:"编辑",maxWidth:100,cellTemplate:'<button type="button" class="btn btn-primary" ng-click="grid.appScope.delGift(row.entity)" >删除</button> '}],onRegisterApi:function(a){}},b.delGift=function(a){var c=b.giftGridOptions.data.indexOf(a);if(-1!==c){var d=AV.Object.extend("gift"),e=new AV.Query(d);e.get(a.id,{success:function(a){a.set("name",""),a.set("url",""),a.save(),alert("删除成功")},error:function(a,b){}})}}}angular.module("app",["app.core","app.config","app.controllers","app.services","app.directives"]),angular.module("app.core",["restangular","ui.router","ui.grid","ui.grid.edit","ui.grid.selection","ui.grid.exporter","ui.grid.resizeColumns","ui.grid.moveColumns","ui.bootstrap"]),angular.module("app.config",[]),angular.module("app.controllers",[]),angular.module("app.services",[]),angular.module("app.directives",[]),AV.initialize("4n2gmgauas6z06yldyok9rxbmpheyvcnw98h977d311qhdsu","5d6k8n19w0rx01hoz3taywaxalknezl09t4wtttqoj9ucpfy"),angular.module("app.config").config(config),config.$inject=["$stateProvider","$urlRouterProvider","RestangularProvider"],angular.module("app.controllers").controller("index",index),index.$inject=["$window","Restangular","$scope"],angular.module("app.controllers").controller("admin",admin),admin.$inject=["uiGridConstants","$scope"];