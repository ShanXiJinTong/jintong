<template>
	<div>
		<div>
				<textarea style="opacity: 0;" id="url">http://www.chengzhanghao.com:81/shop/login/index</textarea>
			</div>
		<div class="xrBg">
			<div class="xrIcon">
				<div class="xrIconbox" @click="copy">
					<a href="javascript:">
						<div class="xrIcon1">
							<img src="./static/img/Teight1.png" alt="">
						</div>
					</a>
					<span>商家入驻</span>
				</div>
				<div class="xrIconbox" @click="copy">
					<a href="javascript:">
						<div class="xrIcon2">
							<img src="./static/img/Teight2.png" alt="">
						</div>
					</a>
					<span>水司入驻</span>
				</div>
			</div>
			<div class="xrclose" @click="$router.back()">
				<div class="xrcircle">×</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ruzhu",
		methods: {
			copy() {
				document.querySelector("#url").select();
				document.execCommand("Copy");
				this.$message({
					type: "success",
					message: "链接已复制"
				});
			}
		}
	}
</script>

<style scoped>
	@import url(./static/css/Teight.css);
</style>