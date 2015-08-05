angular.module('app.controllers')
.controller('index',index);
index.$inject = [
    'Restangular',
    '$scope'
];
function index(Restangular,$scope) {
    activited();
    $scope.signUp = signUp;
    $scope.updateSelection = updateSelection;
    $scope.form = {};
    $scope.data = {};
    $scope.data.gifts = [{
        img:"images/apple.png",
        name:"苹果",
        checked:true
    },{
        img:"images/apple.png",
        name:"苹果",
        checked:false
    },{
        img:"images/apple.png",
        name:"苹果",
        checked:false
    }
    ];
    $scope.data.seriesList = [{
        name:'宝马1系'
    }];
    $scope.data.areaList = [
        {name:'成都市'},
        {name:'绵阳市'},
        {name:'自贡市'},
        {name:'攀枝花市'},
        {name:'泸州市'},
        {name:'德阳市'},
        {name:'广元市'},
        {name:'遂宁市'},
        {name:'乐山市'},
        {name:'内江市'},
        {name:'资阳市'},
        {name:'南充市'},
        {name:'达州市'},
        {name:'雅安市'},
        {name:'广安市'},
        {name:'巴中市'},
        {name:'眉山市'}
    ];
    $scope.data.brandList = [{
        name:'宝马'
    }];
    $scope.form.brand = $scope.data.brandList[0].name;
    $scope.form.area = $scope.data.areaList[0].name;
    $scope.form.series = $scope.data.seriesList[0].name;
    $scope.form.gift = $scope.data.gifts[0].name;
    function activited(){
        var brandList = Restangular.one("");
        var brandParams = {
            type:11
        };
        brandList.get(brandParams).then(function(result){
            console.log(result);
        });
    };
    function signUp(){
        console.log(JSON.stringify($scope.form));
        var Applicant = AV.Object.extend("applicant");
        var applicant = new Applicant();
        applicant.save($scope.form, {
            success: function(object) {
                alert("报名成功！");
            }
        });
    }
     function updateSelection(position, entities) {
         $scope.form.gift = entities[position].name;
        angular.forEach(entities, function(subscription, index) {
            if (position != index)
                subscription.checked = false;
        });
    }
};

