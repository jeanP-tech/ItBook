const library = document.getElementById("library");

function generateLibrary () {

  for (var i = 0; i < 21; i++) {
    const book = document.createElement("div");
    book.className = 'book';
    library.appendChild(book);

    const coverImg = new Image();
    coverImg.src = 'images/voice.jpg';
    book.appendChild(coverImg);

    const bookInfo = document.createElement("ul");
    bookInfo.className = "book_info";
    book.appendChild(bookInfo);

    const bookTitle = document.createElement("li");
    bookTitle.innerHTML = '목소리를 드릴게요';
    bookInfo.appendChild(bookTitle);
    const bookRank = document.createElement("li");
    bookRank.innerHTML = '🌟🌟🌟🌟';
    bookInfo.appendChild(bookRank);
    const review = document.createElement("li");
    review.innerHTML = '정세랑 작가의 신작';
    bookInfo.appendChild(review);
  }

};

let lastScroll = 0;

function scrollMove() {
  let nowScroll = window.pageYoffset || document.documentElement.scrollTop;

  if (nowScroll > lastScroll) { // downscroll
    console.log("downscroll");
  } else {  // upscroll
    console.log("upscroll");
  }

  lastScroll = nowScroll;
}

window.addEventListener("scroll", scrollMove);


generateLibrary()
