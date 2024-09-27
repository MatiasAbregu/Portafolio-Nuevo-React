//Componentes React
import './App.css'
import { NavigatorBar } from './components/NavigatorBar'
import { Title } from './components/Title'
import { Frame } from './components/Frame'
import { Frame2 } from './components/Frame2'
import { Reproductor } from './components/Reproductor'
import { Carousel } from './components/Carousel'
import { SocialIcon } from './components/SocialIcon'
import { useEffect, useState } from 'react'
import { Modal } from './components/Modal'

//Habilidades
import Java from './img/java.svg'
import JS from './img/javascript.svg'
import CSharp from './img/csharp.svg'
import Android from './img/android.svg'
import BootStrap from './img/bootstrap.svg'
import Canva from './img/canva.svg'
import CSS from './img/css3.svg'
import NET from './img/dotnet.svg'
import Express from './img/express.svg'
import GIT from './img/git.svg'
import Github from './img/github.svg'
import Handlebars from './img/handlebars.svg'
import Hibernate from './img/Hibernate.svg'
import HTML from './img/html5.svg'
import LUA from './img/lua.svg'
import PowerPoint from './img/microsoftpowerpoint.svg'
import Word from './img/microsoftword.svg'
import Mongo from './img/mongodb.svg'
import Mongoose from './img/mongoose.svg'
import MySQL from './img/mysql.svg'
import Node from './img/nodejs.svg'
import NPM from './img/npm.svg'
import Maven from './img/maven.svg'
import Nuget from './img/nuget.svg'
import Photoshop from './img/photoshop.svg'
import phpmyadmin from './img/phpmyadmin.svg'
import React from './img/react.svg'
import MUI from './img/mui.svg'
import Spring from './img/spring.svg'
import Springboot from './img/springboot.svg'
import Springsecurity from './img/springsecurity.svg'
import JUnit from './img/junit5.svg'
import SQLite from './img/sqlite.svg'
import tomcat from './img/tomcat.svg'
import Docker from './img/docker.svg'
import Postman from './img/postman.svg'
import VSCode from './img/vscode.svg'
import VisualStudio from './img/visualstudio.svg'
import Netbeans from './img/netbeans.svg'
import Eclipse from './img/eclipse.svg'
import Python from './img/python.svg'
import Typescript from './img/typescript.svg'

//Mis fotos
import Yo2022 from './img/Retrato.jpg'
import Yo2024Actual from './img/Retrato2.jpg'
import Yo2023Fines from './img/Retrato4.jpg'
import Yo2024 from './img/Retrato3.jpg'

//Proyecto Hackacode
import hackacode1 from './projects/HackacodeProject/Imagen1.png'
import hackacode2 from './projects/HackacodeProject/Imagen2.jpg'
import hackacode3 from './projects/HackacodeProject/Imagen3.png'
import hackacode4 from './projects/HackacodeProject/Imagen4.png'
import hackacode5 from './projects/HackacodeProject/Imagen5.png'

//Proyecto Airlines
import videoAirlines from './projects/Airlines/VideoMatiasAirlines.mp4';
import Airlines from './projects/Airlines/MatiasAirlinesIMG1.png';
import Airlines2 from './projects/Airlines/MatiasAirlinesIMG2.png';
import Airlines3 from './projects/Airlines/AirlinesC1.png';
import Airlines4 from './projects/Airlines/AirlinesC2.png';
import Airlines5 from './projects/Airlines/AirlinesC3.png';
import Airlines6 from './projects/Airlines/AirlinesC4.png';
import Airlines7 from './projects/Airlines/AirlinesC5.png';

//Proyecto Mercarro
import videoMercarro from './projects/Mercarro/VideoMercarro.mov';
import Mercarro from './projects/Mercarro/MercarroIMG1.png';
import Mercarro2 from './projects/Mercarro/MercarroIMG2.png';
import Mercarro3 from './projects/Mercarro/MercarroC1.png';
import Mercarro4 from './projects/Mercarro/MercarroC2.png';
import Mercarro5 from './projects/Mercarro/MercarroC3.png';
import Mercarro6 from './projects/Mercarro/MercarroC4.png';
import Mercarro7 from './projects/Mercarro/MercarroC5.png';

//Proyecto Norex
import videoNorex from './projects/Norex/VideoNorex.mp4';
import Norex from './projects/Norex/NorexIMG1.png';
import Norex2 from './projects/Norex/NorexIMG2.png';
import Norex3 from './projects/Norex/NorexC1.png';
import Norex4 from './projects/Norex/NorexC2.png';
import Norex5 from './projects/Norex/NorexC3.png';
import Norex6 from './projects/Norex/NorexC4.png';

