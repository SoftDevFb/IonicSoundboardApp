angular.module('app.controllers', [])
  
.controller('animalSoundsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.gorilla = function(){
        try
        {
           $scope.audio = new Audio('http://c0026106.cdn1.cloudfiles.rackspacecloud.com/b5d75ab5069646d7a68ca90a43e2279b_gorilla-001.mp3');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }
    
    $scope.horse = function(){
        try
        {
           $scope.audio = new Audio('http://c0026106.cdn1.cloudfiles.rackspacecloud.com/052ec56730374386b5f471a8e67647c8_clydesdale.mp3');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }
    
      $scope.lion = function(){
        try
        {
           $scope.audio = new Audio('http://c0026106.cdn1.cloudfiles.rackspacecloud.com/4a166c276484437581619fbf7c40acab_lion-001.mp3');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }
    
      $scope.monkey = function(){
        try
        {
           $scope.audio = new Audio('http://c0026106.cdn1.cloudfiles.rackspacecloud.com/cb40e713d71042948a535baef821d8cc_gibbon-001.mp3');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }
    
     $scope.hippo = function(){
        try
        {
           $scope.audio = new Audio('http://c0026106.cdn1.cloudfiles.rackspacecloud.com/ee89c132fbf64a7cbb5ac65df7f7b5fb_hippo-001.mp3');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }

      $scope.whale = function(){
        try
        {
           $scope.audio = new Audio('http://c0026106.cdn1.cloudfiles.rackspacecloud.com/95ebe7a55f994c6ebf2b7c45953540f0_killer-whale.mp3');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }
    
    $scope.frog = function(){
        try
        {
           $scope.audio = new Audio('http://c0026106.cdn1.cloudfiles.rackspacecloud.com/452c50e621a142509128fbf67fce4c8c_frog-001.mp3');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }
    
     $scope.falcon = function(){
        try
        {
           $scope.audio = new Audio('http://c0026106.cdn1.cloudfiles.rackspacecloud.com/65edf7250d824aa08d4bdc438d70bde4_falcon-001.mp3');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }
    
    $scope.dolphin = function(){
        try
        {
           $scope.audio = new Audio('http://c0026106.cdn1.cloudfiles.rackspacecloud.com/40dbe73cd34c4e2dad78f659fa55cee1_dolphins-001.mp3');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }
}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('peopleSoundsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
$scope.burp = function(){
        try
        {
           $scope.audio = new Audio('http://www.pacdv.com/sounds/people_sound_effects/burp-1.wav');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }
    
    $scope.sneeze = function(){
        try
        {
           $scope.audio = new Audio('http://www.pacdv.com/sounds/people_sound_effects/baby-sneezing-1.wav');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }
    
      $scope.cheer = function(){
        try
        {
           $scope.audio = new Audio('http://www.pacdv.com/sounds/people_sound_effects/crowd-excited.mp3');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }
    
      $scope.walking = function(){
        try
        {
           $scope.audio = new Audio('http://www.pacdv.com/sounds/people_sound_effects/footsteps-4.wav');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }
    
     $scope.clap = function(){
        try
        {
           $scope.audio = new Audio('http://www.pacdv.com/sounds/people_sound_effects/hand-clap-1.wav');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }

      $scope.thinking = function(){
        try
        {
           $scope.audio = new Audio('http://www.pacdv.com/sounds/people_sound_effects/hmmmm.wav');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }
    
    $scope.laugh = function(){
        try
        {
           $scope.audio = new Audio('http://www.pacdv.com/sounds/people_sound_effects/laugh_1.wav');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }
    
     $scope.snore = function(){
        try
        {
           $scope.audio = new Audio('http://www.pacdv.com/sounds/people_sound_effects/snoring-2.wav');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }
    
    $scope.whistle = function(){
        try
        {
           $scope.audio = new Audio('http://www.pacdv.com/sounds/people_sound_effects/whistling.wav');
           $scope.audio.play();
        }
        catch (e)
        {
            alert(e);
        }
    }

}])
 