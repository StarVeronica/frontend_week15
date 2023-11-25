const numbers = [];
for(let i = -10; i <= 10; i++) {
    numbers.push(i);
}


for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] < 0) {
        numbers.splice(i, 1);
        i -= 1;
    }
}


for(let i = 0; i < numbers.length; i++) {
    numbers[i] *= numbers[i];
}


for(let i = 0; i < numbers.length / 2; i++) {
    let temporary_var = numbers[numbers.length - i - 1];
    numbers[numbers.length - i - 1] = numbers[i];
    numbers[i] = temporary_var;
}

console.log(numbers);
