#!/bin/bash

# 🚀 Setup Script - Trenkit Landing Page
# Este script configura el proyecto para desarrollo

echo "🎨 Trenkit Landing Page - Setup"
echo "================================"
echo ""

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado"
    echo "Descárgalo desde: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js detectado: $(node --version)"
echo "✅ npm detectado: $(npm --version)"
echo ""

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencias instaladas correctamente"
else
    echo "❌ Error al instalar dependencias"
    exit 1
fi

echo ""
echo "🎉 Setup completado!"
echo ""
echo "Próximos pasos:"
echo "───────────────"
echo "1. npm run dev       → Inicia servidor de desarrollo"
echo "2. npm run build     → Genera build estático"
echo "3. firebase deploy   → Deploy en Firebase Hosting"
echo ""
echo "📖 Documentación:"
echo "  - README.md       → Guía general"
echo "  - DEPLOY.md       → Instrucciones deploy"
echo "  - COMPONENTS.md   → Documentación componentes"
echo "  - ARCHITECTURE.md → Estructura del proyecto"
echo ""
echo "🌐 Abre http://localhost:3000 después de ejecutar: npm run dev"
