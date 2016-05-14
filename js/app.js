var app = angular.module('app',['firebase']);

app.controller('productCtrl',function($scope,$firebaseArray){
    
    var fb = new Firebase('https://jfukki-khan.firebaseio.com/');
    $scope.products = $firebaseArray(fb);
   
    
    $scope.showForm = function(){
        
        $scope.addFormShow=true;
        $scope.editFormShow=false;
        clearForm();
        
    }
    
    
    $scope.hideForm= function(){
        
        $scope.addFormShow=false;
        
    }
        
    function clearForm(){
        
        $scope.title="";
        $scope.des="";
        $scope.ref="";
        $scope.link1="";
        $scope.link2="";
    }
    
    
    $scope.addFormSubmit = function(){
        $scope.products.$add({
            
            title:$scope.title,
            des:$scope.des,
            ref:$scope.ref,
            link1:$scope.link1,
            link2:$scope.link2
            
        });
        clearForm();
    }
    
    
    $scope.showProduct = function(product){
        $scope.editFormShow = true;
        $scope.addFormShow = false;
        $scope.title=product.title;
        $scope.des=product.des;
        $scope.ref=product.ref;
        $scope.link1=product.link1;
        $scope.link2=product.link2;
        $scope.id=product.$id;
        
        
    }
    
    
    $scope.editFormSubmit = function(){
      
        var id = $scope.id;
        var record =  $scope.products.$getRecord(id);
        record.title = $scope.title;
        record.des = $scope.des;
        record.ref = $scope.ref;
        record.link1 = $scope.link1;
        record.link2 = $scope.link2;
        
        $scope.products.$save(record);
        
    }
    
    $scope.deleteProduct = function(product){
        $scope.products.$remove(product);
    }
    
    
    
});
