'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */
function fn() {
	const user = { name: "Ivan" };
	let person = { name: "Angela" };

	person.name = "Angela";
	person = { name: "Angela" };
	user.name = "Dima";
    //user = { name: "Petro" };


	return { user, person };
}
module.exports = { fn };