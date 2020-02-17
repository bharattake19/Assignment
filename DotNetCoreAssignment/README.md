To run this application install Node Package.

In this application cover bellow topics
=======================================
1.CRUD Operation
2.Implement Core API
3.User registration
4.User Login and Admin Login
5.After login getting user token
6.Use interceptor, Auth Guard, Helper methods, error interceptor use @Injectable
7.Create shared component to loader.
8.In Core API use SQL server as backend database.
9.Routing and Navigation and use AuthGuard, pass parameter 
10.Login and Logout
11.Use shared component
12.Barrer token base authentication
13.Implement bootstrap template show

File Details
============
1.addblogs.component.ts is used to create blog and store.
    -In this file on ngOnInit() check user parameter, if present then go edit mode otherwise add new.
    -Get category dropdown list from api call.
    -for Edit then getPostDetailsById and bind to form
    -onSubmit check add ot update base on that call addPost or editPost methods.
    -ngOnInit() set categories values.

 2.post.service.ts - Is used to Add post, Update Post, Delete post, get all post, get post by post id
 3.user.service.ts - Is used to register user.
 4.athentication.service.ts - Is is used to login and logout user
 5.login.response.ts - Create model to response.

Folder Structure
================
1._components
    -Create alert.componet.html file to show alert message and inject into other component.
2._helpers
    -auth.guard.ts - cacanActivate method check user details present or not then return true or false
    -error.interceptor.ts-  ErrorInterceptor implements HttpInterceptor intercept method catch error log and call logout method.
    -jwt.interceptor.ts- Is use to create interseptor to add auth token to every request header.
3._models
    -create category,post and user model
4._service
    -alert.service.ts   - show alert message
    -post.service.ts - Post CRUD operation
    -user.service.ts - Register use details
5.app.component.html- Top Nav bar and router outlet
6.register.component.ts - Create user details

Pending
========
1.Need to implement comment on single post
2.Edit and Delete own post only
3.Admin can delete, edit post.
4.Role base access.
5.NgRx to post list
