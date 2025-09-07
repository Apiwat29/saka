function checkResult() {
  let answers = document.querySelectorAll("input[type=radio]:checked");
  if (answers.length < 3) {
    alert("กรุณาตอบทุกข้อก่อนส่งคำตอบ");
    return;
  }

  // เก็บคะแนนแต่ละสาขา
  let scores = {
    "วิศวะ": 0,
    "คอม": 0,
    "บริหาร": 0,
    "ศิลป์": 0
  };

  answers.forEach(ans => {
    scores[ans.value]++;
  });

  // หาสาขาที่ได้คะแนนสูงสุด
  let bestMajor = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  // แสดงผล
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "คุณเหมาะกับสาขา: <span>" + bestMajor + "</span>";
}
