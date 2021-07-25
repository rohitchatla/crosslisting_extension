setTimeout(() => {
  for (let i = 3; i < document.getElementsByTagName("tbody").length - 1; i++) {
    var tbody = document.getElementsByTagName("tbody")[i];
    var div = tbody.getElementsByTagName("tr")[0].getElementsByTagName("td")[0];
    var id = tbody.getElementsByTagName("tr")[0].dataset.id;

    var p = document.createElement("A");
    p.innerHTML = "P";
    p.id = i;
    p.className = "btn";
    p.href =
      "https://bulksell.ebay.com/ws/eBayISAPI.dll?SingleList&sellingMode=ReviseItem&ReturnURL=https%3A%2F%2Fwww.ebay.com%2Fsh%2Flst%2Factive&lineID=" +
      id +
      "&poshmark";
    div.appendChild(p);

    var m = document.createElement("A");
    m.innerHTML = "M";
    m.id = i;
    m.className = "btn";
    m.href =
      "https://bulksell.ebay.com/ws/eBayISAPI.dll?SingleList&sellingMode=ReviseItem&ReturnURL=https%3A%2F%2Fwww.ebay.com%2Fsh%2Flst%2Factive&lineID=" +
      id +
      "&mercari";
    div.appendChild(m);

    var a = document.createElement("A");
    a.innerHTML = "Internal";
    a.id = i;
    a.className = "btn";
    a.href =
      "https://bulksell.ebay.com/ws/eBayISAPI.dll?SingleList&sellingMode=ReviseItem&ReturnURL=https%3A%2F%2Fwww.ebay.com%2Fsh%2Flst%2Factive&lineID=" +
      id +
      "&internal";
    div.appendChild(a);
  }
}, 5000);
