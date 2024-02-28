<script setup lang="ts">
</script>

<template>
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
</template>

<style scoped>
header {
    width: 100vw;
    top: 0;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    border-bottom: 1px whitesmoke solid;
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
                margin: 0 1rem;
            }
        }
    }
}
</style>