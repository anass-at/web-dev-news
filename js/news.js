
let params = (new URL(document.location)).searchParams;

window.onload = function (){
    // history.back()
    var position =  params.get('id');
    var new_container = document.getElementById("single_news").innerHTML 
    var complied_new_container = Handlebars.compile(new_container)
    var rander = complied_new_container(data.news[position])
    console.log(data.news[position],position)
    document.getElementById("new-container").innerHTML = rander

    var sameler_template = document.getElementById('sameler-template').innerHTML
    // get all news with same current categoery 
    var sameler_news = data.news.filter(item=>{
        return item.category ==  data.news[position].category
    })

    var count = 0 
    while(count < 3) {
        var index =  Math.floor(Math.random() * sameler_news.length - 1);
        if(index < 0 ){
        continue
        }
        count++ 
        console.log('index',index)
        var sameler_compiler =  Handlebars.compile(sameler_template)
        document.getElementById('sameler-container').innerHTML += sameler_compiler(sameler_news[index])
        
    }
    
}
