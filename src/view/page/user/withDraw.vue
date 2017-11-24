<template>
  <div class="withdraw">
      <l-header></l-header>
      <l-content>
            <div class="c-content">
            <div class="m-top"></div>
            <div class="m-control">
                <ul>
                    <li>
                        <div class="c-left">
                            <i>我的余额</i>
                            <span>0.00元</span>
                        </div>
                        <div class="c-right" @click="toGetmoney()">
                            提现
                        </div>
                    </li>
                    <li>
                        <div class="c-left">
                            <i>我的佣金</i>
                            <span>0.00元</span>
                        </div>
                        <div class="c-right" @click="toGetmoney()">
                            提现
                        </div>
                    </li>
                </ul>
            </div>
      </div>
      </l-content>
      <l-footer></l-footer>
      <div class="filter-wrap" v-if="showGetMoney">
          <div class="filter">
              <div class="f-title">
                  提现金额
              </div>
              <div class="f-money clear">
                <span>¥</span>
                <input type="text" >    
              </div>  
              <div class="sum-money clear">
                    <div class="balance">
                        余额 ¥ <i>20.05</i>
                    </div>   
                    <div class="all-get">
                        全部提现
                    </div>
              </div>   
              <div class="submit-btn" @click="toWithdraw">
                    提现  
                </div> 
                <div class="tip-msg">
                    最低提现额￥10.0
                    </div> 
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'withdraw',
  data () {
    return {
      showGetMoney:false,
    }
  },
  methods:{
      toGetmoney(){
          this.showGetMoney = true;
      },
      toWithdraw(){
          this.showGetMoney = false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.withdraw{
    width:100%;
    height:100%;
}
.m-top{
    width: 100%;
    height: 4.9rem;
    background: url(../../../assets/images/m-top-icon.jpg) no-repeat;
    background-size:100% 100%; 
}
.m-control{
    margin-top:0.35rem;
    padding:0 0.2rem;
    font-size:13px;
}
.m-control ul li{
    height: 1.22rem;
    border-bottom:1px solid #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.c-left  span{
    margin-left:0.2rem;
}
.c-right{
    padding:0.08rem 0.36rem;
    border:2px solid #fff;
    border-radius:0.06rem;
}
.filter-wrap{
    width: 100%;
    height:100%;
    position: fixed;
    left: 0;
    top:0;
    z-index: 99;
}
.filter-wrap .filter{
    width: 5rem;
    height: 5.8rem;
    border-radius:0.12rem;
    background: #fff;
    border:1px solid #1623cd;
    margin:45% auto 0;
    padding:0 0.35rem;
}
.f-title{
    font-size: 16px;
    color: #333;
    margin-top:0.68rem;
}
.f-money{
    width: 100%;
    height: 0.68rem;
    line-height:0.68rem;
    margin-top:0.42rem;
    border-bottom:1px solid #999;
}
.f-money span{
    font-size: 23px;
    font-weight: 700;
    color:black;
    float: left;
}
.f-money input{
    float: left;
    width: 3.80rem;
    height:100%;
    font-size: 16px;
    padding-left:0.2rem;
}
.sum-money{
    margin-top:0.2rem;
    font-size: 13px;
}
.sum-money .balance{
    color:#666;
    float: left;    
}
.sum-money .all-get{
    float: left;
    margin-left:0.2rem;
    color:#0743cb;
}
.submit-btn{
    margin-top:0.9rem;
    height: 0.88rem;
    width: 100%;
    background: #0743cb;
    text-align: center;
    line-height: 0.88rem;
    border-radius: 0.12rem;
    font-size: 16px;
}
.tip-msg{
    text-align: center;
    color: #666;
    margin-top:0.2rem;
    font-size: 13px;
}
</style>
