const path = require("path");
const fs = require("fs/promises");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  const dataContacts = await fs.readFile(contactsPath, "utf-8");
  const data = JSON.parse(dataContacts);
  return data;
};

const getContactById = async (id) => {
  const contacts = await listContacts();

  const result = contacts.find((item) => item.id === id);
  return result || null;
};

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const deleteContact = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  deleteContact,
};
