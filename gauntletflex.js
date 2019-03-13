

//Document ready load functions
$(document).ready(function(){
    //Loads the function for the json powered artist wheel
    console.log("flex generator loaded");
    ArtistCarousel();

})


//loading the artists pictures and function into the carousel
function ArtistCarousel(){

    console.log("Artist function loaded");
    //load json

    var aDT;

    $.getJSON('artists.json',
        function(data){


            //two variable classes, one holds the carousel indicators, the other one holds the actual data
            var plaster = `<ul class="carousel-indicators">`;
            var plaster2= '<div class="carousel-inner">';

            //controlHTML tag
            var ctrl = `
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
            `;

            for(var i = 0;data.artists.length > i; i++){
                //carousel icon sticky area
                plaster += `<li data-target="#demo" data-slide-to="`+ i + `">`;
                if(i == 0){
                    plaster+=`class="active"`;
                }
                plaster +=`</li>`;


                // plaster 2 for the items
                plaster2+= `<div class="carousel-item`;

                if(i == 0){
                    plaster2+= ' active '
                }


                plaster2+=  `"><div class = 'imgfield'>
                                    <img class = 'img-fluid'src="Asset\/images\/`+ data.artists[i].picture+`" height="100px"> </div>
                                  <h1>`+ data.artists[i].name+ `</h1></div>`;
            }

            plaster += `</ul>`;
            plaster2+= `</div>`;

            console.log(plaster);
            console.log(plaster2);
            
            //append the two html classes to the body of the document
            $('#demo').append(plaster+plaster2+ctrl);

    })}