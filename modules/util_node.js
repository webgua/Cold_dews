var restful = require("./restful");
var Save_article = require("./save_article.js");
var markdown = require('markdown').markdown;

var password;

function handle_login(req,res){
	console.log("now handle the login process");
	var account = req.body.form_account;
	password = req.body.form_password;	
	//接下来通过正则表达式 判断是邮箱还是电话号码
	var reqString = "user/"+account;
	console.log("the reqString is "+reqString);
	params = {"password":password,"res":res};
	restful.forward_get(reqString,params,handle_login_return);
}

function handle_register(req,res){
	console.log("now handle the register process");
	var telephone = req.body.telephone;
	var password = req.body.password;
	var School = req.body.School;
	var Email = req.body.Email;

	var reqString = "adduser/?telephone="+telephone+"&password="+password+"&School="+School+"&Email"+Email;
	console.log("the reqString is "+reqString);
}

function handle_login_return(err,data,params){
	console.log(err);
	console.log(data);
	if(err){
		console.log(err);
	}
	else if(JSON.parse(data).password == params.password){
		console.log("login successful!");
		params.res.sendStatus(200);
		params.res.write("login successful");
		params.res.end();
	}else{
		console.log("the password is not correct!");
		params.res.write("the password is not right");
	}

}

function handle_save_article(req,res){
	console.log("now handle the save article process");
	var date = Date.now();
	var title = req.body.title;
	var author = req.body.author;
	var classify = req.body.classify;
	var article = markdown.toHTML(req.body.article);
	var saveDataString = new Save_article(date.toString(),title,author,classify,article);
	saveDataString.save(function(err,datastring){
		if(err){
			console.error("failed save the article");
			// res.sendStatus(500);
			res.write("failed save the article");
			res.end();
		}
		else{
			console.log("successfully add a new article in database!");
			// res.sendStatus(200);
			res.write("successfully add a new article in database!");
			res.end();
		}
	});

}

function handle_soda_getdataservlet(req,res){
	console.log("now handle the soda  getdataservlet process");
	params = {"res":res};
	restful.SodaForward_getDataServlet(req,res,params,handle_soda_getdataservlet_return);
}

function handle_soda_getscoreservlet(req,res){
	console.log("now handle the soda  getscoreservlet process");
	params = {"res":res};
	restful.SodaForward_getScoreServlet(req,res,params,handle_soda_getdataservlet_return);
}

function handle_soda_gethistoryservlet(req,res){
	console.log("now handle the soda  gethistoryservlet process");
	params = {"res":res};
	restful.SodaForward_getHistoryServlet(req,res,params,handle_soda_getdataservlet_return);

}

function handle_soda_getdataservlet_return(err,data,params){
	console.log(err);
	console.log(data);
	if(err){
		console.log(err);
	}
	params.res.setHeader("Access-Control-Allow-Origin", "*");
	params.res.writeHead(200,{"Content-Type":"text/json"});
	params.res.write(data);
	params.res.end();
}


exports.handle_register = handle_register;
exports.handle_login = handle_login;
exports.handle_save_article = handle_save_article;
exports.handle_soda_getdataservlet =handle_soda_getdataservlet;
exports.handle_soda_getscoreservlet =handle_soda_getscoreservlet;
exports.handle_soda_gethistoryservlet =handle_soda_gethistoryservlet;