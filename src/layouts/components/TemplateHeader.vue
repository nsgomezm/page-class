<template>
  <div class="bg-white shadow">
      <header class="container header">
        <div class="row">
          <div class="col-auto cross-center-grid">
            <img src="/favicon.ico" class="py-2">
          </div>
          <div class="col">
            <nav class="main-menu">
              <div class="btn-bars" id="icon-bars"></div>
              <ul class="main-menu__content" id="menu">
                <li class="main-menu__item">Inicio</li>
                <li class="main-menu__item">Vehículos</li>
                <li class="main-menu__item">Contáctenos</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  </div>
</template>

<script setup>
  import {onMounted} from "vue";

  onMounted(() =>{
    const btn = document.getElementById('icon-bars')

    btn.addEventListener('click', event => {
      event.target.classList.toggle('active')
      document.querySelector('#menu').classList.toggle('show')
    })




  })

</script>