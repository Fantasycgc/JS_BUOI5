import { StudentMNG } from '../models/StudentMNG.js'
import { Validation } from '../models/Validation.js'
const studentMNG = new StudentMNG()
const validation = new Validation()
const getStudentInfo = () => {

    const studentElements = document.querySelectorAll('#studentForm input, #studentForm select')
    console.log("studentElements: ", studentElements);
    let student = {}


    studentElements.forEach((studentElement) => {
        const { id, value } = studentElement
        student[id] = value
    })
    // console.log("student: ", student);
    return new StudentMNG(student.diemChuan, student.khuVuc, student.doiTuong, student.diemMon1, student.diemMon2, student.diemMon3)
}
document.getElementById('studentForm').onsubmit = (ev) => {
    ev.preventDefault()
    const studentInfo = getStudentInfo()
    let isValid = true
    isValid &= validation.required(studentInfo.diemChuan, 'Bạn chưa nhập điểm chuẩn', 'txtResult') && validation.isNumber(studentInfo.diemChuan, 'Điểm chuẩn phải là số', 'txtResult')
        && validation.isDiemChuan(studentInfo.diemChuan, 'Điểm chuẩn phải từ 20 đến 30', 'txtResult')

}