//Antiguo Portafolio
import AntPort from './projects/AntiguoPortafolio/portafolio1.png';
import antPortIMG from './projects/AntiguoPortafolio/portafolio2.png';
import antPortIMG2 from './projects/AntiguoPortafolio/portafolio3.png';
import antPortIMG3 from './projects/AntiguoPortafolio/portafolio4.png';
import antPortIMG4 from './projects/AntiguoPortafolio/portafolio5.png';
import antPortIMG5 from './projects/AntiguoPortafolio/portafolio6.png';

//App Supermercado
import AppSuper from './projects/AppSupermercado/App1.png';
import AppSuper2 from './projects/AppSupermercado/App2.png';
import AppSuper3 from './projects/AppSupermercado/App3.png';
import AppSuper4 from './projects/AppSupermercado/App4.png';
import AppSuper5 from './projects/AppSupermercado/App5.png';
import AppSuper6 from './projects/AppSupermercado/App6.png';

//Bots Discord
import Bots from './projects/BotsDiscord/Bots1.png';
import Bots2 from './projects/BotsDiscord/Bots2.png';
import Bots3 from './projects/BotsDiscord/Bots3.png';
import Bots4 from './projects/BotsDiscord/Bots4.png';
import Bots5 from './projects/BotsDiscord/Bots5.png';
import Bots6 from './projects/BotsDiscord/Bots6.png';

//Crud Promocion
import CrudNode from './projects/CRUD-Mongo/Crud1.png';
import CrudNode2 from './projects/CRUD-Mongo/Crud2.png';
import CrudNode3 from './projects/CRUD-Mongo/Crud3.png';
import CrudNode4 from './projects/CRUD-Mongo/Crud4.png';
import CrudNode5 from './projects/CRUD-Mongo/funcionamiento.mp4';
import CrudNode6 from './projects/CRUD-Mongo/codigo.mp4';

//C# 1
import TLEP1 from './projects/EjerciciosConCSharp1/TodosLosEjerciciosP1de1.png';
import TLEP12 from './projects/EjerciciosConCSharp1/TodosLosEjerciciosP1de2.png';
import TLEP13 from './projects/EjerciciosConCSharp1/TodosLosEjerciciosP1de3.png';
import TLEP14 from './projects/EjerciciosConCSharp1/TodosLosEjerciciosP1de4.png';
import TLEP15 from './projects/EjerciciosConCSharp1/TodosLosEjerciciosP1de5.png';
import TLEP16 from './projects/EjerciciosConCSharp1/video.mp4';

//C# 2
import TLEP2 from './projects/EjerciciosConCSharp2/TodosLosEjerciciosP2de1.png';
import TLEP22 from './projects/EjerciciosConCSharp2/TodosLosEjerciciosP2de2.png';
import TLEP23 from './projects/EjerciciosConCSharp2/TodosLosEjerciciosP2de3.png';
import TLEP24 from './projects/EjerciciosConCSharp2/TodosLosEjerciciosP2de4.png';
import TLEP25 from './projects/EjerciciosConCSharp2/TodosLosEjerciciosP2de5.png';
import TLEP26 from './projects/EjerciciosConCSharp2/video.mp4';

//Patito Pagina
import Patito from './projects/PaginaPatitoSoftware/Patito1.png';
import Patito2 from './projects/PaginaPatitoSoftware/Patito2.png';
import Patito3 from './projects/PaginaPatitoSoftware/Patito3.png';
import Patito4 from './projects/PaginaPatitoSoftware/Patito4.png';
import Patito5 from './projects/PaginaPatitoSoftware/Patito5.png';
import Patito6 from './projects/PaginaPatitoSoftware/Patito6.png';

//Paginas Instituto
import Paginas from './projects/PaginasParaElInstituto/Paginas1.png';
import Paginas2 from './projects/PaginasParaElInstituto/Paginas2.png';
import Paginas3 from './projects/PaginasParaElInstituto/Paginas3.png';
import Paginas4 from './projects/PaginasParaElInstituto/Paginas4.png';
import Paginas5 from './projects/PaginasParaElInstituto/Paginas5.png';
import Paginas6 from './projects/PaginasParaElInstituto/Paginas6.png';
import Paginas7 from './projects/PaginasParaElInstituto/Paginas7.png';

