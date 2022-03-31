const funcaoInterna = () => {
  console.log('salvar algum dado');
}

const falsoPositivo = () => {
  funcaoInterna();
  return 'texto Qualquer';
}

module.exports = {
  falsoPositivo
}