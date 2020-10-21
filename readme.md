# app - express

1.- Inicializando la aplicación express

2.- Agregamos las rutas de OUath, agregamos la vista de loging

3.- Para manejar el flujo de oauth vamos a utilizar passport,
`passport` es un middleware de autenticación para `node js` Utiliza estrategias para soportar diferentes formas de autenticación. Tenemos que instalar la librería y la estrategia
`strategies` son las diferentes maneras que podemos inciar sesión utilizado servicios de terceros

4.- Vamos a utilizar google+ api para autenticar a los usuarios con sus credenciales de google 

- [passport-strategy-google](http://www.passportjs.org/packages/passport-google-oauth20/)

- [vas a la consola de google developers](console.developers.google.com)

1.- Creas el proyecto `ninja-oauth-test`
2.- Vas a la biblioteca e indicas que api vas a utilizar `google+`
3.- Vas a la pantalla de consentimiento ingresas los datos que te pide
4.- Vas a la pestaña credenciales y generas la estrategia en cómo van a generar un lazo de confianza tu aplicación y el servidor de google. De este paso tendrás

`ID de cliente` : xxxxxxx
`Secreto de cliente` : xxxxxxxx
`Uris (para usar con solicitudes de un navegador)` : http://localhost:3000 
`Uri de redirección autorizada (para utilizarse con las solicitudes de un servidor web) ` : http://localhost:3000/cualquiercosa 

5.- Vamos asegurar las credenciales utilizando un archivo keys el cual lo colocaremos en el archivo gitignore para que no se publique en github. Recuerda que estos valores los adquieres al crear tu proyecto y las credenciales respecticas en `console.developers.google`