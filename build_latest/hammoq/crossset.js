chrome.storage.sync.get("editdata", (value) => {
  console.log(value.editdata);
  if (value.editdata.site.to == "internal") {
    crossset();
  }
});

chrome.storage.sync.get("othersdata", (value) => {
  console.log(value.othersdata);
  if (value.othersdata.site.to == "internal") {
    crosssetothers();
  }
});

function crosssetothers() {
  setTimeout(() => {
    chrome.storage.sync.get("othersdata", async (value) => {
      console.log(value.othersdata);

      if (value.othersdata.site.from == "poshmark") {
        setTimeout(() => {
          document.getElementById("tite").value = value.othersdata.title;
        }, 1500);

        document.getElementById("price").value = value.othersdata.price || "";
        document.getElementById("shortDescription").value =
          value.othersdata.description || "";
        setTimeout(() => {
          chrome.storage.sync.set({ othersdata: {} }, () => {
            chrome.storage.sync.get("othersdata", (value) => {
              console.log(value.othersdata);
            });
          });
        }, 5000);
      }

      if (value.othersdata.site.from == "mercari") {
        setTimeout(() => {
          document.getElementById("tite").value = value.othersdata.title || "";
        }, 1500);
        //document.getElementById("brand").value = value.othersdata.brand;
        document.getElementById("price").value = value.othersdata.price || "";
        document.getElementById("shortDescription").value =
          value.othersdata.description || "";

        document.getElementById("condition_name").value =
          value.othersdata.condition || "";
        document.getElementById("zipCode").value = value.othersdata.zip || "";

        setTimeout(() => {
          chrome.storage.sync.set({ othersdata: {} }, () => {
            chrome.storage.sync.get("othersdata", (value) => {
              console.log(value.othersdata);
            });
          });
        }, 5000);
      }

      if (value.othersdata.site.from == "ebay") {
        setTimeout(() => {
          document.getElementById("tite").value = value.othersdata.title || "";
        }, 1500);

        document.getElementById("shortDescription").value =
          value.othersdata.description || "";

        document.getElementById("price").value =
          value.othersdata.othersdata || "";

        setTimeout(() => {
          chrome.storage.sync.set({ othersdata: {} }, () => {
            chrome.storage.sync.get("othersdata", (value) => {
              console.log(value.othersdata);
            });
          });
        }, 5000);
      }
    });
  }, 2000);
}

