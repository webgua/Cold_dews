var express = require('express');
var router = express.Router();
var util = require('../modules/util_node');

/* GET home page. */
router.get('/', function(req, res) {
    res.redirect("/main.html");
});
router.get('/login', function(req, res) {
    res.redirect("/login.html");
});
router.get("/publish",function(req,res){
    res.redirect("/publish_an_article.html");
});

router.get("/pictures",function(req,res){
    res.redirect("/pictures.html");
});

router.get("/SodaBigData",function(req,res){
    res.redirect("/SodaFront/SodaMainPage.html");
});


router.get('/main',function(req,res){
    res.render('main.html',function(err,result){
        var returnStr =result;
        res.render("register.html",function(err,result){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(returnStr+result);
            res.end();
        })
    });
})

router.post('/login',function(req,res){
    console.log("get the login information from the browser!");
    util.handle_login(req,res);
})

router.post('/register',function(req,res){
    console.log("get the register information from the browser!");
    util.handle_register(req,res);
});

router.post('/save_article',function(req,res){
    console.log("get the save_article information from the browser!");
    util.handle_save_article(req,res);
});


router.get('/Soda/GetDataServlet',function(req,res){
    console.log('get the data from Soda Server!');
    util.handle_soda_getdataservlet(req,res);
})

router.use(function(req,res){
    res.render('404.html');
});

module.exports = router;
