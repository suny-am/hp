<template>
    <main>
        <div ref="galleryContainer" class="gallery-container">
            <div ref="gallery" class="gallery">
                <div class="gallery-image" ref="image1"></div>
                <div class="gallery-image" ref="image2"></div>
                <div class="gallery-image" ref="image3"></div>
            </div>
        </div>
        <button @click="stopSlider">{{ startSliderText }}</button>
    </main>
</template>

<script setup lang="ts">
import * as Data from "./data";
import { onMounted, ref, Ref } from "vue";

const galleryContainer = ref<HTMLDivElement | null>(null)
const gallery = ref<HTMLDivElement | null>(null)
const image1 = ref<HTMLDivElement | null>(null)
const image2 = ref<HTMLDivElement | null>(null)
const image3 = ref<HTMLDivElement | null>(null)

let startSliderText = Data.text.carouselStart
let stopSliderText = Data.text.carouselStop

let sliderActive = false

function stopSlider(event: any) {

    event.target.textContent = event.target.textContent == stopSliderText ? startSliderText : stopSliderText
    if (sliderActive) {
        console.log(event.target.textContent!)
        console.log(`Stopping slider at Date: ${new Date().toLocaleDateString()}, Time: ${new Date().toLocaleTimeString()}`)
        sliderActive = false
    }
    else {
        console.log(`Starting slider at Date: ${new Date().toLocaleDateString()}, Time: ${new Date().toLocaleTimeString()}`)
        sliderActive = true;
    }
}

function initSlider() {
    if (!gallery.value) return

    setTimeout(() => {
        setInterval(() => {

            if (!gallery.value || !sliderActive) return
            let firstImage = gallery.value.childNodes.item(0)
            let lastImage = gallery.value.childNodes.item(2)
            let lastImageClone = lastImage.cloneNode()

            for (let i = 0; i < gallery.value.children.length; i++) {
                let image = gallery.value.children.item(i) as HTMLDivElement
                image.style.transition = "unset"
                image.style.transform = "translateX(0px)"
            }

            lastImage.remove()
            gallery.value.childNodes.item(0).parentElement?.insertBefore(lastImageClone, firstImage)
        }, 4000)
    }, 3000)

    setInterval(() => {
        if (!gallery.value || !sliderActive) return
        let lastImage = gallery.value.childNodes.item(2) as HTMLDivElement
        lastImage.style.transition = "all 800ms"
        lastImage.style.transform = "translateX(600px)"
    }, 3000)
}

onMounted(async () => {

    sliderActive = false;

    if (!galleryContainer.value) return

    initSlider()

    let images = Array.from(document.querySelectorAll(".gallery-image")) as HTMLDivElement[]

    // WIP! set gallery image source; improve to make more dynamic
    for (let i = 0; i < images.length; i++) {
        let image = images[i]
        image.classList.add(`image${i}`)
        image.style.backgroundImage = Data.links.galleryImage
    }

    galleryContainer.value.addEventListener("mousemove", (event: MouseEvent) => {
        event.preventDefault()
        let targetImage = image3 as Ref<HTMLDivElement>
        let parentOffsetX = gallery.value!.offsetLeft
        let x
        if (event.buttons == 1) {
            if (event.movementX > 0) {
                x = (event.pageX - parentOffsetX) / 4
            }
            else if (event.movementX < 0) {
                x = (event.pageX - parentOffsetX - 300) / 2
            }
            console.log(`translateX(${x}px)`)
            targetImage.value!.style.transition = "all 0ms"
            targetImage.value!.style.transform = `translateX(${x}px)`
        } else {
            targetImage.value!.style.transition = "all 800ms"
            targetImage.value!.style.transform = "translateX(0)"
        }
    })

    galleryContainer.value?.addEventListener("mouseleave", (event: MouseEvent) => {
        event.preventDefault()
        let targetImage = gallery.value!.childNodes.item(2) as HTMLDivElement
        targetImage.style.transition = "all 800ms"
        targetImage.style.transform = "translateX(0)"
    })
})

</script>

<style scoped lang="scss">
.gallery {
    display: flex;
    contain: content;
    flex-flow: row;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    width: 800px;
    height: 800px;

    div {
        position: absolute;
        height: 100vh;
        background-position: center;
        width: 600px;
    }
}

// mimic different images
.image1 {
    filter: grayscale(1);
}

.image2 {
    filter: grayscale(0.5);
}

.image3 {
    filter: grayscale(0);
}


.gallery-container {
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: grab;
}

.gallery-container.grabbing {
    cursor: grabbing;
}

.gallery-container::-webkit-scrollbar {
    display: none;
    /* Safari and Chrome */
}
</style>./data