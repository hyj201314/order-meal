/**
 * Created by hanyajie on 15-12-23.
 */
window.onload = function(){
    get_choose_meal_list()
};
function get_choose_meal_list() {
    $.getJSON("../DATA/set_meal_storage.json", function (data) {
        var set_meal_list = data["set_meal"];
        set_meal_list[localStorage.getItem("restaurant")].forEach(function (list) {
            var meal_name_html = "<li class='name'  " +
                "onclick='choose_meal_name(" + '"' + list.meal + '"' + "," + '"' + list.money+ '"' + ")' type='button'>" +
                list.meal + "<p class='money' >" +list.money + "</p>" + "</li>";
            $("body").append(meal_name_html)
        });
    });
}
function choose_meal_name(meal_name,cost){
    localStorage.setItem("meal",meal_name);
    localStorage.setItem("money",cost)
    window.location = 'help_to_order.html'
}

