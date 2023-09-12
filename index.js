const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    // case "readContacts":
    //   const allContacts = await contacts.listContacts();
    //   return console.log(allContacts);
    case "getContactById":
      const oneContact = await contacts.getContactById(id);
      // return console.log(oneContact);
    //   case "addContact":
    //     const newContact = await contacts.addContact({ name, email, phone });
    //     return console.log(newContact);
    //   case "removeContact":
    //     const deleteContact = await contacts.deleteContact(id);
    //     return console.log(deleteContact);
    // }
  }
};

// invokeAction({ action: "readContacts" });
invokeAction({ action: "getContactById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({ action: "removeContact", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "addContact",
//   name: "Alex Brit",
//   email: "alex123@mail.com",
//   phone: "38-(087)-345-32-22",
// })
