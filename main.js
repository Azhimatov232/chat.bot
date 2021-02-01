const button = document.querySelector("button")
const input = document.querySelector("#text")
const chat = document.querySelector(".chat")
input.focus()

button.onclick = (e) => {
    
    const message = input.value
    if (message.trim().length >0){
    const spanSend = document.createElement("span")
    spanSend.className = "send"
    spanSend.innerText = message
    chat.appendChild(spanSend)
    input.value = ""

      if (message === "kandaysyn"){
        const spanReceive = document.createElement("span")
        spanReceive.className = "receive"
        spanReceive.innerText = "typing..."
        chat.appendChild(spanReceive)
        setTimeout(() => {
            spanReceive.innerText = "Jaksy ozun?"
        },2000)
      }else if (message === "jakshy men dagy") {
        const spanReceive = document.createElement("span")
        spanReceive.className = "receive"
        spanReceive.innerText = "typing..."
        chat.appendChild(spanReceive)
        setTimeout(() => {
            spanReceive.innerText = "saat kancha boldu ?"
        },2000)
      }



    }
}