var config = require("./config"),
    request = require("request");

exports.forward_get = function(req,params,callback){
	var opts = {
		url: config.process_server_path + "/progress/"+req
	}
	console.log("the url is "+opts.url);

	request.get(opts,function(err,response,data){
		if(!err && response.statusCode == 200){
			//todo	
			console.log("query RESTful API successfully");
			// console.log("the return data is "+data);
			callback(err,data,params);
		}else{
			console.log("query RESTful API failed");
			callback(err);
		}
	})
}

exports.forward_post = function(req,res){
	var opts = {
		url: config.process_server_path + "/progress/"+req
	}
	console.log("the url is "+opts.url);
	request.post();		
}

exports.SodaForward_getDataServlet = function(req,res,params,callback){
	var opts = {
		url:config.soda_server_path+"/Soda/GetDataServlet",
	}
	console.log("get data servlet.");
	request.get(opts,function(err,response,data){
		if(!err && response.statusCode == 200){
			//todo	
			console.log("query RESTful API successfully");
			// console.log("the return data is "+data);
			callback(err,data,params);
		}else{
			console.log("query RESTful API failed");
			callback(err);
		}
	})
}