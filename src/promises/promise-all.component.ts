import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'promise-all',
  templateUrl: './promise-all.component.html'
})

export class PromiseAllComponent implements OnInit {

  arrayOfPromises = [];
  resolveOfPromiseAll;
  result;
  reason;
 
  ngOnInit(): void {
    this.arrayOfPromises.push(this.promiseThatResolvesAfterNSecondsGenerator(1));
    this.arrayOfPromises.push(this.promiseThatResolvesAfterNSecondsGenerator(2));
    this.arrayOfPromises.push(this.promiseThatRejectsAfterNSecondsGenerator(3));
    this.arrayOfPromises.push(this.promiseThatResolvesAfterNSecondsGenerator(4));
    this.resolveOfPromiseAll = this.promiseAll(this.arrayOfPromises).then(values => {
      this.result = values;
    }).catch(reason => this.reason = reason);
  }

  promiseThatResolvesAfterNSecondsGenerator(n = 0) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({
          resolvedAfterNSeconds: n
        });
      }, n * 1000);
    });
  };
  
  promiseThatRejectsAfterNSecondsGenerator(n = 0) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject({
          rejectedAfterNSeconds: n
        });
      }, n * 1000);
    });
  };

  promiseAll(promises) {
    return new Promise((resolve, reject) => {
      if (Object.prototype.toString.call(promises) !== '[object Array]') {
        return reject('promises muszą być tablicą');
      }
  
      const results = [];
      let completedPromises = 0;

      if (!promises.length) {
        resolve(results);
      }
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((result) => {
            results[index] = result;
            completedPromises++;
  
            if (completedPromises === promises.length) {
              resolve(results);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  }

}
