const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
    "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?","/"];  

let passwordLength = 15;
const firstPassword = document.getElementById("first-password")
const secondPassword = document.getElementById("second-password")
const generateEl = document.getElementById("generate-el")
function run(){
    let password = '';
    for(let i = 0; i < passwordLength; i++){   
        let first = Math.floor(Math.random() * characters.length)
        password += characters[first]
    }
    return password
}

function generate(){
    firstPassword.textContent = `${run()}`
    secondPassword.textContent = `${run()}`
}