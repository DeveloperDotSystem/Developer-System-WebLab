let $ = document
body = $.querySelector('body')
actionClass = $.querySelector('.actionClass')
navMenuItem = $.querySelector('.navMenuItemContainer')
moreContentContainer = $.querySelector('.moreContentContainer')
moreContentListContainer = $.querySelector('.moreContentList')
navMoreButton = $.querySelector('.navMoreButton')
closeMore = $.querySelector('.moreCloseButton')
menuIc = $.querySelector('.material-icons-outlined.menu')
closeMenu = $.querySelector('.material-icons-outlined.menuClose')
scrollIc = $.querySelector('.material-icons-outlined.scroll')
bodyScrollIc = $.querySelector('.material-icons-outlined.overflowScroller')
  
this.addEventListener(
  'load', function() {
    setTimeout( function() {
      return body.style.opacity = '1';
    }, 2000);
  }, true
);
this.addEventListener(
  'keydown', function(event) {
    setTimeout( function() {
      if (event.ctrlKey && event.keyCode == 112) {
        $.location.reload();
        event.preventDefault();
      }
    }, 500);
  }, true
);
menuIc.addEventListener(
  'click', function() {
    return navMenuItem.style.left = '0';
  }, true
);
bodyScrollIc.addEventListener(
  'click', function() {
    return win.scrollTo(top);
  }, true
);
navMoreButton.addEventListener(
  'click', function() {
    return moreContentContainer.style.top = '0';
    return navMenuItem.style.left = '-300px';
  }, true
);
closeMore.addEventListener(
  'click', function() {
    return moreContentContainer.style.top = '-260px';
  }, true
);
closeMenu.addEventListener(
  'click', function() {
    return navMenuItem.style.left = '-260px';
  }, true
);
