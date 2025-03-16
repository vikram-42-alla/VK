const { error } = require("console")
const fs=require("fs")
const filepath='dis.txt'
const dataToWrite='Hello this is Vikram'
fs.writeFile(filepath,dataToWrite,(error)=>{
    if(error){
        console.log("Error writing to file");
    }
    else{
        console.log("Data written Successfully")
    }
})