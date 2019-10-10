<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.img-container {
  position: relative;
  display: inline-block;
}
.img-container .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #eee;
  opacity: 0;
  transition: opacity 500ms ease-in-out;
}
.img-container:hover .overlay {
  opacity: 1;
}
.overlay div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
</style>