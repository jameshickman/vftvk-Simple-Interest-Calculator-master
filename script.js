function compute()
{
    // Get form values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    // input validation
    if (principal <= 0) {
        alert("Enter a positive number for Amount");
        document.getElementById("principal").focus();
        return;
    }
    // Conpute results
    // It appears that the specification from example is JUST the interest and not total replayment.
    var amount = parseFloat(interest);
    var output = "If you deposit <span class='results-highlight'>" + principal + "</span>,<br/>";
    output += "at an interest rate of <span class='results-highlight'>" + rate + "%</span>,<br/>";
    output += "You will receive an amount of <span class='results-highlight'>" + amount + "</span>,<br>";
    output += "in the year <span class='results-highlight'>" + year + "</class>";
    document.getElementById("result").innerHTML = output;
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        