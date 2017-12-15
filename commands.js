var storyFile = "./stories.json";
var storiesDB = require(storyFile);
var stories = JSON.parse(fs.readFileSync(storyFile));
var storyConstructions = require("./Story.js");
var Story = storyConstructions.Story;

stories.map(function(item){return new Story()});

var storyCommands = [
	{
		command: "%story make",
		description: "`%story make [title (use ~ to simulate spaces)] [`story text`]` Create the beginning of a story."
	},
	{
		command: "%story get",
		description: "`%story get [story id]` Find a story."
	},
];

exports["%story make"] = function(rawargs, data) {
	if(rawargs.join(" ") !== ""){
		// Make story object
		var args = rawargs;
		var title = args.splice(0, 1).replace("~", " ");
		var storyText = utils.getbetween(rawargs.join(" "), "`", "`");
		var story = new Story(title,data.author,storyText);
		if(title !== ""){
			if(storyText !== ""){
				data.channel.send("Story Created: ", story.display());

				stories.push(story.saveable());
				exports["%stories save"]();
				console.log(title,data.author,storyText);
			} else {
				data.channel.send("Could not parse story text.");
			}
		} else {
			data.channel.send("Could not parse story title.");
		}
	} else {
		data.channel.send("`%story make [title (use ~ to simulate spaces)] [story text]` Create the beginning of a story.");
	}
}

exports["%story get"] = function(args, data) {
	if(args[0] !== ""){
		// Get Story using ID
		var story = stories.findIndex(function(a){return a.id === args[0]})[0];
		data.channel.send(story.display());
	} else {
		data.channel.send("`%story get [story id]` Find a story.");
	}
}

exports["%story add"] = function(args, data){
	if(rawargs.join(" ") !== ""){
		// Make story object
		var args = rawargs;
		var id = args.splice(0, 1);
		var storyText = utils.getbetween(rawargs.join(" "), "`", "`");
		var story = stories.findIndex(function(a){return a.id === id})[0];
		if(typeof story !== "undefined"){
			if(storyText !== ""){
				data.channel.send("Story Created: ", story.display());

				stories.push(story.saveable());
				exports["%stories save"]();
				console.log(title,data.author,storyText);
			} else {
				data.channel.send("Could not parse story text.");
			}
		} else {
			data.channel.send("Could not find that story.");
		}
	} else {
		data.channel.send("`%story make [title (use ~ to simulate spaces)] [story text]` Create the beginning of a story.");
	}
}

exports["%stories save"] = function(args, data) {
	//if(data.author.tag === "Electro#6325"){
		storiesDB = stories;
		fs.writeFile(storyFile, JSON.stringify(storiesDB), function (err, c){
			if (err){
				return console.log(err);
			}
			console.log('writing to ' + storyFile);
		});
	//}
}