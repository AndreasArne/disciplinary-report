javascript: (function () {
    let identity = document.getElementsByClassName("dl-horizontal")[0];
    let email = document.getElementsByClassName("dl-horizontal")[1];
    let phone = document.getElementsByClassName("dl-horizontal")[2];
    let adress = document.getElementsByClassName("dl-horizontal")[3];
    let dd1 = identity.getElementsByTagName("dd");
    let dd2 = email.getElementsByTagName("dd");
    let dd3 = phone.getElementsByTagName("dd");
    let dd4 = adress.getElementsByTagName("dd");
    let pnr = dd1[0].innerText;
    let lastname = dd1[2].innerText;
    let firstname = dd1[3].innerText;
    let birthdata = dd1[4].innerText;

    let reg = /[^\s]+/;

    let mail = reg.exec(dd2[0].innerText);
    let phonenr = reg.exec(dd3[0].innerText);

    let street = dd4[2].innerText;
    let postnr = dd4[3].innerText;
    let postcity = dd4[4].innerText;
    let country = dd4[5].innerText;

    let html = `
${lastname}, ${firstname}\n
${pnr}\n
${street}\n
${postnr} ${postcity} ${country}\n
${phonenr}
    `;

    navigator.clipboard.writeText(html);

})();