/**
 * Created by hanyajie on 15-12-14.
 */
window.onload=function(){
    get_person_info();
};
function get_person_info(){
    $("#name_id")[0].value = localStorage.getItem("person");
    $("#restaurant_id")[0].value = localStorage.getItem("restaurant");
    $("#meal_id")[0].value = localStorage.getItem("meal");
}
function check_button_status(){
    if(document.getElementById("name_id").value != "" && document.getElementById("restaurant_id").value != "" &&
        document.getElementById("meal_id").value != "" ){
        get_storage();
        clean_storage();
    }else{
        $("acknowledgement_id").attr('disabled',"false");
    }
}
function get_storage(){
    var order_foods = {person: localStorage.getItem("person"), restaurant: localStorage.getItem("restaurant"),
        meal: localStorage.getItem("meal"), money: localStorage.getItem("money")};
    var order_foods_list = JSON.parse(localStorage.getItem("order_foods_list")) || [];
    order_foods_list.push(order_foods);
    localStorage.setItem('order_foods_list', JSON.stringify(order_foods_list));
}
function clean_storage(){
    document.getElementById("name_id").value = "";
    document.getElementById("restaurant_id").value = "";
    document.getElementById("meal_id").value = "";
    localStorage.removeItem("person");
    localStorage.removeItem("restaurant");
    localStorage.removeItem("meal");
    localStorage.removeItem("money");
}
function show_disabled(){
    if(document.getElementById("restaurant_id").value == ""){
        $("#button").attr('disabled',"false");
    }
    else{
        window.location = 'meal_name.html';
    }
}
function get_clean(){
    window.location = 'restaurant_name.html'
    document.getElementById("meal_id").value = "";
    localStorage.removeItem("meal");
}

