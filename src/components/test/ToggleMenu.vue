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
// function activateLink() {
//     const list = document.querySelectorAll('.list')
//     list.forEach((item) => {
//         item.classList.remove('active')
//         this.classList.add('active')
//     })
// }
</script>

<template>
    <div class="navigation">
        <div class="menuToggle" @click="toggleMenu">
        </div>
        <ul>
            <li class="list active" style="--clr:#f44336;">
                <a href="#">
                    <span class="icon">
                        <el-icon><House /></el-icon>
                    </span>
                    <span class="text">Home</span>
                </a>
            </li>
            <li class="list active" style="--clr:#ffa117;">
                <a href="#">
                    <span class="icon">
                        <el-icon><User /></el-icon>
                    </span>
                    <span class="text">About</span>
                </a>
            </li>
            <li class="list active" style="--clr:#0fc70f;">
                <a href="#">
                    <span class="icon">
                        <el-icon><Message /></el-icon>
                    </span>
                    <span class="text">Message</span>
                </a>
            </li>
            <li class="list active" style="--clr:#2196f3;">
                <a href="#">
                    <span class="icon">
                        <el-icon><Picture /></el-icon>
                    </span>
                    <span class="text">Photos</span>
                </a>
            </li>
            <li class="list" style="--clr:#b145e9;">
                <a href="#">
                    <span class="icon">
                        <el-icon><Setting /></el-icon>
                    </span>
                    <span class="text">Settings</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.navigation {
    position: relative;
    /* inset: 20px 0 20px 20px; */
    width: 61px;
    height: 80%;
    margin: 2rem;
    background: #fff;
    transition: 0.25s;
    display: flex;
    justify-content: center;
    align-items: center;
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
    /* justify-content: center; */
    padding: 0 1rem 0 1rem;
}
.navigation .menuToggle::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background: rgba(50, 50, 50, 0.5);
    transform: translateY(-8px);
    transition: 0.25s;
}
.navigation.open .menuToggle::before {
    transform: translateY(0px) rotate(45deg);
    height: 2px;
    background: rgba(50, 50, 50, 1);
}
.navigation .menuToggle::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background: rgba(50, 50, 50, 0.5);
    transform: translateY(8px);
    transition: 0.25s;
    box-shadow: 0 -8px 0 rgba(50, 50, 50, 0.5);
}
.navigation.open .menuToggle::after {
    transform: translateY(0px) rotate(-45deg);
    height: 2px;
    background: rgba(50, 50, 50, 1);
    box-shadow: none;
}
.navigation ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding-left: 0;
}
.navigation ul li {
    list-style: none;
    position: relative;
    width: 100%;
    height: 60px;
    padding: 0 1rem;
    transition: 0.25s;
}
.navigation ul li a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    text-align: center;
    text-decoration: none;
}
.navigation ul li a .icon {
    position: relative;
    display: block;
    min-width: 55px;
    height: 55px;
    line-height: 60px;
    transition: 0.25s;
    color: #222;
    border-radius: 10px;
}
.navigation ul li.active a .icon {
    color: #fff;
    background: var(--clr);
}
.navigation ul li a .icon::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr);
    filter: blur(7px);
    opacity: 0;
    transition: 0.25s;
}
.navigation ul li.active a .icon::before {
    opacity: 0.5;
}
.navigation ul li a .text {
    position: relative;
    padding: 0 15px;
    height: 60px;
    display: flex;
    align-items: center;
    color: #333;
    opacity: 0;
    visibility: hidden;
    transition: 0.25s;
}
.navigation.open ul li a .text {
    opacity: 1;
    visibility: visible;
}
.navigation ul li.active a .text {
    color: var(--clr);

}
</style>