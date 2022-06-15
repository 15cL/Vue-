<template>
  <div id="MyHeader">
    <div id="left">
      <h2><span></span>603Music</h2>
      <i><span>&lt;</span><span>&gt;</span><input type="text" /></i>
    </div>
    <div id="right">登录</div>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style lang="scss" scoped>
#MyHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background-color: darkgoldenrod;
  #left {
    display: flex;
    width: 30vw;
    justify-content: space-between;
    align-items: center;
    h2 {
      display: flex;
      align-items: center;
      padding: 10px;
      span {
        display: inline-block;
        width: 50px;
        height: 50px;
        vertical-align: middle;
        background: url("../assets/logo.png") no-repeat;
        background-size: cover;
        margin-right: 20px;
      }
    }
    i{
      span{
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
        margin: 0 10px 0 0;
        border-radius: 50%;
        background-color: white;
        cursor: pointer;
      }
      input{
        width: 12.5rem;
        height: 1.5625rem;
        border-radius: 5px;
        border: none;
        text-indent: 10px;
      }
    }
  }
  #right{
    cursor: pointer;
  }
}
</style>