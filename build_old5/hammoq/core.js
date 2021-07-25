let data;

if (
  document.domain == "app.hammoq.com" ||
  document.domain == "agent.hammoq.com" ||
  document.domain == "localhost"
) {
  var port = chrome.runtime.connect({ name: "app" });

  //listing
  if (localStorage.getItem("actionposhmark") == "listposhmark") {
    port.postMessage({ answer1: localStorage.getItem("actionposhmark") });
  }
  if (localStorage.getItem("actionmercari") == "listmercari") {
    port.postMessage({ answer1: localStorage.getItem("actionmercari") });
  }
  if (localStorage.getItem("actionfb") == "listfb") {
    port.postMessage({ answer1: localStorage.getItem("actionfb") });
  }
  if (localStorage.getItem("actionebay") == "listebay") {
    port.postMessage({ answer1: localStorage.getItem("actionebay") });
  }

  //delisting
  if (localStorage.getItem("actionposhmark") == "delistposhmark") {
    port.postMessage({
      answer1: localStorage.getItem("actionposhmark"),
      poshmarkdelisturl: localStorage.getItem("poshmarkdelisturl"),
    });
  }
  if (localStorage.getItem("actionmercari") == "delistmercari") {
    port.postMessage({
      answer1: localStorage.getItem("actionmercari"),
      mercaridelisturl: localStorage.getItem("mercaridelisturl"),
    });
  }
  if (localStorage.getItem("actionfb") == "delistfb") {
    port.postMessage({ answer1: localStorage.getItem("actionfb") });
  }
  if (localStorage.getItem("actionebay") == "delistebay") {
    port.postMessage({
      answer1: localStorage.getItem("actionebay"),
      ebaydelisturl: localStorage.getItem("ebaydelisturl"),
    });
  }

  //editing
  if (localStorage.getItem("actionposhmark") == "editposhmark") {
    port.postMessage({
      answer1: localStorage.getItem("actionposhmark"),
      poshmarkdelisturl: localStorage.getItem("poshmarkdelisturl"),
    });
  }
  if (localStorage.getItem("actionmercari") == "editmercari") {
    port.postMessage({
      answer1: localStorage.getItem("actionmercari"),
      mercaridelisturl: localStorage.getItem("mercaridelisturl"),
    });
  }
  if (localStorage.getItem("actionebay") == "editebay") {
    port.postMessage({
      answer1: localStorage.getItem("actionebay"),
      ebaydelisturl: localStorage.getItem("ebaydelisturl"),
    });
  }

  port.onMessage.addListener(function (msg) {});

  setTimeout(() => {
    let images = document.getElementsByTagName("img");
    let paths = [];
    for (let i = 1; i < images.length; i++) {
      if (
        images[i].currentSrc.split("assets/")[1] != "undefined" &&
        images[i].currentSrc.split("assets/")[1] != "" &&
        images[i].currentSrc.split("assets/")[1] != null
      ) {
        paths.push(images[i].currentSrc.split("assets/")[1]);
      }
    }

    data = {
      mrp: document.getElementById("mrp").value,
      brand: document.getElementById("brand").value,
      colorShade: document.getElementById("colorShade").value,
      material: document.getElementById("material").value,
      size: document.getElementById("size").value,
      title: document.getElementById("tite").value,
      style: document.getElementById("style").value,
      pattern: document.getElementById("pattern").value,
      seasonOrWeather: document.getElementById("seasonOrWeather").value,
      care: document.getElementById("care").value,
      madeIn: document.getElementById("madeIn").value,
      waist: document.getElementById("waist").value,
      inseam: document.getElementById("inseam").value,
      rise: document.getElementById("rise").value,
      bottomDescription: document.getElementById("bottomDescription").value,
      price: document.getElementById("price").value,
      msrp: document.getElementById("msrp").value,
      sku: document.getElementById("sku").value,
      upc: document.getElementById("upc").value,
      quantity: document.getElementById("quantity").value,
      shortDescription: document.getElementById("shortDescription").value,
      model: document.getElementById("model").value,
      line1: document.getElementById("line1").value,
      line2: document.getElementById("line2").value,
      line3: document.getElementById("line3").value,
      line4: document.getElementById("line4").value,
      line5: document.getElementById("line5").value,
      condition: document.getElementById("condition_name").value,
      keywords: document.getElementById("keywords").value,
      note: document.getElementById("note").value,
      weightLB: document.getElementById("weightLB").value,
      weightOZ: document.getElementById("weightOZ").value,
      zipCode: document.getElementById("zipCode").value,
      packageLength: document.getElementById("packageLength").value,
      packageWidth: document.getElementById("packageWidth").value,
      packageHeight: document.getElementById("packageHeight").value,
      costOfGoods: document.getElementById("costOfGoods").value,
      shippingFees: document.getElementById("shippingFees").value,
      profit: document.getElementById("profit").value,
      paths: paths,
      productid: window.location.href.substring(
        window.location.href.lastIndexOf("/") + 1
      ),
      token: localStorage.getItem("token"),
      domain: document.domain,
      clientid: window.location.href.substring(
        window.location.href.lastIndexOf(
          "/",
          window.location.href.lastIndexOf("/") - 1
        ) + 1,
        window.location.href.lastIndexOf("/")
      ),
    };
    chrome.storage.sync.set({ data: data }, () => {
      chrome.storage.sync.get("data", (value) => {
        console.log(value.data);
        // do{
        //  setTimeout(()=>{
        //   window.location.reload()
        //  },4000)
        // }while(value.data.title == "");
      });
    });
  }, 5000);
}
