<template>
  <div>
    <slot></slot>
    <div class="list clearFix" v-for="list in lists">
      <div class="l-date">
        <p>{{ list.date | formatDay}}</p>
        <p>{{ list.date | formatMonth}}</p>
      </div>
      <div class="r-text">
        {{ list.title }}
      </div>
    </div>
  </div>
</template>
<script>
  export default  {
    data () {
      return {
        lists:[
          {date:"2018/11/25",title:"【日漫评论室】【冲上1000集】《工藤新一 迷之墙和黑色拉布犬事件》——《柯南》特典"},
          {date:"2018/11/25",title:"【日漫评论室】【冲上1000集】《工藤新一 迷之墙和黑色拉布犬事件》——《柯南》特典"},
          {date:"2018/11/25",title:"【日漫评论室】【冲上1000集】《工藤新一 迷之墙和黑色拉布犬事件》——《柯南》特典"},
          {date:"2018/11/25",title:"【日漫评论室】【冲上1000集】《工藤新一 迷之墙和黑色拉布犬事件》——《柯南》特典"}

        ]
      }
    },
    filters: {
      formatDay: function(val) {
        let arr = val.split('/');
        return  arr[arr.length-1];
      },
      formatMonth (val) {
        let arr = val.split('/');
        let month =  arr[arr.length-2];
        switch(month){
          case '1':return 'Jan';
          case '2':return 'Feb';
          case '3':return 'Mar';
          case '4':return 'Apr';
          case '5':return 'May';
          case '6':return 'Jun';
          case '7':return 'Jul';
          case '8':return 'Aug';
          case '9':return 'Sep';
          case '10':return 'Oct';
          case '11':return 'Nov';
          case '12':return 'Dec';
        }
      },
    }
  }
</script>
<style  scoped lang="scss">
  $bgColor : #1fb5ad;
  .list{
    color: #fff;
    margin-bottom: 42px;
    >.l-date{
      float: left;
      background:  $bgColor;
      width: 18%;
      height: 88px;
      padding: 0 25px;
      box-sizing: border-box;
      text-align: center;
    }
    >.r-text{
      float: right;
      width: 70%;
      background:  $bgColor;
      height: 88px;
      box-sizing: border-box;
      padding: 20px;
      overflow: hidden;
    }
}

</style>
