(function() {
    //var inStr = "CS265[A] - Software Testing (2017: S1)";
    //var inStr = "MT212A[A] - Linear Algebra 2 (A) (2017:S2)";

    //Selects the courses
    var courses = document.getElementsByClassName("course_title");
    for(var j = 1; j < courses.length; j++){
        //Selects the link title
        var anchor = courses[j].getElementsByTagName('a');
        var inStr = anchor.item(1).title;

        var fullCourse = false;
        var fullName = "";

        for (var i = 0; i < inStr.length - 3; i++) {
            if (inStr.substring(i, i + 3) == "[A]") {

                //Adds in the Module Code
                fullName += inStr.substring(0, 5);
                fullName += " - ";

                //Adds in the Module Name
                fullName += inStr.substring(i + 6, inStr.length - 10);
                fullName += " - ";

                //Adds in the Semester the module is covered
                fullName += inStr.substring(inStr.length - 3, inStr.length - 1);

                //Enables you to replace the code
                fullCourse = true;

                break;
            }
        }
        //Changes the code if it's a proper module
        if(fullCourse){
            anchor[1].innerHTML = fullName;
        }
    }
})();