<template>
    <Template>
        <div class="menu-social">
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
        </div>

        <div class="container-fluid bg-image py-lg-5" style="--image: url('/banners/car.webp')">
          <div class="container py-5">
            <div class="row">
              <div class="col-12 col-xl-auto  mb-lg-5 pb-5">
                <h1 class="text-white fw-bold">
                  ¡Tú eliges <span class="text-rc-primary">el destino</span>, <br>
                  nosotros ponemos <br> <span class="text-rc-primary">el vehiculo</span>!
                </h1>
              </div>
              <div class="col-12 bg-rc-primary p-3 p-lg-4 rounded-3 d-flex gap-3 flex-column flex-lg-row">
                <div class="d-flex w-100">
                  <div class="input-icon w-50">
                    <input type="text" class="form-control form-control-lg rounded-end-0" placeholder="Retiro">
                    <i class="fa-solid fa-location-dot me-2"></i>
                  </div>
                  <div class="input-icon w-50">
                    <input type="text" class="form-control form-control-lg rounded-start-0" placeholder="Devolución">
                    <i class="fa-solid fa-location-dot me-2"></i>
                  </div>
                </div>
                <div class="d-flex w-100">
                  <div class="input-icon w-50">
                    <input type="date" class="form-control form-control-lg rounded-end-0" placeholder="Retiro">
                    <i class="fa-solid fa-calendar me-2"></i>
                  </div>
                  <div class="input-icon w-50">
                    <input type="time" class="form-control form-control-lg rounded-start-0" placeholder="14:00">
                    <i class="fa-solid fa-clock me-2"></i>
                  </div>
                </div>
                <div class="input-group">
                  <input type="date" class="form-control form-control-lg" placeholder="Devolución">
                  <input type="time" class="form-control form-control-lg" placeholder="14:00">
                </div>
                  <select class="form-select">
                    <option selected disabled>Tipo de vehiculo</option>
                    <option value="op1">Option 1</option>
                    <option value="op2">Option 2</option>
                    <option value="op3">Option 3</option>
                  </select>

                  <button class="btn btn-rc-secondary">
                    <i class="fa-solid fa-search"></i>
                  </button>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-body-secondary py-5">
          <div class="container">
            <h4 class="fw-bold">Título sobre <span class="text-rc-primary">Renting Club</span></h4>
            <div class="mySwiper">
              <div class="swiper" id="mySwiper">
                <div class="swiper-wrapper">
                <div class="swiper-slide px-3 py-3" v-for="(card, index) in cards" :key="index">
                  <div class="mx-0 row p-3 rounded-4 shadow">
                    <div class="col-12 col-xl-auto  display-1 cross-center mb-3">
                      <i class="fa-solid fa-location-dot me-2"></i>
                    </div>
                    <div class="col">
                      <h4>{{ card.title}}</h4>
                      <p class="lh-1 mb-0"><small >{{ card.text }}</small></p>
                    </div>
                  </div>
                </div>
              </div>
  <!--              <div class="swiper-button-next"></div>-->
  <!--              <div class="swiper-button-prev"></div>-->
              </div>
              <i class="fa-solid fa-angle-left"></i>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>

    </Template>
</template>

<script setup>
import Template from "@/layouts/template.vue";
import {onMounted} from "vue";

const cards = [
  {title: 'Titulo o ventaja aqui', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestias praesentium suscipit. Accusantium aliquid dolor earum ex in, magni, modi molestiae natus, quaerat quas quia quod repudiandae voluptate voluptatem voluptates.'},
  {title: 'Titulo o ventaja aqui', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestias praesentium suscipit. Accusantium aliquid dolor earum ex in, magni, modi molestiae natus, quaerat quas quia quod repudiandae voluptate voluptatem voluptates.'},
  {title: 'Titulo o ventaja aqui', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestias praesentium suscipit. Accusantium aliquid dolor earum ex in, magni, modi molestiae natus, quaerat quas quia quod repudiandae voluptate voluptatem voluptates.'},
  {title: 'Titulo o ventaja aqui', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestias praesentium suscipit. Accusantium aliquid dolor earum ex in, magni, modi molestiae natus, quaerat quas quia quod repudiandae voluptate voluptatem voluptates.'},
  {title: 'Titulo o ventaja aqui', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestias praesentium suscipit. Accusantium aliquid dolor earum ex in, magni, modi molestiae natus, quaerat quas quia quod repudiandae voluptate voluptatem voluptates.'},
]


onMounted(() => {
      new window.Swiper("#mySwiper", {
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints:{
          0:{slidesPerView: 1},
          773: {slidesPerView: 2},
          1024:{slidesPerView: 3}
        },
        navigation: {
          prevEl: ".fa-angle-left",
          nextEl: ".fa-angle-right",
        },
      });
})
</script>
