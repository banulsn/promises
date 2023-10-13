import {Component, OnInit} from '@angular/core';
import {
    promiseThatRejectsAfterNSecondsGenerator,
    promiseThatResolvesAfterNSecondsGenerator
} from "../utils/promise.generator";

@Component({
    selector: 'recursive-promise',
    templateUrl: './recursive-promise.component.html'
})

export class RecursivePromiseComponent implements OnInit {

    arrayOfPromises = [];
    recursivePromiseRef: Promise<unknown>;
    result;
    reason;
    resultAsync;
    reasonAsync;

    ngOnInit(): void {
        this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(2));
        this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(5));
        this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(5));
        this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(3));
        // this.arrayOfPromises.push(promiseThatRejectsAfterNSecondsGenerator(4));
        this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(2));
        this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(7));
        this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(6));

        this.recursivePromiseRef = this.recursivePromise(this.arrayOfPromises)
            .then(values => {
                this.result = values;
            })
            .catch(reason => this.reason = reason);

        this.recursivePromiseAsyncFn();
    }

    // RECURSIVE PROMISE FUNCTION
    recursivePromise(promises) {
        return new Promise((resolve, reject) => {
            if (!Array.isArray(promises)) {
                return reject('promises muszą być tablicą');
            }

            if (!promises.length) {
                resolve([]);
            }

            const results = [];
            let currentIndex = 0;

            function makePromise(index) {
                if (currentIndex === promises.length) {
                    return resolve(results);
                }

                return Promise.resolve(promises[index])
                    .then((result) => {
                        results[index] = result;
                        currentIndex++;
                        return makePromise(currentIndex);
                    })
                    .catch((error) => {
                        results[index] = error;
                        reject(results);
                    });
            }

            return makePromise(currentIndex);
        });
    }

    async recursivePromiseUsingAsyncAwait(promises) {
        if (!Array.isArray(promises)) {
            return Promise.reject('promises muszą być tablicą');
        }

        const results = [];
        let currentIndex = 0;

        if (!promises.length) {
            return Promise.resolve(results);
        }
        return new Promise((resolve, reject) => {
            async function makePromise(index) {
                if (currentIndex === promises.length) {
                    return resolve(results);
                }
                try {
                    results[index] = await Promise.resolve(promises[index]);
                    currentIndex++;
                    return makePromise(currentIndex);
                } catch (error) {
                    results[index] = await Promise.resolve(error);
                    reject(results);
                }
            }
            return makePromise(currentIndex);
        });
    }

    async recursivePromiseAsyncFn() {
        try {
            this.resultAsync = await this.recursivePromiseUsingAsyncAwait(this.arrayOfPromises);
        } catch (e) {
            this.reasonAsync = e;
        }
    }

}
