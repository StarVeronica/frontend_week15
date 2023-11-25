const cities = ["Москва", "Майами", "Токио", "Париж", "Лондон", "Иерусалим"];
const temperatures = new Array(cities.length);
for(let i = 0; i < cities.length; i++) {
    const item = document.createElement("p");
    item.textContent = "Температура в " + cities[i] + ": 0°C";
    document.getElementById("temperatures").append(item);
    temperatures[i] = 0;
}

for(let i = 0; i < cities.length; i++) {
    let temp = prompt("Введите температуру для города " + cities[i]);
    if(!temp) {
        temp = 0;
    }
    document.querySelectorAll("p")[i].textContent = "Температура в " + cities[i] + ": " + temp + "°C";
    temperatures[i] = Number(temp);
}

let mx = -1000;
let mn = 1000;
for(let i of temperatures) {
    if(i > mx) {
        mx = i;
    }
    if(i < mn) {
        mn = i;
    }
}

document.getElementById("max_temp").textContent = "Максимальная температура: " + mx + "°C";
document.getElementById("min_temp").textContent = "Минимальная температура: " + mn + "°C";
