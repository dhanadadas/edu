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

let appData={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: true,
};

function chooseExpensivse (){
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

}

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed();
}

function detectLevel (){
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
}

function checkSavings() {
    if (appData.savings === true){
        let save    = +prompt("Какова сумма накомплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с ваших сбережений: "+appData.monthIncome+" рублей");
    }
}
function chooseOptExpenses() {
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
}

chooseExpensivse();
detectDayBudget();
alert('Бюджет на день: '+appData.moneyPerDay+ ' рублей');
detectLevel ();
checkSavings();

//chooseOptExpenses();

/*
    Что значит () после названия функции? = Место для параметров функции
 */