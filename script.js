let api = "http://api.exchangeratesapi.io/v1/latest?access_key=95afd677c3d2ce4f1678cdef45fb7f46"

async function getCurrency(){
    let response = await fetch(api)
    let data = await response.json()
    console.log(data.rates);   

    let TRY = data.rates.TRY
    let USD =  TRY / data.rates.USD
    let EUR=  TRY / data.rates.EUR
    let GBP =  TRY / data.rates.GBP
    setData(USD,EUR,GBP)
}

getCurrency(api)

function setData(USD,EUR,GBP){
    const dolar = document.getElementById("dolar")
    const euro = document.getElementById("euro")
    const sterlin = document.getElementById("sterlin")
    dolar.textContent=USD.toString().slice(0,5)
    euro.textContent=EUR.toString().slice(0,5)
    sterlin.textContent=GBP.toString().slice(0,5)

}
setInterval(() => {
    getCurrency(api)
},10000);