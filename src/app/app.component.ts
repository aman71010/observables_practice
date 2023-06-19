import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { OnInit, OnDestroy } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  
  private obsSubscription: Subscription;
  constructor(private userService: UserService){}

  isActivated: boolean = false;

  ngOnInit(): void {
      
    this.obsSubscription =  this.userService.activatedEmitter.subscribe((activateUser: boolean) => {
      console.log("Hii Aman!");
      this.isActivated = activateUser;
    })

  }

  ngOnDestroy(): void {
      this.obsSubscription.unsubscribe();
  }
}
