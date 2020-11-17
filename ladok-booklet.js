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

    let openthis = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=400px,height=300px,top="+(10)+",left="+(500));
    let html = `
<textarea id="copy" style="width:300px;height:100px">
${lastname}, ${firstname}\n
${pnr}\n
${street}\n
${postnr} ${postcity} ${country}\n
${phonenr}
</textarea><br>
    `;
    openthis.document.body.innerHTML = html;
    let btn = openthis.document.createElement("button");
    btn.innerHTML = "Click to copy and close";
    btn.style.width="200px";
    btn.style.height="20px";
    btn.setAttribute("id", "copy-btn");
    btn.addEventListener("click", function() {
        openthis.document.getElementById("copy").select();
        openthis.document.execCommand("copy");
        openthis.close();
    });
    openthis.document.body.appendChild(btn);
    openthis.document.getElementById("copy-btn").focus();
})();