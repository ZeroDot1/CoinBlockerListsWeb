//alert("Hello CoinBlockerLists User!\n!!!Warning!!! This page is still under construction!!!");

function openColorBox(){
        $.colorbox({
          iframe:true,
          width:"50%",
          height:"50%",
          href: "https://zerodot1.github.io/CoinBlockerListsWeb/donate.html",
          onLoad: function() {
            $('#cboxClose').remove();
            setTimeout(function(){
              $(window).colorbox.close();
            }, 9000)
          }
        });
      }

      function countDown(){
        seconds--
        $("#seconds").text(seconds);
        if (seconds === 0){
          openColorBox();
          clearInterval(i);
        }
      }

      var seconds = 5,
          i = setInterval(countDown, 1000);
