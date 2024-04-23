// 定義四種模式的常量
const MODE_ANY_CHARACTER = 'any_character';
const MODE_NON_WHITESPACE = 'non_whitespace';
const MODE_LETTERS_ONLY = 'letters_only';
const MODE_NON_WHITESPACE_PUNCTUATION = 'non_whitespace_punctuation';

class CharacterCounter {
    constructor(mode) {
        this.mode = mode;
    }

    countCharacters(text) {
        if (text === undefined || text === null) {
            text = ''; 
        }

        switch (this.mode) {
            case MODE_ANY_CHARACTER:
                // 任何字符都計算
                return text.length;
            case MODE_NON_WHITESPACE:
                // 空白以外的字符都計算
                const nonWhitespaceRegex = /\S/gu;
                const nonWhitespaceMatches = text.match(nonWhitespaceRegex);
                return nonWhitespaceMatches ? nonWhitespaceMatches.length : 0;
            case MODE_LETTERS_ONLY:
                // 只計算字母字符
                const lettersRegex = /\p{L}/gu;
                const lettersMatches = text.match(lettersRegex);
                return lettersMatches ? lettersMatches.length : 0;
            case MODE_NON_WHITESPACE_PUNCTUATION:
                // 空白和標點符號以外的字符都計算
                const nonWhitespacePunctuationRegex = /[^\s\p{P}]/gu;
                const nonWhitespacePunctuationMatches = text.match(nonWhitespacePunctuationRegex);
                return nonWhitespacePunctuationMatches ? nonWhitespacePunctuationMatches.length : 0;
            default:
                return 0; 
        }
    }
}