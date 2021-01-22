describe('UNIT TESTS', function () {

    describe('ES5 Classes', function () {

        describe('class BMW', function () {
            
            const bmw = new BMW('BMW', 'X7', 2020, 'white', 300, 70, 15);

            it('check BMW model', function () {
                const bmwModel = bmw.model
                const expectedModel = 'X7'
                assert.equal(bmwModel, expectedModel);
            });

            it('check BMW color', function () {
                const bmwColor = bmw.color
                const expectedColor = 'white'
                assert.equal(bmwColor, expectedColor);
            });

            it('check BMW wheelDrive', function () {
                const bmwWheelDrive = bmw.wheelDrive
                const expectedWhellDrive = 'front-wheel'
                assert.equal(bmwWheelDrive, expectedWhellDrive);
            });
            
            it('check BMW function takePartInRaces()', function () {
                const bmwCanTakePartInRaces = bmw.takePartInRaces()
                assert.isTrue(bmwCanTakePartInRaces);
            });
        });

        describe('class Mercedes', function () {
            
            const mercedes = new Mercedes('Mercedes', 'CLK320', 2000, 'white', 270, 20_000, 60, 17)

            it('check Mercedes model', function () {
                const mercedesModel = mercedes.model
                const expectedModel = 'CLK320'
                assert.equal(mercedesModel, expectedModel);
            });

            it('check Mercedes color', function () {
                const mercedesColor = mercedes.color
                const expectedColor = 'white'
                assert.equal(mercedesColor, expectedColor);
            });
            
            it('check Mercedes function getPrice()', function () {
                const mercedesPrice = mercedes.getPrice()
                const expectedPrice = 20000;
                assert.equal(mercedesPrice, expectedPrice);
            });
        });

        describe('class UAZ', function () {
            
            const testUAZ = new UAZ('UAZ', 2021, 1990, 'grey', 70, 'John')

            it('check UAZ function getOwner()', function () {
                const testUAZOwner = testUAZ.getOwner()
                const expectedOwner = 'John'
                assert.equal(testUAZOwner, expectedOwner);
            });

            it('check UAZ function getFullName()', function () {
                const testUAZFullName = testUAZ.getFullName()
                const expectedFullName = 'UAZ 2021'
                assert.equal(testUAZFullName, expectedFullName);
            });

        });

    });

    describe('ES6 Classes', function () {

        describe('class Opel', function () {
            
            const opel = new Opel(2000, 'Opel', 'Astra', 1999, 'smoke', 150, 50, 13)

            it('check Opel model', function () {
                const opelModel = opel.model
                const expectedModel = 'Astra'
                assert.equal(opelModel, expectedModel);
            });

            it('check Opel color', function () {
                const opelColor = opel.color
                const expectedColor = 'smoke'
                assert.equal(opelColor, expectedColor);
            });

            it('check Opel function getPrice()', function () {
                const opelPrice = opel.getPrice()
                const expectedPrice = 2000
                assert.equal(opelPrice, expectedPrice);
            });

        });

        describe('class Ferrari', function () {
            
            const ferrari = new Ferrari('Fernando Alonso', 'Ferrari', '488 Pista', 2019, 'red', 400, 100, 30)

            it('check Ferrari fuelCapacity', function () {
                const ferrariFuelCapacity = ferrari.fuelCapacity
                const expectedCapacity = 100
                assert.equal(ferrariFuelCapacity, expectedCapacity);
            });

            it('check Ferrari fuelConsumption', function () {
                const ferrariFuelConsumption = ferrari.fuelConsumption
                const expectedFuelConsuption = 30
                assert.equal(ferrariFuelConsumption, expectedFuelConsuption);
            });
            
            it('check Ferrari function getDriverName()', function () {
                const ferrariDriverName = ferrari.getDriverName()
                const expectedDriverName = 'Fernando Alonso'
                assert.equal(ferrariDriverName, expectedDriverName);
            });
        });

        describe('class ZAZ', function () {
            
            const zaz = new ZAZ('Somebody', 'ZAZ', 'ZP1', 1960, 'yellow', 80)

            it('check ZAZ fuelConsumption by default value', function () {
                const zazFuelConsumption = zaz.fuelConsumption
                const expectedFuelConsuption = 10
                assert.equal(zazFuelConsumption, expectedFuelConsuption);
            });

            it('check ZAZ fuelCapacity by default value', function () {
                const zazFuelCapacity = zaz.fuelCapacity
                const expectedFuelCapacity = 60
                assert.equal(zazFuelCapacity, expectedFuelCapacity);
            });

            it('check ZAZ year', function () {
                const zazYear = zaz.year
                const expectedYear = 1960
                assert.equal(zazYear, expectedYear);
            });

        });

    });
    
});