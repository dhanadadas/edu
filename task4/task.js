/*
   Инициализируем переменные и функции
 */
let money, time;

function start(){
    money= +prompt("Ваш бюджет на месяц?", "");
    time=prompt("Введите дату в формате YYYY-MM-DD", "");
    while (isNaN(money) || money === "" || money == null){
        money= +prompt("Ваш бюджет на месяц?", "");
    }
}
start();
/*
    Создаем объект
 */

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: true,
    chooseExpensivse: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert('Бюджет на день: '+appData.moneyPerDay+ ' рублей');
    },
    detectLevel: function () {
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
    },
    checkSavings:function () {
        if (appData.savings === true){
            let save    = +prompt("Какова сумма накомплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с ваших сбережений: "+appData.monthIncome+" рублей");
        }
    },
    chooseOptExpenses: function () {
        for (let i=0; i<=2;i++){
            let c = prompt("Введите необязательную статью расходов в этом месяце", "");
            if ( (typeof (c) ) === "string"
                && (typeof (c)) != null
                && c !== ''
                && c.length < 50) {
                console.log("doneC");
                appData.optionalExpenses[i] = c;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (через запяту.)","");
        if (typeof (items) === "string"
            && items !== '') {
            appData.income = items.split(',');
            appData.income.push(prompt("Может что то ещё?",""));
            appData.income.sort();
            //appData.income.forEach (element => console.log("Способы доп. заработка: "+element));
            let text="Способы доп. заработка: ";
            appData.income.forEach (element => text+=element+", ");
            alert(text);

        } else appData.chooseIncome();
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}


// chooseExpensivse();
// detectDayBudget();
// detectLevel ();
// checkSavings();

//chooseOptExpenses();

/*
    Что значит () после названия функции? = Место для параметров функции
 */