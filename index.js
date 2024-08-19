const choose = prompt("Оберіть 'Кава', 'Чай', 'Сік'");
console.log("Ваш вибір:", choose);
const week = prompt("Оберіть день тижня");
switch (week.toLowerCase()) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    console.log(week, "робочий день");
    break;
  case "субота":
  case "неділя":
    console.log(week, "вихідний день");
    break;
  default:
    console.log(week, "не день тижня");
}
const month = prompt("Виберіть місяць");
switch (month.toLowerCase()) {
  case "квітень":
  case "травень":
  case "березень":

    console.log(month, "це весна");
    break;
  case "липень":
  case "серпень":
  case "червень":
  case "липень":
  case "серпень":
    console.log(month, "це літо");
    break;
  case "листопад":
  case "вересень":
  case "жовтень":
    console.log(month, "це осень");
    break;
  case "січень":
  case "лютий":
  case "грудень":
    console.log(month, "це зима");
    break;
  default:
    console.log(month, "не місяць");
}
const day = prompt("Оберіть місяць");
switch (month2.toLowerCase()) {
  case "вересень":
  case "листопад":
  case "квітень":
  case "червень":
    console.log(day, "30 днів");
    break;
  case "жовтень":
  case "грудень":
  case "січень":
  case "березень":
  case "травень":
  case "липень":
  case "серпень":
    console.log(day, "31 день");
    break;
  case "лютий":
    console.log("В цьому році, ", day, "має 29 днів");
    break;
  default:
    console.log(day, "не місяць");
}
const light = prompt("Оберіть колір (червоний, жовтий, зелений)");
let action;
switch (light.toLowerCase()) {
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
const number = Number.parseFloat(prompt("Виберіть перше число"));
const numbers = Number.parseFloat(prompt("Виберіть друге число"));
const operation = prompt("Виберіть дію (+, -, *, /)(ви можете поділили на 0)");
let result;
switch (operation) {
  case "+":
    result = number + numbers;
    break;
  case "-":
    result = number - numbers;
    break;
  case "/":
    result = number / numbers;
    break;
    case "*":
    result = number * numbers;
    break;
    default:
        result = "Некорректна дія";
}
console.log(result);
