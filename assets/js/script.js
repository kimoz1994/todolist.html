alert("feautures:\n 1.can add and delete a todo item.\n 2. can sort the todo items.\n 3.can strok the done items.");



//check off specific todos by clicking


//the "on" method can be used to add eventlisteners to elements that will be added later,,, we can't have this option if we are using the click method directly..
//note: when using the on method... event listeners cannot be added to elements that are not on the page... this can be done with a twist like the next two examples.

$("input[type='text']").hide();
$("ul").on("click","li",function(){
    
 
    
    $(this).toggleClass("completed");
    
});

//click on x to delete todo

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(250,function(e){
        $(this).remove();
    });
    event.stopPropagation();
    
});

//adding an event listener to the input ....


$("input[type='text']").keypress(function(e){
    
if(e.keyCode == 13){
 
    if($(this).val() == ""){
        alert("please enter a value to be added to the list!");
    }else{
        
        var newtodo = $(this).val();
        
        $("ul ").append("<li ><span><i class='fa fa-trash'></i></span> "+newtodo+"</li>");
        $(this).val("");
        
        
    }
    
}    
    
    
});

$(".fa-plus").click(function(){
    
   $("input[type='text']").fadeToggle(); 
    
    
    
});
 $("#list1").sortable({
                
//                placeholder:"ui-state-highlight",
//                cancel:".notsortable",
                
            });
            





