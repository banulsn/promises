import { Component, OnInit } from '@angular/core';
import {
  promiseThatRejectsAfterNSecondsGenerator,
  promiseThatResolvesAfterNSecondsGenerator
} from "../utils/promise.generator";

@Component({
  selector: 'promise-race',
  templateUrl: './promise-race.component.html'
})

export class PromiseRaceComponent implements OnInit {
  arrayOfPromises = [];
  promiseRaceRef: Promise<unknown>;
  result;
  reason;
  resultAsync;
  reasonAsync;

  ngOnInit(): void {
    this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(3));
    // this.arrayOfPromises.push(promiseThatRejectsAfterNSecondsGenerator(1));
    this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(2));
    this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(4));

    this.promiseRaceRef = this.promiseRace(this.arrayOfPromises)
        .then(values => {
          this.result = values;
        })
        .catch(reason => this.reason = reason);

    // Promise.race(this.arrayOfPromises)
    //     .then(values => {
    //     this.result = values;
    // })
    //     .catch(reason => this.reason = reason);

    this.promiseRaceAsyncFn();
  }

  // PROMISE.RACE FUNCTION
  async promiseRace(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject('promises muszą być tablicą');
      }

      if (!promises.length) {
        resolve([]);
      }

      promises.forEach((promise) => {
        Promise.resolve(promise)
            .then((result) => {
              resolve(result);
            })
            .catch((error) => {
              reject(error);
            });
      });
    });
  }

  async promiseRaceAsyncFn() {
    try {
      this.resultAsync = await this.promiseRace(this.arrayOfPromises);
    } catch (e) {
      this.reasonAsync = e;
    }
  }
}
