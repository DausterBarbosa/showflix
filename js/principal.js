function message(){
    const element = document.querySelector(".showmessage");
    console.log(element.innerHTML)
    setTimeout(() => {
        element.innerHTML = "<p>Não vai até o show?</p>";
    }, 3000);
    setTimeout(() => {
        element.innerHTML = "<p>Sem problemas</p>"
    }, 7000);
    setTimeout(() => {
        element.innerHTML = "<p>Levamos o show até você</p>"
    }, 10000);
    setTimeout(() => {
        element.innerHTML = `<div class="panel">
        <p>Assine o ShowFlix hoje mesmo</p>
        <p> Informe seu email para criar ou reiniciar sua assinatura</p>
        <div class="input">
            <input type="email" placeholder="E-mail">
            <button>Vamos lá</button>
        </div>
    </div>`
    }, 14000);
}