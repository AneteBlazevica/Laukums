function nolasa (m1,m2,m3){
    const malas = document.getElementsByClassName("mala");//ievadītos ciparus rāmī sasaistīs ar funciju
     m1 = parseFloat(mala1.value);
     m2 = parseFloat(mala2.value);
     m3 = parseFloat(mala3.value);

    if (m1 > 0 && m2 > 0 && m3>0){//ja 1., 2., 3., mala ir jābūt lielākam par 0
        console.log({m1, m2, m3});
        return{m1, m2, m3};

   } else {
    console.log(false); //ja mazāks pa 0, tad neveidojas
    return false
}
}

function perimetrs(m1,m2,m3){
    const m = nolasa();
    m1=m.m1; m2=m.m2; m3=m.m3;
    console.log(m1,m2,m3);
    const p = m1+m2+m3;//saskaita, lai izrēķinātu perimetru
    console.log(p);
    return(p);
}

function pusper(m1,m2,m3){
    const pusper = perimetrs(m1+m2+m3)/2; //izrēķina pusperimetru
    console.log(pusper);
    return(pusper);
}

function laukums(m1,m2,m3){
    const pusper = perimetrs(m1+m2+m3)/2; //izrēķina pusperimetru
    let tlaukums = Math.sqrt(pusper* ((pusper-m1) * (pusper-m2) * (pusper-m3))); //Hērona formula
    console.log(tlaukums);
    return tlaukums;
}
//Funkcija pārbauda vai divu malu summa ir lielāka par trešo malu
function irTrijsturis(m1,m2,m3){
    //pārbauda vai izpildās trijstūra nevienādīa
    //atgriež true vai false
if (m1<m2+m3 && m2<m1+m3 && m3<m1+m2){
    return true;
}else{
    return false;
}
}