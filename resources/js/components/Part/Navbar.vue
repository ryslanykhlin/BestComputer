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
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"/>
        </v-app-bar>

        <v-navigation-drawer disable-resize-watcher v-model="drawer" absolute temporary>
            <v-list nav dense link>
                <v-list-item-group v-model="drawer">
                    <v-list-item v-for="(item,index) in navBarItems" :key="index" :to="item.to" @click="drawer = false">
                        <v-list-item-title>{{item.title}}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data:()=>{
        return {
            navBarItems:[
                {title:'Главная',to:'/'},
                {title:'Контакты',to:'/contact'},
                {title:'О нас',to:'/about'},
                {title:'Конкурсы',to:'/contest'},
            ],
            drawer:false
        }
    }
}
</script>

<style scoped>

</style>
