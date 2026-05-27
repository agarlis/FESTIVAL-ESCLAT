import lapaloma from '@/assets/imagenes/artistas/lapaloma.jpg'
import shego from '@/assets/imagenes/artistas/shego.jpg'
import lafumiga from '@/assets/imagenes/artistas/lafumiga.jpg'
import pogo from '@/assets/imagenes/artistas/pogo.jpg'
import mori from '@/assets/imagenes/artistas/mori.jpg'
import carinio from '@/assets/imagenes/artistas/carinio.jpg'
import blackpanda from '@/assets/imagenes/artistas/blackpanda.jpg'
import biznaga from '@/assets/imagenes/artistas/biznaga.jpg'
import barryb from '@/assets/imagenes/artistas/barryb.jpg'
import fatboyslim from '@/assets/imagenes/artistas/fatboyslim.jpg'
import neoverbeneo from '@/assets/imagenes/artistas/neoverbeneo.jpg'
import losplanetas from '@/assets/imagenes/artistas/losplanetas.jpg'
import niniapolaca from '@/assets/imagenes/artistas/niniapolaca.jpg'
import drea from '@/assets/imagenes/artistas/drea.jpg'


export const eventos = [
  // VIERNES 23
  {
    id: 1,
    slug: 'charla-creativa-viernes',
    titulo: 'Charla Creativa',
    dia: 'Viernes 23',
    diaSlug: 'viernes',
    hora: '17:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Charlas',
    categoriaSlug: 'charla',
    descripcion: 'Charla sobre creatividad contemporánea, diseño y cultura visual.',
    duracion: '30 min',
    inscripcion: true
  },

  {
    id: 2,
    slug: 'taller-improvisacion-viernes',
    titulo: 'Taller improvisación',
    dia: 'Viernes 23',
    diaSlug: 'viernes',
    hora: '18:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Talleres',
    categoriaSlug: 'taller',
    descripcion: 'Actividad participativa enfocada en improvisación artística impartida por Artur Martínez, cantante del grupo de La Fúmiga.',
    duracion: '1h',
    inscripcion: true
  },

  {
    id: 3,
    slug: 'la-paloma',
    titulo: 'La Paloma',
    dia: 'Viernes 23',
    diaSlug: 'viernes',
    hora: '19:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Conciertos',
    categoriaSlug: 'concierto',
    descripcion: 'Concierto en directo de La Paloma.',
    duracion: '1h',
    inscripcion: false,
    imagen: lapaloma
  },

  {
    id: 4,
    slug: 'taller-experimental-viernes',
    titulo: 'Taller Experimental',
    dia: 'Viernes 23',
    diaSlug: 'viernes',
    hora: '19:30',
    espacio: 'Sala XX - XXXX',
    categoria: 'Talleres',
    categoriaSlug: 'taller',
    descripcion: 'Actividad experimental creativa con plazas limitadas.',
    duracion: '1h',
    inscripcion: true
  },

  {
    id: 5,
    slug: 'shego',
    titulo: 'Shego',
    dia: 'Viernes 23',
    diaSlug: 'viernes',
    hora: '20:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Conciertos',
    categoriaSlug: 'concierto',
    descripcion: 'Concierto en directo de Shego.',
    duracion: '1h',
    inscripcion: false,
    imagen: shego
  },

  {
    id: 6,
    slug: 'la-fumiga',
    titulo: 'La Fúmiga',
    dia: 'Viernes 23',
    diaSlug: 'viernes',
    hora: '21:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Conciertos',
    categoriaSlug: 'concierto',
    descripcion: 'Concierto festivo con mezcla explosiva de estilos.',
    duracion: '1h 30 min',
    inscripcion: false,
    imagen: lafumiga
  },

  {
    id: 7,
    slug: 'pogo-djs',
    titulo: 'Pogo DJs',
    dia: 'Viernes 23',
    diaSlug: 'viernes',
    hora: '22:30',
    espacio: 'Sala XX - XXXX',
    categoria: 'Conciertos',
    categoriaSlug: 'concierto',
    descripcion: 'DJ set con electrónica, indie y energía festivalera.',
    duracion: '30 min',
    inscripcion: false,
    imagen: pogo
  },

  {
    id: 8,
    slug: 'mori',
    titulo: 'Mori',
    dia: 'Viernes 23',
    diaSlug: 'viernes',
    hora: '23:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Conciertos',
    categoriaSlug: 'concierto',
    descripcion: 'Concierto en directo de Mori.',
    duracion: '1h',
    inscripcion: false,
    imagen: mori
  },

  // SABADO 24
  {
    id: 9,
    slug: 'charla-disco',
    titulo: 'Charla Disco',
    dia: 'Sábado 24',
    diaSlug: 'sabado',
    hora: '19:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Charlas',
    categoriaSlug: 'charla',
    descripcion: 'Charla disco sobre cultura musical.',
    duracion: '1h',
    inscripcion: true
  },

  {
    id: 10,
    slug: 'carino',
    titulo: 'Cariño',
    dia: 'Sábado 24',
    diaSlug: 'sabado',
    hora: '20:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Conciertos',
    categoriaSlug: 'concierto',
    descripcion: 'Concierto de pop indie grupo Cariño.',
    duracion: '1h',
    inscripcion: false,
    imagen: carinio
  },

  {
    id: 11,
    slug: 'taller-improvisacion-sabado',
    titulo: 'Taller improvisación',
    dia: 'Sábado 24',
    diaSlug: 'sabado',
    hora: '20:30',
    espacio: 'Sala XX - XXXX',
    categoria: 'Talleres',
    categoriaSlug: 'taller',
    descripcion: 'Actividad participativa enfocada en improvisación artística impartida por Barry B.',
    duracion: '1h',
    inscripcion: true,
    
  },

  {
    id: 12,
    slug: 'black-panda',
    titulo: 'Black Panda',
    dia: 'Sábado 24',
    diaSlug: 'sabado',
    hora: '21:30',
    espacio: 'Sala XX - XXXX',
    categoria: 'Conciertos',
    categoriaSlug: 'concierto',
    descripcion: 'Live show electrónico.',
    duracion: '1h',
    inscripcion: false,
    imagen: blackpanda
  },

  {
    id: 13,
    slug: 'biznaga',
    titulo: 'Biznaga',
    dia: 'Sábado 24',
    diaSlug: 'sabado',
    hora: '22:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Conciertos',
    categoriaSlug: 'concierto',
    descripcion: 'Concierto punk rock.',
    duracion: '1h',
    inscripcion: false,
    imagen: biznaga
  },

  {
    id: 14,
    slug: 'barry-b',
    titulo: 'Barry B',
    dia: 'Sábado 24',
    diaSlug: 'sabado',
    hora: '23:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Conciertos',
    categoriaSlug: 'concierto',
    descripcion: 'Concierto de indie/pop.',
    duracion: '1h 30 min',
    inscripcion: false,
    imagen: barryb
  },

  {
    id: 15,
    slug: 'fatboy-slim',
    titulo: 'Fatboy Slim',
    dia: 'Sábado 24',
    diaSlug: 'sabado',
    hora: '00:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Conciertos',
    categoriaSlug: 'concierto',
    descripcion: 'DJ set internacional.',
    duracion: '2h',
    inscripcion: false,
    imagen: fatboyslim
  },

  // DOMINGO 25
  {
    id: 16,
    slug: 'charla-creativa-domingo',
    titulo: 'Charla Creativa',
    dia: 'Domingo 25',
    diaSlug: 'domingo',
    hora: '12:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Charlas',
    categoriaSlug: 'charla',
    descripcion: 'Charla sobre creatividad.',
    duracion: '1h 30 min',
    inscripcion: true
  },

  {
    id: 17,
    slug: 'taller-improvisacion-domingo',
    titulo: 'Taller Improvisación',
    dia: 'Domingo 25',
    diaSlug: 'domingo',
    hora: '15:30',
    espacio: 'Sala Creativa',
    categoria: 'Talleres',
    categoriaSlug: 'taller',
    descripcion: 'Actividad participativa con la colaboración de el grupo Los planetas.',
    duracion: '1h 30 min',
    inscripcion: true
  },

  {
    id: 18,
    slug: 'artista-desconocido',
    titulo: 'artista desconocido',
    dia: 'Domingo 25',
    diaSlug: 'domingo',
    hora: '17:30',
    espacio: 'Sala XX - XXXX',
    categoria: 'Conciertos',
    categoriaSlug: 'concierto',
    descripcion: 'Concierto de artista desconocido.',
    duracion: '1h',
    inscripcion: true
  },

  {
    id: 19,
    slug: 'coloquio',
    titulo: 'Coloquio',
    dia: 'Domingo 25',
    diaSlug: 'domingo',
    hora: '18:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Talleres',
    categoriaSlug: 'taller',
    descripcion: 'Coloquio sobre cultura musical con la participación de expertos y artistas invitados.',
    duracion: '1h',
    inscripcion: true
  },

  {
    id: 20,
    slug: 'neo-verbeneo',
    titulo: 'NeoVerbeneo',
    dia: 'Domingo 25',
    diaSlug: 'domingo',
    hora: '19:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Conciertos',
    categoriaSlug: 'concierto',
    descripcion: 'DJ set.',
    duracion: '1h',
    inscripcion: false,
    imagen: neoverbeneo
  },

  {
    id: 21,
    slug: 'los-planetas',
    titulo: 'Los Planetas',
    dia: 'Domingo 25',
    diaSlug: 'domingo',
    hora: '21:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Conciertos',
    categoriaSlug: 'concierto',
    descripcion: 'Concierto indie rock.',
    duracion: '1h 30 min',
    inscripcion: false,
    imagen: losplanetas
  },

  {
    id: 22,
    slug: 'nina-polaca',
    titulo: 'Niña Polaca',
    dia: 'Domingo 25',
    diaSlug: 'domingo',
    hora: '22:30',
    espacio: 'Sala XX - XXXX',
    categoria: 'Conciertos',
    categoriaSlug: 'concierto',
    descripcion: 'Concierto en directo.',
    duracion: '1h',
    inscripcion: false,
    imagen: niniapolaca
  },

  {
    id: 23,
    slug: 'drea',
    titulo: 'Drea',
    dia: 'Domingo 25',
    diaSlug: 'domingo',
    hora: '23:00',
    espacio: 'Sala XX - XXXX',
    categoria: 'Conciertos',
    categoriaSlug: 'concierto',
    descripcion: 'DJ set de cierre.',
    duracion: '1h',
    inscripcion: false,
    imagen: drea
  }
]