import llavero from '@/assets/imagenes/merchandising/Llavero1.png'
import llaveroHover from '@/assets/imagenes/merchandising/Llavero2.png'

import pinAzul from '@/assets/imagenes/merchandising/Pin2.png'
import pinAmarillo from '@/assets/imagenes/merchandising/Pin1.png'
import pinRojo from '@/assets/imagenes/merchandising/Pin3.png'

import taza from '@/assets/imagenes/merchandising/Taza1.png'
import tazaHover from '@/assets/imagenes/merchandising/Taza2.png'

import sudadera from '@/assets/imagenes/merchandising/Sudadera1.png'
import sudaderaHover from '@/assets/imagenes/merchandising/Sudadera2.png'

import camisetaPulpoDelante from '@/assets/imagenes/merchandising/camisetapulpo_DELANTE.png'
import camisetaPulpoDetras from '@/assets/imagenes/merchandising/camisetapulpo_ESPALDA.png'
import camisetaCaballoDelante from '@/assets/imagenes/merchandising/camisetacaballo_DELANTE.png'
import camisetaCaballoDetras from '@/assets/imagenes/merchandising/Camisetacaballo_TRASERA.png'
import camisetaGatoDelante from '@/assets/imagenes/merchandising/camisetadragon_DELANTE.png'
import camisetaGatoDetras from '@/assets/imagenes/merchandising/camisetadragon_TRASERA.png'

import camisetaAmarilla from '@/assets/imagenes/merchandising/CAMISETABASICA_amarilla.png'
import camisetaAzul from '@/assets/imagenes/merchandising/CAMISETABASICA_azul.png'
import camisetaRoja from '@/assets/imagenes/merchandising/CAMISETABASICA_roja.png'
import camisetaRosa from '@/assets/imagenes/merchandising/CAMISETABASICA_rosa.png'

import gorra from '@/assets/imagenes/merchandising/Gorra1.png'
import gorraHover from '@/assets/imagenes/merchandising/Gorra2.png'

import totebag from '@/assets/imagenes/merchandising/Totebag1.png'
import totebagHover from '@/assets/imagenes/merchandising/Totebag2.png'

import disco from '@/assets/imagenes/merchandising/Disco1.jpg'
import discoHover from '@/assets/imagenes/merchandising/Disco2.jpg'

export const productos = [
  {
    id: 1,
    nombre: "Llavero",
    precio: "3,00€",
    imagen: llavero,
    imagenHover: llaveroHover,
  },
  {
    id: 2,
    nombre: "Pin de metal esmaltado",
    precio: "2,00€",
    variantes: [
    {
      color: 'Amarillo',
      imagen: pinAmarillo
    },
    {
      color: 'Azul',
      imagen: pinAzul
    },
    {
      color: 'Rojo',
      imagen: pinRojo
    }
  ],
    imagen: pinRojo,
    imagenHover: pinAzul,


  },
  {
    id: 3,
    nombre: "Taza",
    precio: "8,00€",
    imagen: taza,
    imagenHover: tazaHover,
  },
  {
  id: 4,
  nombre: "Sudadera",
  precio: "25,00€",
  imagen: sudadera,
  imagenHover: sudaderaHover,
  tallas: ['XS','S', 'M', 'L', 'XL']
},
{
  id: 5,
  nombre: "Camiseta color",
  precio: "18,00€",

  variantes: [
    {
      color: 'Amarillo',
      imagen: camisetaCaballoDelante
    },
    {
      color: 'Azul',
      imagen: camisetaPulpoDelante
    },
    {
      color: 'Rojo',
      imagen: camisetaGatoDelante
    }
  ],

  galeria: [
    {
      color: 'Amarillo',
      imagen: camisetaCaballoDelante
    },
    {
      color: 'Amarillo',
      imagen: camisetaCaballoDetras
    },
    {
      color: 'Azul',
      imagen: camisetaPulpoDelante
    },
    {
      color: 'Azul',
      imagen: camisetaPulpoDetras
    },
    {
      color: 'Rojo',
      imagen: camisetaGatoDelante
    },
    {
      color: 'Rojo',
      imagen: camisetaGatoDetras
    }
  ],

  tallas: ['XS','S','M','L','XL']
},
{
  id: 6,
  nombre: "Camiseta blanca",
  precio: "12,00€",
 variantes: [
    {
      color: 'Amarillo',
      imagen: camisetaAmarilla
    },
    {
      color: 'Azul',
      imagen: camisetaAzul
    },
    {
      color: 'Rojo',
      imagen: camisetaRoja
    },
    {
      color: 'Rosa',
      imagen: camisetaRosa
    }
  ],
  imagen: camisetaAmarilla,
  imagenHover: camisetaAzul,

  tallas: ['XS','S', 'M', 'L', 'XL'],
},

   {
    id: 7,
    nombre: "Gorra",
    precio: "10,00€",
    imagen: gorra,
    imagenHover: gorraHover,
  },
  {
    id: 8,
    nombre: "Totebag",
    precio: "8,00€",
    imagen: totebag,
    imagenHover: totebagHover,
  },
  {
    id: 9,
    nombre: "Disco",
    precio: "12,00€",
    imagen: disco,
    imagenHover: discoHover,
  },
]