function crossset() {
  setTimeout(() => {
    chrome.storage.sync.get("editdata", async (value) => {
      console.log(value.editdata);

      if (value.editdata.site.from == "poshmark") {
        //document.getElementById("colorShade").value = value.editdata.color;
        //document.getElementById("size").value = value.editdata.size;

        if (
          value.editdata.images[0] != undefined ||
          value.editdata.images[0] != null ||
          value.editdata.images[0] != ""
        ) {
          document.getElementById("handle").value =
            value.editdata.images.length;
          setTimeout(() => {
            document.getElementById("handle").click();
          }, 200);
        }
        setTimeout(() => {
          for (let i = 0; i < value.editdata.images.length; i++) {
            if (
              value.editdata.images[i] != undefined ||
              value.editdata.images[i] != null ||
              value.editdata.images[i] != ""
            ) {
              document.getElementById(i).src = value.editdata.images[i];
            } else {
              document.getElementById(i).src = URL.createObjectURL(image.img);
            }
          }
        }, 1000);
        setTimeout(() => {
          document.getElementById("tite").value = value.editdata.title || "";
        }, 1500);

        //document.getElementById("brand").value = value.editdata.brand;
        document.getElementById("price").value = value.editdata.price || "";
        document.getElementById("msrp").value = value.editdata.MSRP || "";
        document.getElementById("sku").value = value.editdata.SKU || "";
        document.getElementById("shortDescription").value =
          value.editdata.description || "";

        document.getElementById("condition_name").value =
          value.editdata.condition || "";

        setTimeout(() => {
          chrome.storage.sync.set({ editdata: {} }, () => {
            chrome.storage.sync.get("editdata", (value) => {
              console.log(value.editdata);
            });
          });
        }, 5000);
      }

      if (value.editdata.site.from == "mercari") {
        //document.getElementById("size").value = value.editdata.size;
        if (
          value.editdata.images[0] != undefined ||
          value.editdata.images[0] != null ||
          value.editdata.images[0] != ""
        ) {
          document.getElementById("handle").value =
            value.editdata.images.length;
          setTimeout(() => {
            document.getElementById("handle").click();
          }, 200);
        }
        setTimeout(() => {
          for (let i = 0; i < value.editdata.images.length; i++) {
            if (
              value.editdata.images[i] != undefined ||
              value.editdata.images[i] != null ||
              value.editdata.images[i] != ""
            ) {
              document.getElementById(i).src = value.editdata.images[i];
            } else {
              document.getElementById(i).src = URL.createObjectURL(image.img);
            }
          }
        }, 1000);
        setTimeout(() => {
          document.getElementById("tite").value = value.editdata.title || "";
        }, 1500);
        //document.getElementById("brand").value = value.editdata.brand;
        document.getElementById("price").value = value.editdata.price || "";
        document.getElementById("shortDescription").value =
          value.editdata.description || "";

        document.getElementById("condition_name").value =
          value.editdata.condition || "";
        document.getElementById("zipCode").value = value.editdata.zip || "";

        setTimeout(() => {
          chrome.storage.sync.set({ editdata: {} }, () => {
            chrome.storage.sync.get("editdata", (value) => {
              console.log(value.editdata);
            });
          });
        }, 5000);
      }

      if (value.editdata.site.from == "ebay") {
        chrome.storage.sync.get("ebayimg", (value) => {
          console.log(value.ebayimg);
          if (
            value.ebayimg[0] != undefined ||
            value.ebayimg[0] != null ||
            value.ebayimg[0] != ""
          ) {
            document.getElementById("handle").value = value.ebayimg.length;
            setTimeout(() => {
              document.getElementById("handle").click();
            }, 200);
          }
          setTimeout(() => {
            for (let i = 0; i < value.ebayimg.length; i++) {
              if (
                value.ebayimg[i] != undefined ||
                value.ebayimg[i] != null ||
                value.ebayimg[i] != ""
              ) {
                document.getElementById(i).src = value.ebayimg[i];
              } else {
                document.getElementById(i).src = URL.createObjectURL(image.img);
              }
            }
          }, 1000);
        });
        setTimeout(() => {
          document.getElementById("tite").value = value.editdata.title || "";
        }, 1500);
        document.getElementById("upc").value = value.editdata.UPC || "";
        document.getElementById("sku").value = value.editdata.SKU || "";
        document.getElementById("size").value = value.editdata.size || "";
        document.getElementById("brand").value = value.editdata.brand || "";
        document.getElementById("colorShade").value =
          value.editdata.color || "";
        document.getElementById("material").value =
          value.editdata.material || "";
        document.getElementById("pattern").value = value.editdata.pattern || "";
        document.getElementById("style").value = value.editdata.style || "";
        document.getElementById("condition_name").value =
          value.editdata.condition || "";
        document.getElementById("shortDescription").value =
          value.editdata.description || "";
        document.getElementById("weightLB").value =
          value.editdata.weight[0] || "";
        document.getElementById("weightOZ").value =
          value.editdata.weight[1] || "";
        document.getElementById("packageLength").value =
          value.editdata.shippingSize.length || "";
        document.getElementById("packageWidth").value =
          value.editdata.shippingSize.width || "";
        document.getElementById("packageHeight").value =
          value.editdata.shippingSize.height || "";
        document.getElementById("zipCode").value = value.editdata.zip || "";
        document.getElementById("price").value = value.editdata.price || "";
        setTimeout(() => {
          chrome.storage.sync.set({ editdata: {} }, () => {
            chrome.storage.sync.get("editdata", (value) => {
              console.log(value.editdata);
            });
          });
        }, 5000);
      }
    });
  }, 2000);
}
