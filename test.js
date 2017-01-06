import test from 'ava';
import satdPatterns from './';

test('isArray', t => {
	t.true(Array.isArray(satdPatterns));
});

test('hasElements', t => {
	t.true(satdPatterns.length > 1);
});

test('containsAKeyword', t => {
	t.true(satdPatterns.indexOf('hack') > -1);
});
