let btn = document.getElementById('buttonEn');
btn.addEventListener('click', cleaner, false);

let language = 'en';

function cleaner() {
    let x = document.getElementById('thetext');

    if (!x.value) { alert('Please, paste any shitty game here'); return; }
    if (x.value.slice(0, 25) === 'You can play these slots:') { return; }
    if (x.value.search('softswiss') < 0 && x.value.search('mrslotty') < 0) { alert("For 'softswiss' and 'mrslotty' only"); return; }
    

    let clean = x.value
        .replace(/([A-Z])/g, ' $1')
        .replace(/softswiss/g, '')
        .replace(/mrslotty/g, '')
        .replace(/[\[\]'":]+/g, '')
        .replace(/^./, function (str) {
            return str.toUpperCase();
        })

    x.value = 'You can play these slots:' + clean + '. Good luck!';
}

// ["softswiss:SlotName", "softswiss:SlotName"]
// ["mrslotty:SlotName", "mrslotty:SlotName"]
// ["mrslotty:SlotName", "softswiss:SlotName"]
// ["pragmatic:SlotName", "pragmatic:SlotName"]
