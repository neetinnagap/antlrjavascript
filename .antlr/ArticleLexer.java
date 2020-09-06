// Generated from c:\Users\Neetin\Documents\Work\projects\antlr\article\Article.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ArticleLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, TITLE=2, CONTENT=3, AUTHOR=4, WHITESPACE=5, NEWLINE=6, TEXT=7;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T", "I", "L", "E", "C", "O", "N", "LOWERCASE", "UPPERCASE", 
			"TITLE", "CONTENT", "AUTHOR", "WHITESPACE", "NEWLINE", "TEXT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, "TITLE", "CONTENT", "AUTHOR", "WHITESPACE", "NEWLINE", "TEXT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public ArticleLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Article.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\ta\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\3\2\3"+
		"\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3"+
		"\13\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\17\6\17N\n\17\r\17\16\17O\3\20\5\20S\n\20"+
		"\3\20\3\20\6\20W\n\20\r\20\16\20X\3\21\3\21\3\21\6\21^\n\21\r\21\16\21"+
		"_\2\2\22\3\3\5\2\7\2\t\2\13\2\r\2\17\2\21\2\23\2\25\2\27\4\31\5\33\6\35"+
		"\7\37\b!\t\3\2\r\4\2VVvv\4\2KKkk\4\2NNnn\4\2GGgg\4\2EEee\4\2QQqq\4\2P"+
		"Ppp\3\2c|\3\2C\\\4\2\13\13\"\"\3\2\62;\2^\2\3\3\2\2\2\2\27\3\2\2\2\2\31"+
		"\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\3#\3\2\2\2"+
		"\5%\3\2\2\2\7\'\3\2\2\2\t)\3\2\2\2\13+\3\2\2\2\r-\3\2\2\2\17/\3\2\2\2"+
		"\21\61\3\2\2\2\23\63\3\2\2\2\25\65\3\2\2\2\27\67\3\2\2\2\31=\3\2\2\2\33"+
		"E\3\2\2\2\35M\3\2\2\2\37V\3\2\2\2!]\3\2\2\2#$\7<\2\2$\4\3\2\2\2%&\t\2"+
		"\2\2&\6\3\2\2\2\'(\t\3\2\2(\b\3\2\2\2)*\t\4\2\2*\n\3\2\2\2+,\t\5\2\2,"+
		"\f\3\2\2\2-.\t\6\2\2.\16\3\2\2\2/\60\t\7\2\2\60\20\3\2\2\2\61\62\t\b\2"+
		"\2\62\22\3\2\2\2\63\64\t\t\2\2\64\24\3\2\2\2\65\66\t\n\2\2\66\26\3\2\2"+
		"\2\678\5\5\3\289\5\7\4\29:\5\5\3\2:;\5\t\5\2;<\5\13\6\2<\30\3\2\2\2=>"+
		"\5\r\7\2>?\5\17\b\2?@\5\21\t\2@A\5\5\3\2AB\5\13\6\2BC\5\21\t\2CD\5\5\3"+
		"\2D\32\3\2\2\2EF\7C\2\2FG\7W\2\2GH\7V\2\2HI\7J\2\2IJ\7Q\2\2JK\7T\2\2K"+
		"\34\3\2\2\2LN\t\13\2\2ML\3\2\2\2NO\3\2\2\2OM\3\2\2\2OP\3\2\2\2P\36\3\2"+
		"\2\2QS\7\17\2\2RQ\3\2\2\2RS\3\2\2\2ST\3\2\2\2TW\7\f\2\2UW\7\17\2\2VR\3"+
		"\2\2\2VU\3\2\2\2WX\3\2\2\2XV\3\2\2\2XY\3\2\2\2Y \3\2\2\2Z^\5\23\n\2[^"+
		"\5\25\13\2\\^\t\f\2\2]Z\3\2\2\2][\3\2\2\2]\\\3\2\2\2^_\3\2\2\2_]\3\2\2"+
		"\2_`\3\2\2\2`\"\3\2\2\2\t\2ORVX]_\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}