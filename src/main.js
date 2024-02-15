console.log('#6. JavaScript homework example file')

/*
 * #1
 * Задача: Калькулятор калорійності продуктів через клас.
 * Завдання: Розробити JavaScript модуль за допомогою класу, який використовує Map для зберігання та управління даними про калорійність продуктів.
 * Модуль повинен дозволяти додавати нові продукти з їх калорійністю, отримувати калорійність продукту за його назвою та видаляти продукти з колекції.
 * Перевіряється наявність методів addProduct, getProductCalories, removeProduct.
 * Перевіряється, що CalorieCalculator створений за допомогою class.
 */

class CalorieCalculator {
  constructor() {
    this.products = new Map()
  }

  addProduct(productName, calories) {
    this.products.set(productName, calories)
  }

  getProductCalories(productName) {
    return this.products.get(productName) || 'Product not found'
  }

  removeProduct(productName) {
    return this.products.delete(productName)
  }
}

// Демонстрація використання
const calorieCalculator = new CalorieCalculator()
calorieCalculator.addProduct('Apple', 52)
calorieCalculator.addProduct('Banana', 89)

console.log(calorieCalculator.getProductCalories('Apple')) // 52
console.log(calorieCalculator.getProductCalories('Banana')) // 89

calorieCalculator.removeProduct('Apple')
console.log(calorieCalculator.getProductCalories('Apple')) // Product not found

/*
 * #2
 * Задача: Унікальні користувачі.
 * Завдання: Розробити JavaScript модуль за допомогою класу, що використовує Set для зберігання унікальних імен користувачів.
 * Модуль має дозволяти додавати імена користувачів та перевіряти, чи вже існує ім'я в наборі, а також повертати кількість унікальних імен у наборі.
 * Перевіряється наявність методів addUser, exists, count.
 * Перевіряється, що UniqueUsernames створений за допомогою class.
 */

class UniqueUsernames {
  constructor() {
    this.usernames = new Set()
  }

  addUser(username) {
    this.usernames.add(username)
  }

  exists(username) {
    return this.usernames.has(username)
  }

  count() {
    return this.usernames.size
  }
}

// Демонстрація використання
const uniqueUsernames = new UniqueUsernames()
uniqueUsernames.addUser('john_doe')
uniqueUsernames.addUser('jane_doe')
uniqueUsernames.addUser('john_doe') // Ця дія не змінить набір, оскільки 'john_doe' вже існує

console.log(`Існує 'john_doe': ${uniqueUsernames.exists('john_doe')}`) // true
console.log(`Кількість унікальних імен: ${uniqueUsernames.count()}`) // 2

/*
 * #3
 * Задача: Калькулятор дат.
 * Завдання: Розробити JavaScript модуль, який за допомогою функції-конструктора створює об'єкти калькулятора дат.
 * Калькулятор дат повинен мати методи для додавання та віднімання днів до/від заданої дати та метод для виведення результуючої дати у форматі "YYYY-MM-DD".
 * Перевіряється присутність методів this.addDays, this.subtractDays, this.getResult.
 * Перевіряється, що DateCalculator створений за допомогою function.
 */

function DateCalculator(initialDate) {
  this.currentDate = new Date(initialDate)

  this.addDays = function (days) {
    this.currentDate.setDate(this.currentDate.getDate() + days)
  }

  this.subtractDays = function (days) {
    this.currentDate.setDate(this.currentDate.getDate() - days)
  }

  this.getResult = function () {
    return this.currentDate.toISOString().split('T')[0]
  }
}

// Демонстрація використання
const dateCalculator = new DateCalculator('2023-01-01')
dateCalculator.addDays(5)
console.log(dateCalculator.getResult()) // Виводить нову дату після додавання днів

dateCalculator.subtractDays(3)
console.log(dateCalculator.getResult()) // Виводить нову дату після віднімання днів

// Експорт для використання в тестах
export { CalorieCalculator, UniqueUsernames, DateCalculator }
