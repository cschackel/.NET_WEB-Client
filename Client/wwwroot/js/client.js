$(function () {
    var toastSound = new Audio('media/toast.wav');
    $("#seasonalDiscount").data("Title", "Chef Anton's Italian Seasoning");
    $("#seasonalDiscount").data("Code", "123YU10");

    $("#overstockDiscount").data("Title", "Earwigs");
    $("#overstockDiscount").data("Code", "27fj72G");

    $("#hotDiscount").data("Title", "Mystery Pack of 10");
    $("#hotDiscount").data("Code", "DN37HD7");

    //$("#Discount").data("Title", "");
    //$("#Discount").data("Code", "");

    //console.log($("#seasonalDiscount").data());


    $('.code').on('click', function (e) {
        e.preventDefault();
        console.log($(this).data());
        //console.log(this.data());
        toastSound.pause();
        toastSound.currentTime=0;
        toastSound.play();
        $('#product').html($(this).data("Title"));
        $("#code").html($(this).data("Code"));
        $('#toast').toast({ autohide: false, animation:true }).toast('show');
    });

    $(document).on('keyup', function (e) {
        if (e.keyCode == 27) {
            $("#toast").toast('hide');
        }
    });


});