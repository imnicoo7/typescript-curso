//Arreglos

let habilidades: string[] = ['Respetuoso', 'Amigable'];
habilidades.push('Amoroso');

console.log(habilidades);

//Objetos

//inteface
interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}
const personaje: Personaje = {
  nombre: 'Strider',
  hp: 100,
  habilidades: habilidades,
};

personaje.puebloNatal = 'Tibú';
console.table(personaje);
