document.getElementById("calorieForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value / 100;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;

  var calorieIntake = calculateCalorieIntake(weight, height, age, gender);
  var lipids = calculateLipids(weight);
  var carbohydrates = calculateCarbohydrates(weight);
  var proteins = calculateProteins(weight);

  document.getElementById("result").innerText =
    "Votre apport calorique journalier est de " +
    calorieIntake.toFixed(1) +
    " calories. Vous devriez consommer " +
    lipids +
    " g de lipides, " +
    carbohydrates +
    " g de glucides, et " +
    proteins +
    " g de protéines.";

  document.getElementById("calorieForm").reset();
});

function calculateCalorieIntake(weight, height, age, gender) {
  var result;
  if (gender === "male") {
    result =
      1.083 * Math.pow(weight, 0.48) * Math.pow(height, 0.5) * age - 0.13;
  } else {
    result =
      0.963 * Math.pow(weight, 0.48) * Math.pow(height, 0.5) * age - 0.13;
  }
  return result;
}

function calculateLipids(weight) {
  return weight;
}

function calculateCarbohydrates(weight) {
  return 3 * weight;
}

function calculateProteins(weight) {
  return 2 * weight;
}
