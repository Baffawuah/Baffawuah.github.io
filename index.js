
$(document).ready(function(){

    $(".arrow").click(function() {
        console.log('click function is working');
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 1000);
    });
})


class project{
    constructor(name, url, description){
        this.name = name;
        this.url = url;
        this.description = description;
    }

}