$( document ).ready(function() {
    console.log( "ready!" );
    var Person = {
        name : "Cato",
        drive : function(){
            alert("I am driving, bitch");
        }
    };
    // $('ul').append(Person.name);
});