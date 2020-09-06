// Generated from Article.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ArticleListener = require('./ArticleListener').ArticleListener;
var grammarFileName = "Article.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\t\u001f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0006\u0002\f\n\u0002\r\u0002",
    "\u000e\u0002\r\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0006\u0005\u001b\n\u0005\r\u0005\u000e\u0005\u001c\u0003\u0005",
    "\u0002\u0002\u0006\u0002\u0004\u0006\b\u0002\u0004\u0003\u0002\u0004",
    "\u0006\u0004\u0002\u0007\u0007\t\t\u0002\u001c\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0004\u0011\u0003\u0002\u0002\u0002\u0006\u0015\u0003\u0002",
    "\u0002\u0002\b\u001a\u0003\u0002\u0002\u0002\n\f\u0005\u0004\u0003\u0002",
    "\u000b\n\u0003\u0002\u0002\u0002\f\r\u0003\u0002\u0002\u0002\r\u000b",
    "\u0003\u0002\u0002\u0002\r\u000e\u0003\u0002\u0002\u0002\u000e\u000f",
    "\u0003\u0002\u0002\u0002\u000f\u0010\u0007\u0002\u0002\u0003\u0010\u0003",
    "\u0003\u0002\u0002\u0002\u0011\u0012\u0005\u0006\u0004\u0002\u0012\u0013",
    "\u0005\b\u0005\u0002\u0013\u0014\u0007\b\u0002\u0002\u0014\u0005\u0003",
    "\u0002\u0002\u0002\u0015\u0016\t\u0002\u0002\u0002\u0016\u0017\u0007",
    "\u0003\u0002\u0002\u0017\u0018\u0007\u0007\u0002\u0002\u0018\u0007\u0003",
    "\u0002\u0002\u0002\u0019\u001b\t\u0003\u0002\u0002\u001a\u0019\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u001a\u0003",
    "\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\t\u0003",
    "\u0002\u0002\u0002\u0004\r\u001c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'" ];

var symbolicNames = [ null, null, "TITLE", "CONTENT", "AUTHOR", "WHITESPACE", 
                      "NEWLINE", "TEXT" ];

var ruleNames =  [ "create", "line", "command", "message" ];

function ArticleParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ArticleParser.prototype = Object.create(antlr4.Parser.prototype);
ArticleParser.prototype.constructor = ArticleParser;

Object.defineProperty(ArticleParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ArticleParser.EOF = antlr4.Token.EOF;
ArticleParser.T__0 = 1;
ArticleParser.TITLE = 2;
ArticleParser.CONTENT = 3;
ArticleParser.AUTHOR = 4;
ArticleParser.WHITESPACE = 5;
ArticleParser.NEWLINE = 6;
ArticleParser.TEXT = 7;

ArticleParser.RULE_create = 0;
ArticleParser.RULE_line = 1;
ArticleParser.RULE_command = 2;
ArticleParser.RULE_message = 3;


function CreateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArticleParser.RULE_create;
    return this;
}

CreateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreateContext.prototype.constructor = CreateContext;

CreateContext.prototype.EOF = function() {
    return this.getToken(ArticleParser.EOF, 0);
};

CreateContext.prototype.line = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineContext);
    } else {
        return this.getTypedRuleContext(LineContext,i);
    }
};

CreateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArticleListener ) {
        listener.enterCreate(this);
	}
};

CreateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArticleListener ) {
        listener.exitCreate(this);
	}
};




ArticleParser.CreateContext = CreateContext;

ArticleParser.prototype.create = function() {

    var localctx = new CreateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ArticleParser.RULE_create);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 9; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 8;
            this.line();
            this.state = 11; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArticleParser.TITLE) | (1 << ArticleParser.CONTENT) | (1 << ArticleParser.AUTHOR))) !== 0));
        this.state = 13;
        this.match(ArticleParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArticleParser.RULE_line;
    return this;
}

LineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LineContext.prototype.constructor = LineContext;

LineContext.prototype.command = function() {
    return this.getTypedRuleContext(CommandContext,0);
};

LineContext.prototype.message = function() {
    return this.getTypedRuleContext(MessageContext,0);
};

LineContext.prototype.NEWLINE = function() {
    return this.getToken(ArticleParser.NEWLINE, 0);
};

LineContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArticleListener ) {
        listener.enterLine(this);
	}
};

LineContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArticleListener ) {
        listener.exitLine(this);
	}
};




ArticleParser.LineContext = LineContext;

ArticleParser.prototype.line = function() {

    var localctx = new LineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ArticleParser.RULE_line);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this.command();
        this.state = 16;
        this.message();
        this.state = 17;
        this.match(ArticleParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArticleParser.RULE_command;
    return this;
}

CommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommandContext.prototype.constructor = CommandContext;

CommandContext.prototype.WHITESPACE = function() {
    return this.getToken(ArticleParser.WHITESPACE, 0);
};

CommandContext.prototype.TITLE = function() {
    return this.getToken(ArticleParser.TITLE, 0);
};

CommandContext.prototype.CONTENT = function() {
    return this.getToken(ArticleParser.CONTENT, 0);
};

CommandContext.prototype.AUTHOR = function() {
    return this.getToken(ArticleParser.AUTHOR, 0);
};

CommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArticleListener ) {
        listener.enterCommand(this);
	}
};

CommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArticleListener ) {
        listener.exitCommand(this);
	}
};




ArticleParser.CommandContext = CommandContext;

ArticleParser.prototype.command = function() {

    var localctx = new CommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ArticleParser.RULE_command);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArticleParser.TITLE) | (1 << ArticleParser.CONTENT) | (1 << ArticleParser.AUTHOR))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 20;
        this.match(ArticleParser.T__0);
        this.state = 21;
        this.match(ArticleParser.WHITESPACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArticleParser.RULE_message;
    return this;
}

MessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageContext.prototype.constructor = MessageContext;

MessageContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArticleParser.TEXT);
    } else {
        return this.getToken(ArticleParser.TEXT, i);
    }
};


MessageContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArticleParser.WHITESPACE);
    } else {
        return this.getToken(ArticleParser.WHITESPACE, i);
    }
};


MessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArticleListener ) {
        listener.enterMessage(this);
	}
};

MessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArticleListener ) {
        listener.exitMessage(this);
	}
};




ArticleParser.MessageContext = MessageContext;

ArticleParser.prototype.message = function() {

    var localctx = new MessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ArticleParser.RULE_message);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 23;
            _la = this._input.LA(1);
            if(!(_la===ArticleParser.WHITESPACE || _la===ArticleParser.TEXT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 26; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ArticleParser.WHITESPACE || _la===ArticleParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ArticleParser = ArticleParser;
