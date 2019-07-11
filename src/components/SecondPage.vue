<template>
	<div class="hello">
		<h1>
			{{ secondeMsg }}
		</h1>

		<div v-on:click="nextpage" class="backcolor">
			上一页
		</div>
	</div>
</template>

<script>
	export default {
		name: 'vulesDialog',
		data() {
			return {
				secondeMsg: '这是第二个页面 ',
			}
		},
		
		methods: {
			nextpage() {
				this.$router.push('/')//返回到firstpage
			}
		},
	}
</script>

<style scoped>
.backcolor {
	background-color: lightblue;
		width: 60px;
	height: 25px;
	margin-left: 50%;
	transform: translateX(-50%);
}
</style>


<!--
<template class="mask">
    <div class="dialog" id="app"  transition="fade">
        <div class="dialog-cover"   >
            <div class="dialog_content">
                <div @click="closeMyself" class="close">
                </div>
                <p class="rankRuleTitle">评价介绍</p>
                <div class="table_outline">
                 <table class="table table-hover table-bordered">
                    <thead >
                    <tr>
                        <th >评级值</th>
                        <th >额度区间</th>
                        <th >信用情况</th>
                    </tr>
                    </thead>
                    <tbody>
                      <tr v-for ="(columNam,index) in ranks">
                        <td>{{columNam.rank}}</td>
                        <td>{{columNam.rankAmount}}</td>
                        <td>{{columNam.rankDesc}}</td>
                    </tr>
                     </tbody>
                 </table>
                </div>
                <p class="rankTip">
                    注: 真实有效的完整资料获取额度更精准
                </p>
            </div>
        </div>
      
    </div>
</template>
<script>
export default {
  //   props: ["isShow"],
  data() {
    return {
      columNam: { rank: "", rankAmount: "", rankDesc: "" },
      ranks: [
        { rank: "A+", rankAmount: "8000+", rankDesc: "出色" },
        { rank: "A", rankAmount: "5000-8000", rankDesc: "优秀" },
        { rank: "B+", rankAmount: "4000-5000", rankDesc: "良好" },
        { rank: "B", rankAmount: "3000-4000", rankDesc: "中等" },
        { rank: "C+", rankAmount: "3000以下", rankDesc: "待提高" },
        { rank: "D", rankAmount: "额度冻结", rankDesc: "糟糕" }
      ],
      isShow: false
    };
  },
  methods: {
    closeMyself() {
      this.$emit("closeDialog");
    }
  }
};
</script>
<style lang="scss" scoped>
.dialog {
  position: relative;
  color: #2e2c2d;
  font-size: 16px;
  padding: 20px;
  align-content: center;
  text-align: center;
}
.dialog-cover {
  background: rgba(0, 0, 0, 0.8);
  z-index: 200;
  width: 100%;
  justify-content: center;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.dialog_content {
     background: #f2f2f2;
    width: 90%;
    border-radius: 10px;
    /* height: -webkit-fit-content; */
    height: -moz-fit-content;
    height: 6.4rem; 
    position: fixed;
    left: 50%;
    top: 50%;
    text-align: center;
    /* -webkit-transform: translate(-50%, -50%); */
    -webkit-transform: translate(-50%, -50%);
     transform: translate(-50%, -60%);
    /* padding-left: 0.2rem; */
    /* padding-right: 0.1rem; */
    /* padding-top: 0.1rem; */
    /* padding-bottom: 0.3rem; */
}
.table_outline {
  background: #fff;
  width: 6rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.rankTip {
      position: absolute;
    width: 100%;
    height: 17px;
    /* left: 0; */
    bottom: 0;
    /* margin-top: 0.2rem; */
    text-align: left;
    padding-left: 0.4rem;
    font-size: 0.66em;
    color: #333333;
    letter-spacing: 1px;
    margin-bottom: 0.54rem;
}
.center {
  text-align: center; /*让div内部文字居中*/
  background-color: #fff;
  border-radius: 0.4rem;
  width: 300px;
  height: 350px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
// table{border-right:1px solid #F00;border-bottom:1px solid #F00;width: 100%;}
// table td{border-left:1px solid #F00;border-top:1px solid #F00}
table {
  border-spacing: 1px;
  border-collapse: inherit;
  background: #e5e5e5;

  // border:0 solid #e5e5e5;
  // width:299px;
  // height:209px;
}
th {
  background: #d2d2d2;
}
.table-hover {
  width: 100%;
}

.table-hover tr {
  background-color: #fff;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
}
.table-hover th {
  width: 33%;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  //   background:#d2d2d2;
  height: 0.58rem;
}
.ruleDialogClose {
  width: 0.26rem;
  height: 0.26rem;
  position: absolute;
  right: 0;
  top: 0;
  margin: auto;
  transform: translate(-0.32rem, 0.15rem);
}
td {
  font-size: 0.77em;
  color: #333333;
  letter-spacing: 1px;
  line-height: 0.3rem;
  text-align: center;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
}
.rankRuleTitle {
  width: 73px;
  height: 25px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  font-size: 1em;
  color: #333333;
  text-align: center;
  margin-top: 0.38rem;
  font:bold;
}
</style>-->

