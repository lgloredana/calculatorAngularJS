var calcApp = angular.module('calcApp',[]);
calcApp.factory('operationsFactory', function(){
    let operations = [];
    operations.push({value:"", name:"apply"});
    operations.push({value:"+", name:"add"});
    operations.push({value:"*", name:"multiply"});
    operations.push({value:"-", name:"substraction"});
    operations.push({value:"/", name:"division"});
    return operations;
});