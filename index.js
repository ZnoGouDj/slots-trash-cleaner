let btn = document.getElementById('button');
btn.addEventListener('click', cleaner, false);

let language = 'en';

function languageChanger() {
    let lng = document.getElementById('myCheck');
    if (lng.checked == true) {
        language = 'ru';
    } else {
        language = 'en';
    }
}

function cleaner() {
    let x = document.getElementById('thetext');

    if (!x.value) { alert('Please, paste any shitty game in the text area'); return; }
    if (x.value.slice(0, 25) === 'You can play these slots:') { return; }
    if (x.value.slice(0, 35) === 'Вы можете играть в следующие слоты:') { return; }
    if (x.value.search('softswiss') < 0 && x.value.search('pragmatic') < 0 && x.value.search('netent') < 0 && x.value.search('mrslotty') < 0) { alert("This provider's name has been forgotten. These are available: softswiss, pragmatic, netent, mrslotty."); return; }
    

    let clean = x.value
        .replace(/([A-Z])/g, ' $1')
        .replace(/softswiss/g, '')
        .replace(/mrslotty/g, '')
        .replace(/pragmatic/g, '')
        .replace(/netent/g, '')
        .replace(/_not_mobile_html_sw/g, '')
        .replace(/_mobile_html_sw/g, '')
        .replace(/[\[\]'":]+/g, '')
        .replace(/^./, function (str) {
            return str.toUpperCase();
        })
    
    if (language === 'en') {
        x.value = 'You can play these slots:' + clean + '. Good luck!';
    } else {
        x.value = 'Вы можете играть в следующие слоты:' + clean + '. Удачи!'
    }
}

// ["softswiss:SlotName", "softswiss:SlotName"]
// ["mrslotty:SlotName", "mrslotty:SlotName"]
// ["mrslotty:SlotName", "softswiss:SlotName"]
// ["pragmatic:SlotName", "pragmatic:SlotName"]
// ["netent:kingofslots_not_mobile_html_sw", "netent:kingofslots_mobile_html_sw"]

