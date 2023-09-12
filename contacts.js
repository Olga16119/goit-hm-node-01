const path = require("path");
const fs = require("fs/promises");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  const data = fs.readFile(contactsPath, "utf-8");
  return data;
};

const getContactById = async (id) => {
  const data = await listContacts();
  const contacts = JSON.parse(data);

  const result = contacts.find((item) => item.id === id);
  return result || null;
};

const addContact = async (data) => {
  const dataContacts = await listContacts();
  const contacts = JSON.parse(dataContacts);
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const deleteContact = async (id) => {
  const data = await listContacts();
  const contacts = JSON.parse(data);
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
