(() => {
  let header = document.createElement("header");
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
            <li>
                <a class="mb-5" href="/popular_verses.html">
                    Popular Verses
                </a>
            </li>
        </ul>
        <form action="/search.html" method="GET"><div class="mt-3 mb-3 input-group"><button id="button-addon1" type="submit" class="btn btn-outline-secondary">Search</button><input id="search" name="search" required="" aria-label="Example text with button addon" aria-describedby="basic-addon1" class="form-control" value=""></div></form>
        </nav>
    `;
  document.querySelector(".container").prepend(header);
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    let search = document.querySelector("#search").value;
    console.log({search})
    location.href = "/search.html?query=" + search;
  });

  let params = new URL(document.location).searchParams;
  let query = params.get("query");

  // return query to input
  document.querySelector("#search").value = query;

  let searchingFor = document.createElement("h1");
  searchingFor.innerText = query;
  header.after(searchingFor);

  let books = [
    ,
    "Genesis",
    "Exodus",
    "Leviticus",
    "Numbers",
    "Deuteronomy",
    "Joshua",
    "Judges",
    "Ruth",
    "1 Samuel",
    "2 Samuel",
    "1 Kings",
    "2 Kings",
    "1 Chronicles",
    "2 Chronicles",
    "Ezra",
    "Nehemiah",
    "Esther",
    "Job",
    "Psalms",
    "Proverbs",
    "Ecclesiastes",
    "Song of Solomon",
    "Isaiah",
    "Jeremiah",
    "Lamentations",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "The Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Judah",
    "Revelation",
  ];

  for (let verseObj of Bible) {
    if (
      query &&
      verseObj.Scripture?.toLowerCase().includes(decodeURI(query).toLowerCase())
    ) {
      console.log(verseObj.Scripture);
      // verse
      let verse = document.createElement("p");
      let verseNumber = document.createElement("span");
      verseNumber.classList.add("verseNumber");

      verseNumber.ariaHidden = true;
      verseNumber.innerText =
        books[verseObj.Book] + " " + verseObj.Chapter + ":" + verseObj.Verse;
      console.log(verseNumber);
      verse.innerHTML =
        `<a href="/bible.html?chapter=${verseObj.Chapter}&bookNumber=${verseObj.Book}#v${
          verseObj.Verse
        }" style="text-decoration:none;">` +
        verseNumber.outerHTML +
        "</a>" +
        " " +
        `<span class="verse">${verseObj.Scripture}</span>`;

      document.querySelector("div.container").append(verse);
    }
  }

  // highlighting
  document.querySelectorAll(".verse").forEach((p) => {
    let regex = new RegExp(query, "igm");
    console.log(regex);
    p.innerHTML = p.innerHTML.replace(regex, (match) => {
      console.log(match)
      return `<span class="highlight">${match}</span>`;
    });
  });
})();
