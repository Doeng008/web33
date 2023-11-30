var imageContainer = document.getElementById('imageContainer');
var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
var isScrollingDown = true;

function handleScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    if (isScrollingDown) {
      isScrollingDown = false;
      imageContainer.style.transform = 'translateY(-50%) translateX(0)';
    }
  } else {
    // Scrolling up
    if (!isScrollingDown) {
      isScrollingDown = true;
      imageContainer.style.transform = 'translateY(-50%) translateX(100px)';
    }
    else {
      imageContainer.classList.remove('active');
    }
  }

  lastScrollTop = scrollTop;
}

window.addEventListener('scroll', handleScroll);

$(".all-banner-slide").owlCarousel({
	items: 1,
	smartSpeed: 1000,
	autoplay: true,
	lazyLoad: true,
	dots: false,
	autoplayTimeout: 3000
});
