// Câu 2: Kiểm tra một số nguyên dương có phải là số hoàn hảo hay không
// (Số hoàn hảo là số có tổng các ước nhỏ hơn nó bằng chính nó. VD: 6 = 1 + 2 + 3)

function isPerfectNumber(n) {
    if (n <= 1) {
        return false;
    }

    let tongUoc = 0;

    // Tìm và cộng các ước nhỏ hơn n
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            tongUoc += i;
        }
    }

    return tongUoc === n;
}

// Chạy thử kiểm tra các số:
let soCanKiemTra = 28;
if (isPerfectNumber(soCanKiemTra)) {
    console.log(soCanKiemTra + " là số hoàn hảo.");
} else {
    console.log(soCanKiemTra + " KHÔNG phải là số hoàn hảo.");
}
