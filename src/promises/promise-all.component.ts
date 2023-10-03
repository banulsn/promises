import {Component, OnInit} from '@angular/core';
import {
    getAsync,
    promiseThatRejectsAfterNSecondsGenerator,
    promiseThatResolvesAfterNSecondsGenerator
} from "../utils/promise.generator";

@Component({
    selector: 'promise-all',
    templateUrl: './promise-all.component.html'
})

export class PromiseAllComponent implements OnInit {

    arrayOfPromises = [];
    promiseAllRef: Promise<unknown>;
    result;
    reason;
    resultAsync;
    reasonAsync;

    ngOnInit(): void {
        this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(1));
        // this.arrayOfPromises.push(promiseThatRejectsAfterNSecondsGenerator(3));
        this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(4));
        this.arrayOfPromises.push(promiseThatResolvesAfterNSecondsGenerator(2));

        this.promiseAllRef = this.promiseAll(this.arrayOfPromises)
            .then(values => {
                this.result = values;
            })
            .catch(reason => this.reason = reason);

        // Promise.all(this.arrayOfPromises)
        //     .then(values => {
        //     this.result = values;
        // })
        //     .catch(reason => this.reason = reason);

        this.promiseAllAsyncFn();
        this.getAsyncResponse();
    }

    // PROMISE.ALL FUNCTION
    promiseAll(promises) {
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

    async promiseAllUsingAsyncAwait(promises) {
        if (!Array.isArray(promises)) {
            return Promise.reject('promises muszą być tablicą');
        }

        const results = [];
        let completedPromises = 0;

        if (!promises.length) {
            return Promise.resolve(results);
        }

        for (let i = 0; i < promises.length; i++) {
            try {
                results[i] = await Promise.resolve(promises[i]);
                completedPromises++;
            } catch (error) {
                return Promise.reject(error);
            }
        }

        if (completedPromises === promises.length) {
            return Promise.resolve(results);
        }
    }

    async promiseAllAsyncFn() {
        try {
            this.resultAsync = await this.promiseAllUsingAsyncAwait(this.arrayOfPromises);
        } catch (e) {
            this.reasonAsync = e;
        }
    }

    async getAsyncResponse() {
        try {
            const response = await getAsync('https://jsonplaceholder.typicode.com/posts/1');
            console.log('Response: ', response);
        } catch (e) {
            console.log('Error get response: ', e);
        }
    }

}
