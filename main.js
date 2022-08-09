var friends = [];
function Submit() {
    var name_1 = document.getElementById("name_of_the_student_1").value;
    var name_2 = document.getElementById("name_of_the_student_2").value;
    var name_3 = document.getElementById("name_of_the_student_3").value;
    var name_4 = document.getElementById("name_of_the_student_4").value;
    friends.push(name_1);
    friends.push(name_2);
    friends.push(name_3);
    friends.push(name_4);
    console.log(friends);
    document.getElementById("display_name").innerHTML = friends;
    document.getElementById("Submit_Button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
    friends.sort();
    document.getElementById("sort_button").style.display = "none";
    console.log(friends);
    document.getElementById("display_name").innerHTML = friends;
    document.getElementById("reset_button").style.display = "inline-block";
}
function Reset(){
    document.getElementById("name_of_the_student_1").value = "";
    document.getElementById("name_of_the_student_1").value = "";
    document.getElementById("name_of_the_student_1").value = "";
    document.getElementById("name_of_the_student_1").value = "";
}
