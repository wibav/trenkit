# Trenkit Landing Page

Landing page profesional y moderna para Trenkit - Desarrollo de Apps y Juegos Móviles.

## 🎨 Características

- **Next.js 15 con App Router** - Framework React moderno
- **TypeScript** - Tipado estático para mayor seguridad
- **SCSS Modules** - Estilos encapsulados y mantenibles
- **Static Site Generation (SSG)** - `next export` para sitio 100% estático
- **Firebase Hosting Ready** - Listo para desplegar en Firebase
- **Responsive Design** - Totalmente adaptable a todos los dispositivos
- **Animaciones Sutiles** - Transiciones smooth y efectos visuales
- **SEO Optimizado** - Metadatos por página
- **Componentes Reutilizables** - Button, Card, Section

## 🎯 Paleta de Colores

```
Azul Principal:      #0A66C2
Azul Oscuro:         #0B1C2D
Morado Principal:    #6A38C2
Morado Suave:        #8B6CF0
Acento Naranja:      #FF8A00
Gris Claro:          #8A8F98
Blanco:              #FFFFFF
```

## 📁 Estructura del Proyecto

```
trenkit/
├── app/
│   ├── layout.tsx              # Layout raíz
│   ├── page.tsx                # Página inicio
│   ├── apps/
│   │   ├── page.tsx            # Página de Apps
│   │   └── page.module.scss
│   ├── games/
│   │   ├── page.tsx            # Página de Games
│   │   └── page.module.scss
│   ├── privacidad/
│   │   ├── page.tsx            # Política de Privacidad
│   │   └── page.module.scss
│   └── terminos/
│       ├── page.tsx            # Términos y Condiciones
│       └── page.module.scss
├── components/
│   ├── Navbar.tsx              # Navbar fija
│   ├── Navbar.module.scss
│   ├── Footer.tsx              # Footer
│   ├── Footer.module.scss
│   ├── Button.tsx              # Botón reutilizable
│   ├── Button.module.scss
│   ├── Card.tsx                # Tarjeta reutilizable
│   ├── Card.module.scss
│   ├── Section.tsx             # Sección reutilizable
│   └── Section.module.scss
├── styles/
│   ├── variables.scss          # Variables y mixins
│   └── globals.scss            # Estilos globales
├── package.json
├── tsconfig.json
├── next.config.mjs
└── .eslintrc.json
```

## 🚀 Instalación

1. **Clonar o descargar el proyecto**

```bash
cd trenkit
```

2. **Instalar dependencias**

```bash
npm install
```

## 📝 Desarrollo

```bash
# Ejecutar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Build Estático

```bash
# Generar sitio estático
npm run build
```

Esto genera los archivos en la carpeta `out/` listos para desplegar.

## 🔥 Despliegue en Firebase Hosting

### 1. Inicializar Firebase (primera vez)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

En las preguntas:

- **What do you want to use as your public directory?** → `out`
- **Configure as a single-page app?** → `No`
- **Set up automatic builds and deploys with GitHub?** → `No` (opcional)

### 2. Crear `firebase.json`

```json
{
  "hosting": {
    "public": "out",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "cleanUrls": true,
    "trailingSlash": false
  }
}
```

### 3. Desplegar

```bash
# Build del proyecto
npm run build

# Desplegar en Firebase
firebase deploy
```

## 📋 Secciones Disponibles

### Home (/)

- Hero section con CTA principal
- Sección de Apps
- Sección de Games
- About Trenkit

### Apps (/apps)

- Servicios de desarrollo de apps
- Proceso de desarrollo
- Tecnologías utilizadas

### Games (/games)

- Tipos de juegos
- Motores y tecnologías
- Ciclo de desarrollo
- Estrategias de monetización

### Privacidad (/privacidad)

- Política de privacidad completa
- Apto para Google Play y App Store

### Términos (/terminos)

- Términos y condiciones
- Apto para Google Play y App Store

## 🎨 Personalización

### Cambiar colores globales

Editar `styles/variables.scss`:

```scss
$color-blue-primary: #0a66c2;
$color-purple-primary: #6a38c2;
// etc...
```

### Modificar tipografía

En `styles/globals.scss`:

```scss
$font-family-primary: "Poppins", sans-serif;
```

## 📱 Responsive Breakpoints

- **Mobile**: hasta 640px
- **Tablet**: hasta 768px
- **Desktop**: desde 1024px
- **Large**: desde 1280px

## 🔍 SEO

Cada página tiene metadatos configurados:

- Título personalizado
- Descripción
- Keywords
- Open Graph

## 🎯 Próximos Pasos

1. Reemplazar el contenido de texto con información real de Trenkit
2. Agregar imágenes y branding del logo
3. Personalizar datos de contacto
4. Agregar formulario de contacto
5. Integrar Google Analytics
6. Configurar dominio personalizado

## 📞 Contacto

Para más información:

- **Email**: info@trenkit.com
- **Sitio**: trenkit.com

---

**Creado para Trenkit - Aplicaciones y Juegos Móviles**
