/**
 * Created by Administrator on 2018/1/15.
 */
(function(){
    angular.module('app' , ['ui.router','app.controllers','app.directives','angularFileUpload','app.filter','ngWebSocket'])
        .config(function($stateProvider,$locationProvider,$urlRouterProvider){
            $locationProvider.hashPrefix('');
            $urlRouterProvider.otherwise('lanMessage');
            $stateProvider
                //.state('home' , {
                //    url:'/home',
                //    templateUrl:'view/home.html',
                //    controller:'homeController'
                //})
                .state('lanMessage' , {
                    url:'/lanMessage',
                    templateUrl:'view/lanMessage.html',
                    controller:'lanMessageController'
                })
                .state('lanBook' , {
                    url:'/lanBook/:sectionId',
                    templateUrl:'view/lanBook.html',
                    controller:'lanBookController'
                })
                .state('bookClass' , {
                    url:'/bookClass',
                    templateUrl:'view/bookClass.html',
                    controller:'bookClassController'
                })
                .state('bookMessage' , {
                    url:'/bookMessage',
                    templateUrl:'view/bookMessage.html',
                    controller:'bookMessageController'
                })
                //.state('bookStorage' , {
                //    url:'/bookStorage',
                //    templateUrl:'view/bookStorage.html',
                //    controller:'bookStorageController'
                //})
                .state('orderMessage' , {
                    url:'/orderMessage',
                    templateUrl:'view/orderMessage.html',
                    controller:'orderMessageController'
                })
                .state('addBookMessage' , {
                    url:'/addBookMessage',
                    templateUrl:'view/addBookMessage.html',
                    controller:'addBookMessageController'
                })
                .state('editBookMessage' , {
                    url:'/editBookMessage/:oneBookMessage',
                    templateUrl:'view/editBookMessage.html',
                    controller:'editBookMessageController'
                })
                .state('detailBookMessage' , {
                    url:'/detailBookMessage/:bookId',
                    templateUrl:'view/detailBookMessage.html',
                    controller:'detailBookMessageController'
                })

        });
})();
