 const {  calculaDesconto,somaHorasExtras } = require ("./operacoes");

 describe('Operações', ()=> {

  beforeAll(()=> {
    console.log('beforeAll => Hook antes de todos os testes');
  });
  beforeEach(()=> {
    console.log('beforeEach => Hook antes de cada um os testes');
  });
  afterAll(()=> {
    console.log('afterAll => Hook depois de todos os testes');
  });
  afterEach(()=> {
    console.log('afterEach => Hook depois de cada um os testes');
  });

  it('deve somar horas extras', () => {
    const esperado = 10;
    const retornado = somaHorasExtras(5,5);
    expect(retornado).toBe(esperado);
  });
  
  it('deve calcular descontos', () => {
    const esperado = 5;
    const retornado = calculaDesconto(10,5);
  
    expect(retornado).toBe(esperado);
  });
 });
