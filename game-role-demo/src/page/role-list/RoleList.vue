<template>
    <div class="home">
        <header>英雄列表</header>
        <ul class="role-list">
            <router-link tag="li" :to="{name: 'Detail', params: role}" v-for="role in roleList" :key="role.id">
                <img :src="role.photo">
                <div>
                    <p>{{ role.title }}&nbsp;&nbsp;{{ role.name }}</p>
                    <p>{{ role.profession }}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script src="./role-list.js"></script>

<style scoped lang="scss">
    @import './role-list.scss';
</style>