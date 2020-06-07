function serializeToJson(form){
    var result = {}
    var formdata = $(form).serializeArray()
    formdata.forEach(function(item){
        result[item.name] = item.value
    })
    return result
 }