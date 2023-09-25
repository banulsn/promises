import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'promise-ignore-errors',
  templateUrl: './promise-ignore-errors.component.html'
})

export class PromiseIgnoreErrorsComponent implements OnInit {
 
  ngOnInit(): void {
  
  }

  promiseIgnoreErrors = (arrayOfPromise) => {
    return new Promise((resolve, reject)=>{
        // ...
    })
  }
}
