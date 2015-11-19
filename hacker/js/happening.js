var cnt=0;
var texts = ["WOW napansin mo to", "WOW. Hindi nga", "Binabasa mo ba to?", "EDI WOW ","Sobrang antok ka na siguro", "Or wala ka lang talaga magawa sa buhay mo",
                 "o baka nag eexpect ka ng hugot jokes mula samin", "pero hindi ka na namin bibigyan ng hugot stuff",
                 "masyado nang masakit pagisipan ang pagibig", "baka akala mo nananaginip ka na ngayon", "o naka singhot ng tawas",
                 "at nag i-imagine na may text na labas pasok sa screen mo", "PERO totoo to", "may binabasa ka talaga", 
                 "at hindi ka lang lutang talaga","Gusto ko sana kita talagang kausapin", "Gusto kong sabihin ang tunay na aking damdamin", "Gusto kong sabihin sayo na", 
                  "Gudluck talaga chong", "Sana mag enjoy kayo", "kasi nag enjoy ako gawin tong website na to", "Wag kang magalala at may pagkain kami", 
                  "Sagot namin ang Lunch", "At dinner", "may GREENWICH PIZZA RIN CHONG!!!","Kape mula sa Kopiko!!", "at mahiwagang tubig mula sa drinking fountain",
                 "ANO PA HINIHINTAY MO!!", "SINAYANG MO LANG ORAS MO SA KABABASA NITO", "GAWIN MO NA ANG KAILANGAN GAWIN!!", "ANIMO uh HACKERCUP!!", 
                  "BINABASA MO PARIN TO??!?", "Akala mo may promo code lalabas?", "Or prize sa dulo?!?!?", "WALANG PRIZE PAG BINASA MO TO", "Pero baka lang", 
                  "Lalabas promo code ng 10PM", "pero hindi ko alam para saan", "o baka wala talaga",
                  "At inuuto lang kita sayangin oras mo", "Kaya't paalam na!!"," End of Message "];

// save the texts in an array for re-use
$(".textContent").each(function() {
  texts[cnt++]=$(this).text();
});

function slide()
{
  if (cnt>=texts.length) cnt=0;
  $('#textMessage').html(texts[cnt++]);
  $('#textMessage')
    .fadeIn('slow').animate({opacity: 1.0}, 5000).fadeOut('slow', 
     function() {
       return slide();
     }
  );      
}
slide();

