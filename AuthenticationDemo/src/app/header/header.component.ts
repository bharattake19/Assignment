import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { authservice } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthonticate: boolean = false;
  private userSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: authservice
  ) {

  }
  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthonticate = !!user;//OR !user ? false : true;
      console.log(!user);
      console.log(!!user);
    });
  }
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  onLogout(){
    this.authService.logout();
  }
}
