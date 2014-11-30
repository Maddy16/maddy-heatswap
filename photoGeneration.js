var imageBuyDisplay = function (woot, imageName, imageId, isfirst){
    var finalObj = "";
	if(woot.get(imageName)!=""&&woot.get(imageName)!=null){
    var classes="item";
	if(isfirst){
		classes="active item popularHome"
	}
	
	var imgURL = woot.get(imageName);
        var img = $('<img src="'+imgURL+'"/>').load(function(){
            if(this.width/this.height<1.45){
                    $("#"+imageId).css("height", "500px");
                    $("#"+imageId).css("width", "auto");
                    var ratio=500/this.height;
                    var ratioWidth=this.width*ratio;
                    var floatDistance=(748-ratioWidth)/748*100/2+100;
                    $("#"+imageId).css("left", floatDistance+"%");
            }
        });

        finalObj += "<div class='"+classes+"' style='width:100%; height:500px; overflow:hidden; text-align: center;'>\n"
        finalObj += "<img id='"+imageId+"' src='"+lowResImage(woot.get(imageName))+"' style='position:relative; left:100%;margin-left:-100%;' height='500px'>\n"
        finalObj += "<div class='carousel-caption'>"
        finalObj += "</div>"
        finalObj += "</div>"  
    }
    return finalObj;
}

var lowResImage=function(url){
	return "http://www.school-pages.com/image.cgi/?img="+url;
}

var lowResImageLandscape=function(url){
    return "http://www.school-pages.com/image.cgi/?landscape=1&img="+url;
}