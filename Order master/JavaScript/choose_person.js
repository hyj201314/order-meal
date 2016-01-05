/**
 * Created by hanyajie on 15-12-23.
 */
window.onload =function(){
    show_person_name();
};

function show_person_name() {
    $.getJSON("../DATA/person_storage.json",function(data) {
        data["person"].forEach(function (list) {
            var person_name_html = "<li class='name'  " +
                "onclick='choose_person_name(" + '"' + list + '"' + ")' type='button'>" + list + "</li>" ;
            $("body").append(person_name_html);
        });
    });
}
function choose_person_name(name) {
    localStorage.setItem("person", name);
    window.location = 'help_to_order.html'
}
