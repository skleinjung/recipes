app.controller('HomeController', function($scope, pageData) {
    $scope.name = 'HomeController';
    //$scope.params = $routeParams;
    $scope.recipe = pageData;
});


app.controller("RecipeListController", function($scope, $http, RecipeService) {
    $scope.status = "";
    $scope.recipes = [];

    getRecipes();

    function getRecipes() {
        RecipeService.getAllRecipes()
            .success(function(recipes) {
                $scope.recipes = recipes
            })
            .error(function(error) {
                $scope.status = "Unable to load recipe data: " + error.message;
            });
    }
});

app.controller('RecipeDetailsController', function($scope, $route, RecipeService) {
    $scope.status = "";
    $scope.recipe = [];

    getRecipeDetails();

    function getRecipeDetails() {
        RecipeService.getRecipe($route.current.params.recipeId)
            .success(function(recipe) {
                $scope.recipe = recipe;
            })
            .error(function(error) {
                $scope.status = "Unable to load recipe data: " + error.message;
            });
    }

    //$scope.recipe = pageData;
});
