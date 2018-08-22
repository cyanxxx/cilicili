<template lang="html">
  <div>
    <single-weibo v-for="list in lists" :list="list" :key="list.id" @close='close' @hover-img="hoverImg"/>
    <modal v-if="!login && open" @close-modal="open=false" />
    <hover-img v-if="hoverOpen" :hoverStyle="hoverStyle" :height="imgHeight" :timer="timer" />
    <back-top v-if="login" />
  </div>
</template>

<script>
import BackTop from '@/components/BackTop.vue'
import Loading from '@/components/Loading.vue'
import HoverImg from '@/components/HoverImg.vue'
import SingleWeibo from './components/singleWeibo.vue'
import Modal from '@/components/Modal.vue'
import { saveRedirect } from '@/utils/localStore'
import { getTimeLine } from '@/api/userInfo'
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  data() {
    return {
      page: 1,
      lists: {},
      hoverStyle: {
        width: '350px',
        top: 0,
        left: 0
      },
      imgHeight: 0,
      timer: 0,
      open: false
    }
  },
  components: {
    Modal,
    BackTop,
    Loading,
    HoverImg,
    SingleWeibo
  },
  computed: {
    ...mapGetters([ 'login', "hoverOpen"])
  },
  //keep-alive 组件激活时调用。
  activated() {
    var vue = this;
    if (this.login) {
      this.$bar.start();
      getTimeLine({
        page: 1}).then((res)=>{
          console.log(res)
          this.lists = res.data.statuses
          this.$bar.finish();
        })
      window.addEventListener('scroll', this.scrollBar)
    } else {
      this.open = true;
      saveRedirect(this.$route.fullPath);
    }
  },
  deactivated() {
    if (this.login) {
      window.removeEventListener('scroll', this.scrollBar)
    }
  },
  methods: {
    ...mapMutations(['saveHoverData', 'openHover', 'closeHover']),
    hoverImg: function(data, e) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      var target = e.target;
      var top = target.offsetTop;
      var left = target.offsetLeft;
      var width = target.offsetWidth;
      var height = target.offsetHeight;
      this.saveHoverData(data);
      this.$set(this.hoverStyle, 'top', top + height + 'px')
      this.$set(this.hoverStyle, 'left', left + width / 2 + 'px')
      this.openHover();
      this.imgHeight = top;

    },
    close: function() {
      this.timer = setTimeout(() => {
        this.closeHover()
      }, 500)
    },
    loadingMore() {
      var vue = this;
      this.page++;
      this.$bar.start();
      getTimeLine({
        page: this.page}).then((res)=>{
          console.log(res)
          this.lists = this.lists.concat(res.data.statuses)
          this.$bar.finish();
        })
    },
    scrollBar() {
      var pageH = document.documentElement.scrollHeight;
      var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
      var viewH = document.documentElement.clientHeight;
      if (viewH + scrollH == pageH) {
        this.loadingMore();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: #666;
}
p {
    color: #666;
}
</style>
