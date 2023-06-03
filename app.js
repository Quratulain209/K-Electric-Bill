// K-Electric Bill
function calculate(){
    var Customername = document.getElementById("myname").value;
    var Month = document.getElementById('month').value;
    var unit = document.getElementById('unit').value;
    var chrgperunit = 7.74;
    var netAmountPayable = unit * chrgperunit;
    var latePayCharge = (netAmountPayable * 10 / 100).toFixed(2);
    var GrossAmountPayable = parseFloat(netAmountPayable) + parseFloat(latePayCharge);

    document.getElementById('NameDisplay').innerHTML = "<br><b>Customer Name: </b>" + Customername;
    document.getElementById('MonthDisplay').innerHTML = "<b>Month: <b> " + Month;
    document.getElementById('unitsDisplay').innerHTML = "<b>Number of units: </b> " + unit;
    document.getElementById('chrgperunitDisplay').innerHTML = "<b>Charges per unit: </b> " + chrgperunit;
    document.getElementById('netAmountPayableDisplay').innerHTML = "<b>Net Amount Payabe(within Due Date): </b>  " + netAmountPayable;
    document.getElementById('latePayChargeDisplay').innerHTML = "<b>Late Payment surcharge: </b> " + latePayCharge;
    document.getElementById('GrossAmountPayableDisplay').innerHTML = "<b>Gross Amount Payable(After Due Date): </b> " +GrossAmountPayable;
}