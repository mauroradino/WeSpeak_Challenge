
# 🟢 WeSpeak Challenge

Este proyecto es una aplicación de **contador colaborativo** construida con **Next.js (App Router)**, **Prisma** y **Supabase**.

---

## ⚙️ Configuración

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/mauroradino/WeSpeak_Challenge.git
   cd we-speak
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Configura la base de datos**

   Crea un archivo `.env` en la raíz con tu conexión de PostgreSQL:

   ```env
   DIRECT_URL = postgresql://postgres.agiockafpezeyrqeeaeu:[YOUR-PASSWORD]@aws-0-us-east-2.pooler.supabase.com:5432/postgres
   DATABASE_URL = postgresql://postgres.agiockafpezeyrqeeaeu:[YOUR-PASSWORD]@aws-0-us-east-2.pooler.supabase.com:6543/postgres
   ```

4. **Define el modelo Prisma**

   ```prisma
   model Counter {
     id             Int      @id @default(autoincrement())
     value          Int      @default(0)
     lastUpdatedAt  DateTime @default(now())
   }
   ```

5. **Ejecuta las migraciones**

   ```bash
    npx prisma generate
    npx prisma migrate dev --name init
   ```
---

## ▶️ Ejecución

```bash
npm run dev
```

## 🧠 Funcionalidad

Este contador posee dos botones: uno para **aumentar** el contador y otro para **disminuirlo**.  
Cuando se pulsa uno de ellos, se actualiza la única fila existente en la base de datos para sumar o restar según el botón elegido.  
Si pasan **20 minutos sin cambios**, el contador vuelve a **cero** en la base de datos automáticamente.

---

## 🛠️ Decisiones técnicas

- `export const dynamic = 'force-dynamic'`  
  Para asegurar que el contador siempre refleje el valor más reciente desde la base de datos.

- **Server Actions** en botones para interactuar con el contador sin necesidad de una API REST, lo que simplifica la arquitectura al evitar rutas API separadas.

- **Persistencia** en Supabase con Prisma como ORM para mayor sencillez en operaciones CRUD.
