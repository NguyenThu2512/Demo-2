function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function myReadMore() {
  var elements = document.getElementsByClassName("more");
  for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "block"; // Hoặc "none" nếu bạn muốn ẩn
  }
}
// function toggleReadMore() {
//   const content = document.querySelector('.product-description-content');
//   const extraContent = document.querySelector('.extra-content');
//   const btn = document.getElementById('myBtnReadMore');

//   if (content.style.maxHeight) {
//     content.style.maxHeight = null;
//     extraContent.style.display = 'none';
//     btn.textContent = 'Xem thêm';
//   } else {
//     content.style.maxHeight = content.scrollHeight + 'px'+";";
//     extraContent.style.display = 'block';
//     btn.textContent = 'Thu gọn';
//   }
// }

function toggleReadMore() {
  const content = document.getElementById('content');
  content.classList.toggle('expanded');
  const buttonText = content.classList.contains('expanded') ? 'Thu gọn' : 'Xem thêm';
  document.getElementById('readMoreBtn').textContent = buttonText;
}

function updateRating(rating) {
  document.getElementById('rating').value = rating;
  for (var i = 1; i <= 5; i++) {
      var star = document.getElementById('star' + i);
      if (i <= rating) {
          star.classList.add('fas');
          star.classList.remove('far');
      } else {
          star.classList.add('far');
          star.classList.remove('fas');
      }
  }
}
function writeComment(){
  const comment=document.querySelector('.comment-form')
  const question=document.querySelector('.ask-form')
  comment.style.display="block"
  question.style.display="none"

}

function askQuestion(){
  const comment=document.querySelector('.comment-form')
  const question=document.querySelector('.ask-form')
  comment.style.display="none"
  question.style.display="block"
}

function preventScroll(event) {
  event.preventDefault();
}