/*
  ====== Código de TypeScript ====
*/

function sumar(a: number, b: number): string {
  return a + b.toString();
}

const sumarFuncionFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}
