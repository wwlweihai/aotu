angular.module('app.controllers')
.controller('index',index);
index.$inject = [
    '$scope'
];
function index($scope) {
    activited();
    $scope.form = {};
    $scope.data = {};
    $scope.data.seriesList = [{
        name:'宝马1系'
    }];
    $scope.data.areaList = [{
        name:'成都'
    }];
    $scope.data.brandList = [{
        name:'宝马'
    }];
    $scope.form.brand = $scope.data.brandList[0].name;
    $scope.form.area = $scope.data.areaList[0].name;
    $scope.form.series = $scope.data.seriesList[0].name;
    $scope.signUp = signUp;
    function activited(){

    };
    function signUp(){
        console.log(JSON.stringify($scope.form));
        var Applicant = AV.Object.extend("applicant");
        var applicant = new Applicant();
        applicant.save($scope.form, {
            success: function(object) {
                alert("报名成功！");
                $scope.form = {};
            }
        });
    }
};

