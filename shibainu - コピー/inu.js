document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.getElementById("backButton");

  const frames = [
    "/images/hover1.png",
    "/images/hover.png",
    "/images/hover2.png",
    "/images/hover.png"
  ];

   let animationInterval = null; // setInterval のIDを保存する変数

  backButton.addEventListener("mouseover", () => {
    if (animationInterval) return; // すでにループしてたら何もしない

    let frameIndex = 0;
    animationInterval = setInterval(() => {
      backButton.style.backgroundImage = `url('${frames[frameIndex]}')`;
      frameIndex = (frameIndex + 1) % frames.length; // ループ
    }, 100); // 100msごとに切り替え
  });

  backButton.addEventListener("mouseout", () => {
    clearInterval(animationInterval); // ループを止める
    animationInterval = null;
    backButton.style.backgroundImage = `url('${frames[0]}')`; // 最初の画像に戻す
  });

  // Optional: クリックで一番上へスクロール
  backButton.addEventListener("click", () => {
    window.location.href = "index.html"; 
  });
});
