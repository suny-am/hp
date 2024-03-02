<script setup lang="ts">

function getAboutPage() {
    let aboutPage = document.querySelector(".about-container") as HTMLDivElement
    if (!aboutPage) return

    aboutPage.style.transition = "all 800ms"
    aboutPage.style.transform = "translateX(0px)"
}

</script>

<template>
    <header>
        <div class="logo">
            <h2>CarlSandberg</h2>
            <h1>DesignWorks</h1>
        </div>
        <nav>
            <ul>
                <li class="disabled"><a href="#">gallery</a></li>
                <li class="disabled"><a href="#">blog</a></li>
                <li class="disabled"><a href="#">shop</a></li>
                <li @click="getAboutPage">about</li>
                <li><a href="mailto:visualarea.1@gmail.com">contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    width: 100vw;
    top: 0;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    position: fixed;

    .logo {
        margin: 0 2rem;
        line-height: 0.5rem;

        h1 {
            letter-spacing: normal;
        }

        h2 {
            letter-spacing: .15rem;
        }
    }

    nav {
        justify-self: flex-end;

        ul {
            display: flex;
            align-items: center;
            list-style: none;

            li {

                font-size: 18px;
                font-weight: bold;
                text-transform: uppercase;
                transition: color 1s;
                margin: 0 1rem;
                cursor: pointer;

                a {
                    text-decoration: none;
                }
            }

            li.disabled {
                opacity: 0.5;
                text-decoration: line-through;
            }

            li:not(.disabled):hover {
                color: rgb(204, 155, 96);
                transition: color 1s;
            }
        }
    }
}
</style>