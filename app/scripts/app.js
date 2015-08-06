/**
 * Created by ww on 2015/3/24.
 */
angular.module('app', [
    'app.core',
    'app.config',
    'app.controllers',
    'app.services',
    'app.directives'
]);
angular.module('app.core', [
    'restangular',
    'ui.router',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ui.grid.resizeColumns',
    'ui.grid.moveColumns',
    'ui.bootstrap'
    //,
    //监控scoll
    //'pc035860.scrollWatch'
]);
angular.module('app.config', []);
angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app.directives', []);
AV.initialize("4n2gmgauas6z06yldyok9rxbmpheyvcnw98h977d311qhdsu", "5d6k8n19w0rx01hoz3taywaxalknezl09t4wtttqoj9ucpfy");
