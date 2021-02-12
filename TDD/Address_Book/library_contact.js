/* eslint-disable func-names */
// eslint-disable-next-line no-unused-vars
const JSONFileStorage = require('node-json-file-storage');

const Contact = function (first, last, phone) {
	if (arguments.length > 0) {
		this.firstName = first;
		this.lastName = last;
		this.phone = phone;
	}
};

Contact.prototype.isValid = function () {
	// must have first and last name, and phone number
	let isValid = true;
	if (this.firstName === '' || this.lastName === '' || this.phone === '') { isValid = false; }
	return isValid;
};

Contact.prototype.displayContact = function () {
	return this.firstName.concat(' ', this.lastName, ', ', '<br>Phone: ', this.phone, '<hr>');
};

Contact.prototype.loadJsonObject = function (obj) {
	if (obj) {
		this.firstName = obj.f;
		this.lastName = obj.l;
		this.phone = obj.p;
	}
};

Contact.prototype.toJSON = function () {
	// shorten property names for storage

};
