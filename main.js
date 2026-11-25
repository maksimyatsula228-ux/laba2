 feature/anna
   function findTopStudent(students) {
     return students.reduce((top, student) => 
       student.grade > top.grade ? student : top
     );
   }

function calculateAverage(arr) {
   return arr.reduce((a, b) => a + b, 0) / arr.length;
 }
 develop
