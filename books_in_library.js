const library = document.getElementById("books_in_library");
const BOOK_NUMBER = 55;

function generateLibrary () {

  for (let i = 0; i < BOOK_NUMBER; i++) {

    const book = document.createElement("div");
    book.className = 'book';
    library.appendChild(book);

    const coverImg = new Image();
    coverImg.src = 'images/voice.jpg';
    coverImg.className = "cover_img";
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

generateLibrary()

const book = document.getElementsByClassName("book");
const bookInfo = document.getElementsByClassName("book_info");
const coverImg = document.getElementsByClassName("cover_img");

let lastScroll = 0;

function scrollMove() {
  let nowScroll = window.pageYoffset || document.documentElement.scrollTop;

  if (nowScroll > lastScroll) { // downscroll
      if (nowScroll > 500) {
        for (let i = 0; i < BOOK_NUMBER; i++){
          book[i].style.width = 100 + 'px';
          coverImg[i].style.width = 60 + 'px';
        }
      } else if (nowScroll > 300) {
        for (let i = 0; i < BOOK_NUMBER; i++){
          book[i].style.width = 150 + 'px';
          coverImg[i].style.width = 80 + 'px';
        }
      } else if (nowScroll > 100) {
        for (let i = 0; i < BOOK_NUMBER; i++){
          bookInfo[i].style.display = "none";
          book[i].style.width = 200 + 'px';
          coverImg[i].style.width = 100 + 'px';
        }
      }
  } else {  // upscroll
    // if (nowScroll > 100) {
    //   for (let i = 0; i < BOOK_NUMBER; i++){
    //     book[i].style.width = 100 + 'px';
    //     coverImg[i].style.width = 60 + 'px';
    //   }
    // } else if (nowScroll > 300) {
    //   for (let i = 0; i < BOOK_NUMBER; i++){
    //     book[i].style.width = 150 + 'px';
    //     coverImg[i].style.width = 80 + 'px';
    //   }
    // } else if (nowScroll > 500) {
    //   for (let i = 0; i < BOOK_NUMBER; i++){
    //     bookInfo[i].style.display = "none";
    //     book[i].style.width = 200 + 'px';
    //     coverImg[i].style.width = 100 + 'px';
    //   }
    // }
  }

  lastScroll = nowScroll;
}


window.addEventListener("scroll", scrollMove);
