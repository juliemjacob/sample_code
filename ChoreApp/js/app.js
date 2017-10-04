

$(document).ready(function () {
    $("#addChoreForm").hide();
    $("#addChoreLnk").click(function () {
        $("#addChoreForm").toggle();    
        $("#addRoomieForm").hide();

    });
});

$(document).ready(function () {
    $("#addRoomieForm").hide();
    $("#addRoomieLnk").click(function () {
        $("#addRoomieForm").toggle();
        $("#addChoreForm").hide();
    });
});