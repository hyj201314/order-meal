/**
 * Created by hanyajie on 15-12-23.
 */
window.onload = function(){
    show_choose_restaurant_name()
};
    function show_choose_restaurant_name(){
        $.getJSON("../DATA/restaurant_storage.json", function(data) {
       data["restaurant"].forEach(function (list) {
            var restaurant_name_html = "<li class='name'  " +
                "onclick='choose_restaurant_name(" + '"' + list + '"' + ")' type='button'>" + list + "</li>";
            $("body").append(restaurant_name_html);
        });
    });
}
function choose_restaurant_name(restaurant){
    localStorage.setItem("restaurant",restaurant);
    window.location = 'help_to_order.html'
}
