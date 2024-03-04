<template>
    <div id="title-container" ref="titleContainer">
        <h2></h2>
        <h1></h1>
        <h3></h3>
    </div>
    <svg id="svg-container" width="550" height="550" ref="svgContainer">
        <g id="circles" :stroke="Data.colors.logo" fill="none">

        </g>
    </svg>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import * as Data from "./data"

/**
 * 
 * 
 @remarks
 Creates circles from two arcs 
 @remarks
 Formula:
 "M: Cx+R Cy
 A: R R 0 1 1 Cx-R Cy
 A: R R 0 1 1 Cx+R Cy"
 @param centerX center X absolute coordinate number
 @param centerY center Y absolute coordinate number 
 @param radius circle radius number
 @returns xml namespace compatible path string
*/
const drawCircle = (centerX: number, centerY: number, radius: number): string => {
    let d =
        `M  ${centerX + radius} ${centerY}
         A ${radius} ${radius} 0 1 1 ${centerX - radius} ${centerY}
         A ${radius} ${radius} 0 1 1 ${centerX + radius} ${centerY}`
    return d
},
    svgContainer = ref(null) as Ref<SVGElement | null>,
    titleContainer = ref(null) as Ref<HTMLDivElement | null>

onMounted(() => {

    if (titleContainer.value) {
        console.log("HEY!")
        titleContainer.value.childNodes.item(0).textContent = Data.text.logoText1
        titleContainer.value.childNodes.item(1).textContent = Data.text.logoText2
        titleContainer.value.childNodes.item(2).textContent = Data.text.comingSoon
    }

    let circles = document.getElementById("circles")
    if (!circles || !svgContainer.value) return

    let centerX = svgContainer.value.clientWidth / 2,
        centerY = svgContainer.value.clientHeight / 2,
        refRadius = 60,
        solarRadius = 15,
        planetRadius = 5,
        solarPath = document.createElementNS(Data.links.xlmns, "path"),
        solarD = drawCircle(centerX, centerY, solarRadius)

    solarPath.setAttribute("d", solarD)
    solarPath.setAttribute("fill", Data.colors.logo)
    solarPath.setAttribute("id", `solar-path`)

    circles.appendChild(solarPath)

    for (let i = 1; i < 9; i++) {

        let pathID = `circle-path${i}`

        let circleDistance = 0.55
        let path = document.createElementNS(Data.links.xlmns, "path")
        let radius = refRadius * i * circleDistance
        let d = drawCircle(centerX, centerY, radius)
        path.setAttribute("d", d)
        path.setAttribute("id", pathID)

        let adjustedPlanetRadius: number

        if (i == 5 || i == 6) {
            adjustedPlanetRadius = planetRadius * i * 0.3
        } else {
            adjustedPlanetRadius = planetRadius
        }

        let planet = document.createElementNS(Data.links.xlmns, "circle")
        planet.setAttribute("cx", `${radius}`)
        planet.setAttribute("cy", `${radius}`)
        planet.setAttribute("r", `${adjustedPlanetRadius}`)
        planet.setAttribute("fill", Data.colors.foreground)
        planet.setAttribute("stroke", "none")

        let motion = document.createElementNS(Data.links.xlmns, "animateMotion")
        motion.setAttribute("dur", `${i * 6}s`)
        motion.setAttribute("repeatCount", "indefinite")
        motion.setAttribute("rotate", "auto")

        let mpath = document.createElementNS(Data.links.xlmns, "mpath")
        mpath.setAttribute("href", `#${pathID}`)

        motion.appendChild(mpath)

        planet.appendChild(motion)

        circles.appendChild(path)

        circles.appendChild(planet)
    }
})

</script>

<style lang="scss">
@use "../styles/foundation/colors";

body {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background: colors.$gradient;
}

#title-container {
    display: flex;
    flex-flow: column;
    align-self: center;

    h1,
    h2,
    h3 {
        text-align: start;
        text-transform: uppercase;
        margin: 0;
        padding: 0;
    }

    h1,
    h2 {
        color: colors.$logo;
        line-height: 1.4rem;
    }
}
</style>