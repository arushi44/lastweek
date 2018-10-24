(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://arushi-course5.herokuapp.com')            

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
