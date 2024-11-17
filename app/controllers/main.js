import { StudentMNG } from '../models/StudentMNG.js'
import { Validation } from '../models/Validation.js'
import { ElectricMNG } from '../models/ElectricMNG.js'
import { TaxMNG } from '../models/TaxMNG.js'
import { CableMNG } from '../models/CableMNG.js'

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

    if (!(validation.required(studentInfo.diemChuan, 'Bạn chưa nhập điểm chuẩn', 'txtResult') && validation.isNumber(studentInfo.diemChuan, 'Điểm chuẩn phải là số, điểm chuẩn phải là số dương', 'txtResult')
        && validation.isDiem(studentInfo.diemChuan, 0, 30, 'Điểm chuẩn phải từ 0 đến 30', 'txtResult'))) return
    if (!(validation.required(studentInfo.diemMon1, 'Bạn chưa nhập điểm môn 1', 'txtResult') && validation.isNumber(studentInfo.diemMon1, 'Điểm môn phải là số, điểm số không phải số âm', 'txtResult')
        && validation.isDiem(studentInfo.diemMon1, 0, 10, 'Điểm môn phải từ 0 đến 10', 'txtResult'))) return
    // Điểm Môn 2
    if (!(validation.required(studentInfo.diemMon2, 'Bạn chưa nhập điểm môn 2', 'txtResult') && validation.isNumber(studentInfo.diemMon2, 'Điểm môn phải là số, điểm số không phải số âm', 'txtResult')
        && validation.isDiem(studentInfo.diemMon2, 0, 10, 'Điểm môn phải từ 0 đến 10', 'txtResult'))) return
    // Điểm Môn 3
    if (!(validation.required(studentInfo.diemMon3, 'Bạn chưa nhập điểm môn 3', 'txtResult') && validation.isNumber(studentInfo.diemMon3, 'Điểm môn phải là số, điểm số không phải số âm', 'txtResult')
        && validation.isDiem(studentInfo.diemMon3, 0, 10, 'Điểm môn phải từ 0 đến 10', 'txtResult'))) return
    validation.calResult_Score(studentInfo.diemChuan, studentInfo.khuVuc, studentInfo.doiTuong, studentInfo.diemMon1, studentInfo.diemMon2, studentInfo.diemMon3, 'txtResult')
}

// Get information Power
const getPowerInfo = () => {

    const powerElements = document.querySelectorAll('#powerForm input')

    let power = {}


    powerElements.forEach((powerElement) => {
        const { id, value } = powerElement
        power[id] = value
    })
    // console.log("student: ", student);
    return new ElectricMNG(power.inputName, power.inputKW)
}
document.getElementById('powerForm').onsubmit = (ev) => {

    ev.preventDefault()
    const powerInfo = getPowerInfo()
    if (!(validation.required(powerInfo.inputName, 'Bạn chưa điền tên', 'txtElecBill')))
        return
    if (!(validation.required(powerInfo.inputKW, 'Bạn chưa điền số điện sử dụng', 'txtElecBill') && validation.isNumber(powerInfo.inputKW, 'Số KW phải là số dương', 'txtElecBill')))
        return
    validation.calPowerAMT(powerInfo.inputName, Number(powerInfo.inputKW), 'txtElecBill')
}

// Get information Tax
const getTaxInfo = () => {
    const taxElements = document.querySelectorAll('#taxForm input')
    let tax = {}
    taxElements.forEach((taxElement) => {
        const { id, value } = taxElement
        tax[id] = value
    })
    return new TaxMNG(tax.inputName2, tax.inputSalary, tax.inputUser)
}
document.getElementById('taxForm').onsubmit = (ev) => {

    ev.preventDefault()
    const taxInfo = getTaxInfo()
    if (!(validation.required(taxInfo.inputName2, 'Bạn chưa điền tên', 'txtTax') && validation.isCharacter(taxInfo.inputName2, 'Tên phải là ký tự', 'txtTax')))
        return
    if (!(validation.required(taxInfo.inputSalary, 'Bạn điền thu nhập', 'txtTax') && validation.isNumber(taxInfo.inputSalary, 'Tiền lương không đúng định dạng', 'txtTax')))
        return
    if (!(validation.isNumber(taxInfo.inputUser, 'Giá trị nhập không đúng định dạng', 'txtTax')))
        return
    validation.calTaxAMT(taxInfo.inputName2, Number(taxInfo.inputSalary), Number(taxInfo.inputUser), 'txtTax')
}

// Get information Cable
const getCableInfo = () => {
    const cableElements = document.querySelectorAll('#cableForm input,#cableForm select')
    let cable = {}
    cableElements.forEach((cableElement) => {
        const { id, value } = cableElement
        cable[id] = value
    })
    return new CableMNG(cable.selCustomer, cable.inputID, cable.inputChanel, cable.inputConnect)
}
document.getElementById('cableForm').onsubmit = (ev) => {

    ev.preventDefault()
    const cableInfo = getCableInfo()
    if (!(validation.required(cableInfo.selCustomer, 'Bạn chưa chọn loại khách hàng', 'txtNet')))
        return
    if (!(validation.required(cableInfo.inputID, 'ID Khách Hàng Không Được Rỗng', 'txtNet')))
        return

    validation.calCableAMT(cableInfo.selCustomer, cableInfo.inputID, cableInfo.inputChanel, cableInfo.inputConnect, 'txtNet')
}



