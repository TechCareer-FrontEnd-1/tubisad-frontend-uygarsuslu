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