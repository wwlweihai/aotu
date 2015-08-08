/**
 * Created by ww on 2015/4/11.
 */
angular.module('app.config')
.config(config);
config.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    'RestangularProvider'
];
function config($stateProvider,$urlRouterProvider,RestangularProvider) {
    RestangularProvider.setBaseUrl("data");
    $urlRouterProvider.otherwise('/index');
    $stateProvider
    .state('index', {
        url: "/index",
        templateUrl: "module/index/index.html",
        controller:'index'
    })
    .state('dasdacxzasdascxzg', {
        url: "/dasdacxzasdascxzg",
        templateUrl: "module/admin/admin.html",
        controller:'admin'
    })
    .state('m', {
        url: "/m",
        templateUrl: "module/m/m.html",
        controller:'index'
    })
    ;
};
