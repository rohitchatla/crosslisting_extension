setTimeout(() => {
  getData();
  var div = document.getElementsByClassName("u-cb spcr vi-bbox-spcr10")[0];

  var a = document.createElement("A");
  a.innerHTML = "Internal";
  a.className = "btn";
  a.href = "https://app.hammoq.com/form";
  div.appendChild(a);
}, 2000);

async function getData() {
  let data = {};
  data.title = document
    .getElementsByClassName("it-ttl")[0]
    .innerText.substring(
      document.getElementsByClassName("it-ttl")[0].innerText.indexOf(" ") + 6
    )
    .trim();

  if (document.getElementsByClassName("topItmCndDscMsg")[0] != undefined) {
    data.description = document
      .getElementsByClassName("topItmCndDscMsg")[0]
      .innerText.trim();
  }

  if (document.getElementsByClassName("notranslate")[2] != undefined) {
    data.price = document
      .getElementsByClassName("notranslate")[2]
      .innerText.split("$")[1];
  } else {
    if (document.getElementsByClassName("notranslate")[1] != undefined) {
      data.price = document
        .getElementsByClassName("notranslate")[1]
        .innerText.split("$")[1];
    } else {
      data.price = document
        .getElementsByClassName("notranslate")[0]
        .innerText.split("$")[1];
    }
  }

  data.site = {
    from: "ebay",
    to: "internal",
  };
  chrome.storage.sync.set({ othersdata: data }, () => {
    chrome.storage.sync.get("othersdata", (value) => {
      console.log(value.othersdata);
    });
  });
}
