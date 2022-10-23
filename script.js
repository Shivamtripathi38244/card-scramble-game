// const wordText=document.querySelector(".word");

// const initGame = ()=>{
//     let randomObj = words[Math.floor(Math.random() * words.length)];
//     let wordArray=randomObj.word.split("");
//     for(let i=wordArray.length-1;i>0;i--){
//         let j=Math.floor(Math.random() * (i+1))
//         // suffling and swiping wordArray letters randomly
//         [wordArray[i],wordArray[j]]=[wordArray[j],wordArray[i]]
//     }
//     wordText.innerText=wordArray;
//     console.log(wordArray,randomObj.word);

// }
let words= [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
]
const wordText=document.querySelector(".word")
const hintText=document.querySelector(".hint span")
const timeText=document.querySelector(".time b")
const inputfield=document.querySelector("input");
const refreshbtn=document.querySelector(".refresh-word")
const checkbtn=document.querySelector(".check-word");
let correctword,timer;

const inittimer = maxTime =>{
    clearInterval(timer);
    timer=setInterval(()=>{
        if(maxTime>0){
            maxTime--;
          return  timeText.innerText=maxTime;
        }
        clearInterval(timer);
        alert(`Time Off ! ${correctword.toUpperCase()} was a correct word`)
        initGame();
    },1000);
}
const initGame = () => {
   inittimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray=randomObj.word.split("")

    for(let i=wordArray.length-1;i>0;i--){
        let j=Math.floor(Math.random() * (i + 1));
        [wordArray[i],wordArray[j]]=[wordArray[j],wordArray[i]];

    }
    wordText.innerText=wordArray.join("")
    hintText.innerText=randomObj.hint;
    console.log(randomObj,wordArray);
    correctword=randomObj.word.toLocaleLowerCase();
    inputfield.value="";
    inputfield.setAttribute("maxlenth",correctword.length)
  
}
initGame();

const checkword = () =>{
    let useword=inputfield.value.toLocaleLowerCase();
    if(!useword) return alert(`Enter The Word`);
    if(useword!=correctword) return alert(`Opps ${useword} is not a correct word `);
    alert(`congrats ${useword.toUpperCase()} is a correct word`);
    initGame();
}
// checkword();
refreshbtn.addEventListener("click",initGame);
checkbtn.addEventListener("click",checkword);