// Generated from Article.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\ta\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0006\u000fN\n\u000f\r\u000f\u000e\u000fO\u0003\u0010",
    "\u0005\u0010S\n\u0010\u0003\u0010\u0003\u0010\u0006\u0010W\n\u0010\r",
    "\u0010\u000e\u0010X\u0003\u0011\u0003\u0011\u0003\u0011\u0006\u0011",
    "^\n\u0011\r\u0011\u000e\u0011_\u0002\u0002\u0012\u0003\u0003\u0005\u0002",
    "\u0007\u0002\t\u0002\u000b\u0002\r\u0002\u000f\u0002\u0011\u0002\u0013",
    "\u0002\u0015\u0002\u0017\u0004\u0019\u0005\u001b\u0006\u001d\u0007\u001f",
    "\b!\t\u0003\u0002\r\u0004\u0002VVvv\u0004\u0002KKkk\u0004\u0002NNnn",
    "\u0004\u0002GGgg\u0004\u0002EEee\u0004\u0002QQqq\u0004\u0002PPpp\u0003",
    "\u0002c|\u0003\u0002C\\\u0004\u0002\u000b\u000b\"\"\u0003\u00022;\u0002",
    "^\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002",
    "\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002",
    "\u0002\u0002!\u0003\u0002\u0002\u0002\u0003#\u0003\u0002\u0002\u0002",
    "\u0005%\u0003\u0002\u0002\u0002\u0007\'\u0003\u0002\u0002\u0002\t)\u0003",
    "\u0002\u0002\u0002\u000b+\u0003\u0002\u0002\u0002\r-\u0003\u0002\u0002",
    "\u0002\u000f/\u0003\u0002\u0002\u0002\u00111\u0003\u0002\u0002\u0002",
    "\u00133\u0003\u0002\u0002\u0002\u00155\u0003\u0002\u0002\u0002\u0017",
    "7\u0003\u0002\u0002\u0002\u0019=\u0003\u0002\u0002\u0002\u001bE\u0003",
    "\u0002\u0002\u0002\u001dM\u0003\u0002\u0002\u0002\u001fV\u0003\u0002",
    "\u0002\u0002!]\u0003\u0002\u0002\u0002#$\u0007<\u0002\u0002$\u0004\u0003",
    "\u0002\u0002\u0002%&\t\u0002\u0002\u0002&\u0006\u0003\u0002\u0002\u0002",
    "\'(\t\u0003\u0002\u0002(\b\u0003\u0002\u0002\u0002)*\t\u0004\u0002\u0002",
    "*\n\u0003\u0002\u0002\u0002+,\t\u0005\u0002\u0002,\f\u0003\u0002\u0002",
    "\u0002-.\t\u0006\u0002\u0002.\u000e\u0003\u0002\u0002\u0002/0\t\u0007",
    "\u0002\u00020\u0010\u0003\u0002\u0002\u000212\t\b\u0002\u00022\u0012",
    "\u0003\u0002\u0002\u000234\t\t\u0002\u00024\u0014\u0003\u0002\u0002",
    "\u000256\t\n\u0002\u00026\u0016\u0003\u0002\u0002\u000278\u0005\u0005",
    "\u0003\u000289\u0005\u0007\u0004\u00029:\u0005\u0005\u0003\u0002:;\u0005",
    "\t\u0005\u0002;<\u0005\u000b\u0006\u0002<\u0018\u0003\u0002\u0002\u0002",
    "=>\u0005\r\u0007\u0002>?\u0005\u000f\b\u0002?@\u0005\u0011\t\u0002@",
    "A\u0005\u0005\u0003\u0002AB\u0005\u000b\u0006\u0002BC\u0005\u0011\t",
    "\u0002CD\u0005\u0005\u0003\u0002D\u001a\u0003\u0002\u0002\u0002EF\u0007",
    "C\u0002\u0002FG\u0007W\u0002\u0002GH\u0007V\u0002\u0002HI\u0007J\u0002",
    "\u0002IJ\u0007Q\u0002\u0002JK\u0007T\u0002\u0002K\u001c\u0003\u0002",
    "\u0002\u0002LN\t\u000b\u0002\u0002ML\u0003\u0002\u0002\u0002NO\u0003",
    "\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002",
    "P\u001e\u0003\u0002\u0002\u0002QS\u0007\u000f\u0002\u0002RQ\u0003\u0002",
    "\u0002\u0002RS\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002TW\u0007",
    "\f\u0002\u0002UW\u0007\u000f\u0002\u0002VR\u0003\u0002\u0002\u0002V",
    "U\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002",
    "\u0002XY\u0003\u0002\u0002\u0002Y \u0003\u0002\u0002\u0002Z^\u0005\u0013",
    "\n\u0002[^\u0005\u0015\u000b\u0002\\^\t\f\u0002\u0002]Z\u0003\u0002",
    "\u0002\u0002][\u0003\u0002\u0002\u0002]\\\u0003\u0002\u0002\u0002^_",
    "\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002",
    "\u0002`\"\u0003\u0002\u0002\u0002\t\u0002ORVX]_\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ArticleLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ArticleLexer.prototype = Object.create(antlr4.Lexer.prototype);
ArticleLexer.prototype.constructor = ArticleLexer;

Object.defineProperty(ArticleLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

ArticleLexer.EOF = antlr4.Token.EOF;
ArticleLexer.T__0 = 1;
ArticleLexer.TITLE = 2;
ArticleLexer.CONTENT = 3;
ArticleLexer.AUTHOR = 4;
ArticleLexer.WHITESPACE = 5;
ArticleLexer.NEWLINE = 6;
ArticleLexer.TEXT = 7;

ArticleLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ArticleLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ArticleLexer.prototype.literalNames = [ null, "':'" ];

ArticleLexer.prototype.symbolicNames = [ null, null, "TITLE", "CONTENT", 
                                         "AUTHOR", "WHITESPACE", "NEWLINE", 
                                         "TEXT" ];

ArticleLexer.prototype.ruleNames = [ "T__0", "T", "I", "L", "E", "C", "O", 
                                     "N", "LOWERCASE", "UPPERCASE", "TITLE", 
                                     "CONTENT", "AUTHOR", "WHITESPACE", 
                                     "NEWLINE", "TEXT" ];

ArticleLexer.prototype.grammarFileName = "Article.g4";


exports.ArticleLexer = ArticleLexer;

