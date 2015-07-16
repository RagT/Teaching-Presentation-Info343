var animationHelper = AniJS.getHelper();

animationHelper.checkInput = function(e, animationContext){
	var username = $('#username').val();
	var password = $('#pwd').val();
	if(username.length > 3 && password.length > 6){
		$('form').css('background-color', 'green');
		animationContext.run();
	} else {
		$('#form-heading').html('Invalid Password/Username combination.');
	}
}

animationHelper.reset = function(e, animationContext){
	$('h1').text('You have succesfully logged in as ' + $('#username').val() + '.');
	$('header').css('background-color', 'green');
}