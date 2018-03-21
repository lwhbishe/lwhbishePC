/**
 * Created by Administrator on 2018/1/15.
 */
(function(){
    angular.module('app.directives' , [])
        //.directive('lwhAddSectionBook',function(){
        //    return{
        //        replace:true,
        //        restrict:'EA',
        //        templateUrl:'template/addSectionBook.html',
        //        scope:{
        //            state:'=',
        //            confirm:'&onconfirm'
        //        },
        //        controller:function($scope){
        //            $scope.after_onconfim = function(){
        //                if($scope.confirm){
        //                    $scope.confirm();
        //                }
        //                $scope.state = false;
        //            };
        //            $scope.after_oncancel = function(){
        //                if($scope.cancel){
        //                    $scope.cancel();
        //                }
        //                $scope.state = false;
        //            };
        //
        //        }
        //    };
        //})
        .directive('lwhAddNewSection',function(){
            return{
                replace:true,
                restrict:'EA',
                templateUrl:'template/addNewSection.html',
                scope:{
                    title:'@',
                    state1:'=',
                    name:'=',
                    lanname:'@',
                    youxianji:'@',
                    confirm:'&onconfirm',
                    cancel:'&oncancel'
                },
                controller:function($scope){
                    $scope.addSectionConfirm = function(){
                        if($scope.confirm){
                            $scope.confirm();
                        }
                        $scope.state1 = false;
                    };
                    $scope.addSectionCancel = function(){
                        if($scope.cancel){
                            $scope.cancel();
                        }
                        $scope.state1 = false;
                    };

                }
            };
        })
        .directive('lwhDelete' , function(){
            return{
                replace:true,
                restrict:'EA',
                templateUrl:'template/delete.html',
                scope:{
                    state2:'=',
                    title:'@',
                    content:'@',
                    confirm:'&onconfirm',
                    cancel:'&oncancel'
                },
                controller:function($scope){
                    $scope.deleteConfirm = function(){
                        if($scope.confirm){
                            $scope.confirm();
                        }
                        $scope.state2 = false;
                    };
                    $scope.deleteCancel = function(){
                        if($scope.cancel){
                            $scope.cancel();
                        }
                        $scope.state2 = false;
                    };

                }
            }
        })
        .directive('lwhCategory' , function(){
            return{
                replace:true,
                restrict:'EA',
                templateUrl:'template/addNewCategory.html',
                scope:{
                    category:'=',
                    title:'=',
                    confirm:'&onconfirm',
                    cancel:'&oncancel',
                    name:'='
                },
                controller:function($scope){
                    $scope.categoryConfirm = function(){
                        if($scope.confirm){
                            $scope.confirm();
                        }
                        $scope.category = false;
                    };
                    $scope.categoryCancel = function(){
                        if($scope.cancel){
                            $scope.cancel();
                        }
                        $scope.category = false;
                    };

                }
            }
        })
//        .directive('imageUpload' , function(){
//            return {
//                restrict:'EA',
//                replace:true,
//                templateUrl:'template/upload.html',
//                scope:{
//                    fileModel:'=',
//                    fileOptions:'='
//                },
//                link:function(scope , element , attrs){
////                var $img = element.find('img');
//                    var $file = element.find('input');
////                var $div = element.find('div');
//
////                $file.on('change'  ,function(){
////
////                });
////
////                console.log($img[0]);
////                console.log($file[0]);
////                console.log($div[0]);
//
//                    var img = element[0].querySelector('img');
//                    var upload = element[0].querySelector('input[type=file]');
//                    var summary = element[0].querySelector('.summary');
//
//                    var option = scope.fileOptions;
//
//                    //
//                    upload.onchange = function(){
//                        var current = this;
//                        if(current.files.length == 0){
//                            return;
//                        }
//
//                        summary.innerText = '';
//                        // 检查类型
//                        var file = current.files[0];
//
//                        var index = option.rule.type.indexOf(file.type);
//
//                        if(index == -1){
//                            summary.innerText = option.message.type;
//                            current.value = null;
//                            return;
//                        }
//
//
//                        // 检查大小
//                        if(file.size > option.rule.size){
//                            summary.innerText = option.message.size;
//                            current.value = null;
//                            return;
//                        }
//
//                        // 检查分辨率和预览
//                        var fileReader = new FileReader();
//                        fileReader.onload = function(){
//                            var preImage = new Image();
//                            preImage.onload = function(){
//                                //
//                                if(this.width != option.rule.resolution.width || this.height != option.rule.resolution.height){
//                                    summary.innerText = option.message.resolution;
//                                    current.value = null;
//                                }
//                                else{
//                                    img.onload = function(){
//                                        scope.fileModel = file;
//                                        scope.$apply();
//                                        if(typeof(option.success) == 'function'){
//                                            option.success(file);
//                                        }
//                                    }
//                                    img.src = preImage.src;
//
//                                }
//                            };
//                            preImage.src = this.result;
//                        }
//
//                        fileReader.readAsDataURL(file);
//
//                    };
//
//                }
//            };
//        });


})();