/**
 * Created by Administrator on 2018/1/15.
 */
(function(){
    angular.module('app.controllers',['app.services','app.factory'])
        .controller('homeController',function($scope){

        })
        .controller('lanMessageController' , function(sectionDeleteService,sectionUpdateService,sectionCreateService,$location,$state,$scope,sectionService){
            $scope.section = [];

            $scope.lwhSection = function(){
                sectionService.getSection()
                    .then(function(response){

                        if(response.data.Code == 100){
                            console.log(response.data.Data);
                            return $scope.section = response.data.Data;
                        }
                    });
            };
            $scope.lwhSection();


            $scope.goDetail = function(item){
                $state.go('lanBook',{sectionId:item.Id});
            };

            //添加新栏目
            $scope.addNewSection = function(){
                $scope.stateAddSection = true;
            };

            //添加新栏目确认按钮
            $scope.data = {
                sectionName:'',
                sectionPriority:''
            };
            $scope.add_Confim = function(){
                sectionCreateService.getSectionCreate($scope.data)
                    .then(function(response){
                        console.log(response);
                        if(response.data.Code == 100){
                            //$state.go('lanMessage',{},{reload:true});
                            $scope.lwhSection();
                            console.log(response);
                        }

                    })
            };

            //编辑
            $scope.goEdit = function(item){
                $scope.editData.sectionName=item.Name;
                $scope.editData.sectionPriority=item.Priority;
                $scope.editData.id=item.Id;
                $scope.stateEdit = true;
            };

            //编辑确认按钮
            $scope.editData = {
                sectionName:'',
                sectionPriority:'',
                id:''
            };
            $scope.edit_Confim = function(){
                sectionUpdateService.getSectionUpdate($scope.editData)
                    .then(function(response){
                        if(response.data.Code == 100){
                            console.log(response);
                            //$state.go('lanMessage',{},{reload:true});
                            $scope.lwhSection();
                        }
                    })
            };

            //删除
            $scope.goDelete = function(item){
                $scope.deleteState={
                    name:item.Name
                };
                $scope.deleteData.id=item.Id;
                $scope.stateDelete = true;
            };
            $scope.deleteData={
                id:''
            };
            $scope.delete_Confirm=function(){
                sectionDeleteService.getSectionDelete($scope.deleteData)
                    .then(function(response){
                        if(response.data.Code == 100){
                            //$state.go('lanMessage',{},{reload:true});
                            $scope.lwhSection();
                        }
                    })
            }


        })
        .controller('lanBookController' , function(bookService,$scope,$state,$stateParams){
            $scope.reBack = function(){
                $state.go('lanMessage');
            };
            $scope.books = [];
            $scope.sectionId = $stateParams.sectionId;
            console.log($scope.sectionId);


            bookService.getSingle($stateParams.sectionId).then(function(response){
                if(response.status == 200 && response.data.Code == 100){
                      $scope.section = response.data.Data;
                      $scope.sectionfirst = response.data.Data[0];
                    //$scope.books = response.data.Data.Books;
                    console.log($scope.section);
                    console.log($scope.sectionfirst);
                }
            });
            $scope.addSectionBook = function(){
                $scope.stateAddSectionBook = true;
            }

        })
        .controller('bookClassController' , function(categoryUpdateService,$state,addNewCateService,$http,$scope,categoryService){
            $scope.category = [];


            $scope.dataPage = {
                pageSize:10,
                pageIndex:1,
                pages:[]
            };
            $scope.bookClassChangePage = function(pageIndex){
                $scope.dataPage.pageIndex = pageIndex;
            }
            $scope.lwhBookClass = function(){
                categoryService.getCategory()
                    .then(function(response){
                        if(response.data.Code == 100){

                            $scope.category = response.data.Data;
                            console.log($scope.category);
                            var total = Math.ceil($scope.category.length / $scope.dataPage.pageSize);
                            for(var i = 0 ;i < total ; i++){
                                $scope.dataPage.pages[i] = i + 1;
                            }


                        }
                    });
            };
            $scope.lwhBookClass();


            $scope.addNewClass = function(){
                $scope.flag =1;
                $scope.addNewCate = true;
                $scope.title = '添加新分类';
            };

            $scope.categoryEdit = function(item){
                $scope.editcate.className = item.Name;
                $scope.editcate.icon = item.Icon;
                $scope.editcate.id = item.Id;
                $scope.addNewCate = true;
                $scope.flag =0;
                $scope.title = '编辑分类';
            };



            //编辑分类
            $scope.editcate = {
                className:'',
                icon:null,
                id:''
            };
            //添加分类
            $scope.addcate = {
                name:'',
                icon:null,
                id:''
            };

            //$scope.categoryOptions = {
            //    rule:{
            //        size:800 * 1024,
            //        type:['image/png' , 'image/jpeg'],
            //        resolution:{
            //            width:240,
            //            height:240
            //        }
            //    },
            //    message:{
            //        size:'图片必须小于800KB',
            //        type:'图片格式必须为png或jpeg',
            //        resolution:'图片的分辨率必须为240*240'
            //    },
            //    success:function(file){
            //        console.log(file);
            //        $scope.category.icon = file;
            //    }
            //};


                $scope.cate_confirm = function(){
                    if($scope.flag == 1){
                        $scope.editcate.icon = document.querySelector('#addFileUpLoad').files[0];
                        console.log($scope.editcate.icon);
                        console.log($scope.editcate.className);
                        addNewCateService.getAddNewCate($scope.editcate)
                            .then(function(response) {
                                if(response.data.Code == 100){
                                     //$state.go('bookClass',{},{reload:true});
                                    //$scope.category.push(response.data.Data);
                                    $scope.lwhBookClass();
                                    console.log(response);
                                }
                            });
                    }
                   else{
                        console.log($scope.editcate);
                        $scope.editcate.icon = document.querySelector('#addFileUpLoad').files[0];
                        console.log($scope.editcate.icon);
                        console.log($scope.editcate.className);
                        categoryUpdateService.getCategoryUpdate($scope.editcate)
                            .then(function(response){
                                if(response.data.Code == 100){
                                    //$state.go('bookClass',{},{reload:true});
                                    $scope.lwhBookClass();
                                    console.log(response);
                                }

                            });
                    }
                };



        })
        .controller('bookMessageController' , function(bookPutawayService,$state,publisherListService,categoryService,$scope,bookListService){
            $scope.bookList=[];

            $scope.dataPage = {
                pageSize:10,
                pageIndex:1,
                total:0,
                pages:[]
            };
            //
            $scope.changePage = function(index){
                $scope.dataPage.pageIndex = index;
            }

            $scope.tempArray=[];


            bookListService.getBookList()
                .then(function(response){

                    if(response.data.Code == 100){
                        console.log(response);
                        $scope.bookList=response.data.Data;
                        //console.log($scope.bookList);
                        angular.copy($scope.bookList , $scope.tempArray);
                        $scope.dataPage.total = $scope.tempArray.length;
                        createPageFooter();

                        //var total = Math.ceil($scope.bookList.length / $scope.dataPage.pageSize);
                        //for(var i = 0 ;i < total ; i++){
                        //    $scope.dataPage.pages[i] = i + 1;
                        //}
                    }
                });
            $scope.selectedCategory = {};
            $scope.booksCategory=function(){
                fiterItem();
            };
            $scope.bookPub=function(){
                fiterItem();
            };
            $scope.searchKey=function(){
                fiterItem();
            };

            function fiterItem(){
                angular.copy($scope.bookList , $scope.tempArray);

                if($scope.bookcategory.Id){
                    $scope.tempArray = $scope.tempArray.filter(function(item){
                        return item.categoryId == $scope.bookcategory.Id;
                    });
                }
                if($scope.bookpub.Id){
                    $scope.tempArray = $scope.tempArray.filter(function(item){
                        return item.publisherId == $scope.bookpub.Id;
                    });
                }
                if($scope.keyword.length>0){
                    $scope.tempArray = $scope.tempArray.filter(function(item){
                        return item.bookName.toLowerCase().indexOf($scope.keyword.toLowerCase())>=0;
                    });
                }
                console.log($scope.tempArray);
                $scope.dataPage.total = $scope.tempArray.length;
                createPageFooter();

                $scope.dataPage.pageIndex = 1;
            }


            // 生成页脚
            function createPageFooter(){
                var totalPageCount = Math.ceil($scope.dataPage.total / $scope.dataPage.pageSize);
                var temp = [];
                for(var i = 0 ;i < totalPageCount ;i++){
                    temp[i] = i + 1;
                }
                $scope.dataPage.pages = temp;
            }



            //获取分类列表
            $scope.bookCate=[];
            $scope.bookcategory={};
            categoryService.getCategory()
                .then(function(response){
                    if(response.data.Code == 100){
                    //console.log(response);
                        $scope.bookCate=response.data.Data;
                        $scope.bookCate.unshift({Id:0,Name:'全部图书类别'});
                        $scope.bookcategory = $scope.bookCate[0];
                    }
                });
            //获取出版社列表
            $scope.bookPublisher=[];
            $scope.bookpub={};
            publisherListService.getPublisherList()
                .then(function(response){
                    if(response.data.Code == 100){
                        //console.log(response);
                        $scope.bookPublisher = response.data.Data;
                        $scope.bookPublisher.unshift({Id:0,Name:'全部出版社'});
                        $scope.bookpub = $scope.bookPublisher[0];
                    }

                });
            $scope.keyword= '';


            //添加图书信息
            $scope.addBookMessage = function(){
                $state.go('addBookMessage',{},{reload:true});
            };

            //图书信息的编辑
            $scope.editBookMessage = function(item){
                console.log(item);
                $state.go('editBookMessage',{oneBookMessage:item.bookId},{reload:true});
            };

            //图书信息的详情
            $scope.detailBookMessage = function(item){
                $state.go('detailBookMessage',{bookId:item.bookId},{reload:true});
            }

            //图书入库

            $scope.bookPutAway = {
                num:'',
                name:'',
                bookId:'',
                count:''
            };

            $scope.bookPut = false;
            $scope.putaway=function(item){
                console.log(item);
                $scope.bookPut = !$scope.bookPut;
                $scope.bookPutAway.bookId = item.bookId;
                $scope.bookPutAway.name = item.bookName;
                $scope.bookPutAway.num = item.amount;
            };


            $scope.putaway_onconfim = function(){
                bookPutawayService.getbookPutaway($scope.bookPutAway)
                    .then(function(response){
                        if(response.data.Code == 100){
                            $scope.bookPut = !$scope.bookPut;
                            console.log(response);
                        }
                        if(response.data.Code == 102){
                            document.querySelector('#putDiv').style.display='block';
                            document.querySelector('#putDiv1').style.display='none';
                            console.log(response);
                        }
                        if(response.data.Code == 101){
                            document.querySelector('#putDiv1').style.display='block';
                            document.querySelector('#putDiv').style.display='none';
                            console.log(response);
                        }

                    })

            };
            $scope.putaway_oncancel = function(){
                $scope.bookPut = !$scope.bookPut;
            }

        })
        //.controller('bookStorageController' , function($scope){
        //
        //})
        .controller('orderMessageController' , function(MyData,$interval,TransactionReturnBookService,TransactionDistributionService,$scope,GetAllBorrowRecordsService){
            $scope.order = [];
            $scope.order1 = [];
            $scope.dataPage = {
                pageSize:10,
                pageIndex:1,
                total:0,
                pages:[]
            };
            //
            $scope.orderChangePage = function(index){
                $scope.dataPage.pageIndex = index;
            };

            $scope.MyData = MyData;
            console.log($scope.MyData);

            //$scope.timer = $interval(function(){
            //    $scope.orderLoadData();
            //},500);
            //var ws = new WebSocket("ws://192.168.12.123:12346/interface/ajax/TransactionGetAllBorrowRecords.php");
            //ws.onopen = function(){ws.send("test"); };
            //console.log(ws);
            $scope.orderLoadData = function(){
                GetAllBorrowRecordsService.GetAllBorrowRecords()
                    .then(function(response){
                        if(response.data.Code == 100){
                            //console.log(response);
                            $scope.order = response.data.Data;
                            //console.log($scope.order);
                            angular.copy($scope.order , $scope.tempArray);
                            $scope.tempArray = $scope.tempArray.filter(function(item){
                                return item.State==1||item.State==3;
                            });
                            $scope.dataPage.total = $scope.tempArray.length;
                            orderCreatePageFooter();
                            $scope.dataPage.pageIndex = 1;
                        }
                    });
            };
            $scope.orderLoadData();

            //$scope.$on('destroy',function(){
            //    $interval.cancel($scope.timer);
            //});
            $scope.phone=false;
            $scope.btnSearch=false;

            $scope.sendList = function(){
                $scope.phone=false;
                $scope.btnSearch=false;
                GetAllBorrowRecordsService.GetAllBorrowRecords()
                    .then(function(response){
                        if(response.data.Code == 100){
                            console.log(response);
                            $scope.order = response.data.Data;
                            angular.copy($scope.order , $scope.tempArray);
                            $scope.tempArray = $scope.tempArray.filter(function(item){
                                return item.State==1;
                            });
                            $scope.dataPage.total = $scope.tempArray.length;
                            orderCreatePageFooter();
                            $scope.dataPage.pageIndex = 1;
                        }
                    });

            };
            $scope.giveList = function(){
                $scope.phone=true;
                $scope.btnSearch=true;
                GetAllBorrowRecordsService.GetAllBorrowRecords()
                    .then(function(response){
                        if(response.data.Code == 100){
                            console.log(response);
                            $scope.order1 = response.data.Data;
                            order();
                        }
                    });

            };

            // 生成页脚
            function orderCreatePageFooter(){
                var totalPageCount = Math.ceil($scope.dataPage.total / $scope.dataPage.pageSize);
                var temp = [];
                for(var i = 0 ;i < totalPageCount ;i++){
                    temp[i] = i + 1;
                }
                $scope.dataPage.pages = temp;
            }


            $scope.orderBookKeword='';
            console.log($scope.orderBookKeword);
            //查询
            $scope.orderSearch=function(){
                console.log($scope.orderBookKeword);
                order();
            };

            function order(){
                angular.copy($scope.order1 , $scope.tempArray);

                $scope.tempArray = $scope.tempArray.filter(function(item){
                    return item.State==3;
                });

                console.log($scope.orderBookKeword);
                if($scope.orderBookKeword.length>0){
                    $scope.tempArray = $scope.tempArray.filter(function(item){

                        return item.Phone.indexOf($scope.orderBookKeword)>=0;
                    });
                }
                console.log($scope.tempArray);
                $scope.dataPage.total = $scope.tempArray.length;
                orderCreatePageFooter();

                $scope.dataPage.pageIndex = 1;
            }

            $scope.sendArray=[];
            $scope.tempArray=[];
            $scope.stateName = function(state){
                if(state == 0){
                    return '已取消';
                }
                if(state == 1)
                {
                    return '待配送';
                }
                if(state == 2){
                    return '配送中';
                }
                if(state == 3){
                    return '归还';
                }
                if(state == 4){
                    return '已归还';
                }
            };

            $scope.changState = function(item){
                console.log(item);
                //配送
                if(item.State == 1){
                    TransactionDistributionService.getTransactionDistribution(item.BorrowNumber)
                        .then(function(response){
                            if(response.data.Code == 100){
                                console.log(response);
                                $scope.orderLoadData();
                            }
                        })
                }
                //归还
                if(item.State == 3){
                    TransactionReturnBookService.TransactionReturnBook(item.BorrowNumber,item.BookNumber)
                        .then(function(response){
                            if(response.data.Code == 100){
                                console.log(response);
                                $scope.orderLoadData();
                            }
                        })
                }

            }
        })
        .controller('addBookMessageController' , function(bookCreateService,authorService,publisherListService,categoryService,$state,$scope){
            $scope.addBookBack = function(){
                $state.go('bookMessage',{},{reload:true});
            };

            /**
             添加图书信息
             **/
            //加载类别
            $scope.addBookCate=[];
            //$scope.addBookCategory={};
            categoryService.getCategory()
                .then(function(response){
                    if(response.data.Code == 100){
                        //console.log(response);
                        $scope.addBookCate = response.data.Data;
                        $scope.addBookCate.unshift({Id:0,Name:'请选择图书类别'});
                        $scope.addBookMessagePage.categoryId = $scope.addBookCate[0];
                    }

                });

            //加载出版社
            $scope.addBookPub=[];
            //$scope.addBookPublish={};
            publisherListService.getPublisherList()
                .then(function(response){
                    if(response.data.Code == 100){
                        $scope.addBookPub=response.data.Data;
                        $scope.addBookPub.unshift({Id:0,Name:'请选择图书出版社'});
                        $scope.addBookMessagePage.publisherId = $scope.addBookPub[0];
                    }
                });

            //加载作者
            $scope.addAut=[];
            //$scope.addAuthor={};
            authorService.getAuthor()
                .then(function(response){
                    //console.log(response);
                    if(response.data.Code == 100){

                        $scope.addAut=response.data.Data;
                        $scope.addAut.unshift({Id:0,Name:'请选择图书作者'});
                        $scope.addBookMessagePage.authorId = $scope.addAut[0];
                    }
                });

            $scope.addBookMessagePage = {
                isbn:'',
                name:'',
                publishDate:'',
                categoryId:'',
                publisherId:'',
                authorId:'',
                image:null,
                introduce:''
            };

            $scope.addBookSave = function(){
                $scope.addBookMessagePage.image = document.querySelector('#addBookCover').files[0];
                $scope.addBookMessagePage.categoryId = $scope.addBookMessagePage.categoryId.Id;
                $scope.addBookMessagePage.publisherId = $scope.addBookMessagePage.publisherId.Id;
                $scope.addBookMessagePage.authorId = $scope.addBookMessagePage.authorId.Id;
                bookCreateService.getbookCreate($scope.addBookMessagePage)
                    .then(function(response){
                        console.log(response);
                        if(response.data.Code == 100){
                            $state.go('bookMessage',{},{reload:true})
                        }
                    })

            };
        })
        .controller('editBookMessageController' , function(bookUpdateService,bookSingleService,$stateParams,$state,$scope,bookCreateService,authorService,publisherListService,categoryService){
            $scope.editBookBack = function(){
                $state.go('bookMessage',{},{reload:true});
            };

            $scope.oneMessage=$stateParams.oneBookMessage;
            //console.log($scope.oneMessage);
            $scope.editBookMessagePage=[];
            bookSingleService.getbookSingle($scope.oneMessage).then(function(response){
                console.log(response);
                if(response.status == 200 && response.data.Code == 100){
                    $scope.editBookMessagePage = response.data.Data[0];

                    $scope.editMessage.isbn = $scope.editBookMessagePage.ISBN;
                    $scope.editMessage.name = $scope.editBookMessagePage.bookName;
                    $scope.editMessage.publishDate = $scope.editBookMessagePage.publishDate;
                    $scope.editMessage.introduce = $scope.editBookMessagePage.Introduce;
                    $scope.editMessage.image = $scope.editBookMessagePage.Images;

                    //加载类别
                    $scope.addBookCate=[];
                    //$scope.addBookCategory={};
                    categoryService.getCategory()
                        .then(function(response){
                            console.log(response);
                            if(response.data.Code == 100){
                                $scope.addBookCate = response.data.Data;
                                for(var i=0;i<$scope.addBookCate.length;i++){
                                    if($scope.addBookCate[i].Id==$scope.editBookMessagePage.categoryId){
                                        $scope.editMessage.categoryId = $scope.addBookCate[i];
                                        return;
                                        }
                                    }
                                }
                            });

                    //加载出版社
                    $scope.addBookPub=[];
                    //$scope.addBookPublish={};
                    publisherListService.getPublisherList()
                        .then(function(response){
                            if(response.data.Code == 100){
                                $scope.addBookPub=response.data.Data;
                                for(var i=0;i<$scope.addBookPub.length;i++){
                                    if($scope.addBookPub[i].Id==$scope.editBookMessagePage.publisherId){
                                        $scope.editMessage.publisherId = $scope.addBookPub[i];
                                        //console.log($scope.editMessage.publisherId);
                                        return;
                                    }
                                }
                            }
                        });

                    //加载作者
                    $scope.addAut=[];
                    //$scope.addAuthor={};
                    authorService.getAuthor()
                        .then(function(response){
                            //console.log(response);
                            if(response.data.Code == 100){
                                $scope.addAut=response.data.Data;
                                for(var i=0;i<$scope.addAut.length;i++){
                                    if($scope.addAut[i].Id==$scope.editBookMessagePage.authorId){
                                        $scope.editMessage.authorId = $scope.addAut[i];
                                        return;
                                    }
                                }
                            }
                        });

                }
            });
            $scope.editMessage = {
                id:'',
                isbn:'',
                name:'',
                publishDate:'',
                categoryId:'',
                publisherId:'',
                authorId:'',
                introduce:'',
                image:null
            };

            //编辑保存
            $scope.editBookSave = function(){
                $scope.editMessage.id=$stateParams.oneBookMessage;
                $scope.editMessage.categoryId = $scope.editMessage.categoryId.Id;
                console.log($scope.editMessage.categoryId);
                $scope.editMessage.publisherId = $scope.editMessage.publisherId.Id;
                $scope.editMessage.authorId = $scope.editMessage.authorId.Id;
                $scope.editMessage.image = document.querySelector('#editBookCover').files[0];
                bookUpdateService.getBookUpdate($scope.editMessage)
                    .then(function(response){
                        if(response.data.Code = 100){
                            console.log(response);
                            $state.go('bookMessage');
                        }
                    })
            }



        })
        .controller('detailBookMessageController' , function(bookSingleService,$stateParams,$state,$scope){
            $stateParams.bookId;
            //console.log($stateParams.bookId);
            $scope.detailBook=[];
            bookSingleService.getbookSingle($stateParams.bookId).then(function(response){

                if(response.status == 200 && response.data.Code == 100){
                    $scope.detailBook = response.data.Data[0];
                    console.log(response.data.Data[0]);
                }
            });

            $scope.detailBookBack = function(){
                $state.go('bookMessage');
            }
        })

})();