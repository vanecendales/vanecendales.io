// create the module and name it vaneApp
var app = angular.module('vaneApp', ['ngRoute', 'ngAnimate', 'pascalprecht.translate']);

app.config(function($translateProvider) {
	$translateProvider.translations('en', {
/*HOME*/
		TITLEMENU_HOME: 'Home',
		TITLE_HOME: 'Vanessa Cendales',
		MESSAGE_HOME: 'Frontend Developer',
/*ABOUT*/
		TITLE_ABOUT: 'About me',
		MESSAGE_ABOUT: 'About Vanessa Cendales´s life',
		CONTENT_ABOUT: 'Graphic Designer graduated from Jorge Tadeo Lozano University. Im 36 and i born in Cali-Colombia, im a code-fan/code-lover, i think the code is perfect, or it could be if its well done. DESIGN  is who i am, my style and my way who i see the life. I Love sports and nature, and i try to integrate it to my dialy live. And Finally i love my job, investigate all days and be better every day, thats our real value like humans.',
		CONTENT_ABOUT1: 'My professional profile is focus on client´s side develop, (html5-js-css3); frontend development of websites, intranets, apps, plugins, modules based on JS y PHP. I have more than 6 years of knowelgde and experience working under SEO development standars, organic optimization on search spiders like google or yahoo.',

/*SKILLS*/
		TITLE_SKILLS: 'Skills',
		MESSAGE_SKILLS: 'What i do best',
/*STUDY*/
		TITLE_STUDY: 'Study',
		MESSAGE_STUDY: 'My educational and professional experience',
		JANUARY: 'January',
		JUNE: 'June',
		JULY: 'July',
		AUGUST: 'August',
		NOVEMBER: 'November',
		BACHELOR: 'Bachelor',
		GRAPHIC: 'Graphic Designer',
		PRODUCER: 'Multimedia & Animation Producer',
		CERTIFICATION: 'HTML5 - CCS3 Certification',
		STUDY_1: 'JAVERIANO - PASTO.',
		STUDY_2: 'Profesional Graphic Designer from Jorge Tadeo Lozano University ',
		STUDY_3: 'Postgrade realized in the same university ',
		STUDY_4: 'Microsoft license, pre-requisite to work for the government',
		STUDY_5: 'Integral Web Designer',
		STUDY_6: 'SEO Web Developer especialized',

/*WORK*/
		TITLE_WORK: 'Portfolio',
		MESSAGE_WORK: 'My work',
		DESIGN:'Design',
		DEVELOP:'Development',
		LAYOUT:'Layout',
		WORK_1: 'Intranet developed in Sharepoint 365, i made the web design from 0, layout in html js and css. Masterpage created with bootstrap and angular',
		WORK_2: 'Experimental Website of my own portfolio. Based on javascript and functions on the interaction of the mouse scroll.',
		WORK_3: 'Wordpress Real State - booking website. I made the layout and the design is made by his marketing team.',
		WORK_4: 'Website, APP, and exterior device (kiosk), Tourism portal related to Medellín, his principal interest sites, is very interactive, has games in the kiosk and you can win a secret gift. ',
		WORK_5: 'Delivery Food APP and website. I made the layout and responsive version of the app.',
		WORK_6: 'Whatsapp Weedding invitation with a pure Javascript form who sends the results via email.',
		WORK_7: 'Last project i was working on. Its about a eduactional portal with store and book creator, made in vue.js, less, javascript vanilla and html5. Also i made de the Design of the site and the app' ,
		WORK_8: 'Official site of de INTERNEXA Colombia, developed under Sharepoint 365, the full work consist in full design - full layout and basic development in html, js y css. Masterpage realizada con bootstrap y angular',

/*CONTACT*/
		TITLE_CONTACT: 'Contact Me',
		MESSAGE_CONTACT: 'Write me a line ;)',	
        ADDRESS: 'Write me a line ;)',	
        ADDRESS: 'Address:',	
		PHONE: 'Phone:',	
		EMAIL: 'E-mail',
		FOLLOW: 'Follow me:',
		NAME: 'Name:',
		MESSAGE: 'Message:',

/*MISCELANEUS*/		
		en: 'English',
		es: 'Español'
	})
	.translations('es', {
/*HOME*/
		TITLEMENU_HOME: 'Inicio',
		TITLE_HOME: 'Vanessa Cendales',
		MESSAGE_HOME: 'Desarrolladora Frontend',
/*ABOUT*/
		TITLE_ABOUT: 'bio',
		MESSAGE_ABOUT: 'Un poco acerca de mi',
		CONTENT_ABOUT: 'Diseñadora Grafica egresada de la U. Jorge Tadeo Lozano. tengo 35 años nací en Cali, Me gusta el código porque es perfecto, o puede llegar a serlo. EL Diseño es lo que soy, es mi estilo y mi forma de ver la vida. Amo el deporte y la naturaleza y trato de mezclarlos en mi vida diaria. Y Amo mi trabajo, investigar y ser mejor, en eso radica nuestro valor como personas.',
		CONTENT_ABOUT1: 'Mi perfil Laboral es enfocado al desarrollo del lado del cliente; diseño y programación frontend. de páginas, intranets, aplicaciones, plugins, apps, basados en JS y PHP. Cuento con conocimiento y mas de 6 años de experiencia trabajando bajo estándares de SEO para optimización organica en buscadores, tanto en el desarrollo como en el sostenimiento del proyecto. Mi fuerte es la Maquetacion en html5, adecuacion de esticlos con less, ',

/*SKILLS*/
		TITLE_SKILLS: 'habilidades',
		MESSAGE_SKILLS: 'conocimientos y aptitudes',
/*STUDY*/
		TITLE_STUDY: 'estudios',
		MESSAGE_STUDY: 'Educacion formal y experiencia laboral',
		JANUARY: 'Enero',
		JUNE: 'Junio',
		JULY: 'Julio',
		AUGUST: 'Agosto',
		NOVEMBER: 'Noviembre',
		BACHELOR: 'Bachiller',
		GRAPHIC: 'Diseñadora Gráfica',
		PRODUCER: 'Productora de Multimedia y Animación',
		CERTIFICATION: 'Certificación HTML5 - CCS3',
		STUDY_1: 'JAVERIANO - PASTO. Colegio de formación Jesuíta donde estudie bachillerato en la ciudad de Pasto.',
		STUDY_2: 'Titulo profesional egresada de la Universidad Jorge Tadeo Lozano ',
		STUDY_3: 'Posgrado realizado en la Universidad Jorge Tadeo Lozano ',
		STUDY_4: 'Otorgado por Microsoft, para poder trabajar en plataformas Sharepoint de sitios del gobierno',
		STUDY_5: 'Diseñadora Web integral, creación de piezas de campaña, Web corporativa',
		STUDY_6: 'Diseñadora web especializada en SEO',
/*WORK*/
		TITLE_WORK: 'Portafolio',
		MESSAGE_WORK: 'Algunas muestras de trabajos realizados',
		DESIGN:'Diseño:',
		DEVELOP:'Desarrollo',
		LAYOUT:'Maquetación:',
		WORK_1: 'Intranet desarrollada bajo la plataforma Sharepoint 365, se realizó el diseño de la intranet, su implementación en html, js y css. Masterpage realizada con bootstrap y angular',
		WORK_2: 'Web experimental de mi portafolio anterior. Basada en javascript y en la interaccion de movimientos en el scroll del mouse.',
		WORK_3: 'Implementación de diseño Portal inmobiliario en Wordpress, plugin PHP a la medida de Crowfounding. Actividades e Email Marketing.',
		WORK_4: 'Portal de Turismo para la alcaldía de Medellín, el cual permite organizar rutas para visitar con información relevante a cada lugar o evento. Tiene aplicación móvil y una version para kioskos o dispositivos exteriores',
		WORK_5: 'Portal web de domicilios en la ciudad de Cali, tiene aplicación móvil.',
		WORK_6: 'Invitación para ser enviada por whatsapp. Contiene un formulario de confirmación de asistencia',
		WORK_7: 'Este es el proyecto en el que he estado trabajando los ultimos tiempos, consiste en una aplicacion para publicar contenido estudiantil, compartir y acceder mediante permisos para. Tambien Agregamos editor',
		WORK_8: 'Portal web de INTERNEXA Colombia, desarrollada bajo la plataforma Sharepoint 365, se realizó el diseño de la intranet, su implementación en html, js y css. Masterpage realizada con bootstrap y angular',

/*CONTACT*/
		TITLE_CONTACT: 'escríbeme',
		MESSAGE_CONTACT: 'Si quieres saber mas acerca de mí',
		ADDRESS: 'Dirección:',	
		PHONE: 'Teléfono',	
		EMAIL: 'Correo electrónico',
		FOLLOW: 'Sígueme:',	
		NAME: 'Nombre:',
		MESSAGE: 'Mensaje:',		
		
/*MISCELANEUS*/			
		en: 'English',
		es: 'Español'
	});

	$translateProvider.preferredLanguage('es');
});


