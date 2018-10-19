angular.module('calcApp').controller('calculatorController',['$scope', 'operationsFactory',function($scope, operationsFactory, ){
    var calc = this;
    calc.a = "this is working";
    calc.result = 0;
    calc.number = 0;
    calc.operations = operationsFactory;
    calc.selectedOp = {};
    calc.selectedCalcList = [];// [{name:"add",nr:3, opValue:"+"},{name:"multiply", nr:2, value:"*"}, {name:'apply', nr:3, value:""}];
    
    $scope.add = function(){
        calc.selectedCalcList.push({
            name: calc.selectedOp.name,
            value: calc.selectedOp.value,
            nr: calc.number
        });
    }
        
    $scope.calculate = function(){
        let len = calc.selectedCalcList.length-1;
        let firstElem = calc.selectedCalcList[len].nr;
        let result = parseInt(firstElem);
        for(let i=0; i<len; i++){
            let item = calc.selectedCalcList[i];
            switch(item.value){
                case "*": 
                    result *= parseInt(item.nr); 
                    break;
                case "/": 
                    result /= parseInt(item.nr); 
                    break;
                case "-": 
                    result -= parseInt(item.nr); 
                    break;
                case "+": 
                    result += parseInt(item.nr); 
                    break;
                default:
                    console.log('unknown operation');
            };  
        } 

        calc.result = result;
    };    

        
    $scope.reset = function(){
        calc.number = 0;
        calc.result = 0;
        calc.selectedCalcList = [];
        calc.selectedOp = {};
    }
    
}]);
    
