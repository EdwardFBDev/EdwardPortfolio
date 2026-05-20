# Edward Portfolio

Aplicación móvil desarrollada con React Native y Expo como parte del Proyecto Programado #1 del curso Programación para Dispositivos Móviles.

El proyecto consiste en un portafolio profesional interactivo enfocado en UI/UX moderno, navegación móvil y arquitectura modular.

---

# Tecnologías Utilizadas

- React Native
- Expo
- Expo Router
- TypeScript
- React Navigation
- FlatList
- Context API
- Flexbox

---

# Características Principales

## Home Screen
- Perfil profesional interactivo
- Avatar y presentación personal
- Tecnologías principales
- Acciones rápidas
- Toggle Light/Dark Mode

## Projects Screen
- Lista de proyectos usando FlatList
- Filtros dinámicos por categoría
- Tarjetas responsivas
- Navegación a detalle

## Project Details Screen
- Información detallada del proyecto
- Tecnologías utilizadas
- Estado y categoría
- Botones de GitHub y Demo
- Diseño responsive

## Settings Screen
- Cambio dinámico de tema
- Persistencia visual del sistema de colores

---

# Arquitectura del Proyecto

```txt
app/
├── (tabs)/
│   ├── index.tsx
│   ├── projects.tsx
│   ├── settings.tsx
│   └── _layout.tsx
│
├── project/
│   └── [id].tsx
│
└── _layout.tsx

src/
├── components/
├── context/
├── data/
├── hooks/
├── theme/
├── types/
```

---

# Principios Aplicados

- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple)
- Componentización modular
- Responsive Design
- UI/UX Mobile First
- Manejo global de tema
- Navegación escalable

---

# Instalación

## Clonar repositorio

```bash
git clone https://github.com/EdwardFBDev/EdwardPortfolio.git
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar proyecto

```bash
npx expo start
```

---

# Navegación

La aplicación utiliza:

- Stack Navigation
- Bottom Tabs
- Dynamic Routes

Implementados mediante Expo Router.

---

# Autor

Edward Funes Betancourt

Full Stack Developer Portfolio
