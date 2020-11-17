const decrypt = document.querySelector('#decrypt');
const encrypt = document.querySelector('#encrypt');

const cCode = document.querySelector('#cryptCode');
const cshift = document.querySelector('#cryptShift');
const plainT = document.querySelector('#plainText');
const eshift = document.querySelector('#encryptShift');

decrypt.addEventListener('click', () => {
    const shift = cshift.value;
    const code = cCode.value;
    const key = Number(shift)
    console.log(key);
    let result='';
    if(key){
        result = shiftText(code, key, result);
        console.log(result);
    }
    else {
        for (let i = 1; i < 26; i++){
            result = shiftText(code, i, result);
            console.log(`Shift: ${i} Text: ${result}`);
            result = "";
        }
    }
});

const shiftText = (code, key, result) => {
    for (let i = 0; i < code.length; i++) {
        if (code[i].charCodeAt(0) >= 65 && code[i].charCodeAt(0) <= 90){
            const a = code[i].charCodeAt(0);
            const e = (((a - 65 + key) % 26) + 97);
            result = result + String.fromCharCode(e).toUpperCase();
        }
        else if (code[i].charCodeAt(0) >= 97 && code[i].charCodeAt(0) <= 122){
            const a = code[i].charCodeAt(0);
            const e = (((a - 97 + key) % 26) + 97);
            result = result + String.fromCharCode(e);
        }
        else {
            result = result + code[i];
        }
    }
    return result;
}

encrypt.addEventListener('click', () => {
    const shift = eshift.value;
    const code = plainT.value;
    const key = Number(shift)
    console.log(key);
    let result = '';
    result = shiftText(code, key, result);
        console.log(result);
})
