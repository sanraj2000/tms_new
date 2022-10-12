// Create a request variable and assign a new XMLHttpRequest object to it.
console.log("started");



	var app = angular.module('cetApp', []);
	app.controller('cetCtrl', function($scope,$http,$window, $location, $anchorScroll, $timeout,$filter) {
		
		
		
		
		
		


 
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
    var aw1 = response2.data;
    $scope.aw1showstatus = (aw1 != null) ? aw1 : 'ON PROGRESS'	
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
     var aw2 = response2.data;
     $scope.aw2showstatus =  (aw2 != null) ? aw2 : 'ON PROGRESS';
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
   var aw12= response2.data;
   $scope.aw3showstatus =  (aw12 != null) ? aw12 : 'ON PROGRESS'	
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
    var aw12 = response2.data;
    $scope.aw4showstatus = (aw12 != null) ? aw12 : 'ON PROGRESS';	
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
    var aw12 = response2.data;
    $scope.aw5showstatus = (aw12 != null) ? aw12 : 'ON PROGRESS';	
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
    var aw12 = response2.data;
	$scope.aw6showstatus = (aw12 != null) ? aw12 : 'ON PROGRESS';
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
   var aw12= response2.data;
	$scope.aw7showstatus = (aw12 != null) ? aw12 : 'ON PROGRESS';
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
    var aw12 = response2.data;
	$scope.aw8showstatus = (aw12 != null) ? aw12 : 'ON PROGRESS';
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
   var aw12 = response2.data;
	$scope.aw9showstatus = (aw12 != null) ? aw12 : 'ON PROGRESS';
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
    var aw12 = response2.data;
	$scope.aw10showstatus = (aw12 != null) ? aw12 : 'ON PROGRESS';
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
    var aw12 = response2.data;
	$scope.aw11showstatus = (aw12 != null) ? aw12 : 'ON PROGRESS';
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
    //url: "./output/status/awsprodbvt.json",	
    headers: {
        "Content-Type": "application/json"
    }
}
$http(awsstatus12).then(function(response2) {
    var aw12 = response2.data;
    $scope.aw12showstatus = (aw12 != null) ? aw12 : 'ON PROGRESS';	
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
   var az1 = response2.data;
	$scope.az1showstatus = (az1.trim().length !== 0) ? az1 : 'ON PROGRESS';
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
    var az2 = response2.data;
	$scope.az2showstatus = (az2.trim().length !== 0) ? az2 : 'ON PROGRESS';
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
    var az1 = response2.data;
	$scope.az3showstatus = (az1.trim().length !== 0) ? az1 : 'ON PROGRESS';
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
   var az1 = response2.data;
	$scope.az4showstatus = (az1.trim().length !== 0) ? az1 : 'ON PROGRESS';
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
    var az1= response2.data;
	$scope.az5showstatus = (az1.trim().length !== 0) ? az1 : 'ON PROGRESS';
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
    var az1 = response2.data;
	$scope.az6showstatus = (az1.trim().length !== 0) ? az1 : 'ON PROGRESS';
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
    var o1 = response2.data; 
    $scope.other1showstatus = (o1 != null) ? o1 : 'ON PROGRESS';
	 
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
    var o1 = response2.data;
	$scope.other2showstatus = (o1 != null) ? o1 : 'ON PROGRESS';
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
    var o1 = response2.data;
	$scope.other3showstatus = (o1 != null) ? o1 : 'ON PROGRESS';
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
   var o1 = response2.data;
	$scope.other4showstatus = (o1 != null) ? o1 : 'ON PROGRESS';
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
//////////////////////////////////fix 10.1////////////////////////////////				
var fix101 = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/date/101.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix101).then(function(response2) {
    $scope.fix101date = new Date(response2.data);
}, );
var fix101s = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/status/101.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix101s).then(function(response2) {
    var fix1 = response2.data;
    $scope.fix101status = (fix1 != null) ? fix1 : 'ON PROGRESS';	
  
}, );
var fix101b = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/buildno/101.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix101b).then(function(response2) {
    $scope.fix101build = response2.data;
}, );	
		
///////////////////////////////////fix10.5//////////////////////
		
var fix105 = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/date/105.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix105).then(function(response2) {
    $scope.fix105date = new Date(response2.data);
}, );
var fix105s = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/status/105.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix105s).then(function(response2) {
    var fix1s = response2.data;
	$scope.fix105status = (fix1 != null) ? fix1 : 'ON PROGRESS'	
}, );
var fix105b = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/buildno/105.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix105b).then(function(response2) {
    $scope.fix105build = response2.data;
}, );
//////////////////////////////// fix 10.7/////////////////////////
		
