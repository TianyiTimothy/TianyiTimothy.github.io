$(document).ready(function () {

    var index = 0;
    function print(word) {
        $("#text").text(word.substring(0, index++));
    }
    function cleanText() {

        clearInterval(welcomeHandler);
        // clear current text
        $("#text")
            .fadeOut(300,
                // callback function: execute after hide(300)
                function () { $("#text").text(''); })
            .fadeIn(300);
        index = 0;
    }

    var welcomeHandler = setInterval(() => {
        print("Hi, welcome to my site.                                         (click anywhere)")
    }, 50);

    // sorry for the mass, if i have time i will try to fix it using recursive function.
    $(window).click(function () {
        cleanText();
        // change click function
        $(window).unbind("click");

        (function () {
            setTimeout(
                function () {
                    welcomeHandler = setInterval(() => {
                        print("This is my magic cube.           Let's see how it works, shall we?");
                    }, 50);
                    $(window).click(function () {
                        cleanText();

                        // zoom the cube
                        $("#cube").css("animation", "cubeback 3s 1 ease forwards");

                        setTimeout(() => {                       
                            $(".adj").css("font-size","3em");
                        }, 1500);
                        // zoom the word

                        // stack sides
                        // using time out to animate
                        setTimeout(() => {
                            $(".back").css("transform", "scale(0.5) scaleZ(0.5)");
                        }, 3000);
                        setTimeout(() => {
                            $(".front").css("transform", "scale(0.5) scaleZ(0.5)");
                        }, 4000);
                        setTimeout(() => {
                            $(".left").css("transform", "scale(0.5) scaleZ(0.5)");
                        }, 5000);
                        setTimeout(() => {
                            $(".top").css("transform", "scale(0.5) scaleZ(0.5)");
                        }, 6000);
                        setTimeout(() => {
                            $(".right").css("transform", "scale(0.5) scaleZ(0.5)");
                        }, 7000);
                        setTimeout(() => {
                            $(".bottom").css("transform", "scale(0.5) scaleZ(0.5)");
                        }, 8000);
                        setTimeout(() => {
                            $("#cube").css("animation", "cubebackorigin 1s 1 ease forwards");
                        }, 9000);
                        setTimeout(() => {
                            $(".front").css("transform", "scale(1) scaleZ(1)");
                        }, 10000);
                        setTimeout(() => {
                            $(".front").css("transform", "scale(0) scaleZ(0)");
                            // display name
                            $("#finaltext").text("T");
                        }, 11000);
                        setTimeout(() => {
                            $(".back").css("transform", "scale(1) scaleZ(1)");
                        }, 12000);
                        setTimeout(() => {
                            $(".back").css("transform", "scale(0) scaleZ(0)");
                            // display name
                            $("#finaltext").text("TI");
                        }, 13000);
                        setTimeout(() => {
                            $(".right").css("transform", "scale(1) scaleZ(1)");
                        }, 14000);
                        setTimeout(() => {
                            $(".right").css("transform", "scale(0) scaleZ(0)");
                            // display name
                            $("#finaltext").text("TIA");
                        }, 15000);
                        setTimeout(() => {
                            $(".left").css("transform", "scale(1) scaleZ(1)");
                        }, 16000);
                        setTimeout(() => {
                            $(".left").css("transform", "scale(0) scaleZ(0)");
                            // display name
                            $("#finaltext").text("TIAN");
                        }, 17000);
                        setTimeout(() => {
                            $(".top").css("transform", "scale(1) scaleZ(1)");
                        }, 18000);
                        setTimeout(() => {
                            $(".top").css("transform", "scale(0) scaleZ(0)");
                            // display name
                            $("#finaltext").text("TIANY");
                        }, 19000);
                        setTimeout(() => {
                            $(".bottom").css("transform", "scale(1) scaleZ(1)");
                        }, 20000);
                        setTimeout(() => {
                            $(".bottom").css("transform", "scale(0) scaleZ(0)");
                            // display name
                            $("#finaltext").text("TIANYI");
                        }, 21000);
                        setTimeout(() => {
                            // move final text to site name
                            $("#finaltext").css("animation", "finaltextmove 1s 1 ease forwards");
                        }, 22000);
                        setTimeout(() => {
                            $("#text").css("animation", "textmove 0.3s 1 ease forwards");
                            
                            var welcomeHandler = setInterval(() => {
                                print("Thank you !!")
                            }, 50);
                        }, 23000);

                        // unbind click function 
                        $(window).unbind("click");

                    });

                }, 500);

        })();
    });

    function sideClick(e) {
        console.log($(this).text());
        $(this).css("transform", "scale(1) scaleZ(1)")
     
        // $(this).css("transform", "rotateX(0deg) rotateY(0deg) scale(0.5)scaleZ(0.5)");
    }

});