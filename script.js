function calcularAgua() {
  let idade = parseInt(document.getElementsByTagName("input")[0].value);
  let peso = document.getElementsByTagName("input")[1].value;
  const MsgOK =
    "<p>Para manter-se bem hidratado, lembre-se de beber cerca de <span class='spanR colorResult'>0L</span> de água por dia 🧐 <span class='emoji'></span></p>";
  const MsgNull = "<p>🚨 Coloque um Peso ou Idade válida</p>";

  if (idade === 0 || peso === 0) {
    document.getElementById("id-result").innerHTML = MsgNull;
    document.getElementById("id-result").style =
      "display:block; opacity: 1; transition: opacity 1s ease-out;";
  } else {
    if (idade != 0 && idade <= 17) {
      qtdAgua = 40;
    } else if (18 <= idade && idade <= 55) {
      qtdAgua = 35;
    } else if (55 <= idade && idade <= 65) {
      qtdAgua = 30;
    } else {
      qtdAgua = 25;
    }
    document.getElementById("id-result").innerHTML = MsgOK;
    let calculo = qtdAgua * 0.001 * peso;
    const calculFinal = calculo.toFixed(2);
    document.getElementsByClassName("spanR")[0].innerHTML = calculFinal + "L";
    document.getElementById("id-result").style =
      "display:block; opacity: 1; transition: opacity 1s ease-out;";
    const emoji = "🥤".repeat(parseFloat(calculFinal) / 1);
    document.getElementsByClassName("emoji")[0].innerText = emoji;
  }
}
