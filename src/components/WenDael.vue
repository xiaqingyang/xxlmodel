<template>
  <div class="container">
    <div class="top">育发顾问在线为您服务</div>
    <div class="top_2">武汉新生医疗美容门诊部有限公司 <br>（武卫健）医广【2021】第08-02-02号<br>护理服务由生活服务类机构提供，不具备医疗机构资质，如需要疾病治疗请咨询专业医师</div>
      <div class="wdbox"> 
        <div class="wdcon" ref="wdcon" id="wdcon">
          <div class="box">
            <div class="left"><img src="../../static/images/wdys.jpg"></div>
            <div class="right">
              <div class="con"><span class="sjx"></span>您好，我是专业固发育发老师，非常高兴为您服务！</div>
            </div>
            <div class="clear"></div>
          </div>
          <div class="box">
            <div class="left"><img src="../../static/images/wdys.jpg"></div>
            <div class="right">
              <div class="con"><span class="sjx"></span>脱发受年龄增长、激素分泌状况、不良生活习惯等多种因素影响，根源是头发毛囊变的不健康甚至萎缩，头发生长环境遭到破坏。脱发让人凭空年老十岁，严重影响个人形象，想要快速永久的固发育发？请点击下方按钮，认真回答老师下面的问题。</div>
            </div>
            <div class="clear"></div>
          </div>
          <div class="box">
            <div class="left"><img src="../../static/images/wdys.jpg"></div>
            <div class="right">
              <div class="con"><span class="sjx"></span>咱们的脱发状况更接近哪一种？</div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
      <div style="height: 4rem;"></div>
      <div :class="{'wdfixbom':true,'disabled':disabled}" ref="wdfixbom" id="wdfixbom" @click="addEle($event)">
          <div class="btnbox w50"><button>20岁以下</button></div>
          <div class="btnbox w50"><button>20岁－30岁</button></div>
          <div class="btnbox w50"><button>30岁－45岁</button></div>
          <div class="btnbox w50"><button>45岁以上</button></div>
      </div>
      <div style="clear:both;"></div>
    </div>
</template>

