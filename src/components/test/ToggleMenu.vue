<script setup lang="ts">
// import { ref } from 'vue'

// menuToggle.onclick = function () {
//     navigation?.classList.toggle('open')
// }
// menuToggle?.addEventListener('click', () => {
//     console.log('Clicked')
//     navigation?.classList.toggle('open')
// })
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle')
    const navigation = document.querySelector('.navigation')
    navigation?.classList.toggle('open')
}
</script>

<template>
    <div class="navigation" @click="toggleMenu">
        <div class="menuToggle">
        </div>
    </div>
</template>

<style scoped>
.navigation {
    position: relative;
    /* inset: 20px 0 20px 20px; */
    width: 75px;
    height: 80%;
    margin: 2rem;
    background: #fff;
    transition: 0.25s;
}
.navigation.open {
    width: 250px;
}
.navigation .menuToggle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0 23px; */
}
.navigation .menuToggle::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background: #333;
    transform: translateY(-8px);
    transition: 0.5s;
}
.navigation.open .menuToggle::before {
    transform: translateY(0px) rotate(45deg);
}
.navigation .menuToggle::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background: #333;
    transform: translateY(8px);
    transition: 0.5s;
    /* box-shadow: 0 -8px 0 #333; */
}
.navigation.open .menuToggle::after {
    transform: translateY(0px) rotate(-45deg);
}
</style>