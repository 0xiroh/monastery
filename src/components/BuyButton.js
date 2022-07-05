import { useEffect, React } from 'react'

function BuyButton() {
    /*<![CDATA[*/
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);
    (function () {
      var scriptURL = '';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'niftyxx.myshopify.com',
          storefrontAccessToken: '43020a7024200958105dce9dd0735028',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '7727944270082',
            node: document.getElementById('product-component-1656423860363'),
            moneyFormat: '%24%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          }
        },
        "buttonDestination": "checkout",
        "width": "380px",
        "text": {
          "button": "Buy now"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          }
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "option": {},
      "cart": {
        "text": {
          "total": "Subtotal",
          "button": "Checkout"
        }
      },
      "toggle": {}
    },
          });
        });
      }
    })();
    /*]]>*/
  return (
    <div className='flex justify-center'>
        <div id='product-component-1656423860363'></div>

    </div>

  )
}

export default BuyButton