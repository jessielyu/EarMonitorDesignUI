jQuery(document).ready(function($) {
    var $productShop = $('.catalog-product-view .product-shop');
    var $priceBox = $productShop.find('.price-box').clone();
    var $description = $productShop.find('.short-description');
    
    $priceBox.addClass('m');
    $description.after($priceBox);
    
    
    
    
    // Duplicate top menu into a usable mobile version
    var nav = $('#nav > li').clone();
    var navOther = $('.top-links ul.links li').clone();
    $('#mobile-nav').html(nav);
    $('#mobile-nav').append(navOther);
    
    
    // Insert menu button for mobile version
    var topLinks = $('.top-links ul.links');
    topLinks.append('<li><a id="menu-button" href="#">Menu</a></li>');
    
    
    // Toggle for mobile menu
    $('#menu-button').on('click', function(e) {
        $('#mobile-nav').slideToggle('fast');
    });
    
    
    // Disable click on 'nolink' menu items
    $('#nav').find('.nolink').on('click', function(e) {
        e.preventDefault();
    });
});