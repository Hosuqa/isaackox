    // bedzie tak chyba ze wymysle cos innego xd
    function isaac() {
        if(document.getElementById('isaac').style.display === 'none'){
            document.getElementById('isaac').style.display = 'block';
        } else {
            document.getElementById('isaac').style.display = 'none';}
    }
    function magdalene() {
        if(document.getElementById('magdalene').style.display === 'none'){
            document.getElementById('magdalene').style.display = 'block';
        } else {
            document.getElementById('magdalene').style.display = 'none';}
    }
    function cain() {
        if(document.getElementById('cain').style.display === 'none'){
            document.getElementById('cain').style.display = 'block';
        } else {
            document.getElementById('cain').style.display = 'none';}
    }
    function judas() {
        if(document.getElementById('judas').style.display === 'none'){
            document.getElementById('judas').style.display = 'block';
        } else {
            document.getElementById('judas').style.display = 'none';}
    }
    function eve() {
        if(document.getElementById('eve').style.display === 'none'){
            document.getElementById('eve').style.display = 'block';
        } else {
            document.getElementById('eve').style.display = 'none';}
    }
    function samson() {
        if(document.getElementById('samson').style.display === 'none'){
            document.getElementById('samson').style.display = 'block';
        } else {
            document.getElementById('samson').style.display = 'none';}
    }
    function azazel() {
        if(document.getElementById('azazel').style.display === 'none'){
            document.getElementById('azazel').style.display = 'block';
        } else {
            document.getElementById('azazel').style.display = 'none';}
    }
    function lazarus() {
        if(document.getElementById('lazarus').style.display === 'none'){
            document.getElementById('lazarus').style.display = 'block';
        } else {
            document.getElementById('lazarus').style.display = 'none';}
    }
    function eden() {
        if(document.getElementById('eden').style.display === 'none'){
            document.getElementById('eden').style.display = 'block';
        } else {
            document.getElementById('eden').style.display = 'none';}
    }
    function bluebaby() {
        if(document.getElementById('bluebaby').style.display === 'none'){
            document.getElementById('bluebaby').style.display = 'block';
        } else {
            document.getElementById('bluebaby').style.display = 'none';}
    }

    function zamykacz() {
        var cards = document.querySelectorAll('.mycard');
        var l = cards.length;

        for (i = 0; i < l; i++) {
            cards[i].style.display = 'none';
        }
    }