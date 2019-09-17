$(function () {
    //Toast Audio Sound
    var toastSound = new Audio('media/toast.wav');

    //Pool of Animations to pull from
    let animationPool = ["bounce","pulse","heartBeat","wobble","swing","fadeInDown","lightSpeedIn","headShake"]; 

    //DatePicker
    $('#dob').pickadate({ format: 'mmmm, d, yyyy', selectYears: true, max: true, selectYears: 120 });

    //Choose Random Animation and apply to H1
    let chosenAnimation = animationPool[Math.floor(Math.random() * (animationPool.length))];
    $("h1").addClass(chosenAnimation);

    //On Load Deselect All Checkboxes
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    //When hovering, change h1 to color of target balloon
    $(".form-check").hover(function () { //On hover
        //console.log($(this).children("input:first").prop("id"))
        let desiredColor = $(this).children("input:first").prop("id");  //Get Color
        $("h1").css("color", desiredColor);  //Set Color
    }, function () {  //On Leave
        $("h1").css("color", "black");  //Revert to Black
    });

    //Select/Deslect All Button
    $("#selectAll").on("click", function () {
        let action = "deselect";
        $('.form-check-input').each(function () {  //Determine Action
            if ($(this).prop('checked')==false) {  //If One is unchecked, make action select
                action = "select";
            }
        });

        //Select All
        if (action == "select") {
            $('.form-check-input').each(function () {
                $(this).prop('checked', true);
                console.log("Checked Boxes");
            });
        } 
        else {  //Deselect All
            $('.form-check-input').each(function () {
                $(this).prop('checked', false);
                console.log("UnChecked Boxes");
            });
        }
        refreshBalloons();  //Apply Animations
    });

    //Displays All Relevant Balloons
    let refreshBalloons = function () {
        $('.form-check-input').each(function () {
            if ($(this).prop('checked')) {  //If checked
                console.log("Making Visible");
                $("#" + this.id + "Img").css('visibility', "visible");  //Make Visible
                $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown');  //Display In Animation
            }
            else {  //If Unchecked
                console.log("Making Invisible"); 
                $('#' + this.id + 'Img').addClass('animated bounceOutUp');  //Animate Out of Frame
            }
            
        });

        

    }

    //Show/Hide Balloons when Clicked
    $(".form-check-input").on('change', function () {
        refreshBalloons();
    });

    //When Submiting, if no balloons are selected, popup toast
    $('#submit').on('click', function (e) {
        e.preventDefault();
        let valid = false;  //Check Validity of Request
        $('.form-check-input').each(function () {
            if ($(this).prop('checked')) {
                valid = true;
            }
        });

        if (!valid) { //If not valid
            //Play Toast Sound
            toastSound.pause();
            toastSound.currentTime = 0;
            toastSound.play();
            $('#toast').toast({ autohide: false, animation: true }).toast('show');
        }
        else {
            //Submission would go here
        }
        
    });
});