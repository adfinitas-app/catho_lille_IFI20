$(document).ready(function() {
    $('.switch-input').on('change', function() {
        $(this).parents('.switch-container').find('.switch-option').toggleClass('active');
        
        const actualVal = $(this).val();
        const valueOne = $(this).data('value-1');
        const valueTwo = $(this).data('value-2');

        if (actualVal === valueOne)
            $(this).val(valueTwo);
        else
            $(this).val(valueOne);
    });

    $('.switch-input.don-type').on('change', function() {
        const val = $(this).val();

        let percentage = '';
        let redevable = '';
        let image = '';

        switch (val) {
            case 'IFI': {
                percentage = '75%';
                redevable = 'Si vous êtes redevable de l’Impôt sur la Fortune Immobilière, vous pouvez déduire 75% de votre don dans la limite de 50&nbsp;000 € par an, soit 66&nbsp;666 € de don.';
                image = 'url(/assets/img/circle-75.png)';
                break;
            }
            case 'IR': {
                percentage = '66%';
                redevable = 'Si vous êtes redevable de l’Impôt sur le Revenu, vous pouvez déduire 66% de votre don dans la limite de 20% du revenu net imposable.';
                image = 'url(/assets/img/circle-66.png)';
                break;
            }
        }

        updatePercentage(percentage);
        updateRedevable(redevable);
        updateImage(image);
    });

    function updatePercentage(percentage) {
        $('.circle-amount').html(percentage);
    }

    function updateRedevable(redevable) {
        $('.redevable').html(redevable);
    }

    function updateImage(image) {
        $('.defisc .circle-background').css('background-image', image);
    }
})