import Vue from 'vue'
import Router from 'vue-router'
//首页
import Index from '@/view/page/index/index'
import Recharge from '@/view/page/index/Recharge'
//代理
import agency from '@/view/page/agency/agency'
//个人中心
import UserCenter from '@/view/page/user/userCenter'
import rechargeRecord from '@/view/page/user/rechargeRecord'
import brokerage from '@/view/page/user/brokerage'
import withDraw from '@/view/page/user/withDraw'
import moneyRecord from '@/view/page/user/moneyRecord'
import brokerageRecord from '@/view/page/user/brokerageRecord'
import guessRecord from '@/view/page/user/guessRecord'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/index/recharge',
      name: 'Recharge',
      component: Recharge
    },
    {
      path: '/agency',
      name: 'agency',
      component: agency
    },
    {
      path: '/user',
      name: 'UserCenter',
      component: UserCenter
    },
    {
      path: '/user/recharge_record',
      name: 'rechargeRecord',
      component: rechargeRecord
    },
    {
      path: '/user/brokerage',
      name: 'brokerage',
      component: brokerage
    },
    {
      path: '/user/with_draw',
      name: 'withDraw',
      component: withDraw
    },
    {
      path: '/user/money_record',
      name: 'moneyRecord',
      component: moneyRecord
    },
    {
      path: '/user/brokerage_record',
      name: 'brokerageRecord',
      component: brokerageRecord
    },
    {
      path: '/guess_record',
      name: 'guessRecord',
      component: guessRecord
    }
  ]
})
