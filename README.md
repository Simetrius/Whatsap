# Simulador de Chat de WhatsApp-Ramiro Maglio

#### ## **Link vercel:**
https://whatsap-ramiro-maglio.vercel.app/ (Se configuró vercel para poder recargar la pagina sin que tire un error, y poder volver hacia atras)

## Instrucciones para Iniciar Sesión

Para iniciar sesión correctamente, debe ingresar las siguientes credenciales:

* Usuario: RAMIRO
* Contraseña: MAGLIO

## Descripción del Proyecto:
Este proyecto es un simulador de chat de WhatsApp, desarrollado completamente con React y Vite, utilizando react-router-dom para la navegación entre las diferentes secciones de la aplicación. También se han utilizado íconos de bootstrap-icons.

Secciones de la Aplicación:
La aplicación consta de tres secciones principales:

- Login
- Contact
- Chat

###  Login:
Esta sección implementa una pantalla de inicio de sesión sencilla con validación de credenciales y redirección a la página de contactos en caso de un inicio de sesión exitoso. El componente Login maneja el formulario de inicio de sesión utilizando los hooks de React para gestionar el estado y la lógica de validación.

### Contact:
En esta sección, se utilizan dos efectos en el componente Contacts:

Fetch de Contactos: Trae la información desde el archivo MOOK.json.
Manejo del Loading y del Timer en la Búsqueda de Contactos: Permite visualizar un mensaje de "Cargando..." mientras se realiza la búsqueda y muestra un mensaje cuando no se encuentra el contacto buscado.
Además, se manejan eventos como el cierre de sesión desde el header, lo que permite redirigir al usuario de vuelta al login o mantenerlo en la sección actual. También se utiliza un filtrado de contactos basado en la información proporcionada por MOOK.json.

### Chat:
En esta sección se accede a las conversaciones de cada contacto seleccionado en la sección anterior. Se pueden enviar mensajes nuevos, simulando un chat, utilizando el manejo de estados y el método find sobre dataMook.js.

## Nota Importante:
*En este momento, se presentó el mayor desafío del proyecto: manejar la información desde el fetch. No se logró mantener la funcionalidad de enviar mensajes mientras se obtenía la información desde JSON. Por tal motivo, se optó por dejar la funcionalidad utilizando data.js en lugar de fetch.*

### Tecnologías Utilizadas:
* React
* Vite
* React Router DOM
* Bootstrap Icons
  
### Futuras Mejoras:
Espero que la descripción del proyecto sea clara y que el mismo cumpla con las expectativas. Continuaré trabajando para perfeccionarlo en el futuro.
* Podria usar localStorage para poder almacenar la informacion enviada
* Mejorar el fetch, principalmente para poder aplicarlo en la seccion CHAT
* Darle mas funcionalidades a la aplicacion, como ingresar a una nueva seccion de estados, mandar audios o buscar mensajes mediante filtrado

## ¡Muchas gracias por su atención!