<template>
  <div  ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BSroll from 'better-scroll'

  export default {
    name: "scroll",
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: null
      },
      pullup: {
        type: Boolean,
        default: false
      },
      beforeScroll: {
        type: Boolean,
        default: false
      },
      refreshDelay: {
        type: Number,
        default: 20
      },
      listenScroll: {
        type:Boolean,
        default:false
      }
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return;
        }
        this.scroll = new BSroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click
        });
        if(this.listenScroll){
          let that = this;
          this.scroll.on('scroll',(pos)=>{
            that.$emit('scroll',pos);
          })
        }
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
    },
    mounted: function () {
      setTimeout(() => {
        this._initScroll();
      }, 20)
    },
    watch: {
      data() {
        setTimeout(() => {
          this.refresh();
        }, this.refreshDelay)
      }
    }
  }
</script>

<style scoped>

</style>
