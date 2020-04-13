function getSumbol() {
    const sing = new Promise(sumbol=>{
        setTimeout(()=>{
            +sumbol(String.fromCharCode(Date.now().toString().slice(-5)));

        }, 50);
        
    })
    return sing;
}



async function getRandomChinese(length) {
    let i = 0;
    let str = '';
    while (i<length) {
        str += await getSumbol();
        i++;
    }
    return console.log('str: ', str);
}

getRandomChinese(4);