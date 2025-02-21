function verificar() {
  var ano = window.document.querySelector("input#anoinput").value;
  //   Sempre tem que ser .value

  var anoAtual = new Date().getFullYear();
  // Codigo pra pegar automaticamente o ano Atual!!

  var res = document.querySelector("div#res");

  if (ano.length == 0 || ano > anoAtual) {
    window.alert("Verifique os dados e tente novamente!");
  } else {
    var sex = document.getElementsByName("sexoescolha");
    var idade = anoAtual - Number(ano);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (sex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade <= 10) {
        // Criança
        img.setAttribute("src", "./img/criancaM.jpeg");
      } else if (idade <= 21) {
        // Jovem
        img.setAttribute("src", "./img/jovemM.jpeg");
      } else if (idade <= 50) {
        // adulto
        img.setAttribute("src", "./img/adultoM.jpeg");
      } else {
        // Idoso
        img.setAttribute("src", "./img/idosoM.jpeg");
      }
    } else if (sex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade <= 10) {
        // Criança
        img.setAttribute("src", "./img/criancaF.jpeg");
      } else if (idade <= 21) {
        // Jovem
        img.setAttribute("src", "./img/jovemF.jpeg");
      } else if (idade <= 50) {
        // adulto
        img.setAttribute("src", "./img/adultoF.jpeg");
      } else {
        // Idoso
        img.setAttribute("src", "./img/idosoF.jpeg");
      }
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} Anos!`;
    res.appendChild(img);
  }
}
