import plant from '../assets/MainHome/plant-healthy.svg';
import disease from '../assets/MainHome/plant-disease.svg';
import detects from '../assets/MainHome/microscope-analysis.svg';
import tfsOne from '../assets/MainHome/card-content-1.svg';
import tfsTwo from '../assets/MainHome/card-content-2.svg';
import github from '../assets/github.svg';

export const data = {
  login: {
    title: 'INICIAR SESIÓN',
    form: ['Correo electrónico', 'Contraseña'],
    sign: 'no tienes una cuenta ',
    signBold: 'registrate'
  },
  register: {
    continue: 'CONTINUAR',
    title: 'REGÍSTRATE',
    form: ['Nombres', 'Apellidos', 'Correo electrónico', 'Contraseña'],
    sign: 'ya tienes una cuenta',
    signBold: 'inicia sesión'
  },
  headerHome: {
    title: 'PHG Plants',
    start: 'Comenzar',
    learn: 'Leer',
    contact: 'Contactos',
    aboutUs: 'Nosotros'
  },
  footer: {
    credits: 'sitio diseñado por @jochizan'
  },
  home: {
    descMain:
      'Aplicación web para la detección de enfermedades en plantas comunes en Perú y sus posibles tratamientos',
    buttonsHome: [
      { title: 'COMENZAR', css: 'one fs-5 letters-s-1', to: '/options' },
      { title: 'Qué es PlantDS?', css: 'two', to: '/why' },
      {
        title: `GitHub <img class='m-1 w-25' src=${github} alt='Logo de Github' />`,
        css: 'three letters-s-5',
        href: 'https://github.com/Uncle-Liquor/phg-plants'
      }
    ],
    cardsMain: [
      {
        title: 'Que plantas?',
        img: plant,
        description:
          ' Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
      },
      {
        title: 'Que enfermedades?',
        img: disease,
        description:
          'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
      },
      {
        title: 'Como las detecta?',
        img: detects,
        grid: 'grid-lg-2',
        description:
          'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
      }
    ],
    cardsPlants: [
      {
        title: 'Tomate',
        img: plant,
        description:
          'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
      },
      {
        title: 'Maíz',
        img: plant,
        description:
          'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
      },
      {
        title: 'Papas',
        img: plant,
        description:
          'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
      },
      {
        title: 'Apple',
        img: plant,
        description:
          'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
      },
      {
        title: 'Arandano',
        img: plant,
        description:
          'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
      },
      {
        title: 'Cherry',
        img: plant,
        description:
          'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
      }
    ],
    cardsDisease: [
      {
        title: 'Diasease 1',
        img: disease,
        description:
          'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
      },
      {
        title: 'Disease 2',
        img: disease,
        description:
          'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
      },
      {
        title: 'Disease 3',
        img: disease,
        description:
          'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
      },
      {
        title: 'Disease 4',
        img: disease,
        description:
          'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
      },
      {
        title: 'Disease 5',
        img: disease,
        description:
          'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
      },
      {
        title: 'Disease 6',
        img: disease,
        description:
          'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
      }
    ],
    tfs: {
      cards: [
        { title: 'Tecnologías & frameworks', img: tfsOne },
        { title: 'Lenguajes de Programación', img: tfsTwo }
      ]
    }
  }
};
