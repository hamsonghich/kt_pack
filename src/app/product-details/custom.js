import * as $ from "jquery";
$(document).ready(function(){
  const itemImg = document.getElementsByClassName('item_img_small');
  console.log('again');
  $('.img-item').css({display : 'none'});
  $('.item_img_small').mouseenter( function(){
    $( this ).addClass( 'active' );
  });
  $('.item_img_small').mouseout( function(){
    $( this ).removeClass( 'active' );
  });
  $('.content-img').click(function (event){
    $('.img-item').css({display : 'none'});
    $('.item_img_small').mouseenter( function(){
      $( this ).addClass( 'active' );
    });
    $('.item_img_small').mouseout( function(){
      $( this ).removeClass( 'active' );
    });
    $('.img-fake').css('display', 'none');
    console.log(event.target.className);
    const itemImgBig = document.getElementsByClassName('img-item');
    let idActive;
    for (let i = 0; i < itemImg.length; i++) {
      if (itemImg[i].className === 'item_img_small ng-star-inserted active') {
        console.log('id' + itemImg[i].id.replace('img_details', ''));
        idActive = itemImg[i].id.replace('img_details', '');
        $('.img-item').css({display: 'none'});
        // document.getElementById('idImg' + idActive).style.display = 'block';
        $('#idImg' + idActive).css('display', 'block');
      }
    }
  });
});

