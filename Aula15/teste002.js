var num = [5,8,6]

num[3] = 0
num[4] = 9
num.push(22)
console.log(num.length)
num.sort(function(a, b){return a-b})
console.log(num)

for (const pos in num) {
        const element = num[pos];
        console.log(element)
}
console.log("Foreach")
num.forEach(element => {
    console.log(element)
})

console.log(num.indexOf(8))