import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit(){
    // this.firstObsSubscription = interval(1000).subscribe((count: number) => {
    //   console.log(count);
    // })

    const customObservableInterval =  Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        if(count >= 6){
          observer.complete();
        }
        if(count >= 3){
          observer.error(new Error("count >= 3"));
        }
        observer.next(count);
        count++;
      }, 1000)
    })

    this.firstObsSubscription = customObservableInterval.subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    }, () => {
      console.log('completed');
    })
    
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
