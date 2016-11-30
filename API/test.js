import test from 'ava';
import fn from './';

test('name', async t => {
	const "name" = await fn."function"();

	t.is("name"."prop", `"value"`
	);
});
