<template>
  <div class="content">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'l-content',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content{
  width: 100%;
  position: absolute;
  left: 0;
  top:0.88rem;
  bottom:1rem;
  overflow: auto;
}

</style>