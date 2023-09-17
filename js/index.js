


window.onload = ()=>{
    var trending_news = document.getElementById("trending_container").innerHTML 
    
    for(var current_new of data.news ){
        if(!current_new.is_trending){continue}
        var compiled_trending =  Handlebars.compile(trending_news);
        var rendered = compiled_trending(current_new)
        document.getElementById("trending").innerHTML += rendered

    }

    var events_container_script = document.getElementById("events-container-script").innerHTML
    for(var event of data.events){
        var event_compailer =  Handlebars.compile(events_container_script)
        var rendered_html = event_compailer(event)
        document.getElementById("events-container").innerHTML += rendered_html


    }

    var inner_carousel = document.getElementById('programming-news-script').innerHTML
    for(var current_new of data.news ){
        if(current_new.category != "tech"){continue}
        var inner_carousel_compiler = Handlebars.compile(inner_carousel)
        var render_carousel_item = inner_carousel_compiler(current_new)
        
        document.getElementById('programming-news-container').innerHTML += render_carousel_item
    }

    var inner_carousel = document.getElementById('health-news-script').innerHTML
    for(var current_new of data.news ){
        if(current_new.category != "health"){continue}
        var inner_carousel_compiler = Handlebars.compile(inner_carousel)
        var render_carousel_item = inner_carousel_compiler(current_new)
        
        document.getElementById('health-news-container').innerHTML += render_carousel_item
    }

    
}
