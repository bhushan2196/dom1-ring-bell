const data = [
  {
    grade: "V",
    students: [
      { name: "Nrupul", marks: [10, 20, 30] },
      { name: "Prateek", marks: [20, 30, 40] },
    ],
  },
  {
    grade: "VI",
    students: [
      { name: "Aman", marks: [10, 20, 30] },
      { name: "Albert", marks: [20, 30, 40] },
    ],
  },
  {
    grade: "VII",
    students: [
      { name: "Yogesh", marks: [10, 20, 30] },
      { name: "Sandhya", marks: [20, 30, 40] },
    ],
  },
];

function checkTopper(classData) {
  let studentName = "";
  let bag = 0;
  let temp = 0;
  classData.students.map((student) => {
    student.marks.map((mark) => {
      temp += mark;
    });
    if (bag < temp) {
      bag = temp;
      temp = 0;
      studentName = student.name;
    }
  });

  let str = `${classData.grade}-${studentName}-${bag} `;
  console.log(str);
}

data.map((std) => checkTopper(std));
