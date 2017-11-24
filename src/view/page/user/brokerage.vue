<template>
    <div class="brokerage">
        <l-header></l-header>
        <l-content>
            <div class="c-content">
            <h2>我的佣金</h2>
            <h3>0.00元</h3>
            <div class="r-content">
                <table class="p-table" width="100%"  cellspacing="0">
                    <tbody>
                        <tr>
                            <td width="33.3%">用户</td>
                            <td width="33.3%">人数</td>
                            <td width="33.3%">人数</td>
                        </tr>
                        <tr>
                            <td width="33.3%">一级用户</td>
                            <td width="33.3%">0人</td>
                            <td width="33.3%">3元</td>
                        </tr>
                        <tr>
                            <td width="33.3%">二级用户</td>
                            <td width="33.3%">0人</td>
                            <td width="33.3%">3元</td>
                        </tr>
                        <tr>
                            <td width="33.3%">三级用户</td>
                            <td width="33.3%">0人</td>
                            <td width="33.3%">3元</td>
                        </tr>
                    </tbody> 
                </table>
            </div>
        </div>
        </l-content>
        <l-footer></l-footer>
    </div>
</template>

<script>
export default {
  name: 'brokerage',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.brokerage{
    width: 100%;
    height:100%;
}
.c-content{
    padding:0.4rem 0.2rem 0;
}
.brokerage h2{
    height:0.66rem;
    line-height:0.56rem;
    text-align:center;
    font-size:16px;
}
.brokerage h3{
    font-size:16px;
    text-align: center;
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
</style>
