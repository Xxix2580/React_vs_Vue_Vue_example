<template>
    <a class="box" href=href>
        <p><slot></slot></p>
        <img src='@/assets/arrow.svg'>
    </a>
</template>

<script>
export default {
    name: 'ButtonShort',
    data(){
        return {}
    }
}
</script>

<style scoped>
    a{
        margin-top:0px;
        position:relative;
        font-size:0px;
        width:100%;
        display:inline-block;
        height:61px;
        text-align:center;
        max-width:182px;
        background-color:#ffffff;
        border-radius: 10px;
        box-shadow: 0 3px 6px 0 rgba(169, 169, 169, 0.16);
        color:black;
        text-decoration:none;
    }
    p{
        padding-left:21px;
        margin-top:21px;
        margin-bottom:21px;
        text-align:left;
        font-weight:bold;
        font-size:12px;
        color:black;
    }
    img{
        display:inline-block;
        position:absolute;
        right:18px;
        bottom:19px;
    }

</style>