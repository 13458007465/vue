<template>
    <div class="detail">
        <header>
            <router-link 
                tag="i" 
                :to="{name: 'RoleList'}"
                class="left-arrow"
            ></router-link>
            英雄详情
        </header>
        <div class="banner" :style="bannerIamge">
            <div>
                <p>{{ role.title }}</p>
                <p>{{ role.name }}</p>
            </div>
        </div>
        <div class="skill-list">
            <ul class="skill-list-icon">
                <li v-for="(icon,index) in role.skill" :class="{active: skillIndex === index}" @click="switchSkill(index)"
                :key="icon.id">
                    <img :src="icon.img">
                </li>
            </ul>
            <ul class="skill-list-describe">
                <li 
                    v-for="(des,index) in role.skill" 
                    v-if="skillIndex === index"
                    :key="des.id"
                >
                    <div class="skill-name" v-html="des.name"></div>
                    <div class="skill-desc-1">{{ des.describe1 }}</div>
                    <div class="skill-desc-2">{{ des.describe2 }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        data() {
            let roleInfo = this.$route.params;
            return {
                role: roleInfo,
                bannerIamge: `background-image: url("${roleInfo.banner}");`,
                skillIndex: 0
            }
        },
        methods: {
            switchSkill(idx) {
                this.skillIndex = idx;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import './detail.scss';
</style>