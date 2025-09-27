let pojasevi = ["Beli", "Zuti", "Narandzasti", "Zeleni", "Plavi", "Braon", "Crni"];

function odrediGrupu(godine) {
    if (godine < 7) {
        return " mlad si jos za trening";
    } else if (godine <= 15) {
        return " ides u pionirsku grupu";
    } else {
        return " ides u seniorsku grupu";
    }
}

function prikaziPojaseve() {
    let html = "";
    for (let i = 0; i < pojasevi.length; i++) {
        html += "<li>" + pojasevi[i] + "</li>";
    }
    return html;
}

let dugmePojasevi = document.getElementById("dugmePojasevi");
if (dugmePojasevi) {
    dugmePojasevi.addEventListener("click", function() {
        document.getElementById("spisak").innerHTML = prikaziPojaseve();
    });
}

let dugmePrijava = document.getElementById("dugmePrijava");
if (dugmePrijava) {
    dugmePrijava.addEventListener("click", function() {
        let ime = document.getElementById("ime").value;
        let godine = document.getElementById("godine").value;

        let poruka = "";
        if (ime === "" || godine === "") {
            poruka = "Unesite podatke";
        } else {
            poruka = " Pozdrav " + ime  + odrediGrupu(godine);
        }

        let ispis = document.getElementById("odgovor");
        ispis.innerText = poruka;
        ispis.style.color = "#1a237e";
    });
}