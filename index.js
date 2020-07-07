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
    

    let clean = x.value
        .replace(/([A-Z])/g, ' $1')

        //providers
        .replace(/softswiss/g, '')
        .replace(/mrslotty/g, '')
        .replace(/pragmatic/g, '')
        .replace(/netent/g, '')
        .replace(/booming/g, '')
        .replace(/bsg/g, '')
        .replace(/endorphina/g, '')
        .replace(/evolution/g, '')
        .replace(/igtech/g, '')
        .replace(/isoftbet/g, '')
        .replace(/platipus/g, '')
        .replace(/playngo/g, '')
        .replace(/quickfire/g, '')
        .replace(/quickspin/g, '')
        .replace(/relax/g, '')
        .replace(/yggdrasil/g, '')
        .replace(/amatic/g, '')

        //bsg_ID_replace
        .replace(/224/g, '2 Million B.C.')
        .replace(/616/g, '2 Million B.C.')
        .replace(/637/g, '4 Seasons')
        .replace(/638/g, '4 Seasons')
        .replace(/229/g, '7th Heaven')
        .replace(/542/g, '7th Heaven')
        .replace(/619/g, 'A Christmas Carol')
        .replace(/620/g, 'A Christmas Carol')
        .replace(/351/g, 'A Night in Paris JP')
        .replace(/391/g, 'A Night in Paris JP')
        .replace(/295/g, 'After Night Falls')
        .replace(/306/g, 'After Night Falls')
        .replace(/553/g, 'Alkemor\'s Tower')
        .replace(/604/g, 'Alkemor\'s Tower')
        .replace(/226/g, 'Arrival')
        .replace(/658/g, 'Arrival ToGo')
        .replace(/300/g, 'At The Copa')
        .replace(/312/g, 'At The Copa')
        .replace(/266/g, 'At the Movies')
        .replace(/607/g, 'At the Movies')
        .replace(/190/g, 'Aztec Treasures')
        .replace(/817/g, 'Back To Venus')
        .replace(/806/g, 'Bamboo Rush')
        .replace(/194/g, 'Barbary Coast')
        .replace(/627/g, 'Barbary Coast')
        .replace(/654/g, 'Birds')
        .replace(/655/g, 'Birds To Go')
        .replace(/256/g, 'Black Gold')
        .replace(/601/g, 'Black Gold')
        .replace(/763/g, 'Blood Eternal')
        .replace(/764/g, 'Blood Eternal')
        .replace(/323/g, 'Boomanji')
        .replace(/324/g, 'Boomanji')
        .replace(/812/g, 'Caishen\'s Arrival')
        .replace(/802/g, 'Carnival Forever')
        .replace(/691/g, 'Charms And Clovers')
        .replace(/669/g, 'Charms And Clovers ToGo')
        .replace(/800/g, 'ChilliPop')
        .replace(/500/g, 'Dr. Jekyll & Mr. Hyde')
        .replace(/501/g, 'Dr. Jekyll & Mr. Hyde')
        .replace(/814/g, 'Dragon & Phoenix')
        .replace(/796/g, 'Dragon Kings')
        .replace(/350/g, 'Enchanted JP')
        .replace(/531/g, 'Enchanted JP')
        .replace(/548/g, 'Event Horizon')
        .replace(/549/g, 'Event Horizon')
        .replace(/692/g, 'FaFaTwins')
        .replace(/693/g, 'FaFaTwins')
        .replace(/798/g, 'Faerie Spells')
        .replace(/755/g, 'Fire & Steel')
        .replace(/756/g, 'Fire & Steel')
        .replace(/648/g, 'FrankenSlots Monster ToGo')
        .replace(/647/g, 'Frankenslot\'s Monster')
        .replace(/512/g, 'Fruit Zen')
        .replace(/513/g, 'Fruit Zen')
        .replace(/804/g, 'Fruitbat Crazy')
        .replace(/811/g, 'Gemmed!')
        .replace(/177/g, 'Genie\'s Fortune')
        .replace(/291/g, 'Genie\'s Fortune')
        .replace(/759/g, 'Giovanni\'s Gems')
        .replace(/760/g, 'Giovanni\'s Gems')
        .replace(/178/g, 'Gladiator')
        .replace(/406/g, 'Gladiator')
        .replace(/173/g, 'Glam Life')
        .replace(/610/g, 'Glam Life')
        .replace(/809/g, 'Gold Canyon')
        .replace(/222/g, 'Gold Diggers')
        .replace(/426/g, 'Good Girl, Bad Girl')
        .replace(/428/g, 'Good Girl, Bad Girl')
        .replace(/700/g, 'Great88')
        .replace(/701/g, 'Great88 ToGo')
        .replace(/341/g, 'Greedy Goblins')
        .replace(/342/g, 'Greedy Goblins')
        .replace(/478/g, 'Gypsy Rose')
        .replace(/479/g, 'Gypsy Rose')
        .replace(/180/g, 'Heist')
        .replace(/468/g, 'Heist')
        .replace(/221/g, 'House of Fun')
        .replace(/644/g, 'House of Fun ToGo')
        .replace(/504/g, 'It Came From Venus JP Plus')
        .replace(/505/g, 'It Came From Venus JP Plus')
        .replace(/767/g, 'Jumbo Joker')
        .replace(/768/g, 'Jumbo Joker')
        .replace(/727/g, 'Kawaii Kitty')
        .replace(/728/g, 'Kawaii Kitty')
        .replace(/775/g, 'Legend of the Nile')
        .replace(/776/g, 'Legend of the Nile')
        .replace(/248/g, 'Lost')
        .replace(/422/g, 'Lost')
        .replace(/263/g, 'Lucky Seven')
        .replace(/159/g, 'Mad Scientist')
        .replace(/247/g, 'Madder Scientist')
        .replace(/412/g, 'Madder Scientist')
        .replace(/751/g, 'Magic Shoppe')
        .replace(/752/g, 'Magic Shoppe')
        .replace(/238/g, 'Mamma Mia')
        .replace(/584/g, 'Mamma Mia')
        .replace(/779/g, 'Max Quest: Wrath of Ra')
        .replace(/534/g, 'Mega Gems')
        .replace(/535/g, 'Mega Gems')
        .replace(/554/g, 'Mega Glam Life JP')
        .replace(/587/g, 'Mega Glam Life JP')
        .replace(/819/g, 'Monster Pop')
        .replace(/444/g, 'More Gold Diggin')
        .replace(/451/g, 'More Gold Diggin')
        .replace(/210/g, 'Mr. Vegas')
        .replace(/269/g, 'Mr. Vegas')
        .replace(/243/g, 'Ned and his Friends')
        .replace(/793/g, 'Ogre Empire')
        .replace(/193/g, 'Once Upon A Time')
        .replace(/524/g, 'Once Upon A Time')
        .replace(/225/g, 'Pico and the Popping Peppers')
        .replace(/651/g, 'Pico and the Popping Peppers')
        .replace(/520/g, 'Pinocchio')
        .replace(/521/g, 'Pinocchio')
        .replace(/482/g, 'Puppy Love Plus')
        .replace(/483/g, 'Puppy Love Plus')
        .replace(/820/g, 'Quest to the West')
        .replace(/792/g, 'Reels of Wealth')
        .replace(/220/g, 'RockStar')
        .replace(/277/g, 'Rook\'s Revenge')
        .replace(/318/g, 'Rook\'s Revenge')
        .replace(/223/g, 'Royal Reels')
        .replace(/280/g, 'Safari Sam')
        .replace(/303/g, 'Safari Sam')
        .replace(/719/g, 'Sin City Nights')
        .replace(/720/g, 'Sin City Nights ToGo')
        .replace(/344/g, 'Slotfather JP')
        .replace(/345/g, 'Slotfather JP')
        .replace(/704/g, 'Slotfather2')
        .replace(/705/g, 'Slotfather2')
        .replace(/258/g, 'Slots Angels')
        .replace(/545/g, 'Slots Angels')
        .replace(/807/g, 'Spinfinity Man')
        .replace(/816/g, 'Spring Tails')
        .replace(/771/g, 'Stampede')
        .replace(/772/g, 'Stampede')
        .replace(/402/g, 'Sugar Pop')
        .replace(/494/g, 'Sugar Pop')
        .replace(/784/g, 'Sugar Pop 2: Double Dipped')
        .replace(/785/g, 'Sugar Pop 2: Double Dipped')
        .replace(/815/g, 'Super Sweets')
        .replace(/288/g, 'Sushi Bar')
        .replace(/465/g, 'Sushi Bar')
        .replace(/813/g, 'Take The Bank')
        .replace(/747/g, 'The Angler')
        .replace(/748/g, 'The Angler')
        .replace(/461/g, 'The Curious Machine Plus')
        .replace(/462/g, 'The Curious Machine Plus')
        .replace(/262/g, 'The Exterminator')
        .replace(/641/g, 'The Exterminator To Go')
        .replace(/156/g, 'The Ghouls')
        .replace(/794/g, 'The Golden Owl of Athena')
        .replace(/827/g, 'The Hive!')
        .replace(/597/g, 'The Tipsy Tourist')
        .replace(/598/g, 'The Tipsy Tourist')
        .replace(/384/g, 'The True Sheriff')
        .replace(/385/g, 'The True Sheriff')
        .replace(/788/g, 'Tiger\'s Claw')
        .replace(/789/g, 'Tiger\'s Claw')
        .replace(/818/g, 'Total Overdrive')
        .replace(/158/g, 'Treasure Room')
        .replace(/381/g, 'Treasure Room')
        .replace(/236/g, 'True Illusions')
        .replace(/396/g, 'True Illusions')
        .replace(/471/g, 'Tycoons Plus')
        .replace(/472/g, 'Tycoons Plus')
        .replace(/308/g, 'Under the Bed')
        .replace(/320/g, 'Under the Bed')
        .replace(/259/g, 'Under the Sea')
        .replace(/455/g, 'Under the Sea')
        .replace(/228/g, 'Viking Age')
        .replace(/623/g, 'Viking Age ToGo')
        .replace(/805/g, 'Viking Voyage')
        .replace(/590/g, 'Weekend in Vegas')
        .replace(/591/g, 'Weekend in Vegas')
        .replace(/490/g, 'WhoSpunit Plus')
        .replace(/810/g, 'Wolf Moon Rising')
        .replace(/801/g, 'Yak, Yeti & Roll')
        // .replace(/2/g, 'Lucky Seven')
        

        //mrslotty_trash_removal
        .replace(/_not_mobile_html_sw/g, '')
        .replace(/_mobile_html_sw/g, '')

        .replace(/[\[\]":]+/g, '')
        .replace(/^./, function (str) {
            return str.toUpperCase();
        })

        //remove duplicates
        let uniq = clean.split(', ');
        let unique = [...new Set(uniq)]; 
        let final = unique.join(', ');
    
    if (language === 'en') {
        x.value = 'You can play these slots:' + final + '. Good luck!';
    } else {
        x.value = 'Вы можете играть в следующие слоты:' + final + '. Удачи!'
    }
}

// ["softswiss:SlotName", "softswiss:SlotName"]
// ["mrslotty:SlotName", "mrslotty:SlotName"]
// ["mrslotty:SlotName", "softswiss:SlotName"]
// ["pragmatic:SlotName", "pragmatic:SlotName"]
// ["netent:kingofslots_not_mobile_html_sw", "netent:kingofslots_mobile_html_sw"]
// ["bsg:693", "bsg:692", "bsg:755", "bsg:756", "bsg:512", "bsg:513", "bsg:2", "bsg:228"]
// ["bsg:693", "bsg:692", "bsg:755", "bsg:756", "bsg:512", "bsg:513"]