var fix107 = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/date/107.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix107).then(function(response2) {
    $scope.fix107date = new Date(response2.data);
}, );
var fix107s = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/status/107.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix107s).then(function(response2) {
   var fix1 = response2.data;
	 $scope.fix107status = (fix1 != null) ? fix1 : 'ON PROGRESS'	
}, );
var fix107b = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/buildno/107.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix107b).then(function(response2) {
    $scope.fix107build = response2.data;
}, );		
		
		
		
////////////////////////////////////////////////fix 10.11/////////////////////////
var fix1011 = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/date/1011.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix1011).then(function(response2) {
    $scope.fix1011date = new Date(response2.data);
}, );
var fix1011s = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/status/1011.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix1011s).then(function(response2) {
     var fix1 = response2.data;
	$scope.fix1011status = (fix1 != null) ? fix1 : 'ON PROGRESS'	
}, );
var fix1011b = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/buildno/1011.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix1011b).then(function(response2) {
    $scope.fix1011build = response2.data;
}, );		

		
		
var bfix1011 = {
    method: 'GET',
    url: "./output/buildjobs/basbuild/date/1011.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(bfix1011).then(function(response2) {
    $scope.bfix1011date = new Date(response2.data);
}, );
var bfix1011s = {
    method: 'GET',
    url: "./output/buildjobs/basbuild/status/1011.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(bfix1011s).then(function(response2) {
     var fix1= response2.data;
	 $scope.bfix1011status = (fix1 != null) ? fix1 : 'ON PROGRESS'	
}, );
var bfix1011b = {
    method: 'GET',
    url: "./output/buildjobs/basbuild/buildno/1011.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(bfix1011b).then(function(response2) {
    $scope.bfix1011build = response2.data;
}, );		
//////////////////////////////////////////fix 10.12////////////////////////////////////
		
var fix1012 = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/date/1012.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix1012).then(function(response2) {
    $scope.fix1012date = new Date(response2.data);
}, );
var fix1012s = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/status/1012.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix1012s).then(function(response2) {
    var fix1= response2.data;
	 $scope.fix1012status = (fix1 != null) ? fix1 : 'ON PROGRESS'	
}, );
var fix1012b = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/buildno/1012.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix1012b).then(function(response2) {
    $scope.fix1012build = response2.data;
}, );		

		
var bfix1012 = {
    method: 'GET',
    url: "./output/buildjobs/basbuild/date/1012.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(bfix1012).then(function(response2) {
    $scope.bfix1012date = new Date(response2.data);
}, );
var bfix1012s = {
    method: 'GET',
    url: "./output/buildjobs/basbuild/status/1012.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(bfix1012s).then(function(response2) {
    var fix1 = response2.data;
	$scope.bfix1012status = (fix1 != null) ? fix1 : 'ON PROGRESS'	
}, );
var bfix1012b = {
    method: 'GET',
    url: "./output/buildjobs/basbuild/buildno/1012.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(bfix1012b).then(function(response2) {
    $scope.bfix1012build = response2.data;
}, );		
///////////////////////////////////////fix 10.15//////////////////////////////
		
var fix1015 = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/date/1015.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix1015).then(function(response2) {
    $scope.fix1015date = new Date(response2.data);
}, );
var fix1015s = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/status/1015.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix1015s).then(function(response2) {
     var fix1= response2.data;
	$scope.fix1015status = (fix1 != null) ? fix1 : 'ON PROGRESS'	
}, );
var fix1015b = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/buildno/1015.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(fix1015b).then(function(response2) {
    $scope.fix1015build = response2.data;
}, );		

		
var bfix1015 = {
    method: 'GET',
    url: "./output/buildjobs/basbuild/date/1015.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(bfix1015).then(function(response2) {
    $scope.bfix1015date = new Date(response2.data);
}, );
var bfix1015s = {
    method: 'GET',
    url: "./output/buildjobs/basbuild/status/1015.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(bfix1015s).then(function(response2) {
    var fix1 = response2.data;
	$scope.bfix1015status = (fix1 != null) ? fix1 : 'ON PROGRESS'	
}, );
var bfix1015b = {
    method: 'GET',
    url: "./output/buildjobs/basbuild/buildno/1015.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(bfix1015b).then(function(response2) {
    $scope.bfix1015build = response2.data;
}, );		
//////////////////////////////////////////trunk//////////////////////////
		
