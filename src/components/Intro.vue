<script setup lang="ts">
import * as Globals from "./globals"
import { onMounted, ref, Ref } from 'vue';

const globals = Globals,

    logo = ref(null) as Ref<HTMLDivElement | null>,
    introCircle = ref(null) as Ref<SVGCircleElement | null>,
    introCircleCore = ref(null) as Ref<SVGCircleElement | null>,
    svgContainer = ref(null) as Ref<SVGElement | null>,

    svgBoxWidth = () => { return `${document.body.clientWidth}` },
    svgBoxHeight = () => { return `${document.body.clientHeight}` },
    svgCircleRadius = () => { return `${document.body.clientWidth * 0.75}` },
    svgViewBoxSize = () => { return `0 0 ${svgBoxWidth()} ${svgBoxHeight()}` }

onMounted(() => {
    if (!logo.value || !svgContainer.value || !introCircle.value || !introCircleCore.value) return

    introCircle.value.setAttribute("cy", svgBoxHeight())
    introCircleCore.value.setAttribute("cy", svgBoxHeight())

    svgContainer.value.setAttribute("viewBox", `0 0 ${svgBoxWidth()} ${svgBoxHeight()}`)

    for (let i = 0; i < 40; i++) {
        let circle = svgContainer.value.childNodes.values().next().value
        let circleCopy = circle.cloneNode()
        circleCopy.setAttribute("r", circle.attributes.r.value * 0.025 * i)
        svgContainer.value.appendChild(circleCopy)
    }

    let logoUpper = logo.value.childNodes.item(0) as HTMLHeadingElement,
        logoLower = logo.value.childNodes.item(1) as HTMLHeadingElement,
        comingSoon = logo.value.childNodes.item(2) as HTMLHeadingElement

    logoUpper.textContent = globals.logoText1
    logoLower.textContent = globals.logoText2
    comingSoon.textContent = globals.comingSoon
    comingSoon.style.opacity = "0.5"
    comingSoon.style.fontSize = "20px"

})

</script>

<template>
    <div class="intro-container">
        <div class="logo" ref="logo">
            <h2></h2>
            <h1></h1>
            <h3></h3>
        </div>
        <svg :viewBox="svgViewBoxSize()" xmlns="http://www.w3.org/2000/svg" class="svg-container" ref="svgContainer">
            <circle :cx="svgBoxWidth()" :cy="svgBoxHeight()" :r="svgCircleRadius()" ref="introCircle"
                :stroke="globals.colors.logo" stroke-width="1" />
            <circle :cx="svgBoxWidth()" :cy="svgBoxHeight()" r="25" :fill="globals.colors.logo" fill-opacity="1"
                ref="introCircleCore" />
        </svg>
    </div>
</template>


<style lang="scss">
@use "../styles/foundation/colors";
@use "../styles/foundation/fonts";

body {
    background: colors.$gradient;
}

.svg-container {
    width: 100vw;
    height: 100vh;
    position: absolute;
    fill-opacity: 0;
}

.intro-container {
    color: colors.$logo;
    font-family: fonts.$logo;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    .logo {
        padding-bottom: 0.5rem;
        margin: 0 0 0 1rem;
        text-transform: capitalize;
        font-size: 150%;

        h1 {
            text-transform: uppercase;
        }

        h1,
        h2 {
            margin: 0;
            padding: 0;
            line-height: 2.5rem;
        }
    }
}

@media screen and (max-width: 400px) {
    .intro-container {

        display: flex;
        align-items: center;
        justify-content: center;

        .logo {
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;

            h1 {
                margin-left: 5px;
            }

            h2 {
                margin-bottom: 1em;
                text-wrap: pretty;
                height: 100x;
                writing-mode: vertical-lr;
                font-size: small;
                text-transform: uppercase
            }


            h1 {
                writing-mode: vertical-rl;
            }
        }

    }
}
</style>