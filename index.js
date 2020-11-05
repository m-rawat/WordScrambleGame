const msg=document.querySelector(".msg");
const input=document.querySelector("input");
const btn=document.querySelector(".btn");

let play=false;
let newWords="";
let randWords="";
let words=["python","javascript","mongodb","mongoose","cyber","abesit","college","engineering","swift","android","apple","samsung","vodafone","webdevelopment","mobile","laptop","microsoft","amazon","paytm","wipro","pizza","burger","colddrink","sandwich","cake","coke","computer","science","technology","machine","intelligent","nodejs","express","react","angular","electronics","light","love"];

const createNewWords=()=>{
    let ranNum=Math.floor(Math.random() * words.length);
    let  newTempWords=words[ranNum];
    return newTempWords;
}

const scrambleWords=(arr)=> {
    for(let i=arr.length-1; i>0; i--){
        let temp;
        temp=arr[i];
        let j=Math.floor(Math.random() * (i+1));
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}

btn.addEventListener("click",function(){
    if(!play){
        play=true;
        btn.innerHTML="Guess the word";
        input.classList.toggle("hidden");
        newWords=createNewWords();
        randWords=scrambleWords(newWords.split("")).join("");
        msg.innerHTML=`Guess The Word - ${randWords}`;
    }else{
        let tempWord=input.value;
        if(newWords===tempWord){
            play=false;
            msg.innerHTML=`You guess correcr word - ${tempWord}`;
            btn.innerHTML='Start the game again';
            input.classList.toggle("hidden");
            input.value="";
        }
        else{
            msg.innerHTML=`you guess wrong word , please guess the word again - ${randWords}`;
            btn.innerHTML=`try again`;
;        }
    }
})