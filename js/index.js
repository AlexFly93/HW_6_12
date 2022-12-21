"use strict";
// Написати клас User(ім'я, прізвище, стать ) і клас Student(все, що має User і додатково рік вступу).
// За допомогою вбудованого об'єкту Date перевіряєте, щоб рік вступу був не більше за поточний рік.
// У студента буде метод, який повертає кількість років які начається студент, тобто курс.
// Якщо рік вступу дорівнює поточному року - то це 1 курс. Місяці і дні вступу не враховуємо.

// Скрізь попрописувати сетери і гетери. Використати try...catch

/**
 * @param {string}name
 * @param {string}lname
 * @param {string}sex
 * @throws {TypeError}type must be a number
 * @throws {RangeError}type must be a positive
 */
class User {
  constructor(name, lname, sex) {
    this.name = name;
    this.lname = lname;
    this.sex = sex;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be string");
    }
    this._name = name;
  }

  get lname() {
    return this._lname;
  }
  set lname(lname) {
    if (typeof lname !== "string") {
      throw new TypeError("Name must be string");
    }
    this._lname = lname;
  }
  get sex() {
    return this._sex;
  }
  set sex(sex) {
    if (typeof sex !== "string") {
      throw new TypeError("Name must be string");
    }
    this._sex = sex;
  }
yearsAsStudent() {}
}
/**
 * @param {string}name
 * @param {string}lname
 * @param {string}sex
 * @param {number}whenAccepted
 * @throws {TypeError}type must be a number
 * @throws {RangeError}type must be a positive
 */

class Student extends User {
  constructor(name, lname, sex, whenAccepted) {
    super(name, lname, sex);
    this.whenAccepted = whenAccepted;
  }
  set whenAccepted(whenAccepted) {
    if (typeof whenAccepted !== "number") {
      throw new TypeError("from must be number");
    }
    if (whenAccepted > DATE) {
      throw new RangeError("years must be less than Date");
    }
    this._whenAccepted = whenAccepted;
  }
  yearsAsStudent() {
    return DATE === this._whenAccepted ? 1 : DATE - this._whenAccepted;
  }
}

try {
  const user = new User("Charles", "Bronson", "male");
  const student = new Student("Charles", "Bronson", "male", 2022);
  console.log(student.yearsAsStudent());
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Wrong type");
  }
  if (error instanceof RangeError) {
    console.log("Wrong value");
  }
  console.log(error);
}
