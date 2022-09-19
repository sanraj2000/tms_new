// Create a request variable and assign a new XMLHttpRequest object to it.
console.log("started");
//https://api.github.com/orgs/softwareag/repos"
//search : /search/repositories  https://api.github.com/search/repositories?q=


	var app = angular.module('cetApp', []);
	app.controller('cetCtrl', function($scope,$http,$window, $location, $anchorScroll, $timeout,$filter) {


    // part 2 starts

            // AWS US 1012
            var reposinfo2 = {
              method: 'GET',
             url: "./output/det.json",
              headers: {"Content-Type": "application/json"}
           }
          $http(reposinfo2).then(function(response2){
            $scope.allrows_cconns2 =response2.data;
        
          $scope.totalCount_cc2=$scope.allrows_cconns2.length;
           }, function(){alert("failed in loading file for AWS_US");});
    
        // AWS US 1011
        var aws_us_1011 = {
          method: 'GET',
        url: "./output/det.json",
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

     // AWS EU
            var reposinfo1 = {
              method: 'GET',
            url: "./output/det.json",
              headers: {"Content-Type": "application/json"}
          }
          $http(reposinfo1).then(function(response){
            $scope.allrows_cconns =response.data;

          $scope.totalCount_cc=$scope.allrows_cconns.length;
          }, function(){alert("failed in loading file for AWS_EU");});



           // AWS EU 1011
           var aws_eu_1011 = {
            method: 'GET',
          url: "./output/det.json",
            headers: {"Content-Type": "application/json"}
          }
          $http(aws_eu_1011).then(function(response){
          $scope.temp = response.data;
   
          $scope.allrows_cconns = $scope.allrows_cconns.concat($scope.temp);
      
          $scope.totalCount_cc=$scope.allrows_cconns.length;
          }, function(){alert("failed in loading file for AWS_EU_1011");});

// end of AWS EU


    // AWS AU
                  var aws_au_1012 = {
                    method: 'GET',
                  url: "./output/det.json",
                    headers: {"Content-Type": "application/json"}
                }
                $http(aws_au_1012).then(function(response){
                  $scope.allrows_cconns3 =response.data;

                $scope.totalCount_cc3=$scope.allrows_cconns3.length;
                }, function(){alert("failed in loading file for AWS_AU");});

      // AWS AU 1011
              var aws_au_1011 = {
                method: 'GET',
              url: "./output/det.json",
                headers: {"Content-Type": "application/json"}
              }
              $http(aws_au_1011).then(function(response){
              $scope.temp = response.data;
       
              $scope.allrows_cconns3 = $scope.allrows_cconns3.concat($scope.temp);
          
              $scope.totalCount_cc3=$scope.allrows_cconns3.length;
              }, function(){alert("failed in loading file for AWS_AU_1011");});


     // ----------##########################------ Start of Azure US -----------------################################---------------

               // Azure US 1012
               var azure_us_1012 = {
                method: 'GET',
               url: "./output/det.json",
                headers: {"Content-Type": "application/json"}
             }
            $http(azure_us_1012).then(function(response2){
              $scope.allrows_cconns2_azure =response2.data;
          
            $scope.totalCount_azure_cc2=$scope.allrows_cconns2_azure.length;
             }, function(){alert("failed in loading file for Azure_US");});
      
          // Azure US 1011
          var azure_us_1011 = {
            method: 'GET',
          url: "./output/det.json",
            headers: {"Content-Type": "application/json"}
          }
          $http(azure_us_1011).then(function(response){
          $scope.temp = response.data;
 
          $scope.allrows_cconns2_azure = $scope.allrows_cconns2_azure.concat($scope.temp);
 
          $scope.totalCount_azure_cc2=$scope.allrows_cconns2_azure.length;
          }, function(){alert("failed in loading file for Azure_US_1011");});
  
          
  
    // ---------------------------------------- end of azureUS --------------------------------
  
       // Azure EU
              var azure_eu_1012 = {
                method: 'GET',
              url: "./output/det.json",
                headers: {"Content-Type": "application/json"}
            }
            $http(azure_eu_1012).then(function(response){
              $scope.allrows_cconns_azure =response.data;
  
            $scope.totalCount_azure_cc=$scope.allrows_cconns_azure.length;
            }, function(){alert("failed in loading file for Azure_EU");});
  
  
  
             // Azure EU 1011
             var azure_eu_1011 = {
              method: 'GET',
            url: "./output/det.json",
              headers: {"Content-Type": "application/json"}
            }
            $http(azure_eu_1011).then(function(response){
            $scope.temp = response.data;
     
            $scope.allrows_cconns_azure = $scope.allrows_cconns_azure.concat($scope.temp);
        
            $scope.totalCount_azure_cc=$scope.allrows_cconns_azure.length;
            }, function(){alert("failed in loading file for Azure_EU_1011");});
  
  // end of Azure EU
  
  
              // Azure AU
              
       var azure_au_1012 = {
        method: 'GET',
       url: "./output/det.json",
        headers: {"Content-Type": "application/json"}
     }
    $http(azure_au_1012).then(function(response){
      $scope.allrows_cconns3_azure =response.data;
  
    $scope.totalCount_azure_cc3=$scope.allrows_cconns3_azure.length;
     }, function(){alert("failed in loading file for Azure_AU");});

     var azure_au_1011 = {
      method: 'GET',
    url: "./output/det.json",
      headers: {"Content-Type": "application/json"}
    }
    $http(azure_au_1011).then(function(response){
    $scope.temp = response.data;

    $scope.allrows_cconns3_azure = $scope.allrows_cconns3_azure.concat($scope.temp);

    $scope.totalCount_azure_cc3=$scope.allrows_cconns3_azure.length;
    }, function(){alert("failed in loading file for Azure_AU_1011");});

       // ---------###################################------ end of Azure US ---------#################################-----------------------




   // ---------------------------------- Start Schedules ----------------------------------
                        //----------------- AWS US ------------------
                        var aws_schedule_1 = {
                          method: 'GET',
                        url: "./output/schedules/AWS_US.json",
                          headers: {"Content-Type": "application/json"}
                      }
                      $http(aws_schedule_1).then(function(response){
                        $scope.allrows_schedules1 =response.data;

                      $scope.totalschedules1_c=$scope.allrows_schedules1.length;
                      }, function(){alert("failed in loading schedule file for AWS US");});

                      var aws_schedule_2 = {
                        method: 'GET',
                      url: "./output/schedules/AWS_EU.json",
                        headers: {"Content-Type": "application/json"}
                      }
                      $http(aws_schedule_2).then(function(response){
                      $scope.allrows_schedules2 =response.data;

                      $scope.totalschedules2_c=$scope.allrows_schedules2.length;
                      }, function(){alert("failed in loading schedule file for AWS EU");});

                      var aws_schedule_3 = {
                        method: 'GET',
                      url: "./output/schedules/AWS_AU.json",
                        headers: {"Content-Type": "application/json"}
                      }
                      $http(aws_schedule_3).then(function(response){
                      $scope.allrows_schedules3 =response.data;

                      $scope.totalschedules3_c=$scope.allrows_schedules3.length;
                      }, function(){alert("failed in loading schedule file for AWS AU");});


              //----------------- Azure US ------------------
              var az_schedule_1 = {
                method: 'GET',
              url: "./output/schedules/Azure_US.json",
                headers: {"Content-Type": "application/json"}
            }
            $http(az_schedule_1).then(function(response){
              $scope.allrows_az_schedules1 =response.data;

            $scope.totalschedules1_c_az=$scope.allrows_az_schedules1.length;
            }, function(){alert("failed in loading schedule file for Azure US");});

            var az_schedule_2 = {
              method: 'GET',
            url: "./output/schedules/Azure_EU.json",
              headers: {"Content-Type": "application/json"}
            }
            $http(az_schedule_2).then(function(response){
            $scope.allrows_az_schedules2 =response.data;

            $scope.totalschedules2_c_az=$scope.allrows_az_schedules2.length;
            }, function(){alert("failed in loading schedule file for Azure EU");});

            var az_schedule_3 = {
              method: 'GET',
            url: "./output/schedules/Azure_AU.json",
              headers: {"Content-Type": "application/json"}
            }
            $http(az_schedule_3).then(function(response){
            $scope.allrows_az_schedules3 =response.data;

            $scope.totalschedules3_c_az=$scope.allrows_az_schedules3.length;
            }, function(){alert("failed in loading schedule file for Azure AU");});
 // ---------------------------------- END Schedules ----------------------------------
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

  $scope.callWorkflow = function( rname) {
    var reposinfo = {
      method: 'GET',
       url: "https://sandeepl.int-aws-us.webmethods.io/runflow/run/sync/1EMxYNkCWg?region="+rname,
       crossDomain : true,

      headers: {
          "Content-Type": "application/json",
      //    "Access-Control-Allow-Origin": "https://pages.github.softwareag.com",
      //    'Access-Control-Request-Methods':'GET,HEAD,OPTIONS',
    //    'Access-Control-Allow-Credentials':'true',
          "Access-Control-Allow-Headers": "webhook_key",
     //     "Origin":"https://pages.github.softwareag.com",
    //      "Accept":"application/json, text/plain, */*",
          "webhook_key":"398f9f1288740231667320931658378988341"
    }
     }
    $http(reposinfo).then(function(response){

     // console.log(response);

      if (rname == 'AWS_US') {
        $scope.alllogs =response.data;
        $scope.totalCount=$scope.allrows.length;
      } else if (rname == 'AWS_EU'){
        $scope.alllogs1 =response.data;
      }else if (rname == 'AWS_AU'){
        $scope.alllogs2 =response.data;
      }else if (rname == 'Azure_US'){
        $scope.alllogs3 =response.data;
      }else if (rname == 'Azure_EU'){
        $scope.alllogs4 =response.data;
      }else if (rname == 'Azure_AU'){
        $scope.alllogs4 =response.data;
      }
      else if (rname == 'All'){
    //    $scope.alllogs0_All = response.data;
        $scope.alllogs = $scope.allrows_All.filter(d => d.environment["@displayValue"] === "AWS_US");
   //     $scope.alllogs1 = $scope.allrows_All.filter(d => d.environment["@displayValue"] === "AWS_EU");
     //   $scope.alllogs2 = $scope.allrows_All.filter(d => d.environment["@displayValue"] === "AWS_AU");
   //     $scope.alllogs3 = $scope.allrows_All.filter(d => d.environment["@displayValue"] === "Azure_US");
    //    $scope.alllogs4 = $scope.allrows_All.filter(d => d.environment["@displayValue"] === "Azure_EU");
     //   $scope.alllogs4 = $scope.allrows_All.filter(d => d.environment["@displayValue"] === "Azure_AU");
      }


          //sort 'orderfilter' orderBy in controller
        //  $scope.propertyName ="last_execution_status['*body']"
         // $scope.reverse=true;
         // $scope.allrows = orderBy($scope.allrows, $scope.propertyName, $scope.reverse);

         // console.log($scope.allrows);
         // console.log($scope.totalCount);

     }, function(){
      console.log("failed in call1");}
      );

     
  };

 

  $scope.callAll = function(demoName) {
   // console.log("--------------"+demoName);
    $scope.currentDateString();
   
   /* $scope.callWorkflow ("OnPrem");
    $scope.callWorkflow ("WMIO Dev");
    $scope.callWorkflow ("WMIO Stag");
    $scope.callWorkflow ("WMIO Preprod");
    $scope.callWorkflow ("WMIO INT");*/

   $scope.callWorkflow ("AWS_US");

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
