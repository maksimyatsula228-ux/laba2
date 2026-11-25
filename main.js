  function addLetterGrade(students) {
  return students.map(student => {
    let letter;
    if (student.grade >= 90) letter = 'A';
    else if (student.grade >= 75) letter = 'B';
    else if (student.grade >= 60) letter = 'C';
    else letter = 'F';
    return { ...student, letterGrade: letter };
  });
}
