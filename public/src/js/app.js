var pwaCard = document.querySelector('.js-cardImgWrap');
var detailsShown = false;
var count = 0;

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js')
  .then(function() {
    console.log('SW Registered');
  });
}

pwaCard.addEventListener('click', function (event) {
  if (!detailsShown) {
    if(count < 2) {
      count++;
      prevCount = count -1;
      document.querySelector('#js-'+prevCount).style.opacity = 0;
      document.querySelector('#js-'+prevCount).style.display = 'none';
      document.querySelector('#js-'+count).style.display = 'block';
      document.querySelector('#js-'+count).style.opacity = 0;
      setTimeout(function () {
        document.querySelector('#js-'+count).style.opacity = 1;
      }, 300);

      detailsShown = count === 2 ? true : false;
    }
  } else {
    detailsShown = false;
    document.querySelector('#js-2').style.opacity = 0;
    document.querySelector('#js-2').style.display = 'none';
    document.querySelector('#js-0').style.display = 'block';
    document.querySelector('#js-0').style.opacity = 0;
    count = 0;
    setTimeout(function () {
      document.querySelector('#js-0').style.opacity = 1;
    }, 300);
  }
});