import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'promise-race',
  templateUrl: './promise-race.component.html'
})

export class PromiseRaceComponent implements OnInit {
 
  ngOnInit(): void {
  
  }
  promiseRace = (arrayOfPromise) => {
    return new Promise((resolve, reject)=>{
        // ...
    })
  }
}
