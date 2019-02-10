'use strict';

QUnit.module('Тестируем функцию letters', function () {
	QUnit.test('Оставляет без изменений строки, где все символы уникальны', function (assert) {
		assert.strictEqual(letters('1234'), '1234');
		assert.strictEqual(letters('abcd'), 'abcd');
		assert.strictEqual(letters('олдж фыва'), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t '), ',.;=\n\t ');

		assert.strictEqual(letters('1234', true), '1234');
		assert.strictEqual(letters('abcd', true), 'abcd');
		assert.strictEqual(letters('олдж фыва', true), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', true), ',.;=\n\t ');

		assert.strictEqual(letters('1234', false), '1234');
		assert.strictEqual(letters('abcd', false), 'abcd');
		assert.strictEqual(letters('олдж фыва', false), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', false), ',.;=\n\t ');
	});

	QUnit.test('Удаляет идущие подряд буквы', function (assert) {
		assert.strictEqual(letters('111'), '');
		assert.strictEqual(letters('www'), '');
		assert.strictEqual(letters('...'), '');
		assert.strictEqual(letters('   '), '');
	});

	QUnit.test('Оставляет первую букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', true), '12');
		assert.strictEqual(letters('wWw', true), 'wW');
		assert.strictEqual(letters('.-.', true), '.-');
		assert.strictEqual(letters(' 0 ', true), ' 0');
	});

	QUnit.test('Оставляет последнюю букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', false), '21');
		assert.strictEqual(letters('wWw', false), 'Ww');
		assert.strictEqual(letters('.-.', false), '-.');
		assert.strictEqual(letters(' 0 ', false), '0 ');
	});

	QUnit.test('Удаляет повторяющиеся буквы в разных словах', function (assert) {
		assert.strictEqual(letters('привет, мир'), 'пвет, м');
		assert.strictEqual(letters('hello, world'), 'he, wrd');
		assert.strictEqual(letters('мама мыла раму'), 'ылру');
		assert.strictEqual(letters('"Кукареку!", сказал Петух'), 'Кр!,сзлПтх');

		assert.strictEqual(letters('мама мыла раму', true), 'ма ылру');
		assert.strictEqual(letters('от топота копыт', true), 'от пакы');
		assert.strictEqual(letters('hello world', true), 'helo wrd');

		assert.strictEqual(letters('мама мыла раму', false), 'ыл раму');
		assert.strictEqual(letters('от топота копыт', false), 'а копыт');
		assert.strictEqual(letters('hello world', false), 'he world');
	});

    QUnit.test('Проверка первого входного параметра', function (assert) {
        assert.strictEqual(letters(123), null);
        assert.strictEqual(letters({}), null);
        assert.strictEqual(letters(null), null);
        assert.strictEqual(letters(opa => {return opa;}), null);

        assert.strictEqual(letters(123, true), null);
        assert.strictEqual(letters({}, true), null);
        assert.strictEqual(letters(null, true), null);
        assert.strictEqual(letters(opa => {return opa;}, true), null);

        assert.strictEqual(letters(123, false), null);
        assert.strictEqual(letters({}, false), null);
        assert.strictEqual(letters(null, false), null);
        assert.strictEqual(letters(opa => {return opa;}, false), null);
	});

	QUnit.test('Проверка второго входного параметра', function (assert) {
		assert.strictEqual(letters('Hello world', 'ныа'), null);
        assert.strictEqual(letters('Hello world', 123), null);
        assert.strictEqual(letters('Hello world', {}), null);
        assert.strictEqual(letters('Hello world', null), null);
        assert.strictEqual(letters('Hello world', opa => {return opa;}), null);

        assert.strictEqual(letters('Hello world', 'ныа'), null);
        assert.strictEqual(letters('Hello world', 123), null);
        assert.strictEqual(letters('Hello world', {}), null);
        assert.strictEqual(letters('Hello world', null), null);
        assert.strictEqual(letters('Hello world', opa => {return opa;}), null);
    });
});