// configure our routes
app.config(function ($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})

		// route for the home page
		.when('/skills', {
			templateUrl: 'pages/skills.html',
			controller: 'skillsController'
		})
		// route for the home page
		.when('/study', {
			templateUrl: 'pages/study.html',
			controller: 'studyController'
		})

		// route for the home page
		.when('/work', {
			templateUrl: 'pages/work.html',
			controller: 'workController'
		})
		// route for the about page
		.when('/about', {
			templateUrl: 'pages/about.html',
			controller: 'aboutController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl: 'pages/contact.html',
			controller: 'contactController'
		});

});
app.controller('HomeCtrl', function($translate) {
  var ctrl = this;  
  ctrl.language = 'es';
  ctrl.languages = ['en', 'es'];
ctrl.updateLanguage = function() {
		$translate.use(ctrl.language);
	};
});
// create the controller and inject Angular's $scope
app.controller('mainController', function ($scope) {
	// create a message to display in our view
	$scope.title = 'Inicio';
	$scope.pageClass = 'page-home';
});

app.controller('aboutController', function ($scope) {
	$scope.title = 'Bio';
	$scope.pageClass = 'page-about';
});

app.controller('contactController', function ($scope) {
	$scope.title = 'Escríbeme';
	$scope.pageClass = 'page-contact';
});
app.controller('workController', function ($scope) {
	$scope.title = 'Portafolio';
	$scope.pageClass = 'page-work';
});
app.controller('skillsController', function ($scope) {
	$scope.title = 'Habilidades';
	$scope.pageClass = 'page-skills';
});
app.controller('studyController', function ($scope) {
	$scope.title = 'Estudios';
	$scope.pageClass = 'page-study';
});