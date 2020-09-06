// Generated from Article.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('./node_modules/antlr4/index');
const ArticleLexer = require('./ArticleLexer');
const ArticleParser = require('./ArticleParser');
var ArticleListener = require('./ArticleListener').ArticleListener;

// This class defines a complete listener for a parse tree produced by ArticleParser.
function HTMLArticleListener() {
    this.articleList = [];
    this.article = {
        command: '',
        message: ''
    };
	ArticleListener.call(this);
	return this;
}

HTMLArticleListener.prototype = Object.create(ArticleListener.prototype);
HTMLArticleListener.prototype.constructor = HTMLArticleListener;

// Enter a parse tree produced by ArticleParser#create.
HTMLArticleListener.prototype.enterCreate = function(ctx) {
};

// Exit a parse tree produced by ArticleParser#create.
HTMLArticleListener.prototype.exitCreate = function(ctx) {
};


// Enter a parse tree produced by ArticleParser#line.
HTMLArticleListener.prototype.enterLine = function(ctx) {
    console.log('enter line');
};

// Exit a parse tree produced by ArticleParser#line.
HTMLArticleListener.prototype.exitLine = function(ctx) {
    console.log('exit line');
    this.articleList.push(Object.assign({}, this.article));
};


// Enter a parse tree produced by ArticleParser#message.
HTMLArticleListener.prototype.enterMessage = function(ctx) {
    console.log('enter message');
    // this.article.message = ctx.TEXT().getText();
};

// Exit a parse tree produced by ArticleParser#message.
HTMLArticleListener.prototype.exitMessage = function(ctx) {
    console.log('exit message');
    this.article.message = ctx.getText();
};


// Enter a parse tree produced by ArticleParser#command.
HTMLArticleListener.prototype.enterCommand = function(ctx) {
    console.log('enter command');
    if(ctx.TITLE() != null) {
        this.article.command =  ctx.TITLE().getText();
    }
    if(ctx.CONTENT() != null) {
        this.article.command =  ctx.CONTENT().getText();
    }
    if(ctx.AUTHOR() != null) {
        this.article.command =  ctx.AUTHOR().getText();
    }
};

// Exit a parse tree produced by ArticleParser#command.
HTMLArticleListener.prototype.exitCommand = function(ctx) {
    console.log('exit command');
};



exports.HTMLArticleListener = HTMLArticleListener;