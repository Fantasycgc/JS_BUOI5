export class Validation {
    isNumber(value, messageError, errorId) {
        const element = document.getElementById(errorId)
        const regex = /^[0-9]*$/
        if (regex.test(value)) {//value thỏa mãn điều kiện regex

            element.innerHTML = ''
            element.style.display = 'none'
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
        element.style.display = 'none'
        return true
    }
    isCharacter(value, messageError, errorId) {
        const element = document.getElementById(errorId)
        const regex = /[a-zA-Z]/g
        if (regex.test(value)) {

            element.innerHTML = ''
            element.style.display = 'none'
            return true
        }
        element.innerHTML = messageError
        element.style.display = 'inline'
        return false
    }
    isDiem(value, minScore, maxScore, messageError, errorId) {


        const element = document.getElementById(errorId)
        if (Number(value) < minScore || Number(value) > maxScore) {

            element.innerHTML = messageError
            element.style.display = 'inline'
            return false
        }
        element.innerHTML = ''
        element.style.display = 'none'
        return true
    }
    calResult_Score(diemChuan, khuVuc, doiTuong, diemMon1, diemMon2, diemMon3, errorId) {


        const element = document.getElementById(errorId)
        let messageError = ''
        const totalScore = Number(khuVuc) + Number(doiTuong) + Number(diemMon1) + Number(diemMon2) + Number(diemMon3)

        // TH value rỗng
        if (Number(diemMon1) === 0 || Number(diemMon2) === 0 || Number(diemMon3) === 0) {
            messageError = 'Bạn đã rớt. Do có môn điểm bằng 0'
            element.innerHTML = messageError
            element.style.display = 'inline'
            return false
        }
        if (Number(diemChuan) > totalScore) {
            messageError = 'Bạn đã rớt. ' + 'Tổng số điểm là: ' + totalScore
            element.innerHTML = messageError
            element.style.display = 'inline'
            return false
        }

        element.innerHTML = 'Bạn đã đậu. ' + 'Tổng số điểm là: ' + totalScore
        element.style.display = 'inline'
        return true
    }
    isPowerLevel(powerUse) {
        const level1_AMT = 500
        const level2_AMT = 650
        const level3_AMT = 850
        const level4_AMT = 1100
        const level5_AMT = 1300
        const limit_level1 = 50
        const limit_level2 = 100
        const limit_level3 = 150
        const limit_level4 = 250
        let result_AMT = 0
        if (powerUse < limit_level1) {
            result_AMT = powerUse * level1_AMT
        }
        if (powerUse >= limit_level1 && (powerUse) < limit_level2) {
            result_AMT = ((limit_level1 - 1) * level1_AMT) + ((powerUse - limit_level1) * level2_AMT)
        }
        if (powerUse >= limit_level2 && (powerUse) < limit_level3) {
            result_AMT = ((limit_level1 - 1) * level1_AMT) + ((limit_level2 - limit_level1 - 1) * level2_AMT) + ((powerUse - limit_level2) * level3_AMT)
        }
        if ((powerUse) >= limit_level3 && (powerUse) < limit_level4) {
            result_AMT = ((limit_level1 - 1) * level1_AMT) + ((limit_level2 - limit_level1 - 1) * level2_AMT) + ((limit_level3 - limit_level2 - 1) * level3_AMT) + ((powerUse - limit_level4) * level4_AMT)
        }
        if ((powerUse) >= limit_level4) {
            result_AMT = ((limit_level1 - 1) * level1_AMT) + ((limit_level2 - limit_level1 - 1) * level2_AMT) + ((limit_level3 - limit_level2 - 1) * level3_AMT) + ((limit_level4 - limit_level3 - 1) * level4_AMT) + ((powerUse - limit_level4) * level5_AMT)
        }
        return Intl.NumberFormat("vn-VN").format(result_AMT)
    }
    calPowerAMT(hoTen, powerUse, messageResult) {
        const element = document.getElementById(messageResult)
        element.innerHTML = 'Họ tên: ' + hoTen + ' ; Tiền điện: ' + this.isPowerLevel(powerUse)
        element.style.display = 'inline'
    }
    //////// Tax
    isTaxLevel(inputSalary) {

        const limit_level1 = 60e6
        const limit_level2 = 120e6
        const limit_level3 = 210e6
        const limit_level4 = 384e6
        const limit_level5 = 624e6
        const limit_level6 = 960e6
        let result_AMT = 0
        if (inputSalary <= limit_level1) {
            result_AMT = inputSalary * 5 / 100
        }
        if (inputSalary > limit_level1 && (inputSalary) <= limit_level2) {
            result_AMT = inputSalary * 10 / 100
        }
        if (inputSalary > limit_level2 && (inputSalary) <= limit_level3) {
            result_AMT = inputSalary * 15 / 100
        }
        if ((inputSalary) > limit_level3 && (inputSalary) <= limit_level4) {
            result_AMT = inputSalary * 20 / 100
        }
        if ((inputSalary) > limit_level4 && (inputSalary) <= limit_level5) {
            result_AMT = inputSalary * 25 / 100
        }
        if ((inputSalary) > limit_level5 && (inputSalary) <= limit_level6) {
            result_AMT = inputSalary * 30 / 100
        }
        if ((inputSalary) > limit_level6) {
            result_AMT = inputSalary * 35 / 100
        }
        return Intl.NumberFormat("vn-VN").format(result_AMT)
    }
    calTaxAMT(hoTen, salary, userCount, messageResult) {

        let basicSalary = 0
        const basicMinus = 4e6
        if (userCount === 0) {
            basicSalary = salary - basicMinus
        }
        if (userCount > 0) {
            basicSalary = salary - basicMinus - userCount * 1600000
        }
        const element = document.getElementById(messageResult)
        element.innerHTML = 'Họ tên: ' + hoTen + ' ; Tiền thuế thu nhập cá nhân: ' + this.isTaxLevel(basicSalary)
        element.style.display = 'inline'
    }

    /////// Cable Fee
    calculateBill(userType, channelCount, connectCount) {

        const invoice_invidual = 4.5
        const connect_invidual_fee = 20.5
        const vip_channel_invidual = 7.5
        const invoice_company = 15
        const connect_company_fee = 75
        const vip_channel_company = 50
        let result_Bill = 0
        if (userType === 'company') {
            if (connectCount > 10) {
                result_Bill = invoice_company + connect_company_fee + ((connectCount - 10) * 5) + vip_channel_company * channelCount
            }
            else {
                result_Bill = invoice_company + connect_company_fee + vip_channel_company * channelCount
            }

        }
        if (userType === 'user') {
            result_Bill = invoice_invidual + connect_invidual_fee + vip_channel_invidual * channelCount
        }
        return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(result_Bill)

    }
    calCableAMT(userType, hoTen, channelCount, connectCount, messageResult) {

        const element = document.getElementById(messageResult)
        element.innerHTML = 'Họ tên: ' + hoTen + ' ; Tiền Cáp: ' + this.calculateBill(userType, channelCount, connectCount)
        element.style.display = 'inline'
    }
}