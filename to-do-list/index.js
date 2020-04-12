$(document).ready(function () {
    $("#list-items").html(localStorage.getItem("listItem"));
    $(".add-items").submit(function(event) {
    event.preventDefault();
    var item = $("#todo-list-item").val();
    var dance = $("#todo-list-item").val();
    if (item) {
    $("#list-items").append("<li><input  class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
    localStorage.setItem("listItem", $("#list-items").html());
    $("#todo-list-item").val("");
    
    }
});
    $(document).on("change", ".checkbox", function() {
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked");
          } else {
            $(this).attr("checked", "checked");
          }
        $(this).parent().toggleClass("completed");
        localStorage.setItem("listItem", $("#list-items").html());
    });
    $(document).on("click", ".remove", function() {
        $(this).parent().remove();
        localStorage.setItem("listItem", $("#list-items").html());
    });
 });





//  <iframe src="https://giphy.com/embed/XaA0fpudSHPf4MPlEK" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/moodman-youre-welcome-you-XaA0fpudSHPf4MPlEK">via GIPHY</a></p>