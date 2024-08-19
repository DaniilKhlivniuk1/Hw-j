const drink = prompt("Оберіть 'Кава', 'Чай', 'Сік'");
console.log("Ваш вибір:", drink);

const day = prompt("Оберіть день тижня");
switch (day.toLowerCase()) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    console.log(day, "робочий день");
    break;
  case "субота":
  case "неділя":
    console.log(day, "вихідний день");
    break;
  default:
    console.log(day, "не день тижня");
}

const month = prompt("Виберіть місяць");
switch (month.toLowerCase()) {
  case "березень":
  case "квітень":
  case "травень":
    console.log(month, "це весна");
    break;
  case "червень":
  case "липень":
  case "серпень":
    console.log(month, "це літо");
    break;
  case "вересень":
  case "жовтень":
  case "листопад":
    console.log(month, "це осень");
    break;
  case "грудень":
  case "січень":
  case "лютий":
    console.log(month, "це зима");
    break;
  default:
    console.log(month, "не місяць");
}

const month2 = prompt("Оберіть місяць");
switch (month2.toLowerCase()) {
  case "квітень":
  case "червень":
  case "вересень":
  case "листопад":
    console.log(month2, "30 днів");
    break;
  case "березень":
  case "травень":
  case "липень":
  case "серпень":
  case "жовтень":
  case "грудень":
  case "січень":
    console.log(month2, "31 день");
    break;
  case "лютий":
    console.log("В цьому році, ", month2, "має 29 днів");
    break;
  default:
    console.log(month2, "не місяць");
}

const color = prompt("Оберіть колір (червоний, жовтий, зелений)");
let action;
switch (color.toLowerCase()) {
  case "червоний":
    action = "стоп";
    break;
  case "жовтий":
    action = "чекати";
    break;
  case "зелений":
    action = "йти";
    break;
    default:
        action = "Неправильний колір";
}
console.log(action);

const number1 = Number.parseFloat(prompt("Виберіть перше число"));
const number2 = Number.parseFloat(prompt("Виберіть друге число"));
const operation = prompt("Виберіть дію (+, -, *, /)(ви можете поділили на 0)");
let result;
switch (operation) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "/":
    result = number1 / number2;
    break;
    case "*":
    result = number1 * number2;
    break;
    default:
        result = "Некорректна дія";
}
console.log(result);
