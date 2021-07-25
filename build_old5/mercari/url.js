//url()
var port = chrome.runtime.connect({ name: "app" });
port.postMessage({ mercariintro: "hellomercari" });
port.onMessage.addListener(function (msg) {
  if (msg.actionmercari == "listmercari") {
    console.log(msg);
    url();
  }
});

function url() {
  console.log("url");
  setTimeout(async () => {
    console.log(window.location.href);
    // if (
    //   window.location.href.substring(0, 31) ==
    //   "https://www.mercari.com/us/item/"
    // ) {
    chrome.storage.sync.get("data", async (value) => {
      const token = value.data.token;
      if (token == null) {
        fetch(`https://app.hammoq.com/images/url/${value.data.productid}`, {
          method: "PUT",
          body: JSON.stringify({
            url: window.location.href,
            name: "mercari",
            clientid: value.data.clientid,
            domain: value.data.domain,
          }),
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        });
      } else {
        fetch(
          `https://app.hammoq.com/api/client/product/url/${value.data.productid}`,
          {
            method: "PUT",
            body: JSON.stringify({
              url: window.location.href,
              name: "mercari",
              clientid: value.data.clientid,
              domain: value.data.domain,
            }),
            headers: {
              "Content-Type": "application/json",
              "x-access-token": token,
            },
          }
        );
      }
    });

    port.postMessage({ mercarianswer1: "listingmercari" });
    //}
  }, 4000);
}
