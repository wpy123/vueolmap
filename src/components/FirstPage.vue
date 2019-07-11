<template>
	<div class="hello">
		<h1>
			{{ msg }}
		</h1>

		<div v-on:click="nextpage" class="backcolor">
			下一页
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',

		data() {
			return {
				msg: '这是第一个页面 ',
			}
		},
		
		methods: {
			nextpage() {
				this.$router.push('/second')
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