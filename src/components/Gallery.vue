<template>
    <main>
        <div ref="galleryContainer" class="gallery-container">
            <div ref="gallery" class="gallery">
                <div class="image1" ref="image1"></div>
                <div class="image2" ref="image2"></div>
                <div class="image3" ref="image3"></div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const galleryContainer = ref<HTMLDivElement | null>(null)
const gallery = ref<HTMLDivElement | null>(null)
const image1 = ref<HTMLDivElement | null>(null)
const image2 = ref<HTMLDivElement | null>(null)
const image3 = ref<HTMLDivElement | null>(null)

function initSlider() {
    if (!gallery.value) return

    setTimeout(() => {
        setInterval(() => {
            if (!gallery.value) return
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
        if (!gallery.value) return
        let lastImage = gallery.value.childNodes.item(2) as HTMLDivElement
        lastImage.style.transition = "all 800ms"
        lastImage.style.transform = "translateX(600px)"
    }, 3000)


}

onMounted(async () => {
    initSlider()
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
        height: 850px;
        width: 600px;
        background-image: url("/assets/images/kaz-2.jpg");
    }
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
</style>