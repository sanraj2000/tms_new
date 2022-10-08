// Create a request variable and assign a new XMLHttpRequest object to it.
console.log("started");



	var app = angular.module('cetApp', []);
	app.controller('cetCtrl', function($scope,$http,$window, $location, $anchorScroll, $timeout,$filter) {


 	    var isClicked = false;	
            // DEV
            var reposinfo2 = {
              method: 'GET',
             url: "./output/dev.json",
              headers: {"Content-Type": "application/json"}
           }
          $http(reposinfo2).then(function(response2){
            $scope.allrows_cconns2 =response2.data;
        
          $scope.totalCount_cc2=$scope.allrows_cconns2.length;
           }, function(){alert("failed in loading file for DEV");});
    

        

  
     // STAGE
            var reposinfo1 = {
              method: 'GET',
            url: "./output/stage.json",
              headers: {"Content-Type": "application/json"}
          }
          $http(reposinfo1).then(function(response){
            $scope.allrows_cconns =response.data;

          $scope.totalCount_cc=$scope.allrows_cconns.length;
          }, function(){alert("failed in loading file for STAGE");});



          




    // INT
                  var aws_au_1012 = {
                    method: 'GET',
                  url: "./output/int.json",
                    headers: {"Content-Type": "application/json"}
                }
                $http(aws_au_1012).then(function(response){
                  $scope.allrows_cconns3 =response.data;

                $scope.totalCount_cc3=$scope.allrows_cconns3.length;
                }, function(){alert("failed in loading file for INT");});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
var awstimedate1 = {
    method: 'GET',
    url: "./output/date/awsdevbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awstimedate1).then(function(response2) {
    $scope.aw1showtime = new Date(response2.data);
}, );
var awsstatus1 = {
    method: 'GET',
    url: "./output/status/awsdevbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsstatus1).then(function(response2) {
    $scope.aw1showstatus = response2.data;
}, );
var awsbuild1 = {
    method: 'GET',
    url: "./output/buildno/awsdevbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsbuild1).then(function(response2) {
    $scope.aw1showbuild = response2.data;
}, );
		

		
var awstimedate2 = {
    method: 'GET',
    url: "./output/date/awsdevbvtparallel.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awstimedate2).then(function(response2) {
    $scope.aw2showtime = new Date(response2.data);
}, );


var awsstatus2 = {
    method: 'GET',
    url: "./output/status/awsdevbvtparallel.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsstatus2).then(function(response2) {
    $scope.aw2showstatus = response2.data;
}, );

var awsbuild2 = {
    method: 'GET',
    url: "./output/buildno/awsdevbvtparallel.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsbuild2).then(function(response2) {
    $scope.aw2showbuild = response2.data;
}, );


var awstimedate3 = {
    method: 'GET',
    url: "./output/date/awsdevbvtsplitrun.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awstimedate3).then(function(response2) {
    $scope.aw3showtime = new Date(response2.data);
}, );
var awsstatus3 = {
    method: 'GET',
    url: "./output/status/awsdevbvtsplitrun.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsstatus3).then(function(response2) {
    $scope.aw3showstatus = response2.data;
}, );
var awsbuild3 = {
    method: 'GET',
    url: "./output/buildno/awsdevbvtsplitrun.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsbuild3).then(function(response2) {
    $scope.aw3showbuild = response2.data;
}, );
		
		

var awstimedate4 = {
    method: 'GET',
    url: "./output/date/awsdevbvtsplitrunpartial.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awstimedate4).then(function(response2) {
    $scope.aw4showtime = new Date(response2.data);
}, );
var awsstatus4 = {
    method: 'GET',
    url: "./output/status/awsdevbvtsplitrunpartial.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsstatus4).then(function(response2) {
    $scope.aw4showstatus = response2.data;
}, );
var awsbuild4 = {
    method: 'GET',
    url: "./output/buildno/awsdevbvtsplitrunpartial.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsbuild4).then(function(response2) {
    $scope.aw4showbuild = response2.data;
}, );		
		
 
		
