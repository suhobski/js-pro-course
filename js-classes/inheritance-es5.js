//! ES5 =====================================================================================================
// CAR ======================================================================================================
function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name
    this.model = model
    this.year = year
    this.color = color
    this.maxSpeed = maxSpeed
    this.fuelCapacity = fuelCapacity
    this.fuelConsumption = fuelConsumption
}

Car.prototype.getFullName = function() {
    return `${this.name} ${this.model}`
}

Car.prototype.getAge = function() { 
    return new Date().getFullYear() - this.year
}

Car.prototype.changeColor = function(newColor) {
    if (newColor.toLowerCase() === this.color.toLowerCase()) {
        console.log('Авто уже покрашено в ' + this.color +  ' цвет')
    } else {
        this.color = newColor
        console.log('Новый цвет авто: ' + newColor);
    }
}

Car.prototype.calculateWay = function(kilometers, fuel) {
    const averageSpeed = 50

    if (fuel < 10) {
        console.log('Маловато топлива');
        return
    }

    const averageTravelTime = kilometers / averageSpeed
    console.log('Среднее время в пути: ' + averageTravelTime + ' ч.');

    if (kilometers < fuel / this.fuelConsumption * 100) {
        console.log('В пути не нужна дозаправка');
    } else {
        const missingKilometers = kilometers - fuel / this.fuelConsumption * 100
        const missingFuel = missingKilometers / this.fuelConsumption
        console.log('Нужно дозаправиться на ' + missingFuel + ' литров топлива');
    }
}
// CAR END ==================================================================================================

// BMW ======================================================================================================
function BMW(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption) {
    this.__proto__ = new Car(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption)

    this.wheelDrive = 'front-wheel'
    this.panoramiсRoof = true

    this.takePartInRaces = function (){
        return this.maxSpeed > 200 
    }
}
// BMW END ==================================================================================================

// MERCEDES =================================================================================================
function Mercedes(name, model, year, color, maxSpeed, price, fuelCapacity, fuelConsumption) {
    this.__proto__ = new Car(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption)

    this.price = price

    this.getPrice = function (){
        return this.price
    }
}
// MERCEDES END =============================================================================================

// UAZ ======================================================================================================
function UAZ(name, model, year, color, maxSpeed, owner) {
    this.__proto__ = new Car(name, model, year, color, maxSpeed)

    this.owner = owner

    this.getOwner = function (){
        return this.owner
    }
}
// UAZ END ==================================================================================================

console.log('***************   ES5   ***************');

const myBMW = new BMW('BMW', 'X5', 2010, 'red', 300, 60, 15)
console.log('*** BMW ***');
console.log('get full name: ', myBMW.getFullName());
console.log('Get age: ', myBMW.getAge())
myBMW.calculateWay(700, 20)
console.log('');

const myBrotherMercedes = new Mercedes('Mercedes', 'S600', 2020, 'white', 350, 120_000, 80, 20)
console.log('*** Mercedes ***');
console.log(myBrotherMercedes);
console.log('get full name: ', myBrotherMercedes.getFullName());
console.log('get price: ', myBrotherMercedes.getPrice())
console.log('get age: ', myBrotherMercedes.getAge())
myBrotherMercedes.calculateWay(300, 60)
console.log('');

const myDadCar = new UAZ('UAZ', 2021, 1990, 'grey', 70, 'myDad')
console.log('*** UAZ ***');
console.log(myDadCar)
console.log('get full name: ', myDadCar.getFullName())
myDadCar.calculateWay(50, 9)
console.log('get owner: ',myDadCar.getOwner())
console.log('');
//! ES6 =====================================================================================================
// CAR2 =====================================================================================================
class Car2 {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        this.name = name
        this.model = model
        this.year = year
        this.color = color
        this.maxSpeed = maxSpeed
        this.fuelCapacity = fuelCapacity
        this.fuelConsumption = fuelConsumption
    }

    getFullName() {
        return `${this.name} ${this.model}`
    }

    getAge() { 
        return new Date().getFullYear() - this.year
    }

    changeColor(newColor) {
        if (newColor.toLowerCase() === this.color.toLowerCase()) {
        console.log('Авто уже покрашено в ' + this.color +  ' цвет')
        } else {
        this.color = newColor
        console.log('Новый цвет авто: ' + newColor);
        }
    }

    calculateWay(kilometers, fuel) {
        const averageSpeed = 50
        
        if (fuel < 10) {
        console.log('Маловато топлива');
        return
        }

        const averageTravelTime = kilometers / averageSpeed
        console.log('Среднее время в пути: ' + averageTravelTime + ' ч.');

        if (kilometers < fuel / this.fuelConsumption * 100) {
        console.log('В пути не нужна дозаправка');
        } else {
        const missingKilometers = kilometers - fuel / this.fuelConsumption * 100
        const missingFuel = missingKilometers / this.fuelConsumption
        console.log('Нужно дозаправиться на ' + missingFuel + ' литров топлива');
        }
    }
}
// CAR2 END =================================================================================================

// OPEL =====================================================================================================
class Opel extends Car2 {
    constructor(price, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption)
        this.price = price
    }

    getPrice() {
        return this.price 
    }
}
// OPEL END =================================================================================================

// FERRARI ==================================================================================================
class Ferrari extends Car2 {
    constructor(driver, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption)
        this.driver = driver
    }

    getDriverName() {
        return this.driver
    }
}
// FERRARI END ==============================================================================================

// ZAZ ======================================================================================================
class ZAZ extends Car2 {
    constructor(owner, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption)
        this.owner = owner
    }

    getOwner() {
        return this.owner
    }
}
// ZAZ END ==================================================================================================

console.log('***************   ES6   ***************');

const opel = new Opel(2000, 'Opel', 'Astra', 1999, 'smoke', 150, 50, 13)
console.log('*** Opel ***');
console.log('get full name: ',opel.getFullName());
console.log('get age: ',opel.getAge())
console.log('');


const ferrari = new Ferrari('Michael Schumacher', 'Ferrari', 'ENZO', 2019, 'red', 350, 150, 30)
console.log('*** Ferrari ***');
console.log(ferrari);
ferrari.changeColor('white')
console.log('');

const zaz = new ZAZ('Somebody', 'ZAZ', 'ZP1', 1960, 'yellow', 80, 45, 15)
console.log('*** ZAZ ***');
console.log(zaz);
console.log('get owner: ',zaz.getOwner());