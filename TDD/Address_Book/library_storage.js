/* eslint-disable no-unused-vars */
const JSONFileStorage = require('node-json-file-storage');

const storage = {
	keyContacts: 'contacts_1',
	getContacts() {
		// get string from local storage
		// convert string to JavaScript object and return, or return empty array if string is null
		const storageString = localStorage.getItem(this.keyContacts) || null;
		return JSON.parse(storageString) || [];
	},
	setContacts(value) {
		// convert JavaScript object to string
		let storageString = '[';
		// eslint-disable-next-line no-plusplus
		for (let i = 0; i < value.length; i++) {
			const contact = value[i];
			storageString = `${storageString}{ "f":"${contact.firstName}","l":"${contact.lastName}","p":"${contact.phone}"`;
		}
		storageString = storageString.substr(0, storageString.lastIndexOf(','));
		storageString = `${storageString}]`;
		console.log(storageString);
		// store string in local storage
		localStorage.setItem(this.keyContacts, storageString);
	},
	clearContacts() {
		localStorage.setItem(this.keyContacts, '');
	},
};
