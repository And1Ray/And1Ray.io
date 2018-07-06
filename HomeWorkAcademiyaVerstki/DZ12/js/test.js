describe('Таймер', function() {
	it('Возвращает ли наша функция объект?', function() {
		assert.typeOf(getTimeRemaining(), 'object');
	});

	describe('Общая сумма', function() {
		it('Изначально равен 0', function () {
			assert.equal(total, 0);
		});
	});
});