$(document).ready(function () {
    $("#buttonCalculator").click(function () {
        let hourlyRate = parseFloat($("#hourlyRate").val());
        let hours = parseFloat($("#numHours").val());

        if(isNaN(hours) || hours < 0)
        {
            $("#error").text("Please enter a valid positive number");
            return;
        }

        $("#error").text("");

        let monthlyCost = hours * hourlyRate;
        $("#monthlyCost").val("$" + monthlyCost.toFixed(2));

    })
})