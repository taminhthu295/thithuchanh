class CongNhan {
    constructor(stt, hoTen, ngaySinh, diaChi, luong, chucVu) {
        this.stt = stt;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.diaChi = diaChi;
        this.luong = luong;
        this.chucVu = chucVu;
    }
}

const danhSach = [
    new CongNhan(3, "Trương Tấn C", "1999-11-11", "Huế", 2000, "Abc"),
    new CongNhan(1, "Trương Tấn A", "1997-11-11", "Quảng Nam", 2000, "Abc"),
    new CongNhan(2, "Trương Tấn B", "1998-11-11", "Đà Nẵng", 2000, "Abc")
];

function sapXepTheoHoTen(ds) {
    return [...ds].sort((a, b) => a.hoTen.localeCompare(b.hoTen, "vi"));
}

function dinhDangNgay(iso) {
    const [nam, thang, ngay] = iso.split("-");
    return `${ngay}-${thang}-${nam}`;
}

function hienThi(ds) {
    const tbody = document.getElementById("danh-sach");
    tbody.innerHTML = ds.map(cn => `
        <tr>
            <td>${cn.stt}</td>
            <td>${cn.hoTen}</td>
            <td>${dinhDangNgay(cn.ngaySinh)}</td>
            <td>${cn.diaChi}</td>
            <td>${cn.luong}</td>
            <td>${cn.chucVu}</td>
        </tr>`).join("");
}

hienThi(sapXepTheoHoTen(danhSach));
