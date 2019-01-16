/* Pega os valores de cada campo */
function formulario () {
  /* Armazena os valores de cada campo */
  var nome = document.querySelector('input[name=nome]').value;
  var email = document.querySelector('input[name=email]').value;
  var conteudo = document.querySelector('input[name=conteudo]:checked').value;

  console.log("Suas informações foram salvas.");

  /* Exibe uma mensagem na página */
  alert( nome +", seu formulário foi enviado com sucesso!")

  /* Limpa o formulário depois de enviar */
  document.getElementById('formulario').reset();

}
