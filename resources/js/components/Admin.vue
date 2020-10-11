<template>
    <section class="admin">
        <v-container>
            <div class="admin__title">Админ панель</div>
            <v-simple-table>
            <thead>
            <tr>
            <th>
                Имя
            </th>
            <th>
                Телефон
            </th>
            <th>
                Адрес
            </th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="(order,index) in orders"
            :key="index"
            >
            <td>{{ order.name }}</td>
            <td>{{ order.tell }}</td>
            <td>{{ order.adress }}</td>
            </tr>
        </tbody>
        </v-simple-table>
       </v-container>
    </section>
</template>

<script>
export default {
    data(){
        return {
            orders:[]
        }
    },
    mounted(){
        axios.post('/api/orders/getAll')
        .then(res => this.orders = res.data);
    }
}
</script>

<style scoped>
    .admin__title{
        text-align: center;
        font-size: 36px;
        font-weight: 700;
    }
</style>