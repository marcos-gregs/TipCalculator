
export const FirstPromotion = () => {
   let userValue = VerificationFields(5)
   userValue()
}

export const SecondPromotion = () => {
    let userValue = VerificationFields(10)
    userValue()
}

export const TreePromotion = () => {
    let userValue = VerificationFields(15)
   userValue()
}

export const FourtPromotion = () => {
    let userValue = VerificationFields(25)
    userValue()
}

export const FivePromotion = () => {
   let userValue = VerificationFields(50)
   userValue()
}

export const ResetAll = () =>{

    let userValue =document.getElementById('BillInput')
    let QtdPeople = document.getElementById("InputPeople")
    let SendTotalTip = document.getElementById('TotalPerson')
    let SendTipAmount = document.getElementById('TipPerson')
    let CustomPrice = document.getElementById('CustomPrice')

    userValue.value = ''
    QtdPeople.value = ''
    CustomPrice.value = ''
    SendTotalTip.innerText = `$ 0.0`
    SendTipAmount.innerText = `$ 0.0` 
}

export const CustomPromotion = () =>{
    let CustomPrice = Number.parseFloat(document.getElementById('CustomPrice').value)
    VerificationFields(CustomPrice)

}

function VerificationFields(CustomPrice) {
    let userValue = document.getElementById('BillInput')
    let QtdPeople = document.getElementById("InputPeople")
    let BillInput = document.querySelector('.BillError')
    let PeopleInput = document.querySelector('.PeopleError')
    if(userValue.value === ''|| userValue.value === '0' || QtdPeople.value ===''||QtdPeople.value ==='0'){
        if(userValue.value === ''|| userValue.value === '0' ){
            BillInput.innerText = "Can't be zero or null"
        }if(QtdPeople.value ===''|| QtdPeople.value ==='0') {
            PeopleInput.innerText = "Can't be zero or null"
        } else {
            BillInput.innerText = "Can't be zero or null"
            PeopleInput.innerText = "Can't be zero or null"
        }
        
    }else{
        BillInput.innerText = ""
        PeopleInput.innerText = ""
        let action = CalcTip(CustomPrice)
        action()
    }
}

function CalcTip(value){
    let userValue = Number.parseFloat(document.getElementById('BillInput').value)
   let QtdPeople = Number.parseFloat(document.getElementById("InputPeople").value)
   let TotalTip = (value * userValue)/100
   let Tip = TotalTip/QtdPeople
   let SendTotalTip = document.getElementById('TotalPerson')
   SendTotalTip.innerText = `$${TotalTip.toFixed(2)}`
   let SendTipAmount = document.getElementById('TipPerson')
   SendTipAmount.innerText = `$${Tip.toFixed(2)}`
}