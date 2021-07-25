setTimeout(() => {
  if (
    window.location.href.substring(window.location.href.lastIndexOf("?") + 1) ==
    "internal"
  ) {
    getData("internal");
    setTimeout(() => {
      window.location.href = "https://app.hammoq.com/form";
    }, 10000);
  }

  if (
    window.location.href.substring(window.location.href.lastIndexOf("?") + 1) ==
    "ebay"
  ) {
    getData("ebay");
    setTimeout(() => {
      window.location.href =
        "https://bulksell.ebay.com/ws/eBayISAPI.dll?SingleList&sellingMode=AddItem";
    }, 10000);
  }

  if (
    window.location.href.substring(window.location.href.lastIndexOf("?") + 1) ==
    "poshmark"
  ) {
    getData("poshmark");
    setTimeout(() => {
      window.location.href = "https://poshmark.com/create-listing";
    }, 10000);
  }
}, 2000);

async function getData(to) {
  await waitForNode("button:contains(Delete)");
  let data = {};
  data.images = [];
  $('img[alt="thumbnail"]').each((i, obj) => {
    data.images.push($(obj).attr("src"));
  });
  data.title = $('[placeholder="What are you selling?"]').val();
  data.description = $('[placeholder="Describe your item"]').val();
  // data.keywords = $('[placeholder="Add up to 3 tags (optional)"]')
  //   .val()
  //   .replace(/#/g, "")
  //   .split(" ");
  data.brand = $('[class*="SectionContainer"] div div:contains("BRAND")')
    .parent()
    .find(">p")
    .text();
  data.size = $('[class*="SectionContainer"] div div:contains("SIZE")')
    .parent()
    .parent()
    .find("button")
    .text()
    .replace(/\s.+/, "");
  let condId = $('[class*="SectionContainer"] div div:contains("CONDITION")')
    .parent()
    .parent()
    .find("input:checked")
    .attr("id");
  switch (condId) {
    case "1":
      data.condition = "New with tags";
      break;
    case "2":
      data.condition = "New without tags";
      break;
    case "3":
      data.condition = "Gently used";
      break;
    case "4":
      data.condition = "Used";
      break;
    case "5":
      data.condition = "Poor";
      break;
  }
  data.zip = $('[placeholder="Enter 5-digit Zip Code"]').val();
  data.price = $('[placeholder="(min.$5/max.$2,000)"]').val();
  data.site = {
    from: "mercari",
    to: to,
  };

  chrome.storage.sync.set({ editdata: data }, () => {
    chrome.storage.sync.get("editdata", (value) => {
      console.log(value.editdata);
    });
  });
}
