let date = () => {
    // document.getElementById("date1").innerHTML = new Date()

    // $('selector').action()
    // $('#date1').text(new Date())
    // $('#date1').html(new Date())
    $('#date1').html(new Date())

    // document.getElementById("date1").style.color = "white"
    // document.getElementsByClassName("date1")[0].style.backgroundColor = "blue"

    // $("#date1").css("background-color", "blue").css("color", "white")

    const cssObject = {
        "color": "red",
        "background-color": "black",
        "box-shadow": "1px 1px 3px 1px rgb(255,255,255,.8)",
        "margin-bottom": "3rem"
    }
    $("#date1").css(cssObject)
}

/* autocomplete */
$(function () {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
});

/* login value and validation*/
$(function () {
    $("#btnSubmit").click(function () {
        let email, password;
        email = jQuery.trim($("#user_email").val());
        password = jQuery.trim($("#user_password").val());

        //validation  email
        if (email == "") {
            $("#validation_email").html("Email boş geçilemez...")
        }
        else if (regexEmail(email) == false) {
            $("#validation_email").html("Uygun formatta email girilmedi exam: deneme@gmail.com")
        }

        //regex email
        function regexEmail(email) {
            let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(email);
        }

        //validation  password
        if (password == "") {
            $("#validation_password").html("password boş geçilemez...")
        }
        else if (regexPassword(password) == false) {
            $("#validation_password").html("Uygun formatta  şifre girilmedi exam: en az 8 karakter")
        }

        //regex email
        function regexPassword(password) {
            let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;
            return regex.test(password);
        }

    }) // onclick close
}); // document ready close