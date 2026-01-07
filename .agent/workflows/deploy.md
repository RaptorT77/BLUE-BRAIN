---
description: Cómo desplegar la landing page de Blue Brain en Vercel
---

# Información del Proyecto

## Repositorio de GitHub
- **URL:** https://github.com/RaptorT77/BLUE-BRAIN
- **Rama principal:** main

## Vercel
- **Proyecto:** BLUE-BRAIN
- **URL de producción:** https://blue-brain.vercel.app/#
- **Dominio personalizado:** [SI APLICA]

## Webhook de n8n
- **URL de prueba:** https://n8n.hcaa-ia.cloud/webhook-test/99267fac-2f0a-4908-9c2d-ab6cb26ce60e
- **URL de producción:** https://n8n.hcaa-ia.cloud/webhook/99267fac-2f0a-4908-9c2d-ab6cb26ce60e
---

# Pasos para Deploy

// turbo-all
1. Hacer commit de los cambios
```bash
git add .
git commit -m "descripción del cambio"
```

2. Push a GitHub (Vercel desplegará automáticamente)
```bash
git push origin main
```

3. Verificar el deploy en Vercel
- El deploy se activa automáticamente al hacer push
- Revisar el dashboard de Vercel para confirmar el estado

---

# Cambiar entre webhook de prueba y producción

Para cambiar el webhook en `src/App.tsx`:
- **Prueba:** `webhook-test/99267fac-2f0a-4908-9c2d-ab6cb26ce60e`
- **Producción:** `webhook/99267fac-2f0a-4908-9c2d-ab6cb26ce60e`