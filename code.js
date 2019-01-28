console.log(document.documentElement.offsetHeight);
console.log(document.body.offsetHeight);
window.addEventListener('scroll', function () {
  const windowHeight = window.outerHeight;
  const scrollValue = window.scrollY;

  //Pierwsza sekcja
  const art2 = document.querySelector('.art2');
  const art2FromTop = art2.offsetTop;
  const art2Height = art2.clientHeight;

  const art3 = document.querySelector('.art3');
  const art3FromTop = art3.offsetTop;
  const art3Height = art3.clientHeight;

  const art4 = document.querySelector('.art4');
  const art4FromTop = art4.offsetTop;
  const art4Height = art4.clientHeight;

  if (scrollValue > art2FromTop + art2Height - windowHeight) {
    art2.classList.add('active');
  }

  if (scrollValue > art3FromTop + art3Height - windowHeight) {
    art3.classList.add('active');
  }

  if (scrollValue > art4FromTop + art4Height - windowHeight) {
    art4.classList.add('active');
  }
  //Druga sekcja

  const op1 = document.querySelector('.op1');
  const op2 = document.querySelector('.op2');

  const op1FromTop = op1.offsetTop;
  const op2FromTop = op2.offsetTop;

  const op1Height = op1.clientHeight;
  const op2Height = op2.clientHeight;

  if (scrollValue > op1FromTop + op1Height / 2 - windowHeight) {
    op1.classList.add('active');
  }

  if (scrollValue > op2FromTop + op2Height / 2 - windowHeight) {
    op2.classList.add('active');
  }

let clearer = function(item,index){
  item.classList.remove('active');

}

  //Czyściciel
  if (scrollValue < 100) {
    let articles = document.querySelectorAll('article');
    articles.forEach(clearer);
  }
});