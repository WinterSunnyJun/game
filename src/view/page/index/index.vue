<template>
  <div class="hello">
      <l-header></l-header>
      <l-content>
          <div class="c-content">
    <!--开奖倒计时-->
      <div class="countdown clear">
        <div class="countdown-title clear">
          <p>201702177102<span>期</span></p>
        </div>
        <div class="countdownNum">
            <span @change="toChange">{{time}}</span>
        </div>
      </div>
    <!--往期与玩法说明-->
      <div class="old-method clear">
          <div class="old" @click="oldPop = true">往期</div>
          <div class="method" @click="useMethods = true">使用方法</div>
      </div>
    <!--开彩盘-->
      <div class="lottery-run">
          <div class="lottery-run-title">
            <p>201720172017 <span>期</span></p>
          </div>
          <div class="lottery-run-num clear">
              <div class="lottery-num">
                <span>000,</span>
                <span>000,</span>
                <span>000</span>
              </div>
              <div class="lottery-classify">
                <span>大</span>
                <span>小</span>
                <span>合</span>
              </div>
          </div>
          <ul class="lottery-list">
              <li>
                <div class="lottery-item-time">201720172017<span>期</span></div>
                <div class="lottery-item-now"><span>8</span><span>8</span><span>8</span></div>
                <ol class="lottery-item-select clear">
                  <li class="active">大</li>
                  <li>小</li>
                  <li>合</li>
                </ol>
              </li>
              <li>
                  <div class="lottery-item-time">201720172017<span>期</span></div>
                  <div class="lottery-item-now"><span>8</span><span>8</span><span>8</span></div>
                  <ol class="lottery-item-select clear">
                      <li>大</li>
                      <li class="active">小</li>
                      <li>合</li>
                  </ol>
              </li>
          </ul>
      </div>
    <!--赔率-->
      <div class="odds">
            <div class="odds-title">
                <p>201720172017<span>期投注</span></p>
            </div>
            <div class="odds-content">
                <div class="odds-item" v-for="(item,index) in ruleData" :class="{active:indexs==index}" @click="toSelectOdds(index,item.id)">
                    <p class="odds-big">{{item.name}}</p>
                    <p class="odds-odds">{{item.con}}</p>
                </div>
                
            </div>
      </div>
      <!--投注-->
      <div class="betting clear">
            <div class="betting-max"></div>
            <div class="betting-reduce" @click="toDecrease()"></div>
            <div class="betting-num">
                <input type="text" v-model="bettingNum" readonly>
            </div>
            <div class="betting-plus" @click="toIncrease() "></div>
            <div class="betting-betting" @click="toBettting()"></div>
      </div>
      <!--客服-->
      <div class="customer-service" @click="kefu = true">
          <div class="customer-service-pic">
              <img :src="Customer" alt="">
          </div>
      </div>

      <!--投注成功提示-->
      <div class="betting-success" v-if="bettingSuc">
          <div class="betting-success-prompt">
              <h3>投注成功</h3>
              <div class="betting-success-pic">
                  <img :src="BettingPop"/>
              </div>
          </div>
      </div>
      <!--往期开奖-->
      <div class="oldPop" v-if="oldPop" >
          <div class="oldPop-prompt">
              <div class="oldPop-close" @click="oldPop = false"></div>
              <div class="oldPop-title" ></div>
              <dl class="oldPop-list">
                  <dt class="clear">
                      <div class="oldPop-No">期号</div>
                      <div class="oldPop-result">开奖结果</div>
                  </dt>
                  <dd>
                      <ul>
                          <li class="oldPop-item">
                              <div class="oldPop-data">201720172017</div>
                              <div class="oldPop-num">
                                  <span>3</span><span class="active">6</span><span>9</span>
                              </div>
                              <div class="oldPop-classify">
                                  <span>大</span><span>小</span><span>合</span>
                              </div>
                          </li>
                          <li class="oldPop-item">
                              <div class="oldPop-data">201720172017</div>
                              <div class="oldPop-num">
                                  <span class="active">3</span><span>6</span><span>9</span>
                              </div>
                              <div class="oldPop-classify">
                                  <span>大</span><span>小</span><span>合</span>
                              </div>
                          </li>
                          <li class="oldPop-item">
                              <div class="oldPop-data">201720172017</div>
                              <div class="oldPop-num">
                                  <span>3</span><span>6</span><span>9</span>
                              </div>
                              <div class="oldPop-classify">
                                  <span>大</span><span class="active">小</span><span>合</span>
                              </div>
                          </li>
                          <li class="oldPop-item">
                              <div class="oldPop-data">201720172017</div>
                              <div class="oldPop-num">
                                  <span class="active">3</span><span>6</span><span>9</span>
                              </div>
                              <div class="oldPop-classify">
                                  <span>大</span><span>小</span><span>合</span>
                              </div>
                          </li>
                      </ul>
                  </dd>
              </dl>
          </div>
      </div>

      <!--客服-->
      <div class="kefu-wrapper" v-if="kefu">
          <div class="kefu">
              <div class="kefu-close" @click="kefu = false"></div>
              <div class="kefu-title"></div>
              <div class="kefu-QR">
                  <img :src="KefuQR" alt="">
              </div>
              <p class="kefu-text">
                  识别二维码，进入微信群进行客服服务
              </p>
              <div class="kefu-tel">
                  <span class="kefu-tel-icon"></span>
                  <p><span>客服电话:</span>010-123456</p>
              </div>
          </div>
      </div>

      <!--玩法说明-->
      <div class="playmethod-wrapper" v-if="useMethods">
            <div class="playmethod">
                <div class="playmethod-close" @click="useMethods = false"></div>
                <div class="playmethod-title"></div>
                <p>合:末位(个位、十位)两位数字相同,则为'合'.当开奖为'合'时,期结果不算大也不算小.</p>
                <p>大:当末位(个位)为5,6,7,8,9时,为'大'.</p>
                <p>小:当末位(个位)为0,1,2,3,4时,为,小'.</p>
            </div>
      </div>
      <!--禁止投注-->
      <div class="nobet-wrap" v-if="noBet">
            <div class="nobet">
                <h3>系统正在清算中</h3>
                <h4>请稍等</h4>
                <div class="time-icon">
                    <img :src="timg" alt="">
                </div>
                <p>{{time1}}</p>
            </div>
      </div>
      </div>
      </l-content>
      <l-footer></l-footer>
  </div>
