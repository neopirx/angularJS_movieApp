var app = angular.module('moviesApp', []);


app.controller('MovieController', function ($scope, $http) {


    $scope.detailsMovie = function(movie) {
        var url = 'http://www.myapifilms.com/imdb/idIMDB?title=' + movie.title + '&token=80c0cb73-2af5-4f38-8ba1-9309a2146cbc&format=json&language=en-us&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=2&exactFilter=0&limit=10&forceYear=0&trailers=0&movieTrivia=0&awards=0&moviePhotos=0&movieVideos=0&actors=0&biography=0&uniqueName=0&filmography=0&bornAndDead=0&starSign=0&actorActress=0&actorTrivia=0&similarMovies=0&adultSearch=0&goofs=0&keyword=0&quotes=0&fullSize=1&companyCredits=0&filmingLocations=0';

        $http.get(url)
        .then(function(data){
           $scope.details = data;
        });
    }
    
    $scope.favouriteMovies = [];

    $scope.addToFavourites = function(movie) {
        $scope.favouriteMovies.push(movie);
    }

    $scope.searchMovies = function() {

        var title = $scope.searchByTitle;

        var url = 'http://www.myapifilms.com/imdb/idIMDB?title=' + title + '&token=80c0cb73-2af5-4f38-8ba1-9309a2146cbc&format=json&language=en-us&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=2&exactFilter=0&limit=10&forceYear=0&trailers=0&movieTrivia=0&awards=0&moviePhotos=0&movieVideos=0&actors=0&biography=0&uniqueName=0&filmography=0&bornAndDead=0&starSign=0&actorActress=0&actorTrivia=0&similarMovies=0&adultSearch=0&goofs=0&keyword=0&quotes=0&fullSize=1&companyCredits=0&filmingLocations=0';

        $http.get(url)
        .then(function(data){
            $scope.movies = data.data.data.movies;
            console.log(data);
        });
    }

    $scope.removeMovie = function(index) {
        $scope.movies.splice(index, 1);
    }

    $scope.removeFavouriteMovie = function(index) {
        $scope.favouriteMovies.splice(index, 1);
    }

    $scope.addMovie = function() {
        var newMovie = {
            title: $scope.movie.title,
            episode_number: $scope.movie.year,
            main_characters: $scope.movie.rating,
            description: $scope.movie.plot
        };
        $scope.movies.push(newMovie);
    }

    $scope.selectMovie = function(movie) {
        $scope.movie = movie;
    }

    $scope.saveEditMovie = function() {
        alert($scope.movie.title);
    }
});