/**
 * Created by Administrator on 2018/1/17.
 */
(function(){
    angular.module('app.filter',[])
        //.filter('searchFilter',function(){
        //    return function(list,category,publish,keyword){
        //        var temp = Array.from(list);
        //        //console.log(temp);
        //        //console.log(keyword);
        //        if(category.Name!='全部图书类别'){
        //            temp = temp.filter(function(item){
        //                //console.log(temp);
        //                return item.Book.Category.Name == category.Name;
        //            })
        //        }
        //        if(publish.Name!='全部出版社'){
        //            temp = temp.filter(function(item){
        //                return item.Book.Publisher.Name == publish.Name;
        //            })
        //        }
        //        if(keyword.length>0){
        //            temp = temp.filter(function(item){
        //                return item.Book.Name.toLowerCase().indexOf(keyword.toLowerCase())>=0;
        //            })
        //        }
        //        return temp;
        //
        //
        //    }
        //})
        .filter('searchFilter',function() {
            return function (list, pageSize, pageIndex) {
                var startIndex = (pageIndex - 1) * pageSize;
                var endIndex = pageIndex * pageSize;
                return list.slice(startIndex, endIndex);

            }
        })
        .filter('pageFilter' , function(){
            return function(list ,size , index){
                var startIndex = (index - 1) * size;
                var endIndex = index * size;
                return list.slice(startIndex , endIndex);
            };
        });;
})();