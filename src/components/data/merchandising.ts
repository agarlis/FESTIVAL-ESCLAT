import llavero from '@/assets/imagenes/merchandising/Llavero1.jpg'
import llaveroHover from '@/assets/imagenes/merchandising/Llavero2.jpg'

import pin from '@/assets/imagenes/merchandising/Pin1.jpg'
import pinHover from '@/assets/imagenes/merchandising/Pin2.jpg'

import taza from '@/assets/imagenes/merchandising/Taza1.jpg'
import tazaHover from '@/assets/imagenes/merchandising/Taza2.jpg'

import sudadera from '@/assets/imagenes/merchandising/Sudadera1.jpg'
import sudaderaHover from '@/assets/imagenes/merchandising/Sudadera2.jpg'

import camisetaColor from '@/assets/imagenes/merchandising/Camiseta1.jpg'

import camisetaBlanca from '@/assets/imagenes/merchandising/Camiseta2.jpg'

import gorra from '@/assets/imagenes/merchandising/Gorra1.jpg'
import gorraHover from '@/assets/imagenes/merchandising/Gorra2.jpg'

import totebag from '@/assets/imagenes/merchandising/Totebag1.jpg'
import totebagHover from '@/assets/imagenes/merchandising/Totebag2.jpg'

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
    imagen: pin,
    imagenHover: pinHover,
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
  imagen: camisetaColor,
  tallas: ['XS','S', 'M', 'L', 'XL']
},
{
  id: 6,
  nombre: "Camiseta blanca",
  precio: "18,00€",
  imagen: camisetaBlanca,
  tallas: ['XS','S', 'M', 'L', 'XL']
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