function victim(num){
    var elem = [];
    var vic;
    for(var i = 0; i < num; i++){
        vic = prompt("");
        elem.push(vic);
    }
    var rendom = Math.floor(Math.random()*num);
    document.write("<p>"+"la victime et : "+elem[rendom]+ "</p>");
}