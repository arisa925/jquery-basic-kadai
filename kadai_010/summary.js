$(function(){
    $('#change-color').on('click',function(){
        $('#target').css('color','red');
    });

$(function(){
    $('#change-text').on('click',function(){
        $('#target').text('こんばんは！');
        console.log("テキストが'こんばんは！’に変更されました");
    });
});

$('#fade-out').on('click',function(){
    $('#target').fadeOut();
    });

$('#fade-in').on('click',function(){
    $('#target').fadeIn();
    });
});