var trunk = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/date/trunk.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(trunk).then(function(response2) {
    $scope.trunkdate = new Date(response2.data);
}, );
var trunks = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/status/trunk.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(trunks).then(function(response2) {
    var fix1 = response2.data;
	$scope.trunkstatus=(fix1 != null) ? fix1 : 'ON PROGRESS'	
}, );
var trunkb = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/buildno/trunk.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(trunkb).then(function(response2) {
    $scope.trunkbuild = response2.data;
}, );
		
		
var trunkc = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/date/trunkc.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(trunkc).then(function(response2) {
    $scope.trunkcdate = new Date(response2.data);
}, );
var trunkcs = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/status/trunkc.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(trunkcs).then(function(response2) {
   var fix1 = response2.data;
    $scope.trunkcstatus = (fix1 != null) ? fix1 : 'ON PROGRESS'	
  
}, );
var trunkcb = {
    method: 'GET',
    url: "./output/buildjobs/fixbuild/buildno/trunkc.json",
    headers: {
        "Content-Type": "application/json"
    }
}
$http(trunkcb).then(function(response2) {
    $scope.trunkcbuild = response2.data;
}, );		
		
		
		
		
		
/////////////////////////////AWS TEST JOBS///////////////////////////////////////
var awtest1 = {
    method: 'GET',
    url: "./output/webjson/testno/awsdevbvt.txt",
   }
$http(awtest1).then(function(response2) {
    $scope.aw1 = response2.data;
    var t =  $scope.aw1	
     if(t.trim().length !== 0){
    const myArray = t.split(" ");
    $scope.awtest1total = myArray[0];
    $scope.awtest1fail = myArray[3];
    $scope.awtest1skip = myArray[5];
    $scope.awtest1pass = Number(myArray[0])-Number(myArray[3])-Number(myArray[5]);}
	else{
		$scope.awtest1total = "N/A";
    $scope.awtest1fail = "N/A";
    $scope.awtest1skip = "N/A";
    $scope.awtest1pass = "N/A";
	}
}, );			
	
var awtest3 = {
    method: 'GET',
    url: "./output/webjson/testno/awsdevbvtsplitrun.txt",
   }
$http(awtest3).then(function(response2) {
    $scope.aw3 = response2.data;
    var t =  $scope.aw3	
     if(t.trim().length !== 0){
    const myArray = t.split(/\r?\n/);
    $scope.awtest3pass = myArray[2];
    $scope.awtest3fail = myArray[1];
    $scope.awtest3skip = myArray[3];
    $scope.awtest3total = Number(myArray[1])+Number(myArray[2])+Number(myArray[3])+Number(myArray[4]);	}
		    else{
		$scope.awtest3total = "N/A";
    $scope.awtest3fail = "N/A";
    $scope.awtest3skip = "N/A";
    $scope.awtest3pass = "N/A";
	}
}, );		
		
	
var awtest4 = {
    method: 'GET',
    url: "./output/webjson/testno/awsdevbvtsplitrunpartial.txt",
   }
$http(awtest4).then(function(response2) {
    $scope.aw4 = response2.data;
    var t =  $scope.aw4	
     if(t.trim().length !== 0){
    const myArray = t.split(/\r?\n/);
    $scope.awtest4pass = myArray[2];
    $scope.awtest4fail = myArray[1];
    $scope.awtest4skip = myArray[3];
    $scope.awtest4total = Number(myArray[1])+Number(myArray[2])+Number(myArray[3])+Number(myArray[4]);}
	else{
		$scope.awtest4total = "N/A";
    $scope.awtest4fail = "N/A";
    $scope.awtest4skip = "N/A";
    $scope.awtest4pass = "N/A";
	}
	
}, );	

		
var awtest5 = {
    method: 'GET',
    url: "./output/webjson/testno/awspreprodbvt.txt",
   }
$http(awtest5).then(function(response2) {
    $scope.aw5 = response2.data;
    var t =  $scope.aw5	
     if(t.trim().length !== 0){
    const myArray = t.split(" ");
    $scope.awtest5total = myArray[0];
    $scope.awtest5fail = myArray[3];
    $scope.awtest5skip = myArray[5];
    $scope.awtest5pass = Number(myArray[0])-Number(myArray[3])-Number(myArray[5]);}
	else{
		$scope.awtest5total = "N/A";
    $scope.awtest5fail = "N/A";
    $scope.awtest5skip = "N/A";
    $scope.awtest5pass = "N/A";
	}	
}, );		
		
