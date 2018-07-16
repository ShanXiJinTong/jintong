<template>
<div>

    <!--搜索框-->
    <form class="wsq-searchBox">
        <img src="../img/sousuoicon.png" height="24" width="40"/>
        <input type="text" placeholder="搜素您需要定位的城市">
    </form>
    <!--搜索结束-->
    <!--banner开始-->
    <section class="wsq-banner">
        <div class="wsq-title">
            <div class="wsq-cateaty">洗护</div>
            <div class="wsq-cateaty" style="margin: 0 0.25rem">售水</div>
            <div class="wsq-cateaty hot">卫浴</div>
        </div>
        <div class="wsq-img"><img src="../img/banner1.png" height="128" width="351"/></div>
    </section>
    <!--banner结束-->
    <!--热门推荐开始-->
    <section class="wsq-more">
        <div class="wsq-line">
            <div class="wsq-lineL">
                <div class="wsq-dot"></div>
                <div class="wsq-text"><span><b>热门</b></span><span><b>推荐</b></span></div>
            </div>
            <div class="wsq-lineR">
                <a href="">
                    <router-link :to="{name:'BathroomList'}" tag="p">
                    查看更多 <span>
            <img src="../img/rightjiantou.png" height="9" width="10"/></span></router-link>
                </a>
            </div>

        </div>
        <div class="wsq-wrapper">
            <div class="wsq-scroller">
                <ul>
                    <li>
                        <img src="../img/shuilongtou.png" height="94" width="90"/>
                        <div class="wsq-sore">5.0</div>
                        <div class="wsq-name">潜水艇高端龙头<span>60元</span></div>
                        <h6>ECC01-001Lw</h6>
                        <div class="wsq-sale">
                            <div class="wsq-saleLeft">
                                <div class="wsq-dot"></div>
                                <p>已售<span>52</span></p>
                            </div>
                            <div class="wsq-saleRight">
                                <div class="wsq-dot"></div>
                                <p>接单率<span>100%</span></p>
                            </div>
                        </div>
                        <div class="wsq-desc">
                            <h5>非常专业</h5>
                            <h5>价格合理</h5>
                        </div>
                    </li>
                    <li>
                        <img src="../img/shuilongtou.png" height="94" width="90"/>
                        <div class="wsq-sore">5.0</div>
                        <div class="wsq-name">潜水艇高端龙头<span>60元</span></div>
                        <h6>ECC01-001Lw</h6>
                        <div class="wsq-sale">
                            <div class="wsq-saleLeft">
                                <div class="wsq-dot"></div>
                                <p>已售<span>52</span></p>
                            </div>
                            <div class="wsq-saleRight">
                                <div class="wsq-dot"></div>
                                <p>接单率<span>100%</span></p>
                            </div>
                        </div>
                        <div class="wsq-desc">
                            <h5>非常专业</h5>
                            <h5>价格合理</h5>
                        </div>
                    </li>
                    <li>
                        <img src="../img/shuilongtou.png" height="94" width="90"/>
                        <div class="wsq-sore">5.0</div>
                        <div class="wsq-name">潜水艇高端龙头<span>60元</span></div>
                        <h6>ECC01-001Lw</h6>
                        <div class="wsq-sale">
                            <div class="wsq-saleLeft">
                                <div class="wsq-dot"></div>
                                <p>已售<span>52</span></p>
                            </div>
                            <div class="wsq-saleRight">
                                <div class="wsq-dot"></div>
                                <p>接单率<span>100%</span></p>
                            </div>
                        </div>
                        <div class="wsq-desc">
                            <h5>非常专业</h5>
                            <h5>价格合理</h5>
                        </div>
                    </li>
                    <li>
                        <img src="../img/shuilongtou.png" height="94" width="90"/>
                        <div class="wsq-sore">5.0</div>
                        <div class="wsq-name">潜水艇高端龙头<span>60元</span></div>
                        <h6>ECC01-001Lw</h6>
                        <div class="wsq-sale">
                            <div class="wsq-saleLeft">
                                <div class="wsq-dot"></div>
                                <p>已售<span>52</span></p>
                            </div>
                            <div class="wsq-saleRight">
                                <div class="wsq-dot"></div>
                                <p>接单率<span>100%</span></p>
                            </div>
                        </div>
                        <div class="wsq-desc">
                            <h5>非常专业</h5>
                            <h5>价格合理</h5>
                        </div>
                    </li>
                    <li>
                        <img src="../img/shuilongtou.png" height="94" width="90"/>
                        <div class="wsq-sore">5.0</div>
                        <div class="wsq-name">潜水艇高端龙头<span>60元</span></div>
                        <h6>ECC01-001Lw</h6>
                        <div class="wsq-sale">
                            <div class="wsq-saleLeft">
                                <div class="wsq-dot"></div>
                                <p>已售<span>52</span></p>
                            </div>
                            <div class="wsq-saleRight">
                                <div class="wsq-dot"></div>
                                <p>接单率<span>100%</span></p>
                            </div>
                        </div>
                        <div class="wsq-desc">
                            <h5>非常专业</h5>
                            <h5>价格合理</h5>
                        </div>
                    </li>
                    <li>
                        <img src="../img/shuilongtou.png" height="94" width="90"/>
                        <div class="wsq-sore">5.0</div>
                        <div class="wsq-name">潜水艇高端龙头<span>60元</span></div>
                        <h6>ECC01-001Lw</h6>
                        <div class="wsq-sale">
                            <div class="wsq-saleLeft">
                                <div class="wsq-dot"></div>
                                <p>已售<span>52</span></p>
                            </div>
                            <div class="wsq-saleRight">
                                <div class="wsq-dot"></div>
                                <p>接单率<span>100%</span></p>
                            </div>
                        </div>
                        <div class="wsq-desc">
                            <h5>非常专业</h5>
                            <h5>价格合理</h5>
                        </div>
                    </li>
                    <li>
                        <img src="../img/shuilongtou.png" height="94" width="90"/>
                        <div class="wsq-sore">5.0</div>
                        <div class="wsq-name">潜水艇高端龙头<span>60元</span></div>
                        <h6>ECC01-001Lw</h6>
                        <div class="wsq-sale">
                            <div class="wsq-saleLeft">
                                <div class="wsq-dot"></div>
                                <p>已售<span>52</span></p>
                            </div>
                            <div class="wsq-saleRight">
                                <div class="wsq-dot"></div>
                                <p>接单率<span>100%</span></p>
                            </div>
                        </div>
                        <div class="wsq-desc">
                            <h5>非常专业</h5>
                            <h5>价格合理</h5>
                        </div>
                    </li>
                    <li>
                        <img src="../img/shuilongtou.png" height="94" width="90"/>
                        <div class="wsq-sore">5.0</div>
                        <div class="wsq-name">潜水艇高端龙头<span>60元</span></div>
                        <h6>ECC01-001Lw</h6>
                        <div class="wsq-sale">
                            <div class="wsq-saleLeft">
                                <div class="wsq-dot"></div>
                                <p>已售<span>52</span></p>
                            </div>
                            <div class="wsq-saleRight">
                                <div class="wsq-dot"></div>
                                <p>接单率<span>100%</span></p>
                            </div>
                        </div>
                        <div class="wsq-desc">
                            <h5>非常专业</h5>
                            <h5>价格合理</h5>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <!--热门推荐结束-->

</div>
</template>
<script>
    export default {
        name: 'Bathroom',
        data() {
            return {}
        }
    }
</script>
<style scoped>
    @import url("../css/Tnineteen.css");
   
</style>
