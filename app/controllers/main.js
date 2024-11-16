import { StudentMNG } from '../models/StudentMNG.js'
import { Validation } from '../models/Validation.js'
const studentMNG = new StudentMNG()
const validation = new Validation()
const getStudentInfo = () => {

    const studentElements = document.querySelectorAll('#studentForm input, #studentForm select')
    console.log("studentElements: ", studentElements);
    let monAn = {}

    studentElements.forEach((studentElement) => {
        const { id, value } = studentElement
        monAn[id] = value
            ;

    })
    // return new StudentMNG(monAn.inputScore)
    // return new StudentMNG(studentInfo.)
}
getStudentInfo()


