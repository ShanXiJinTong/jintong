<template>
  <section class="cyx-contain">
    <div class="cyx-picture">
      <div class="cyx-container">
        <img class="cyx-bg" src="./static/img/cyx-jinbi/main.png" alt="">
        <div class="cyx-jinbi">
          <img class="cyx-dot" src="./static/img/cyx-jinbi/dot.png" alt="">
          <pre> 共 <span class="cyx-num">{{$route.query.coin}}</span> 个 </pre>
          <img class="cyx-dot" src="./static/img/cyx-jinbi/dot.png" alt="">
        </div>
      </div>
    </div>
    <div class="cyx-blank"></div>
    <div class="cyx-desc">
      <p class="cyx-xiaofei">消费1元=1金币</p>
      <p class="cyx-xiaofei">10金币可抵1元</p>
    </div>
  </section>
</template>
<script>
    export default {
        name: 'Gold',
        data() {
            return {}
        }
    }
</script>
<style scoped>
  @import url(./static/css/cyx-jinbi.css);
</style>
