setTimeout(() => {
  getData();
  var div = document.getElementsByClassName(
    "Flex-ych44r-0 Space-cutht5-0 ItemInfo__NameContainer-ijvfho-7 hQAtpJ"
  )[0];

  var a = document.createElement("A");
  a.innerHTML = "Internal";
  a.className = "btn";
  a.href = "https://app.hammoq.com/form";
  div.appendChild(a);
}, 2000);

async function getData() {
  let data = {};
  data.title = document.getElementsByClassName(
    "ItemInfo__ProductNameText-ijvfho-5 jsAqnk"
  )[0].innerText;
  data.description = document.getElementsByClassName(
    "Text-sc-1lvlnjo-0 Text__Text2-sc-1lvlnjo-3 Text2__Text2Normal-sc-1tydp9s-0 ItemDescription__DescriptionText-sc-1w7qr5f-0 gyytbZ"
  )[0].innerText;
  data.price = document
    .getElementsByClassName(
      "Text-sc-1lvlnjo-0 Text__Text5-sc-1lvlnjo-6 Text5__Text5SemiBold-sc-2h217n-3 ItemInfo__ProductPrice-ijvfho-1 chJeRc"
    )[0]
    .innerText.split("$")[1];

  data.site = {
    from: "mercari",
    to: "internal",
  };
  chrome.storage.sync.set({ othersdata: data }, () => {
    chrome.storage.sync.get("othersdata", (value) => {
      console.log(value.othersdata);
    });
  });
}
