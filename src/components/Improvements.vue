<template>
    <div class="improvement">
        <span class="check">✓</span><span><slot></slot></span>
    </div>
</template>

<script>
export default {
    name:'Improvements',
    data(){
        return {}
    },
    methods:{

    }
}
</script>

<style scoped>
.check{
    margin-right:15.6px;
    color:#ed3a3a;
}
span{
    font-size:13px;
    font-weight:bold;
}
</style>