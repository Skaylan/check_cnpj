$(document).ready(() => {

    
    $('#btn').on('click', () => {
        let cnpj = $('#cnpj_field').val();
        let newCnpj = cnpj.replace('/', '')

        let req = $.ajax({
            url: '/find',
            type: 'POST',
            data: {'cnpj': newCnpj},
            error: (xhr, status, error) => {
                var errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + errorMessage + '\n' + 'CNPJ INCORRETO ou NÃO EXISTE');
            }
        });
        
        req.done((data) => {
            $('#display').html('');
            $('#display').append(data.html);
        })
    })

})