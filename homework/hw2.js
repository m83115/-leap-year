
// BMI的計算:
// BMI的定義是體重除以身高的平方，以公斤/平方公尺為單位表示
// 我先設定
// 身高 = height
// 體重 = weight


function bmiCalculator(height, weight) {
  var height = height / 100
  var weight
  var bmi = weight / (height ** 2)
  return Math.floor(bmi * 10) / 10 
}
  // 身高 170 公分、體重 65 公斤
  console.log(bmiCalculator(170, 65))  // 印出 22.4