//Proyecto Arandu
import Arandu from './projects/ProyectoArandu/ProyectoArandu.png';
import Arandu2 from './projects/ProyectoArandu/ProyectoArandu2.png';
import Arandu3 from './projects/ProyectoArandu/ProyectoArandu3.png';

//Proyecto Facundo
import Facundo from './projects/ProyectoFacundo/Facundo1.png';
import Facundo2 from './projects/ProyectoFacundo/Facundo2.png';
import Facundo3 from './projects/ProyectoFacundo/Facundo3.png';
import Facundo4 from './projects/ProyectoFacundo/Facundo4.png';
import Facundo5 from './projects/ProyectoFacundo/Facundo5.png';
import Facundo6 from './projects/ProyectoFacundo/Facundo6.png';
import Facundo7 from './projects/ProyectoFacundo/VideoTuruWan.mp4';

//Proyectos Extras Java
import ProyectosExtras from './projects/ProyectosExtrasDeJava/ProyectosExtras.png';
import ProyectosExtras2 from './projects/ProyectosExtrasDeJava/ProyectosExtras2.png';
import ProyectosExtras3 from './projects/ProyectosExtrasDeJava/ProyectosExtras3.png';
import ProyectosExtras4 from './projects/ProyectosExtrasDeJava/ProyectosExtras4.png';
import ProyectosExtras5 from './projects/ProyectosExtrasDeJava/ProyectosExtras5.png';
import ProyectosExtras6 from './projects/ProyectosExtrasDeJava/ProyectosExtras6.png';
import ProyectosExtras7 from './projects/ProyectosExtrasDeJava/ProyectosExtras7.png';
import ProyectosExtras8 from './projects/ProyectosExtrasDeJava/ProyectosExtras8.png';

//Sistema Vuelo
import SVA1 from './projects/SistemaVuelo-Android/AndroidVolar1.png';
import SVA2 from './projects/SistemaVuelo-Android/AndroidVolar2.png';
import SVA3 from './projects/SistemaVuelo-Android/AndroidVolar3.png';
import SVA4 from './projects/SistemaVuelo-Android/AndroidVolar4.png';
import SVA5 from './projects/SistemaVuelo-Android/AndroidVolar5.png';
import SVA6 from './projects/SistemaVuelo-Android/AndroidVolar6.png';
import SVA7 from './projects/SistemaVuelo-Android/AndroidVolar7.png';

//Worline
import Worline from './projects/Worline/Worline1.png';
import Worline2 from './projects/Worline/Worline2.png';
import Worline3 from './projects/Worline/Worline3.png';
import Worline4 from './projects/Worline/Worline4.png';
import Worline5 from './projects/Worline/Worline5.png';
import Worline6 from './projects/Worline/Worline6.png';
import Worline7 from './projects/Worline/Worline7.png';
import Worline8 from './projects/Worline/Worline8.png';

//Wild Monster
import WM1 from './projects/WildMonsters/WildMonsters1.png';
import WM2 from './projects/WildMonsters/WildMonsters2.png';
import WM3 from './projects/WildMonsters/WildMonsters3.png';
import WM4 from './projects/WildMonsters/WildMonsters4.png';
import WM5 from './projects/WildMonsters/WildMonsters5.png';
import WM6 from './projects/WildMonsters/WildMonsters6.png';
import WM7 from './projects/WildMonsters/WildMonsters7.png';

//Concesionario Brolto
import Concesionario from './projects/ConcesionarioBrolto/Concesionario1.png';
import Concesionario2 from './projects/ConcesionarioBrolto/Concesionario2.png';
import Concesionario3 from './projects/ConcesionarioBrolto/Concesionario3.png';
import Concesionario4 from './projects/ConcesionarioBrolto/Concesionario4.png';
import Concesionario5 from './projects/ConcesionarioBrolto/Concesionario5.png';
import Concesionario6 from './projects/ConcesionarioBrolto/Concesionario6.png';
import Concesionario7 from './projects/ConcesionarioBrolto/video.mp4';


