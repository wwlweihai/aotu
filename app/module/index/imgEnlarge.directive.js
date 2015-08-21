angular.module('app.directive')
.directive('imgEnlarge',imgEnlarge);

function imgEnlarge() {
    var directive = {
        link: link,
        templateUrl: '',
        scope: {

        },
        restrict: 'A'
    };
    return directive;

    function link(scope, element, attrs) {

    }
}


