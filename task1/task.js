/*
   Инициализируем переменные
 */

let money=+prompt("Ваш бюджет на месяц?", "");
let time=prompt("Введите дату в формате YYYY-MM-DD", "");

let question1=prompt("Введите обязательную статью расходов в этом месяце", "");
let question2=+prompt("Во сколько обойдется?", "");

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
appData.expenses[question1] = question2;
let DayBudget=appData.budget/30-question2; // вычитая обязательные рассходы
alert('Бюджет на день: '+DayBudget+ ' рублей');


 /*
 Сколько типов данных существует в JS? - 7 типов

Как вывести информацию в консоль? - console.log(DayBudget);// например

Какая функция операторов || и &&? - операторы "или" и "и"
  */