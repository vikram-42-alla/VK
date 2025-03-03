const input = document.getElementById("message");
const button = document.querySelector(".button-send");
const container = document.querySelector(".msg-box");
const buttondel=document.querySelector('.button-delete');
const chatbox=document.querySelector('.chat-box')
button.addEventListener("click", async () => {
    const userInput = input.value.trim();
    if (!userInput) return;

    const userMessage = document.createElement("p");
    userMessage.innerHTML = `<b>${userInput}</b>`;
    userMessage.classList.add("para");
    container.appendChild(userMessage);
    container.scrollTop = container.scrollHeight;

    input.value = "";

    const botReply = document.createElement("p");
    botReply.classList.add("para1");
    botReply.innerHTML = `<b>...</b>`;
    container.appendChild(botReply);
    container.scrollTop = container.scrollHeight;

    try {
        const response = await fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput }),
        });

        if (!response.ok) throw new Error("AI did not respond");

        const data = await response.json();
      setTimeout(  botReply.innerHTML = `<b>${data.response}</b>`,1000);
    } catch (error) {
        botReply.innerHTML = `<b>AI not responded</b>`;
    }

    container.scrollTop = container.scrollHeight;
});
   

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") button.click();
});
buttondel.addEventListener("click",()=>{
container.textContent='';
})
