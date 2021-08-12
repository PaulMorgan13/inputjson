let albums =[];    

const addAlbum = (oz) =>{
    oz.preventDefault();  

    let album ={
            id:Date.now(), 
            title: document.getElementById("title").value, 
            year: document.getElementById("yr").value
    }   

    albums.push(album);
    document.querySelector("form").reset();   


    //to display 
   console.warn("added", {albums});
    let pre = document.querySelector("#msg pre");
    pre.textContent = "\n" + JSON.stringify(albums, "\t",2); 


}   

document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("btn").addEventListener("click",addAlbum)
});