<template>
    <div class="banner">
     <router-link to="/consult" class="banner-c">
         <img 
         src="http://jiakao-web.image.mucang.cn/jiakao-web/2018/06/05/16/e4e1d247dc5e4d6eb7cc635e5bcec943.jpeg" 
         data-width="375" data-height="84">
     </router-link>
    </div>
</template>
 
<script>
export default {
  name: "banner"
};
</script>

<style scoped>
.baner {
  position: relative;
}
.banner-c {
    display: block;
    width: 100%;
    max-height: 2rem;
    overflow: hidden;
}
.banner-c img {
    display: block;
    width: 100%;
    height: auto;
}
</style>