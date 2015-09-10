console.log("HELLO WORLD");

$('body').append('<h1>TEST</h1>');

$(".button").each(function(index) {
	console.log("button found");
	$(this).append("<h1>HELLO</h1>");
});