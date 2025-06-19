# Clean Hexagonal Architecture: Hello World (Node.js + TypeScript)

Este proyecto es un ejemplo minimalista de implementación del patrón **Clean / Hexagonal Architecture** usando **TypeScript** y **Node.js**.

Se incluye configuración para ejecución local y también mediante contenedor Docker 🐳.


## 🚀 Ejecución local

1. Instalar dependencias
- npm install
2. Compilar TypeScript
- npm run build
3. Ejecutar la app
- npm start

Resultado esperado:
"Hola Mundo"

🐳 Ejecutar con Docker
1. Construir imagen
 + docker build -t clean-hello-world .
2. Ejecutar contenedor
 + docker run clean-hello-world

📦 Scripts disponibles

"scripts": {
  "build": "tsc",
  "start": "node dist/app.js"
}


📚 Tecnologías utilizadas
- Node.js
- TypeScript
- Clean Architecture
- Docker