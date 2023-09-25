import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'promise-last',
  templateUrl: './promise-last.component.html'
})

export class PromiseLastComponent implements OnInit {
 
  ngOnInit(): void {
  
  }

  promiseLast = (arrayOfPromise) => {
    return new Promise((resolve, reject)=>{
        // ...
    })
  }

}
