$( document ).ready(function() {
    
    //check off specific todos by clicking them
    $("ul").on("click", "li", function(){
        $(this).toggleClass("completed");
    });
  
    //click on x to delete todo
    $("ul").on("click", "span", function(event){
    $(this).parent().fadeOut("slow", function(){
        $(this).remove(); 
    });
    event.stopPropagation();
    });

    $("input[type='text']").keypress(function(event){
        //if enter is pressed
        if(event.which === 13){
            //grabbing new todo text from input
            var todoText = $(this).val();
            if (todoText != ""){
            $(this).val("");
            //create new li and add to ul
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
            }
            else {
            alert("Please Enter a New ToDo")
            }
        }
    });

    $(".fa-plus").click(function(){
        $("input[type='text']").fadeToggle();
    });

});