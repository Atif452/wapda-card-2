let inputs = document.getElementById("inputs")
let pic = document.getElementById("pic")
let inputName = document.getElementById("input-name")
let inputRef = document.getElementById("input-ref")
let inputMbl = document.getElementById("input-mbl")
let inputAddress = document.getElementById("input-address")


let main=document.getElementById("main")
let img=document.getElementById("image")
let nam=document.getElementById("nme")
let refNo=document.getElementById("ref-no")
let mbl=document.getElementById("mbl-no")
let address=document.getElementById("address")

let btn=document.getElementById("btn")

btn.addEventListener("click" , function(){
    let print = document.createElement("button")
    print.innerHTML="Print"

    inputs.style.display="none"
    main.style.display="block"
    btn.style.display="none"
    console.log("hello");

    img.src=URL.createObjectURL(pic.files[0])
    nam.innerHTML=inputName.value
    refNo.innerHTML=inputRef.value
    mbl.innerHTML=inputMbl.value
    address.innerHTML=inputAddress.value

    main.after(print)

    print.addEventListener("click" , function(){
        window.print()
    })

})