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
import { motion } from 'framer-motion'

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
import Hibernate from './img/hibernate.svg'
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
import AntPort from './projects/AntiguoPortafolio/Portafolio1.png';
import antPortIMG from './projects/AntiguoPortafolio/Portafolio2.png';
import antPortIMG2 from './projects/AntiguoPortafolio/Portafolio3.png';
import antPortIMG3 from './projects/AntiguoPortafolio/Portafolio4.png';
import antPortIMG4 from './projects/AntiguoPortafolio/Portafolio5.png';
import antPortIMG5 from './projects/AntiguoPortafolio/Portafolio6.png';

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
import ProyectosExtras from './projects/ProyectosExtrasDeJava/proyectosExtras.png';
import ProyectosExtras2 from './projects/ProyectosExtrasDeJava/proyectosExtras2.png';
import ProyectosExtras3 from './projects/ProyectosExtrasDeJava/proyectosExtras3.png';
import ProyectosExtras4 from './projects/ProyectosExtrasDeJava/proyectosExtras4.png';
import ProyectosExtras5 from './projects/ProyectosExtrasDeJava/proyectosExtras5.png';
import ProyectosExtras6 from './projects/ProyectosExtrasDeJava/proyectosExtras6.png';
import ProyectosExtras7 from './projects/ProyectosExtrasDeJava/proyectosExtras7.png';
import ProyectosExtras8 from './projects/ProyectosExtrasDeJava/proyectosExtras8.png';

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

// Dentalis Historias
import DentalisI from './projects/DentalisHistorias/DentalisI.png';
import DentalisH1 from './projects/DentalisHistorias/Dentalis1.png';
import DentalisH2 from './projects/DentalisHistorias/Dentalis2.png';
import DentalisH3 from './projects/DentalisHistorias/Dentalis3.png';
import DentalisH4 from './projects/DentalisHistorias/Dentalis4.png';
import DentalisH5 from './projects/DentalisHistorias/Dentalis5.png';

// Dentalis Turnero
import DentalisTI from './projects/DentalisTurnero/DentalisTI.png';
import DentalisT1 from './projects/DentalisTurnero/DentalisT1.png';
import DentalisT2 from './projects/DentalisTurnero/DentalisT2.png';
import DentalisT3 from './projects/DentalisTurnero/DentalisT3.png';
import DentalisT4 from './projects/DentalisTurnero/DentalisT4.png';
import DentalisT5 from './projects/DentalisTurnero/DentalisT5.png';

// Code Void
import CodeVoid1 from './projects/CodeVoid/CodeVoid1.png';
import CodeVoid2 from './projects/CodeVoid/CodeVoid2.png';
import CodeVoid3 from './projects/CodeVoid/CodeVoid3.png';
import CodeVoid4 from './projects/CodeVoid/CodeVoid4.png';
import { Language } from './components/Language'

