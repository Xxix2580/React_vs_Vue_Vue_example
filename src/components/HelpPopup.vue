<template>
    <div class="helppopup_bg">
        <div class="helppopup">
            <p>HELP</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"HelpPopup"
}
</script>

<style scoped>
.helppopup_bg{
    width:100%;
    height:100%;
    position:absolute;
    background-color:rgba(0, 0, 0, 0.123);
    z-index:1;
}
.helppopup{
    opacity:1;
    background-color:#ffffff;
}
</style>