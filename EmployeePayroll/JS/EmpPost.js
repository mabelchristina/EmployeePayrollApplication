const imageselect = () => {

    var image1 = document.getElementById('profile1').checked;
    var image2 = document.getElementById('profile2').checked;
    var image3 = document.getElementById('profile3').checked;
    var image4 = document.getElementById('profile4').checked;
    var image5 = document.getElementById('profile5').checked;

    if (image1 == true) {
        var pic1 = document.getElementById('profile1').value;
        return pic1;
    }
    else if (image2 == true) {
        var pic2 = document.getElementById('profile2').value;
        return pic2;
    }
    else if (image3 == true) {
        var pic3 = document.getElementById('profile3').value;
        return pic3;
    }
    else if (image4 == true) {
        var pic4 = document.getElementById('profile4').value;
        return pic4;
    }
    else if (image5 == true) {
        var pic5 = document.getElementById('profile5').value;
        return pic5;
    }
}

const empdepartment = () => {
    let empDept = [];

    var hrchecked = document.getElementById('hr').checked;
    var saleschecked = document.getElementById('sales').checked;
    var financechecked = document.getElementById('finance').checked;
    var engineerchecked = document.getElementById('engineering').checked;
    var otherschecked = document.getElementById('others').checked;

    if (hrchecked == true) {
        var hrcheck = document.getElementById('hr').value;
        empDept.push(hrcheck);
    }
    if (saleschecked == true) {
        var salescheck = document.getElementById('sales').value;
        empDept.push(salescheck);
    }
    if (financechecked == true) {
        var financecheck = document.getElementById('finance').value;
        empDept.push(financecheck);
    }
    if (engineerchecked == true) {
        var engineercheck = document.getElementById('engineering').value;
        empDept.push(engineercheck);
    }
    if (otherschecked == true) {
        var othercheck = document.getElementById('others').value;
        empDept.push(othercheck);
    }

    console.log(empDept);
    return empDept;
}

function save() {
    console.log("Method Called");

    var sex = document.getElementsByName("gender")[0].checked ? 'Male' : 'Female';
    console.log(sex);


    let callObject = {
        "name": document.getElementById('name').value,
        "profile": imageselect,
        "gender": sex,
        "department": empdepartment,
        "salary": document.getElementById('salary').selectedOptions[0].text,
        "startdate": document.getElementById('day').value +"/"+ document.getElementById('month').value +"/"+ document.getElementById('year').value,

    };
    console.log("reqOject",callObject);
    $.ajax({
        url: "http://localhost:3000/employee",
        type: "POST",
        data: callObject,
       

        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });

    }
