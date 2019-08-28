import { threadId } from "worker_threads";

const jsforms = (function () {
    'use strict';

    function greet(greeting) {
        return (typeof greeting === "string" ? greeting + '!' : "Hello!")
    }


    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {

        function add(baseNum, addQty) {
            return baseNum + addQty;
        }
        let result = 0;

        nums.forEach(intNum => { result = add(result, intNum) });
        return result;
    }

    function squareAll(nums) {
        return nums.map(sqrTrgt => sqrTrgt * sqrTrgt);;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function Vector() {
        this.baseArray = [0, 0];

    }

    function buildVector(points) {
        let vector = points.slice(0);
        return vector;
    }

    buildVector.prototype.valueOf = function () {
        // this.baseVal = [0,0];
        return this.vector;
    }
    ///MAIN
    let sampledVec = buildVector([1, 2, 3, 4]);
    console.log('This is the valueOf call for your type  (---vector---): ', sampledVec.valueOf());
    /// END MAIN
    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        let result = [];

        for (let index = 0; index < vectors.length; index += 1) {
            if (magnitude(vectors[index]) < length) {
                result[result.length] = vectors[index];
            }
        }

        return result;
    }

    return {
        buildVector: buildVector,
        getVectorsShorterThan: getVectorsShorterThan,
        greet: greet,
        magnitude: magnitude,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();
