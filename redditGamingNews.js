const axios = require('axios');
const cheerio = require('cheerio');
// const fs = require('fs')



// const getPostTitles = async () => {
// 	try {
// 		const { data } = await axios.get(
// 			'https://old.reddit.com/r/gamingnews/'
// 		);
		// const $ = cheerio.load(data);
		// const postTitles = [];

		// $('div > p.title > a').each((_idx, el) => {
		// 	const postTitle = $(el).text()
		// 	postTitles.push(postTitle)
		// });

// 		return postTitles;
// 	} catch (error) {
// 		throw error;
// 	}
// };
// getPostTitles()
// .then((postTitles) => console.log(postTitles));


const getPostLinks = async () => {
	try {
		const { data } = await axios.get(
			'https://old.reddit.com/r/gamingnews/'
		);
		const $ = cheerio.load(data);
		const links = [];
		// const postTitles = [];
$('.outbound').each( (index, value) => {
	var link = $(value).attr('href');
	links.push({"link": link});
});
$('div > p.title > a').each((_idx, el) => {
	const postTitle = $(el).text()
	links.push(postTitle)
});
return links;
} catch (error) {
	throw error;
}
}
getPostLinks()
.then((links) => console.log(links));



const getPostNames = async () => {
	try {
		const { data } = await axios.get(
			'https://old.reddit.com/r/games/'
		);
		const $ = cheerio.load(data);
		const PostNames = [];
		$('div > p.title > a').each((_idx, el) => {
			const postTitle = $(el).text()
			PostNames.push(postTitle)
		});
		$('.outbound').each( (index, value) => {
			var link = $(value).attr('href');
			PostNames.push({"link": link});
		});
		return PostNames;
	} catch (error) {
		throw error;
	}
};
getPostNames()
.then((PostNames) => console.log(PostNames));

// let createNewsFeed = () => {
// 	return `
// 	<div class="card text-white bg-info m-5" style="max-width: 18rem;">
// 	<div class="card-header">
// 			<h2>${getPostNames()}</h2>
// 			<h3>${getPostTitles()}</h3>
// 	</div>
// 	<div class="card-body">
// 			<p>ID: ${getPostNames()}</p>
// 			<p>Email: ${getPostNames()}</p>
// 			<p>Github: ${getPostTitles()}</p>
// 	</div>
// </div>
// `
// }

// function redditGamingNews() {
// 	return `
// 	<!DOCTYPE html>
// <html lang="en">

// <head>
// 	<meta charset="UTF-8">
// 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
// 	<title>Template</title>
// </head>

// <body class='bg-dark'>
// 	<header>
// 			<div class="card mb-3 bg-primary">
// 					<div class="card-body">
// 							<h1 class="card-title text-center text-light">MY TEAM</h1>
// 					</div>
// 			</div>
// 	</header>
// 	<section class="d-flex flex-row align-content-center">
// ${createNewsFeed()}
// 	</section>

// </body>

// </html>
// 	`
// }


// module.exports = redditGamingNews