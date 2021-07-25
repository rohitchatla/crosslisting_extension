setTimeout(() => {
  if (
    window.location.href.substring(window.location.href.lastIndexOf("&") + 1) ==
    "internal"
  ) {
    getData("internal");
    var id = window.location.href.substring(
      window.location.href.lastIndexOf("=") + 1,
      window.location.href.lastIndexOf("&")
    );
    setTimeout(() => {
      window.open("https://www.ebay.com/itm/" + id);
    }, 2000);
    setTimeout(() => {
      window.location.href = "https://app.hammoq.com/form";
    }, 10000);
  }

  if (
    window.location.href.substring(window.location.href.lastIndexOf("&") + 1) ==
    "poshmark"
  ) {
    getData("poshmark");
    var id = window.location.href.substring(
      window.location.href.lastIndexOf("=") + 1,
      window.location.href.lastIndexOf("&")
    );
    setTimeout(() => {
      window.open("https://www.ebay.com/itm/" + id);
    }, 2000);
    setTimeout(() => {
      window.location.href = "https://poshmark.com/create-listing";
    }, 10000);
  }

  if (
    window.location.href.substring(window.location.href.lastIndexOf("&") + 1) ==
    "mercari"
  ) {
    getData("mercari");
    var id = window.location.href.substring(
      window.location.href.lastIndexOf("=") + 1,
      window.location.href.lastIndexOf("&")
    );
    setTimeout(() => {
      window.open("https://www.ebay.com/itm/" + id);
    }, 2000);
    setTimeout(() => {
      window.location.href = "https://www.mercari.com/sell/";
    }, 10000);
  }
}, 2000);

async function getData(to) {
  await waitForDocumentReady();
  await waitForDocumentReady();
  let dt = {};
  dt.title = $("#editpane_title").val();
  let inputs = $('input[type="text"][id*=Listing]');
  dt.UPC = $("#upc").val();
  if (dt.UPC === "Does not apply") dt.UPC = "";
  dt.SKU = $("#editpane_skuNumber").val();
  dt.size = inputs
    .filter('[id*="Listing.Item.ItemSpecific[Size"]')
    .last()
    .val();
  dt.brand = inputs.filter('[id*="Brand"]').val();
  dt.color = inputs.filter('[id*="Color"]').val();
  dt.material = inputs.filter('[id*="Material"]').val();
  dt.pattern = inputs.filter('[id*="Pattern"]').val();
  dt.style = inputs.filter('[id*="Style"]').val();
  dt.condition = $("#itemCondition option:selected").text();
  let condDesc = $("#editpane_condDesc").val();
  if (condDesc !== "") dt.condition += "\n" + condDesc;
  dt.madeIn = $(
    'select[id*="Country/Region of Manufacture"] option:selected'
  ).text();
  dt.description = $('iframe[id*="txtEdit_st"]')
    .contents()
    .find("body")[0].innerText;
  dt.shippingSize = {
    length: $("#pkgLength").val(),
    width: $("#pkgWidth").val(),
    height: $("#pkgHeight").val(),
  };
  dt.weight = [$("#majorUnitWeight").val(), $("#minorUnitWeight").val()];
  for (let i of Object.keys(dt.weight))
    if (dt.weight === undefined) dt.weight = "0";
  dt.zip = $("#itemPostalCode").val();
  let loc = $("#location").val().split(/,\s*/);
  if (loc.length === 2) {
    dt.city = loc[0];
    dt.state = loc[1];
  }
  dt.price = $("#binPrice").val();

  let imgs = [];
  await waitForNodeDisappear('.prog [style="display: block;"] .per');
  let images = $(".prog img");
  for (let image of images)
    imgs.push(image.src.replace(/_0\.(jpg|png)/i, "_57.$1"));
  console.log(imgs);
  dt.images = imgs;

  dt.site = {
    from: "ebay",
    to: to,
  };

  chrome.storage.sync.set({ editdata: dt }, () => {
    chrome.storage.sync.get("editdata", (value) => {
      console.log(value.editdata);
    });
  });
}
