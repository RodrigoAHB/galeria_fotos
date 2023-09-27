$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#cancelBtn').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const imageUrl = $('#imageUrl').val();
        const newItem = $('<li style="display: none"></li>');
        $(`<img src='${imageUrl}' />`).appendTo(newItem);
        $(`
            <div class="imgLinkOverlay">
                <a href="${imageUrl}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>`).appendTo(newItem);
        $(newItem).appendTo('ul');``
        $(newItem).fadeIn();
        $('#imageUrl').val('')
    })
})