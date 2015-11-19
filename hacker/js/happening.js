var cnt=0, texts=["WOW napansin mo to", "Sobrang antok ka na siguro", "Or wala ka lang talaga magawa sa buhay mo",
                 "o baka nag eexpect ka ng hugot jokes mula samin", "pero hindi ka na namin bibigyan ng hugot stuff",
                 "masyado nang masakit pagisipan ang pagibig", "baka akala mo nananaginip ka na ngayon", "o naka singhot ng tawas",
                 "at nag i-imagine na may text na labas pasok sa screen mo", "PERO totoo to", "Gusto ko sana kita talagang kausapin",
                 "Gusto kong sabihin ang tunay na aking damdamin", "Gusto kong sabihin sayo na . . .", "Gudluck talaga chong",
                 "Sana mag enjoy kayo", "kasi nag enjoy ako gawin tong website na to", "Wag kang magalala at may pagkain kami",
                 "Sagot namin ang Lunch", "At dinner", "may GREENWICH PIZZA RIN CHONG!!!","Kape mula sa Kopiko!!", "at mahiwagang tubig mula sa drinking fountain",
                 "ANO PA HINIHINTAY MO!!", "SINAYANG MO LANG ORAS MO SA KABABASA NITO", "ANIMO uh HACKERUP!!", "<End of Message>", "<repeating message loop>"];

// save the texts in an array for re-use
$(".textContent").each(function() {
  texts[cnt++]=$(this).text();
});
function slide() {
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

