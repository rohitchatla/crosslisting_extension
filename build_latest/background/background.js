chrome.runtime.onConnect.addListener(function (port) {
  console.assert(port.name == "app");
  port.onMessage.addListener(function (msg) {
    //hammoq
    if (msg.answer1 == "listposhmark") {
      console.log(msg);
      localStorage.setItem("actionposhmark", msg.answer1);
      localStorage.setItem("reload", true);
      window.open("https://poshmark.com/create-listing");
    } else if (msg.answer1 == "delistposhmark") {
      console.log(msg);
      localStorage.setItem("actionposhmark", msg.answer1);
      //localStorage.setItem("poshmarkdelisturl", msg.poshmarkdelisturl);
      window.open(msg.poshmarkdelisturl);
    }
    if (msg.answer1 == "listmercari") {
      console.log(msg);
      localStorage.setItem("actionmercari", msg.answer1);
      localStorage.setItem("reload", true);
      window.open("https://www.mercari.com/sell/");
    } else if (msg.answer1 == "delistmercari") {
      console.log(msg);
      localStorage.setItem("actionmercari", msg.answer1);
      //localStorage.setItem("mercaridelisturl", msg.mercaridelisturl);
      window.open(msg.mercaridelisturl);
    }
    if (msg.answer1 == "listfb") {
      console.log(msg);
      localStorage.setItem("actionfb", msg.answer1);
    } else if (msg.answer1 == "delistfb") {
      console.log(msg);
      localStorage.setItem("actionfb", msg.answer1);
    }
    if (msg.answer1 == "listebay") {
      console.log(msg);
      localStorage.setItem("actionebay", msg.answer1);
      localStorage.setItem("reload", true);
      window.open(
        "https://bulksell.ebay.com/ws/eBayISAPI.dll?SingleList&sellingMode=AddItem"
      );
    } else if (msg.answer1 == "delistebay") {
      console.log(msg);
      localStorage.setItem("actionebay", msg.answer1);
      localStorage.setItem("ebaydelisturl", msg.ebaydelisturl);
      window.open("https://www.ebay.com/sh/lst/active");
    }

    //editing hammoq
    else if (msg.answer1 == "editposhmark") {
      console.log(msg);
      localStorage.setItem("actionposhmark", msg.answer1);
      //localStorage.setItem("poshmarkdelisturl", msg.poshmarkdelisturl);
      var id = msg.poshmarkdelisturl.substring(
        msg.poshmarkdelisturl.lastIndexOf("-") + 1
      );
      window.open("https://poshmark.com/edit-listing/" + id);
    } else if (msg.answer1 == "editmercari") {
      console.log(msg);
      localStorage.setItem("actionmercari", msg.answer1);
      //localStorage.setItem("mercaridelisturl", msg.mercaridelisturl);
      var id = msg.mercaridelisturl.substring(
        msg.mercaridelisturl.lastIndexOf(
          "/",
          msg.mercaridelisturl.lastIndexOf("/") - 1
        ) + 1,
        msg.mercaridelisturl.lastIndexOf("/")
      );
      window.open("https://mercari.com/sell/edit/" + id);
    } else if (msg.answer1 == "editebay") {
      console.log(msg);
      localStorage.setItem("actionebay", msg.answer1);
      localStorage.setItem("ebaydelisturl", msg.ebaydelisturl);
      window.open("https://www.ebay.com/sh/lst/active");
    }

    //poshmark
    else if (msg.poshmarkintro == "helloposhmark") {
      console.log(localStorage.getItem("actionposhmark"));
      port.postMessage({
        actionposhmark: localStorage.getItem("actionposhmark"),
        reload: localStorage.getItem("reload"),
      });
    } else if (msg.poshmarkanswer1 == "listingposhmark") {
      console.log(msg);
      localStorage.removeItem("actionposhmark");
    } else if (msg.poshmarkanswer1 == "delistingposhmark") {
      console.log(msg);
      localStorage.removeItem("actionposhmark");
    } else if (msg.poshmarkanswer1 == "editingposhmark") {
      console.log(msg);
      localStorage.removeItem("actionposhmark");
    } else if (msg.reload == false) {
      console.log(msg);
      localStorage.setItem("reload", false);
    }

    //mercari
    else if (msg.mercariintro == "hellomercari") {
      console.log(localStorage.getItem("actionmercari"));
      port.postMessage({
        actionmercari: localStorage.getItem("actionmercari"),
        reload: localStorage.getItem("reload"),
      });
    } else if (msg.mercarianswer1 == "listingmercari") {
      console.log(msg);
      localStorage.removeItem("actionmercari");
    } else if (msg.mercarianswer1 == "delistingmercari") {
      console.log(msg);
      localStorage.removeItem("actionmercari");
    } else if (msg.mercarianswer1 == "editingmercari") {
      console.log(msg);
      localStorage.removeItem("actionmercari");
    } else if (msg.reload == false) {
      console.log(msg);
      localStorage.setItem("reload", false);
    }

    //fb
    else if (msg.fbintro == "hellofb") {
      console.log(localStorage.getItem("actionfb"));
      port.postMessage({ actionfb: localStorage.getItem("actionfb") });
    } else if (msg.fbanswer1 == "listingfb") {
      console.log(msg);
      localStorage.removeItem("actionfb");
    } else if (msg.fbanswer1 == "delistingfb") {
      console.log(msg);
      localStorage.removeItem("actionfb");
    }

    //ebay
    else if (msg.ebayintro == "helloebay") {
      console.log(localStorage.getItem("actionebay"));
      port.postMessage({
        actionebay: localStorage.getItem("actionebay"),
        ebaydelisturl: localStorage.getItem("ebaydelisturl"),
        reload: localStorage.getItem("reload"),
      });
    } else if (msg.ebayanswer1 == "listingebay") {
      console.log(msg);
      localStorage.removeItem("actionebay");
    } else if (msg.ebayanswer1 == "delistingebay") {
      console.log(msg);
      localStorage.removeItem("actionebay");
      localStorage.removeItem("ebaydelisturl");
    } else if (msg.ebayanswer1 == "editingebay") {
      console.log(msg);
      localStorage.removeItem("actionebay");
      localStorage.removeItem("ebaydelisturl");
    } else if (msg.reload == false) {
      console.log(msg);
      localStorage.setItem("reload", false);
    }
  });
});
