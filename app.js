let language = 'en'; // 預設語言為英文

// 加載語言文件
function loadLanguage() {
    fetch('lang.json')
        .then(response => response.json())
        .then(data => {
            const langData = data[language];
            document.title = langData.title;
            document.getElementById('pageTitle').textContent = langData.title;
            document.getElementById('textInput').placeholder = langData.placeholder;
            document.getElementById('anyCharacterBtn').textContent = langData.any_character;
            document.getElementById('nonWhitespaceBtn').textContent = langData.non_whitespace;
            document.getElementById('lettersOnlyBtn').textContent = langData.letters_only;
            document.getElementById('nonWhitespacePunctuationBtn').textContent = langData.non_whitespace_punctuation;
        });
}

// 切換語言
function switchLanguage(lang) {
    language = lang;
    loadLanguage();
}

// 頁面加載時加載預設語言
document.addEventListener('DOMContentLoaded', loadLanguage);

// 創建CharacterCounter實例，預設模式為只計算字母字符
const characterCounter = new CharacterCounter(MODE_LETTERS_ONLY);

// 更新字符計數
function updateCharacterCount() {
    const text = textInput.value;
    const characterCount = characterCounter.countCharacters(text);
    result.textContent = `字符數：${characterCount}`;
}

// 切換模式
function setMode(mode) {
    characterCounter.mode = mode;
    updateCharacterCount();
}

// 監聽輸入框，實時更新
const textInput = document.getElementById('textInput');
const result = document.getElementById('result');
textInput.addEventListener('input', updateCharacterCount);
