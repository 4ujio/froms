<template>
  <div id="box">
    <div class="box_one">
      <b>&emsp;&emsp;姓名</b>
      <input
        v-model="name"
        @blur="blur(0)"
        style="width: 120px"
        type="text"
        placeholder="2~4个汉字"
      />
      <span
        v-show="spanflag == false ? false : true"
        :class="nameflag == true ? 'zq_span' : 'x_span'"
        v-html="nameflag == true ? '√' : '请输入2~4个汉字'"
      ></span>
    </div>
    <div class="box_two">
      <b>&emsp;&emsp;头像</b>
      <!-- <input type="file" @change="" /> -->
      <img :src="imgsrc" alt="" />
      <button
        style="width: 70px; height: 20px; font-size: 12px; border-radius: 0px"
        @click="handleFileUpload"
        id="iinput"
      >
        选择头像
      </button>
      <button
        style="width: 70px; height: 20px; font-size: 12px; border-radius: 0px"
        @click="uploadFile"
      >
        确定上传
      </button>
    </div>
    <div class="box_three">
      <b>&emsp;&emsp;ID&nbsp;&nbsp;</b>
      <input
        v-model="userid"
        @blur="blur(1)"
        type="number"
        placeholder="6~12位数字字母下划线"
      />
      <span
        :class="nickflag == true ? 'zq_span' : 'x_span'"
        v-show="nickspanflag == false ? false : true"
        v-html="nickflag == true ? '√' : '请输入6~12位数字字母下划线'"
      ></span>
    </div>
    <div>
      <b>&emsp;&emsp;性别</b>
      <label>
        <input
          type="radio"
          @focus="blur(2)"
          v-model="sex"
          value="男"
          style="width: 15px"
        />
        &nbsp;男</label
      >
      <label
        ><input type="radio" v-model="sex" value="女" style="width: 15px" />
        &nbsp;女</label
      >
      <span :class="sexflag == false ? '' : 'x_span'">请选择性别</span>
    </div>
    <div class="box_four">
      <b> 出生日期</b>
      <input
        type="date"
        name="bday"
        max="2023-06-01"
        min="1903-01-01"
        v-model="birdate"
        @blur="blur(3)"
      />
      <span :class="birdateflag == false ? '' : 'x_span'"
        >出生日期（必填）</span
      >
    </div>
    <div class="box_five">
      <b>&emsp;&emsp;籍贯</b>
      <select
        v-model="sheng_index"
        @change="
          shi_index = 0;
          xian = 0;
        "
      >
        <option v-for="(item, index) in citys" :key="index" :value="index">
          {{ item.name }}
        </option>
      </select>
      <select v-model="shi_index" @change="xian = 0">
        <option
          v-for="(item, index) in citys[sheng_index].city"
          :key="index"
          :value="index"
        >
          {{ item.name }}
        </option>
      </select>
      <select v-model="xian">
        <option
          v-for="(item, index) in citys[sheng_index].city[shi_index].area"
          :key="index"
          :value="index"
        >
          {{ item }}
        </option>
      </select>
    </div>
    <div class="box_six">
      <b>&emsp;手机号</b>
      <input
        v-model="iphone"
        @blur="blur(5)"
        type="text"
        placeholder="+86标准格式手机号"
      />
      <span
        :class="iphoneflag == true ? 'zq_span' : 'x_span'"
        v-show="iphonespanflag == false ? false : true"
        v-html="iphoneflag == true ? '√' : '以1开头的11位数字'"
      ></span>
    </div>
    <div class="box_seven">
      <b>电子邮箱</b>
      <input v-model="email" @blur="blur(6)" type="text" />
      <span
        :class="emailflag == true ? 'zq_span' : 'x_span'"
        v-show="emailspanflag == false ? false : true"
        v-html="emailflag == true ? '√' : '邮箱格式不正确'"
      ></span>
    </div>
    <div class="box_eight">
      <b>入职日期</b>
      <input
        v-model="boardate"
        name="bday"
        max="2023-06-01"
        min="1903-01-01"
        @blur="blur(7)"
        type="date"
      />
      <span :class="boardateflag == false ? '' : 'x_span'"
        >入职日期（必填）</span
      >
    </div>
    <div class="box_ten">
      <b>个人介绍</b>
      <textarea
        @blur="blur(8)"
        cols="55"
        rows="10"
        v-model="content"
        placeholder="请填写你的爱好以及工作经验和对生活有什么看法"
      ></textarea>
      <span :class="contentflag == false ? '' : 'x_span'">必填</span>
    </div>
    <button @click="submitFun">提交信息</button>
  </div>
