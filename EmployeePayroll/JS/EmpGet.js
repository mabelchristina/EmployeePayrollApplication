$(document).ready(function(){
    var innerHtml = " ";
    $.ajax({
        url: "http://localhost:3000/employee",
        type: "GET",
        dataType: "json",
        
        success: function(data){
            console.log(data[0]);
            
            let empArray = data;
            console.log(empArray);
            console.log(empArray[0].name);
            $.each(empArray , function(index,value){
                console.log(`${value.department}`);
                innerHtml += 
                `<tr>
                    <td><img class="profile" src="${value.profile}"></td>
                    <td>${value.name}</td>
                    <td>${value.gender}</td>
                    <td>${value.department}</td>
                    <td>${value.salary}</td>
                    <td>${value.startdate}</td>
                    <td>
                    <a class="add-buttom edit" onclick = "editEmployee(${value.id})" href = ../HTML/EmployeeUpdate.html > 
                        <img src="../Assets/Images/update-black-18dp.svg" alt="Edit"></a>
                    <buttom class="add-buttom delete" onclick = "deleteEmployee(${value.id})">
                    <img src="../Assets/Images/delete-black-18dp.svg" alt="Delete"></buttom>
                    </td>
                </tr>`
            });
            $('#table-display').append(innerHtml)
        } 
    })
})