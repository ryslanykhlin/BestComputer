<template>
    <nav class="nav">

        <v-app-bar app>
            <v-toolbar-title>BestComputer</v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="(item,index) in navBarItems" :key="index" text :to="item.to" @click="drawer = false">
                    {{item.title}}
                </v-btn>
            </v-toolbar-items>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true"/>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app disable-resize-watcher>
            <v-btn v-for="(item,index) in navBarItems" :key="index" text :to="item.to" @click="drawer = false">
                {{item.title}}
            </v-btn>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data:()=>{
        return {
            drawer:false,
            navBarItems:[
                {title:'Главная',to:'/'},
                {title:'Каталог',to:'/category'},
                {title:'О нас',to:'/about'},
                {title:'Конкурсы',to:'/contest'},
            ]
        }
    }
}
</script>

<style scoped>
    .posFix{
        position: fixed;
    }
</style>
