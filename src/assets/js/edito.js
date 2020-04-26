$(document).ready(function() {
    $('[data-toggle="collapse"]').on('click', function() {
        const target = $(this).attr('href');

        console.log($(this));
        console.log($(this).children('img'));
        $(this).children('img').toggle();
    })
});