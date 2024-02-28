<script setup lang="ts">

window.onload = () => {
  const galleryContainer = document.querySelector(".gallery-container") as HTMLDivElement

  if (!galleryContainer) return

  let grabbing = false
  let startX: number, scrollLeft: number

  const mouseDown = (event: MouseEvent) => {
    grabbing = true;
    startX = event.pageX
    scrollLeft = galleryContainer.scrollLeft
    galleryContainer.classList.toggle("grabbing")
  }

  const mouseUp = () => {
    grabbing = false;
    galleryContainer.classList.toggle("grabbing")
  }

  const mouseMove = (event: MouseEvent) => {
    event.preventDefault()
    if (!grabbing) return
    const x = event.pageX - galleryContainer.offsetLeft
    const scroll = x - startX
    galleryContainer.scrollLeft = scrollLeft - scroll

  }

  galleryContainer.addEventListener("mousedown", mouseDown, false)
  galleryContainer.addEventListener("mouseup", mouseUp, false)
  galleryContainer.addEventListener("mousemove", mouseMove, false)
  galleryContainer.addEventListener("mouseleave", mouseUp, false)

}
</script>

<template>
  <div class="container">
    <header>
      <div class="logo">
        <h2>CarlSandberg</h2>
        <h1>DesignWorks</h1>
      </div>
      <nav>
        <ul>
          <li>gallery</li>
          <li>blog</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
    <main>
      <div class="gallery-container">
        <div class="gallery">
          <img src="/assets/images/kaz-1.jpg" alt="1">
          <img src="/assets/images/kaz-2.jpg" alt="2">
          <img src="/assets/images/kaz-3.jpg" alt="3">
          <img src="/assets/images/kaz-4.jpg" alt="4">
          <img src="/assets/images/kaz-5.jpg" alt="5">
          <img src="/assets/images/kaz-6.jpg" alt="6">
        </div>
      </div>
    </main>
  </div>
</template>