export class Validation {
    isNumber(value, messageError, errorId) {
        const element = document.getElementById(errorId)
        const regex = /^[0-9]*$/
        if (regex.test(value)) {//value thỏa mãn điều kiện regex

            element.innerHTML = ''
            element.style.direction = 'none'
            return true
        }
        element.innerHTML = messageError
        element.style.display = 'inline'
        return false
    }
    required(value, messageError, errorId) {
        const element = document.getElementById(errorId)
        // TH value rỗng
        if (value.trim() == '') {

            element.innerHTML = messageError
            element.style.display = 'inline'
            return false
        }
        element.innerHTML = ''
        element.style.direction = 'none'
        return true
    }
    isDiemChuan(value, messageError, errorId) {

        const element = document.getElementById(errorId)
        if (value * 1 >= 20 || value * 1 <= 30) {

            element.innerHTML = messageError
            element.style.display = 'inline'
            return false
        }
        element.innerHTML = ''
        element.style.direction = 'none'
        return true
    }
}