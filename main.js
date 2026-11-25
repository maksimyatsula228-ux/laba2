   function findTopStudent(students) {
     return students.reduce((top, student) => 
       student.grade > top.grade ? student : top
     );
   }
