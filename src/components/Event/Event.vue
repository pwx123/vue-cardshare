<template>
  <div class="event">
    <div class="header">
      <span>发现</span>
      <i
        class="icon iconfont icon-add"
        @click="addEvent"
      />
    </div>
    <scroll
      ref="eventList"
      :data="eventList"
      :pull-down-refresh="pullDownRefresh"
      :probe-type="probetype"
      :listen-scroll="listenScroll"
      class="eventList"
      @pulldown="pulldown"
    >
      <ul
        ref="events"
        class="events"
      >
        <li
          v-for="(item,index) in eventList"
          :key="index"
          class="eventItem"
        >
          <div class="item">
            <a
              :href="'tel:'+item.phoneNum"
              class="phoneNum"
            >
              <span>
                <i class="icon iconfont icon-jisuanqi" />
              </span>
              <span>{{ item.phoneNum }}</span>
              <span class="time">{{ getTime(item.event.time) }}</span>
            </a>
            <div class="title">{{ item.event.title }}</div>
            <div class="detail">
              <p>
                {{ item.event.detail }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </scroll>
    <tips
      v-show="tipsShow"
      :msg="msg"
      :type="type"
      class="tips"
    />
    <modal
      :msg="modalmsg"
      :md-show="mdShow"
      @closeMd="closeMd"
    />
    <div 
      v-show="!eventList.length" 
      class="nomsg">暂无消息</div>
  </div>
</template>

<script>
import scroll from 'base/scroll/scroll'
import tips from 'base/tips/tips'
import { mapGetters } from 'vuex'
import { timeFormat } from 'common/js/util'

import modal from 'base/modal/modal'

import axios from 'axios'
export default {
  name: 'Event',
  components: {
    scroll,
    tips,
    modal
  },
  data() {
    return {
      listenScroll: true,
      pullDownRefresh: true,
      probetype: 3,
      eventList: [],
      msg: '',
      type: 'primary',
      tipsShow: false,
      modalmsg: '',
      mdShow: false,
      userMsg: ''
    }
  },
  computed: {
    ...mapGetters(['refresh'])
  },
  mounted() {
    this.userMsg = JSON.parse(localStorage.getItem('userMsg'))
    console.log(1)
    this.getEventList()
    setTimeout(() => {
      let height = this.$refs.eventList.$el.offsetHeight
      this.$refs.events.style.minHeight = height - 25 + 'px'
    }, 20)
  },
  activated() {
    this.getEventList()
  },
  methods: {
    addEvent() {
      if (!this.userMsg.phoneNum || !this.userMsg.userName) {
        this.modalmsg = '要添加事件，请先完善信息'
        this.mdShow = true
      } else {
        this.$router.push({ path: '/AddEvent' })
      }
    },
    getEventList() {
      axios
        .post('/users/getEventList', {
          loginUserEmail: this.$cookie.get('loginUserEmail')
        })
        .then(res => {
          if (res.data.status === '0') {
            if (res.data.result) {
              this._sortEventList(res.data.result)
            }
          } else {
            console.log(res.data)
          }
        })
    },
    _sortEventList(eventList) {
      let list = eventList.sort((a, b) => {
        if (new Date(a.event.time) > new Date(b.event.time)) {
          return -1
        } else {
          return 1
        }
      })
      this.eventList = list
      this.$refs.eventList.refresh()
    },
    pulldown() {
      axios
        .post('/users/getEventList', {
          loginUserEmail: this.$cookie.get('loginUserEmail')
        })
        .then(res => {
          if (res.data.status === '0') {
            if (res.data.result) {
              this._sortEventList(res.data.result)
              this.type = 'primary'
              this.msg = '刷新成功'
            }
          } else {
            this.type = 'danger'
            this.msg = '刷新失败'
            console.log(res.data)
          }
          setTimeout(() => {
            this.tipsShow = true
          }, 1000)
          setTimeout(() => {
            this.tipsShow = false
          }, 3000)
        })
    },
    closeMd() {
      this.mdShow = false
      this.$router.push({ path: '/UserMsg' })
    },
    getTime(time) {
      return timeFormat(time)
    }
  },
  beforeRouteEnter(to, from, next) {
    // 解决手机键盘弹起better-sroll失效的问题
    next(vm => {
      vm.$refs.eventList.refresh()
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.event
  width 100%

  .header
    background-color $color-theme
    height 44px
    line-height 44px
    padding-left 15px
    color #fff
    font-size 18px
    border-bottom 1px solid #eee
    position relative

    i
      font-size 20px
      font-weight bold
      position absolute
      right 15px
      color #eee
  .nomsg
    width 100%
    text-align center
    margin-top 30px
    font-size 14px
  .eventList
    position fixed
    top 45px
    bottom 51px
    left 0
    right 0
    overflow hidden

    .eventItem
      width 100%
      height 110px
      padding 0px 0px 20px 0px

      .item
        width 90%
        margin 0 auto
        height 100px
        box-shadow 0px 2px 4px 1px rgba(0, 0, 0, 0.2)
        padding 10px 0px

        .phoneNum
          margin-left 10px

          .time
            color #777777
            font-size 12px
            float right
            margin-right 16px

        .title
          margin 10px 10px 5px 10px
          font-weight bold
          font-size 18px

        .detail
          margin 0 10px
          font-size 16px
          height 48px
          overflow hidden
          position relative

          p
            overflow hidden /* 超出隐藏 */
            text-overflow ellipsis /* 文本溢出时显示省略标记 */
            display -webkit-box /* 设置弹性盒模型 */
            -webkit-line-clamp 3 /* 文本占的行数,如果要设置2行加...则设置为2 */
            -webkit-box-orient vertical /* 子代元素垂直显示 */
</style>
