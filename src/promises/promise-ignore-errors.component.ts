import {Component, OnInit} from '@angular/core';
import {
    promiseThatRejectsAfterNSecondsGenerator,
    promiseThatResolvesAfterNSecondsGenerator
} from "../utils/promise.generator";

@Component({
    selector: 'promise-ignore-errors',
    templateUrl: './promise-ignore-errors.component.html'
})

export class PromiseIgnoreErrorsComponent implements OnInit {
    arrayOfPromises = [];
    promiseIgnoreErrorsRef: Promise<unknown>;
    result;
    reason;
    resultAsync;
    reasonAsync;

    ngOnInit(): void {
        this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(1));
        this.arrayOfPromises.push(promiseThatRejectsAfterNSecondsGenerator(3));
        this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(2));
        this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(4));

        this.promiseIgnoreErrorsRef = this.promiseIgnoreErrors(this.arrayOfPromises)
            .then(values => {
                this.result = values;
            })
            .catch(reason => this.reason = reason);

        this.promiseIgnoreErrorsAsyncFn();
    }

    // PROMISE.IGNORE_ERRORS FUNCTION
    async promiseIgnoreErrors(promises) {
        return new Promise((resolve, reject) => {
            if (!Array.isArray(promises)) {
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

                        if (index === promises.length - 1) {
                            resolve(results);
                        }
                    })
                    .catch((error) => {
                        console.log('Catch error in promiseIgnoreErrors: ', error)
                    });
            });
        });
    }

    async promiseIgnoreErrorsAsyncFn() {
        try {
            this.resultAsync = await this.promiseIgnoreErrors(this.arrayOfPromises);
        } catch (e) {
            this.reasonAsync = e;
        }
    }

}
