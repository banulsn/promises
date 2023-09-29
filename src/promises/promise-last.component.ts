import { Component, OnInit } from '@angular/core';
import {
  promiseThatRejectsAfterNSecondsGenerator,
  promiseThatResolvesAfterNSecondsGenerator
} from "../utils/promise.generator";

@Component({
  selector: 'promise-last',
  templateUrl: './promise-last.component.html'
})

export class PromiseLastComponent implements OnInit {
  arrayOfPromises = [];
  promiseLastRef: Promise<unknown>;
  result;
  reason;
  resultAsync;
  reasonAsync;

  ngOnInit(): void {
    this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(2));
    this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(4));
    this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(5));
    this.arrayOfPromises.push(promiseThatRejectsAfterNSecondsGenerator(3));
    this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(1));

    this.promiseLastRef = this.promiseLast(this.arrayOfPromises)
        .then(values => {
          this.result = values;
        })
        .catch(reason => this.reason = reason);


    this.promiseLastAsyncFn();
  }

  // PROMISE.LAST FUNCTION
  async promiseLast(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject('promises muszą być tablicą');
      }

      let lastCompletedPromise = [];
      let completedPromises = 0;

      if (!promises.length) {
        resolve([]);
      }

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
            .then((result) => {
              lastCompletedPromise = result;
              completedPromises++;

              if (completedPromises === promises.length) {
                resolve(lastCompletedPromise);
              }
            })
            .catch(() => {
              resolve(lastCompletedPromise);
            });
      });
    });
  }

  async promiseLastAsyncFn() {
    try {
      this.resultAsync = await this.promiseLast(this.arrayOfPromises);
    } catch (e) {
      this.reasonAsync = e;
    }
  }

}
