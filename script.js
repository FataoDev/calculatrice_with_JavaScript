
const tap=document.querySelectorAll('#button');
const calcul=document.querySelector('.calculation');
const result= document.querySelector('#equals');
const answer= document.querySelector('.answer');
const clear=document.querySelector('#clear');
const append = document.querySelector('#append');
const back = document.querySelector('#back');
const ajout=0
tap.forEach(val=>{
    val.addEventListener('click',()=>{
        if(answer.innerHTML!=''){
            const text1 = eval(`${calcul.textContent}`);
            calcul.textContent=text1;
            console.log(text1);
            answer.innerHTML=''
        }
        calcul.append(val.value);

    })
})

result.addEventListener('click',()=>{
    const text = eval(`${calcul.textContent}`);
    answer.innerHTML=text;
    // if(append=true){
    //     calcul.innerHTML=text;
    // }
})
clear.addEventListener('click',()=>{
    calcul.innerHTML='';
    answer.innerHTML=''
})

append.addEventListener('click',()=>{
    if(append==true){
        append=false;
    }
    else append=true;
})
back.addEventListener('click',()=>{
    const calc=calcul.textContent;
    const shortString=calc.substring(0,calc.length-1);
    calcul.innerHTML=shortString;

})
