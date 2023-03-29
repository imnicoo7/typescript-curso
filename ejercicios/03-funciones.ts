function sumar(a: number, b: number): string {
  return a + b.toString();
}

const sumarFuncionFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 10
): number {
  return numero * base;
}

interface PersonajeDBZ {
  nombre: string;
  pv: number;
  mostrarHP: () => void;
}
const curar = (personaje: PersonajeDBZ, curarX: number): void => {
  personaje.pv += curarX;
};
const nuevoPersonaje: PersonajeDBZ = {
  nombre: 'Goku',
  pv: 50,
  mostrarHP: () => {
    console.log('Puntos de vida: ' + this.pv);
  },
};

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHP();
