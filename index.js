let btn = document.getElementById('button');
btn.addEventListener('click', cleaner, false);

function cleaner() {
    let x = document.getElementById('thetext');

    let clean = x.value
        .replace(/([A-Z])/g, ' $1')
        .replace(/softswiss/g, '')
        .replace(/['":]+/g, '')
        .replace(/^./, function (str) {
            return str.toUpperCase();
        })

    x.value = clean;
}

// softswiss:"SlotName", softswiss:"SlotName"