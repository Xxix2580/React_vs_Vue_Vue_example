<template>
  <div class="Popup_Landing">
      <HelpPopup class='help' v-if="help_popup"></Helppopup>
            <div class="close">
                <img src="@/assets/x.svg">
            </div>
            <div class="internal">
                <!-- png -->
                <img src="@/assets/Services-Ara.png"
                    srcset="@/assets/Services-Ara@2x.png 2x,
                    @/assets/Services-Ara@3x.png 3x"
                    class="Services-Ara">
                
                <h3>KAIST 공식 커뮤니티 ARA가 리뉴얼되었습니다.</h3>
                <div class="renewal_inf">
                    <p>10월 31일부로, 리뉴얼된 아라와 함께할 수 있습니다.</p>
                    <p>KAIST 학내 모든 정보에 대하여, <span class="red">가장 정확한 정보를 가장 신속하게</span> 접근할 수 있도록 합니다.</p>
                </div>
                <div class="change">
                    <p>이번 리뉴얼을 통해</p>
                    <Improvements>보다 직관적인 UI/UX 구현</Improvements>
                    <Improvements>복잡했던 게시판 항목의 재분류</Improvements>
                    <Improvements>사용자 이용 편리를 위한 게시글 담아두기 기능 제공</Improvements>
                    <p>등 보다 발전된 모습으로 돌아왔습니다.</p>
                </div>
                <div class="other">
                    <p>보다 자세한 내용은 아래 New ARA 이용가이드에서 확인하실 수 있습니다.</p>
                    <p>지금 새로운 ARA와 함께하세요.</p>
                </div>
                <div class="buttons">
                    <div class="long_button" @click="longbuttonPress">
                        <h4>New ARA 이용 가이드 바로가기</h4>
                        <p>변화된 아라에 대한 가이드를 제공합니다 </p>
                        <img src='@/assets/arrow.svg'>
                    </div>
                    <ButtonShort href="https://newara.sparcs.org">New ARA 바로가기</ButtonShort>
                    <ButtonShort href="https://ara.kaist.ac.kr">기존 ARA 바로가기</ButtonShort>
                </div>
            </div>
            <div class="Contact">
                <p>Contact</p>
                <p>ara@kaist.ac.kr</p>
            </div>
        </div>
</template>

<script>
import Improvements from '@/components/Improvements.vue'
import ButtonShort from '@/components/ButtonShort.vue'
import HelpPopup from '@/components/HelpPopup.vue'

export default {
  name: 'RenewalLandingPage',
  data () {
    return {
      msg: 'Message',
      help_popup:false
    }
  },
  components:{
    Improvements,
    ButtonShort,
    HelpPopup
  },
  methods:{
      longbuttonPress(){
          this.help_popup = !this.help_popup;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.help{
    z-index:1000;
}
.Popup_Landing{
    position:absolute;
    top:50%; left:50%;
    transform: translate(-50%,-50%);
    max-width:790px;
    width:100%;
    border-radius: 10px;
    background-color: #fafafa;
    align-content:center;
}
.internal{
    margin:56px 56px 56px 56px;
}

h3{
    font-size:20px;
    font-weight:bold;
}
span,p{
    font-size:13px;
    font-weight:bold;
}
.red{
    color:#ed3a3a;
}
.check{
    margin-right:15.6px;
    color:#ed3a3a;
}

.renewal_inf, .change, .other{
    margin-top:48px;
}

.close{
    position:absolute;
    top:18px;
    right:18px;
}
.Contact{
    position:absolute;
    bottom:18px;
    right:18px;
}
.Contact p{
    display:inline;
    color: #666666;
    font-weight:500;
}

.close {
  cursor:pointer;
}
.buttons{
    display:flex;
}
.long_button{
    cursor:pointer;
    position:relative;
    background-color:#ffffff;
    border-radius: 10px;
    box-shadow: 0 3px 6px 0 rgba(169, 169, 169, 0.16);
    display:inline-block;
    height:61px;
    min-width:290px;
}

.long_button img{
    position:absolute;
    bottom:20px;
    right:18px;
}

.long_button h4{
    margin-left:18px;
    margin-right:18px;
    margin-bottom:6px;
    margin-top:12px;
    font-size:12px;
}

.long_button p{
    margin-top:0px;
    margin-left:18px;
    font-size:9px;
    font-weight:500;
    margin-bottom:12px;
}
</style>

