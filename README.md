# WeSpeak Challenge

Este proyecto es una aplicación de contador colaborativo construida con **Next.js (App Router)**, **Prisma** y **PostgreSQL**.

## Requisitos

- Node.js 18+
- PostgreSQL (local o remoto)
- npm

## Configuración

1. **Clona el repositorio**  
   ```sh
   git clone <url-del-repo>
   cd we-speak
   ```

2. **Instala las dependencias**  
   ```sh
   npm install
   ```

3. **Configura la base de datos**  
   Crea un archivo `.env` en la raíz con tu conexión de PostgreSQL:
   ```
   DIRECT_URL = postgresql://postgres.agiockafpezeyrqeeaeu:[YOUR-PASSWORD]@aws-0-us-east-2.pooler.supabase.com:5432/postgres
   DATABASE_URL = postgresql://postgres.agiockafpezeyrqeeaeu:[YOUR-PASSWORD]@aws-0-us-east-2.pooler.supabase.com:6543/postgres
   ```

4. **Define el modelo Prisma**  
   El modelo principal es un contador con timestamp de actualización automática:
   ```
    model Counter {
        id Int @id @default(autoincrement())
        value  Int @default(0)
        lastUpdatedAt DateTime @default(now()) 
    }
   ```

5. **Ejecuta las migraciones**  
   ```sh
   npx prisma migrate dev --name init
   ```

6. **(Opcional) Abre Prisma Studio para ver la base de datos**  
   ```sh
   npx prisma studio
   ```

## Ejecución

```sh
npm run dev
```

## Funcionalidad



## Decisiones técnicas


