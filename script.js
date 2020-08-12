$(".card-img-top").click( function(event){
    event.preventDefault();

    //listen to the exact image clicked
    let eventTarget = event.target;

    //alert(typeof el.getAttribute("data-index"));

    //if explore outdoors is clicked pick the data-index and move to dedicated html.
    if(eventTarget.getAttribute("data-index") === "0"){

        //alert("test for data-index");
        window.location.href = "./exploreOutdoors.html";
    }

    if(eventTarget.getAttribute("data-index") === "1"){

        //alert("test for data-index");
        window.location.href = "./burgerLogger.html";
    }
});

$("#scroll-top").click( function(event){
    event.preventDefault();


    window.location.href = "./exploreOutdoors.html";
 

    // if (event.target == null){

    //  window.location.href = "./exploreOutdoors.html";

    // }

});