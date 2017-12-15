var utils = require("utilities.js");

exports.Story = function(title, author, text){
  this.id = utils.makeID();
  this.dateCreated = new Date();
  this.title = title;
  this.author = author;
  this.orignalStory = text;
  this.contributors = [];
  this.chapters = [new exports.Chapter(text)];
  this.display = function(){
    var contributorsText = "";
    this.contributers.forEach(function(item, idx){
      contributorsText += `${item.tag}, `;
    });
    return {
      "embed": {
        "description": `${storyParts.join("")}\n\n**Contributors**: ${contributorsText}`,
        "url": "https://discordapp.com",
        "color": 11513775,
        "timestamp": this.dateCreated,
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/2.png",
          "text": `Story ID: ${"`"}${this.id}${"`"}, Created on `
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/embed/avatars/2.png"
        },
        "author": {
          "name": `${this.title}, By: ${author.tag}`,
          "url": "https://discordapp.com",
          "icon_url": "https://cdn.discordapp.com/embed/avatars/2.png"
        }
      }
    }
  };
//   this.saveChapters = function(){
//     var obj = [];
//     this.chapters.forEach(function(item, idx){
//       obj.push({
//         id: item.id,
        
//       });
//     });
//   };
  this.saveable = function(){
    return {
      id: this.id,
      dateCreated: this.dateCreated,
      title: this.title,
      author: this.author,
      originalStory: this.orignalStory,
      contributors: this.contributors,
      chapters: this.chapters
    };
  }
}

exports.loadStory = function(obj){
  return new Story(obj);
};

exports.Chapter = function(author, text){
  this.id = utils.makeID();
  this.dateCreated = new Date();
  this.storyParts = [new StoryPart(text)];
  return this;
}

exports.StoryPart = function(author,text){
  this.id = utils.makeID();
  this.text = text;
  this.dateCreated = new Date();
  this.author = author;
  return this;
}