var awstimedate5 = {
    method: 'GET',
    url: "./output/date/awspreprodbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awstimedate5).then(function(response2) {
    $scope.aw5showtime = new Date(response2.data);
}, );
var awsstatus5 = {
    method: 'GET',
    url: "./output/status/awspreprodbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsstatus5).then(function(response2) {
    $scope.aw5showstatus = response2.data;
}, );
var awsbuild5 = {
    method: 'GET',
    url: "./output/buildno/awspreprodbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsbuild5).then(function(response2) {
    $scope.aw5showbuild = response2.data;
}, );

		
		
var awstimedate6 = {
    method: 'GET',
    url: "./output/date/awsprodbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awstimedate6).then(function(response2) {
    $scope.aw6showtime = new Date(response2.data);
}, );
var awsstatus6 = {
    method: 'GET',
    url: "./output/status/awsprodbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsstatus6).then(function(response2) {
    $scope.aw6showstatus = response2.data;
}, );
var awsbuild6 = {
    method: 'GET',
    url: "./output/buildno/awsprodbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsbuild6).then(function(response2) {
    $scope.aw6showbuild = response2.data;
}, );
	
		
var awstimedate7 = {
    method: 'GET',
    url: "./output/date/awsstagebvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awstimedate7).then(function(response2) {
    $scope.aw7showtime = new Date(response2.data);
}, );
var awsstatus7 = {
    method: 'GET',
    url: "./output/status/awsstagebvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsstatus7).then(function(response2) {
    $scope.aw7showstatus = response2.data;
}, );
var awsbuild7 = {
    method: 'GET',
    url: "./output/buildno/awsstagebvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsbuild7).then(function(response2) {
    $scope.aw7showbuild = response2.data;
}, );		
	
		
var awstimedate8 = {
    method: 'GET',
    url: "./output/date/awsstagebvtsplitrun.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awstimedate8).then(function(response2) {
    $scope.aw8showtime = new Date(response2.data);
}, );
var awsstatus8 = {
    method: 'GET',
    url: "./output/status/awsstagebvtsplitrun.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsstatus8).then(function(response2) {
    $scope.aw8showstatus = response2.data;
}, );
var awsbuild8 = {
    method: 'GET',
    url: "./output/buildno/awsstagebvtsplitrun.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsbuild8).then(function(response2) {
    $scope.aw8showbuild = response2.data;
}, );		
		

var awstimedate9 = {
    method: 'GET',
    url: "./output/date/awspreprodbvtspro.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awstimedate9).then(function(response2) {
    $scope.aw9showtime = new Date(response2.data);
}, );
var awsstatus9 = {
    method: 'GET',
    url: "./output/status/awspreprodbvtspro.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsstatus9).then(function(response2) {
    $scope.aw9showstatus = response2.data;
}, );
var awsbuild9 = {
    method: 'GET',
    url: "./output/buildno/awspreprodbvtspro.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsbuild9).then(function(response2) {
    $scope.aw9showbuild = response2.data;
}, );

var awstimedate10 = {
    method: 'GET',
    url: "./output/date/awsprodbvtspro.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awstimedate10).then(function(response2) {
    $scope.aw10showtime = new Date(response2.data);
}, );
var awsstatus10 = {
    method: 'GET',
    url: "./output/status/awsprodbvtspro.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsstatus10).then(function(response2) {
    $scope.aw10showstatus = response2.data;
}, );
var awsbuild10 = {
    method: 'GET',
    url: "./output/buildno/awsprodbvtspro.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsbuild10).then(function(response2) {
    $scope.aw10showbuild = response2.data;
}, );


var awstimedate11 = {
    method: 'GET',
    url: "./output/date/awssprosplitrun.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awstimedate11).then(function(response2) {
    $scope.aw11showtime = new Date(response2.data);
}, );
var awsstatus11 = {
    method: 'GET',
    url: "./output/status/awssprosplitrun.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsstatus11).then(function(response2) {
    $scope.aw11showstatus = response2.data;
}, );
var awsbuild11 = {
    method: 'GET',
    url: "./output/buildno/awssprosplitrun.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsbuild11).then(function(response2) {
    $scope.aw11showbuild = response2.data;
}, );		
		
		
var awstimedate12 = {
    method: 'GET',
    url: "./output/date/awsintbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awstimedate12).then(function(response2) {
    $scope.aw12showtime = new Date(response2.data);
}, );
var awsstatus12 = {
    method: 'GET',
    url: "./output/status/awsintbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsstatus12).then(function(response2) {
    $scope.aw12showstatus = response2.data;
}, );
var awsbuild12 = {
    method: 'GET',
    url: "./output/buildno/awsintbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsbuild12).then(function(response2) {
    $scope.aw12showbuild = response2.data;
}, );		
		
