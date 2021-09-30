async function getGiph() {
	const searchRequest = $('#textforsearch').val();
	const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
		params: {
			q: searchRequest,
			api_key: 'gR0W6sYsrZSaznm5EWUjwUu2glBuRMZg'
		}
	});
	const randomNum = Math.floor(Math.random() * res.data.data.length);
	const gifUrl = res.data.data[randomNum].images.original.url;
	let newImgGif = $('<img>', { src: gifUrl });
	$('#bottomHalf').append(newImgGif);
}

$('#form').on('submit', function(e) {
	e.preventDefault();
	getGiph();
});

$('#delete').on('click', function() {
	$('#bottomHalf').empty();
});
