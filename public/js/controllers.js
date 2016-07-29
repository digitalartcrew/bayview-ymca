app.controller("NavCtrl", function($rootScope, $scope, $http, $location, $state) {
  
  $scope.logout = function() {
    $http.post("/logout")
      .success(function() {
        $rootScope.currentUser = null;
        $location.url("/login");
      });
  };
});

app.controller('redditController',function($scope){
  $scope.posts = [{imageUrl:"http://placehold.it/150x150", 
    title:"Practing Angular", 
    author:"Donte Burney",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam atque ut modi distinctio voluptatibus exercitationem recusandae, dolore iure laborum nemo quis. Esse nesciunt dolorem magni fuga aspernatur voluptatum officiis consectetur!",
    voteCount:2,
    display: moment().calendar(),
    comments: [{author:"Aaron", text: "Sweet!"},{author:"Maksim", text: "Great article"}]

    },{imageUrl:"http://placehold.it/150x150", 
    title:"Practing JavaScript", 
    author:"Brian Burney",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam atque ut modi distinctio voluptatibus exercitationem recusandae, dolore iure laborum nemo quis. Esse nesciunt dolorem magni fuga aspernatur voluptatum officiis consectetur!",
    voteCount:5,
    display: moment().calendar(),
    comments: [{author:"Sam", text: "Sweet!"},{author:"Matt", text: "Great article"}]
    },
    {imageUrl:"http://placehold.it/150x150", 
    title:"Practing HTML", 
    author:"Kechia Burney",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam atque ut modi distinctio voluptatibus exercitationem recusandae, dolore iure laborum nemo quis. Esse nesciunt dolorem magni fuga aspernatur voluptatum officiis consectetur!",
    voteCount:3,
    display: moment().calendar(),
    comments: [{author:"Donte", text: "Sweet!"},{author:"Mark", text: "Great article"}]
  }];

  $scope.post = {};
$scope.comment = {};




$scope.voteUp = function (post) {
post.voteCount++;
};

$scope.voteDown = function (post){
post.voteCount--;
};

$scope.postForm = false;
    $scope.toggle = function() {
        $scope.postForm = !$scope.postForm;
    };

    $scope.postComment = false;
     $scope.toggle2 = function() {
        this.postComment = !this.postComment;
        this.showComment = false;
    };

    $scope.showComment = false;
     $scope.toggle3 = function() {
        this.showComment = !this.showComment;
        this.postComment = false;
    };

    $scope.addComment = function(post, comment){
    post.comments.push(comment);
    this.postComment = false;
    $scope.comment = {};
    };

    $scope.addPost = function(post){
    // post.date = new Date();
    post.date = moment();
    post.display = moment().calendar(); 
    post.comments = [];
    post.voteCount = 0;
        $scope.posts.push(post);
        $scope.post = {};
  $scope.postForm = false;
};
  

  $scope.predicate="date";
  // $scope.reverse = true;
  $scope.order =
  function(predicate){
    $scope.reverse = 
    ($scope.predicate === predicate)?
    !$scope.reverse : false;
      $scope.predicate = predicate;
    };




});


app.controller("FormCtrl", function($rootScope, $scope, $http, $location, $state, $uibModal, $log) {

  //Modal Form Begins
   $scope.locations = ['New York', 'Chicago', 'Japan','Berlin'];
   $scope.locate = false;
  
   $scope.locationPopUp = function(){
    if(!$scope.locate){
      $scope.locate = true;
    }else{
      $scope.locate =false;
    }
   };

  //Modal Form Ends

  $scope.openMessage = function(side){
    $("#sidebar-wrapper").css("width","928px");
    $scope.stuffs = [];
    $scope.stuffs.push({image: 'http://placehold.it/528x528', content: 'This is it'});
  
  };

  $scope.closeMessage = function(){
    $("#sidebar-wrapper").css("width","0px");
  };

  $scope.inbox = [{image:"http://placehold.it/50x50", time:"2m ago", message:"Theresa Delgado sent you a from", location:"Kingston Ave, Brooklyn"},
  {image:"http://placehold.it/50x50", time:"2m ago", message:"Theresa Delgado sent you a from", location:"Kingston Ave, Brooklyn"},
  {image:"http://placehold.it/50x50", time:"2m ago", message:"Theresa Delgado sent you a from", location:"Kingston Ave, Brooklyn"},
  {image:"http://placehold.it/50x50", time:"2m ago", message:"Theresa Delgado sent you a from", location:"Kingston Ave, Brooklyn"},
  {image:"http://placehold.it/50x50", time:"2m ago", message:"Theresa Delgado sent you a from", location:"Kingston Ave, Brooklyn"},
  {image:"http://placehold.it/50x50", time:"2m ago", message:"Theresa Delgado sent you a from", location:"Kingston Ave, Brooklyn"},
  {image:"http://placehold.it/50x50", time:"2m ago", message:"Theresa Delgado sent you a from", location:"Kingston Ave, Brooklyn"}];
});



app.controller("MapCtrl", function($rootScope, $scope, $http, $location, $state) {
  $scope.formData = {};




   

  $scope.title = "Map";


  $scope.posts = [{
    title: "2 Israeli indicted in arson that killed Palestian toddler, p",
    news: "CNN",
    hours: "3 hours ago",
    location: "Jerusalem"
  },
  {
    title: "Army prostestors rally to support Oregon rancher",
    news: "CNN",
    hours: "6 hours ago",
    location: "Oregon"
  },
  {
    title: "Mexican mayor slain one day after taking office",
    news: "CNN",
    hours: "8 hours ago",
    location: "Tehran"
  },
  {
    title: "Protests in Tehran after Saudis execute cleric",
    news: "CNN",
    hours: "3 hours ago",
    location: "Tehran"
  }];
});

app.controller("SignUpCtrl", function($scope, $http, $rootScope, $location, $state) {
 $scope.signup = function(user) {
  if (user.password == user.password2) {
    console.log('Almost there!');
    $http.post('/signup', user)
    .success(function(user) {
      $rootScope.currentUser = user;
      $state.go('form.map');
    });
  }
};
});

app.controller("LoginCtrl", function($scope,$http,Auth, $rootScope, $state, $cookies) {

  
$scope.login = function(user) {
    $http.post('/login', user)
      .success(function(response) {
        $rootScope.currentUser = response;
        $state.go('form.map');
      });
  };


});



