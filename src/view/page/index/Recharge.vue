<template>
    <div class="recharge">
        <div class="recharge-ID">
            <span>用户ID:</span>
            <span>66666</span>
        </div>
        <h3>充值</h3>
        <ul class="recharge-list clear">
            <li v-for="(item,index) in rechargeLists" :class="{active:indexs == index}" @click="toSelectMoney(item.money,index)">{{item.con}}</li>
            
        </ul>
        <div class="recharge-button" @click="toRecharge">确认</div>
        <l-footer></l-footer>
    </div>
</template>
<script>
    export default {
      name: 'Recharge',
      data(){
          return{
              indexs:9999,
              Money:0,
              rechargeLists:[
                {con:'10元',
                 money:10 
                },
                {con:'20元',
                 money:20 
                },
                {con:'50元',
                 money:50 
                },
                {con:'100元',
                 money:100 
                },
                {con:'200元',
                 money:200 
                },
                {con:'300元',
                 money:300 
                }
            ]
          }
      },
      methods:{
          toSelectMoney(m,index){
              this.indexs = index;
              this.Money = m;
          },
          toRecharge(){
              if(this.Money == 0){
                  alert('请选择您要充值的金额！')
                  return false;
              }
              console.log(this.Money)
          }
      }
    }
</script>
<style scoped>
.recharge{
    width: 100%;
    height: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    background: #f5f5f5;
}
.recharge-ID{
    width: 100%;
    text-align: center;
    border-bottom: 0.01rem solid #999999;
    color: #0743cb;
    line-height: 1.12rem;
}
    .recharge h3{
        text-align: center;
        color: #0743cb;
        margin: 0.4rem auto;
    }
    .recharge-list{
        width: 100%;
    }
    .recharge-list li{
        float: left;
        width: 30%;
        height: 0.84rem;
        border: 0.01rem solid #0743cb;
        border-radius: 0.1rem;
        margin-right: 4%;
        margin-bottom: 0.2rem;
        text-align: center;
        line-height: 0.84rem;
        color: #0743cb;
    }
.recharge-list li:nth-child(3n){
    margin-right: 0;
}
.recharge-list li.active{
    background: #0743cb;
    color: #fff;
}
    .recharge-button{
        width: 4.22rem;
        height: 0.9rem;
        margin: 2.7rem auto 0;
        text-align: center;
        line-height: 0.9rem;
        color: #fff;
        background: #0743cb;
        border-radius: 0.1rem;
    }


</style>