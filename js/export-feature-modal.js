// 顯示密碼輸入框
function showPasswordDialog() {
    document.getElementById('passwordDialog').style.display = 'flex';
}

// 關閉密碼輸入框
function closePasswordDialog() {
    document.getElementById('passwordDialog').style.display = 'none';
}

// 確認密碼並執行後續操作
function confirmPassword() {
    var password = document.getElementById('passwordInput').value;

    // 假設密碼為 "123456" 進行簡單驗證
    if (password === "123456") {
        alert("密碼正確，開始匯出資料...");
        // 在此處觸發 Excel 匯出功能，這裡是示範的邏輯
        window.location.href = 'path/to/excel/export'; // 替換為實際的匯出邏輯
        closePasswordDialog();
    } else {
        alert("密碼錯誤，請重新輸入！");
    }
}
