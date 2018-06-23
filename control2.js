	
	function show_student_data(){

		

		var student_obj = create_student() ;
		
		//Auto matic global scope with no var prefix
		new_student_input = create_student()  ;
		
		//Tabulate student data
		var output = "<form name=\"data\">" ;
		output += "<table class= \" courses-table\">" ;
		output += "<th> Course Code </td>" ;
		output += "<th> Course Unit </td>" ;
		output += "<th> Course Score </td>" ;
		for(var i = 0 ; i < student_obj.courses.length; i++ ){
			output += "<tr>" ;
			output += "<td>" + student_obj.courses[i].title + "</td>" ;
			output += "<td>" + student_obj.courses[i].unit + "</td>" ;
			output += "<td >" + 
				//"<select name=\"grade\" class=\"scores\"><option> </option> <option>A </option> <option> B </option> <option> C</option><option> D</option><option> F </option></select>"
                "<input typt=\"text\" class=\"scores\" />"
			 + "</td>" ;

			output += "</tr>" ;
		}
		output += "</table>" ;
		output += "</form>";

		//Display student data
		document.getElementById("courses").innerHTML = output + "<br />" ;

		// Also display button for cgpa calculation
		document.getElementById("calculate").innerHTML ="<input name=\"display_result\" type=\"button\" value=\"CGPA\" onclick=\"calculate_cgpa()\">" + "<br />" ;
	}
	
	function calculate_cgpa(){
		var student_all_courses = new Array() ;

		var grade_class = document.getElementsByClassName("scores") ;
		
		for(var i=0; i < grade_class.length; i++){

			 student_all_courses[i] = new course(new_student_input.courses[i].title , new_student_input.courses[i].unit, grade_class[i]["value"]) ;
		}

		//console.log(student_all_courses) ;
		// console.log( get_cgpa(student_all_courses).toFixed(2)) ;
        
		var cgpa = get_cgpa(student_all_courses).toFixed(2) ;
		
		document.getElementById("cgpa").innerHTML = "CGPA : " + cgpa + "<br />" +  "ACADEMIC STATUS : " + get_class_by_cgpa(cgpa).toUpperCase() ;
		
	}

    function get_class_by_cgpa(cgpa){
        var cgpa ;
        var student_class ;
        if(cgpa >= 4.5 && cgpa <= 5){
            student_class = "First class" ;
        }else if(cgpa >= 3.5 && cgpa < 4.5){
            student_class = "Second Class Upper" ;
        }else if(cgpa >= 2.5 && cgpa < 3.5 ){
            student_class = "second class lower" ;
        }else if(cgpa >= 1 && cgpa < 2.5){
            student_class = "Third class " ;
        }else{
            student_class = "Withdraw" ;
        }
        return student_class ;
    }