function App() {

  const [estadoModal, setEstadoModal] = useState(false);
  const [contenidoModal, setContenidoModal] = useState('');

  const establecerModal = (contenido) => {
    setContenidoModal(contenido);
    setEstadoModal(true);
    document.documentElement.classList.add("modal-abierto");
    document.querySelector(".modal").style.top = `${window.scrollY}px`;
    document.querySelector(".modal").style.left = `${window.scrollX}px`;
  }

  const desactivarModal = () => {
    setEstadoModal(false);
    document.documentElement.classList.remove("modal-abierto");
  }

  useEffect(() => {
    document.getElementById("fondo1").style.height = `${document.getElementById("inicio").getBoundingClientRect().height + 180}px`;
    document.getElementById("fondo2").style.height = `${document.getElementById("proyectos").getBoundingClientRect().height + 10}px`;
    document.getElementById("fondo3").style.width = `${document.getElementById("Contactame").getBoundingClientRect().width + 300}px`;
    document.getElementById("fondo3").style.height = `${document.getElementById("Contactame").getBoundingClientRect().height + 60}px`;
  },
    [])

  return (
    <>
      <Modal estado={estadoModal} contenido={contenidoModal} cerrarModal={desactivarModal} />
      <Reproductor />
      <NavigatorBar />
      <br /><br /><br /><br /><br /><br />
      <section id='inicio'>
        <img src="/fondo1.jpg" alt="" id='fondo1' />
        <div className='cajaPresentacion'>
          <h3>Bienvenido al portafolio de...</h3>
          <h1>Matias Abregú</h1>
          <hr />
          <h2>Desarrollador Web, Móvil y de Escritorio - Programador FullStack</h2>
        </div>
        <img src="/DragonNombre.png" alt="" id='imgPresentacion' />
      </section>
      <section id='habilidades'>
        <Title>Habilidades</Title>
        <br /><br /><br /><br />
        <div className='cajas'>
          <Frame iconos={[["Java", Java, "Oro"], ["Javascript", JS, "Oro"], ["C#", CSharp, "Plata"], ["Luau", LUA, "Plata"], ["Python", Python, "Plata"], ["Typescript", Typescript, "Bronce"]]}>
            Lenguajes de Programación
          </Frame>
          <Frame iconos={[["MySQL", MySQL, "Oro"], ["PHPMyAdmin", phpmyadmin, "Oro"], ["SQLite", SQLite, "Oro"], ["MongoDB", Mongo, "Plata"]]}>
            Bases de Datos Relacionales y No Relacionales
          </Frame>
          <Frame iconos={[["Bootstrap", BootStrap, "Plata"], [".NET", NET, "Bronce"], ["Express.js", Express, "Plata"], ["Spring", Spring, "Oro"]]}>
            Frameworks
          </Frame>
          <Frame iconos={[["SpringBoot", Springboot, "Plata"], ["SpringSecurity", Springsecurity, "Bronce"], ["JUnit5 + Mockito", JUnit, "Bronce"]]}>
            Herramientas que uso con Spring
          </Frame>
          <Frame iconos={[["Hibernate", Hibernate, "Oro"], ["Mongoose", Mongoose, "Bronce"]]}>
            ORM y ODM
          </Frame>
          <Frame iconos={[["Maven", Maven, "Oro"], ["NPM", NPM, "Oro"], ["Nuget", Nuget, "Plata"]]}>
            Gestores de Paquetes y Proyectos
          </Frame>
          <Frame iconos={[["React", React, "Oro"], ["Node.js", Node, "Plata"], ["CSS3", CSS, "Oro"], ["HTML5", HTML, "Oro"], ["Handlebars", Handlebars, "Bronce"], ["MUI", MUI, "Plata"]]}>
            Herramientas para uso Web
          </Frame>
          <Frame iconos={[["GIT", GIT, "Oro"], ["GitHub", Github, "Oro"]]}>
            Herramientas para trabajar en equipo/Control de Versiones
          </Frame>
          <Frame iconos={[["Netbeans", Netbeans, "Oro"], ["Eclipse", Eclipse, "Plata"], ["VSCode", VSCode, "Oro"], ["Visual Studio", VisualStudio, "Plata"],
          ["Android Studio", Android, "Plata"]]}>
            Entornos de Desarrollo
          </Frame>
          <Frame iconos={[["Tomcat", tomcat, "Oro"], ["Postman", Postman, "Oro"], ["Docker", Docker, "Bronce"], ["Word", Word, "Plata"], ["PowerPoint", PowerPoint, "Plata"], ["Canva", Canva, "Plata"], ["Photoshop", Photoshop, "Oro"]]}>
            Otros
          </Frame>
        </div>
      </section>
      <section id='proyectos'>
        <br />
        <Title>Proyectos</Title>
        <img src='/retro.jpg' alt='' id='fondo2' />
        <br /><br /><br /><br /><br /><br /><br />
        <div className='cajas'>
          <Frame2 estrella={true} img={hackacode1} herramientas={[[Java, "Oro"], [Springboot, "Plata"], [Hibernate, "Oro"], [Springsecurity, "Bronce"], [JUnit, "Bronce"], [JS, "Oro"], [React, "Oro"], [MUI, "Plata"], [GIT, "Oro"], [Github, "Oro"]]} funcionModal={establecerModal} contenido={[[hackacode1, "Proyecto llevado a cabo en competición de programación en dónde logré quedar en primer puesto. Además de las herramientas mostradas anteriormente use: Netbeans, Visual Studio Code, MySQL, Docker, JWT y CryptoJS, etc..."], [hackacode2, ""], [hackacode3, "Si bien la imagen anterior dice que fue en equipo, el proyecto fue realizado en su totalidad por mi... Estando enfermo y con mis compañeros desaparecidos... Fue una competición dónde aprendí muchisimo en todos los aspectos y dónde recibi ayuda de mi Project Manager y sus amigos cerca del final para el despliegue de la aplicación..."], [hackacode4, "Pero en conclusión, me divertí bastante aunque sufrí, no es para negarlo. ¡Pero sin sufrimiento no hay aprendizaje! De corazón estoy agradecido por todo lo que viví en ese evento. \n\n• Link a la página: http://vps-3991849-x.dattaweb.com:5173"], [hackacode5, "• Link al repo back: https://github.com/MatiasAbregu/Repositorio-Backend-Grupo2 \n• Link al repo front: https://github.com/MatiasAbregu/Repositorio-Frontend-Grupo2 \n• Link al directo de presentación: https://www.youtube.com/watch?v=nF1zVrUPl8c&t=6492s"]]}>
            Proyecto Ganador de Hackacode 🌟
          </Frame2>

          <Frame2 img={Arandu} herramientas={[[Android, "Plata"], [VSCode, "Oro"], [Java, "Oro"], [Node, "Plata"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"],
          [Github, "Oro"], [GIT, "Oro"]]} funcionModal={establecerModal} contenido={[[Arandu, "Debido a que es un proyecto para un cliente no puedo revelar código acerca del mismo pero puedo mostrar muy pocas imágenes de como sería la app. Pero es una app de finanzas desarollada por mi empresa llamada Patito Software."], [Arandu2, "Acá se ve lo que sería el inicio de la aplicación móvil. Desarrollada con Java en AndroidStudio y que contará con una conexión a una Base De Datos."], [Arandu3, "Una página web que contará con Node y también se relacionará con una Base de Datos."]]}>
            Proyecto Arandu </Frame2>

          <Frame2 img={Facundo} herramientas={[[Netbeans, "Oro"], [Java, "Oro"], [SQLite, "Oro"], [Github, "Oro"], [GIT, "Oro"]]}
            funcionModal={establecerModal} contenido={[[Facundo2, "Aplicación de gestión de negocio desarrollada en Java y SQLite por mi empresa (la cual yo lidero en el área de programación y ventas). Cuenta con varias funcionalidades que se puede apreciar en el video del final."], [Facundo3, "Interfaz de gestión de usuarios."], [Facundo4, "Interfaz donde se genera un 'comprobante digital simbolico' y que cuenta con varias funcionalides tales como aplicación de descuentos y uso de escaner."], [Facundo5, "Interfaz para administrar clientes y fiados."], [Facundo6, "Interfaz de registro del capital de la empresa."], [Facundo7, "Video"]]}>
            Proyecto Facundo </Frame2>

          <Frame2 img={Patito} herramientas={[[VSCode, "Oro"], [React, "Plata"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"], [Github, "Oro"]]}
            funcionModal={establecerModal} contenido={[[Patito, "Sitio oficial de mi empresa, la cual se encarga de desarrollo de software. \n\n• Link: https://matiasabregu.github.io/pagina-patito-sin-react/"], [Patito2, "Formulario para ponerse en contacto."], [Patito3, "Un poco de código React."], [Patito4, "Un poco de código React."], [Patito5, "Un poco de código HTML e inclusión de Bootstrap para el proyecto."], [Patito6, "Un poco de código React."]]}>
            Página de Patito</Frame2>

          <Frame2 img={CrudNode} herramientas={[[VSCode, "Oro"], [Node, "Plata"], [Handlebars, "Bronce"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"],
          [Mongo, "Plata"], [Mongoose, "Bronce"]]} funcionModal={establecerModal} contenido={[[CrudNode, "Al final hay 2 videos que explican, pero es un noticiero (CRUD que usa Mongo) que tuve que desarrollar para un éxamen del instituto donde estudio. Hecho con Node, Express, Handlebars, etc..."], [CrudNode2, ""], [CrudNode3, ""],
          [CrudNode4, ""], [CrudNode5, "Video del funcionamiento de la página."], [CrudNode6, "Video del funcionamiento del código."]]}>
            Noticiero de Ciberestafa </Frame2>

          <Frame2 img={WM1} herramientas={[[LUA, "Plata"]]} funcionModal={establecerModal}
            contenido={[[WM1, "Uno de los proyectos más interesantes aún en desarrollo que estoy haciendo con un amigo ecuatoriano. Un videojuego en roblox que usa como lenguaje LUAU (Lenguaje que fui aprendiendo sobre la marcha... Programe todo el funcionamiento yo tristemente, mucho código jajaja)"], [WM2, "Customización del personaje."], [WM3, "Código."], [WM4, "Un poco de la aldea."], [WM5, "Más código."], [WM6, "Un poco del desierto."], [WM7, "Y más código..."]]}> Wild Monsters </Frame2>

          <Frame2 img={Airlines} herramientas={[[Netbeans, "Oro"], [Java, "Oro"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"], [tomcat, "Oro"],
          [MySQL, "Oro"], [phpmyadmin, "Oro"]]} funcionModal={establecerModal}
            contenido={[[videoAirlines, "Video de la página. Proyecto realizado por mi en 2022. Simulación de sitio de reserva de vuelos. Hecho con Java EE y MySQL."], [Airlines, "Inicio."], [Airlines2, "Vuelos disponibles."], [Airlines3, "Código Javascript."], [Airlines4, "Más código."], [Airlines5, "Código Java."], [Airlines6, "Más código Java..."], [Airlines7, "Etiquetado HTML con JSP."]]}>
            Matias Airlines </Frame2>

          <Frame2 img={Concesionario} herramientas={[[Netbeans, "Oro"], [Java, "Oro"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"], [tomcat, "Oro"],
          [MySQL, "Oro"], [phpmyadmin, "Oro"]]} funcionModal={establecerModal} contenido={[[Concesionario, "Al final hay un video que explica el proyecto. Hecho con Java y MySQL. Concesionario de vehiculos."], [Concesionario2, ""], [Concesionario3, ""], [Concesionario4, ""], [Concesionario5, ""], [Concesionario6, ""], [Concesionario7, "Video."]]}>
            Concesionario Brolto </Frame2>

          <Frame2 img={AppSuper} herramientas={[[Android, "Plata"], [Java, "Oro"], [MySQL, "Oro"], [phpmyadmin, "Oro"]]}
            funcionModal={establecerModal} contenido={[[AppSuper, "Una app hecha en Android para mi hogar, es tan simple como una lista que nos permite a mi familia y a mi seleccionar lo que necesitamos para luego desmarcarlo una vez que se ha comprado. Hecho con Java y Base de Datos MySQL gratuita."], [AppSuper2, ""], [AppSuper3, ""], [AppSuper4, ""], [AppSuper5, ""], [AppSuper6, ""]]}>
            App Lista Supermercado </Frame2>

          <Frame2 img={Bots} herramientas={[[VSCode, "Oro"], [Node, "Plata"], [JS, "Oro"]]} funcionModal={establecerModal}
            contenido={[[Bots, "Bots de Discord que he hecho por puro entretenimiento. Hechos con Javascript y Node."], [Bots2, ""], [Bots3, ""], [Bots4, ""], [Bots5, ""], [Bots6, ""]]}>
            Bots de Discord </Frame2>

          <Frame2 img={TLEP1} herramientas={[[CSharp, "Plata"], [NET, "Bronce"]]} funcionModal={establecerModal}
            contenido={[[TLEP1, "El único de mi curso en hacer todos los ejercicios que habia propuesto el profesor por entretenimiento. Hecho con C# y Formularios .NET; Al final hay un video que muestra su funcionamiento."], [TLEP12, ""], [TLEP13, ""], [TLEP14, ""], [TLEP15, ""], [TLEP16, ""]]}>
            Ejercicios con C# - 1</Frame2>

          <Frame2 img={TLEP2} herramientas={[[CSharp, "Plata"], [NET, "Bronce"]]} funcionModal={establecerModal}
            contenido={[[TLEP2, "Sin duda uno de los proyectos que más me entretuve haciendo sobre todo por la batalla naval que la hice muchisimo más compleja de lo que la habia pedido el profesor (PD: la sencilla nadie la hizo jajaja). Hecho con C# y Formularios .NET"], [TLEP22, ""], [TLEP23, ""], [TLEP24, "¡La batalla naval!"], [TLEP25, ""], [TLEP26, "Video."]]}>
            Ejercicios con C# - 2</Frame2>

          <Frame2 img={Mercarro} herramientas={[[Netbeans, "Oro"], [Java, "Oro"], [HTML, "Oro"], [CSS, "Oro"], [tomcat, "Oro"],
          [MySQL, "Oro"], [phpmyadmin, "Oro"]]} funcionModal={establecerModal} contenido={[[videoMercarro, "Video de mercarro."], [Mercarro, "Sitio web de supermercado, mi primer  proyecto JSP sabiendo muy poco de HTML, CSS y Javascript."], [Mercarro2, ""], [Mercarro3, ""],
          [Mercarro4, ""], [Mercarro5, ""], [Mercarro6, ""], [Mercarro7, ""]]}>
            Mercarro </Frame2>

          <Frame2 img={Norex} herramientas={[[Netbeans, "Oro"], [Java, "Oro"]]} funcionModal={establecerModal}
            contenido={[[videoNorex, "Video."], [Norex, "Aplicación donde se reserva comida y el pedido es enviado por un socket a otra aplicación que permite ver que es lo que se encargo."], [Norex2, ""], [Norex3, ""], [Norex4, ""], [Norex5, ""], [Norex6, ""]]}> Norex </Frame2>

          <Frame2 img={AntPort} herramientas={[[VSCode, "Oro"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"]]} funcionModal={establecerModal}
            contenido={[[AntPort, "Mi antiguo portafolio, increíble lo que he subido el nivel, ¿No? Jajajaja"], [antPortIMG, ""], [antPortIMG2, ""], [antPortIMG3, ""], [antPortIMG4, ""], [antPortIMG5,],]}>
            Antiguo Portafolio </Frame2>

          <Frame2 img={Paginas} herramientas={[[VSCode, "Oro"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"]]} funcionModal={establecerModal}
            contenido={[[Paginas, "Sitios hechos iguales a los que se me pidio en el instituto. Hechos con poquito Javascript."], [Paginas2, ""], [Paginas3, ""], [Paginas4, ""], [Paginas5, ""], [Paginas6, ""], [Paginas7, ""]]}>
            Páginas del Instituto (Prácticos) </Frame2>

          <Frame2 img={ProyectosExtras} herramientas={[[Netbeans, "Oro"], [Java, "Oro"]]} funcionModal={establecerModal}
            contenido={[[ProyectosExtras2, "Muchos de mis primeros proyectos hechos con Java. Algunos por mero entretenimiento y otros probando cosas. Ej. LandNet usa sockets. También he traido uno más reciente que fue el clon del proyecto C# solo que este en Java."], [ProyectosExtras3, ""], [ProyectosExtras4, ""],
            [ProyectosExtras5, ""], [ProyectosExtras6, ""], [ProyectosExtras7, ""], [ProyectosExtras8, ""]]}> Proyectos Extras de Java</Frame2>

          <Frame2 img={SVA1} herramientas={[[Android, "Plata"], [Java, "Oro"], [SQLite, "Oro"]]} funcionModal={establecerModal}
            contenido={[[SVA1, "Aplicación de reserva de vuelos hecho en Java y Android para un éxamen de mi instituto a creatividad y usando todo lo que habiamos aprendido."], [SVA2, ""], [SVA3, ""], [SVA4, ""], [SVA5, ""], [SVA6, ""], [SVA7, ""]]}>
            App Reserva de Vuelos </Frame2>

          <Frame2 img={Worline} herramientas={[[VSCode, "Oro"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"]]} funcionModal={establecerModal}
            contenido={[[Worline2, "Sitio web de un shopping el cual incluye muchas animaciones hechas con CSS y Javascript."], [Worline3, ""], [Worline4, ""], [Worline5, ""], [Worline6, ""], [Worline7, ""], [Worline8, ""]]}>
            Worline </Frame2>
        </div>
      </section>
      <section id='SobreMi'>
        <br />
        <Title>Sobre Mi</Title>
        <br /><br /><br /><br /><br /><br /><br />
        <div id='cajaSobreMi'>
          <div className='cajaPresentacion sobremi'>
            <h1>A continuación...</h1>
            <hr />
            <Carousel tipo={2} item={[["¡Hola! Soy Matías Abregú Danieli, un joven programador con mucha ambición. Bien... ¿Qué pueden esperar de mi? \n\nFortalezas: Líder (muy predispuesto a ayudar al resto), Resiliente, Perseverante, Autoexigente, Proactivo, Curioso, Determinado, Noble, Honesto, Responsable, Realista y Disciplinado."],
            ["Bien, ahora si te gustaría saber un poco más de mi para comprender muchas de las cosas que dije entonces lee a continuación porque te contaré más de mi... \n\nComo se mencionó en mi anterior portafolio soy un chico que busca ayudar a la gente a comprender mucho más la tecnología, en un mundo que cambia constantemente. Bien, realmente yo soy asi debido a que en mi familia soy el que más sabe de tecnología y siempre ando solucionando sus problemas, lo interesante es que yo descubrí mi pasión por la programación y las computadoras a la edad de 6 años. Desde entonces siempre quise involucrarme con todo su mundo, no fue hasta la edad de 14 años que decidí tener la iniciativa y aprendí a programar con un curso en internet sobre Java, el lenguaje con el que la gran mayoría de mis proyectos están hechos."], ["Lo gracioso es que a esa edad yo no me tomaba en serio la programación y sobre todo había comenzado a programar con un amigo que le SALIA TODO, en lo cual generó la creencia de que yo era un inútil para esto. Desde entonces abandoné la programación y no fue hasta los 16 años que volvi a retomarla pero esta vez aprendiendo C++ (Lenguaje con sintaxis compleja) pero que a mi a la larga no me generó complicación y pude programar alguna que otra cosita pequeña que me dio motivación pero a la larga la volvi a abandonar esta vez por los videojuegos. Entre años y años siempre fui muy curioso por explorar y aprender de TODO, lo cual hacia creer que tal vez la programación no era lo mio al fin y al cabo..."], ["Paso el tiempo y a fines de 2021 pensé, realmente ¿Qué estoy haciendo con mi vida? Fue ahi cuando dije, esto no puede ser asi, desde entonces comence con lo básico, entrenando mi cuerpo. Luego pase a adquirir habilidades sociales, luego dije que la programación era a lo que me quería dedicar dado que sino mi sueño no se haría realidad. En 2022 fue el gran cambio en mi vida, donde a día de hoy todo lo que hice lo sigo haciendo por más que no tenga ni una pizca de ganas e inclusive agregué nuevas tareas para endurecer más mi disciplina. Como dije, a día de hoy sigo haciendo todo e inclusive más lo más interesante es que gracias a mi concentración, exigencia, curiosidad y pasión (porque si, realmente me apasiona la programación sino no haría esto) he logrado hacer muchas cosas, desde programar una calculadora hasta hacer proyectos para gente de mi país y del extranjero, todos, trabajando codo a codo con amigos y compañeros."]]} />
          </div>
          <Carousel tipo={1} item={[[Yo2022, "Yo en 2022"], [Yo2023Fines, "Mi físico que es el reflejo de mi disciplina y compromiso con las cosas"], [Yo2024, "Yo a principios de 2024"], [Yo2024Actual, "Yo con un regalo preciado de mi abuela actualmente en 2024"]]} />
        </div>
        <br />
      </section>
      <section id='Contactame'>
        <br />
        <Title>Contactame</Title>
        <img src="/fondo3.gif" alt="" id='fondo3' />
        <br /><br /><br /><br /><br />
        <div id='cajaIconos'>
          <SocialIcon iconoNombre={"bi-github"} direccion={"https://github.com/MatiasAbregu"}>GitHub</SocialIcon>
          <SocialIcon iconoNombre={"bi-whatsapp"} direccion={"https://api.whatsapp.com/send?phone=3512753590"}>Whatsapp</SocialIcon>
          <SocialIcon iconoNombre={"bi-discord"} direccion={"https://discord.com/users/292346182238470153"}>Discord</SocialIcon>
          <SocialIcon iconoNombre={"bi-envelope"} direccion={"mailto:matiasabregu506@gmail.com"}>Email</SocialIcon>
          <SocialIcon iconoNombre={"bi-instagram"} direccion={"https://www.instagram.com/matias_abregu08/"}>Instagram</SocialIcon>

        </div>
      </section>
      <br /><br /><br /><br />
      <footer>
        <h1> 🐲 Derechos reservados a Matias Abregú 🐲 © 2024 </h1>
      </footer>
    </>
  )
}

export default App