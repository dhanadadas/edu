/*
   Инициализируем переменные
 */

let money=+prompt("Ваш бюджет на месяц?", "");
let time=prompt("Введите дату в формате YYYY-MM-DD", "");

/*
    Создаем объект
 */

let appData={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false,
};

for (let i =0;i<2;i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = +prompt("Во сколько обойдется?", "");
    if ( (typeof (a) ) === "string"
        && (typeof (a)) != null
        && (typeof (b)) != null
        && a != '' && b != ''
        && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
    }
}
appData.moneyPerDay = appData.budget/30;
alert('Бюджет на день: '+appData.moneyPerDay+ ' рублей');
if (appData.moneyPerDay < 300){
    console.log('Минимальный уровнень достатка');
} else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 2000){
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000){
    console.log('Высокий уровень достатка');
} else {
    console.log('Ошибка');
}
console.log(appData);

// while(i<2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let b = +prompt("Во сколько обойдется?", "");
//     if ( (typeof (a) ) === "string"
//         && (typeof (a)) != null
//         && (typeof (b)) != null
//         && a != '' && b != ''
//         && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//         i++
//     }
// }
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let b = +prompt("Во сколько обойдется?", "");
//     if ( (typeof (a) ) === "string"
//         && (typeof (a)) != null
//         && (typeof (b)) != null
//         && a != '' && b != ''
//         && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//         i++
//     }
// } while(i<2);


/*
    Сколько видов циклов существует в JS? = 3 вида
 */