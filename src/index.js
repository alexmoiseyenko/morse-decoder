const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const exprArr = expr.split('');
    let initialArr = [];

    for (let i = 0; i < exprArr.length; i += 10) {
        initialArr.push(exprArr.slice(i, i + 10));
    }

    let str = '';
    let resultArray = [];

    for (let i = 0; i < initialArr.length; i++) {
        resultArray[i] = [];
        initialArr[i].map((item, idx) => {
            str += item;
            if (idx % 2 !== 0) {
                resultArray[i].push(str);
                str = '';
            }
        })
    }

    str = '';
    let phrase = '';

    for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i][0] === '**') {
            phrase += ' ';
        } else {
            resultArray[i].map((item, idx) => {
                switch (item) {
                    case '10':
                        str += '.';
                        break;

                    case '11':
                        str += '-';
                        break;
                }
            })
            phrase += MORSE_TABLE[str];
        }

        str = '';
    }

    return phrase;
}

module.exports = {
    decode
}