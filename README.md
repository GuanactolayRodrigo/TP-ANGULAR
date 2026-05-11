# 🚀 TP Angular - Programación y Servicios Web

<div align="center">

## 📚 Facultad de Ingeniería - UNJu

### Trabajo Práctico de Angular

Aplicación desarrollada utilizando **Angular + Bootstrap** aplicando conceptos fundamentales de desarrollo frontend moderno.

</div>

---

# 📌 Descripción

Este proyecto fue desarrollado para la materia **Programación y Servicios Web** de la **Facultad de Ingeniería - Universidad Nacional de Jujuy**.

El objetivo principal fue implementar distintas funcionalidades utilizando:

✅ Componentes
✅ Routing
✅ Binding
✅ Directivas Angular
✅ Pipes
✅ Servicios
✅ Formularios
✅ Bootstrap

---

# 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción              |
| ---------- | ------------------------ |
| Angular    | Framework principal      |
| TypeScript | Lenguaje de programación |
| Bootstrap  | Diseño responsive        |
| HTML5      | Estructura               |
| CSS3       | Estilos                  |

---

# 🔗 Repositorio

📂 Proyecto disponible en GitHub:

[TP-ANGULAR Repository](https://github.com/GuanactolayRodrigo/TP-ANGULAR.git?utm_source=chatgpt.com)

---

# 📁 Estructura del Proyecto

```bash id="f7ib8r"
src/
│
├── app/
│   ├── pages/
│   │   ├── punto1/
│   │   ├── punto2/
│   │   ├── punto3/
│   │   └── servicios/
│   │
│   ├── services/
│   ├── app.routes.ts
│   └── app.component.ts
│
└── assets/
```

---

# 🎯 Funcionalidades Implementadas

# 🖼️ Punto 1 - Slider de Eventos

Se desarrolló un **slider dinámico** de eventos utilizando Angular y Bootstrap.

## ✨ Características

* Navegación entre eventos
* Botón siguiente/anterior
* Imágenes dinámicas
* Datos cargados desde arrays
* Diseño responsive

## 📌 Conceptos aplicados

* `*ngFor`
* Event Binding
* Property Binding
* Interpolación

## 📋 Ejemplo

```ts id="ekoqcr"
eventos = [
 {
   nombre: 'Taller de Yoga',
   descripcion: 'Evento recreativo',
   img: 'evento1.jpg'
 }
]
```

---

# 🛒 Punto 2 - Productos Destacados + Carrito

Se implementó una sección de productos destacados utilizando cards de Bootstrap.

## ✨ Funcionalidades

✅ Lista dinámica de productos
✅ Botón agregar al carrito
✅ Modal Bootstrap
✅ Total automático
✅ Manejo de arrays

## 📋 Estructura utilizada

```ts id="j7x3tc"
productos = [
 {
   nombre: 'Notebook Asus',
   descripcion: '16GB RAM',
   precio: 500,
   img: 'notebook.jpg'
 }
]
```

## 🧮 Funciones implementadas

* Agregar productos
* Mostrar carrito
* Calcular total
* Mostrar modal

---

# 🧠 Punto 3 - Juego de Memoria

Juego interactivo de memoria desarrollado con Angular.

## 🎮 Características

* 12 cartas
* 6 parejas aleatorias
* Sistema de intentos
* Cartas tapadas
* Reinicio de partida
* Validación de coincidencias

## 🔘 Botones

| Botón     | Función             |
| --------- | ------------------- |
| INICIAR   | Comienza el juego   |
| INTENTAR  | Permite jugar turno |
| REINICIAR | Reinicia partida    |

## ⚙️ Lógica aplicada

* Randomización
* Manejo de estados
* Eventos click
* Validaciones
* Condicionales

---

# 🧾 Parte 2 - Servicios Angular

# 🎓 Sistema de Inscripción a Cursos

Se desarrolló un sistema CRUD de inscripciones utilizando Services Angular.

---

# 🧩 Modelo de Datos

```ts id="j44v36"
export interface Inscripcion {
  dni: string;
  precio: number;
  categoriaAlumno: number;
  fechaInscripcion: Date;
  email: string;
  curso: string;
}
```

---

# 💰 Sistema de Descuentos

| Categoría      | Descuento     |
| -------------- | ------------- |
| 🎓 Estudiante  | 35%           |
| 👨‍🎓 Egresado | 50%           |
| 👤 Particular  | Sin descuento |

---

# ⚡ Funcionalidades Implementadas

✅ Formularios Angular
✅ Eventos `(change)`
✅ Validaciones
✅ Uso de `ngIf`
✅ CRUD mediante Services
✅ Pipes Angular
✅ Tabla de inscripciones

---

# 📅 Pipes Utilizados

```html id="7ps1jf"
{{ fecha | date:'dd/MM/yyyy' }}
{{ precio | currency }}
```

---

# 🌐 Routing Angular

La aplicación utiliza navegación mediante Angular Routing.

## 📌 Ejemplo

```ts id="3mvd03"
export const routes: Routes = [
 {
   path: '',
   component: Home
 },
 {
   path: 'punto1',
   component: Punto1
 }
];
```

---

# ⚙️ Instalación del Proyecto

## 📥 Clonar repositorio

```bash id="k4z6f6"
git clone https://github.com/GuanactolayRodrigo/TP-ANGULAR.git
```

---

## 📦 Instalar dependencias

```bash id="i84h8l"
npm install
```

---

## ▶️ Ejecutar proyecto

```bash id="m6lf17"
ng serve
```

Abrir en navegador:

```bash id="ayq0sd"
http://localhost:4200
```

---

# 📚 Conceptos de Angular Aplicados

* ✅ Standalone Components
* ✅ Routing
* ✅ Interpolación
* ✅ Event Binding
* ✅ Property Binding
* ✅ Directivas Angular
* ✅ Services
* ✅ Pipes
* ✅ Formularios
* ✅ Bootstrap

---

# 👨‍💻 Autor

Trabajo práctico realizado para:

## 📖 Programación y Servicios Web

### Facultad de Ingeniería - UNJu

---

# 📄 Consigna

Documento base del trabajo práctico:


---

<div align="center">

## ⭐ Proyecto desarrollado con Angular + Bootstrap ⭐

</div>
