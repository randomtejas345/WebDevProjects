/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from 'qr-image';
import fs from "fs";
 
// var url="https://www.google.com"


import inquirer from "inquirer";
// inquirer.prompt("Hello what is your name",answer,(answer)=>{
//     console.log(answer);
// });

inquirer
  .prompt([
    {
        name:"url",
        type:"input",
        message:"Enter the url"
    }
//     {
//     name:"ques",
// message:"what is your name",
// type:"input"}
// {
//     name:"color",
//     message:"chose your favorite color",
//     type:"list",
//     choices:["black","white","red"]
// }
  ])
  .then((answer) => {
    // Use user feedback for... whatever!!
    // console.log(answer.ques);
    // console.log(answer.color);
    var url=answer.url;

    var qr_svg = qr.image(url, { type: 'png' });
    fs.writeFile("newtextURL.txt",url,(err)=>{
        if(err) throw err;
    });
qr_svg.pipe( fs.createWriteStream('qr.png'));
 
var svg_string = qr.imageSync(url, { type: 'png' });
    
  })