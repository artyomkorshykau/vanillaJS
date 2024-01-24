// function fibonacci(num) {
//
//     if (num <= 0) return 0
//     if (num <= 2) return 1
//
//     return fibonacci(num - 1) + fibonacci(num - 2)
// }
//
// console.log(fibonacci(7))

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// function pow(x, n) {
//     // let res = 1
//     // for (let i = 0; i < n; i++) {
//     //     res *= x
//     // }
//     // return res
//
//     return (n === 1) ? x : (x * pow(x, n - 1))
// }
//
// console.log(pow(2, 2))

// function sumTo(num) {
//     // if (num === 1) return 1
//     // return num + sumTo(num - 1)
//
//     let res = 0
//     for (let i = 1; i <= num; i++) {
//         res += i
//     }
//     return res
// }
//
// console.log(sumTo(100))

// function factorial(num) {
//     if (num === 1) return 1
//     return num * factorial(num - 1)
// }
//
// console.log(factorial(5))

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// function printList(list) {
//     console.log(list.value)
//     if (list.next) {
//         printList(list.next)
//     }
//     //
//     // while (list) {
//     //     console.log(list.value)
//     //     list = list.next
//     // }
// }
//
// console.log(printList(list))

// function palindrome(word) {
//     word = word.toLowerCase()
//     // for (let i = 0; i < word.length / 2; i++) {
//     //     if(word[i] !== word[word.length - i - 1]) {
//     //         return false
//     //     }
//     // }
//     // return true
//
//     return word === word.split('')
//         .reverse()
//         .join('')
// }
//
// console.log(palindrome('aNna'))

// function one(callback) {
//     return callback ? callback(1) : 1
// }
//
// function two(callback) {
//     return callback ? callback(2) : 2
// }
//
// function three(callback) {
//     return callback ? callback(3) : 3
// }
//
// function four(callback) {
//     return callback ? callback(4) : 4
// }
//
// function five(callback) {
//     return callback ? callback(5) : 5
// }
//
// function six(callback) {
//     return callback ? callback(6) : 6
// }
//
// function seven(callback) {
//     return callback ? callback(7) : 7
// }
//
// function eight(callback) {
//     return callback ? callback(8) : 8
// }
//
// function nine(callback) {
//     return callback ? callback(9) : 9
// }
//
//
// function plus(a) {
//     return (b) => a + b
// }
//
// function minus(a) {
//     return (b) => a - b
// }
//
// function divide(a) {
//     return (b) => a / b
// }
//
// function mult(a) {
//     return (b) => a * b
// }
//
//
// console.log(two(minus(one())))

// const concerts = {
//     'Москва': new Date('2023-04-01'),
//     'Минск': new Date('2023-04-02'),
//     'Берлин': new Date('2024-04-03'),
//     'Париж': new Date('2024-04-04'),
//     'Речица': new Date('2023-04-05')
// }

// function concertList(list) {
//     // let res = []
//     // for (let key in list) {
//     //     debugger
//     //     if(list[key] > new Date()) {
//     //         res.push(key)
//     //     }
//     // }
//     // return res
//
//     return Object.keys(list).filter(el => list[el] > new Date())
// }
//
// console.log(concertList(concerts))


// const arr = [1, 1, 2, 2, 3, 4, 5, 5, 6, 6]
//
// function withoutRepeat(array) {
//     let res = {}
//
//     for (let i = 0; i < array.length; i++) {
//         if (res[array[i]]) {
//             delete res[array[i]]
//         } else {
//             res[array[i]] = array[i]
//         }
//     }
//     return Object.keys(res)
// }
//
// console.log(withoutRepeat(arr))

// function findOutlier(integers) {
//
//     let pos = []
//     let neg = []
//
//     for (let i = 0; i < integers.length; i++) {
//         if (integers[i] % 2 === 0) {
//             pos.push(integers[i])
//         } else {
//             neg.push(integers[i])
//         }
//     }
//     return pos.length === 1 ? pos[0] : neg[0]
// }
//
// console.log(findOutlier([1, 1, 0, 1, 1])) // 0
// console.log(findOutlier([2, 4, 6, 8, 3])) // 3

// function alphabetPosition(text) {
//     let alphavite = 'abcdefghijklmnopqrstuvwxyz'
//     let obj = {}
//     let res = ''
//
//     for (let i = 0; i < alphavite.length; i++) {
//         obj[alphavite[i]] = i + 1
//     }
//     for (let i = 0; i < text.length; i++) {
//         for (let key in obj) {
//             if (text[i].toLowerCase() === key) {
//                 res +=  `${obj[key]} `
//             }
//         }
//     }
//     return res.trim()
// }
//
// console.log(alphabetPosition("The sunset sets at twelve o' clock."))

// function persistence(num) {
//     let arr = Array.from(String(num), Number)
//     let count = 0
//
//     if (Array.from(String(num), Number).length === 1) {
//         return 0
//     }
//
//     while (arr.length !== 1) {
//         count++
//         arr = Array.from(String(arr.reduce((acc, el) => acc * el)), Number)
//     }
//     return count
// }
//
// console.log(persistence(999)) // 4
// console.log(persistence(39)) // 3

// function uniqueInOrder(iterable) {
//     let arr
//     Array.isArray(iterable) ? arr = iterable : arr = iterable.split('')
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             delete arr[i]
//         }
//     }
//
//     return arr.filter(el => el !== 'undefined')
// }
//
// console.log(uniqueInOrder('AAAABBBCCDAABBB')) //['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder([1, 2, 2, 3, 3])) //[1, 2, 3]

// function isPangram(string) {
//
//     let str = string.replace(/[^a-z]/gi, '');
//     let stringArr = []
//
//     for (let i = 0; i < str.length; i++) {
//         stringArr[i] = str[i].toLowerCase()
//     }
//
//     return [...new Set(stringArr.sort())].length === 26
// }
//
// console.log(isPangram("The quick brown fox jumps over the lazy dog.")) // true
// console.log(isPangram("This is not a pangram.")) // false