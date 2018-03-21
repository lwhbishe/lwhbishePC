/**
 * Created by Administrator on 2018/3/16.
 */
(function()
{
    angular.module('app.factory' , [])
        .factory('MyData', function($websocket) {
            // Open a WebSocket connection
            var dataStream = $websocket('ws://localhost');

            var collection = [];

            dataStream.onMessage(function(message) {
                collection.push(JSON.parse(message.data));
            });

            var methods = {
                collection: collection,
                get: function() {
                    dataStream.send(JSON.stringify({ action: 'get' }));
                }
            };

            return methods;
        });
        //.factory('',function(){
        //
        //})
})();