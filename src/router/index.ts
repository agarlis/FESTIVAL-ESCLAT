import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/home/Home.vue";
import Artistas from "@/pages/artistas/Artistas.vue";
import ArtistaDetalle from '@/pages/artistas/ArtistaDetalle.vue'
import Programa from "@/pages/programa/Programa.vue";
import Entradas from "@/pages/entradas/Entradas.vue";
import Info from "@/pages/info/Info.vue";
import Merchandising from "@/pages/merchandising/Merchandising.vue";
import Producto from "@/pages/producto/Producto.vue";
import Carrito from '@/pages/carrito/Carrito.vue'
import Checkout from '@/pages/checkout/Checkout.vue'

import AvisoLegal from "@/pages/legal/AvisoLegal.vue";
import Cookies from "@/pages/legal/Cookies.vue";
import ProteccionDatos from "@/pages/legal/ProteccionDatos.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/artistas",
      name: "artistas",
      component: Artistas,
    },
{
  path: '/artistas/:slug',
  name: 'artista-detalle',
  component: ArtistaDetalle,
},
    {
      path: "/programa",
      name: "programa",
      component: Programa,
    },
    {
      path: "/entradas",
      name: "entradas",
      component: Entradas,
    },
    {
    path: '/merchandising',
    name: 'merchandising',
    component: Merchandising
    },
    {
      path: '/producto/:id',
      name: 'producto',
      component: Producto
    },
    {
    path: '/carrito',
    name: 'carrito',
    component: Carrito
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
    {
      path: "/info",
      name: "info",
      component: Info,
    },
    {
      path: "/aviso-legal",
      name: "aviso-legal",
      component: AvisoLegal,
    },
    {
      path: "/cookies",
      name: "cookies",
      component: Cookies,
    },
    {
      path: "/proteccion-datos",
      name: "proteccion-datos",
      component: ProteccionDatos,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;