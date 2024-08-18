function CheckVowels() {
    let text = document.getElementById("inputText").value;
    let vowelCount = 0; // đếm nguyên âm
    let consonantCount = 0; // đếm phụ âm

   //chuyển đổi qua chữ thường
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        if (isVowel(char)) {
            vowelCount++;
        } else if (isConsonant(char)) {
            consonantCount++;
        }
    }

    const result = document.getElementById('result');
    result.textContent = "Tổng số chữ nguyên âm: " + vowelCount + " | Tổng số chữ phụ âm: " + consonantCount;
}

function isVowel(char) {
    const vowels = ["a", "á", "à", "ả", "ã", "ạ", "ă", "ắ", "ằ", "ẳ", "ẵ", "ặ", "â", "ấ", "ầ", "ẩ", "ẫ", "ậ", "e", "é", "è", "ẻ", "ẽ", "ẹ", "ê", "ế", "ề", "ể", "ễ", "ệ", "i", "í", "ì", "ỉ", "ĩ", "ị", "o", "ó", "ò", "ỏ", "õ", "ọ", "ô", "ố", "ồ", "ổ", "ỗ", "ộ", "ơ", "ớ", "ờ", "ở", "ỡ", "ợ", "u", "ú", "ù", "ủ", "ũ", "ụ", "ư", "ứ", "ừ", "ử", "ữ", "ự", "y", "ý", "ỳ", "ỷ", "ỹ", "ỵ"];
    return vowels.includes(char);
}

function isConsonant(char) {
   
    return /[a-záàảãạăắằẳẵặâấầẩẫậeéèẻẽẹêếềểễệiíìỉĩịoóòỏõọôốồổỗộơớờởỡợuúùủũụưứừửữựyýỳỷỹỵ]/.test(char) && !isVowel(char);
}
