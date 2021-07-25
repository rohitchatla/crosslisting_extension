setTimeout(() => {
  for (
    let i = 0;
    i < document.getElementsByClassName("col-x12 col-l6 col-s8").length;
    i++
  ) {
    var div = document.getElementsByClassName("col-x12 col-l6 col-s8")[i];
    var title = div.getElementsByClassName("tile__title tc--b")[0];
    var id = title.href.substring(title.href.lastIndexOf("-") + 1);
    var a = document.createElement("A");
    a.innerHTML = "Internal";
    a.id = i;
    a.className = "btn";
    a.href = "https://poshmark.com/edit-listing/" + id + "?internal";
    div.appendChild(a);

    var e = document.createElement("A");
    e.innerHTML = "E";
    e.id = i;
    e.className = "btn";
    e.href = "https://poshmark.com/edit-listing/" + id + "?ebay";
    div.appendChild(e);

    var m = document.createElement("A");
    m.innerHTML = "M";
    m.id = i;
    m.className = "btn";
    m.href = "https://poshmark.com/edit-listing/" + id + "?mercari";
    div.appendChild(m);
  }
}, 2000);
