

$("#add_hardware").submit(function(event){
    alert("Data Inserted Successfully");
})


















if(window.location.pathname == "/"){
    $ondelete =$(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url": 'http://localhost:3000/api/hardware/${hardware.id}',
            "method":"DELETE"
        }

        if(confirm("Do you really want to delete this record")){
            $.ajax(request).done(function(response){
                alert("Data Deleted successfully");
                location.reload
            })
        }


    })
}