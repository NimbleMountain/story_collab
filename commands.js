exports["%story make"] = function(args, data) {
	if(args.join(" ") === ""){
		var story = {
			author: data.author.tag,
			story: args.join(" "),
			helpers: {}
		}
		stories.push(story);
	}
}

exports["%story get"] = function(args, data) {
	if(args.join(" ") === ""){
		var story = {
			author: data.author.tag,
			story: args.join(" "),
			helpers: {}
		}
		stories.push(story);
	}
}