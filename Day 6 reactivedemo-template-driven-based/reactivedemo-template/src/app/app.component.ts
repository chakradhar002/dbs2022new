import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myObservable = new Observable((observer) => {
    console.log('Starting observable');

    setTimeout(() => { observer.next('1') }, 1000);
    setTimeout(() => { observer.next('2') }, 2000);
    setTimeout(() => { observer.error('Error') }, 2500);
    setTimeout(() => { observer.next('3') }, 3000);
    setTimeout(() => { observer.next('4') }, 4000);
    setTimeout(() => { observer.next('5') }, 5000);
  });

  ngOnInit() {
    this.myObservable.subscribe(
      value => { console.log(value) }
    )
  }
}
