'use strict';

const jsforms = (function () {
    'use strict';
    var a = 5;
    a = 3 + 7;
    var b = "Hello, World!";
    console.log(b)

    function greet(greeting = 'Hello') {
        // var greeting = 'Hello!';
        //This test would benefit from quotes around "salutations" for clarity.
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(toSquare) {
        return toSquare * toSquare
    }

    function squareRoot(toRoot) {
        return Math.sqrt(toRoot);
    }

    function sum(numArray) {
        var currentSum = 0;
        var numToAdd = 0;
        for (numToAdd of numArray) {
            currentSum = numToAdd + currentSum;
        }
        return currentSum
    }

    function squareAll(valueArray) {
        var resultsArray = [];
        for (var valToSquare of valueArray) {
            resultsArray.push(square(valToSquare));
        }
        return resultsArray

    }

    function sumOfSquares(valueArray) {
        var sumOfSquares = 0;
        var allSquares = squareAll(valueArray);
        sumOfSquares = sum(allSquares);
        return sumOfSquares;
    }

    function buildVector(passedCoords) {

        return passedCoords.slice(0);
    }

    function magnitude(passedVector) {
        var squaredSumResult = sumOfSquares(passedVector);
        return squareRoot(squaredSumResult);
    }
    function getVectorsShorterThan(maxMagnitude = 30, vectorList) {
        var shorties = [];
        for (var vectorIter of vectorList) {
            console.log('The iterator thing', vectorIter)
            console.log("Yeaaaaaah.......", magnitude(vectorIter));
            if (magnitude(vectorIter) < maxMagnitude) {
                console.log("This is the current vector and magnitude!!!", vectorIter, magnitude(vectorIter))
                shorties.push(vectorIter);
            }

        }
        return shorties
    }


    return {
        b: b,
        greet: greet,
        square: square,
        squareRoot: squareRoot,
        sum: sum,
        squareAll: squareAll,
        sumOfSquares: sumOfSquares,
        buildVector: buildVector,
        magnitude: magnitude,
        getVectorsShorterThan: getVectorsShorterThan

        // ,greet()

    };
})();
