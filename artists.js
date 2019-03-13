
//Document ready load functions
$(document).ready(function(){
    //Loads the function for the json powered artist wheel
    loadArtists();
})

function loadArtists(){
    console.log("Artist function loaded");
  
    //load json
    var aDT;

    $.getJSON('artists.json',
        function(data){

            var plaster = '';
            for(var i = 0;data.artists.length > i; i++){
                $('#aTable').append('<div class = "row">');

                plaster += `<div class = "row">`;

                    for(var k = (i * 2); k <= ((i*2)+1) ; k++){

                        //console.log('hmm' + ' K is ' + k);

                    try{
                       // console.log(k);
                       // console.log(data.artists[k].name);
                    plaster += "<div onclick = 'fetch()' id = '" + k+ "'class = 'col artcrd' style=' background-image: url(Asset\/images\/" + data.artists[k].picture+ "') !important;'>";
                   // console.log(data.artists[k].picture);
                    plaster += '<h1 id = "' +k +'"class  =  "text-center">' +data.artists[k].name + '</h1>'
                    

                    plaster += `</div>`;

                    //console.log(k + ' rendered ');
                    }
                    catch(err){
                        //console.log('end of render loop on ' + k + ' artist(s)');
                        break;
                    }
                       

                    }

                plaster += `</div>`;

            }
            
            $('#aTable').append(plaster);

    });


    //parse into page
    //add click event to the element ?
}

function fetch(){

    console.log('fetch is activating');
    console.log(event.target.id);
    getArtistInfo(event.target.id);
}

function getArtistInfo(artist){          
    
            try{
                $.getJSON('artists.json',
                function(data){
    
                    console.log(data.artists);
                    var key = artist;

                   // for(var i = 0; i < data.artists.length; i++){

                        //if(data.artists[i].name === artist){
                            //key = i;
                            //console.log('found which item it was! : ' + key)
                           // break;   
                        //}
                    //}

                    console.log(key);

                    //putting together the HTML object to paste into the code
                    var plaster = '';
    
                    plaster += ` <div class = 'table info text-center'>
                                    <div class = 'row'>
                                        <div class = 'col'>
                                        <div class = 'innercol'> <img src="Asset/images/`+ data.artists[key].picture + `" alt=""> </div>
                                        <div class = 'innercol'>

                                        `
                                        //function to render social buttons
                                        //just a whole lot of 'if' they they have this property then do this type of statements

                                        if(data.artists[key].hasOwnProperty('fb')){
                                            console.log('has facebook');
                                            plaster += `<button onclick="window.location.href = 'https://www.facebook.com/` +data.artists[key].fb + `'" type="button" class="btn btn-primary info"><i class="fa fa-facebook" aria-hidden="true"></i></button>`;

                                        }
                                        if(data.artists[key].hasOwnProperty('sc')){
                                            console.log('has soundcloud');
                                            plaster += `<button onclick="window.location.href = 'https://www.soundcloud.com/` + data.artists[key].sc +`'" type="button" class="btn btn-warning info"><i class="fa fa-soundcloud" aria-hidden="true"></i>`;

                                        }
                                        if(data.artists[key].hasOwnProperty('tw')){
                                            console.log('has twitter');
                                            plaster += `<button onclick="window.location.href = 'https://www.twitter.com/` + data.artists[key].tw +`'" type="button" class="btn btn-info info"><i class="fa fa-twitter" aria-hidden="true"></i></button>`;

                                        }
                                        if(data.artists[key].hasOwnProperty('ig')){
                                            console.log('has instagram');
                                            plaster += `<button onclick="window.location.href = 'https://www.instagram.com/` + data.artists[key].ig +`​'" type="button" class="btn btn-default info"><i class="fa fa-instagram" aria-hidden="true"></i></button>`;

                                        }


 
                                        
                                        
                                         
                                        


                    plaster+=           `
                                        </div>
                                      </div>
                                    <div class = 'col'>
                                    <h1>` + data.artists[key].name + `</h1>
                                    <br>
                                    <p>

                                      ` +data.artists[key].desc + `

                                     </p>
                                  </div>
                                </div>
                              </div>
                                        `;

                                        $('#aiz').html(plaster);
                    
    
                }
            )
    
    
            }
            catch(err){
                console.log("Something went wrong ");
    
            }
    
        }