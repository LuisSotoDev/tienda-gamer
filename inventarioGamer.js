// ===============================
// 1. Crear el array inicial
// ===============================
let productos = [
    "Mouse",
    "Teclado",
    "Monitor",
    "Audifonos"
];

// ===============================
// 2. Mostrar inventario
// ===============================
function mostrarInventario() {

    console.log("Inventario actual:");

    for (let i = 0; i < productos.length; i++) {
        console.log((i + 1) + ". " + productos[i]);
    }

    console.log("----------------------");
}

// ===============================
// 3. Agregar producto
// ===============================
function agregarProducto(producto) {

    if (productos.indexOf(producto) !== -1) {
        console.log("❌ Ese producto ya existe");
        return;
    }

    productos.push(producto);

    console.log("✅ Producto agregado:", producto);
    mostrarInventario();
}

// ===============================
// 4. Eliminar último producto
// ===============================
function eliminarUltimoProducto() {

    let eliminado = productos.pop();

    console.log("🗑 Producto eliminado:", eliminado);
    mostrarInventario();
}

// ===============================
// 5. Reemplazar producto
// ===============================
function reemplazarProducto(indice, nuevoProducto) {

    if (indice < 0 || indice >= productos.length) {
        console.log("❌ Índice inválido");
        return;
    }

    productos.splice(indice, 1, nuevoProducto);

    console.log("🔄 Producto reemplazado");
    mostrarInventario();
}

// ===============================
// 6. Buscar producto
// ===============================
function buscarProducto(producto) {

    let indice = productos.indexOf(producto);

    if (indice !== -1) {
        console.log('🔍 Producto "' + producto + '" encontrado en índice:', indice);
    } else {
        console.log("❌ Producto no encontrado");
    }
}

// ===============================
// 7. Ordenar inventario
// ===============================
function ordenarProductos() {

    productos.sort();

    console.log("📦 Inventario ordenado:");
    mostrarInventario();
}

// ===============================
// 8. Mostrar cantidad
// ===============================
function mostrarCantidad() {

    console.log("📊 Cantidad total:", productos.length, "productos");
}

// ===============================
// 9. Solicitar datos al usuario
// ===============================

// Mostrar inventario al iniciar
mostrarInventario();

// Solicitar producto para agregar
let nuevoProducto = prompt("Ingresa un producto para agregar:");
agregarProducto(nuevoProducto);

// Solicitar producto para buscar
let productoBuscar = prompt("Ingresa el producto que deseas buscar:");
buscarProducto(productoBuscar);

// Solicitar datos para reemplazar
let indiceReemplazo = parseInt(
    prompt("Ingresa el índice del producto que deseas reemplazar:")
);

let nuevoNombre = prompt("Ingresa el nuevo nombre del producto:");

reemplazarProducto(indiceReemplazo, nuevoNombre);

// Ordenar inventario
ordenarProductos();

// Mostrar cantidad total
mostrarCantidad();

// Eliminar último producto
eliminarUltimoProducto();