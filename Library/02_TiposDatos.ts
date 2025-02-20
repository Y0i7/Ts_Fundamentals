/**02.Tipos de Datos:
 * En TypeScript, los principales tipos de datos son:
 * string (cadenas de texto)
 * number (números)
 * boolean (verdaderos o falsos)
 * any (cualquier tipo, pero no es recomendable usarlo siempre)
 * arrays (listas de elementos)
 * tuples (listas con tipos fijos)
 * enums (conjuntos de valores predefinidos)
 * void (cuando una función no devuelve nada)
 * null & undefined (valores vacíos)
 * never (cuando algo nunca debe ocurrir, como un error que detiene el programa)
 */

/**==============================
 *    EJEMPLOS DE APLICACIÓN
 * ==============================
 */

// ¡Empecemos con los básicos! 😎
let nombre: string = "Juanito";   // Tipo string: cadenas de texto
let numero: number = 6;      // Tipo number: cualquier número
let booleano: boolean = false;   // Tipo boolean: true o false

// Ahora algo más pro 🔥
let listaNumeros: number[] = [1, 2, 3, 4, 5, 6, 7];  // Un array de números
let tuplaEjemplo: [string, number] = ["Hola", 25] // Una tupla con un string y un número

// ¡Enums para definir valores predefinidos! 🎨
enum Colores {
    Rojo = "❤️",
    Verde = "💚",
    Azul = "💙"
}
let miColorFavorito: Colores = Colores.Azul; //Valor será: 💙

// ¿Y qué pasa con `any`? Bueno... úsalo con cuidado 😬
let algo: any = "Esto puede ser cualquier cosa";
algo = 55;
algo = true;     // ¡Locura total! 🤯

// Una función sin retorno usa `void`
function saludar(): void {
    console.log("¡Hola, TypeScript! 🚀")
}

// El tipo `never` para funciones que no deberían terminar (como errores)
function lanzarError(mensaje: string): never {
    throw new Error(mensaje);
}

// null y undefined, porque sí existen, pero no los uses mucho 🤒
let valorNullo: null = null;
let valorIndefinido: undefined = undefined;

/**================================
 *          IMPORTANTE
 * ================================
 * 
 * El String con mayúscula en TypeScript (y en JavaScript) es un objeto envolvente 
 * del tipo primitivo string. Se usa para crear instancias de cadenas como objetos, 
 * pero en la mayoría de los casos no es recomendable usarlo.
 */

let texto1: string = "Hola";  // ✅ String primitivo (recomendado)
let texto2: String = new String("Hola");  // ⚠️ Objeto String (no recomendado)

console.log(typeof texto1); // "string"
console.log(typeof texto2); // "object"

/**El problema es que al usar new String(), en lugar de trabajar con un valor simple, 
 * creas un objeto, lo que puede causar problemas al comparar valores:
 */

console.log(texto1 === "Hola"); // true
console.log(texto2 === "Hola");  // false ❌ (porque es un objeto)
