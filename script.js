// ==========================================
// 互動功能 1：生活靈感切換器 (用於 lifestyle.html)
// 原理：根據點擊按鈕傳入的參數，動態修改 HTML 元素的文字內容
// ==========================================
function showGuide(category) {
    // 取得網頁上的圖片、文字與連結元素
    const imgEl = document.getElementById("guide-img");
    const titleEl = document.getElementById("guide-title");
    const descEl = document.getElementById("guide-desc");
    const tipEl = document.getElementById("guide-tip");
    const linksBox = document.getElementById("guide-links");
    const igEl = document.getElementById("guide-ig");
    const linkEl = document.getElementById("guide-link");

    // 點擊任一按鈕後，顯示左側圖片與下方連結區塊
    imgEl.style.display = "block";
    linksBox.style.display = "flex";

    // 根據使用者點擊的類別，更新圖片、文字與店家連結
    if (category === "cafe") {
        igEl.style.display = "inline-block"; // 顯示 IG 按鈕
        imgEl.src = "./src/img_4.jpg";
        imgEl.alt = "月里つきさと 咖啡廳照片";
        titleEl.textContent = "☕ 推薦去處：月里つきさと";
        descEl.textContent = "店裡空間雖然小小的，但是環境很舒適。重點是咖啡跟甜點的表現都很不錯，是偏向展現原本的味道，是很純粹、沒有過多調味的感受！";
        tipEl.textContent = "推薦指數：★★★★☆（下午時段就會需要來卡位了）";
        igEl.href = "https://www.instagram.com/kafetsukisato?exln=NnUyeWdlamtmajRu";
        igEl.textContent = "📸 月里 IG";
        linkEl.href = "https://maps.app.goo.gl/3cTyGtFf6LBMhDAz9?g_st=ic";
        linkEl.textContent = "📍 店家地圖";
    } else if (category === "food") {
        igEl.style.display = "inline-block"; // 顯示 IG 按鈕
        imgEl.src = "./src/img_5.jpg";
        imgEl.alt = "宵夜美食照片";
        titleEl.textContent = "🍜 推薦去處：深夜未歸";
        descEl.textContent = "每次學校活動或是考試結束的時候，時間都已經滿晚的了。這一家從早餐到宵夜都有供應，和朋友們一起衝這家店吃宵夜是最幸福的時刻，份量蠻夠的也不太傷荷包！";
        tipEl.textContent = "★★★★★（我真的好愛喝阿華田）";
        igEl.href = "https://www.instagram.com/late_at_night1714?mdxt=ZDhobDFhYXFieG5t";
        igEl.textContent = "📸 店家 IG";
        linkEl.href = "https://maps.app.goo.gl/smwk5kWAdPDk6M8EA?g_st=ic";
        linkEl.textContent = "📍 店家地圖";
    } else if (category === "relax") {
        igEl.style.display = "none"; // 隱藏 IG 按鈕，只留一個景點地圖按鈕
        imgEl.src = "./src/img_6.jpg";
        imgEl.alt = "放空景點照片";
        titleEl.textContent = "🎧 推薦去處：大稻埕碼頭";
        descEl.textContent = "生活當中難免也會有很多讓人覺得困惑跟迷失的時候，這時候就會需要一個地方可以走走逛逛。大稻埕我覺得是很不錯的選擇，傍晚時分可以看夕陽休息一下，也可以在附近找到街邊小吃。整體氛圍很放鬆！";
        tipEl.textContent = "★★★★☆（傍晚看夕陽的氣氛最好）";
        linkEl.href = "https://maps.app.goo.gl/oqRpAiJb5HEoqgMk6?g_st=ic";
        linkEl.textContent = "📍 景點地圖";
    }
}

// 第二個互動功能：日常生活照點擊放大燈箱 (Lightbox)
function openLightbox(card) {
    // 1. 從被點擊的卡片內部抓出圖片路徑、標題與說明文字
    const imgSrc = card.querySelector("img").src;
    const titleText = card.querySelector("h4").textContent;
    const descText = card.querySelector("p").textContent;

    // 2. 將資料填入燈箱視窗的對應元素中
    document.getElementById("lightbox-img").src = imgSrc;
    document.getElementById("lightbox-title").textContent = titleText;
    document.getElementById("lightbox-desc").textContent = descText;

    // 3. 將燈箱從 display: none 切換為 flex 顯示並置中
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox(event) {
    // 只有點到「深色背景」或「右上角 ✕ 按鈕」時才關閉，避免點到照片本身就誤關
    if (event.target.id === "lightbox" || event.target.className === "lightbox-close") {
        document.getElementById("lightbox").style.display = "none";
    }
}