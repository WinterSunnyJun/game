<template>
 <div class="footer">
    <ul>
        <li v-for="(data,index) in footerData">
            <router-link  :to="data.path"  :class="($route.path).indexOf(data.path) > -1 ? 'active':''">
                <div class="bottom-icon">
                </div>
                <p class="bottom-text">{{data.text}}</p>
            </router-link>
        </li>
    </ul>
    </div>
</template>
<script>
export default {
  name: 'l-footer',
  data () {
    return {
        footerData:[  
            {text:"首页","path":"/index"},
            {text:"竞猜记录","path":"/guess_record"},
            {text:"代理赚钱","path":"/agency"},
            {text:"个人中心","path":"/user"}
        ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer { 
    position: fixed; 
    bottom: 0; 
    left: 0; 
    width: 100%; 
    background:#fff;
    height: 1rem;
    z-index: 9;
    background: #622d80;
}
.footer ul {
    height: 0.98rem; 
    display: flex;
    justify-content: center
}
.footer li { 
    float: left;
    width: 25%; 
    height:100%;
    text-align: center; 
}
.footer a {
    display: block; 
    width: 100%; 
    height: 100%;
    color:#999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.footer .icon { 
     line-height: 0.3rem;
      font-size: 22px;
}
.footer .text { 
    line-height: 0.18rem; 
    font-size: 14px; 
    margin-top:0.2rem;
}
.footer .active { 
    color:#f24b4e
}
  .bottom-icon{
    width: 0.44rem;
    height: 0.44rem;
    margin: 0 auto 0;
  }
  .bottom-text{
    font-size: 12px;
    color: #fff;
    padding-bottom: 0.04rem;
  }
 .footer li a.active{
   background: #410266;
 }
  .footer li:nth-child(1) .bottom-icon{
      background: url(../../assets/images/iconhome.png) no-repeat;
      background-size:100% 100%;
  }
  .footer li:nth-child(2) .bottom-icon{
      background: url(../../assets/images/iconrecord.png) no-repeat;
      background-size:100% 100%;
  }
  .footer li:nth-child(3) .bottom-icon{
      background: url(../../assets/images/iconagent.png) no-repeat;
      background-size:100% 100%;
  }
  .footer li:nth-child(4) .bottom-icon{
      background: url(../../assets/images/iconvip.png) no-repeat;
      background-size:100% 100%;
  }
</style>
