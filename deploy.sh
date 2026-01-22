#!/bin/bash

# Firebase Hosting Deployment Script para Trenkit
# Este script automatiza el proceso de build y deploy

set -e  # Salir si hay un error

echo "🚀 Trenkit Landing Page - Firebase Deployment"
echo "=============================================="
echo ""

# Verificar que Firebase CLI esté instalado
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI no está instalado"
    echo ""
    echo "Instálalo con:"
    echo "  npm install -g firebase-tools"
    exit 1
fi

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json no encontrado"
    echo "Asegúrate de estar en el directorio del proyecto"
    exit 1
fi

echo "✅ Firebase CLI detectado"
echo "✅ Directorio del proyecto: $(pwd)"
echo ""

# Verificar autenticación
if ! firebase projects:list > /dev/null 2>&1; then
    echo "❌ No autenticado con Firebase"
    echo ""
    echo "Ejecuta:"
    echo "  firebase login"
    exit 1
fi

echo "✅ Autenticado con Firebase"
echo ""

# Step 1: Install dependencies
echo "📦 Instalando dependencias..."
npm install > /dev/null 2>&1
echo "✅ Dependencias instaladas"
echo ""

# Step 2: Build
echo "🔨 Compilando proyecto..."
npm run build > /dev/null 2>&1
echo "✅ Build completado"
echo ""

# Step 3: Ask for confirmation
echo "📋 Información del Deploy:"
echo "   Proyecto: trenkit-fe76a"
echo "   Carpeta: out/"
echo "   URL: https://trenkit-fe76a.web.app"
echo ""
echo "¿Deseas continuar con el deploy? (s/n)"
read -r CONFIRM

if [[ ! "$CONFIRM" =~ ^[Ss]$ ]]; then
    echo "❌ Deploy cancelado"
    exit 0
fi

echo ""
echo "🌐 Desplegando en Firebase Hosting..."
firebase deploy --only hosting

echo ""
echo "✅ Deploy completado exitosamente!"
echo ""
echo "🎉 Tu sitio está disponible en:"
echo "   https://trenkit-fe76a.web.app"
echo ""
echo "📊 Ver en Firebase Console:"
echo "   https://console.firebase.google.com/project/trenkit-fe76a"
