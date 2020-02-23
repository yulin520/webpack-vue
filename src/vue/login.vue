<template>
  <div>
      <button @click= "show('鱼少爷')">按钮</button>
    <h1>这是登录组件，使用 .vue 文件定义出来的 --- {{msg}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "123"
    };
  },
  methods: {
    show(a) {
      alert(a +"调用了 login.vue 中的 show 方法");
    }
  }
};
</script>

<style>

</style>
