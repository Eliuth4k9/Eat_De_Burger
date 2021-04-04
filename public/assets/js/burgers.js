
(function() {
  $(".devour-button").on("click", function(event) {
  event.preventDefault();
    var id = $(this).data("id");

    var newBurgerData = {
      devoured: true
    };
    console.log('newBurgerData is: ', newBurgerData);

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerData
    }).then(
      function() {
        console.log("changed devoured to: ", newBurgerData.devoured);
        location.reload();
      }
    )
  })

  $(".submit-button").on("click", function(event) {
    event.preventDefault();

    var newBurgers = {
      burger_name: $("#burgerData").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurgers
    }).then(
      function() {
        console.log("mission completed, created new burger.");
        location.reload();
      }
    )
  })
})();