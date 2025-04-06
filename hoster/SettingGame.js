 // 載入並顯示從 LocalStorage 取出的 PIN 碼
 window.onload = function() {
    const pin = localStorage.getItem('gamePin');
    //document.getElementById('pin').textContent = pin ? pin : '未生成 PIN';
    fetch("http://notfound.local/api/getValidPins")
    .then(res => res.json())
    .then(data => {
      document.getElementById("pin").innerHTML = data[0]
    })
  }

  // 題目與選項存儲陣列
  let questions = [];

  // 加入題目的功能
  function addQuestion() {
    const questionText = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correctAnswer = document.getElementById('correct-answer').value;

    // 檢查題目與選項是否填寫完整
    if (!questionText || !option1 || !option2 || !option3 || !option4 || !correctAnswer) {
      alert("請填寫完整的題目與選項！");
      return;
    }

    fetch(`http://${location.hostname}/api/addQuestion`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        "question": questionText,
        "options": [option1, option2, option3, option4],
        "correctAnswer": correctAnswer
      })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("questionList").innerHTML = `題目:${questionText}|答案:${correctAnswer}`
  })
  .catch(err => console.log(`Error: ${err}`))
  }

function startGame(){
  location.href = `http://${location.hostname}/games/normalPlayer.html`
}