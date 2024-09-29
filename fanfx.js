var fanfx = {
  init: function (element, opt = {}) {
    var eq = $(element)

    if (eq.hasClass("fx-face-fade")) {
      fanfx._faceFade(element, opt)
    }
  },

  _faceFade: function (element, opt) {
    var eq = $(element)
    var topFace = eq.children().eq(0)

		opt.run = function() {
			topFace.fadeToggle(opt.delay || 1000)
		}

    eq.data("fx-face-fade", opt)
    eq.hover(function(){
			$(this).data('fx-face-fade').run()
		})
  },
}
