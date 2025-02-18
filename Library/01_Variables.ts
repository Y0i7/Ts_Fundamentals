/**01-VARIABLES:
 * 
 * En TypeScript, declaramos variables usando let, const y var (aunque var ya casi no se usa). 
 * La diferencia principal con JavaScript es que aquí podemos especificar los tipos de datos.
 */


/**=================================
 *     VARIABLES EN TYPESCRIPT
 * =================================
 */
let text: string = "Hello World"; //Texto
let num: number = 15;   //Número
let bool: boolean = true;   //Booleano
//👉 Aquí estamos declarando el tipo de dato justo después de los dos puntos :.

/**================================
 *     INFERENCIA DE TIPO
 * ================================
 * TypeScript es inteligente y puede inferir el tipo sin que lo escribas:
 */

let ciudad = "Medellín";
let cantidad = 10;

//Pero si intentas reasignar otro tipo de dato, TypeScript se enoja. 😠

ciudad = 22; //❌ Error: Type 'number' is not assignable to type 'string'

/**===========================
 *        LET VS CONST
 * ===========================
 * let permite cambiar el valor después.
 * const NO permite reasignar su valor.
 */

let lenguaje: string = "JavaScript";
lenguaje = "TypeScript";    // ✅ Se puede cambiar

const país: string = "Colombia";
país = "México";    // ❌ Error: No se puede reasignar un `const`