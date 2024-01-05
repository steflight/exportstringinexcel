const XLSX = require('xlsx');

const contactsString = "111111, 2222222, +22222222";
const separator = ",";

// Fonction fléchée pour créer un classeur à partir d'un tableau de contacts
const createWorkbookFromContacts = (contacts) => {
    const workbook = XLSX.utils.book_new();
    const worksheetData = contacts.map(contact => [contact]);
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");
    return workbook;
};

// Fonction principale exécutant le script
const main = () => {
    const contactsArray = contactsString.split(separator);
    const workbook = createWorkbookFromContacts(contactsArray);

    const fileName = "contacts.xlsx";
    XLSX.writeFile(workbook, fileName);
    console.log(`Le fichier ${fileName} a été créé !`);
};

// Exécuter le script
main();
