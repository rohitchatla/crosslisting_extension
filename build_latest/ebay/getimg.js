setTimeout(() => {
  imgurl = [];
  first = false;
  // if (
  //   document.getElementsByTagName("img")[10].src[8] == "i" &&
  //   document.getElementsByTagName("img")[10].src[9] == "."
  // ) {
  for (let i = 0; i < document.getElementsByTagName("img").length; i++) {
    if (
      document.getElementsByTagName("img")[i].src[8] == "i" &&
      document.getElementsByTagName("img")[i].src[9] == "."
    ) {
      if (first == false) {
        first = true;
        imgurl.push(document.getElementsByTagName("img")[i].src);
      } else {
        let bool = false;
        imgurl.map((pic) => {
          if (pic == document.getElementsByTagName("img")[i].src) {
            bool = true;
          }
        });

        if (bool == false) {
          imgurl.push(document.getElementsByTagName("img")[i].src);
        }
      }
    }
  }
  chrome.storage.sync.set({ ebayimg: imgurl }, () => {
    chrome.storage.sync.get("ebayimg", (value) => {
      console.log(value.ebayimg);
    });
  });
  //}
}, 5000);
