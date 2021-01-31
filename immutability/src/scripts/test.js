import {My_Math} from './My_Math.js'
describe('Math function', () => {
    it('should perform basic math operations', () => {
        const result = My_Math(5)
                        .plus(10)
                        .minus(12)
                        .divide(0)
                        .value();
        assert.strictEqual(result, 3)
    });

    it('should calculate a factorial of an integer', () => {
        const result_1 = My_Math(5).factorial().value()
        assert.strictEqual(result_1, 120)

        const result_2 = My_Math(0).factorial().value()
        assert.strictEqual(result_2, 1)

        const result_3 = My_Math(-1).factorial().value()
        assert.strictEqual(result_3, 1)

        const result_4 = My_Math(1).factorial().value()
        assert.strictEqual(result_4, 1)
    });

    it('should revert integer\'s sign', () => {
        const result_1 = My_Math(1).revert().value()
        assert.strictEqual(result_1, -1)

        const result_2 = My_Math(-1).revert().value()
        assert.strictEqual(result_2, 1)
    });

    it('.format method should perform an action defined in a callback passed to it', () => {
        function getStr(val) {
            return `The result is ${val}`;
        }
        const result = My_Math(1).format(getStr)
        assert.strictEqual(result, 'The result is 1')
    });

    it('all methods except .format must return context', () => {
        const result = My_Math(5).plus(5)
        assert.typeOf(result, 'object')
    });

    it('.format should not return context', () => {
        function getStr(val) {
            return `The result is ${val}`;
        }
        const result = My_Math(1).format(getStr)
        assert.notTypeOf(result, 'object')
    })
})