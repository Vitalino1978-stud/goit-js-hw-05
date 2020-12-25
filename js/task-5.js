// Напиши класс Car с указанными свойствами и методами.

class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
  
  constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0}) {
    this.speed = speed;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }
  static getSpecs(car) {
  console.log(`maxSpeed: ${car._maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
}
  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

   
turnOn() {
  this.isOn = true;
  }

  
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value < this._maxSpeed) {
      this.speed += value;
    } else {
      this.speed = this._maxSpeed;
    }
  }

    decelerate(value) {
    if (this.speed - value <= 0) {
      this.speed = 0;
    } else {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn === true) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(250);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
