// This runs the function whenever the document is loaded.
$(document).ready(function () {

    //these are objects being defined in an array.
    var obj = {
        characters: [
            {
                name: "luke",
                health: 100,
                AP: 20,
                CAP: 10,
                selected: false,
            },
            {
                name: "yoda",
                health: 120,
                AP: 20,
                CAP: 10,
                selected: false,
            },
            {
                name: "obiWan",
                health: 110,
                AP: 20,
                CAP: 10,
                selected: false,
            },
            {
                name: "boba",
                health: 100,
                AP: 20,
                CAP: 10,
                selected: false,
            },
            {
                name: "vader",
                health: 100,
                AP: 20,
                CAP: 10,
                selected: false,
            },
            {
                name: "maul",
                health: 100,
                AP: 20,
                CAP: 10,
                selected: false,
            }]
    }

    // This will grab the health property in each corresponding property in the array.
    var obi = obj.characters[0];
    var yoda = obj.characters[1];
    var luke = obj.characters[2];

    var boba = obj.characters[3];
    var vader = obj.characters[4];
    var maul = obj.characters[5];


    $("#obiWanHP").html(obi.health);
    $("#yodaHP").html(yoda.health);
    $("#lukeHP").html(luke.health);


    $("#bobaHP").html(boba.health);
    $("#vaderHP").html(vader.health);
    $("#maulHP").html(maul.health);



    // These functions will make the other photos disappear when one of them is clicked.

    // Characters

    // array created to hold the values of the selected character
    var attackerAP;
    var attackerHP;
    var defenderCAP;
    var defenderHP;

    function reset() {
        $("#obiWanHP").html(obi.health);
        $("#yodaHP").html(yoda.health);
        $("#lukeHP").html(luke.health);


        $("#bobaHP").html(boba.health);
        $("#vaderHP").html(vader.health);
        $("#maulHP").html(maul.health);


        $("#obiWan").show();
        $("#luke").show();
        $("#yoda").show();

        $("#vader").show();
        $("#boba").show();
        $("#maul").show();

    }

    function continueFight() {
        $("#bobaHP").html(boba.health);
        $("#vaderHP").html(vader.health);
        $("#maulHP").html(maul.health);

        $("#vader").show();
        $("#boba").show();
        $("#maul").show();
    }

    $("#yoda").on("click", function () {
        $("#obiWan").hide();
        $("#luke").hide();

        yoda.selected = true;

        if (yoda.selected === true) {
            attackerHP = yoda.health
            attackerAP = yoda.AP
        };
    });

    $("#obiWan").on("click", function () {
        $("#yoda").hide();
        $("#luke").hide();

        obi.selected = true;

        if (obi.selected === true) {
            attackerHP = obi.health
            attackerAP = obi.AP
        };
    });

    $("#luke").on("click", function () {
        $("#obiWan").hide();
        $("#yoda").hide();

        luke.selected = true;

        if (luke.selected === true) {
            attackerHP = luke.health
            attackerAP = luke.AP
        };
    });



    //Enemies


    $("#vader").on("click", function () {
        $("#boba").hide();
        $("#maul").hide();

        vader.selected = true;

        if (vader.selected === true) {
            defenderHP = vader.health
            defenderCAP = vader.CAP
        };
    });

    $("#boba").on("click", function () {
        $("#vader").hide();
        $("#maul").hide();

        boba.selected = true;

        if (boba.selected === true) {
            defenderHP = boba.health
            defenderCAP = boba.CAP
        };
    });

    $("#maul").on("click", function () {
        $("#boba").hide();
        $("#vader").hide();

        maul.selected = true;

        if (maul.selected === true) {
            defenderHP = maul.health
            defenderCAP = maul.CAP
        };
    });


    // This is the attack button.
    $("#attack").on("click", function () {
        attackerHP = attackerHP - defenderCAP
        defenderHP = defenderHP - attackerAP


        $("#maulHP").html(defenderHP)
        $("#bobaHP").html(defenderHP)
        $("#vaderHP").html(defenderHP)
        $("#yodaHP").html(attackerHP)
        $("#obiWanHP").html(attackerHP)
        $("#lukeHP").html(attackerHP)

        

        if(attackerHP <= 0 && defenderHP <= 0){
            alert("It's a draw!");
            reset();
            return;
        };
        
        if (attackerHP <= 0) {
            alert("you lose!");
            reset();
        };

        if (defenderHP <= 0) {
            alert("you win!");
            continueFight();
        } else {
            console.log("continue attack")
            console.log(defenderHP)
            console.log(attackerHP)
        };


    });

});