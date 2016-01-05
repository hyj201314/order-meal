/**
 * Created by hanyajie on 15-12-18.
 */
window.onload = function () {
    show_order_count();
    show_order_meal();
    show_no_order_count();
    show_no_order_name();
    show_all_subtotal()
};
function get_order_count() {
    var all_set_meal = JSON.parse(localStorage.getItem("order_foods_list")) || [];
    var order_person = [];
    all_set_meal.forEach(function (list) {
        if (order_person.indexOf(list.person) == -1) {
            order_person.push(list.person);
        }
    });
    return order_person;
}
function show_order_count() {
    var all_order_person = get_order_count();
    var order_count = "<div class='order_meal'>"+all_order_person.length + "人已定"+"</div>";
    $("body").append(order_count);
}
function show_order_meal() {
    var all_set_meal = JSON.parse(localStorage.getItem("order_foods_list")) || [];
    all_set_meal.forEach(function (item) {
        var color = (item.money.substring(1, item.money.length) > 12.00) ? 'red':"black";
        var set_meal_list = "<div>" + "<li class='order_meal_list' >" + "<p class='name'>" + item.person + "</p>" +
            "<p class ='set_meal'>" + item.restaurant + " " + item.meal + "</p>" + "<span class='price' style='color:" + color + "'>" +
            item.money + "</span>" + "</li>"+ "</div>";
        $("body").append(set_meal_list);
    });
}
function get_no_order_count() {
    var all_order_person_list = get_order_count();
    var no_order_person = [];
    $.ajaxSettings.async = false;
    $.getJSON("../DATA/person_storage.json", function (data) {
        data["person"].forEach(function (list_item) {
            if (all_order_person_list.indexOf(list_item) == -1) {
                no_order_person.push(list_item);
            }
        });
    });
    return no_order_person
}
function show_no_order_count() {
    var person_count = get_no_order_count();
    var no_order_count = "<div class='no_order_meal'>" + person_count.length + "人未定" + "</div>";
    $("body").append(no_order_count);
}
function show_no_order_name() {
    var order_person_item = get_no_order_count();
    order_person_item.forEach(function (person) {
        var no_order_person_html = "<div>"+ "<li class = 'no_order_name'>" + person + "</li>"+ "</div>";
        $("body").append(no_order_person_html);
    });
}
function show_all_subtotal() {
    var all_order_person_count = get_order_count();
    var all_no_order_person_count = get_no_order_count();
    var all_subtotal = 0;
    var all_set_meal = JSON.parse(localStorage.getItem("order_foods_list"))||[];
    var price_list = [];
    all_set_meal.forEach(function (price) {
        var all_price = JSON.parse(price.money.substring(1, price.money.length));
        all_subtotal += all_price;
    });
    var all_subtotal_html = "<div>" + "<p class='all_subtotal'>" + all_order_person_count.length + "人已定" + "," +
        all_no_order_person_count.length + "人未定" + "," + "总计" + all_subtotal.toFixed(2) + "元" + "</p>" + "</div>";
    $("body").append(all_subtotal_html)
}



