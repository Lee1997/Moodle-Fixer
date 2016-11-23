(function() {
    //var inStr = "CS265[A] - Software Testing (2017: S1)";
    //var inStr = "MT212A[A] - Linear Algebra 2 (A) (2017:S2)";

    var courses = document.getElementsByClassName("course_title");
    for(var j = 1; j < courses.length; j++){
        console.log(courses.length);

        var anchor = courses[j].getElementsByTagName('a');
        var inStr = anchor.item(1).title;

        var fullCourse = false;
        var fullName = "";

        for (var i = 0; i < inStr.length - 3; i++) {
            if (inStr.substring(i, i + 3) == "[A]") {
                fullName += inStr.substring(inStr.length - 3, inStr.length - 1);
                fullName += " - ";
                fullName += inStr.substring(i + 6, inStr.length - 10);
                fullName += " - ";
                fullName += inStr.substring(0, 5);
                fullCourse = true;
                break;
            }
        }
        if(fullCourse){
            anchor[1].innerHTML = fullName;
        }

    }
})();