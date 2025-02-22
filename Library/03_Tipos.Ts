/** 03 Tipos Especiales
 * En TypeScript podemos encontrar los conocidos como Unión de Tipos, los cuales
 * consisten en una o más variables las cuales pueden contener dostipos de valor
 * 
 * Y los tipos Literales los cuales consisten en variables las cuales tienen una
 * determinada cantidad de valores ya definidos los cuales puede almacenar o recivir.
 */

/**================================
 *         UNION DE TIPOS
 * ================================
 * En TypeScript, podemos definir variables que acepten más de un tipo usando | (pipe).
 */

let variable: string | number;  // Puede ser un string o un número

variable = "Hola Mundo";    // ✅ Válido
variable = 24;              // ✅ Válido
variable = true;            // ❌ Error: no es ni string ni número

/**📌 Usos comunes:
 * ✅ Manejo de datos flexibles en funciones.
 * ✅ Permitir diferentes tipos en variables o parámetros.
 */

function mostrarID(id: string | number) {
    console.log(`El ID es: ${id}`);
}
mostrarID("ABC320");    // ✅
mostrarID(3);           // ✅

/**================================
 *         TIPOS LITERALES
 * ================================
 * Con los tipos literales, podemos restringir valores específicos que una variable puede tomar.
 */

let estado: "activo" | "inactivo" | "pendiente";    // Solo puede tener estos valores

estado = "activo";        // ✅ Válido
estado = "inactivo";      // ✅ Válido
estado = "eliminado";     // ❌ Error: No está en la lista de opciones

/**📌 Usos comunes:
 * ✅ Definir opciones limitadas (ej. estados, roles, colores, etc.).
 * ✅ Evitar errores al trabajar con valores predefinidos.
 */

/**================================
 *           USAR TYPE
 * ================================
 * Cuando usamos type, estamos creando un nuevo tipo que podemos reutilizar en varias partes del código. 
 * En cambio, let solo define una variable específica con un valor.
 */

type RolUsuario = "admin" | "editor" | "usuario"; // ✅ Un alias reutilizable
let rol: "admin" | "editor" | "usuario"; // ❌ Solo esta variable puede usarlo

/**📌 Con type, podemos reutilizarlo en diferentes variables y funciones.
 * 📌 Con let, solo esa variable tiene el tipo y no lo podemos reutilizar.
 */


/**================================
 *      EJEMPLO DE APLICACIÓN
 * ================================
 * Podemos combinar unión de tipos y tipos literales para mejorar la precisión en nuestros datos.
 */

type ID = string | number;
type rolUsuario = "admin" | "editor" | "usuario";

function asignarRol(id: ID, rol: rolUsuario) {
    console.log(`Asignando el rol ${rol} al usuario con ID ${id}`)
}

asignarRol(123, "editor");       // ✅ Válido
asignarRol("ABC123", "user");   // ❌ Error: "user" no es un valor permitido