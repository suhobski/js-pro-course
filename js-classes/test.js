describe('UNIT TESTS', function () {

    describe('ES5 Classes', function () {

        describe('class BMW', function () {
            
            const bmw = new BMW('BMW', 'X7', 2020, 'white', 300, 70, 15);

            it('check BMW model', function () {
                const bmwModel = bmw.model
                assert.equal(bmwModel, 'X7');
            });

            it('check BMW color', function () {
                const bmwColor = bmw.color
                assert.equal(bmwColor, 'white');
            });

            it('check BMW wheelDrive', function () {
                const bmwWheelDrive = bmw.wheelDrive
                assert.equal(bmwWheelDrive, 'front-wheel');
            });
            
            it('check BMW function takePartInRaces()', function () {
                const bmwCanTakePartInRaces = bmw.takePartInRaces()
                assert.isTrue(bmwCanTakePartInRaces);
            });
        });

        describe('class Mercedes', function () {
            
            const testMercedes = new Mercedes('Mercedes', 'CLK320', 2000, 'white', 270, 20_000, 60, 17)

            it('check Mercedes model', function () {
                const testMercedesModel = testMercedes.model
                assert.equal(testMercedesModel, 'CLK320');
            });

            it('check Mercedes color', function () {
                const testMercedesColor = testMercedes.color
                assert.equal(testMercedesColor, 'white');
            });
            
            it('check Mercedes function getPrice()', function () {
                const testMercedesPrice = testMercedes.getPrice()
                assert.equal(testMercedesPrice, 20000);
            });
        });

        describe('class UAZ', function () {
            
            const testUAZ = new UAZ('UAZ', 2021, 1990, 'grey', 70, 'John')

            it('check UAZ function getOwner()', function () {
                const testUAZOwner = testUAZ.getOwner()
                assert.equal(testUAZOwner, 'John');
            });

            it('check UAZ function getFullName()', function () {
                const testUAZFullName = testUAZ.getFullName()
                assert.equal(testUAZFullName, 'UAZ 2021');
            });

        });

    });

    describe('ES6 Classes', function () {

        describe('class Opel', function () {
            
            const opel = new Opel(2000, 'Opel', 'Astra', 1999, 'smoke', 150, 50, 13)

            it('check Opel model', function () {
                const opelModel = opel.model
                assert.equal(opelModel, 'Astra');
            });

            it('check Opel color', function () {
                const opelColor = opel.color
                assert.equal(opelColor, 'smoke');
            });

            it('check Opel function getPrice()', function () {
                const opelPrice = opel.getPrice()
                assert.equal(opelPrice, 2000);
            });

        });

        describe('class Ferrari', function () {
            
            const ferrari = new Ferrari('Fernando Alonso', 'Ferrari', '488 Pista', 2019, 'red', 400, 100, 30)

            it('check Ferrari fuelCapacity', function () {
                const ferrariFuelCapacity = ferrari.fuelCapacity
                assert.equal(ferrariFuelCapacity, 100);
            });

            it('check Ferrari fuelConsumption', function () {
                const ferrariFuelConsumption = ferrari.fuelConsumption
                assert.equal(ferrariFuelConsumption, 30);
            });
            
            it('check Ferrari function getDriverName()', function () {
                const ferrariDriverName = ferrari.getDriverName()
                assert.equal(ferrariDriverName, 'Fernando Alonso');
            });
        });

        describe('class ZAZ', function () {
            
            const zaz = new ZAZ('Somebody', 'ZAZ', 'ZP1', 1960, 'yellow', 80)

            it('check ZAZ fuelConsumption by default value', function () {
                const zazFuelConsumption = zaz.fuelConsumption
                assert.equal(zazFuelConsumption, 10);
            });

            it('check ZAZ fuelCapacity by default value', function () {
                const zazFuelCapacity = zaz.fuelCapacity
                assert.equal(zazFuelCapacity, 60);
            });

            it('check ZAZ year', function () {
                const zazYear = zaz.year
                assert.equal(zazYear, 1960);
            });

        });

    });
});