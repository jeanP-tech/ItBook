const library = document.getElementById("booksInLibrary");
const plusIcon = document.getElementById("plus");
const minusIcon = document.getElementById("minus");

const BOOK_NUMBER = 150;

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
    bookTitle.className = "book_title";
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
const bookTitle = document.getElementsByClassName("book_title");

let btnClick = 0;

function zoomIn() {
  btnClick += 1;

  if (btnClick === 1) {
    for (let i = 0; i < BOOK_NUMBER; i++){
      bookInfo[i].style.display = "none";
      book[i].style.width = 200 + 'px';
      coverImg[i].style.width = 100 + 'px';
    }
  } else if (btnClick === 2) {
    for (let i = 0; i < BOOK_NUMBER; i++){
      book[i].style.width = 150 + 'px';
      coverImg[i].style.width = 80 + 'px';
    }
  } else if (btnClick === 3) {
    for (let i = 0; i < BOOK_NUMBER; i++){
      book[i].style.width = 100 + 'px';
      coverImg[i].style.width = 60 + 'px';
    }
  } else {
    btnClick = 3;
    console.log(btnClick);
  }
};

function zoomOut() {
  btnClick -= 1;

  if (btnClick === 2) {
    for (let i = 0; i < BOOK_NUMBER; i++){
      book[i].style.width = 150 + 'px';
      coverImg[i].style.width = 80 + 'px';
    }
  } else if (btnClick === 1) {
    for (let i = 0; i < BOOK_NUMBER; i++){
      book[i].style.width = 200 + 'px';
      coverImg[i].style.width = 100 + 'px';
    }
  } else if (btnClick === 0) {
    for (let i = 0; i < BOOK_NUMBER; i++){
      bookInfo[i].style.display = "block";
      book[i].style.width = 320 + 'px';
      coverImg[i].style.width = 120 + 'px';
    }
  } else {
    btnClick = 0;
  }
};

plusIcon.addEventListener("click", zoomIn);
minusIcon.addEventListener("click", zoomOut);


for (let i = 0; i < BOOK_NUMBER; i++){
  bookTitle[i].addEventListener("click", goDetail);
  coverImg[i].addEventListener("click", goDetail);
}

function goDetail() {
  location.href="book_detail.html";
}
