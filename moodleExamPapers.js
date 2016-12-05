(function() {
    'use strict';

    var course = document.getElementsByClassName("courselink");
    var str = (course[0].innerHTML);
    var foo = 500;

    for(var i = 0; i < str.length; i++)
    {
        if(str.charAt(i) == '[')
        {
            foo = i;
        }
    }

    if(foo != 500)
    {
        str = str.substring(0, foo);
        console.log(str);

        var examLink = "https://www.maynoothuniversity.ie/library/exam-papers?code_value_1=";
        examLink += str;

        var navID = document.getElementById("inst10");
        var cont = navID.getElementsByClassName("content");
        var list = cont[0].getElementsByTagName('ul');
        var link = document.createElement('a');
        var image = document.createElement("img");

        image.className = "smallicon navicon";
        image.setAttribute("src", "https://2017.moodle.maynoothuniversity.ie/theme/image.php/nuim/core/1480954821/i/navigationitem");

        link.appendChild(image);
        link.appendChild(document.createTextNode(" Exam Papers"));
        link.title = "Exam Papers";
        link.href = examLink;
        console.log(examLink);

        link.className = "type_setting depth_2 contains_branch";
        list[1].appendChild(link);
    }
})();