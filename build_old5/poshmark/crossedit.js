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
    "mercari"
  ) {
    getData("mercari");
    setTimeout(() => {
      window.location.href = "https://www.mercari.com/sell/";
    }, 10000);
  }
}, 2000);

async function getData(to) {
  await waitForNode('[data-vv-name="title"]');
  let data = {};
  data.title = $('[data-vv-name="title"]').val();
  data.description = $('[data-vv-name="description"]').val();
  let sizeSection = $('.listing-edit__section__info:contains("Size")').parent();
  if (sizeSection.find("table").length > 0)
    data.size = sizeSection.find("table tbody td:eq(0)").text();
  else data.size = sizeSection.find(".dropdown__selector").text();
  let newWidthTags = $(".listing-editor__condition-btn.btn--primary--burgundy")
    .text()
    .replace(/\s/g, "")
    .toLowerCase();
  data.condition = newWidthTags === "yes" ? "New with tags" : "Pre-owned";
  data.brand = $('[placeholder="Enter the Brand/Designer"]').val();
  let color = [];
  $('[data-et-name="color"] li').each((i, obj) => {
    color.push($(obj).text());
  });
  data.color = color.join(" ");
  data.MSRP = $('[data-vv-name="originalPrice"]').val().replace(/[^\d]/g, "");
  data.SKU = $('[data-vv-name="sku"]').val();
  data.price = $('[data-vv-name="listingPrice"]').val().replace(/[^\d]/g, "");
  data.images = [];
  $(".listing-editor__images img").each((i, obj) => {
    data.images.push($(obj).attr("src"));
  });
  data.site = {
    from: "poshmark",
    to: to,
  };
  chrome.storage.sync.set({ editdata: data }, () => {
    chrome.storage.sync.get("editdata", (value) => {
      console.log(value.editdata);
    });
  });
}