</template>

<script>
    import Customer from '../../../assets/images/customer-service.png'
    import BettingPop from '../../../assets/images/betting-prompt.png'
    import KefuQR from '../../../assets/images/kefu-QRcord.png'
    import timg from '../../../assets/images/timg.gif'
export default {
  name: 'HelloWorld',
  data () {
    return {
      Customer: Customer,
      BettingPop: BettingPop,
      KefuQR: KefuQR,
      timg:timg,
      indexs:9999,
      ruleData:[
          {
            name:'大',
            con:'1赔1.9',
            id:'1'
          },
          {
            name:'小',
            con:'1赔1.9',
             id:'2'
          },
          {
            name:'合',
            con:'1赔7',
             id:'3'
          }
      ],
      statusId:'',
      bettingNum:1,
      bettingSuc:false,
      oldPop:false,
      kefu:false,
      useMethods:false,
      noBet:false,
      time:10,
      timer:'',
      time1:5,
      timer1:'',
    }
  },
  watch:{
      time:'toChange',
      time1:'toChange1'
  },
  methods:{
      toSelectOdds(index,id){
          this.indexs = index;
          this.statusId = id
      },
      toDecrease(){
          this.bettingNum --;
          if(this.bettingNum<=1){
              this.bettingNum = 1
          }
      },
      toChange(){
          if(this.time <=0){
              this.noBet = true
              this.time1 =5
              window.clearInterval(this.timer);
              this.noBetting()
          }
      },
      toChange1(){
           if(this.time1 <=0){
              this.noBet = false;
              this.time = 10;
              window.clearInterval(this.timer1);
              this.toChangeTime()
          }
      },
      toIncrease(){
          this.bettingNum++;
      },
      toBettting(){
          if(this.statusId == 0){
              alert('请选择投注类型！')
              return false
          }
          this.bettingSuc = true;
          setTimeout(()=>{
              this.bettingSuc = false;
          },1500)
      },
      toChangeTime(){
          this.timer=window.setInterval(()=> {
            if ((this.time--) <= 0) {
                this.time = 10
             window.clearInterval(this.timer);
            }
         }, 1000);
      } ,
      noBetting(){
          this.timer1=window.setInterval(()=> {
              this.time1--;
            if ((this.time1) <= 0) {
             window.clearInterval(this.timer1);
            }
        }, 1000);
      }
  },
  mounted(){
       this.toChangeTime() 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 100%;
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
  }
  .c-content{
      padding: 0 0.2rem;
  }
  .countdown{
    width: 7.1rem;
    height: auto;
    background: url("../../../assets/images/countdown.png")no-repeat;
    background-size: 100%;
    margin: 0.4rem auto 0;
    overflow: hidden;
  }
  .countdown-title{
    width: 80%;
    margin: 0.3rem auto 0;
    color: #fff;
    text-align: center;
  }
  .countdownNum{
    float: right;
    margin-right: 0.73rem;
    width: 1.72rem;
    height: auto;
    background: url("../../../assets/images/countdownNum.png")no-repeat;
    background-size: 100% auto;
    text-align: center;
    line-height: 1.3rem;
    color: #fff;
    font-weight: bold;
    font-size: 35px;
  }
  .old,
  .method{
    float: left;
    width: 1.6rem;
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
    border: 0.02rem solid #fff;
    border-radius: 0.06rem;
    box-shadow: 0 0 0.06rem #1f3eaa,0 0 0.06rem #1f3eaa inset;
    color: #fff;
  }
  .old{
    margin: 0 0.2rem 0 0.1rem;
  }
  .lottery-run{
    width: 6.95rem;
    height: 3.08rem;
    margin: 0.5rem auto 0;
    background: url("../../../assets/images/lotterybg1.png")no-repeat;
    background-size: cover;
    padding: 0 0.75rem;
    box-sizing: border-box;
    overflow: hidden;
  }
  .lottery-run-title{
    margin: 0.32rem auto 0;
    width: 80%;
  }
 .lottery-run-title p{
   color: #fff;
   width: 100%;
   line-height: 0.32rem;
   text-align: center;
   background: url("../../../assets/images/titlebg.png")no-repeat center center;
   background-size: cover;
 }
  .lottery-run-num{
    width: 100%;
    margin-top: 0.3rem;
  }
  .lottery-num{
    float: left;
    width: 3.66rem;
    height: 0.56rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
    line-height: 0.56rem;
    background: url("../../../assets/images/lottery-bg.jpg")no-repeat;
    background-size: 100% auto;
    border-left: 0.01rem solid #242d4c;
    border-right: 0.01rem solid #242d4c;
    color: #fff;
    letter-spacing: 0.1rem;

  }
  .lottery-classify{
    float: left;
      margin-top: 0.08rem;
      width: 1.6rem;
      height: 0.4rem;
      line-height: 0.4rem;
      margin-left: 0.1rem;
  }
  .lottery-classify span{
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      background: #ff3000;
      border-radius: 0.06rem;
      text-align: center;
      color: #fff;
  }
  .lottery-classify span:last-child{
      margin-right: 0;
  }
    .lottery-list{
        width: 100%;
        margin-top: 0.3rem;
    }
  .lottery-list > li{
      width: 100%;
      padding-top: 0.05rem;
      padding-bottom: 0.05rem;
  }
  .lottery-list > li:first-child{
      border-bottom: 0.01rem solid #292843;
  }
  .lottery-list > li:nth-child(2){
      border-top: 0.01rem solid #464573;
  }
  .lottery-list li:after{
      content: '';
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
  }
  .lottery-item-time{
      float: left;
      width: 2.3rem;
      color: #fff;
  }
    .lottery-item-now{
        float: left;
        margin-left: 0.2rem;
        width: 1.08rem;
        height: 0.3rem;
    }
  .lottery-item-now span{
      display: inline-block;
      width: 0.3rem;
      height: 0.3rem;
      margin-right: 0.08rem;
      background: #800080;
      text-align: center;
      line-height: 0.3rem;
      color: #fff;
      border-radius: 0.05rem;
  }
  .lottery-item-now span:last-child{
      margin-right: 0;
  }
  .lottery-item-select{
      float: right;
      width: 1.75rem;
  }
  .lottery-item-select > li{
      float: left;
      width: 0.4rem;
      height: 0.4rem;
      color: #fff;
      margin: 0 0.09rem;
      text-align: center;
      line-height: 0.4rem;
  }
  .lottery-item-select > li.active{
      background: #ff3000;
      border-radius: 50%;
  }
    .odds{
        position: relative;
        margin: 0.8rem auto 0;
        width: 7.1rem;
        height: 2.48rem;
        background: url("../../../assets/images/lotterybg2.png")no-repeat;
        background-size: 100%;
    }
    .odds-title{
        position: absolute;
        left: 50%;
        top: -0.35rem;
        margin-left: -1.65rem;
        width: 3.3rem;
        height: 0.8rem;
        text-align: center;
        color: #fff;
        line-height: 0.8rem;
        background: url("../../../assets/images/bettingTitle.png")no-repeat;
        background-size: 100%;
    }
    .odds-content{
        padding-top: 0.65rem;
        width: 100%;
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
    }
    .odds-item{
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
    }
  .odds-item{
      background: url("../../../assets/images/bigbg.png")no-repeat;
      background-size: 100%;
  }
  .odds-item.active{
      background: url("../../../assets/images/hebg.png")no-repeat;
      background-size: 100%;
  }
    .odds-big{
        font-size: 24px;
        color: #fff;
        margin-top: 0.15rem;
    }
    .odds-odds{
        margin-top: 0.12rem;
        color: #fff;
    }
    /*投注*/
    .betting{
        width: 7.1rem;
        margin: 0.35rem auto 0;
    }
    .betting-max{
        float: left;
        width: 1.3rem;
        height: 0.86rem;

        background: url("../../../assets/images/max.png")no-repeat;
        background-size: 100%;
    }
    .betting-reduce{
        float: left;
        width: 1rem;
        margin-left: 0.15rem;
        height: 0.86rem;
        background: url("../../../assets/images/reduce.png")no-repeat;
        background-size: 100%;
    }
    .betting-num{
        float: left;
        width: 1.3rem;
        height: 0.86rem;
        text-align: center;
        color: #fff;
        line-height: 0.86rem;
        background: url("../../../assets/images/amount.png")no-repeat;
        background-size: 100%;
    }
     .betting-num input{
         width: 100%;
         height:100%;
         padding: 0 0.3rem;
         color: #fff;
         text-align: center;
     }
    .betting-plus{
        float: left;
        width: 1rem;
        height: 0.86rem;
        background: url("../../../assets/images/plus.png")no-repeat;
        background-size: 100%;
    }
    .betting-betting{
        float: left;
        width: 2.05rem;
        height: 0.86rem;
        margin-left:0.15rem;
        background: url("../../../assets/images/betting-betting.png")no-repeat;
        background-size: 100%;
    }
    .customer-service{
        position: fixed;
        right: 0;
        top: 2.96rem;
        width: 0.44rem;
        height: 1.2rem;
        background: #1e46bf;
        border-radius: 0.06rem;
        z-index: 2;
    }
    .customer-service-pic{
        width: 0.34rem;
        height: 1rem;
        margin: 0.1rem auto;
    }
    /*投注成功弹窗*/
    .betting-success{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(50,50,50,.2);
        z-index: 2;
    }
    .betting-success-prompt{
        width: 5.6rem;
        height: 6.5rem;
        margin: 1.5rem auto;
        left: 50%;
        top: 0.6rem;
        border: 0.01rem solid #1623cd;
        text-align: center;
        background: rgba(240,240,240,.9);
        border-radius: 0.1rem;
    }
  .betting-success-prompt h3{
      width: 100%;
      text-align: center;
      font-size: 30px;
      color: #0712a2;
      margin-top: 1.55rem;
  }
    .betting-success-pic{
        width: 2rem;
        height: 2rem;
        margin: 0.8rem auto;
    }
    /*往期开奖结果弹窗*/
    .oldPop{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(50,50,50,.2);
    }
    .oldPop-prompt{
        position: relative;
        width: 6.6rem;
        height: 6.5rem;
        margin: 1.5rem auto;
        background: rgba(6,19,184,.97);
        border: 0.01rem solid #fff;
        border-radius: 0.2rem;
        box-shadow: 0 0 0.05rem #4e5b6e;
    }
    .oldPop-close{
        position: absolute;
        right: -0.2rem;
        top: -0.1rem;
        width: 0.6rem;
        height: 0.6rem;
        background: url("../../../assets/images/old-close.png")no-repeat;
        background-size: 100%;
        z-index: 2;
    }
    .oldPop-title{
        width: 1.72rem;
        height: 0.8rem;
        background: url("../../../assets/images/oldPoptitle.png")no-repeat;
        background-size: 100%;
        margin: 0.5rem auto;
    }
    .oldPop-list{
        width: 100%;
    }
  .oldPop-list dt{
      width: 100%;
      height: 0.66rem;
      border-top: 0.01rem solid #040c76;
      border-bottom: 0.01rem solid #040c76;
  }
    .oldPop-No{
        float: left;
        width: 33%;
        height: 0.66rem;
        line-height: 0.66rem;
        border-right: 0.01rem solid #040c76;
        text-align: center;
        color: #fff;
    }
  .oldPop-result{
      float: left;
      width: 66%;
      height: 0.66rem;
      line-height: 0.66rem;
      text-align: center;
      color: #fff;
  }
    .oldPop-list dd,
    .oldPop-list dd ul{
        width: 100%;
    }
    .oldPop-item{
        width: 100%;
        line-height: 0.66rem;
    }
  .oldPop-item:after{
      content: '';
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
      color: #fff;
  }
    .oldPop-data{
        float: left;
        width: 33%;
        text-align: center;
        color: #fff;
        border-right: 0.01rem solid #040c76;
    }
    .oldPop-num,
    .oldPop-classify{
        float: left;
        width: 33%;
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        color: #fff;
    }
  .oldPop-num{
      border-right: 0.01rem solid #040c76;
  }
    .oldPop-classify span,
    .oldPop-num span{
        display: block;
        width: 0.34rem;
        height: 0.34rem;
        background: #6d90c9;
        border-radius: 50%;
        text-align: center;
        line-height: 0.34rem;
        margin: 0.15rem 0.08rem;
    }
  .oldPop-num span.active{
        background: #d50e0e;
  }
  .oldPop-classify span.active{
      background: #d50e0e;
  }
  .oldPop-item:nth-of-type(odd){
      background: #033483;
  }
  .oldPop-item:nth-of-type(even){
      background: #022255;
  }
    /*客服*/
    .kefu-wrapper{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(50,50,50,.2);
    }
    .kefu{
        position: relative;
        width: 5.6rem;
        height: 7.6rem;
        margin: 1.5rem auto;
        background: rgba(6,19,184,.97);
        border: 0.01rem solid #fff;
        border-radius: 0.2rem;
    }
    .kefu-close{
        position: absolute;
        right: -0.2rem;
        top: -0.1rem;
        width: 0.6rem;
        height: 0.6rem;
        background: url("../../../assets/images/old-close.png")no-repeat;
        background-size: 100%;
        z-index: 2;
    }
    .kefu-title{
        width: 1.72rem;
        height: 0.8rem;
        background: url("../../../assets/images/kefu-title.png")no-repeat;
        background-size: 100%;
        margin: 0.5rem auto;
    }
    .kefu-QR{
        width: 3.04rem;
        height: 3.04rem;
        margin: 0.4rem auto;
        border: 0.1rem solid #e7bf05;
    }
    .kefu-text{
        width: 100%;
        text-align: center;
        color: #fff;
    }
    .kefu-tel{
        width: 4.08rem;
        height: 0.64rem;
        margin: 0.6rem auto 0;
        border: 0.01rem solid #fff;
        border-radius: 0.05rem;
        box-shadow: 0 0 0.2rem #fff,0 0 0.2rem #fff inset;
        text-align: center;
        line-height: 0.64rem;
    }
    .kefu-tel-icon{
        display: inline-block;
        width: 0.32rem;
        height: 0.27rem;
        background: url("../../../assets/images/kefu-tel.png");
        background-size: 100%;
        vertical-align: middle;
    }
    .kefu-tel p{
        display: inline-block;
        color: #fff;
    }
    /*玩法说明*/
    .playmethod-wrapper{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(50,50,50,.2);
    }
    .playmethod{
        position: relative;
        width: 5.6rem;
        height: 6.5rem;
        margin: 1.5rem auto;
        background: rgba(6,19,184,.97);
        border: 0.01rem solid #fff;
        border-radius: 0.2rem;
        padding: 0 0.27rem;
        box-sizing: border-box;
    }
    .playmethod-close{
        position: absolute;
        right: -0.2rem;
        top: -0.1rem;
        width: 0.6rem;
        height: 0.6rem;
        background: url("../../../assets/images/old-close.png")no-repeat;
        background-size: 100%;
        z-index: 2;
    }
    .playmethod-title{
        width: 1.72rem;
        height: 0.8rem;
        background: url("../../../assets/images/play-title.png")no-repeat;
        background-size: 100%;
        margin: 0.5rem auto;
    }
  .playmethod p{
      width: 100%;
      color: #fff;
      margin-bottom: 0.2rem;
  }

.nobet-wrap{
    position: fixed;
    top:0;
    left: 0;z-index: 999;
    width: 100%;
    height:100%;
    background: rgba(0,0,0,0.2)
}
.nobet{
    width: 4.66rem;
    height: 5.64rem;
    background: #fff;
    border-radius:0.16rem;
    margin:40% auto 0;
    color:#000;
    padding-top:1.3rem;
}

.nobet h3,.nobet h4{
    font-size: 18px;
    text-align: center;
    margin-bottom:0.2rem;
}
.nobet p{
    color:#0c57d4;
    font-size:64px;
    text-align: center;
    margin-top:0.2rem;
}
.nobet .time-icon{
    width: 0.80rem;
    height:0.59rem;
    margin:0 auto 0;
}
.nobet .time-icon img{
    width: 100%;
    height:100%;
    margin-top:0.2rem;
}
</style>
