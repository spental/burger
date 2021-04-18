
$(function () {
    //when user enter the new burger and click on the submit button
    $("#burger").on("submit", function (event) {
        event.preventDefault();
        var burger = {
            burgername: $("#burgername").val()
        };
        //call the post route
        $.ajax('/api/burger', {
            type: "POST",
            data: burger
        }).then(
            function () {
                console.log("inserted new burger");
                location.reload();
            }
        );
    });
    //when user click on the devour it button
    $(".check").on("click", function (event) {
        event.preventDefault();
        const value = $(this).data("id");
        console.log(value);
        //call the put route
        $.ajax('/api/burger/' + value, {
            type: "PUT",
        }).then(
            function () {
                console.log("updated burger");
                location.reload();
            }
        );
    })
}); 