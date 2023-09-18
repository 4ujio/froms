<template>
  <div id="body">
    <div id="box">
      <div class="mihua">米话</div>
      <div id="box_l">
        <img
          src="https://zytest.emicloud.com/static/img/pic.5be40c0.png"
          alt=""
        />
      </div>
      <div id="box_r">
        <h2>米话呼叫中心</h2>
        <div class="inp_box">
          <p>
            <svg
              t="1687937440303"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3981"
              width="16"
              height="16"
            >
              <path
                d="M602.08 960.576H423.488c-169.408 0-303.2 0-303.2-87.872v-17.568c0-164.672 136.032-298.624 303.2-298.624H602.08c167.168 0 303.2 133.952 303.2 298.624v17.568c-0.032 87.872-140.544 87.872-303.2 87.872zM423.456 609.184c-138.112 0-250.496 110.304-250.496 245.92v17.568c0 35.168 144.768 35.168 250.496 35.168h178.592c87.52 0 250.496 0 250.496-35.168v-17.568c0-135.616-112.384-245.92-250.496-245.92H423.456z m80.384-70.304c-132.736 0-240.672-106.4-240.672-237.184S371.104 64.544 503.84 64.544s240.672 106.368 240.672 237.152S636.544 538.88 503.84 538.88zM315.872 301.696c0 101.696 84.32 184.48 187.968 184.48s187.968-82.752 187.968-184.48-84.32-184.448-187.968-184.448S315.872 200 315.872 301.696z"
                p-id="3982"
                fill="#a5b3ba"
              ></path>
            </svg>
            <input type="text" placeholder="用户名" v-model="name" />
          </p>
          <p>
            <svg
              t="1687937584319"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5117"
              width="16"
              height="16"
            >
              <path
                d="M695.466667 407.134815l-12.420741 0c-0.474074 0-0.853333-0.379259-0.853333-0.853333l0-62.672593c0-44.942222-17.161481-87.419259-48.355556-119.466667-25.031111-25.78963-56.983704-42.477037-92.16-48.45037-104.96-18.10963-200.533333 64-200.533333 170.477037l0 60.112593c0 0.474074-0.379259 0.853333-0.853333 0.853333l-10.998519 0c-48.071111 0-87.04 38.968889-87.04 87.04l0 269.558519c0 48.071111 38.968889 87.04 87.04 87.04l365.226667 0c48.071111 0 87.04-38.968889 87.04-87.04L781.558519 493.321481C781.653333 445.724444 743.063704 407.134815 695.466667 407.134815zM382.008889 343.608889c0-78.032593 51.674074-129.611852 129.611852-129.611852 38.21037 0 67.034074 11.946667 93.013333 38.684444 25.41037 26.168889 36.598519 54.234074 36.598519 90.927407l0 62.672593c0 0.474074-0.379259 0.853333-0.853333 0.853333L382.862222 407.134815c-0.474074 0-0.853333-0.379259-0.853333-0.853333L382.008889 343.608889zM740.882963 764.586667c0 30.340741-15.075556 45.416296-45.416296 45.416296L329.386667 810.002963c-25.505185 0-46.26963-20.66963-46.26963-46.26963L283.117037 500.527407c0-29.013333 23.514074-52.527407 52.527407-52.527407l358.874074 0c25.505185 0 46.26963 20.66963 46.26963 46.26963L740.788148 764.586667z"
                fill="#a5b3ba"
                p-id="5118"
              ></path>
              <path
                d="M510.388148 561.682963c-14.506667 0-18.962963 10.808889-18.962963 19.437037l0 83.057778c0 8.628148 8.533333 15.644444 18.962963 15.644444 10.42963 0 18.962963-7.016296 18.962963-15.644444l0-83.057778C529.351111 572.491852 522.714074 561.682963 510.388148 561.682963z"
                fill="#a5b3ba"
                p-id="5119"
              ></path>
            </svg>
            <input type="password" placeholder="密码" v-model="password" />
          </p>
          <p>
            <svg
              t="1687937613868"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6204"
              width="16"
              height="16"
            >
              <path
                d="M513.3 958.5c-142.2 0-397.9-222.1-401.6-440.5V268c1.7-39.6 31.7-72.3 71.1-77.3 49-4.6 97.1-16.5 142.7-35.3 47.8-14 91.9-38.3 129.4-71.1 30.3-24.4 72.9-26.3 105.3-4.6 39.9 30.7 83.8 55.9 130.5 74.6 48.6 14.7 98.2 25.9 148.4 33.7 38.5 7.6 67.1 40.3 69.5 79.5 3.3 84.9 2.5 169.9-2.6 254.7-33.7 281.6-253.7 436.4-392.7 436.3z m-0.1-813.7c-7.2-0.2-14.3 2-20 6.4-39.7 35.2-86.8 61.1-137.7 75.7-46.8 19.2-96.2 31-146.6 35.2-11 3.2-18.8 13-19.5 24.4v230.1c3.5 180.3 223.3 361 323.9 361s287.3-120.2 317.6-360.5c7.3-142.7 0-228.6 0-229.6-1.3-13.3-11-24.3-24-27.3-49.6-7.7-98.6-19-146.5-33.7-46.3-19.5-89.7-45.3-129-76.7-5.8-3.8-12.7-5.5-19.5-4.9l1.3-0.1z"
                fill="#a5b3ba"
                p-id="6205"
              ></path>
              <path
                d="M750.1 428L490.7 673.2c-11.7 11.1-29.5 12.9-43.1 4.2l-6.8-5.8-141.2-149.4c-9.3-9.3-12.7-22.9-9-35.5 3.8-12.6 14.1-22.1 27-24.8 12.9-2.7 26.1 1.9 34.6 11.9L469 597.5l233.7-221c14.6-12.8 36.8-11.6 49.9 2.7 13.2 14.2 11.5 35.3-2.5 48.8"
                fill="#a5b3ba"
                p-id="6206"
              ></path>
            </svg>
            <a>{{ yzm }}</a>
            <span @click="yzmfun">换一换</span>
            <input type="text" v-model="vercode" placeholder="验证码" />
          </p>
        </div>
        <button id="dl_btn" @click="dlfun">登录</button>
        <span class="wjmm">忘记密码？</span>
      </div>
    </div>
  </div>
