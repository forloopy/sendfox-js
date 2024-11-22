# @forloopy/sendfox

**@forloopy/sendfox** is an open-source JavaScript library, built with loose TypeScript (with plans to include comprehensive types and definitions in the future), designed for NodeJS developers to interact with the [SendFox](https://sendfox.com?ref=forloopy/sendfox) API (by [Appsumo](https://appsumo.com?ref=forloopy/sendfox)). 

---

## Features

- Interact with the SendFox API effortlessly.
- Built with non-strict TypeScript for ease of use and flexibility.
- Fully supports ES Modules (ESM).
- Open source and free for the community.

---

### Introduction

All requests to the SendFox API require authentication. This is achieved by setting a Bearer token in the `Authorization` header.

To create this token, log in to your SendFox account, then go to:

[https://sendfox.com/account/oauth](https://sendfox.com/account/oauth)

Locate the "Personal Access Token" table. Click "Create New Token", and follow the steps.

Alternatively, if you are building a service to allow others to interact with the SendFox API, you can authenticate users by using an OAuth Client.

---

## Usage

To get started using this library, follow the examples below.

### Import

```javascript
import SendFox from 'forloopy/sendfox';
```

### Authenticate

```javascript
const sendfox = new SendFox({
    accessToken: `<ACCESS_TOKEN>`
}); 
```

### Me

```javascript
// Get info for authenticated user
const me = await sendfox.me();
console.log(me);
```

### Lists

```javascript
// Create list
const list = await sendfox.lists.create({ name: '<NAME>' });
console.log(list);

// Get list
const list = await sendfox.lists.get('<LIST_ID>');
console.log(list);

// Get all lists
const lists = await sendfox.lists.get({ page: '<PAGE_NUMBER>' });
console.log(lists);

// Get list contacts
const list = await sendfox.lists.get('<LIST_ID>');
const listContacts = await list.getContacts();
console.log(listContacts);

// Delete contact from list
const list = await sendfox.lists.get('<LIST_ID>');
const deleteContact = await list.deleteContact(<CONTACT_ID>);
console.log(deleteContact);
```

### Contacts
```javascript
// Create contact, and add to list(s)
const create = await sendfox.contacts.create({
	email: '<CONTACT_EMAIL>',
	first_name: '<CONTACT_FIRST_NAME>',
	last_name: '<CONTACT_LAST_NAME>',
	lists: ['<LIST_ID_1>','<LIST_ID_2>']
});

// Get list of unsubscribed contacts
const unsubscribed = await sendfox.contacts.unsubscribed();
console.log(unsubscribed);
```

### Unsubscribe
```javascript
// Unsubscribe contact
const unsubscribe = await sendfox.unsubscribe(<CONTACT_EMAIL>);
console.log(unsubscribe);
```

### Campaigns
```javascript
// Get campaign
const campaign = await sendfox.campaigns.get(<CAMPAIGN_ID>);
console.log(campaign);

// Get list of campaigns
const campaigns = await sendfox.campaigns.get({ page: '<PAGE_NUMBER>' });
console.log(campaigns);
```

### Automations
```javascript
// Get automation
const automation = await sendfox.automations.get(<AUTOMATION_ID>);
console.log(automation);

// Get list of automations
const automationa = await sendfox.automations.get({ page: '<PAGE_NUMBER>' });
console.log(automations);
```

## Configuration

Coming soon...

## Documentation

Coming soon...

## Contributing

At this time, this project isn't accepting contributions.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit).
