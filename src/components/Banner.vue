<template lang="html">
  <div class="img_wrapper" v-if="visible">
    <div class="overlay">
      <div class="logo">
        <div class="text">giligili</div>
      </div>
    </div>
    <img :src="img.url" alt="img.id" v-for=" img in imgs">
  </div>
</template>

<script>
export default {
  data () {
    return{
      logo: {url: '',text: 'giligili'},
      visible: false,
      imgs: [
        {url:'',id: ''},
        {url:'',id: ''},
        {url:'',id: ''},
        {url:'',id: ''},
        {url:'',id: ''},
        {url:'',id: ''}
      ]
    }
  },
  mounted () {
    this.visible = true;
    console.log(this);
  }
}
</script>

<style lang="scss">
  .img_wrapper{
    width: 100vw;
    height: 100vh;
    >.overlay{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.3);
    }
    .logo{
      display: flex;
      position: absolute;
      width: 100%;
      height: 100%;
      transition: all 2s;
      background: #1fb5ad;

      &:hover{
        transform: scale(0.1);

      }
      >.text{
        margin: auto;
        color:#fff;
        text-align: center;
        font-size: 32px;
      }
    }
  }

</style>
