	/*
	App: Lite GPcheck ;
	Author: Lightworth Computing
	Created: Tuesday, 27th March, 2018 ;
	For: GPLite is a Web Application from Lightworth Computing
	created for undergraduates for fast, accurate and seemless determination
	of GPA(Grade Point Average).

	*/
	
	
	/*
	Method: Object Oriented Javascript ;
	Every student has a name, dept,and level hence 
		student(name, dept, level)

	The dept and level are used to assign students to their courses

	We have not considered ,course assignment based on semester
	and pre-requisit ,errors

	*/
	function student(name, dept, level){
		this.name = name ;
		this.dept = dept ;
		this.level = level ;

		this.courses = assign_courses(this.dept,this.level) ;
		//this.course_list = list_of_courses(this.courses) ;
		this.num_of_courses = this.courses.length ;
		this.scores = new Array() ;
	}
	function create_student(){

		var student_name = document.new_student.student_name.value ;
		var dept = document.new_student.dept.value ;
		var level = document.new_student.level.value ;

		// create a new student object
		var student_obj = new student(student_name, dept,level) ;
		return student_obj ;
	}
	function list_of_courses(all_courses){
		//Takes all courses(title, unit, score)
		// and retrives the ARRAY of course_register object containing
		//course title and unit as object
		var all_courses;
		var course_list = new Array();
		for(var i = 0;i < all_courses.length; i++){
			var one_course = new course_register(all_courses[i].title, all_courses[i].unit) ;
			course_list[i] = one_course ;
		}
		return course_list ;
	}
	
	function assign_courses(dept, level){
		//takes the dept and level to return
		//a list of courses for that level
		var dept , level, all_courses ;
		switch(dept){
			case "PET" :
			if(level == "yr1"){
				//For any course assigned it is assumed 
				//that the student has a score of 0
				//until otherwise defined
				// also a new course_reg could be created 
				//like course_reg(title, unit){}
				// Also a method to separate 1st and 2nd semester courses
				all_courses = new Array(
					new course("PET 101", 4, 0),
					new course("PET 103", 3,0),
					new course("PET 105", 3,0),
					new course("PET 107", 1,0),
					new course("GST 105", 2,0)
					) ;
			}else if(level == "yr2"){
				all_courses = new Array(
					new course("PET 201", 4, 0),
					new course("PET 203", 3,0),
					new course("PET 205", 3,0),
					new course("PET 207", 1,0),
					new course("GST 205", 2,0)
					) ;
			}else if(level == "yr3"){
				all_courses = new Array(
					new course("PET 301", 4, 0),
					new course("PET 303", 3,0),
					new course("PET 305", 3,0),
					new course("PET 307", 1,0),
					new course("GST 305", 2,0)
					) ;
			}else if(level == "yr4"){
				all_courses = new Array(
					new course("PET 401", 4, 0),
					new course("PET 403", 3,0),
					new course("PET 405", 3,0),
					new course("PET 407", 1,0),
					new course("GST 405", 2,0)
					) ;
			}else if(level == "yr5"){
				all_courses = new Array(
					new course("PET 501", 4, 0),
					new course("PET 503", 3,0),
					new course("PET 505", 3,0),
					new course("PET 507", 1,0),
					new course("GST 505", 2,0)
					) ;
			}
			break;

			//second dept
			case "CHE" :
			if(level == "yr1"){
				all_courses = new Array(
					new course("CHE 101", 4, 0),
					new course("CHE 103", 3,0),
					new course("CHE 105", 3,0),
					new course("CHE 107", 1,0),
					new course("GST 105", 2,0)
					) ;
			}else if(level == "yr2"){
				all_courses = new Array(
					new course("CHE 201", 4, 0),
					new course("CHE 203", 3,0),
					new course("CHE 205", 3,0),
					new course("CHE 207", 1,0),
					new course("GST 205", 2,0)
					) ;
			}else if(level == "yr3"){
				all_courses = new Array(
					new course("CHE 301", 4, 0),
					new course("CHE 303", 3,0),
					new course("CHE 305", 3,0),
					new course("CHE 307", 1,0),
					new course("GST 305", 2,0)
					) ;
			}else if(level == "yr4"){
				all_courses = new Array(
					new course("CHE 401", 4, 0),
					new course("CHE 403", 3,0),
					new course("CHE 405", 3,0),
					new course("CHE 407", 1,0),
					new course("GST 405", 2,0)
					) ;
			}else if(level == "yr5"){
				all_courses = new Array(
					new course("CHE 501", 4, 0),
					new course("CHE 503", 3,0),
					new course("CHE 505", 3,0),
					new course("CHE 507", 1,0),
					new course("GST 505", 2,0)
					) ;
			}
			break;

			default:
			all_courses = new course("No course selected", 0, 0) ;

		}//switch

		return all_courses ;
	}// function

	
	function course(title, unit, score){
		this.title = title ;
		this.unit = unit ;
		this.score = score ;
		this.grade = get_grade(this.score) ;
		this.grade_point = get_grade_point(this.unit, this.grade) ;
	}

	function course_grade(title, unit, grade){
		this.title = title ;
		this.unit = unit ;
		this.grade = grade ;
		this.grade_point = get_grade_point(this.unit,this.grade) ;
		
	}
	
	
	function get_tnu(all_courses){
		var tnu = 0 ; 
		var all_courses ;
		for(var i = 0; i < all_courses.length; i++){
			tnu += all_courses[i].unit ;
		}
		return tnu ;
	}
	function get_tgp(all_courses){
		var tgp = 0 ; 
		var all_courses ;
		for(var i = 0; i < all_courses.length; i++){
			tgp += all_courses[i].grade_point ;
		}
		return tgp ;
	}
	function get_cgpa(all_courses){
		var all_courses ;
		var tnu = 0 ; 
		var tgp = 0 ;
		for(var i = 0; i < all_courses.length; i++){
			tnu += all_courses[i].unit ;
			tgp += all_courses[i].grade_point ;
		}
		return tgp/tnu ;
    }
	
   
	function get_grade_point(unit, grade){
			var unit, grade ;
			switch(grade){
				//var grade_point ;
				case "A":
				grade_point = unit * 5 ;
				break;

				case "B":
				grade_point = unit * 4 ;
				break;

				case "C":
				grade_point = unit * 3 ;
				break;

				case "D":
				grade_point = unit * 2 ;
				break;

				default:
				grade_point = 0 ;

			}

			return grade_point ;
		}
	function grade_point(grade){
		var grade, gp;
		switch (grade){
		case "A" :
		 gp = 5 ;
		break ;

		case "B" :
		 gp = 4 ;
		break ;

		case "C" :
		 gp = 3 ;
		break ;

		case "D" :
		 gp = 2 ;
		break ;

		default:
		gp = 0 ;
		}
		return gp ;
	}

	function get_grade(score){
	
		var score, grade ;

		if(score > 69){
		grade = "A" ;
		}else if(score > 59 && score < 70){
			grade = "B" ;
		}else if(score > 49 && score < 60){
			grade = "C" ;
		}else if(score > 39 && score < 50){
			grade = "D" ;
		}else{
			grade = "F" ;
		}

		return grade ;
	}
		
	





/*
	var s = new student("Chibueze","PET", "yr1") ;
	document.write("Student Name = " + s.name + "<br />") ;
	document.write("Student Dept = " + s.dept + "<br />") ;
	document.write("Student Level= " + s.level + "<br />") ;
	document.write("Student Courses = " + s.courses + "<br />") ;
	document.write("Student Course List = " + s.course_list + "<br />") ;
	document.write("Student Num of courses = " + s.num_of_courses + "<br />") ;
	document.write("Student TNU = " + get_tnu(s.courses) + "<br />") ;
	document.write("Student TGP = " + get_tgp(s.courses) + "<br />") ;
	document.write("Student GPA = " + get_cgpa(s.courses) + "<br />") ;

	*/

	//student();
	/*
	var c = new course("web" , 4, 39) ;
	document.write( c.grade + "<br />");
	document.write( c.grade_point + "<br />");
	document.write( c.title+ "<br />");
	document.write( c.unit+ "<br />");

	document.write( get_tnu(all_courses)+ "<br />");
	document.write("TGP" +  get_tgp(all_courses)+ "<br />");
	document.write( get_cgpa(all_courses)+ "<br />");
	//document.write( get_grade(10));
	*/


