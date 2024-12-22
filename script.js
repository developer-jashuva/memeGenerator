const MemeBtn = document.querySelector(".meme-container .meme-btn");
const MemeImg = document.querySelector(".meme-container  img");
const MemeTitle = document.querySelector(".meme-container .meme-title");
const MemeAuthor = document.querySelector(".meme-container .meme-author");

const updateDetails= (url,title,author)=>{
    
    MemeImg.setAttribute("src",url);
    MemeTitle.innerHTML= title;
    MemeAuthor.innerHTML= `meme by: ${author}`;
};
const  Gen = async()=>{
     await fetch("https://meme-api.com/gimme").then((response)=>response.json()).then(data=>{
       // console.log(data);
        //console.log(data.url);
        updateDetails(data.url,data.title,data.author);
    });
};
//MemeBtn.addEventListener("click",Gen()); 
Gen();