<template>
  <div id="app">
    <!-- <full-calendar v-if="!getAllData" @dayClick="dayModalToggle" @eventClick="eventModalToggle" /> -->
    <full-calendar :events="getAllData" :firstDay="1" @dayClick="dayModalToggle" @eventClick="eventModalToggle" />
    <day-modal v-if="dayModalShow" @close="dayModalToggle" :day="day" :submit="handleSubmit"/>
    <event-modal v-if="eventModalShow" @close="eventModalToggle" :text="text"/>
  </div>
</template>

<script>
import DayModal from './components/DayModal'
import EventModal from './components/EventModal'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      dayModalShow: false,
      eventModalShow: false,
      text: '',
      day: '',
    }
  },
  computed: {
    ...mapGetters({
      getAllData: 'calendar/getAllData',
    })
  },
  components : {
    DayModal,
    EventModal,
	  'full-calendar': require('vue-fullcalendar')	
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapActions({
      getData: 'calendar/getData',
      addData: 'calendar/addData',
    }),
    dayModalToggle(day) {
      if(day) {
        this.day = `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`
      }
      this.dayModalShow = !this.dayModalShow
    },
    eventModalToggle(text) {
      if(text) {
        this.text = text.title
      }
      this.eventModalShow = !this.eventModalShow
    },
    handleSubmit(text) {
      if(text == '') {
        alert('テキストを入力してください。')
        return false
      }
      this.addData({start: this.day, end: this.day, title: text})
      this.day = ''
      this.dayModalShow = !this.dayModalShow
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
