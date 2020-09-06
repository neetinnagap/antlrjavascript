const http = require('http');
const url = require('url');
const antlr4 = require('./node_modules/antlr4/index');
const ArticleLexer = require('./ArticleLexer');
const ArticleParser = require('./ArticleParser');
const HtmlArticleListener = require('./HTMLArticleListener.js').HTMLArticleListener;

http.createServer((req, res) => {
   
    var q = url.parse(req.url, true).query;
    var input = q.input;
    
   res.writeHead(200, {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*'
   });

   
//    var input = "TITLE: Test xtitle\n CONTENT: Test xcontent\nTITLE: Test xtitle\n CONTENT: Test xcontent";
   var chars = new antlr4.InputStream(input);
   var lexer = new ArticleLexer.ArticleLexer(chars);
   var tokens  = new antlr4.CommonTokenStream(lexer);
   var parser = new ArticleParser.ArticleParser(tokens);
   parser.buildParseTrees = true;   
   var tree = parser.create();   
   var htmlArticle = new HtmlArticleListener();
   antlr4.tree.ParseTreeWalker.DEFAULT.walk(htmlArticle, tree);
   
   res.write(JSON.stringify(htmlArticle.articleList));
   res.end();

}).listen(1337);