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
        "color": "blue",
        "font-weight": "bold",
        "background-color": "white",
        "box-shadow": "1px 1px 3px 1px rgb(255,255,255,.8)",
        "margin-bottom": "2rem"
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
            $("#validation_email").html("Uygun formatta email girilmedi, örnek: deneme@gmail.com")
        }

        //regex email
        function regexEmail(email) {
            let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(email);
        }

        //validation password
        if (password == "") {
            $("#validation_password").html("password boş geçilemez...")
        }
        else if (regexPassword(password) == false) {
            $("#validation_password").html("Uygun formatta  şifre girilmedi, örnek: en az 8 karakter")
        }

        //regex password
        function regexPassword(password) {
            let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;
            return regex.test(password);
        }

    }) // onclick close
}); // document ready close

/* register value and validation*/
$(function () {
    $("#btnSubmit").click(function () {
        let registerName, registerEmail, registerPassword;
        registerName = jQuery.trim($("#register_name").val());
        registerEmail = jQuery.trim($("#register_email").val());
        registerPassword = jQuery.trim($("#register_password").val());

        //validation registerName
        if (registerName == "") {
            $("#validation_registerName").html("Kullanıcı adı boş geçilemez...")
        }
        else if (regexName(registerName) == false) {
            $("#validation_registerName").html("Kullanıcı adı uygun formatta değil, örnek: türkçe karakter içermemeli")
        }

        //regex registerName
        function regexName(registerName) {
            let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(registerName);
        }

        //validation registerEmail
        if (registerEmail == "") {
            $("#validation_registerEmail").html("Email boş geçilemez...")
        }
        else if (regexEmail(registerEmail) == false) {
            $("#validation_email").html("Uygun formatta email girilmedi, örnek: deneme@gmail.com")
        }

        //regex email
        function regexEmail(registerEmail) {
            let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(registerEmail);
        }

        //validation registerPassword
        if (registerPassword == "") {
            $("#validation_registerPassword").html("şifre boş geçilemez...")
        }
        else if (regexPassword(registerPassword) == false) {
            $("#validation_registerPassword").html("Uygun formatta  şifre girilmedi, örnek: en az 8 karakter")
        }

        //regex registerPassword
        function regexPassword(registerPassword) {
            let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;
            return regex.test(registerPassword);
        }

    }) // onclick close
}); // document ready close

// jQuery counterUp (used in Whu Us section)
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
});

// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#back_top').fadeIn('slow');
    } else {
        $('#back_top').fadeOut('slow');
    }
});
$('#back_top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 100, 'easeInOutExpo');
    return false;
});