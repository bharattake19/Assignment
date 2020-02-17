Conver Bellow Topics
====================
1.Router navigation with URL param parameter
2.routerLinkActive
3.routerLinkActiveOptions
4.routerLink
5.this.route.snapshot.params
6.this.route.params.subscribe
7.paramSubscription.unsubscribe()
8.ngx-bootstrap/dropdown
9.Install Bootstrap for design UI
10.queryparam,fragment

File Details
============
1.app.module.ts
    -Create routing in appRoutes and register in RouterModule.forRoot(appRoutes)
2.users.component.html
    -Using loops show user details
    -load Data button load perticular [routerLink]="['/users','100','Bharat']" details
    -load Dynamic data value="Load Dynamic Data" [routerLink]="['/users',userId,userName]"
3.app.module.html
    -Nav bar (Home,Servers,Users)
    -Model Popup design and hide model popup.
    -load user and server list in Router outlet
4.server.component.ts
    -create server array and bind into html file.
5.edit-server.component.ts
    -this.queryString=this.route.snapshot.queryParams;
    -this.fragmentValue=this.route.snapshot.fragment;
6.servers.component.html
    -Show Server list and last give edit button
    -Edit button call [queryParams]="{allowEdit:'1'}" fragment="loading"
7.users.component.ts
    -id: this.route.snapshot.params['Id'],
    -name: this.route.snapshot.params['Name']
    -this.user.id=param['Id']
    -this.user.name=param['Name']
