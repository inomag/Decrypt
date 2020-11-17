const body = document.querySelector('body');
const decrypt = document.querySelector('#decrypt');
const encrypt = document.querySelector('#encrypt');

const cCode = document.querySelector('#cryptCode');
const cshift = document.querySelector('#cryptShift');
const plainT = document.querySelector('#plainText');
const eshift = document.querySelector('#encryptShift');

const encryptInput = document.querySelector('#encrpytInput');
const decryptInput = document.querySelector('#decrpytInput');

const results = document.createElement('div');
results.classList.add('results');
decrypt.addEventListener('click', () => {
    if (body.contains(results)) {
        alert('Refresh page');
    }
    else {
        const shift = cshift.value;
        const code = cCode.value;
        if (!code) {
            alert("No string found");
            return;
        }
        const key = Number(shift)
        let result='';
        if(key){
            result = shiftText(code, key, result);
            body.appendChild(results);
            showResult(key, result);
        }
        else {
            body.appendChild(results);
            for (let i = 1; i < 26; i++){
                result = shiftText(code, i, result);
                showResult(i, result);
                result = "";
            }
        }    
    }
});
encrypt.addEventListener('click', () => {
    if (body.contains(results)) {
        alert('Refresh page');
    }
    else {
        body.appendChild(results);
        const shift = eshift.value;
        const code = plainT.value;
        if (!code) {
            alert("No string found");
            return;
        } else {
            const key = Number(shift)
            let result = '';
            result = shiftText(code, key, result);
            showResult(key, result);   
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

const showResult = (shift, code) => {
    const result = document.createElement('div');
    const num = document.createElement('p');
    const text = document.createElement('p');
    results.appendChild(result);
    result.appendChild(num);
    result.appendChild(text);
    num.innerText = `${shift} shift`;
    text.innerText = code;
    result.classList.add('result');
    num.classList.add('num');
    text.classList.add('text');
}
