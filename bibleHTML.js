/*let header = document.createElement("header");
header.innerHTML = `
<nav>
    <ul>
        <li>
            <a class="mb-5" href="/">
                The Holy Name Bible
            </a>
        </li>
        <li>
            <a class="mb-5" href="/Volume%201/index.html">
                Vol 1
            </a>
        </li>
        <li>
            <a class="mb-5" href="/">
                Vol 2
            </a>
        </li>
        <li>
            <a class="mb-5" href="/">
                Vol 3
            </a>
        </li>
        <li>
            <a class="mb-5" href="/">
                Vol 4
            </a>
        </li>
    </ul>
    
    
    <form action="/search.html">
        <div class="mt-3 mb-3 input-group">
            <button id="button-addon1" type="submit" class="btn btn-outline-secondary">
                Search
            </button>
            <input required="" aria-label="Example text with button addon" aria-describedby="basic-addon1" class="form-control" value="">
        </div>
    </form>
</nav>`;
document.querySelector(".container").prepend(header);
*/




let versesHTML = "";
for (let book of Bible) {
    // if the book number matches what's in the data layer
    if (book.Book == digitalData.book) {
         // verse links
         let verseLink = `<tr><td class="chapterLinks"><a aria-current="page"  href="/bible.html?bookNumber=${bookNumber}&bookName=${bookName}&chapter=${book.Chapter}">${book.Chapter}</a></td></tr>`;
         if (!versesHTML.includes(verseLink)){
            versesHTML += verseLink;
         }
         

         // if the book number and chapter number match what's in the data layer
         if (book.Book == digitalData.book && book.Chapter == digitalData.chapter) {
            
     
             // verse
             let verse = document.createElement("p");
             verse.id = "v" + book.Verse;
             let verseNumber = document.createElement("span");
             verseNumber.classList.add("verseNumber");
             
             verseNumber.ariaHidden = true;
             verseNumber.innerText = book.Chapter + ":" + book.Verse;
             //console.log(verseNumber);
             verse.innerHTML = verseNumber.outerHTML + " " + book.Scripture;
             document.querySelector("div.book").append(verse);
     
             // footnotes
             if (book.Footnote){
                 //console.log(book.Footnote[0]);
                 let footnote = document.createElement("p");
                 footnote.classList.add("footnote");
                 footnote.innerText = book.Footnote[0];
                 document.querySelector("div.footnotes").append(footnote)
             }
         }
    }
}
document.querySelector("#chapters tbody").innerHTML = versesHTML;

// current chapter, disable link
[...document.querySelectorAll(".chapterLinks a")].filter(link => link.innerText == digitalData.chapter)[0].classList.add("current");

// add favicon
let favicon = document.createElement("link");
favicon.rel="shortcut icon";
favicon.type="image/x-icon";
favicon.href = "/favicon.ico";
document.head.append(favicon);

