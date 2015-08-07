angular.module('app.controllers')
.controller('admin',admin);
admin.$inject = [
    '$state',
    'uiGridConstants',
    '$scope'
];
function admin($state,uiGridConstants,$scope) {
    activited();
    $scope.data = {};
    $scope.readyUpload = false;
    $scope.addGift = addGift;
    $scope.gridOptions = {
        enableGridMenu: true,
        enableSorting: true,
        enableHorizontalScrollbar:uiGridConstants.scrollbars.NEVER,
        columnDefs: [
            {name: 'name', displayName: '姓名',maxWidth: 80},
            {name: 'tel', displayName: '电话',maxWidth: 80},
            {name: 'gift', displayName: '礼物',maxWidth: 80},
            {name: 'area', displayName: '地区',maxWidth: 80},
            {name: 'brand', displayName: '品牌',maxWidth: 150},
            {name: 'series', displayName: '车系',maxWidth: 150}
        ],
        onRegisterApi: function(gridApi){
            //$scope.gridApi = gridApi;
        }
    };
    $scope.giftGridOptions = {
        enableGridMenu: true,
        enableSorting: true,
        enableHorizontalScrollbar:uiGridConstants.scrollbars.NEVER,
        columnDefs: [
            {field: 'name', displayName: '礼物名称',maxWidth: 200},
            {field: 'edit', displayName: '编辑',maxWidth: 100, cellTemplate: '<button type="button" class="btn btn-primary" ng-click="grid.appScope.delGift(row.entity)" >删除</button> '}
        ],
        onRegisterApi: function(gridApi){
            //$scope.gridApi = gridApi;
        }
    };
    //$scope.delGift = delGift;
    $scope.delGift =  function(gift){
        var index = $scope.giftGridOptions.data.indexOf(gift);
        if (index !== -1) {
            var Post = AV.Object.extend("gift");
            var query = new AV.Query(Post);
            query.get(gift.id,{
                success: function(post) {
                    post.set('name','');
                    post.set('url','');
                    post.save();
                    alert("删除成功");
                    $state.reload();
                },
                error: function(myObject, error) {
                    // 出错了.
                }
            });
        }
        //console.log("del - "+ JSON.stringify(gift));
    }
    function activited(){
        $scope.err = false;
        $scope.gift = {};
        $scope.gift.name = "礼物";
        $scope.gift.url = "images/apple.png";
        getApplicants(function(results){
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                $scope.gridOptions.data.push(object.attributes);
            }
        });
        getGifts(function(results){
            for (var i = 0; i < results.length; i++) {
                //var object = results[i];
                var object = results[i].attributes;
                object.id = results[i].id;
                console.log(object);
                if(object.name != "")
                $scope.giftGridOptions.data.push(object);
            }
        });
    };
    function addGift(peraddGift){
        console.log(peraddGift);
        var gift = AV.Object.extend("gift");
        var gift = new gift();
        gift.save(peraddGift, {
            success: function(object) {
                alert("添加礼物成功！");
                $scope.$apply(function(){
                    peraddGift.name = "";
                    peraddGift.url = "";
                });
                $state.reload();
            }
        });
    }

    function getApplicants(callback){
        var Applicant = AV.Object.extend("applicant");
        var query = new AV.Query(Applicant);
        query.find({
            success: function(results) {
                console.log(results);
                //$scope.gridOptions.data = results;
                $scope.$apply(function(){
                    callback(results);
                });
            },
            error: function(object, error) {
                $scope.err = true;
            }
        });
    }
    function getGifts(callback){
        var Applicant = AV.Object.extend("gift");
        var query = new AV.Query(Applicant);
        query.find({
            success: function(results) {
                $scope.$apply(function(){
                    callback(results);
                });
            },
            error: function(object, error) {
                $scope.err = true;
            }
        });
    }
};
