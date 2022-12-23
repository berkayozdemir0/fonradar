fetch("https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers").then((response) => {

    return response.json();
}).then((objectData) => {
    console.log(objectData);
    let tableData = "";
    objectData.map((values) => {
        tableData += `    
      
        <table id="myTable"> 
        <tr>
        <td> <a href="#"> ${values.companyName} </a> </td>
        <td> <a href="#"> ${values.taxNumber} </a> </td>
        <td> <a href="#"> ${values.taxOffice} </a> </td>
        <td> <a href="#"> ${values.invoiceCount} </a> </td>
        </tr>
        </table> 
        `;
    });
    document.getElementById("table_body").
        innerHTML = tableData;
}).catch((err) => {
    console.log(err);
})


// search area start
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
// search area finish


