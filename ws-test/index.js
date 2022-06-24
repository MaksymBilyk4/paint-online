const btn = document.getElementById("ws-btn");
const socket = new WebSocket('ws://localhost:5000/');

socket.onopen = () => {
    socket.send(JSON.stringify({
        method: "connection",
        id: 1,
        username: "Max",
    }));}

socket.onmessage = (event) => {
    console.log('Уведомление с сервера: ', event.data);
}

btn.onclick = () => {
    socket.send(JSON.stringify({
        message: "hello server",
        method: "message",
        id: 1,
        username: "Max",
    }));
}