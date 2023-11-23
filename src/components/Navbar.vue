<template>
    <div class = "bg-slate-800 text-white py-3 px-6 shadow-xl md:flex justify-between font-mono">
        <div>
            <span class="font-mono tracking-wider text-lg">Fotis Skordas</span>
        </div>
        <div> 
            <ul class="flex flex-row gap-7 tracking-wider"> 
                <li v-for="link in Links">
                    <a :href="link.link" class="hover:cursor-pointer hover:text-orange-600 text-lg">
                        {{ link.name }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

let Links = [
    {name: "Home", link: "/"},
    {name: "About", link: "/about"},
    {name: "Projects", link: "/projects"},
    {name: "Skills", link: "/skills"},
    {name: "Contact", link: "/contact"}
]
</script>

<style scoped>

</style>