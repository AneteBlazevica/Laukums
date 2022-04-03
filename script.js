function nolasa(m1,m2,m3){
    const malas = document.getElementsByClassName("mala"); //ievadītos ciparus rāmī sasaistīs ar funciju
    m1 = parseFloat(mala1.value);
    m2 = parseFloat(mala2.value);
    m3 = parseFloat(mala3.value);

    if (m1>0 && m2>0 && m3>0) { //ja 1., 2., 3., mala ir jābūt lielākam par 0
        console.log({m1,m2,m3});
        return {m1,m2,m3};

    } else {
        console.log(false); //ja mazāks pa 0, tad neveidojas
        return false;
    }
}

function perimetrs(m1,m2,m3){
    const m=nolasa();
    m1=m.m1; m2=m.m2; m3=m.m3;
    console.log(m1,m2,m3);
    const p=m1+m2+m3; //saskaita un iegūst 3 malu summu jeb perimetru
    console.log(p);
    return (p);
}

function pusperimetrs(m1,m2,m3) {
    const pusperimetrs=perimetrs(m1,m2,m3)/2; //izrēķina pusperimetru
    console.log(pusperimetrs);
    return (pusperimetrs);
}

function laukums(m1,m2,m3){ //izrēķina trijstūra pusperimetru un laukumu
    const pusperimetrs = perimetrs(m1,m2,m3)/2; //izrēķina pusperimetru
    let tlaukums = Math.sqrt(
        pusperimetrs*((pusperimetrs-m1)*(pusperimetrs-m2)*(pusperimetrs-m3))); //Hērona formula
    console.log(tlaukums);
    return tlaukums;
}
  
function irTrijsturis(m1,m2,m3){ //Funkcija pārbauda vai divu malu summa ir lielāka par trešo malu
     //pārbauda vai izpildās trijstūra nevienādīa
    if (m1<m2+m3 && m2<m1+m3 && m3<m1+m2) {
        return true; //atgriež true
    } else {
        return false; //atgriež false
    }
}
 
function rezultats(){ //izvada rezultātu
    const m=nolasa();
    m1=m.m1; m2=m.m2; m3=m.m3;
    console.log(m1,m2,m3);
    if (!nolasa()){
        t = " Nekorekti ievaddati, trijstūra malu vērtībām ir jābūt lielākām par 0";
    } else {
        if (irTrijsturis(m1,m2,m3)==false){ //Ja trijstūru malu garumi ir nepareizi (neizpildās iepriekšējā funkcija) tad trijstūris neeksistē
            t = " Trijstūris neeksistē, jo jebkuru 2 malu garumu summai ir jābūt lielākai par trešo malu";
        } else {
            t = "Trijstūris ar malu garumiem " + m1 + ", " + m2 + " un " + m3 + " eksistē."
            if (m1==m2 && m2==m3) {
                t += " Tas ir vienādmalu trijstūris."

            } else {
                if (m1 == m2 || m2 == m3 || m1 == m3);{
                t += " Tas ir vienādsānu trijstūris.";
            }
        }
        const p = perimetrs(m1,m2,m3); //iepriekš izrēķinātais perimetrs
        const s = Math.round (laukums(m1,m2,m3) * 100) / 100; //2 zīmes aiz komata
        t += " Perimetrs ir " + p + " un laukums ir " + s + ".";
    }
    }
    console.log(t);//izvada tekstu
    return t;
}

function izvadaTekstu() {
    //jāizsauc funkciju rezultāts
    const teksts = rezultats();
    //elementa ar Id "izvade" izvada tekstu
    console.log(teksts);
    const sakne = document.getElementById("izvade");
    const raksti = document.createElement("p");
    raksti.innerHTML = teksts;
    sakne.appendChild(raksti);
}