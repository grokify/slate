//= require ./lib/_energize
//= require ./app/_lang
//= require ./app/_search
//= require ./app/_toc

$(function () {
    function prependAnchorHolder (ele, className) {
        var id = ele.attr('id');
        ele.before('<div id="' + id + '-anchor" class="' + className + '"></div>');
    };

    function prependAnchorHolders (elements, className) {
        if ($.isArray(elements) || elements.length > 0) { 
            $.each(elements, function (index, ele) {
                prependAnchorHolder($(ele), className);
            });
        } else {
            prependAnchorHolder(elements, className);
        }
    }
    prependAnchorHolders($('.content h1'), 'sidebar-anchor-h1');
    prependAnchorHolders($('.content h2'), 'sidebar-anchor-h2');
});