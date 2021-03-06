(function($){
  $.fn.smoothScrolling = function(options) {
    var settings = $.extend({
      offset: 0,
      speed: 1000,
      headerClass: null,
      headerFixedClass: null,
    }, options)

    return this.find('a[href*="#"]').not('[href="#"]').on('click', function(event) {
      var headerHeight = 0

      if (settings.headerClass && settings.headerFixedClass) {
        var headerSelector = '.' + settings.headerClass
        var isHeaderFixed = $(headerSelector).hasClass(settings.headerFixedClass)
        headerHeight = $(headerSelector).outerHeight()
      }

      if (
        location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
        &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash)
        if (target.length) {
          event.preventDefault()
          var offset = isHeaderFixed ? settings.offset : headerHeight + settings.offset
          $('html, body').animate({
            scrollTop: target.offset().top - offset
          }, settings.speed)
        }
      }
    })
  }
})(jQuery)
