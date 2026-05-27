export type Entrada = {
  id: number
  tipo: string
  nombre: string
  titulo: string
  descripcion: string
  precio: string
}

export const entradas: Entrada[] = [
  {
    id: 1,
    tipo: 'Acceso individual',
    nombre: 'Entrada Viernes 23',
    titulo: 'Viernes 23',
    descripcion: 'Acceso completo al festival durante la jornada del viernes.',
    precio: '15€',
  },
  {
    id: 2,
    tipo: 'Acceso individual',
    nombre: 'Entrada Sábado 24',
    titulo: 'Sábado 24',
    descripcion: 'Acceso completo al festival durante la jornada del sábado.',
    precio: '15€',
  },
  {
    id: 3,
    tipo: 'Acceso individual',
    nombre: 'Entrada Domingo 25',
    titulo: 'Domingo 25',
    descripcion: 'Acceso completo al festival durante la jornada del domingo.',
    precio: '15€',
  },
  {
    id: 4,
    tipo: 'Acceso completo',
    nombre: 'Abono ESCLAT',
    titulo: 'Abono',
    descripcion: 'Vive la experiencia completa ESCLAT durante los tres días.',
    precio: '35€',
  },
  {
    id: 5,
    tipo: 'Experiencia premium',
    nombre: 'Entrada VIP',
    titulo: 'VIP',
    descripcion: 'Acceso prioritario, zona preferente y detalle exclusivo ESCLAT.',
    precio: '60€',
  },
]
