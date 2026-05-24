<template>
  <footer class="bg-white text-black px-10 py-10">

    <!-- LOGOS -->
    <div class="flex justify-center gap-16 flex-wrap mb-16">

        <div>LOGO 1</div>
        <div>LOGO 2</div>
        <div>LOGO 3</div>
        <div>LOGO 4</div>
        <div>LOGO 5</div>
        <div>LOGO 6</div>

    </div>

    <!-- LEGAL -->
    <div class="flex justify-center gap-8 text-sm mb-6">

      <RouterLink to="/aviso-legal">
        Aviso legal
      </RouterLink>

      <RouterLink to="/proteccion-datos">
        Protección de datos
      </RouterLink>

      <RouterLink to="/cookies">
        Política de cookies
      </RouterLink>

    </div>

    <!-- COPYRIGHT -->
    <div class="text-center text-xs opacity-70">
      © 2026 ESCLAT Festival
    </div>

  </footer>
</template>