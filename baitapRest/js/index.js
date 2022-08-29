let calcGPA = (...markList) => {
    return markList.reduce((prePoint, curPoint) => prePoint + curPoint, 0) / markList.length;
}

document.querySelector("#btnKhoi1").onclick = () => {
    let diemToan = +document.querySelector("#inpToan").value;
    let diemLy = +document.querySelector("#inpLy").value;
    let diemHoa = +document.querySelector("#inpHoa").value;
    document.querySelector("#tbKhoi1").innerHTML = "Điểm trung bình: " + calcGPA(diemToan, diemLy, diemHoa);
}

document.querySelector("#btnKhoi2").onclick = () => {
    let diemVan = +document.querySelector("#inpVan").value;
    let diemSu= +document.querySelector("#inpSu").value;
    let diemDia = +document.querySelector("#inpDia").value;
    let diemAnh = +document.querySelector("#inpEnglish").value;
    document.querySelector("#tbKhoi2").innerHTML = "Điểm trung bình: " + calcGPA(diemVan, diemSu, diemDia, diemAnh);
}