var awtest7 = {
    method: 'GET',
    url: "./output/webjson/testno/awsstagebvt.txt",
   }
$http(awtest7).then(function(response2) {
    $scope.aw7 = response2.data;
    var t =  $scope.aw7	
     if(t.trim().length !== 0){
    const myArray = t.split(" ");
    $scope.awtest7total = myArray[0];
    $scope.awtest7fail = myArray[3];
    $scope.awtest7skip = myArray[5];
    $scope.awtest7pass = Number(myArray[0])-Number(myArray[3])-Number(myArray[5]);}
	else{
		$scope.awtest7total = "N/A";
    $scope.awtest7fail = "N/A";
    $scope.awtest7skip = "N/A";
    $scope.awtest7pass = "N/A";
	}	
}, );		

	
var awtest8 = {
    method: 'GET',
    url: "./output/webjson/testno/awsstagebvtsplitrun.txt",
   }
$http(awtest8).then(function(response2) {
    $scope.aw8 = response2.data;
    var t =  $scope.aw8	
     if(t.trim().length !== 0){
    const myArray = t.split(/\r?\n/);
    $scope.awtest8pass = myArray[2];
    $scope.awtest8fail = myArray[1];
    $scope.awtest8skip = myArray[3];
    $scope.awtest8total = Number(myArray[1])+Number(myArray[2])+Number(myArray[3])+Number(myArray[4]);}
	else{
		$scope.awtest8total = "N/A";
    $scope.awtest8fail = "N/A";
    $scope.awtest8skip = "N/A";
    $scope.awtest8pass = "N/A";
	}	
}, );
		
var awtest9 = {
    method: 'GET',
    url: "./output/webjson/testno/awspreprodbvtspro.txt",
   }
$http(awtest9).then(function(response2) {
    $scope.aw9 = response2.data;
    var t =  $scope.aw9	 
    if(t.trim().length !== 0){
    const myArray = t.split(" ");
    $scope.awtest9total = myArray[0];
    $scope.awtest9fail = myArray[3];
    $scope.awtest9skip = myArray[5];
    $scope.awtest9pass = Number(myArray[0])-Number(myArray[3])-Number(myArray[5]);}
	else{
		$scope.awtest9total = "N/A";
    $scope.awtest9fail = "N/A";
    $scope.awtest9skip = "N/A";
    $scope.awtest9pass = "N/A";
	}	
}, );		
		
	
var awtest11 = {
    method: 'GET',
    url: "./output/webjson/testno/awssprosplitrun.txt",
   }
$http(awtest11).then(function(response2) {
    $scope.aw11 = response2.data;
    var t =  $scope.aw11
     if(t.trim().length !== 0){
    const myArray = t.split(/\r?\n/);
    $scope.awtest11pass = myArray[2];
    $scope.awtest11fail = myArray[1];
    $scope.awtest11skip = myArray[3];
    $scope.awtest11total = Number(myArray[1])+Number(myArray[2])+Number(myArray[3])+Number(myArray[4]);	}
	else{
		$scope.awtest11total = "N/A";
    $scope.awtest11fail = "N/A";
    $scope.awtest11skip = "N/A";
    $scope.awtest11pass = "N/A";
	}
}, );			
			
var awtest12 = {
    method: 'GET',
    url: "./output/webjson/testno/awsintbvt.txt",
   }
$http(awtest12).then(function(response2) {
    $scope.aw12 = response2.data;
    var t =  $scope.aw12
    if(t.trim().length !== 0){
    const myArray = t.split(" ");
    $scope.awtest12total = myArray[0];
    $scope.awtest12fail = myArray[3];
    $scope.awtest12skip = myArray[5];
    $scope.awtest12pass = Number(myArray[0])-Number(myArray[3])-Number(myArray[5]);}
	else{
		$scope.awtest12total = "N/A";
    $scope.awtest12fail = "N/A";
    $scope.awtest12skip = "N/A";
    $scope.awtest12pass = "N/A";
	}
}, );		
////////////////////////////////////////////AZURE JOBS////////////////////		
		
		
		
		
var aztest1 = {
    method: 'GET',
    url: "./output/webjson/testno/azurepreprodbvt.txt",
   }
$http(aztest1).then(function(response2) {
    $scope.az1 = response2.data;
    var t =  $scope.az1	
     if(t.trim().length !== 0){
    const myArray = t.split(" ");
    
    $scope.aztest1total = myArray[0];
    $scope.aztest1fail = myArray[3];
    $scope.aztest1skip = myArray[5];
    $scope.aztest1pass = Number(myArray[0])-Number(myArray[3])-Number(myArray[5]);}
	else{
		$scope.aztest1total = "N/A";
    $scope.aztest1fail = "N/A";
    $scope.aztest1skip = "N/A";
    $scope.aztest1pass = "N/A";
	}
	
    
}, );
		
