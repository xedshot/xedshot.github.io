$(document).on('click', '.nav__btn', navToggle);

function navToggle(e) {
    e.preventDefault();

    var $body = $('body');

    if ($body.hasClass('nav-opened')) {
      $body.removeClass('nav-opened');
    }
    else {
      $body.addClass('nav-opened');
    }
}

$(document).on('click', '.nav__link.anchor[href*="#"]', closeMobNav);

function closeMobNav(e) {
  if ($("body").hasClass('nav-opened')) {
    $("body").removeClass('nav-opened');
  }
}