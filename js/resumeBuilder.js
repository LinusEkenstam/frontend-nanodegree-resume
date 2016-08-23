/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // var companyName = "audacity"
 //
 // var newCompanyName =
 //     companyName.replace("au","U")
 //
 //
 // var email = "linus@gmail.com";
 //
 // var newEmail =
 //     email.replace("gmail","linusekenstam")
 //
 // console.log(email);
 // console.log(newEmail);
 // 
 // var awesomeThoughts =
 //     "I am Linus and I am AWESOME!";
 //
 // var funThoughts =
 //     awesomeThoughts.replace("AWESOME!", "FUN");
 //
 // console.log(funThoughts);
 // $("#main").append(funThoughts);


 var name = "Linus Ekenstam"

 var role = "Designer"

 var formattedName =
     HTMLheaderName.replace("%data%", name);

 var formattedRole =
     HTMLheaderRole.replace("%data%", role);


 console.log(formattedName);
 console.log(formattedRole);

 $("#main").append(formattedName);
 $("#main").append(formattedRole);

 var skills = ["awesomeness", "programming", "Design", "Prototyping"];
 $("#main").append(skills);
