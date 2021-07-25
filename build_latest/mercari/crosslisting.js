setTimeout(() => {
  for (
    let i = 0;
    i < document.getElementsByClassName("ListItem-sc-9sj38i-0 bWjhrz").length;
    i++
  ) {
    var div = document.getElementsByClassName("ListItem-sc-9sj38i-0 bWjhrz")[i];
    var title = div.getElementsByTagName("a")[0];
    var id = title.href.substring(
      title.href.lastIndexOf("/", title.href.lastIndexOf("/") - 1) + 1,
      title.href.lastIndexOf("/")
    );

    var a = document.createElement("A");
    a.innerHTML = "Internal";
    a.id = i;
    a.className = "btn";
    a.href = "https://www.mercari.com/sell/edit/" + id + "?internal";
    div.appendChild(a);

    var e = document.createElement("A");
    e.innerHTML = "E";
    e.id = i;
    e.className = "btn";
    e.href = "https://www.mercari.com/sell/edit/" + id + "?ebay";
    div.appendChild(e);

    var p = document.createElement("A");
    p.innerHTML = "P";
    p.id = i;
    p.className = "btn";
    p.href = "https://www.mercari.com/sell/edit/" + id + "?poshmark";
    div.appendChild(p);
  }
}, 2000);
