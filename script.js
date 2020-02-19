$('.language').click(function(){
    if($(this).html() =='En'){
        $(this).html('Ar');
        $('html').attr('lang','en');
        $('html').attr('dir','ltr');
        $('link:nth(0)').attr('href','./assets/css/bootstrap.min.css');
        $('.blog-img').css({'left':'unset','right':'0'});

    }else{
        $(this).html('En');
        $('html').attr('lang','ar');
        $('html').attr('dir','rtl');
        $('link:nth(0)').attr('href','./assets/css/bootstrap-a.css');
        $('.blog-img').css({'right':'unset','left':'0'});
    }
})