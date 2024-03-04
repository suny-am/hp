<template>
    <div class="about-container" ref="aboutContainer">
        <div class="about-close-button" @click="closeAbout">
            <SvgIcon type="mdi" :path="mdiCloseCircle" />
        </div>
        <h2 class="about-title"> About me</h2>
        <div class="about-content">
            <span>
                Who am I?
            </span>
            <br>
            <br>
            <span>
                A person who likes design in the most basic sense of the word?
            </span>
            <br>
            <span>
                An individual who feels equal parts alienated and astounded by their environment?
            </span>
            <br>
            <span>
                A small existence who still perseverse, despite the odds?
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCloseCircle } from "@mdi/js";

let aboutContainer = ref(null) as Ref<HTMLDivElement | null>;

const closeAbout = () => {
    if (!aboutContainer.value) return
    let windowWidth = window.innerWidth
    aboutContainer.value.style.transition = "all 800ms"
    aboutContainer.value.style.transform = `translateX(${windowWidth}px)`
}

onMounted(() => {
    if (!aboutContainer.value) return
    let windowWidth = window.innerWidth
    aboutContainer.value.style.transform = `translateX(${windowWidth}px)`
})

</script>

<style lang="scss">
@import "../styles/foundation/variables";

.about-container {
    background-color: $bg-color;
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    margin: 0;
    padding: 0;
    flex-flow: column;
    align-items: center;
    align-self: center;
    justify-content: center;
    justify-self: center;
    z-index: 2;

    .about-close-button {
        position: absolute;
        top: 0;
        right: 0;
        margin: 2rem;
        cursor: pointer;
    }
}
</style>
