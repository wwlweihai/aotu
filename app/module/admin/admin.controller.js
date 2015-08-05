angular.module('app.controllers')
.controller('admin',admin);
admin.$inject = [
    '$scope'
];
function admin($scope) {
    activited();
    $scope.data = {};

    function activited(){
        $scope.err = false;

        var Applicant = AV.Object.extend("applicant");
        //var applicant = new Applicant();
        var query = new AV.Query(Applicant);
        query.find({
            success: function(results) {
                for (var i = 0; i < results.length; i++) {
                    var object = results[i];
                    console.log(JSON.stringify(object));
                }
            },
            error: function(object, error) {
                $scope.err = true;
            }
        });
    };
};

