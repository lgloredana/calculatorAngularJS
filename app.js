angular.module('calcApp').controller('calculatorController',['$scope', 'operationsFactory',function($scope, operationsFactory, ){
    var calc = this;
    calc.a = "this is working";
    calc.result = 0;
    calc.number = 0;
    calc.operations = operationsFactory;
    calc.selectedOp = {};
    calc.selectedCalcList = [];// [{name:"add",nr:3, opValue:"+"},{name:"multiply", nr:2, value:"*"}, {name:'apply', nr:3, value:""}];
    
    $scope.changeOp = function(){
        console.log("op changed");
    }
    $scope.add = function(){
        console.log("add click");
        calc.selectedCalcList.push({
            name: calc.selectedOp.name,
            value: calc.selectedOp.value,
            nr: calc.number
        })
    }
        
    $scope.calculate = function(){
        console.log("calculate click");
        let calcLength = calc.selectedCalcList.length-1;
        calc.result = calc.selectedCalcList[calcLength].nr;
        for(let i=0; i<calcLength; i++){
            let exp = calc.result + "" + calc.selectedCalcList[i].value + calc.selectedCalcList[i].nr;
            calc.result = eval(exp);
        }
    }    
        
    $scope.reset = function(){
        console.log("reset click");
        calc.number = 0;
        calc.result = 0;
        calc.selectedCalcList = [];
        calc.selectedOp = {};
    }
    
}]);
    
