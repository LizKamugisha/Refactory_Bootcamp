/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-alert */
const JSONFileStorage = require('node-json-file-storage');

const file = './library_contact.js';
const storage = new JSONFileStorage(file);

const $ = function (id) { return document.getElementById(id); };
const contacts = [];

const displayContacts = function () {
	// clear previous
	contacts.length = 0;
	$('contacts').innerHTML = '';

	// get contacts from storage and initialize a variable to hold html string
	const array = storage.getContacts();
	let html = '';

	// loop array from storage, create new Contact objects, store
	// them in contacts array and use the displayContact method for display
	// eslint-disable-next-line no-plusplus
	for (let i = 0; i < array.length; i++) {
		const contact = new Contact();
		contact.loadJsonObject(array[i]);
		html = html.concat('<tr><td>', contact.displayContact(), '</td></tr>');
		contacts[i] = contact;
	}

	// display html string and set focus on first textbox
	$('contacts').innerHTML = html;
	$('first').focus();
};

const addContact = function () {
	// get values from textboxes
	const first = $('first').value;
	const last = $('last').value;
	const phone = $('phone').value;

	// use values to create a new Contact object
	const contact = new Contact(first, last, phone);

	// contact is valid,
	if (contact.isValid()) {
		// add contact to array and reset local storage
		contacts.push(contact);
		storage.setContacts(contacts);

		// clear text boxes and re-display contacts
		// eslint-disable-next-line no-use-before-define
		clearTextBoxes();
		displayContacts();
	} else {
		alert('Please enter a first and last name, and a phone number or email address.');
		$('first').focus();
	}
};

let clearTextBoxes = function () {
	$('first').value = '';
	$('last').value = '';
	$('phone').value = '';
};

const eraseContacts = function () {
	storage.clearContacts();
	contacts.length = 0;
	$('contacts').innerHTML = '';
	$('first').focus();
};

window.onload = function () {
	$('add_contact').onclick = addContact;
	$('erase').onclick = eraseContacts;
	displayContacts();
};
