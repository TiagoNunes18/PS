// --- PORTUGAL --- //

$(document).ready (function() {
    $("#link_p").click(function() {
        $(".port") .css("background-color","red");
    
    });

    $("#p_y").click(function() {
        $(this) .css("background-color","yellow");
        $(this) .prev().css("background-color","green");
    
    });


// --- BELGICA --- //

    $("#link_b").click(function() {
        $("#parent_b") .children().css("background-color","black");
        	$(".b") .last().css("background-color","red");
    
    });

    $("#b_b").click(function() {
        $(this) .next().css("background-color","yellow");
    
    });


// --- FRANÇA --- //

    $("#link_f").click(function() {
        $(".f") .css("background-color","white");
    });

    $("#parent_f").click(function() {
        $(this) .children().not("#white").css("background-color","blue");
        $(this) .children().last().css("background-color","red");
    
    })


});