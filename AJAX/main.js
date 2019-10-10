document.getElementById("button").addEventListener("click", loadUser);

function loadUser() {
     //create XHR object
    var xhr = new XMLHttpRequest();
    var url = "https://thatsthespir.it/api";
    // open - type - URL/ file
        xhr.open("GET", url,true);

    xhr.onload = function () {
            if (this.status == 200){
                var quotes = JSON.parse(this.responseText);
                console.log(quotes)

                var output = "";

                        output  +=
                            '<div id="section">'+
                            '<div class="img">'+
                            '<img src="'+quotes.photo+'">' +
                            '</div>'+
                            '<p>ID: '+quotes.id+'</p>'+
                            '<h2>'+quotes.quote+'</h2>'+
                            '<p>autor: '+quotes.author+'</p>' +

                            '</div>'
                    document.getElementById('users').innerHTML = output;
            }
    };
    xhr.send();
}
/*
'<div id="section">'+
'<div class="users">' +
'<img src="'+quotes.photo+'">' +
'<p>ID: '+quotes.id+'</p>'+
'<h2>'+quotes.quote+'</h2>'+
'<p>autor: '+quotes.author+'</p>' +
'</div>';
'</div>'*/
