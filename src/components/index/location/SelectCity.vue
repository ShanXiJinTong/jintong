<template>
    <div id="SelectCity">
        <div class="current">
            <div class="min">
                <div class="icon"></div>
                <p>当前定位城市</p>
                <a href="javascript:">{{address}}</a>
            </div>
        </div>
        <div class="list">
            <ul class="left" style="width: 100%;">
                <li v-for="item in getLetter">
                    <!--<div class="title" :id="item">{{item}}</div>-->
                    <div class="hot" v-for="city in getCity[item]">
                        <div class="dian"></div>
                        <p @click="showCity(city.city_name)" style="margin-left: 0.2rem;">{{city.city_name}}</p>
                    </div>
                </li>
            </ul>
            <!--<ul class="right">-->
                <!--<li class="hot" v-for="item in getLetter" @click="returnTop(item)">{{item}}</li>-->
            <!--</ul>-->
        </div>
    </div>
</template>
<script>
    export default {
        name: 'SelectCity',
        data() {
            return {
                city: [],
                letter: [],
                searchName: "",
                address:localStorage.city1
            }
        },
        components: {},
        methods: {
            getData() {
                this.$http.get("/general/base/syscityall").then(res => {
                    this.city = res.data;
                })
            },
            returnTop(item) {
                document.querySelector(`#${item}`).scrollIntoView(true);
            },
            showCity(cityName) {
                localStorage.city = cityName;
                this.$router.back();
            },
            searchCity(cityName) {
                let result = this.city.filter(element => element.city_name == cityName)
                if (result.length) {
                    localStorage.city = cityName;
                    this.$router.back();
                }
                else {
                    alert("输入有误");
                }
            }
        },
        mounted: function () {
            this.getData();
            document.setTitle('切换城市');
        },
        computed: {
            getLetter() {
                let letterArr = this.city.map(element => element.sindex.toUpperCase());
                let set = new Set(letterArr);
                return Array.from(set).sort();
            },
            getCity() {
                let arr = {};
                this.city.forEach(element => {
                    let char = element.sindex.toUpperCase();
                    if (!arr[char]) {
                        arr[char] = [];
                    }
                    arr[char].push(element);
                });
                for (let i in this.getLetter) {
                    let char = this.getLetter[i];
                    arr[char.toUpperCase()]
                }
                return arr;
            },
        }
    }
</script>
<style scoped>
    @import url(../static/css/adress.css);
</style>
