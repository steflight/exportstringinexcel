const XLSX = require('xlsx');
const fs = require('fs');

test('Le fichier Excel est créé', () => {
    // Exécuter votre script de création de fichier Excel
    // Vérifier que le fichier existe
    const filename = "contacts.xlsx";
    expect(fs.existsSync(filename)).toBe(true);
});

test('Le fichier Excel contient les bons contacts', () => {
    // Lire le contenu du fichier
    const workbook = XLSX.readFile('contacts.xlsx');
    const ws = workbook.Sheets[workbook.SheetNames[0]];

    // Convertir les données de la feuille en format JSON pour faciliter la vérification
    const data = XLSX.utils.sheet_to_json(ws);

    // Vérifier que chaque contact est présent
    expect(data).toEqual(expect.arrayContaining([{ A: 'contact1' }, { A: 'contact2' }, { A: 'contact3' }]));
});
