import plant from '../assets/MainHome/plant-healthy.svg';
import disease from '../assets/MainHome/plant-disease.svg';
import detects from '../assets/microscope-analysis.svg';
import tfsOne from '../assets/MainHome/card-content-1.svg';
import tfsTwo from '../assets/MainHome/card-content-2.svg';
import github from '../assets/github.svg';

// plants
import apple from '../assets/plants/apple.jpg';
import cherry from '../assets/plants/cherry.jpg';
import corn from '../assets/plants/corn.jpg';
import grape from '../assets/plants/grape.jpg';
import potato from '../assets/plants/potato.jpg';
import tomato from '../assets/plants/tomato.jpg';

// diseases
import esca from '../assets/diseases/esca.jpg';
import scab from '../assets/diseases/scab.jpg';
import cedarRust from '../assets/diseases/cedar-rust.jpg';
import cercospora from '../assets/diseases/cercospora.jpg';
import commonRust from '../assets/diseases/common-rust.jpg';
import powderyMildew from '../assets/diseases/powdery-mildew.jpg';

// about
import fis from '../assets/fis.png';
import uncp from '../assets/uncp.png';
import jochizan from '../assets/jochizan.png';
import ulLogo from '../assets/ul-logo.svg';

export const data = {
  login: {
    title: 'INICIAR SESIÓN',
    form: ['Correo electrónico', 'Contraseña'],
    sign: 'no tienes una cuenta ',
    signBold: 'regístrate'
  },
  register: {
    continue: 'CONTINUAR',
    title: 'REGÍSTRATE',
    form: ['Nombres', 'Apellidos', 'Correo electrónico', 'Contraseña'],
    sign: 'ya tienes una cuenta ',
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
        title: `GitHub <img class='m-1 w-25' src='${github}' alt='Logo de Github' />`,
        css: 'three letters-s-5',
        href: 'https://github.com/Uncle-Liquor/plant-ds'
      }
    ],
    cardsMain: [
      {
        title: '¿Que plantas?',
        img: plant,
        href: '#plants',
        description:
          'Podemos observar las más importantes como papa, maíz, tomate, entre otros ...'
      },
      {
        title: '¿Que patologías?',
        img: disease,
        href: '#diseases',
        description:
          'La mayoría son afecciones comunes de nuestra país Perú entre otros ....'
      },
      {
        title: '¿Cómo detecta?',
        img: detects,
        href: '#detect',
        description:
          'Los detecta a través de redes neuronales principalmente de tfjs'
      }
    ],
    cardsPlants: [
      {
        title: 'Tomate',
        img: tomato,
        description:
          'El tomate es el fruto de la planta conocida como tomatera, una especie herbácea que pertenece a la familia de las solanáceas y es nativa del continente americano. Los tomates son bayas de color rojizo que se caracterizan por su pulpa con múltiples semillas y por su jugo. '
      },
      {
        title: 'Maíz',
        img: corn,
        description:
          'El maíz es uno de los cereales más populares del mundo. Es la semilla de una planta de la familia de las gramíneas, nativa de América Central pero cultivada en innumerables variedades en todo el mundo. El maíz integral es tan saludable como cualquier cereal, ya que es rico en fibra y muchas vitaminas, minerales y antioxidantes.'
      },
      {
        title: 'Patata',
        img: potato,
        description:
          'La patata, también conocida como papa, es un tubérculo que tiene su origen en Sudamérica pero que, en la actualidad, se cultiva en diversas regiones del planeta. El Solanum tuberosum (denominación de la patata a nivel científico) es uno de los alimentos más importantes para la humanidad.'
      },
      {
        title: 'Manzana',
        img: apple,
        description:
          'La manzana es el fruto comestible de la especie Malus doméstica, el manzano común. Es una fruta pomácea de forma redonda y sabor muy dulce, dependiendo de la variedad.\n' +
          'La manzana es una fruta originaria de Asia Central y desde la antigüedad ha sido valorada como un alimento muy saludable. Tiene un sabor dulce y presenta distintas variedades (la golden, la fuji y la red delicious son las más conocidas). \n'
      },
      {
        title: 'Uvas',
        img: grape,
        description:
          'Las uvas son ricas en antioxidantes, su índice glucémico no es alto, sino medio; son ricas en fibra en hidratos de carbono (17%) de rápida asimilación; contienen vitamina C y entre sus minerales destacan el potasio, el cobre y el hierro, aunque también calcio, fósforo, magnesio, manganeso, azufre y selenio.'
      },
      {
        title: 'Cereza',
        img: cherry,
        description:
          'Carnosas, dulces y refrescantes, las cerezas son una fruta de verano con un gran poder antioxidante y con una composición nutricional que aporta muchos beneficios a nuestra salud. El origen de esta fruta se sitúa en el Mar Negro y en el Mar Caspio, llegando después a Europa y Asia, por medio de las aves y las migraciones humanas.'
      }
    ],
    cardsDisease: [
      {
        title: 'La costra de plantas',
        img: scab,
        description:
          'La costra de plantas es una enfermedad producida por el hongo Venturia inaequalis. El hongo se propaga con esporas en el aire y puede sobrevivir al invierno con hojas caídas. En esta enfermedad, se pueden ver marcas prominentes de costra en las hojas de las plantas. '
      },
      {
        title: 'Roña del cedro',
        img: cedarRust,
        description:
          'La roña del cedro es una infección fúngica causada por la especie Gymnosporangium juniper-virginianae. A menudo se confunde con otras infecciones por herrumbre, pero es completamente diferente. Lo que hace que el óxido de cedro y manzana sea realmente único es su ciclo de vida. El hongo requiere dos plantas hospederas completamente diferentes para completar un ciclo.'
      },
      {
        title: 'Esca',
        img: esca,
        description:
          'Esca, también llamado sarampión de la vid, sarampión negro o sarampión español, ha plagado durante mucho tiempo a los viticultores con su expresión críptica de síntomas y, durante mucho tiempo, con la falta de un organismo causal identificable.'
      },
      {
        title: 'Moho polvoriento',
        img: powderyMildew,
        description:
          'Una enfermedad fúngica generalizada no perdona la cereza de laurel. Después de que las esporas hibernan en la planta o se esconden entre las malas hierbas, acechan desde el comienzo del verano en un clima cálido y seco. Por lo tanto, el oidio también se conoce como "hongo del clima regular". Si las temperaturas superan los 20 grados, el viento y los insectos propagan el patógeno por toda el área. Una infestación se manifiesta en la primera etapa en forma de una pátina gris-blanca en la parte superior de las hojas para trabajar en la parte inferior.'
      },
      {
        title: 'Mancha Cercospora',
        img: cercospora,
        description:
          'La enfermedad de la mancha gris es causada por el hongo Cercospora zeae-maydis. Sobrevive en los residuos vegetales del suelo durante largos períodos de tiempo. Durante la primavera, las esporas llegan a las hojas inferiores a través de las salpicaduras de lluvia y el viento.'
      },
      {
        title: 'Roya común',
        img: commonRust,
        description:
          'La roya común produce pústulas alargadas de color óxido a marrón oscuro en ambas superficies de las hojas. Las pústulas contienen esporas de óxido (urediniosporas) que son de color marrón canela. Las pústulas se oscurecen a medida que envejecen. Tanto las hojas como las vainas pueden infectarse.'
      }
    ],
    cardsAbout: [
      {
        title: 'Jochizan',
        img: jochizan,
        href: 'https://developers.google.com/profile/u/100596963017130784226?utm_source=developers.google.com'
      },
      {

        title: 'Org. UL',
        img: ulLogo,
        href: 'https://github.com/Uncle-Liquor'
      },
      {
        title: 'FIS',
        img: fis,
        href: 'https://www.sistemasuncp.edu.pe'
      },
      {
        title: 'UNCP',
        img: uncp,
        href: 'https://uncp.edu.pe'
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
