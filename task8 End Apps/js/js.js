let startBox = document.querySelector('#start');
let budgetVal = document.querySelector('.budget-value');
let daybudGet = document.querySelector('.daybudget-value');
let level = document.querySelector('.level-value');
let expensesVal = document.querySelector('.expenses-value');
let optionalExpenses = document.querySelector('.optionalexpenses-value');
let incomeVal = document.querySelector('.income-value');
let monthSavings = document.querySelector('.monthsavings-value');
let yearSavings = document.querySelector('.yearsavings-value');
let expensesItem = document.getElementsByClassName('expenses-item');
let expensesBtn = document.getElementsByTagName('button')[0];
let optionalexpensesBtn = document.getElementsByTagName('button')[1];
let countBtn = document.getElementsByTagName('button')[2];
let optionalExpensesitem = document.querySelectorAll('.optionalexpenses-item');
let countBudgetBtn = document.querySelector('.count-budget-btn');

let chooseIncome = document.querySelector('.choose-income');
let savings = document.querySelector('#savings');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
let year = document.querySelector('.year-value');
let month = document.querySelector('.month-value');
let day = document.querySelector('.day-value');

// сделать кнопки неактивными
expensesBtn.disabled = true;
countBtn.disabled = true;
optionalexpensesBtn.disabled = true;
savings.disabled = true;

let money, time;

startBox.addEventListener('click',function () {
    //сделать кнопки активными
    expensesBtn.disabled = false;
    countBtn.disabled = false;
    optionalexpensesBtn.disabled = false;
    savings.disabled = false;
    time = prompt('Введите дату в формате yyyy-mm-dd', '');
    money = +prompt("Ваш бюджет на месяц?",'');
    while (isNaN(money) || money === '' || money == null){
        money = prompt("Ваш бюджет?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetVal.textContent =money.toFixed();
    year.value= new Date(Date.parse(time)).getFullYear();
    month.value= new Date(Date.parse(time)).getMonth() + 1;
    day.value= new Date(Date.parse(time)).getDay();

});

expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i =0;i<expensesItem.length;i++){
        let  a = expensesItem[i].value,
             b = expensesItem[++i].value;
        if ( (typeof (a) ) === "string" &&
            (typeof (a) ) != null &&
            (typeof (b) ) != null &&
            a != '' && b != '' &&
            a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    console.log(sum);
    expensesVal.textContent = sum;
});

optionalexpensesBtn.addEventListener('click',function () {
    for (let i =0;i<optionalExpensesitem.length;i++){
        let opt = optionalExpensesitem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpenses.textContent += appData.optionalExpenses[i] + " ";
    }
});

countBudgetBtn.addEventListener("click", function () {
    if (appData.budget !== undefined){
        let dop=0;
        if (expensesVal.textContent) dop = +expensesVal.textContent;
        appData.moneyPerDay = ((appData.budget-dop) / 30).toFixed();
        daybudGet.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 300){
            level.textContent = 'Минимальный уровнень достатка';
        } else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 2000){
            level.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000){
            level.textContent = 'Высокий уровень достатка';
        } else {
            level.textContent = 'Ошибка';
        }
    } else {
        daybudGet.textContent = "Произошла ошибка";
    }

});

//chooseIncome.addEventListener("change",function () { // по потере фокуса
chooseIncome.addEventListener("input",function () { // при любом введении
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeVal.textContent = appData.income;
});

savings.addEventListener("click",function () {
    if (appData.savings === true){
        appData.savings = false;
    } else appData.savings = true;
});

chooseSum.addEventListener("input",function () {
    if (appData.savings === true){
        let sum = +chooseSum.value;
        let percent = +choosePercent.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavings.textContent = appData.monthIncome.toFixed();
        yearSavings.textContent = appData.yearIncome.toFixed();
    }
});
choosePercent.addEventListener("input",function () {
    if (appData.savings === true){
        let sum = +chooseSum.value;
        let percent = +choosePercent.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavings.textContent = appData.monthIncome.toFixed();
        yearSavings.textContent = appData.yearIncome.toFixed();
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false
};
