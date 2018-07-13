<template>
    <div class="normarl-echart" ref="normarlEchart">
    </div>
</template>

<script>
    import echart from 'echarts'
    import 'echarts/theme/macarons'
    export default {
      props: {
        optionData: {
          type: Object
        }
      },
      data () {
        return {}
      },
      created () {
        // this.initChart(this.optionData)
      },
      mounted () {
        this.initChart(this.optionData)
      },
      computed: {},
      watch: {
        optionData () {
          this.initChart(this.optionData)
        }
      },
      methods: {
        initChart (option) {
          echart.dispose(this.$refs.normarlEchart)
          let myChart = echart.init(this.$refs.normarlEchart, 'macarons')
          myChart.setOption(this.optionData)
        }
      }
    }
</script>

<style lang="less">
     @import "~common/css/index.less";
    .normarl-echart {
        height: 500px;
        margin: 20px 0;
        border-radius: 2px;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
        box-sizing: border-box;
        background: @base-background-color !important;
    }
</style>
