console.log("started");
//https://api.github.com/orgs/softwareag/repos"
//search : /search/repositories  https://api.github.com/search/repositories?q=


	var app = angular.module('cetApp', []);
	app.controller('cetCtrl', function($scope,$http,$window, $location, $anchorScroll, $timeout,$filter) {


    // part 2 starts

            // AWS US 1012
            var reposinfo2 = {
              method: 'GET',
             url: "./output/AWS.json",
              headers: {"Content-Type": "application/json"}
           }
          $http(reposinfo2).then(function(response2){
            $scope.allrows_cconns2 =response2.data;
        
          $scope.totalCount_cc2=$scope.allrows_cconns2.length;
           }, function(){alert("failed in loading file for AWS_US");});
    
        // AWS US 1011
        var aws_us_1011 = {
          method: 'GET',
        url: "./output/AWS_US_1011.json",
          headers: {"Content-Type": "application/json"}
        }
        $http(aws_us_1011).then(function(response){
        $scope.temp = response.data;
       // console.log ("old1 " +$scope.allrows_cconns2);
       // console.log ("new 1 "+$scope.temp);
        $scope.allrows_cconns2 = $scope.allrows_cconns2.concat($scope.temp);
       // console.log ("final "+$scope.allrows_cconns2);
        $scope.totalCount_cc2=$scope.allrows_cconns2.length;
        }, function(){alert("failed in loading file for AWS_US_1011");});

        

  // ---------------------------------------- end of AWS US --------------------------------

  

  
  
   


       
 
       //substring
  $scope.getData1 = $scope.allrows_cconns2;
  
 //substring
         $scope.getData2 = $scope.allrows_cconns;
//substring
  $scope.getData3 = $scope.allrows_cconns3;

// END of rading files----------------------------------
  //function (updatedDate) {
    //      return updatedDate.substr(0, 10);;

    //  }

      //pagination starts
      $scope.currentPage1 = 0; 
      $scope.pageSize1 = 30;
      $scope.data1 = [];
      $scope.q1 = '';


      $scope.getData1 = function () {
        // needed for the pagination calc
        // https://docs.angularjs.org/api/ng/filter/filter
        return $filter('filter')($scope.data1, $scope.q1)
  
      }


      $scope.numberOfPages1=function(){
        return Math.ceil($scope.getData1().length/$scope.pageSize1);                
    }
    
    for (var i=0; i< 1500; i++) {
        $scope.data1.push("Item "+i);
    }
      //pagination ends

    //part 2 ends


    //substring
  $scope.getData = function (updatedDate) {
          return updatedDate.substr(0, 10);;

      };


        //count Increase
  $scope.count = 0;

  $scope.myFunc = function() {
    $scope.count++;
  };


 

   //&reporting_date=03/08/2021

   $scope.currentDateString = function() {
    //date
    let current_datetime = new Date()
    $scope.formatted_date =  (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate() + "/" +current_datetime.getFullYear()
 //  console.log("--------------"+formatted_date)
  };

  // default first call
   $scope.callAll ("My First Call");


          $scope.formatVersion = function (actualVersion){

            var fVersion= actualVersion.substring(1, 5) + "." + actualVersion.substring(5,8)+ "." + actualVersion.substring(8,actualVersion.length);
            return fVersion
        }//function closed  

        $scope.formatDate = function (actualDate){

          var fDate= actualDate.substring(0, 10) + " " + actualDate.substring(11,19) ;
          return fDate
      }//function closed  

  
	});


          //pagination : Part 2
          //We already have a limitTo filter built-in to angular,
          //let's make a startFrom filter
          app.filter('startFrom', function() {
            return function(input, start) {
                if (!input || !input.length) { return; }
                start = +start; //parse to int
                return input.slice(start);
            }
        });


    //tabs
          function connectorTabs(tabName) {
            var i;
            var x = document.getElementsByClassName("wmiotabtype");
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
            }
            document.getElementById(tabName).style.display = "block";

            if(tabName === "Schedules"){
              document.getElementById('defaultOpen2').click();
            }
          }
          //// Get the element with id="defaultOpen" and click on it
          //  document.getElementById("defaultOpen").Click();

          
          //tabs schedules
          function connectorTabs2(tabName) {
            var i;
            var x = document.getElementsByClassName("wmiotabtype2");
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
            }
            document.getElementById(tabName).style.display = "block";
           
          }

