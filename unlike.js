(async function () {

let count = 0;

function sleep(ms){
    return new Promise(r => setTimeout(r, ms));
}

while(true){

    let buttons = document.querySelectorAll('[data-testid="unlike"]');

    if(buttons.length === 0){
        window.scrollTo(0, document.body.scrollHeight);
        await sleep(4000);
        continue;
    }

    let btn = buttons[0];
    btn.click();

    count++;
    console.log("Unliked " + count);

    await sleep(2500 + Math.random()*2500);

    window.scrollBy(0,800);

}

})();