const classCards=document.querySelector(".class-cards");
const data= fetch("index.json");
if(data.response){
    console.log(data)
}