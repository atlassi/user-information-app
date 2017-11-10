
let order = {
	name: $name.val();
	drink: $drink.val();
	

}
$.ajax({
	type : 'POST',
	url: '/' ,
	data: order
	success: function(data) {
		console.log('Success!', data);

	}
})