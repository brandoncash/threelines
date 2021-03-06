//
// This demo provides buttons that change out the threelines icon
//

$(document).ready(function () {
	var $threelinesDemo = $('#threelines-demo'),
		$threelines = $threelinesDemo.find('.examples .threelines'),
		$frameButtons = $threelinesDemo.find('button'),
		$currentFrameName = $('#current-frame-name');

	$frameButtons.click(function (event) {
		var newClass = $(this).data('frame');

		$threelines
			.attr('data-frame', newClass);

		$currentFrameName.text(newClass);
	});
});