1.To run this application install Node Package.

In this application cover bellow concepts
=========================================
1.CRUD Operation
2.Routing and Navigation
3.HTTP Interceptor for User Token base authentication
4.Auth Guard
5.Error Handling
6.Create API using Google firebase service to Create user and Authenticate user.
7.After login store authontication token in localStorage.
8.Next time check in localStorage if user present then check login expiry time, all valid then auto login.
9.After login set logOutTime, after inteval application automatically logout and redirect to login page.
10.Base on authentication hide and show menues like Save data, Fetch data, Recipes,Authenticate menus.
11.LogOut method clear all localStorage and redirect to login page and reset expiry time.
12.ngOnDestroy unsubsribe user this.userSub.unsubscribe();
13.Create share component for loading spinner.
14.Create data-storage.service to store and fetch recipe details.
15.After edit, details reflect into list, use ActivatedRouteSnapshot and RouterStateSnapshot.

File details
============
1.RecipeService
    -setRecipes
    -getRecipes
    -getRecipe
    -addRecipe
    -updateRecipe
    -deleteRecipe
2.Create dynamic Ingredient, add ingradient button push element in ingredients array, and bind into view.
3.user.model.ts file, create user model, and create get property for token get token(), In this token we check expiry time details         return token or return  null.
3.Application menus store in header.component.html file.
4.On details page, on edit button pass URL parameter, read that paramter in recipe.edit.component.ts file.
5.In edit page, after fetching param details load user control value and apply validation. 
6.In app.component.ts file ngOnInit() {this.authSer.autoLogin(); }
7.Create spinner using css file as loading-spinner.component.css file and intect into loading component file.
8.recipe-details.component.html to show detials of list.
