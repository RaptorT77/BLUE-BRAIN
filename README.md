# Blue Brain by HCAA - Landing Page

Esta es la landing page oficial para **Blue Brain**, la plataforma de IA Industrial de HCAA.
Desarrollada con **React**, **TypeScript** y **Vite**.

**URL Producción**: [https://bluebrain.hcaa-ia.com](https://bluebrain.hcaa-ia.com)
**URL Vercel**: [https://landing-bluebrain.vercel.app](https://landing-bluebrain.vercel.app)

---

## 🚀 1. Instalación y Desarrollo Local

### Prerrequisitos
- Node.js (v18 o superior)
- npm

### Pasos Iniciales
```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```
El sitio estará disponible en `http://localhost:5173`.

### Comandos Disponibles
- `npm run dev`: Inicia servidor local.
- `npm run build`: Compila el proyecto para producción (genera carpeta `dist`).
- `npm run lint`: Busca errores de código.
- `npm run preview`: Visualiza localmente la versión compilada.

---

## ☁️ 2. Despliegue en Vercel

El proyecto está hospedado en **Vercel** y conectado al repositorio de GitHub.

### Conexión Automática (Reconnect)
Si clonas este repositorio en una nueva máquina, usa estos comandos para reconectar el proyecto de Vercel (requiere login):

```bash
# 1. Iniciar sesión en Vercel
npx vercel login

# 2. Vincular proyecto (usando los IDs configurados)
npx vercel link --scope tonys-projects-618f9c3a --project landing-bluebrain --yes
```

### Desplegar Cambios
Existen dos formas de desplegar cambios a producción:

**Opción A: Automática (Recomendada)**
Simplemente haz un push a la rama `main` en GitHub. Vercel detectará el cambio y desplegará automáticamente.
```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
```

**Opción B: Manual (Vercel CLI)**
Si necesitas forzar un despliegue desde tu máquina local:
```bash
# Despliegue a producción
npx vercel --prod
```

### Configuración de Dominio
El dominio **bluebrain.hcaa-ia.com** está configurado en Vercel.
- **Tipo**: CNAME
- **Valor**: `cname.vercel-dns.com`
- **Proveedor DNS**: Hostinger (Gestión externa)

---

## 🛠 3. Mantenimiento y Edición

### Editar Textos e Imágenes
Todo el contenido principal se encuentra en un solo archivo para facilitar la edición:
**Archivo**: `src/App.tsx`

- **Textos**: Busca el texto que deseas cambiar directamente en el archivo (Ctrl+F).
- **Imágenes**: Las imágenes están en la carpeta `/public`. Para cambiar una imagen, reemplaza el archivo manteniendo el mismo nombre, o sube uno nuevo y actualiza la referencia en `src/App.tsx`.
- **Iconos**: Se utiliza la librería `lucide-react` y un componente `Icon` personalizado (líneas 5-31). Si necesitas un icono nuevo, debes agregar su SVG en el componente `Icon`.

### Actualizar Contactos
Para cambiar correos o teléfonos del equipo (sección al final de la página):
1.  Abre `src/App.tsx`.
2.  Busca "Contactos" o el nombre de la persona (ej. "ANTONIO").
3.  Edita los campos `tel:` o `mailto:` según sea necesario.

### Webhook (Formulario)
El formulario envía los datos a un flujo de trabajo en **n8n**.
- **URL del Webhook**: `https://n8n.hcaa-ia.cloud/webhook/99267fac-2f0a-4908-9c2d-ab6cb26ce60e`
- **Método**: POST
- **Formato**: `x-www-form-urlencoded`
Si esta URL cambia, actualízala en la función `handleSubmit` dentro de `src/App.tsx`.

---

## 📁 Estructura del Proyecto

```
/
├── public/              # Imágenes y logo (favicon, og-image, etc)
├── src/
│   ├── App.tsx          # Lógica y contenido PRINCIPAL del sitio
│   ├── index.css        # Estilos globales (Tailwind/CSS variables)
│   ├── main.tsx         # Punto de entrada de React
│   └── vite-env.d.ts    # Tipos de TypeScript
├── package.json         # Dependencias y scripts
├── tsconfig.json        # Configuración TypeScript
└── vite.config.ts       # Configuración Vite
```
