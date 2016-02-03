$('#dik-1').on('click',function(){
    if($('#1').css('display')!='none'){
    $('#2').html('Τα δικαιολογητικά του 2').show().siblings('div').hide();
    }
    else if($('#2').css('display')!='none'){
        $('#1').show().siblings('div').hide();
    }
});
