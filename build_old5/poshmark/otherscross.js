setTimeout(() => {
  getData();
  var div = document.getElementsByClassName("listing__title")[0];

  var a = document.createElement("A");
  a.innerHTML = "Internal";
  a.className = "btn";
  a.href = "https://app.hammoq.com/form";
  div.appendChild(a);
}, 2000);

async function getData() {
  let data = {};
  data.title = document.getElementsByClassName(
    "fw--light m--r--2"
  )[0].innerText;
  data.description = document.getElementsByClassName(
    "listing__description fw--light"
  )[0].innerText;
  data.price = document
    .getElementsByClassName("listing__ipad-centered d--fl ai--c m--t--5")[0]
    .children[0].innerText.split("$")[1]
    .trim();

  data.site = {
    from: "poshmark",
    to: "internal",
  };
  chrome.storage.sync.set({ othersdata: data }, () => {
    chrome.storage.sync.get("othersdata", (value) => {
      console.log(value.othersdata);
    });
  });
}
