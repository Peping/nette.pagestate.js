$.nette.ext('pagestate',{
    before: function (xhr, settings) {
        xhr.setRequestHeader('X-NETTE-PAGESTATE',window.sessionStorage['nette-pagestate']);
        return true;
    }
});

(function() {
    var refreshPagestate = function () {
        var $ps = $('#nette-pagestate-container');
        if (!$ps.length) {
            return;
        }

        window.sessionStorage['nette-pagestate'] = $ps.attr('data-state');
    };

    $.nette.ext('snippets').after(function ($el) {
        refreshPagestate();
    });

    $(refreshPagestate);
})();