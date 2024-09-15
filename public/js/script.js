const anoSelect = document.getElementById('ano');
const mesSelect = document.getElementById('mes');
const diaSelect = document.getElementById('dia');
const aniversarioInput = document.getElementById('aniversario');
const anoAtual = new Date().getFullYear();

for (let ano = anoAtual; ano >= 1900; ano--) {
  let option = document.createElement('option');
  option.value = ano;
  option.text = ano;
  anoSelect.appendChild(option);
}

for (let mes = 1; mes <= 12; mes++) {
    let option = document.createElement('option');
    option.value = mes;
    option.text = mes;
    mesSelect.appendChild(option);
  }

  for (let dia = 1; dia <= 31; dia++) {
    let option = document.createElement('option');
    option.value = dia;
    option.text = dia;
    diaSelect.appendChild(option);
  }


  // FunÃ§Ã£o para atualizar o input de aniversÃ¡rio
function atualizarAniversario() {
    const ano = parseInt(anoSelect.value);
    const mes = parseInt(mesSelect.value) - 1;
    const dia = parseInt(diaSelect.value);
  
    const data = new Date(ano, mes, dia);
    const dataFormatada = formataData(data);
  
    aniversarioInput.value = dataFormatada;
  }
  

  function formataData(data) {
    const mes = data.getMonth() + 1; 
    const dia = data.getDate();
    const ano = data.getFullYear();
  
    return `${mes < 10 ? `0${mes}` : mes}/${dia < 10 ? `0${dia}` : dia}/${ano}`;
  }
  

  anoSelect.addEventListener('change', atualizarAniversario);
  mesSelect.addEventListener('change', atualizarAniversario);
  diaSelect.addEventListener('change', atualizarAniversario);
  
  atualizarAniversario();