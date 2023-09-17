
var baseTemplate = null
window.onload = ()=>{        
    baseTemplate  = document.getElementById("news-templete").innerHTML

        var news_template = document.getElementById("news-templete").innerHTML
        document.getElementById("news-container").innerHTML = "<script  id=\"news-templete\" type=\"text/x-handlebars-template\" >"+baseTemplate+"<\/script>"
        data.news.forEach(item => {
            var news_template_compile = Handlebars.compile(news_template)
            var list_template_html = news_template_compile(item)
            document.getElementById("news-container").innerHTML += list_template_html
        });

}
    function onSearch(){

        

        var news_template = document.getElementById("news-templete").innerHTML
        let search_text = document.getElementById("search_input").value;
        var news = data.news.filter(item=>{
            return item.title.includes(search_text)
        })
        
        document.getElementById("news-container").innerHTML = "<script  id=\"news-templete\" type=\"text/x-handlebars-template\" >"+baseTemplate+"<\/script>"
        news.forEach(item => {
            var news_template_compile = Handlebars.compile(news_template)
            var list_template_html = news_template_compile(item)
            document.getElementById("news-container").innerHTML += list_template_html
        });

    }

