describe('Calculator Controller', function() {
    
    beforeEach(module('calcApp'));
    
    var $controller, $rootScope;
    
    beforeEach(inject(function(_$controller_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));
    
    describe('Reset ', function() {
        it('on reset all properties are refreshed', function() {
            var $scope = $rootScope.$new();
            var controller = $controller('calculatorController', { $scope: $scope });
            controller.number = 22;
            controller.result = 44;
            $scope.reset();
            expect(controller.number).toEqual(0);
            expect(controller.result).toEqual(0);
        });
    });
    
    describe('add', function(){
        it('on add the calculation list shoul have the new operation and number', function(){
            var $scope = $rootScope.$new();
            var controller = $controller('calculatorController', { $scope: $scope });
            controller.selectedOp = {name: "multiply", value:"*"};
            controller.number = 5;
            $scope.add();
            var calcLength = controller.selectedCalcList.length;
            expect(calcLength).toEqual(1);
        });
    })
    
    describe('calculate', function(){
        it("(3 + 2) * 3 = 15", function(){
            var $scope = $rootScope.$new();
            var controller = $controller('calculatorController', { $scope: $scope });
            controller.selectedCalcList = [
                {name:"add", value:"+", nr:"2"},
                {name:"multiply", value:"*", nr:"3"},
                {name:"", value:"", nr:"3"},
            ]
            $scope.calculate();
            expect(controller.result).toEqual(15);
        });
    });
    
    describe('calculate', function(){
        it("5 * 9 = 45", function(){
            var $scope = $rootScope.$new();
            var controller = $controller('calculatorController', { $scope: $scope });
            controller.selectedCalcList = [
                {name:"multiply", value:"*", nr:"9"},
                {name:"", value:"", nr:"5"},
            ]
            $scope.calculate();
            expect(controller.result).toEqual(45);
        });
    });
  
    describe('calculate', function(){
        it("apply 1", function(){
            var $scope = $rootScope.$new();
            var controller = $controller('calculatorController', { $scope: $scope });
            controller.selectedCalcList = [
                {name:"", value:"", nr:"1"},
            ]
            $scope.calculate();
            expect(controller.result).toEqual("1");
        });
    });
});

