fetch("https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers").then((response) => {

    return response.json();
}).then((objectData) => {
    console.log(objectData);
    let tableData = "";
    objectData.map((values) => {
        tableData += `    
      
        <tbody> 
        <tr>
        <td>${values.companyName} </td>
        <td>${values.taxNumber} </td>
        <td>${values.taxOffice} </td>
        <td>${values.invoiceCount} </td>
        </tr>
        </tbody> 
        `;
    });
    document.getElementById("table_body").
        innerHTML = tableData;
}).catch((err) => {
    console.log(err);
})