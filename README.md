# WeSpeak Challenge

Este proyecto es una aplicación de contador colaborativo construida con **Next.js (App Router)**, **Prisma** y **PostgreSQL**.

## Requisitos

- Node.js 18+
- PostgreSQL (local o remoto)
- npm

## Configuración

1. **Clona el repositorio**  
   ```sh
   git clone https://github.com/mauroradino/WeSpeak_Challenge.git
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

    Este contador posee dos botones, uno para aumentar el contador y otro para disminuirlo. Cuando se pulsa uno de ellos, lo que hace es actualizar la unica fila existente en la base de datos para sumar o restar según cual sea el boton elegido.
    Una vez pasados 20 minutos sin cambios en el contador, el mismo vuelve a cero en la base de datos.

## Decisiones técnicas

    ```
    export const dynamic = 'force-dynamic'
    ```
    Para asegurar que el contador siempre refleje el valor más reciente de la base de datos.

    Server Actions en botones para interactuar con el contador sin necesidad de una API REST, lo que ayuda a simplificar la arquitectura al evitar rutas API separadas.

    Persistencia en Supabase con Prisma como ORM para mayor sencillez en CRUD 




