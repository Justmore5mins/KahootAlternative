window.onload = function() {
    const pin = localStorage.getItem('gamePin');
    document.getElementById('pin').textContent = pin ? pin : '未生成 PIN';
}

  function startGame() {
    alert("遊戲開始！");
  }