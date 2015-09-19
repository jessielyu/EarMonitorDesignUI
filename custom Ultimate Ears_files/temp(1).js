(function ($) {
    $(function() {
        var $modelPicker = $('#model-picker');
        $modelPicker.on('click', function(e) {
            e.preventDefault();
            
            var $modelNav = $modelPicker.find('.model-nav');
            if ($modelNav.is(':hidden')) {
                $modelNav.slideDown(100);
            }
            else {
                $modelNav.slideUp(100);
            }   
        });
        
        Tipped.create('.tooltip', function() {
            return {
                content: $(this).data('content')
            };
        }, {
//            hideOn: false,
//            hideOnClickOutside: true,
            maxWidth: 300,
//            showOn: 'click',
            size: 'large'
        });
    });
}(jQuery));