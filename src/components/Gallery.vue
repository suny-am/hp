<script setup lang="ts">

window.onload = () => {
    const gallery = document.querySelector(".gallery") as HTMLDivElement
    const galleryContainer = document.querySelector(".gallery-container") as HTMLDivElement
    const imageRoot = "/assets/images/"

    if (!gallery) return

    let image1 = document.createElement("img")
    let image2 = document.createElement("img")

    image1.src = imageRoot + "kaz-1.jpg"
    image2.src = imageRoot + "kaz-2.jpg"

    gallery.appendChild(image1)
    gallery.appendChild(image2)

    let startX: number, scrollLeft: number
    let grabbing = false

    const mouseDown = (event: MouseEvent) => {
        grabbing = true
        startX = event.pageX - galleryContainer.offsetLeft
        scrollLeft = galleryContainer.scrollLeft
    }

    const mouseUp = () => {
        grabbing = false
    }

    const mouseMoving = (event: MouseEvent) => {
        event.preventDefault()
        if (!grabbing) return
        const x = event.pageX - galleryContainer.offsetLeft
        const scrollAmount = x - startX
        if (scrollAmount < -300 || scrollAmount > 300) {
            forceMoveImage(galleryContainer, scrollAmount) // slide image over at this point
            return
        }
        galleryContainer.scrollLeft = scrollLeft - scrollAmount
    }

    const forceMoveImage = (galleryElement: HTMLDivElement, scrollAmount: number) => {


        console.log(scrollAmount)
        galleryElement.scrollTo(
            {
                left: scrollAmount < 0 ? 1000 : 0,
                behavior: "smooth",
            }
        )
    }

    galleryContainer.addEventListener("mousemove", mouseMoving, false)
    galleryContainer.addEventListener("mousedown", mouseDown, false)
    galleryContainer.addEventListener("mouseup", mouseUp, false)
    galleryContainer.addEventListener("mouseleave", mouseUp, false)
}
</script>

<template>
    <main>
        <div class="gallery-container">
            <div class="gallery">
            </div>
        </div>
    </main>
</template>

<style >
.gallery {
    display: flex;
    flex-flow: row;
}


.gallery-container {
    width: 600px;
    display: flex;
    position: absolute;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
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