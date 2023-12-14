const menuReview = () => {
  const wrapperLeft = document.querySelector('.wrapper__left');
  const wrapperRight = document.querySelector('.wrapper__right');

  wrapperLeft.style.display = 'none';
  wrapperRight.style.width = '100%';

  var reviewSrc = '/iframe/review';

  const contentFrame = document.getElementById('contentFrame');
  contentFrame.setAttribute('src', reviewSrc);
  document.getElementById('menuReview').style.color = 'black';
  document.getElementById('menuReview').style.backgroundColor = 'white';
  document.getElementById('menuHome').style.color = 'white';
  document.getElementById('menuHome').style.backgroundColor = '#298eb5';
};

const menuHome = () => {
  const wrapperLeft = document.querySelector('.wrapper__left');
  const wrapperRight = document.querySelector('.wrapper__right');

  wrapperLeft.style.display = 'flex';
  wrapperRight.style.width = '1000px';

  var homeSrc = '/iframe/home';

  const contentFrame = document.getElementById('contentFrame');
  contentFrame.setAttribute('src', homeSrc);
  document.getElementById('menuHome').style.color = 'black';
  document.getElementById('menuHome').style.backgroundColor = 'white';
  document.getElementById('menuReview').style.color = 'white';
  document.getElementById('menuReview').style.backgroundColor = '#298eb5';
};
