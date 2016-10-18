var app = angular.module('Xclone', ['ngAnimate']);

app.controller('app', function($scope) {
  $scope.newComment = {};
  $scope.newPost = {};
  $scope.view = {};
  $scope.view.search = "";
  $scope.view.newPostVisible = false;
  $scope.view.sortTypes = ['votes', 'date', 'title'];
  $scope.view.currentSort = $scope.view.sortTypes[0];
  $scope.view.orderVal = '-votes';
  $scope.view.posts = [
    {
      title: "9/11 cleanup crews found a shipwreck that dated back to 1773",
      author: "GallowBoob",
      img: "http://i.imgur.com/bFUmoNy.jpg",
      description: "This 32ft-long vessel was found in July 2010 and probably used along with other debris to fill in land to extend New York City into the Hudson River. An anchor weighing seven stone (98 lbs) was also discovered at the site, although investigators said it was unclear whether it belonged to the newly-unearthed ship.",
      date: moment().subtract(3, 'days').subtract(8, 'hours').calendar(),
      votes: 12,
      comments: [
        {
          author: "John Snow",
          text: "Winter is coming."
        }
      ],
      showComments: false,
      showNewComments: false
    },
    {
      title: "London Zoo gorilla escaped 'through open cage door'",
      author: "Nicola Harley",
      img: "http://www.telegraph.co.uk/content/dam/news/2016/10/14/gorilla3-large_trans++PXZx3RQZtscZnpUqvgxUx23aDu2EzoHtePRkZrtWfLs.jpg",
      description: "A large silverback gorilla is believed to have escaped from its enclosure at London Zoo after a cage door was left open. The zoo was put into lockdown on Thursday after the 29-stone gorilla, called Kumbuka, escaped from his pen. An investigation has been launched into the incident but the zoo has so far refused to reveal how the escape happened.",
      date: moment().subtract(2, 'hours').calendar(),
      votes: 10,
      comments: [
        {
          author: "Matt Donovan",
          text: "That's Crazyyy"
        }, {
          author: "Keith",
          text: "WOW!"
        }
      ],
      showComments: false,
      showNewComments: false
    },
    {
      title: "And that is why I succeed.",
      author: "Michael Jordan",
      img: "https://i.reddituploads.com/b29ca0a2da85457194c0372bafeb0537?fit=max&h=1536&w=1536&s=da16d632a6b061c447b15cafc67a2b74",
      description: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
      date: moment().subtract(7, 'hours').calendar(),
      votes: 0,
      comments: [],
      showComments: false,
      showNewComments: false
    }
  ];
  $scope.toggleNewPostView = function() {
    $scope.view.newPostVisible = !$scope.view.newPostVisible;
    $scope.view.isClicked =  !$scope.view.isClicked;
  };

  $scope.updateVotes = function(post, change) {
    post.votes += change;
  };

  $scope.voteColorClass = function(post) {
    if (post.votes > 0) {
      return "positive";
    } else if (post.votes < 0) {
      return "negative";
    } else {
      return "";
    }
  };

    $scope.setOrderVal = function(newVal) {
      $scope.view.currentSort = newVal;
      $scope.view.orderVal = newVal === "title" ? newVal : '-' + newVal;
    };

  $scope.toggleCommentView = function(post) {
    post.showComments = !post.showComments;
  };

  $scope.toggleNewCommentView = function(post) {
    $scope.view.posts.forEach(function(otherPost) {
      if (otherPost !== post) {
        otherPost.showNewComments = false;
      } else {
        otherPost.showNewComments = !otherPost.showNewComments;
      }
    });

    $scope.newComment = {};
  };

  $scope.addPost = function(post) {
    post.date = moment().calendar();
    post.votes = 0;
    post.comments = [];
    post.showComments = false;
    post.showNewComments = false;
    $scope.view.newPostVisible = false;
    $scope.newPost = {};
    $scope.view.posts.push(post);
    $scope.postForm.$setPristine();
    $scope.postForm.$setUntouched();
  };

  $scope.addComment = function(post, comment) {
    if (comment.author && comment.text) {
      post.comments.push(comment);
      post.showNewComments = false;
      $scope.newComment = {};
    }
    else {
      alert('Please Complete the Form');
    }
  };
});