//////////////////////////////////////////////////////////////////////////////////////////////
		
var aztimedate1 = {
    method: 'GET',
    url: "./output/date/azurepreprodbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(aztimedate1).then(function(response2) {
    $scope.az1showtime = new Date(response2.data);
}, );
var azstatus1 = {
    method: 'GET',
    url: "./output/status/azurepreprodbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(azstatus1).then(function(response2) {
    $scope.az1showstatus = response2.data;
}, );
var azbuild1 = {
    method: 'GET',
    url: "./output/buildno/azurepreprodbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(azbuild1).then(function(response2) {
    $scope.az1showbuild = response2.data;
}, );		
		
		
var aztimedate2 = {
    method: 'GET',
    url: "./output/date/azurepreprodbvtspro.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(aztimedate2).then(function(response2) {
    $scope.az2showtime = new Date(response2.data);
}, );
var azstatus2 = {
    method: 'GET',
    url: "./output/status/azurepreprodbvtspro.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(azstatus2).then(function(response2) {
    $scope.az2showstatus = response2.data;
}, );
var azbuild2 = {
    method: 'GET',
    url: "./output/buildno/azurepreprodbvtspro.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(azbuild2).then(function(response2) {
    $scope.az2showbuild = response2.data;
}, );		
		
		
var aztimedate3 = {
    method: 'GET',
    url: "./output/date/azureprodbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(aztimedate3).then(function(response2) {
    $scope.az3showtime = new Date(response2.data);
}, );
var azstatus3 = {
    method: 'GET',
    url: "./output/status/azureprodbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(azstatus3).then(function(response2) {
    $scope.az3showstatus = response2.data;
}, );
var azbuild3 = {
    method: 'GET',
    url: "./output/buildno/azureprodbvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(azbuild3).then(function(response2) {
    $scope.az3showbuild = response2.data;
}, );
		
var aztimedate4 = {
    method: 'GET',
    url: "./output/date/azurestagebvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(aztimedate4).then(function(response2) {
    $scope.az4showtime = new Date(response2.data);
}, );
var azstatus4 = {
    method: 'GET',
    url: "./output/status/azurestagebvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(azstatus4).then(function(response2) {
    $scope.az4showstatus = response2.data;
}, );
var azbuild4 = {
    method: 'GET',
    url: "./output/buildno/azurestagebvt.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(azbuild4).then(function(response2) {
    $scope.az4showbuild = response2.data;
}, );
		
		
var aztimedate5 = {
    method: 'GET',
    url: "./output/date/azuresprosplitrun.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(aztimedate5).then(function(response2) {
    $scope.az5showtime = new Date(response2.data);
}, );
var azstatus5 = {
    method: 'GET',
    url: "./output/status/azuresprosplitrun.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(azstatus5).then(function(response2) {
    $scope.az5showstatus = response2.data;
}, );
var azbuild5 = {
    method: 'GET',
    url: "./output/buildno/azuresprosplitrun.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(azbuild5).then(function(response2) {
    $scope.az5showbuild = response2.data;
}, );
		
		
var aztimedate6 = {
    method: 'GET',
    url: "./output/date/azureprodbvtspro.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(aztimedate6).then(function(response2) {
    $scope.az6showtime = new Date(response2.data);
}, );
var azstatus6 = {
    method: 'GET',
    url: "./output/status/azureprodbvtspro.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(azstatus6).then(function(response2) {
    $scope.az6showstatus = response2.data;
}, );
var azbuild6 = {
    method: 'GET',
    url: "./output/buildno/azureprodbvtspro.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(azbuild6).then(function(response2) {
    $scope.az6showbuild = response2.data;
}, );		
			
/////////////////////////////////////////////////////////////////////////////////////////////
		
