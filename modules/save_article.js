var database = require("./db.js");
var mongoose = require("mongoose");

var save_articleSchema = new mongoose.Schema({
	time:{type:String,required:true},
	title:{type:String,required:true},
	author:{type:String,required:true},
	classify:{type:String,required:true},
	article:{type:String,required:true}
},{
	collection:'articles'
});

var save_articleModel = mongoose.model('save_article',save_articleSchema);

function Save_article(time,title,author,classify,article){
	this.time = time;
	this.title = title;
	this.author = author;
	this.classify = classify;
	this.article = article;
}

Save_article.prototype.save = function(callback){
	var save_article = {
		time:this.time,
		title:this.title,
		author:this.author,
		classify:this.classify,
		article:this.article
	};
	var newSave_article = new save_articleModel(save_article);

	newSave_article.save(function(err,results){
		if(err){
			callback(err);
		}else{
			callback(null,results);
		}
	})
}

Save_article.get = function(callback){
	save_articleModel.find().exec(function(err,string){
		if(err){
			console.log("get the articles failed");
			callback(err,string);
		}else{
			console.log("get the articles successfully!");
			callback(null,string);
		}
	});
}

module.exports = Save_article;