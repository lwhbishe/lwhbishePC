/**
 * Created by Administrator on 2018/1/15.
 */
(function(){
    angular.module('app.services' , [])
        .constant('ROOT_URL','http://127.0.0.1:12346/interface/ajax/')
        .service('sectionService',function($http,ROOT_URL){
            this.getSection = function(){
                return $http.get(ROOT_URL+'section.php');
            }
        })
        .service('bookService',function($http,ROOT_URL){
            this.getSingle = function(id){
                return $http.get(ROOT_URL+'sectionSingle.php',{params:{id:id}});
            }
        })
        .service('sectionCreateService' , function($http,ROOT_URL){
            this.getSectionCreate = function(data){
                return $http({
                    method:'post',
                    url:ROOT_URL+'createSection.php',
                    data:data,
                    headers: { 'Content-Type': undefined },
                    transformRequest:function(data){
                        var formData = new FormData();
                        for(var key in data){
                            formData.append( key , data[key]);
                        }
                        return formData;
                    }
                });
            }
        })
        .service('sectionUpdateService' , function($http,ROOT_URL){
            this.getSectionUpdate = function(data){
                return $http({
                    method:'post',
                    url:ROOT_URL+'editSection.php',
                    data:data,
                    headers: { 'Content-Type': undefined },
                    transformRequest:function(data){
                        var formData = new FormData();
                        for(var key in data){
                            formData.append( key , data[key]);
                        }
                        return formData;
                    }
                });
            }
        })
        .service('sectionDeleteService' , function($http,ROOT_URL){
            this.getSectionDelete = function(data){
                return $http({
                    method:'post',
                    url:ROOT_URL+'deleteSection.php',
                    data:data,
                    headers: { 'Content-Type': undefined },
                    transformRequest:function(data){
                        var formData = new FormData();
                        for(var key in data){
                            formData.append( key , data[key]);
                        }
                        return formData;
                    }
                });
            }
        })
        .service('categoryService' , function($http,ROOT_URL){
            this.getCategory = function(){
                return $http.get(ROOT_URL+'bookCategory.php');
            }
        })
        .service('addNewCateService' , function($http , ROOT_URL){
            this.getAddNewCate = function(data){
                return $http({
                    method:'post',
                    url:ROOT_URL+'createBookCategory.php',
                    data:data,
                    headers:{
                        'content-type':undefined
                    },
                    transformRequest:function(data){
                        var formData = new FormData();
                        for(var key in data){
                            formData.append( key , data[key]);
                        }
                        return formData;
                    }
                })
            }
        })
        .service('categoryUpdateService' , function($http,ROOT_URL){
            this.getCategoryUpdate = function(data){
                return $http({
                    method:'post',
                    url:ROOT_URL+'editBookCategory.php',
                    data:data,
                    headers:{
                        'content-type':undefined
                    },
                    transformRequest:function(data){
                        var formData = new FormData();
                        for(var key in data){
                            formData.append( key , data[key]);
                        }
                        return formData;
                    }

                });
            }
        })
        .service('bookListService' , function($http,ROOT_URL){
            this.getBookList = function(){
                return $http.get(ROOT_URL+'bookMessage.php');
            }
        })
        .service('publisherListService' , function($http,ROOT_URL){
            this.getPublisherList = function(){
                return $http.get(ROOT_URL+'publish.php');
            }
        })
        .service('authorService' , function($http,ROOT_URL){
            this.getAuthor = function(){
                return $http.get(ROOT_URL+'author.php');
            }
        })
        .service('bookCreateService' , function($http,ROOT_URL){
            this.getbookCreate = function(data){
                return $http({
                    method:'post',
                    url:ROOT_URL+'createBookMessage.php',
                    data:data,
                    headers:{
                        'content-type':undefined
                    },
                    transformRequest:function(data){
                        var formData = new FormData();
                        for(var key in data){
                            formData.append( key , data[key]);
                        }
                        return formData;
                    }

                });
            }
        })
        .service('bookSingleService' , function($http,ROOT_URL){
            this.getbookSingle = function(id){
                return $http.get(ROOT_URL+'detailBookMessage.php',{params:{id:id}});
            }
        })
        .service('bookPutawayService' , function($http,ROOT_URL){
            this.getbookPutaway = function(data){
                return $http({
                    method:'post',
                    url:ROOT_URL+'bookPutaway.php',
                    data:data,
                    headers:{
                        'content-type':undefined
                    },
                    transformRequest:function(data){
                        var formData = new FormData();
                        for(var key in data){
                            formData.append( key , data[key]);
                        }
                        return formData;
                    }
                });
            }
        })
        .service('bookUpdateService' , function($http,ROOT_URL){
            this.getBookUpdate = function(data){
                return $http({
                    method:'post',
                    url:ROOT_URL+'editBookMessage.php',
                    data:data,
                    headers:{
                        'content-type':undefined
                    },
                    transformRequest:function(data){
                        var formData = new FormData();
                        for(var key in data){
                            formData.append( key , data[key]);
                        }
                        return formData;
                    }

                });
            }
        })
        .service('GetAllBorrowRecordsService' , function($http,ROOT_URL){
            this.GetAllBorrowRecords = function(){
                return $http.get(ROOT_URL+'TransactionGetAllBorrowRecords.php');
            }
        })
        .service('TransactionDistributionService' , function($http,ROOT_URL){
            this.getTransactionDistribution = function(orderId){
                return $http.get(ROOT_URL+'TransactionDistribution.php',{params:{orderId:orderId}});
            }
        })
        .service('TransactionReturnBookService' , function($http,ROOT_URL){
            this.TransactionReturnBook = function(orderId,bookNumber){
                return $http.get(ROOT_URL+'TransactionReturnBook.php',{params:{orderId:orderId,bookNumber:bookNumber}});
            }
        })


})();