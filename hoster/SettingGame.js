 // 載入並顯示從 LocalStorage 取出的 PIN 碼
 window.onload = function() {
    const pin = localStorage.getItem('gamePin');
    //document.getElementById('pin').textContent = pin ? pin : '未生成 PIN';
    fetch("http://notfound.local/getValidPins")
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

    // 儲存題目
    const question = {
      question: questionText,
      options: [option1, option2, option3, option4],
      correctAnswer: correctAnswer
    };

    // 加入到題目陣列
    questions.push(question);

    // 更新題目列表
    updateQuestionList();

    // 清空輸入欄位
    document.getElementById('question').value = '';
    document.getElementById('option1').value = '';
    document.getElementById('option2').value = '';
    document.getElementById('option3').value = '';
    document.getElementById('option4').value = '';
    document.getElementById('correct-answer').value = '';
  }

  // 更新題目列表顯示
  function updateQuestionList() {
    const questionList = document.getElementById('questionList');
    questionList.innerHTML = '';

    questions.forEach((q, index) => {
      const li = document.createElement('li');
      li.textContent = `題目: ${q.question} | 正確答案: ${q.correctAnswer}`;
      questionList.appendChild(li);
    });
  }

  // 開始遊戲功能（可以進行遊戲邏輯）
  function startGame() {
    // 將題目儲存在 LocalStorage 或傳送至後端
    localStorage.setItem('gameQuestions', JSON.stringify(questions));

    // 提示開始遊戲
    alert("遊戲開始！");
  }
  function startGame(){
    window.location.href="/games/index.html";
  }