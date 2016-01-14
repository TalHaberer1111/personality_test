$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var age = parseInt($("input#age").val());
    var drink = $("select#drink").val();
    var geo = $("select#geo").val();
    var food = $("select#food").val();
    var party = $("select#party").val();

    console.log(age);
    console.log(drink);
    console.log(geo);
    console.log(food);
    console.log(party);

    if (age < 21 && drink === 'juice' && geo === 'oceans' && food === 'veggies' && party === 'house'){
      $("#result1").show();
    }

    else if (age >= 21 && drink === 'juice' && geo === 'oceans' && food === 'veggies' && party === 'house'){
        $("#result2").show();
    }

    else if (age >= 21 && drink === 'soda' && geo === 'oceans' && food === 'veggies' && party === 'house'){
        $("#result2").show();
    }

    else if (age < 21 && drink === 'soda' && geo === 'oceans' && food === 'veggies' && party === 'house'){
        $("#result2").show();
    }

    else if (age >= 21 && drink === 'soda' && geo === 'desert' && food === 'veggies' && party === 'house'){
        $("#result4").show();
    }

    else if (age < 21 && drink === 'soda' && geo === 'desert' && food === 'veggies' && party === 'house'){
        $("#result2").show();
    }

    else if (age < 21 && drink === 'soda' && geo === 'oceans' && food === 'meat' && party === 'house'){
        $("#result2").show();
    }

    else if (age >= 21 && drink === 'soda' && geo === 'oceans' && food === 'meat' && party === 'house'){
        $("#result2").show();
    }

    else if (age < 21 && drink === 'soda' && geo === 'oceans' && food === 'veggies' && party === 'party'){
        $("#result4").show();
    }

    else if (age >= 21 && drink === 'soda' && geo === 'oceans' && food === 'veggies' && party === 'party'){
        $("#result4").show();
    }

    else if (age < 21 && drink === 'juice' && geo === 'oceans' && food === 'veggies' && party === 'house'){
        $("#result4").show();
    }

    else if (age >= 21 && drink === 'juice' && geo === 'oceans' && food === 'veggies' && party === 'house'){
        $("#result4").show();
    }

    else if (age < 21 && drink === 'juice' && geo === 'oceans' && food === 'veggies' && party === 'house'){
        $("#result4").show();
    }

    else if (age >= 21 && drink === 'juice' && geo === 'desert' && food === 'veggies' && party === 'house'){
        $("#result4").show();
    }

    else if (age < 21 && drink === 'juice' && geo === 'desert' && food === 'veggies' && party === 'house'){
        $("#result4").show();
    }

    else if (age >= 21 && drink === 'juice' && geo === 'oceans' && food === 'meat' && party === 'house'){
        $("#result4").show();
    }

    else if (age < 21 && drink === 'juice' && geo === 'oceans' && food === 'meat' && party === 'house'){
        $("#result1").show();
    }

    else if (age >= 21 && drink === 'juice' && geo === 'oceans' && food === 'veggies' && party === 'rave'){
        $("#result1").show();
    }

    else if (age < 21 && drink === 'juice' && geo === 'oceans' && food === 'veggies' && party === 'house'){
        $("#result1").show();
    }

    else if (age >= 21 && drink === 'juice' && geo === 'oceans' && food === 'veggies' && party === 'house'){
        $("#result1").show();
    }

    else if (age < 21 && drink === 'juice' && geo === 'oceans' && food === 'veggies' && party === 'house'){
        $("#result1").show();
    }













    else {
      $("#result3").show();
    }

    event.preventDefault();

  });
});
