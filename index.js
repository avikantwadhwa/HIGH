(function() {
    var $target = $('#drop-zone');

    function dropZone($target, onDrop) {
        $target.
        bind('dragover', function() {
            $target.addClass('drag-over');
            return false;
        }).
        bind("dragend", function() {
            $target.removeClass('drag-over');
            return false;
        })
    }})