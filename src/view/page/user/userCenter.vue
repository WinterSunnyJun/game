<template>
  <div class="user">
    <l-header></l-header>
    <l-content>
      <div class="c-content">
        <ul>
          <li>
            <router-link to="/user/with_draw">
              <div class="type-icon icon1"></div>
              <div class="type-name">奖金池</div> 
              <div class="to-next"></div>
            </router-link>
          </li>
          <li>
            <router-link to="/user/recharge_record">
              <div class="type-icon icon2"></div>
              <div class="type-name">充值记录</div> 
              <div class="to-next"></div>
            </router-link>
          </li>
          <li>
            <router-link to="/guess_record">
              <div class="type-icon icon3"></div>
              <div class="type-name">竞猜记录</div> 
              <div class="to-next"></div>
            </router-link>
          </li>
          <li>
            <router-link to="/user/money_record">
              <div class="type-icon icon4"></div>
              <div class="type-name">提现记录</div> 
              <div class="to-next"></div>
            </router-link>
          </li>
          <li>
            <router-link to="/user/brokerage">
              <div class="type-icon icon5"></div>
              <div class="type-name">我的佣金</div> 
              <div class="to-next"></div>
            </router-link>
          </li>
          <li>
            <router-link to="/user/brokerage_record">
              <div class="type-icon icon6"></div>
              <div class="type-name">佣金记录</div> 
              <div class="to-next"></div>
            </router-link>
          </li>
        </ul>
      </div>
    </l-content>
    <l-footer></l-footer>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{
  width: 100%;
  height:100%;
}
.c-content{
    padding-left:0.2rem;
}
.user ul li{
  height:0.88rem;
  padding-right:0.2rem;
  border-top:1px solid #032e73;
  border-bottom:1px solid #011432;
}
.user ul li a{
  height:100%;
  display: block;
  color: #fff;
   display: flex;
  justify-content: space-between;
  align-items: center;
}
.user ul li:first-child{
  border-top:0;
}
.user ul li:last-child{
  border-bottom:0;
}
.user ul li .type-icon{
  width: 0.33rem;
  height:0.34rem;
}
.user ul li .type-name{
  flex:1;
  padding-left:0.3rem;
  font-size: 13px;
}
.user ul li .to-next{
  width: 0.14rem;
  height: 0.24rem;
  background: url(../../../assets/images/to-next.png) no-repeat;
  background-size: 100% 100%;
}
.user ul li .type-icon.icon1{
   background: url(../../../assets/images/user-icon1.png) no-repeat;
  background-size: 100% 100%;
}
.user ul li .type-icon.icon2{
   background: url(../../../assets/images/user-icon2.png) no-repeat;
  background-size: 100% 100%;
}
.user ul li .type-icon.icon3{
  height:0.23rem;
   background: url(../../../assets/images/user-icon3.png) no-repeat;
  background-size: 100% 100%;
}
.user ul li .type-icon.icon4{
   background: url(../../../assets/images/user-icon4.png) no-repeat;
  background-size: 100% 100%;
}
.user ul li .type-icon.icon5{
   background: url(../../../assets/images/user-icon5.png) no-repeat;
  background-size: 100% 100%;
}
.user ul li .type-icon.icon6{
   background: url(../../../assets/images/user-icon6.png) no-repeat;
  background-size: 100% 100%;
}
</style>
