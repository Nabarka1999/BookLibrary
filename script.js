// https://www.googleapis.com/books/v1/volumes?q=quilting


let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", fetchBooks);

let allBooks = document.getElementById("allBooks");

let content = "";

async function fetchBooks(){
    // step1 - user input
    let bookTitle= document.getElementById("bookTitle").value;

    // // step2 - create the request
    // let myReq= new XMLHttpRequest();  // readyState = 0
    // myReq.open("GET", `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`);

    // // step3 - send the request to the received respnse
    // myReq.send();
    // // step4 - convert response to JS object
    // myReq.onreadystatechange = ()=>{
    //     if(myReq.readyState===4 && myReq.status===200){

    let respnse= await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`);
    let convBooks = await respnse.json();
            let newbook= convBooks.items.map(
                (book)=>
                `<div class="book">
                    <img src=${book.volumeInfo.imageLinks.thumbnail}/>
                    <h1>${book.volumeInfo.title}</h1>
                    <p>${book.volumeInfo.description}</p>
                </div>`
            ).join("");

        content += newbook;
        allBooks.innerHTML = content;
    // };
    

    // step5 - Display on the front
}

