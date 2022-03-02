/**
 * Toggle mobile navigation
 */

$('.js-burger').on('click', function(e) {
	e.preventDefault()

	$('.wrapper').toggleClass('has-active-nav')
})

