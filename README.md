# **COUNTRIES** | Proyecto Individual

## **🎯 Objetivos del proyecto**

Construir una Single Page Application que proporciona información sobre diferentes países utilizando una API externa. Los objetivos específicos incluyen:

✅ Desarrollar una aplicación que clasifique países de manera alfabética y por el número de habitantes.

✅ Ofrecer la capacidad de ordenar países según las actividades turísticas disponibles.

✅ Permitir la adición de nuevas actividades a cada país.

✅ Incluir una barra de búsqueda que facilite la localización de países por nombre.

Cada uno de estos objetivos se aborda como una funcionalidad individual en la aplicación.

---

## ** 🚀 Tecnologías Utilizadas**

El proyecto se desarrolló utilizando las siguientes tecnologías:

- **React**
- **Redux**
- **Node**
- **Express**
- **Sequelize**

Estas tecnologías se combinaron para crear una Single Page Application robusta y dinámica, proporcionando una experiencia interactiva y eficiente para los usuarios.

## ** ⚙️ Requisitos para ejecutarla localmente**
1. instalar postgreSQL
2. En la carpeta **`api`** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
       DB_USER=usuariodepostgres
       DB_PASSWORD=passwordDePostgres
       DB_HOST=localhost
       DB_NAME=countries
   ```

3. Reemplazar **`usuariodepostgres`** y **`passwordDePostgres`** con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

4. Adicionalmente será necesario que crees, **desde psql (shell o PGAdmin)**, una base de datos llamada **`countries`**. Si no realizas este paso de manera manual no podrás avanzar con el proyecto.
   
## 🛠️ instalación 

Ejecuta el comando `npm i` en las carpetas `client` y `server`.
  ```
 npm i
   ```

## ▶️ Ejecutar localmente

Dentro de la carpeta `./client`, ejecuta:
```
npm start
```
 
Dentro de la carpeta `./server`, ejecuta:
```
npm start
```

