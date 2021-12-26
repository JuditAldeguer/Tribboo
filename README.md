# Prueba Técnica - Tribboo

## Mi proyecto

- Dónde localizarlo  
   Mi trabajo se encuentra en el repositorio de Github y puedes encontrar facilmente el link a Github Page que da acceso a la última versión de mi **rama master** en el apartado _About_. [Acceder a la web](https://github.com/JuditAldeguer/Tribboo.git)

  Deseo destacar que he seguido un **diseño responsive**, el cual varia al pasar de versión mobil a tablet y a desktop.

  Por otro lado, como podrás ver, este trabajo consta de dos ramas **rama dev** para todo lo que está en desarrollo y **rama master** que contiene el producto final.

- Qué es  
  Se trata de una aplicación web que sirve de Gestor de tareas de tus Proyectos.

  - Obtener información de los tareas iniciales del documento facilitado **initialState.json** y guardarlos en el estado con **useState**
  - Pintar los tareas iniciales
  - Cambiar el estado de las tareas: A hacer, En proceso, Objetivo Cumplido
  - Añadir nuevas tareas - incluye formulario con validación.
  - Posibilidad de **destacar** las tareas según nombre gracias al buscador
  - Para una mejor estructura, está desglosado en **Componentes**
  - Tres visualizaciones distintas usando **Route, Switch**
  - Informar con una visalización distinta si no existe la url **notFoundPage** con el uso de **ModalWindows**.
  - Uso de **Bootstrap** por dar estilo 
  - Introducir **defaultProps** y **propTypes** en input text


- Qué partes tiene  
  Contiene tres partes claras:

  1. El _header_
     - Sección introductoria que incluye el título de la página.
     - Menú
  2. El _lateralMenu_
  3. El _main_
     - Fromulario que aparece al clicar en +
     - Columnas de estado del proyecto
     - Visualización de las tareas

- Qué se podría añadir  
  - Actualemnte no es un diseño responsive, la visualización correcta es el **versión PC (1200px)**. Suelo trabajar con mobile first y responsive, sin embargo he querido emplear **Bootstrap** el cual estoy aprendiendo ahora, con el fin de seguir avanzando.
  - En proceso de añadir más testing y trabajar con la métodologia Test Driven Development (TDD).
  - Posibilidad de añadir más funcionalidades como, por ejemplo:
      - Visualización de las tareas ordenadas no solo por cada columna de estado, sino también por fase.
      - Opción de al añadir una nueva tarea, dejar el identificativo vacio el cual se generaría de forma automatica informando al usuario de ello.
      - Al crear nueva tarea, añadir validación que confirme que la fecha inicio es anterior a la fecha de fin prevista.
      - Guardar los datos en LocalStorage / BBDD dichas nuevas tareas y/o modificaciones. 


- Qué tecnologías usa
  He usado los lenguages HTML, CSS, JavaScript y React.  
  El preprocesador de CSS usado ha sido SAAS pues garcias al react-starter-Kit he podido usar diferentes herramientas como la _automatización de gulp_.

- Cómo se instala  
  Gracias al Starter-Kit la instalación es muy simple, únicamente se precisa de _Visual Studio Code_ con las correspondientes extensiones, un navegador como, por ejemplo, _Chrome_ y _Github_.

- Cómo se ejecuta  
  Una vez se dispone de estas herramientas bien ubicadas, con los comandos <npm install> y <npm start> podrás empezar a hacer uso del React-Starter-Kit y sus facilidades.

Espero que os guste mi trabajo, por supuesto tengotodavía mucho a mejorar pero no me faltan ganas! Espero que podáis darme indicaciones para seguir mejorando.  
Gracias por adelantado!!