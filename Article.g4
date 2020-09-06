grammar Article;

/*
 * Parser Rules
 */

create              : line+ EOF ;

line                : command message NEWLINE ;

command             : (TITLE | CONTENT | AUTHOR) ':' WHITESPACE ;

message             : (TEXT | WHITESPACE)+ ;

// TITLE: test setseta\n

/*
 * Lexer Rules
 */

fragment T          : ('T'|'t') ;
fragment I          : ('I'|'i') ;
fragment L          : ('L'|'l') ;
fragment E          : ('E'|'e') ;
fragment C          : ('C'|'c') ;
fragment O          : ('O'|'o') ;
fragment N          : ('N'|'n') ;

fragment LOWERCASE  : [a-z] ;
fragment UPPERCASE  : [A-Z] ;

TITLE               : T I T L E ;

CONTENT             : C O N T E N T ;

AUTHOR             : ('AUTHOR') ;

WHITESPACE          : (' ' | '\t')+ ;

NEWLINE             : ('\r'? '\n' | '\r')+ ;

TEXT                : (LOWERCASE | UPPERCASE | [0-9])+;