jQuery(document).ready(function() {

    jQuery('.tabs .tab_links a').on( 'click', function(e) {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide tabs
        jQuery( '.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

});
