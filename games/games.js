   // 從 LocalStorage 取得題目資料
   let questions = JSON.parse(localStorage.getItem('gameQuestions')) || [];
   let currentQuestionIndex = 0;
   let currentAnswer = null;

   // 顯示當前題目
   function showQuestion() {
     if (currentQuestionIndex < questions.length) {
       const currentQuestion = questions[currentQuestionIndex];
       document.getElementById('question').textContent = currentQuestion.question;
       
       const buttons = document.querySelectorAll('.option-button');
       currentQuestion.options.forEach((option, index) => {
         buttons[index].textContent = option;
       });
       
       // 重設結果顯示
       document.getElementById('result').textContent = '';
       document.getElementById('next-button').style.display = 'none';
       currentAnswer = currentQuestion.correctAnswer;
     } else {
       // 如果題目已經做完，顯示結束訊息
       document.getElementById('question').textContent = '遊戲結束！';
       document.querySelector('.options').style.display = 'none';
       document.getElementById('next-button').style.display = 'none';
       document.getElementById('result').textContent = '感謝你的參與！';
     }
   }

   // 提交答案的功能
   function submitAnswer(optionIndex) {
     const selectedOption = questions[currentQuestionIndex].options[optionIndex];
     
     if (selectedOption === currentAnswer) {
       document.getElementById('result').textContent = '恭喜你答對了！';
     } else {
       document.getElementById('result').textContent = `很遺憾，正確答案是：${currentAnswer}`;
     }

     document.getElementById('next-button').style.display = 'inline-block';
   }

   // 顯示下一題
   function nextQuestion() {
     currentQuestionIndex++;
     showQuestion();
   }

   // 頁面載入後顯示第一題
   window.onload = showQuestion;