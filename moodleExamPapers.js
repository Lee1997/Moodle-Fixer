(function()
    {
        'use strict';

        //Find the course title and create an index variable
        var course = document.getElementsByClassName("courselink");
        var courseTitle = (course[0].innerHTML);
        var index = 0;

        //Loop through the course title
        for(var i = 0; i < courseTitle.length; i++)
        {
            //Find out when the course code itself ends
            if(courseTitle.charAt(i) == '[')
            {
                //Set the index to the end of the course code
                index = i;
            }
        }

        //Check to make sure youre in a course page and not a department page
        if(index != 0)
        {
            //Make a string out of the course code and add it to an exam paper link
            var courseCode = courseTitle.substring(0, index);
            var examLink = "https://www.maynoothuniversity.ie/library/exam-papers?code_value_1=";
            examLink += courseCode;

            //Find the pane where the new button will be
            var navID = document.getElementById("inst10");
            var content = navID.getElementsByClassName("content");
            var list = content[0].getElementsByTagName('ul');

            //Give the new button the same image as the other buttons
            var image = document.createElement("img");
            image.className = "smallicon navicon";
            image.setAttribute("src", "https://2017.moodle.maynoothuniversity.ie/theme/image.php/nuim/core/1480954821/i/navigationitem");

            //Add the image, title, and link to the button
            var link = document.createElement('a');
            link.appendChild(image);
            link.appendChild(document.createTextNode(" Exam Papers"));
            link.title = "Exam Papers";
            link.href = examLink;
            link.className = "type_setting depth_2 contains_branch";

            //Add the new button to the list in the pane
            list[1].appendChild(link);
        }
    }
)();