</template>

<script>
import { postLOgin, getCode } from "../../api/http";
export default {
  data() {
    return {
      yzm: "",
      //登录字段
      name: "",
      password: "",
      vercode: "",
    };
  },
  methods: {
    yzmfun() {
      getCode("/index.php/index/index/getcode").then((res) => {
        this.yzm = res.msg;
      });
    },
    dlfun() {
      let data = {
        vercode: this.vercode,
        name: this.name,
        pwd: this.password,
      };
      postLOgin(data).then((res) => {
        if (res.code == 2) {
          this.$notify.error({
            title: "登陆失败",
            message: "登录信息不能为空",
          });
        } else if (res.code == 3) {
          this.$notify.error({
            title: "",
            message: "请填写正确验证码",
          });
        } else if (res.code == 0) {
          this.$message("登陆成功！");
          setTimeout(() => {
            this.$router.push({
              path: "/admin",
            });
          }, 1000);
        } else if (res.code == 1) {
          this.$notify.error({
            message: "没有此用户",
          });
        }
      });
    },
  },
  mounted() {
    this.yzmfun();
  },
};
</script>

<style lang="scss" scoped>
.mihua {
  width: 140px;
  height: 140px;
  color: #1a6b9b;
  background: #ffffff;
  position: absolute;
  font-family: "Courier New", Courier, monospace;
  font-weight: 900;
  border-radius: 50%;
  top: -70px;
  left: 430px;
  font-size: 50px;
  text-align: center;
  line-height: 150px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.01);
}
#body {
  width: 100%;
  height: 100vh;
  //   background: rgb(34, 40, 74);
  background: url(https://zytest.emicloud.com/static/img/bg.253577f.png)
    no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  #box {
    position: relative;
    margin-top: 30px;
    width: 1000px;
    height: 600px;
    background: #ffffff;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    // overflow: hidden;
    display: flex;
    justify-content: space-between;

    #box_l,
    #box_r {
      width: 50%;
      height: 100%;
    }
    #box_l {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        margin-top: 20px;
        width: 80%;
        // height: 407px;
      }
    }
    #box_r {
      width: 470px;
      height: 440px;
      padding: 30px 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      margin-top: 60px;
      h2 {
        font-weight: 400;
        font-size: 30px;
      }
      .inp_box {
        width: 80%;
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          position: relative;
          input {
            width: 99%;
            height: 40px;
            outline-style: none;
            border: none;
            border-bottom: 2px solid #f0eded;
            text-indent: 40px;
          }
          svg {
            width: 23px;
            height: 23px;
            position: absolute;
            left: 7px;
            top: 8px;
            path {
              fill: #ccc;
            }
          }
          a {
            position: absolute;
            right: 4px;
            width: 65px;
            height: 39px;
            background: #cdf6f0;
            font-size: 25px;
            display: block;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #873e54;
            filter: blur(1.3px);
            letter-spacing: 1px;
            font-family: Impact, Haettenschweiler, "Arial Narrow Bold",
              sans-serif;
          }
          span {
            position: absolute;
            right: -38px;
            display: block;
            height: 38px;
            line-height: 38px;
            font-size: 12px;
            color: gray;
            cursor: pointer;
          }
          span:hover {
            color: #64a9ff;
          }
        }
      }
      #dl_btn {
        width: 80%;
        height: 45px;
        border-radius: 20px;
        border: none;
        color: #ffffff;
        background: #a0cfff;
        font-size: 17px;
        font-weight: bold;
      }
      #dl_btn:hover {
        background: #86c2fd;
      }
      .wjmm {
        display: block;
        width: 80%;
        font-size: 15px;
        text-align: right;
        color: #64a9ff;
      }
    }
  }
}
</style>
