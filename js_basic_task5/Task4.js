function calculateAverageGrade(math, literature, physics) {
  const average = (math + literature + physics) / 3;

  if (average >= 90) {
    return "Very good performance";
  } else if (average >= 70) {
    return "Good performance";
  } else if (average >= 50) {
    return "Medium performance";
  } else {
    return "Low performance";
  }
}

console.log(calculateAverageGrade(82, 88, 92));
console.log(calculateAverageGrade(75, 80, 70));
console.log(calculateAverageGrade(63, 55, 61));
console.log(calculateAverageGrade(45, 40, 35));
