(function() {
    var pageState = '{}';

    var refreshPagestate = function () {
        var $ps = $('#nette-pagestate-container');
        if (!$ps.length) {
            return;
        }

        pageState = $ps.attr('data-state');
    };

    $.nette.ext('pagestate',{
        before: function (xhr, settings) {
            xhr.setRequestHeader('X-Nette-Pagestate',pageState);
            return true;
        }
    });


    $.nette.ext('snippets').after(function ($el) {
        refreshPagestate();
    });

    $(refreshPagestate);
})();