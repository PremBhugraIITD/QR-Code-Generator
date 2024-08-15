/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";
const question = [
  {
    type: "input",
    name: "URL",
    message: "Type the URL for which the QR Code needs to be generated.",
  },
];

inquirer.prompt(question).then((answer) => {
  fs.writeFile("URL.txt", answer.URL, (err) => {
    if (err) throw err;
    var qr_png = qr.image(answer.URL, { type: 'png' });
    qr_png.pipe(fs.createWriteStream("qrCode.png"));
    console.log(`Your QR Code for the URL: ${answer.URL} has been generated.`);
  });
});