</template>

<script>
import citys from "../assets/city(1)";
import axios from "axios";
import md5 from "js-md5";
const url = "http://47.94.4.201/index.php/index/callcenter/getheaders";
const strheader = "header";
const name = "name";
const role = "role";
const str = "nbsp123ok";
const sign = md5(name + role + str + strheader);
axios
  .post(
    url,
    { name, role, sign },
    {
      headers: {
        strheader: strheader,
      },
    }
  )
  .then((response) => {
    console.log("验证码：", response.data);
  })
  .catch((error) => {
    console.error(error);
  });
export default {
  data() {
    return {
      name: "非国家安",
      imgsrc:
        "https://img1.baidu.com/it/u=1388260926,2383571603&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1695142800&t=996956cb45dfc0f2fb5eb50e8c63cd3d",
      nick: "242422",
      sex: "1",
      birdate: "",
      address: "",
      iphone: "15187482233",
      email: "",
      boardate: "",
      content: "",
      userid: 0,
      //输入框状态
      nameflag: false,
      nickflag: false,
      sexflag: false,
      birdateflag: false,
      iphoneflag: false,
      emailflag: false,
      boardateflag: false,
      contentflag: false,
      //span显示状态
      //姓名span
      spanflag: false,
      nameinputflag: false,
      //昵称span
      nickspanflag: false,
      //手机号
      iphonespanflag: false,
      //电子邮箱
      emailspanflag: false,
      //城市三级联动
      citys: citys,
      selectData: "",
      //省的索引
      sheng_index: 0,
      //市的索引
      shi_index: 0,
      xian: 0,
      //是否可以提交状态
      submitflag: false,
      obj: {},
      //我的信息盒子显示状态
      xx_box_flag: false,
      imggflag: false,
    };
  },
  mounted() {
    // this.axios.post(
    //   "https://www.zzgoodqc.cn/index.php/index/upload/uploadimg",
    //   { imgurl: "" }
    // );
  },
  methods: {
    handleFileUpload() {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.addEventListener("change", (event) => {
        const file = event.target.files[0];
        this.file = file; // 将选择的文件存储在组件的数据中
      });
      input.click(); // 触发文件选择对话框
    },
    uploadFile() {
      if (!this.imggflag) {
        if (!this.file) {
          console.log("请先选择文件");
          return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
          const base64 = event.target.result; // 获取base64字符串
          this.imgsrc = base64;
          this.file = false;
          this.axios
            .post("https://www.zzgoodqc.cn/index.php/index/upload/uploadimg", {
              imgurl: base64,
            })
            .then((res) => {
              this.imgsrc = "http://47.94.4.201" + res.data.data.url;
              console.log(this.imgsrc);
            });

          // 这里可以进一步处理base64数据，比如上传到服务器等
        };
        reader.readAsDataURL(this.file); // 以DataURL的形式读取文件内容
      } else {
        this.handleFileUpload(event);
      }
    },
    blur(n) {
      //姓名
      if (n == 0) {
        if (this.name != "") {
          if (/^(?:[\u4e00-\u9fa5]{2,4})$/.test(this.name)) {
            this.nameflag = true;
            this.spanflag = true;
            this.submitflag = true;
          } else {
            this.nameflag = false;
            this.spanflag = true;
            this.submitflag = false;
          }
        }
      }
      //昵称
      if (n == 1) {
        if (this.nick != "") {
          if (/^\w{6,12}$/.test(this.nick)) {
            this.nickflag = true;
            this.nickspanflag = true;
            this.submitflag = true;
          } else {
            this.nickflag = false;
            this.nickspanflag = true;
            this.submitflag = false;
          }
        }
      }
      //性别
      if (n == 2) {
        if (this.sexflag != "") {
          this.sexflag = false;
          this.submitflag = true;
        }
      }
      //出生日期
      if (n == 3) {
        if (this.birdate != "") {
          this.birdateflag = false;
          this.submitflag = true;
        }
      }
      //手机号
      if (n == 5) {
        if (this.iphone != "") {
          if (/^1[\d]{10}$/.test(this.iphone)) {
            this.iphoneflag = true;
            this.iphonespanflag = true;
            this.submitflag = true;
          } else {
            this.iphoneflag = false;
            this.iphonespanflag = true;
            this.submitflag = false;
          }
        }
      }
      //邮箱
      if (n == 6) {
        if (this.email != "") {
          if (!/((?=@qq.com)|(?=@163.com)){1}/.test(this.email)) {
            this.emailflag = false;
            this.emailspanflag = true;
            this.submitflag = true;
          } else {
            this.emailflag = true;
            this.emailspanflag = true;
            this.submitflag = false;
          }
        }
      }
      //入职日期
      if (n == 7) {
        if (this.boardate != "") {
          this.boardateflag = false;
          this.submitflag = true;
        }
      }
      // 个人介绍
      if (n == 8) {
        if (this.content != "") {
          this.contentflag = false;
          this.submitflag = true;
        }
      }
    },
    //提交事件
    submitFun() {
      if (this.name == "") {
        this.nameflag = false;
        this.spanflag = true;
        this.submitflag = false;
      }
      if (this.nick == "") {
        this.nickflag = false;
        this.nickspanflag = true;
        this.submitflag = false;
      }
      if (this.sex == "") {
        this.submitflag = false;
        this.sexflag = true;
      }
      if (this.birdate == "") {
        this.submitflag = false;
        this.birdateflag = true;
      }
      if (this.iphone == "") {
        this.submitflag = false;
        this.iphoneflag = false;
        this.iphonespanflag = true;
      }
      if (this.email == "") {
        this.submitflag = false;
        this.emailflag = false;
        this.emailspanflag = true;
      }
      if (this.boardate == "") {
        this.submitflag = false;
        this.boardateflag = true;
      }
      if (this.content == "") {
        this.submitflag = false;
        this.contentflag = true;
      }
      if (this.submitflag) {
        let data = {
          name: this.name,
          userid: 1,
          img: this.imgsrc,
          sex: this.sex == "男" ? 0 : "女",
          nick: this.nick,
          birthdate: this.birdate,
          iphone: this.iphone,
          emails: this.email,
          indate: this.boardate,
          mydes: this.content,
        };
        this.axios
          .post("https://www.zzgoodqc.cn/index.php/index/index/mycenter", data)
          .then((res) => {
            console.log(res);
          });
      }
    },
  },
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  transition: all 1s !important;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
#box {
  position: relative;
  padding: 30px 50px;
  width: 700px;
  height: 711px;
  color: rgb(68, 65, 65) !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input {
    width: 400px;
    height: 24px;
    border: 2px solid #ccc;
    border-radius: 4px;
    text-indent: 10px;
    outline: none;
  }
  label {
    display: flex;
  }
  select {
    width: 110px;
    height: 24px;
    border: 2px solid #ccc;
    border-radius: 4px;
    text-indent: 10px;
    margin-right: 10px;
  }
  div {
    width: 700px;
    display: flex;
    // align-items: center;
    position: relative;
    span {
      display: flex;
      align-items: end;
      // position: absolute;
      // top: 10px;
      font-size: 10px;
      color: rgba(0, 0, 0, 0);
      margin-left: 20px;
      line-height: 30px;
    }
    input[type="radio"]:last-child {
      margin-left: 10px;
    }
  }
  .box_two {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
    }
    button {
      margin-left: 10px;
    }
  }
  button {
    width: 400px;
    height: 40px;
    background-color: rgb(224, 222, 222);
    border: 1px solid #ccc;
    font-weight: bold;
    border-radius: 6px;
    margin-left: 86px;
  }
  button:hover {
    background-color: rgb(185, 181, 181);
  }
}
b {
  margin-right: 20px;
}
.x_span {
  color: rgb(143, 12, 12) !important;
}
.zq_span {
  font-size: 15px !important;
  color: green !important;
}
textarea {
  outline-style: none !important;
  border: 1px solid gray !important;
}
</style>
