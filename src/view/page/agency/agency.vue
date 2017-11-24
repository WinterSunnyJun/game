<template>
  <div class="withdraw">
      <l-header></l-header>
      <l-content v-if="showGetCode === false">
        <div class="c-content">
            <div class="follow-us">关注我们</div>
            <h3>生成二维码后长按保存图片到手机</h3>
            <h4>并分享给好友获取佣金（<span @click="showBrokerage = true">佣金说明</span>）</h4>
            <div class="get-code" @click="showGetCode = true">获取二维码</div>
            <div class="r-content">
                <table class="p-table" width="100%"  cellspacing="0">
                    <tbody>
                        <tr>
                            <td width="33.3%">一级用户</td>
                            <td width="66.6%">0人</td>
                        </tr>
                        <tr>
                            <td width="33.3%">二级用户</td>
                            <td width="66.6%">0人</td>
                        </tr>
                        <tr>
                            <td width="33.3%">三级用户</td>
                            <td width="66.6%">0人</td>
                        </tr>
                    </tbody> 
                </table>
            </div>
        </div>
      </l-content>
      <l-footer></l-footer>
      <div class="filter-wrap" v-if="showGetCode">
          <div class="filter">
              <div class="to-close" @click="showGetCode = false"></div>
             <h3>我的二维码</h3>
             <div class="code-wrap">
                 <img :src="code" alt="">
             </div>
             <p>长按保存二维码，分享给其他好友</p>
          </div>
      </div>
      <div class="brokerage-wrap" v-if="showBrokerage">
          <div class="brokerage">
             <div class="to-close" @click="showBrokerage = false"></div>
             <h3>佣金说明</h3>
             <div class="b-content">
                 <p>佣金方案，您不仅可以得到直接邀请的用户（一级用户），还能得到这些用户的下级用户的游戏中获取佣金。佣金最多可以叠加六级！</p>
                 <p>例：您邀请5位用户，这些用户各自再邀请5位用户为您的二级用户，二级用户再邀请5位用户，为您的三级用户，每人进行10局10元竞猜游戏。</p>
             </div>
             <div class="count-detail">
                 <h5>您可获取佣金：</h5>
                 <p>5 × 10 × 10 × 5% ＋ 5² × 10 × 10 × 3% ＋ 5³ × 10 × 10 × 2%<span>＝350元</span></p>
             </div>
             <div class="get-money">
                 <h5>佣金提现</h5>
                 <p>点击“提现” → “佣金记录”即可查看您的佣金。佣金实时到账您的游戏余额，可随时提现。</p>
             </div>
          </div>
      </div>
  </div>
</template>

<script>
import Code from '../../../assets/images/code.jpg'
export default {
  name: 'withdraw',
  data () {
    return {
        code:Code,
        showGetCode:false,
        showBrokerage:false
    }
  },
  methods:{
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.withdraw{
    width:100%;
    height:100%;
}
.c-content{
    padding:0 0.2rem;
}
.follow-us{
    width: 1.82rem;
    height: 0.81rem;
    text-align: center;
    line-height: 0.81rem;
    margin:0.85rem auto 0.5rem;
    font-size: 16px;
    background: url(../../../assets/images/a-tit-bg.png) no-repeat;
    background-size:100% 100%;
}
.c-content h3,h4{
    text-align: center;
    font-size:13px;
    margin-bottom: 0.32rem;
}
h4 span{
    color:#ffca28;
}
.get-code{
    width: 2.35rem;
    height: 0.81rem;
    text-align: center;
    line-height: 0.81rem;
    margin:0.50rem auto 0.2rem;
    font-size: 16px;
    background: url(../../../assets/images/a-tit-bg.png) no-repeat;
    background-size:100% 100%; 
}
.r-content{
  border-top:1px solid #011432;
  border-bottom:1px solid #011432;
  margin-top:0.45rem;
  font-size:13px;
}
.p-table tbody td{
  line-height: 0.84rem;
  text-align: center;
  border-top:1px solid #032e73;
  border-bottom:1px solid #011432;
  border-left:1px solid #032e73;
  border-right:1px solid #011432;
}
.p-table tbody td:first-child{
  border-left:0;
}
.p-table tbody td:last-child{
  border-right:0;
}
.p-table tbody tr:last-child td{
    border-bottom:1px solid #032e73;

}
.filter-wrap,.brokerage-wrap{
    width: 100%;
    height:100%;
    position: fixed;
    left: 0;
    top:0;
    z-index: 99;
}
.filter-wrap .filter{
    position: relative;
    width: 5.6rem;
    height: 6.35rem;
    border-radius:0.12rem;
    background: #0511a1;
    border:1px solid #fff;
    margin:45% auto 0;
    padding:0 0.35rem;
}
.filter h3{
    width: 1.92rem;
    height: 0.71rem;
    text-align: center; 
    line-height: 0.71rem;
    margin:0.47rem auto 0.4rem;
    background: url(../../../assets/images/code-bg.png) no-repeat;
    background-size:100% 100%; 
    font-size: 13px;
}
.to-close{
    position: absolute;
    right: -0.15rem;
    top:-0.15rem;
    width: 0.6rem;
    height: 0.6rem;
    background: url(../../../assets/images/old-close.png) no-repeat;
    background-size:100% 100%; 
}
.filter .code-wrap{
    width: 3.25rem;
    height: 3.25rem;
    padding:0.1rem;
    background: #e7bf05;
    margin: 0 auto;
}
.filter .code-wrap img{
    width: 3.05rem;
    height:3.05rem;
}
.filter p{
    margin-top:0.4rem;
    text-align: center;
    font-size: 13px;
}
.brokerage-wrap{
    width: 100%;
    height:100%;
    position: fixed;
    left: 0;
    top:0;
    z-index: 99;
}
.brokerage-wrap .brokerage{
    position: relative;
    width: 5.6rem;
    padding:0.46rem 0.26rem 0.45rem;
    margin:21% auto 0;
     border-radius:0.12rem;
    background: rgba(5,17,161,0.95);
    border:1px solid #fff;
}
.brokerage h3{
    width: 1.92rem;
    height: 0.71rem;
    text-align: center; 
    line-height: 0.71rem;
    margin:0 auto 0.55rem;
    background: url(../../../assets/images/code-bg.png) no-repeat;
    background-size:100% 100%; 
    font-size: 13px;
}
.b-content p,.get-money p{
    text-indent: 2em;
    line-height: 0.42rem;
}
.count-detail h5{
    text-align: center;
    margin:0.28rem 0 0.2rem;
    font-size: 14px;
}
.count-detail p{
    line-height: 0.42rem;
}
.count-detail p span{
    color:#e7bf05;
}
.get-money h5{
    color:#e7bf05;
    font-size:16px;
    margin:0.3rem 0 0.15rem;
    text-align: center;
}
</style>
