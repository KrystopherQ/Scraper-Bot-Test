const fs = require('fs')
const redditGamingNews = require('./redditGamingNews')




function newsFeedCreated() {
	var load = redditGamingNews()
	fs.writeFile('./index.html', load, (err) =>
			err ? console.log(err) : console.log("news feed")
	)
}