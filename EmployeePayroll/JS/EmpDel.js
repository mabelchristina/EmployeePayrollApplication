deleteEmployee = (id)=> {
    console.log(" employee information",id);
    $.ajax({
        type: 'delete',
        url: "http://localhost:3000/employee/"+id,
        //data: JSON.stringify(obj),
        contentType: "application/json",

        success: function (data){
            console.log(data);
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });
};