var othertimedate1 = {
    method: 'GET',
    url: "./output/date/chaostests.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(othertimedate1).then(function(response2) {
    $scope.other1showtime = new Date(response2.data);
}, );
var otherstatus1 = {
    method: 'GET',
    url: "./output/status/chaostests.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(otherstatus1).then(function(response2) {
    $scope.other1showstatus = response2.data;
}, );
var otherbuild1 = {
    method: 'GET',
    url: "./output/buildno/chaostests.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(otherbuild1).then(function(response2) {
    $scope.other1showbuild = response2.data;
}, );		
		
		
		
var othertimedate2 = {
    method: 'GET',
    url: "./output/date/provisiontenantca3s.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(othertimedate2).then(function(response2) {
    $scope.other2showtime = new Date(response2.data);
}, );
var otherstatus2 = {
    method: 'GET',
    url: "./output/status/provisiontenantca3s.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(otherstatus2).then(function(response2) {
    $scope.other2showstatus = response2.data;
}, );
var otherbuild2 = {
    method: 'GET',
    url: "./output/buildno/provisiontenantca3s.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(otherbuild2).then(function(response2) {
    $scope.other2showbuild = response2.data;
}, );				
	
		
		
var othertimedate3 = {
    method: 'GET',
    url: "./output/date/upgradeendtoend.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(othertimedate3).then(function(response2) {
    $scope.other3showtime = new Date(response2.data);
}, );
var otherstatus3 = {
    method: 'GET',
    url: "./output/status/upgradeendtoend.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(otherstatus3).then(function(response2) {
    $scope.other3showstatus = response2.data;
}, );
var otherbuild3 = {
    method: 'GET',
    url: "./output/buildno/upgradeendtoend.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(otherbuild3).then(function(response2) {
    $scope.other3showbuild = response2.data;
}, );				
	
		
var othertimedate4 = {
    method: 'GET',
    url: "./output/date/soaktestsuite.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(othertimedate4).then(function(response2) {
    $scope.other4showtime = new Date(response2.data);
}, );
var otherstatus4 = {
    method: 'GET',
    url: "./output/status/soaktestsuite.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(otherstatus4).then(function(response2) {
    $scope.other4showstatus = response2.data;
}, );
var otherbuild4 = {
    method: 'GET',
    url: "./output/buildno/soaktestsuite.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(otherbuild4).then(function(response2) {
    $scope.other4showbuild = response2.data;
}, );			
//////////////////////////////////////////////////////////////////		

		
		

var aztest1 = {
    method: 'GET',
    url: "./output/webjson/testno/azureprodbvt.txt",
   }
$http(aztest1).then(function(response2) {
    $scope.az1 = response2.data;
    var t =  $scope.az1	
    const myArray = t.split(" ");
    $scope.test = myArray[1];	
    $scope.sum = Number(myArray[0])+Number(myArray[3]);	
}, );		
		
		
		
		
		
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

 
 

  $scope.callAll = function(demoName) {
   // console.log("--------------"+demoName);
    $scope.currentDateString();
   
  

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

             if(actualVersion.length == 11){
		   var fVersion= actualVersion.substring(1, 3) + "." +actualVersion.substring(3, 5) + "." + actualVersion.substring(5,6)+ ".0" + actualVersion.substring(6,7)+ "." +actualVersion.substring(7,actualVersion.length);
            return fVersion
	   }
	    else if(actualVersion.length > 11){	
              var fVersion= actualVersion.substring(1, 3) + "." +actualVersion.substring(3, 5) + "." + actualVersion.substring(5,6)+ "." + actualVersion.substring(6,8)+ "." +actualVersion.substring(8,actualVersion.length);
            return fVersion
	   }
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

            if(tabName === "TESTJOBS"){
              document.getElementById('defaultOpen2').click();
            }
		  
	    if(tabName === "BUILDJOBS"){
              document.getElementById('defaultOpen3').click();
            }  
          }
          //// Get the element with id="defaultOpen" and click on it
          //  document.getElementById("defaultOpen").Click();
	
	 function connectorTabs2(tabName) {
            var i;
            var x = document.getElementsByClassName("wmiotabtype2");
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
            }
            document.getElementById(tabName).style.display = "block";
           
          }
	
	 function connectorTabs3(tabName) {
            var i;
            var x = document.getElementsByClassName("wmiotabtype3");
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
            }
            document.getElementById(tabName).style.display = "block";
           
          }
