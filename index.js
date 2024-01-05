const XLSX = require('xlsx');
const fs = require('fs');

// Vos contacts comme chaîne de caractères
var contacts = "+237 77597918, +237 91519391, +237 6 96 53 15 29, +237 50742868, +237 6 95 78 25 61, +237 96011564, +1 (438) 229-4843, +237 61000064, +237 96179731, +237 95612669, +237 90541812, +237 97772713, +237 6 75 76 28 04, +237 6 76 40 06 42, +237 6 97 02 25 16, +237 99613558, +237 6 98 30 09 55, +49 1590 1346800, +237 91772899, +237 98364112, +49 1573 9308619, +237 75411961, +237 99620841, +237 97740482, +237 91704316, +237 99833585, +237 97547749, +237 6 51 37 45 03, +237 70611606, +237 97012835, +237 91175553, +237 99948413, +237 6 59 88 81 52, +237 96340050, +237 6 95 52 98 00, +237 6 94 20 35 70, +237 91487605, +237 91360364, +237 94719835, +237 6 72 71 01 25, +237 6 70 92 96 07, +237 6 99 52 92 80, +237 6 97 07 15 72, +33 6 56 78 45 92, +237 97146134, +237 75574364, +237 6 95 23 57 57, +237 6 95 68 30 32, +237 6 20 15 12 39, +1 (438) 938-4980, +237 76422369, +237 94101519, +237 97545508, +237 6 95 04 60 65, +237 77781700, +237 74769990, +237 6 97 45 74 52, +237 6 76 26 02 29, +237 97368419, +237 90408362, +237 51721992, +1 (438) 835-8652, +1 (514) 885-8989, +221 77 745 94 98, +225 57 41 75 57, +228 92 96 69 08, +237 50528258, +237 55480901, +237 55845533, +237 56587768, +237 61329131, +237 6 20 33 24 11, +237 6 51 78 75 11, +237 6 53 45 52 28, +237 6 55 14 95 24, +237 6 56 71 05 25, +237 6 73 05 11 43, +237 6 73 53 82 79, +237 6 74 24 47 81, +237 6 76 65 24 55, +237 6 77 13 18 30, +237 6 80 32 60 78, +237 6 90 52 19 03, +237 6 91 58 86 75, +237 6 94 19 45 29, +237 6 95 20 54 35, +237 6 95 54 69 16, +237 6 96 10 48 57, +237 6 96 41 41 08, +237 6 96 47 63 41, +237 6 96 50 27 27, +237 6 96 70 25 28, +237 6 97 04 78 23, +237 6 97 33 10 42, +237 6 99 00 55 39, +237 6 99 92 82 84, +237 6 99 94 70 35, +237 70316727, +237 73309247, +237 73365078, +237 75044767, +237 75564206, +237 76160272, +237 76343396, +237 77242468, +237 77255066, +237 77268887, +237 77397543, +237 77550475, +237 77624273, +237 77664798, +237 77685829, +237 78432876, +237 78452808, +237 78717453, +237 79370083, +237 79909724, +237 79977901, +237 90317750, +237 90471793, +237 90974793, +237 93834085, +237 93928289, +237 94207653, +237 94626907, +237 94681518, +237 95067034, +237 95150358, +237 95180920, +237 95788477, +237 95997735, +237 96179806, +237 96232286, +237 96347396, +237 96387716, +237 96437626, +237 96453132, +237 96791688, +237 96998190, +237 97833758, +237 98298248, +237 98570618, +237 98605860, +237 98609809, +237 98918085, +237 99023089, +237 99039680, +237 99233576, +237 99644588, +237 99835877, +242 06 856 9310, +33 6 69 40 05 83, +33 7 84 74 21 95, +41 79 737 63 81, +60 11-6114 6835, Vous"; // Remplacez ceci par vos contacts

// Diviser la chaîne en un tableau de contacts
var contactsArray = contacts.split(","); // Utilisez le bon séparateur

// Créer un nouveau classeur
var wb = XLSX.utils.book_new();

// Convertir les contacts en format attendu par la bibliothèque
var ws_data = contactsArray.map(contact => [contact]);

// Créer une nouvelle feuille à partir des contacts
var ws = XLSX.utils.aoa_to_sheet(ws_data);

// Ajouter la feuille au classeur
XLSX.utils.book_append_sheet(wb, ws, "Contacts");

// Écrire le fichier
XLSX.writeFile(wb, "contacts.xlsx");

console.log("Le fichier Excel a été créé !");