var aztest2 = {
    method: 'GET',
    url: "./output/webjson/testno/azurepreprodbvtspro.txt",
   }
$http(aztest2).then(function(response2) {
    $scope.az2 = response2.data;
    var t =  $scope.az2	
     if(t.trim().length !== 0){
    const myArray = t.split(" ");
    $scope.aztest2total = myArray[0];
    $scope.aztest2fail = myArray[3];
    $scope.aztest2skip = myArray[5];
    $scope.aztest2pass = Number(myArray[0])-Number(myArray[3])-Number(myArray[5]);}
	else{
		$scope.aztest2total = "N/A";
    $scope.aztest2fail = "N/A";
    $scope.aztest2skip = "N/A";
    $scope.aztest2pass = "N/A";
	}
    
}, );
		
var aztest4 = {
    method: 'GET',
    url: "./output/webjson/testno/azurestagebvt.txt",
   }
$http(aztest1).then(function(response2) {
    $scope.az4 = response2.data;
    var t =  $scope.az4	
     if(t.trim().length !== 0){
    const myArray = t.split(" ");
    $scope.aztest4total = myArray[0];
    $scope.aztest4fail = myArray[3];
    $scope.aztest4skip = myArray[5];
    $scope.aztest4pass = Number(myArray[0])-Number(myArray[3])-Number(myArray[5]);}
	else{
		$scope.aztest4total = "N/A";
    $scope.aztest4fail = "N/A";
    $scope.aztest4skip = "N/A";
    $scope.aztest4pass = "N/A";
	}
    
}, );
		
	
var aztest5 = {
    method: 'GET',
    url: "./output/webjson/testno/azuresprosplitrun.txt",
   }
$http(aztest5).then(function(response2) {
    $scope.az5 = response2.data;
    var t =  $scope.az5
     if(t.trim().length !== 0){
    const myArray = t.split(/\r?\n/);
    $scope.aztest5pass = myArray[2];
    $scope.aztest5fail = myArray[1];
    $scope.aztest5skip = myArray[3];
    $scope.aztest5total = Number(myArray[1])+Number(myArray[2])+Number(myArray[3])+Number(myArray[4]);}
	else{
		$scope.aztest5total = "N/A";
    $scope.aztest5fail = "N/A";
    $scope.aztest5skip = "N/A";
    $scope.aztest5pass = "N/A";
	}	
}, );			
		
		
		
		
////////////////////////////////////////////////////////////////		
		
		
		
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
          function connectorTabs(evt,tabName) {
            var i;
            var x = document.getElementsByClassName("wmiotabtype");
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
            }
           // document.getElementById(tabName).style.display = "block";
	   var tablinks = document.getElementsByClassName("t1 tablinks");
  	   for (i = 0; i < tablinks.length; i++) {
   		 tablinks[i].className = tablinks[i].className.replace(" active", "");
 	    }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";	  

            if(tabName === "TESTJOBS"){
              document.getElementById('defaultOpen2').click();
            }
		 
	     if(tabName === "BUILDJOBS"){
              document.getElementById('defaultOpen3').click();
            }  
		   
          }
          //// Get the element with id="defaultOpen" and click on it
          //  document.getElementById("defaultOpen").Click();
	
	 function connectorTabs2(evt,tabName) {
            var i;
            var x = document.getElementsByClassName("wmiotabtype2");
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
            }
           // document.getElementById(tabName).style.display = "block";
	   var tablinks = document.getElementsByClassName("t2 tablinks");
  	   for (i = 0; i < tablinks.length; i++) {
   		 tablinks[i].className = tablinks[i].className.replace(" active", "");
 	    }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
		  if(tabName === "AWSTEST"){
		document.getElementById("defaultOpen4").click();	   }
           
          }
	
	 function connectorTabs3(evt,tabName) {
            var i;
            var x = document.getElementsByClassName("wmiotabtype3");
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
            }
         //   document.getElementById(tabName).style.display = "block";
	   var tablinks = document.getElementsByClassName("t3 tablinks");
  	   for (i = 0; i < tablinks.length; i++) {
   		 tablinks[i].className = tablinks[i].className.replace(" active", "");
 	    }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
           
          }



function connectorTabsv(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontentv");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tv tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});

	


		
