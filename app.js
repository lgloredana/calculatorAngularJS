angular.module('calcApp').controller('calculatorController',['$scope', 'operationsFactory',function($scope, operationsFactory, ){
    var calc = this;
    calc.a = "this is working";
    calc.result = 0;
    calc.number = 0;
    calc.operations = operationsFactory;
    calc.selectedOp = {};
    calc.selectedCalcList = [];// [{name:"add",nr:3, opValue:"+"},{name:"multiply", nr:2, value:"*"}, {name:'apply', nr:3, value:""}];
    
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
        let calcLength = selecectedCalcs.length-1;
        let result = selecectedCalcs[calcLength].nr;
        for(let i=0; i<calcLength; i++){
          result = applyOp(result)(selecectedCalcs[i]);
        }
    }    

    applyOp = function(result){
        return function(obj){
          switch(obj.value){
            case "*": 
                result = result * obj.nr; 
                break;
            case "/": 
                result = result / obj.nr; 
                break;
            case "-": 
                result = result - obj.nr; 
                break;
            case "+": 
                result = result + obj.nr; 
                break;
          }
          return result;
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
    