<script>
  import {txchatInit} from '../assets/js/eliao.js';
  import {txchat} from '../assets/js/eliao.js';
  
  export default{
		data(){
			return{
        loadbtnstr:['<div class="btnbox w100"><button>稍等……</button></div>'],
        btnarr:[
          `<div class="btnbox w50"><button>头发细软稀疏</button></div><div class="btnbox w50"><button>区块性掉发</button></div><div class="btnbox w50"><button>头顶脱发</button></div><div class="btnbox w50"><button>发际线呈M字型</button></div><div class="btnbox w50"><button>溢脂性脱发</button></div><div class="btnbox w50"><button>其他</button></div>`,
          '<div class="btnbox w50"><button>1年以内</button></div><div class="btnbox w50"><button>1至3年</button></div><div class="btnbox w50"><button>3至5年</button></div><div class="btnbox w50"><button>5年以上</button></div>',
          '<div class="btnbox w30"><button>一般</button></div><div class="btnbox w30"><button>中度</button></div><div class="btnbox w30"><button>严重</button></div>',
          '<div class="btnbox w50"><button>是</button></div><div class="btnbox w50"><button>否</button></div>',
          '<div class="btnbox w30"><button>不明显</button></div><div class="btnbox w30"><button>一般</button></div><div class="btnbox w30"><button>非常明显</button></div>','<div class="btnbox w100" id="gwx"><button class="wx">快速获取育发方案</button></div>'
        ],
        waqs:[
          "好的亲，头发细软稀疏主要是由于毛囊不健康，吸收不到营养导致的；为了更好的帮助你 老师先了解一下你的情况，请认真回答老师接下来提问你的问题哦",
          "好的亲，区块性掉发也就是俗称的“鬼剃头”，因为压力、情绪，导致一个头皮一个区块的毛发突然进入生长末期，突然掉光；为了更好的帮助你 老师先了解一下你的情况，请认真回答老师接下来提问你的问题哦",
          "好的亲，头顶脱发其主要原因是头顶部分的毛囊天然存在缺陷，当受到体内雄性刺激的时候，更容易萎缩、进而导致脱发；为了更好的帮助你 老师先了解一下你的情况，请认真回答老师接下来提问你的问题哦",
          "好的亲，M型脱发并非天生，是由于毛发坏死造成的，毛发坏死会直接导致头发的脱落，最终会形成M型脱发；为了更好的帮助你 老师先了解一下你的情况，请认真回答老师接下来提问你的问题哦",
          "好的亲，“脂溢型脱发又称“雄性脱发”，“雄性脱发”一般是从前额或头顶开始，在整个过程中，原来健康、浓厚头发的毛囊伴随发干的萎缩开始变成很细、很短并且脆弱的头发，为了更好的帮助你 老师先了解一下你的情况，请认真回答老师接下来提问你的问题哦"
        ],
        warr:[
          "你现在的脱发情况是哪一种呢？",
          "你的脱发时间持续多久了？",
          "头皮容易出油吗？",
          "你是否经常熬夜、精神压力大？",
          "现在能明显看到头皮吗？",
          "好的，你的脱发情况，老师已经了解了。现在添加老师微信，发送你的头部脱发照片；老师会根据你现在的头皮和毛囊状态，更具针对性的帮你进行深入分析。 老师会耐心指导你的。"
        ],
        numb:0,
        timer:"",
        disabled:false
      }
		},
    methods:{
      appendbtn:function(index){
        this.$refs.wdfixbom.innerHTML="";
        this.$refs.wdfixbom.innerHTML=this.btnarr[index];
      },
      loadbtn:function(index){
        this.$refs.wdfixbom.innerHTML="";
        this.$refs.wdfixbom.innerHTML=this.loadbtnstr[index];
      },
      apphzlt:function(text){
        var str = '<div class="hzbox">';
        str += '<div class="left">';
        str += '<img src="../../static/images/timg.jpg">';
        str += "</div>";
        str += '<div class="right">';
        str += '<div class="con"><span class="sjx"></span>' + text + "</div>";
        str += "</div>";
        str += '<div class="clear"></div>';
        str += "</div>";
        this.$refs.wdcon.innerHTML+=str;    
        var height_one = document.body.scrollHeight;
        var height_two = window.innerHeight;
        var height = height_one - height_two;
        $("html").animate({scrollTop: height},400);
      },
      appyslt:function(text){
        var str = '<div class="box">';
        str += '<div class="left">';
        str += '<img src="../../static/images/wdys.jpg">';
        str += "</div>";
        str += '<div class="right">';
        str += '<div class="con"><span class="sjx"></span>' + text + "</div>";
        str += "</div>";
        str += '<div class="clear"></div>';
        str += "</div>";
        this.$refs.wdcon.innerHTML+=str;
        var height0 = document.body.scrollHeight;
        var height1 = window.innerHeight;
        var height = height0 - height1;
        $("html").animate({scrollTop: height},400);
      },
      addEle(e){
        if(this.numb==6){
          txchat(24962,81707,53669);
          return false;
        }
        this.apphzlt(e.target.innerText)
        let target=e.target.parentNode;
        let nodeList = e.currentTarget.children;
        let targetIndex=this.tabIndex(target,nodeList);
        this.loadbtn(0);
        this.disabled=true;
        this.timer=setTimeout(()=>{
          this.appyslt(this.warr[this.numb]);
          this.appendbtn(this.numb);
          this.disabled=false;
          if(this.numb==1&&targetIndex<5){
            this.appyslt(this.waqs[targetIndex]);
          }               
          this.numb++;
        }, 1000);
      },
      tabIndex(target,nodeList){
        for(let i=0;i<nodeList.length;i++){
          if(target===nodeList[i]){
            return i;
          }
        }
      }
    },
    mounted(){
      this.$nextTick(function(){
        txchatInit(24962,81707);
      })
    }    
  }
</script>

<style>
  @import "../assets/css/wendael.css";
</style>


