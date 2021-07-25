//url()
var port = chrome.runtime.connect({name: "app"});
  port.postMessage({mercariintro: "hellomercari"});
  port.onMessage.addListener(function(msg) {

    if (msg.actionmercari == "listmercari"){
       console.log(msg);
       url();
       port.postMessage({mercarianswer1: "listingmercari"})
    }

  });


function url(){
  console.log("url")
setTimeout(async () => {
  console.log(window.location.href)
  chrome.storage.sync.get("data", async (value) => {
          const token = value.data.token
          fetch(`https://app.hammoq.com/api/client/product/url/${value.data.productid}`, {
            method: "PUT",
            body: JSON.stringify({url:window.location.href, name:"mercari"}),
            headers: {
              "Content-Type": "application/json",
              "x-access-token": token,
            },
          })
  });
},4000);
}


