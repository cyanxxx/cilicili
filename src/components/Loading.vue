<template lang="html">
  <div class="lds-css ng-scope">
    <div style="width:100%;height:100%" class="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
@keyframes lds-facebook_1 {
0% {
  top: 36px;
  height: 128px;
}
50% {
  top: 60px;
  height: 80px;
}
100% {
  top: 60px;
  height: 80px;
}
}

@keyframes lds-facebook_2 {
0% {
  top: 41.99999999999999px;
  height: 116.00000000000001px;
}
50% {
  top: 60px;
  height: 80px;
}
100% {
  top: 60px;
  height: 80px;
}
}

@keyframes lds-facebook_3 {
0% {
  top: 48px;
  height: 104px;
}
50% {
  top: 60px;
  height: 80px;
}
100% {
  top: 60px;
  height: 80px;
}
}

.lds-facebook {
position: relative;
}
.lds-facebook div {
position: absolute;
width: 30px;
}
.lds-facebook div:nth-child(1) {
left: 35px;
background: #168b94;
-webkit-animation: lds-facebook_1 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
animation: lds-facebook_1 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
-webkit-animation-delay: -0.2s;
animation-delay: -0.2s;
}
.lds-facebook div:nth-child(2) {
left: 85px;
background: #1fb5ad;
-webkit-animation: lds-facebook_2 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
animation: lds-facebook_2 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
-webkit-animation-delay: -0.1s;
animation-delay: -0.1s;
}
.lds-facebook div:nth-child(3) {
left: 135px;
background: #98ccc7;
-webkit-animation: lds-facebook_3 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
animation: lds-facebook_3 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook {
width: 200px !important;
height: 200px !important;
-webkit-transform: translate(-100px, -100px) scale(0.3) translate(100px, 100px);
transform: translate(-100px, -100px) scale(0.3) translate(100px, 100px);
margin:0 auto;
}
</style>
