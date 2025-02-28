const input=document.getElementById('message');
const button=document.querySelector('.button-send');

const container=document.querySelector('.msg-box');

let arr=["Hii","Hello","How can i help you?"];
button.addEventListener('click',()=>{
   const paragraph=document.createElement('p');
   paragraph.innerHTML=`<b>${input.value}</b>`;
   paragraph.classList.add('para');
   container.appendChild(paragraph);

   input.value='';
   container.scrollTop = container.scrollHeight;
   const paragraphreply=document.createElement('p');
   paragraphreply.classList.add('para1');
   setTimeout(()=>{
    let randomIndex=Math.floor(Math.random()*3);
    console.log(randomIndex)
    paragraphreply.innerHTML=`<b>${arr[randomIndex]}</b>`;
        container.appendChild(paragraphreply);
        container.scrollTop = container.scrollHeight;
   },1000)
  
})