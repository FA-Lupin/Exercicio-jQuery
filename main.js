$(document).ready(function () {
  $("#formTrf").submit(function (e) {
    e.preventDefault();
    var taskName = $("#Trf").val();
    if (taskName !== "") {
      $("#List").append("<tr><td>" + taskName + "</td></tr>");
      $("#Trf").val("");
    }
  });

  $("#List").on("click", "tr", function () {
    $(this).toggleClass("completed");
  });
});
