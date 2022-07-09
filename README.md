# App Control de Deudas

Aplicación de escritorio para ayudar a gestionar deudas, el programa surgió ante la necesidad de llevar un registro en un abarrotes para manejar deudas de pagos de productos que se dio un anticipo pero con una cantidad restante.

# Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos 📋

- NodeJS versión 14.16 o superior
- NPM versión 5.6 o superior
- MongoDB

### Instalación (desarrollo) 🔧

Tal vez suene muy obvio pero primero clone el repositorio

```
    git clone https://github.com/EleomarPL/list-debts-electron
```

Instale las dependencias del frontend. Las depedencias ya se encuentran implicitas en el package.json del proyecto, solo basta ejecutar la siguiente instrucción:

```
    npm i
```

> Nota: Para continuar con los siguientes pasos, es necesario que configures tu archivo .env con los datos correspondientes al proyecto. Tiene un ejemplo de como crearlo en el .env.example

## Ejecutando las pruebas ⚙️

El proyecto cuenta con pruebas, pruebas sencillas para verificar el estilo de desarrollo en el frontend. Al instalar las dependencias del frontend, ya has instalado lo necesario para ejecutar estas pruebas.

### Pruebas de estilo de codificación ⌨️

Las pruebas de estilo de codificación, serán solo para el frontend. Estas pruebas las aplica _Eslint_, solo basta con ejecutar la siguiente instrucción:

```
    npx eslint ./src
```

## Despliegue 📦

Antes de desplegar a producción, deberá ejecutar 2 comandos, el primero para construir el frontend, y el segundo para construir la aplicación de escritorio.
```
    npm run build
```
```
    npm run make
```

## Construido con 🛠️

- ReactJS
- Bootstrap 5
- ElectronJS

Principalmente se construyeron con las tecnologías anteriores, aunque, cabe mencionar el uso de múltiples dependencias mas.

## Contribuyendo 🖇️

> Las Pull Request son bienvenidas. Para cambios importantes, primero abra un problema para discutir lo que le gustaría cambiar.

## Expresiones de Gratitud 🎁

Si el proyecto te gusto, o te sirvio para aprender nuevas cosas, puedes agradecernos de la siguiente forma:

- Coméntale a otros sobre este proyecto 📢
- Regala una estrella a este proyecto ⭐
- Da las gracias públicamente 🤓.

## Autores ✒️

* **Eleomar Pedro LOrenzo** - *Trabajo Inicial* - [eleomarpl](https://github.com/EleomarPL)