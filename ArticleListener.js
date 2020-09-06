// Generated from Article.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ArticleParser.
function ArticleListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ArticleListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ArticleListener.prototype.constructor = ArticleListener;

// Enter a parse tree produced by ArticleParser#create.
ArticleListener.prototype.enterCreate = function(ctx) {
};

// Exit a parse tree produced by ArticleParser#create.
ArticleListener.prototype.exitCreate = function(ctx) {
};


// Enter a parse tree produced by ArticleParser#line.
ArticleListener.prototype.enterLine = function(ctx) {
};

// Exit a parse tree produced by ArticleParser#line.
ArticleListener.prototype.exitLine = function(ctx) {
};


// Enter a parse tree produced by ArticleParser#message.
ArticleListener.prototype.enterMessage = function(ctx) {
};

// Exit a parse tree produced by ArticleParser#message.
ArticleListener.prototype.exitMessage = function(ctx) {
};


// Enter a parse tree produced by ArticleParser#command.
ArticleListener.prototype.enterCommand = function(ctx) {
};

// Exit a parse tree produced by ArticleParser#command.
ArticleListener.prototype.exitCommand = function(ctx) {
};



exports.ArticleListener = ArticleListener;