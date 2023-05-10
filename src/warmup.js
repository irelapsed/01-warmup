'use strict';

function abProblem(a, b) {
    return a + b;
}

function centuryByYearProblem(year) {
    return Math.floor(year / 100) + 1;
}

function colorsProblem(hexColor) {
    let result = new Array(3);
    for (let i = 0; i < 3; i++) {
        result[i] = parseInt(hexColor.substring(hexColor.length - 6 + i, hexColor.length - 4 + i), 16);
    }
    return "(" + result.join(", ") + ")";
}

function fibonacciProblem(n) {
    if (n == 1 || n == 2) {
        return 1;
    }
    return fibonacciProblem(n - 1) + fibonacciProblem(n - 2);
}

function matrixProblem(matrix) {
    let result = new Array(matrix[0].length);
    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = new Array(matrix.length);
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i];
        }
    }
    return result;
}

function numberSystemProblem(n, targetNs) {
    let minus = "";
    if (n < 0) {
        n *= -1;
        minus += "-";
    }
    let result = "";
    while (n > 0) {
        result += n % targetNs;
        n = Math.floor(n / targetNs);
    }
    return minus + result.split('').reverse().join('');
}

function phoneProblem(phoneNumber) {
    if (phoneNumber.length !== 15) {
        return false;
    }
    //xxx–xx–xx
    if (phoneNumber.substring(0, 6) !== "8–800–" || phoneNumber.charAt(9) !== '–' ||
        phoneNumber.charAt(12) !== '–') {
        return false;
    }
    for (let i = 6; i < phoneNumber.length; i++) {
        if (i !== 9 && i !== 12 && (phoneNumber.charAt(i) > '9' || phoneNumber.charAt(i) < '0')) {
            return false;
        }
    }
    return true;
}

function smilesProblem(text) {
    let temp = text.split(":-)").length + text.split("(-:").length - 2;
    return temp;
}

function ticTacToeProblem(field) {}

module.exports = {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem
};