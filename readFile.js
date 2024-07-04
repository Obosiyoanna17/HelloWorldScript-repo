const { Console } = require("node:console");
const fs = require("node:fs");
filePath = path.join("C:\\Users\\DSS\\Desktop\\30 days of coding challenge\\writtenText.txt'")
fs.readFile( "filePath", "writtenText.txt", "utf-8", (error, data) =>{
    if (error) {
      console.error(error);
      return;
    } else {
      console.log(data)
    }
    })
const content = "Hello Worldddddddd!, I love love coding 😊";
//  Name, content and callback function incase of an error
fs.writeFile('writtenText.txt', content, (error) => {
    if (error) {
        console.error(error);
        return;
        
    } else{
        console.log(content)
    }
});