function App() {

  const [estadoModal, setEstadoModal] = useState(false);
  const [contenidoModal, setContenidoModal] = useState('');
  const [idioma, setIdioma] = useState("espanol");

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
      <Language idioma={idioma} setIdioma={setIdioma} />
      <br /><br /><br /><br /><br /><br />
      <section id='inicio'>
        <img src="/fondo1.jpg" alt="" id='fondo1' />
        <motion.div className='cajaPresentacion'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, duration: 2 }}
        >
          <h3>{idioma == "espanol" ? "Bienvenido al portafolio de..." : "Welcome to the portfolio of..."}</h3>
          <h1>Matias Abregú</h1>
          <hr />
          <h2>{idioma == "espanol" ? "Desarrollador Web, Móvil y de Escritorio - Programador FullStack" :
            "Web Developer, Mobile and Desktop - FullStack Developer"}</h2>
        </motion.div>
        <motion.img src="/DragonNombre.png" id='imgPresentacion'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, duration: 2 }} />
      </section>
      <section id='habilidades'>
        <Title>{idioma == "espanol" ? "Habilidades" : "Skills"}</Title>
        <br /><br /><br /><br />
        <div className='cajas'>
          <Frame iconos={[["Java", Java, "Oro"], ["Javascript", JS, "Oro"], ["C#", CSharp, "Plata"], ["Luau", LUA, "Plata"], ["Python", Python, "Plata"], ["Typescript", Typescript, "Bronce"]]}>
            {idioma == "espanol" ? "Lenguajes de Programación" : "Programming languages"}
          </Frame>
          <Frame iconos={[["MySQL", MySQL, "Oro"], ["PHPMyAdmin", phpmyadmin, "Oro"], ["SQLite", SQLite, "Oro"], ["MongoDB", Mongo, "Plata"]]}>
            {idioma == "espanol" ? "Bases de Datos Relacionales y No Relacionales" : "Relational and non-relational databases"}
          </Frame>
          <Frame iconos={[["Bootstrap", BootStrap, "Plata"], [".NET", NET, "Bronce"], ["Express.js", Express, "Plata"], ["Spring", Spring, "Oro"]]}>
            Frameworks
          </Frame>
          <Frame iconos={[["SpringBoot", Springboot, "Plata"], ["SpringSecurity", Springsecurity, "Bronce"], ["JUnit5 + Mockito", JUnit, "Bronce"]]}>
            {idioma == "espanol" ? "Herramientas que uso con Spring" : "Tools that I use with Spring"}
          </Frame>
          <Frame iconos={[["Hibernate", Hibernate, "Oro"], ["Mongoose", Mongoose, "Bronce"]]}>
            {idioma == "espanol" ? "ORM y ODM" : "ORM and ODM"}
          </Frame>
          <Frame iconos={[["Maven", Maven, "Oro"], ["NPM", NPM, "Oro"], ["Nuget", Nuget, "Plata"]]}>
            {idioma == "espanol" ? "Gestores de Paquetes y Proyectos" : "Package and project managers"}
          </Frame>
          <Frame iconos={[["React", React, "Oro"], ["Node.js", Node, "Oro"], ["CSS3", CSS, "Oro"], ["HTML5", HTML, "Oro"], ["Handlebars", Handlebars, "Bronce"], ["MUI", MUI, "Plata"]]}>
            {idioma == "espanol" ? "Herramientas para uso Web" : "Tools that I use on Web"}
          </Frame>
          <Frame iconos={[["GIT", GIT, "Oro"], ["GitHub", Github, "Oro"]]}>
            {idioma == "espanol" ? "Herramientas para trabajar en equipo/Control de Versiones" : "Tools for teamwork/Version Control"}
          </Frame>
          <Frame iconos={[["Netbeans", Netbeans, "Oro"], ["Eclipse", Eclipse, "Plata"], ["VSCode", VSCode, "Oro"], ["Visual Studio", VisualStudio, "Oro"],
          ["Android Studio", Android, "Plata"]]}>
            {idioma == "espanol" ? "Entornos de Desarrollo" : "IDEs"}
          </Frame>
          <Frame iconos={[["Tomcat", tomcat, "Oro"], ["Postman", Postman, "Oro"], ["Docker", Docker, "Bronce"], ["Word", Word, "Plata"], ["PowerPoint", PowerPoint, "Plata"], ["Canva", Canva, "Plata"], ["Photoshop", Photoshop, "Oro"]]}>
            {idioma == "espanol" ? "Otros" : "Others"}
          </Frame>
        </div>
      </section>
      <section id='proyectos'>
        <br />
        <Title>{idioma == "espanol" ? "Proyectos" : "Projects"}</Title>
        <img src='/retro.jpg' alt='' id='fondo2' />
        <br /><br /><br /><br /><br /><br /><br />
        <div className='cajas'>
          <Frame2 estrella={true} img={hackacode1} herramientas={[[Java, "Oro"], [Springboot, "Plata"], [Hibernate, "Oro"], [Springsecurity, "Bronce"], [JUnit, "Bronce"], [JS, "Oro"], [React, "Oro"], [MUI, "Plata"], [GIT, "Oro"], [Github, "Oro"]]} funcionModal={establecerModal} contenido={idioma == "espanol" ? [[hackacode1, "Proyecto llevado a cabo en competición de programación en dónde logré quedar en primer puesto. Además de las herramientas mostradas anteriormente use: Netbeans, Visual Studio Code, MySQL, Docker, JWT y CryptoJS, etc..."], [hackacode2, ""], [hackacode3, "Si bien la imagen anterior dice que fue en equipo, el proyecto fue realizado en su totalidad por mi... Estando enfermo y con mis compañeros desaparecidos... Fue una competición dónde aprendí muchisimo en todos los aspectos y dónde recibi ayuda de mi Project Manager y sus amigos cerca del final para el despliegue de la aplicación..."], [hackacode4, "Pero en conclusión, me divertí bastante aunque sufrí, no es para negarlo. ¡Pero sin sufrimiento no hay aprendizaje! De corazón estoy agradecido por todo lo que viví en ese evento. \n\n• Link a la página: http://vps-3991849-x.dattaweb.com:5173"], [hackacode5, "• Link al repo back: https://github.com/MatiasAbregu/Repositorio-Backend-Grupo2 \n• Link al repo front: https://github.com/MatiasAbregu/Repositorio-Frontend-Grupo2 \n• Link al directo de presentación: https://www.youtube.com/watch?v=nF1zVrUPl8c&t=6492s"]] : [[hackacode1, "A project from a programming competition where I got the first place. Besides, the shown tools before I used: Netbeans, Visual Studio Code, MySQL, Docker, JWT y CryptoJS, etc..."], [hackacode2, ""], [hackacode3, "Although the previous image says it was a team project, all the project was created only by me... I was sick and my teammates were disappeared... It was a competition where I got a lot of experience in every aspect and where I got help by my project manager and his friends near to the end to deploy the application..."], [hackacode4, "Whatever, it was funny, even though I suffered a lot, why deny it?. ¡But without pain, there's no learning! Heart to heart, I'm grateful for all the thing that I lived in that event. "], [hackacode5, "• Link to backend repository: https://github.com/MatiasAbregu/Repositorio-Backend-Grupo2 \n• Link to frontend repository: https://github.com/MatiasAbregu/Repositorio-Frontend-Grupo2 \n• Link to livestream: https://www.youtube.com/watch?v=nF1zVrUPl8c&t=6492s"]]}>
            {idioma == "espanol" ? "Proyecto Ganador de Hackacode 🌟" : "Hackacode Winner Project 🌟"}
          </Frame2>

          <Frame2 img={CodeVoid1} herramientas={[[VSCode, "Oro"], [React, "Oro"], [JS, "Oro"], [HTML, "Oro"], [CSS, "Oro"], [GIT, "Oro"], [Github, "Oro"]]} funcionModal={establecerModal}
            contenido={idioma == "espanol" ? [[CodeVoid1, "Emprendimiento con un amigo en el cuál desarrollé una página web con animaciones, pantalla de carga y mejores prácticas logrando aumentar mi nivel. \n\n• Link a la página: https://codevoid.vercel.app"], [CodeVoid2, ""], [CodeVoid3, ""], [CodeVoid4, ""]] : [[CodeVoid1, "An entrepreneurship project with a friend where I developed a website featuring animations, a loading screen and where I improved my skills even more. \n\n• Link to website: https://codevoid.vercel.app"], [CodeVoid2, ""], [CodeVoid3, ""], [CodeVoid4, ""]]}>
            {idioma == "espanol" ? "Página CodeVoid" : "Code Void Website"}</Frame2>

          <Frame2 img={DentalisTI} herramientas={[[VSCode, "Oro"], [Node, "Oro"], [Express, "Plata"], [React, "Oro"], [JS, "Oro"], [CSS, "Oro"], [GIT, "Oro"]]} funcionModal={establecerModal} contenido={idioma == "espanol" ?
            [[DentalisT1, "Debido que es un proyecto para un cliente no puedo revelar código acerca del mismo pero puedo mostrar algunas imágenes de como es la app. Pero esto es una pantalla de carga. \n\n• Link a la página: https://dentalis.vercel.app"], [DentalisT3, "El inicio de la web que cuenta con la información esencial para contactar y conocer un poco más del consultorio."], [DentalisT2, "La página cuenta con dos apartados, pedir tratamiento o consulta en dónde cada uno tiene una duración predeterminada."], [DentalisT4, "Acá es dónde te permite seleccionar fecha y horario disponible para el turno."], [DentalisT5, "Por último cuenta con un formulario en dónde se rellenan los datos, y al pasar el tiempo y con día de anticipación al turno adquirido, se recibe un email de recordatorio. Esta web usa Vercel y Render para los deploy de Frontend y Backend."]] : [[DentalisT1, "Since it's a client project, I can't share the code, but I can show some images of what the app looks like. This one, for example, is a loading screen. \n\n• Link to website: https://dentalis.vercel.app"], [DentalisT3, "The beginning of the page have essential information to contact and know a little bit more of the dentist's office."], [DentalisT2, "The websites have two sections, in one hand you can ask for a treatment and in the other hand, you can ask for a consultation, in both case they've a predetermined time."], [DentalisT4, "Here is where you're able to select the time and the date for the appointment."], [DentalisT5, "Lastly, it has a form where you can fill with your personal information and in the appointment day you'll receive an reminder email. This website uses Vercel and Render for deploying the Frontend and Backend."]]}>
            {idioma == "espanol" ? "Proyecto Dentalis (Turnero)" : "Dentalis Project (Appointment system)"}</Frame2>

          <Frame2 img={DentalisI} herramientas={[[VisualStudio, "Oro"], [CSharp, "Plata"], [MySQL, "Oro"], [Github, "Oro"], [GIT, "Oro"]]} funcionModal={establecerModal} contenido={idioma == "espanol" ? [[DentalisH1, "Debido que es un proyecto para un cliente no puedo revelar código acerca del mismo pero puedo mostrar algunas imágenes de como es la app."], [DentalisH2, "Consiste en un sistema de historias clínicas con odontograma incluido en dónde un dentista puede llevar registro de sus pacientes."], [DentalisH3, "Acá el odontograma mencionado anteriormente, dónde el dentista puede usar herramientas que se le provee en el programa para poder agregar prótesis o algún otro tratamiento que está cargado en el sistema."], [DentalisH4, "Acá es en si dónde se muestra todo el historial clínico que tiene un paciente acorde a lo que el odontograma y el dentista van agregando en la tabla. La tabla cuenta con códigos cargados que facilitan el trabajo de escribir el tratamiento relacionado al código que se ingresa."], [DentalisH5, "Por último, cuenta con impresión de la historia clínica asociada al paciente con el logo de Dentalis en el mismo documento. (Los datos se rellenan solos cuando se ingresan los datos en el apartado de datos clínicos) IMG2"]] : [[DentalisH1, "Since it's a client project, I can't share the code, but I can show some images of what the app looks like."], [DentalisH2, "It's about a medical records system including dental chart where a dentist can keep track of it's patients."], [DentalisH3, "Here dental chart mentioned previously, where the dentist can use tools inside the program to add in the medical record some prosthetic or any other treatment that is entered into the system."], [DentalisH4, "This is where the entire medical  record is displayed, based in the dental chart and treatments that add the dentist. The table has codes loaded to make easier the job of entering the treatment related to a code."], [DentalisH5, "Lastly, it have the possibility to print the medical record related to a patient with the logo of Dentalis in the same document. (The data is filled automatically if it was entered in the initial form) IMG2"]]}>
            {idioma == "espanol" ? "Proyecto Dentalis (Historias)" : "Dentalis Project (Medical records)"}</Frame2>

          <Frame2 img={Arandu} herramientas={[[Android, "Plata"], [VSCode, "Oro"], [Java, "Oro"], [Node, "Plata"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"], [Github, "Oro"], [GIT, "Oro"]]} funcionModal={establecerModal} contenido={idioma == "espanol" ? [[Arandu, "Debido a que es un proyecto para un cliente no puedo revelar código acerca del mismo pero puedo mostrar muy pocas imágenes de como sería la app. Pero es una app de finanzas desarollada por mi ex emprendimiento llamada Patito Software."], [Arandu2, "Acá se ve lo que sería el inicio de la aplicación móvil. Desarrollada con Java en AndroidStudio y que contará con una conexión a una Base De Datos."], [Arandu3, "Una página web que contará con Node y también se relacionará con una Base de Datos."]] : [[Arandu, "Since it's a client project, I can't share the code, but I can show some images of what the app looks like. But is a finance app developed by my ex entrepreneurship called Patito Software."], [Arandu2, "Here you can see the beginning of the mobile app. Developed with Java in Android Studio and it'll have a database."], [Arandu3, "A website that will be developed in Node.js and it'll have a relation with a database."]]}>
            {idioma == "espanol" ? "Proyecto Arandu" : "Arandu Project"}</Frame2>

          <Frame2 img={Facundo} herramientas={[[Netbeans, "Oro"], [Java, "Oro"], [SQLite, "Oro"], [Github, "Oro"], [GIT, "Oro"]]}
            funcionModal={establecerModal} contenido={idioma == "espanol" ? [[Facundo2, "Aplicación de gestión de negocio desarrollada en Java y SQLite por mi ex emprendimiento (en la cual yo lideraba en el área de programación y ventas). Cuenta con varias funcionalidades que se puede apreciar en el video del final."], [Facundo3, "Interfaz de gestión de usuarios."], [Facundo4, "Interfaz donde se genera un 'comprobante digital simbolico' y que cuenta con varias funcionalides tales como aplicación de descuentos y uso de escaner."], [Facundo5, "Interfaz para administrar clientes y fiados."], [Facundo6, "Interfaz de registro del capital de la empresa."], [Facundo7, "Video"]] : [[Facundo2, "Business management application developed with Java and SQLite by my ex entrepreneurship (in which I was the leader in programming area and sales area). It has various options that you can appreciate in the end of the video."], [Facundo3, "User management interface."], [Facundo4, "Interface where you can generate a 'symbolic digital receipt'. The application, besides, has functionalities like discounts and the option to use scanner."], [Facundo5, "Interface to management clients."], [Facundo6, "Register interface of the company's capital"], [Facundo7, "Video"]]}>
            {idioma == "espanol" ? "Proyecto TuruWan" : "TuruWan Project"}</Frame2>

          <Frame2 img={Patito} herramientas={[[VSCode, "Oro"], [React, "Plata"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"], [Github, "Oro"]]}
            funcionModal={establecerModal} contenido={idioma == "espanol" ? [[Patito, "Sitio oficial de mi ex emprendimiento, el cual se encargaba de desarrollo de software. \n\n• Link: https://matiasabregu.github.io/pagina-patito-sin-react/"], [Patito2, "Formulario para ponerse en contacto."], [Patito3, "Un poco de código React."], [Patito4, "Un poco de código React."], [Patito5, "Un poco de código HTML e inclusión de Bootstrap para el proyecto."], [Patito6, "Un poco de código React."]] : [[Patito, "The official website of my ex entrepreneurship which it was charge of software development. \n\n• Link: https://matiasabregu.github.io/pagina-patito-sin-react/"], [Patito2, "Form to contact us."], [Patito3, "A little React code."], [Patito4, "A little bit more React code."], [Patito5, "A little HTML code HTML and Bootstrap inclusion in the project."], [Patito6, "A little React code."]]}>
            {idioma == "espanol" ? "Página de Patito" : "Patito Software Website"}</Frame2>

          <Frame2 img={CrudNode} herramientas={[[VSCode, "Oro"], [Node, "Plata"], [Handlebars, "Bronce"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"],
          [Mongo, "Plata"], [Mongoose, "Bronce"]]} funcionModal={establecerModal} contenido={idioma == "espanol" ? [[CrudNode, "Al final hay 2 videos que explican, pero es un noticiero (CRUD que usa Mongo) que tuve que desarrollar para un éxamen del instituto donde estudiaba. Hecho con Node, Express, Handlebars, etc..."], [CrudNode2, ""], [CrudNode3, ""], [CrudNode4, ""], [CrudNode5, "Video del funcionamiento de la página."], [CrudNode6, "Video del funcionamiento del código."]] : [[CrudNode, "In the end have two spanish videos that explain it but it's a CRUD that use Mongo. I needed to develope this software for an test from my old institute. Done with Node, Express, Handlebars, etc..."], [CrudNode2, ""], [CrudNode3, ""],
          [CrudNode4, ""], [CrudNode5, "Functionality video of the page."], [CrudNode6, "Functionality video of the page."]]}>
            {idioma == "espanol" ? "Noticiero de Ciberestafa" : "Cyberfraund news"}</Frame2>

          <Frame2 img={WM1} herramientas={[[LUA, "Plata"]]} funcionModal={establecerModal}
            contenido={idioma == "espanol" ? [[WM1, "Uno de los proyectos más interesantes aún en desarrollo que estoy haciendo con un amigo ecuatoriano. Un videojuego en roblox que usa como lenguaje LUAU (Lenguaje que fui aprendiendo sobre la marcha... Programe todo el funcionamiento yo tristemente, mucho código jajaja)"], [WM2, "Customización del personaje."], [WM3, "Código."], [WM4, "Un poco de la aldea."], [WM5, "Más código."], [WM6, "Un poco del desierto."], [WM7, "Y más código..."]] : [[WM1, "One of the most interesting projects that I'm making with an ecuatorian friend. A roblox game that use LUAU (Language that I went learning through the time... I developed all the functionality sadly, a lot of code hahaha)"], [WM2, "Character customization."], [WM3, "Code."], [WM4, "A little view of the village."], [WM5, "More code."], [WM6, "a little view of the desert."], [WM7, "And more code..."]]}>Wild Monsters</Frame2>

          <Frame2 img={Airlines} herramientas={[[Netbeans, "Oro"], [Java, "Oro"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"], [tomcat, "Oro"],
          [MySQL, "Oro"], [phpmyadmin, "Oro"]]} funcionModal={establecerModal}
            contenido={idioma == "espanol" ? [[videoAirlines, "Video de la página. Proyecto realizado por mi en 2022. Simulación de sitio de reserva de vuelos. Hecho con Java EE (JSP) y MySQL."], [Airlines, "Inicio."], [Airlines2, "Vuelos disponibles."], [Airlines3, "Código Javascript."], [Airlines4, "Más código."], [Airlines5, "Código Java."], [Airlines6, "Más código Java..."], [Airlines7, "Etiquetado HTML con JSP."]] : [[videoAirlines, "Website video. Project made by me in 2022. Flight reservation website. Made with Java EE (JSP) and MySQL."], [Airlines, "Beginning."], [Airlines2, "Avaible flights."], [Airlines3, "Javascript code."], [Airlines4, "More code."], [Airlines5, "Java code."], [Airlines6, "More Java code..."], [Airlines7, "Hypertext market language with JSP."]]}>
            Matias Airlines </Frame2>

          <Frame2 img={Concesionario} herramientas={[[Netbeans, "Oro"], [Java, "Oro"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"], [tomcat, "Oro"],
          [MySQL, "Oro"], [phpmyadmin, "Oro"]]} funcionModal={establecerModal} contenido={idioma == "espanol" ? [[Concesionario, "Al final hay un video que explica el proyecto. Hecho con Java y MySQL. Concesionario de vehiculos."], [Concesionario2, ""], [Concesionario3, ""], [Concesionario4, ""], [Concesionario5, ""], [Concesionario6, ""], [Concesionario7, "Video."]] : [[Concesionario, "In the end are a video that explains the project. Made with Java and MySQL. Vehicle dealership."], [Concesionario2, ""], [Concesionario3, ""], [Concesionario4, ""], [Concesionario5, ""], [Concesionario6, ""], [Concesionario7, "Video."]]}>
            {idioma == "espanol" ? "Concesionario Brolto" : "Dealership Brolto"}</Frame2>

          <Frame2 img={AppSuper} herramientas={[[Android, "Plata"], [Java, "Oro"], [MySQL, "Oro"], [phpmyadmin, "Oro"]]}
            funcionModal={establecerModal} contenido={idioma == "espanol" ? [[AppSuper, "Una app hecha en Android para mi hogar, es tan simple como una lista que nos permite a mi familia y a mi seleccionar lo que necesitamos para luego desmarcarlo una vez que se ha comprado. Hecho con Java y Base de Datos MySQL gratuita."], [AppSuper2, ""], [AppSuper3, ""], [AppSuper4, ""], [AppSuper5, ""], [AppSuper6, ""]] : [[AppSuper, "An app made in Android to my home, it's a simple list that able to us select what we need, to after unchecked once bought the things. Made with Java and a free MySQL database."], [AppSuper2, ""], [AppSuper3, ""], [AppSuper4, ""], [AppSuper5, ""], [AppSuper6, ""]]}>
            {idioma == "espanol" ? "App lista supermercado" : "App supermaket list"}</Frame2>

          <Frame2 img={Bots} herramientas={[[VSCode, "Oro"], [Node, "Plata"], [JS, "Oro"]]} funcionModal={establecerModal}
            contenido={idioma == "espanol" ? [[Bots, "Bots de Discord que he hecho por puro entretenimiento. Hechos con Javascript y Node."], [Bots2, ""], [Bots3, ""], [Bots4, ""], [Bots5, ""], [Bots6, ""]] : [[Bots, "Discord Bots I made just for fun. Made with Javascript and Node.js"], [Bots2, ""], [Bots3, ""], [Bots4, ""], [Bots5, ""], [Bots6, ""]]}>
            {idioma == "espanol" ? "Bots de Discord" : "Discord Bots"}</Frame2>

          <Frame2 img={TLEP1} herramientas={[[CSharp, "Plata"], [NET, "Bronce"]]} funcionModal={establecerModal}
            contenido={idioma == "espanol" ? [[TLEP1, "El único de mi curso en hacer todos los ejercicios que habia propuesto el profesor por entretenimiento. Hecho con C# y Formularios .NET; Al final hay un video que muestra su funcionamiento."], [TLEP12, ""], [TLEP13, ""], [TLEP14, ""], [TLEP15, ""], [TLEP16, ""]] : [[TLEP1, "I was the only one in my class who did all exercises that teacher gave us, also just for fun. Made with C# and Forms .NET; In the end, there is a video that shows how it works."], [TLEP12, ""], [TLEP13, ""], [TLEP14, ""], [TLEP15, ""], [TLEP16, ""]]}>
            {idioma == "espanol" ? "Ejercicios con C# - 1" : "Exercises with C# - 1"}</Frame2>

          <Frame2 img={TLEP2} herramientas={[[CSharp, "Plata"], [NET, "Bronce"]]} funcionModal={establecerModal}
            contenido={idioma == "espanol" ? [[TLEP2, "Sin duda uno de los proyectos que más me entretuve haciendo sobre todo por la batalla naval que la hice muchisimo más compleja de lo que la habia pedido el profesor (PD: la sencilla nadie la hizo jajaja). Hecho con C# y Formularios .NET"], [TLEP22, ""], [TLEP23, ""], [TLEP24, "¡La batalla naval!"], [TLEP25, ""], [TLEP26, "Video."]] : [[TLEP2, "Without doubt, one of the most fun project that I made, especially because of the Battleship game, which I made way more complex than the teacher asked for (PS: no one even did the simple one hahahaha). Made with C# y Forms .NET"], [TLEP22, ""], [TLEP23, ""], [TLEP24, "¡The battleship game!"], [TLEP25, ""], [TLEP26, "Video."]]}>
            {idioma == "espanol" ? "Ejercicios con C# - 2" : "Exercises with C# - 2"}</Frame2>

          <Frame2 img={Mercarro} herramientas={[[Netbeans, "Oro"], [Java, "Oro"], [HTML, "Oro"], [CSS, "Oro"], [tomcat, "Oro"],
          [MySQL, "Oro"], [phpmyadmin, "Oro"]]} funcionModal={establecerModal} contenido={idioma == "espanol" ? [[videoMercarro, "Video de mercarro."], [Mercarro, "Sitio web de supermercado, mi primer  proyecto JSP sabiendo muy poco de HTML, CSS y Javascript."], [Mercarro2, ""], [Mercarro3, ""], [Mercarro4, ""], [Mercarro5, ""], [Mercarro6, ""], [Mercarro7, ""]] : [[videoMercarro, "Mercarro video."], [Mercarro, "Supermaket website, my first project in JSP knowing a litte about HTML, CSS and Javascript."], [Mercarro2, ""], [Mercarro3, ""],
          [Mercarro4, ""], [Mercarro5, ""], [Mercarro6, ""], [Mercarro7, ""]]}>
            Mercarro </Frame2>

          <Frame2 img={Norex} herramientas={[[Netbeans, "Oro"], [Java, "Oro"]]} funcionModal={establecerModal}
            contenido={idioma == "espanol" ? [[videoNorex, "Video."], [Norex, "Aplicación donde se reserva comida y el pedido es enviado por un socket a otra aplicación que permite ver que es lo que se encargo."], [Norex2, ""], [Norex3, ""], [Norex4, ""], [Norex5, ""], [Norex6, ""]] : [[videoNorex, "Video."], [Norex, "Application where people can order food, and the order is sent through a socket to another application that shows what was requested."], [Norex2, ""], [Norex3, ""], [Norex4, ""], [Norex5, ""], [Norex6, ""]]}> Norex </Frame2>

          <Frame2 img={AntPort} herramientas={[[VSCode, "Oro"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"]]} funcionModal={establecerModal}
            contenido={idioma == "espanol" ? [[AntPort, "Mi antiguo portafolio, increíble lo que he subido el nivel, ¿No? Jajajaja"], [antPortIMG, ""], [antPortIMG2, ""], [antPortIMG3, ""], [antPortIMG4, ""], [antPortIMG5,]] : [[AntPort, "my old portfolio, awesome how I improved my level, right? Hahahahaha"], [antPortIMG, ""], [antPortIMG2, ""], [antPortIMG3, ""], [antPortIMG4, ""], [antPortIMG5,]]}>
            {idioma == "espanol" ? "Antiguo Portafolio" : "Old portfolio"} </Frame2>

          <Frame2 img={Paginas} herramientas={[[VSCode, "Oro"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"]]} funcionModal={establecerModal}
            contenido={idioma == "espanol" ? [[Paginas, "Sitios hechos iguales a los que se me pidio en el instituto. Hechos con poquito Javascript."], [Paginas2, ""], [Paginas3, ""], [Paginas4, ""], [Paginas5, ""], [Paginas6, ""], [Paginas7, ""]] : [[Paginas, "Websites made same what asked for in my institue. Made with a little Javascript."], [Paginas2, ""], [Paginas3, ""], [Paginas4, ""], [Paginas5, ""], [Paginas6, ""], [Paginas7, ""]]}>
            {idioma == "espanol" ? "Páginas de my ex instituto (Prácticos)" : "Websites from my old institute (Tests)"} </Frame2>

          <Frame2 img={ProyectosExtras} herramientas={[[Netbeans, "Oro"], [Java, "Oro"]]} funcionModal={establecerModal}
            contenido={idioma == "espanol" ? [[ProyectosExtras2, "Muchos de mis primeros proyectos hechos con Java. Algunos por mero entretenimiento y otros probando cosas. Ej. LandNet usa sockets."], [ProyectosExtras3, ""], [ProyectosExtras4, ""], [ProyectosExtras5, ""], [ProyectosExtras6, ""], [ProyectosExtras7, ""], [ProyectosExtras8, ""]] : [[ProyectosExtras2, "Many of my first projects were made with Java. Some project just for fun and others to test stuff. Ex. LandNet use sockets."], [ProyectosExtras3, ""], [ProyectosExtras4, ""], [ProyectosExtras5, ""], [ProyectosExtras6, ""], [ProyectosExtras7, ""], [ProyectosExtras8, ""]]}> {idioma == "espanol" ? "Proyectos extras de Java" : "Extra projects of Java"}</Frame2>

          <Frame2 img={SVA1} herramientas={[[Android, "Plata"], [Java, "Oro"], [SQLite, "Oro"]]} funcionModal={establecerModal}
            contenido={idioma == "espanol" ? [[SVA1, "Aplicación de reserva de vuelos hecho en Java y Android para un éxamen de mi ex instituto a creatividad y usando todo lo que habiamos aprendido."], [SVA2, ""], [SVA3, ""], [SVA4, ""], [SVA5, ""], [SVA6, ""], [SVA7, ""]] : [[SVA1, "Flight reservation app made with Java and Android for a test from my old institute, only with a creativity and using all stuff that I learned."], [SVA2, ""], [SVA3, ""], [SVA4, ""], [SVA5, ""], [SVA6, ""], [SVA7, ""]]}>
            {idioma == "espanol" ? "App reserva de vuelos" : "Flight reservation app"} </Frame2>

          <Frame2 img={Worline} herramientas={[[VSCode, "Oro"], [HTML, "Oro"], [CSS, "Oro"], [JS, "Oro"]]} funcionModal={establecerModal}
            contenido={idioma == "espanol" ? [[Worline2, "Sitio web de un shopping el cual incluye muchas animaciones hechas con CSS y Javascript."], [Worline3, ""], [Worline4, ""], [Worline5, ""], [Worline6, ""], [Worline7, ""], [Worline8, ""]] : [[Worline2, "Shopping website which includes many animations made with CSS and Javascript."], [Worline3, ""], [Worline4, ""], [Worline5, ""], [Worline6, ""], [Worline7, ""], [Worline8, ""]]}>
            Worline </Frame2>
        </div>
      </section>
      <section id='SobreMi'>
        <br />
        <Title>{idioma == "espanol" ? "Sobre Mi" : "About me"}</Title>
        <br /><br /><br /><br /><br /><br /><br />
        <motion.div id='cajaSobreMi'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ type: "spring", bounce: 0.5, duration: 2 }}>
          <div className='cajaPresentacion sobremi'>
            <h1>{idioma == "espanol" ? "A continuación..." : "Next..."}</h1>
            <hr />
            <Carousel tipo={2} item={idioma == "espanol" ? [["¡Hola! Soy Matías Abregú Danieli, un joven programador con mucha ambición. Bien... ¿Qué pueden esperar de mi? \n\nFortalezas: Líder (muy predispuesto a ayudar al resto), Resiliente, Perseverante, Autoexigente, Proactivo, Curioso, Determinado, Noble, Honesto, Responsable, Realista y Disciplinado."],
            ["Bien, ahora si te gustaría saber un poco más de mi para comprender muchas de las cosas que dije entonces lee a continuación porque te contaré más de mi... \n\nComo se mencionó en mi anterior portafolio soy un chico que busca ayudar a la gente a comprender mucho más la tecnología, en un mundo que cambia constantemente. Realmente yo soy asi debido a que en mi familia soy el que más sabe de tecnología y siempre ando solucionando sus problemas, lo interesante es que yo descubrí mi pasión por la programación y las computadoras a la edad de 6 años. Desde entonces siempre quise involucrarme con todo su mundo, no fue hasta la edad de 14 años que decidí tener la iniciativa y aprendí a programar con un curso en internet sobre Java, el lenguaje con el que la gran mayoría de mis proyectos están hechos."], ["Lo gracioso es que a esa edad yo no me tomaba en serio la programación y sobre todo había comenzado a programar con un amigo que le SALIA TODO, en lo cual generó la creencia de que yo era un inútil para esto. Desde entonces abandoné la programación y no fue hasta los 16 años que volvi a retomarla pero esta vez aprendiendo C++ (Lenguaje con sintaxis compleja) pero que a mi a la larga no me generó complicación y pude programar alguna que otra cosita pequeña que me dio motivación pero a la larga la volvi a abandonar esta vez por los videojuegos. Entre años y años siempre fui muy curioso por explorar y aprender de TODO, lo cual hacia creer que tal vez la programación no era lo mio al fin y al cabo..."], ["Paso el tiempo y a fines de 2021 pensé, realmente ¿Qué estoy haciendo con mi vida? Fue ahi cuando dije, esto no puede ser asi, desde entonces comence con lo básico, entrenando mi cuerpo. Luego pase a adquirir habilidades sociales, luego dije que la programación era a lo que me quería dedicar dado que sino mi sueño no se haría realidad. En 2022 fue el gran cambio en mi vida, donde a día de hoy todo lo que hice lo sigo haciendo por más que no tenga ni una pizca de ganas e inclusive agregué nuevas tareas para endurecer más mi disciplina. Como dije, a día de hoy sigo haciendo todo e inclusive más lo más interesante es que gracias a mi concentración, exigencia, curiosidad y pasión (porque si, realmente me apasiona la programación sino no haría esto) he logrado hacer muchas cosas, desde programar una calculadora hasta hacer proyectos para gente de mi país y del extranjero, todos, trabajando codo a codo con amigos y compañeros."]]
              :
              [["¡Hello! I'm Matías Abregú Danieli, a young programmer with a lot of ambition. Well... ¿What can youe expect from me? \n\nStrengths: Leader (I'm always happy to give a hand to someone), Resilient, Perseverant, Self-demangind, Proactive, Curious, Determined, Kind-hearted, Honest, Responsible, Realistic y Disciplined."],
              ["Well, now if you're interesting to know a little more about me for understand many things that I said before then continue reading... \n\nHow It said in my previous portfolio, I'm a boy who try to help people to understand much more the technology, in a world in constant change. Actually, I'm like this because my family... I'm who know------------- soy el que más sabe de tecnología y siempre ando solucionando sus problemas, lo interesante es que yo descubrí mi pasión por la programación y las computadoras a la edad de 6 años. Desde entonces siempre quise involucrarme con todo su mundo, no fue hasta la edad de 14 años que decidí tener la iniciativa y aprendí a programar con un curso en internet sobre Java, el lenguaje con el que la gran mayoría de mis proyectos están hechos."], ["Lo gracioso es que a esa edad yo no me tomaba en serio la programación y sobre todo había comenzado a programar con un amigo que le SALIA TODO, en lo cual generó la creencia de que yo era un inútil para esto. Desde entonces abandoné la programación y no fue hasta los 16 años que volvi a retomarla pero esta vez aprendiendo C++ (Lenguaje con sintaxis compleja) pero que a mi a la larga no me generó complicación y pude programar alguna que otra cosita pequeña que me dio motivación pero a la larga la volvi a abandonar esta vez por los videojuegos. Entre años y años siempre fui muy curioso por explorar y aprender de TODO, lo cual hacia creer que tal vez la programación no era lo mio al fin y al cabo..."], ["Paso el tiempo y a fines de 2021 pensé, realmente ¿Qué estoy haciendo con mi vida? Fue ahi cuando dije, esto no puede ser asi, desde entonces comence con lo básico, entrenando mi cuerpo. Luego pase a adquirir habilidades sociales, luego dije que la programación era a lo que me quería dedicar dado que sino mi sueño no se haría realidad. En 2022 fue el gran cambio en mi vida, donde a día de hoy todo lo que hice lo sigo haciendo por más que no tenga ni una pizca de ganas e inclusive agregué nuevas tareas para endurecer más mi disciplina. Como dije, a día de hoy sigo haciendo todo e inclusive más lo más interesante es que gracias a mi concentración, exigencia, curiosidad y pasión (porque si, realmente me apasiona la programación sino no haría esto) he logrado hacer muchas cosas, desde programar una calculadora hasta hacer proyectos para gente de mi país y del extranjero, todos, trabajando codo a codo con amigos y compañeros."]]} />
          </div>
          <Carousel tipo={1} item={[[Yo2022, "Yo en 2022"], [Yo2024, "Yo a principios de 2024"], [Yo2024Actual, "Yo con un regalo preciado de mi abuela actualmente en 2024"]]} />
        </motion.div>
        <br />
      </section>
      <section id='Contactame'>
        <br />
        <Title>{idioma == "espanol" ? "Contactame" : "Contact me"}</Title>
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
        <h1> 🐲 Derechos reservados a Matias Abregú 🐲 © 2025 </h1>
      </footer>
    </>
  )
}

export default App