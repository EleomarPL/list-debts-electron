# App Control de Deudas

Aplicaci贸n de escritorio para ayudar a gestionar deudas, el programa surgi贸 ante la necesidad de llevar un registro en un abarrotes para manejar deudas de pagos de productos que se dio un anticipo pero con una cantidad restante.

# Comenzando 馃殌

Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo y pruebas.

### Pre-requisitos 馃搵

- NodeJS versi贸n 14.16 o superior
- NPM versi贸n 5.6 o superior
- MongoDB

### Instalaci贸n (desarrollo) 馃敡

Tal vez suene muy obvio pero primero clone el repositorio

```
    git clone https://github.com/EleomarPL/list-debts-electron
```

Instale las dependencias del frontend. Las depedencias ya se encuentran implicitas en el package.json del proyecto, solo basta ejecutar la siguiente instrucci贸n:

```
    npm i
```

> Nota: Para continuar con los siguientes pasos, es necesario que configures tu archivo .env con los datos correspondientes al proyecto. Tiene un ejemplo de como crearlo en el .env.example

## Ejecutando las pruebas 鈿欙笍

El proyecto cuenta con pruebas, pruebas sencillas para verificar el estilo de desarrollo en el frontend. Al instalar las dependencias del frontend, ya has instalado lo necesario para ejecutar estas pruebas.

### Pruebas de estilo de codificaci贸n 鈱笍

Las pruebas de estilo de codificaci贸n, ser谩n solo para el frontend. Estas pruebas las aplica _Eslint_, solo basta con ejecutar la siguiente instrucci贸n:

```
    npx eslint ./src
```

## Despliegue 馃摝

Antes de desplegar a producci贸n, deber谩 ejecutar 2 comandos, el primero para construir el frontend, y el segundo para construir la aplicaci贸n de escritorio.
```
    npm run build
```
```
    npm run make
```

## Construido con 馃洜锔?

- ReactJS
- Bootstrap 5
- ElectronJS

Principalmente se construyeron con las tecnolog铆as anteriores, aunque, cabe mencionar el uso de m煤ltiples dependencias mas.

## Contribuyendo 馃枃锔?

> Las Pull Request son bienvenidas. Para cambios importantes, primero abra un problema para discutir lo que le gustar铆a cambiar.

## Expresiones de Gratitud 馃巵

Si el proyecto te gusto, o te sirvio para aprender nuevas cosas, puedes agradecernos de la siguiente forma:

- Com茅ntale a otros sobre este proyecto 馃摙
- Regala una estrella a este proyecto 猸?
- Da las gracias p煤blicamente 馃.

## Autores 鉁掞笍

* **Eleomar Pedro LOrenzo** - *Trabajo Inicial* - [eleomarpl](https://github.com/EleomarPL)