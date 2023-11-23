<template>
    <div class = "bg-slate-800 text-white py-3 px-6 shadow-xl md:flex justify-between font-mono">
        <div>
            <span class="font-mono tracking-wider text-lg">Fotis Skordas</span>
        </div>
        <div> 
            <ul class="flex flex-row gap-6 tracking-wider "> 
                <li v-for="link in Links">
                    <a :href="link.link" class="hover:cursor-pointer text-sm hover:text-orange-600 ">
                        {{ link.name }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

let Links = [
    {name: "01. Home", link: "/"},
    {name: "02. About", link: "/about"},
    {name: "03. Projects", link: "/projects"},
    {name: "04 .Skills", link: "/skills"},
    {name: "05. Contact", link: "/contact"}
]
</script>

<style scoped>

</style>