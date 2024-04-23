const course = {
    courseName : "Js course",
    price : "999.99",
    courseInstructure: "Hitesh Sir"
}

// course.courseInstructure

const {courseInstructure} = course

console.log(courseInstructure);

const {courseInstructure: instructure} = course // another way to print the key value by useing object modification or Destructuring
console.log(instructure);

