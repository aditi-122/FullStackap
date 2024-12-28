import {baserUrl} from ".baserUrl.js";
let form = document.getElementById("cont1");
form.addEventListener("click",function(){
    Event.preventDefault();
    let title = this.title;
    let author = this.author;
    let category = this.category;
    let isAvailable = this.isAvailable;
    let isVerified = this.isVerified;
    let  imageUrl = this.imageUrl;
    let booksObj ={
        "title": "Book Title",
        "author": "Author Name",
        "category": "Fictional",
        "isAvailable": true,
        "isVerified": false,
        "borrowedDays": null,
        "imageUrl": "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
      };
      fetch({baserUrl}/books);
      {
        method :"Post",
        headers;{
           content-type;"application/json";
        }
        body:JSON.stringify(booksObj);
      } 
      then(()=>{
        alert("Books added sucefully")
      })
      .catch((err)=>{
        console.log(err);
      })
});
form.append(title,author,category,isAvailable,isVerified)
function getData(){
  fetch({baserUrl}/"admin");
   then((res)=>res.json())
   .then((data)=>{
    console.log(data);
   })
   .catch((err)=>{
    alert("something went wrong");
    form.request();
   })
   console.log(err);
 };
 function diplayBooks(arr){
    arr.map((el,i)=>{
    cont1.innerHTML="";
    let card = document.createElement("div");
    
    })
 }