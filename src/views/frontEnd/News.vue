<template >
  <div>
    <h1 class="text-center my-4">最新消息</h1>

    <div class="container">
      <div class="row">
        <div class="col-sm-1">
          <h3></h3>
        </div>
        <div class="col-sm-10">
          <ul class="eventList">
            <li>
              <figure>
                <a href="#">
                  <img
                    src="..\..\assets\event_2019_1.jpg"
                    alt="《台南FOCUS限定》打卡同樂趣 一起FUN電影！"
                    title="《台南FOCUS限定》打卡同樂趣 一起FUN電影！"
                  />
                </a>
              </figure>
              <section class="infoArea">
                <h5>
                  <a href="#">
                    <div style>《台南FOCUS限定》打卡同樂趣 一起FUN電影！</div>
                  </a>
                </h5>
                <time>2019/10/03 ~ 2019/10/31</time>
              </section>
            </li>

            <li>
              <figure style="height:250px;">
                <a href="#" style="height:250px;">
                  <img
                    src="..\..\assets\event_2019_2.jpg"
                    alt="9月電影看不完 點數拿不完"
                    title="9月電影看不完 點數拿不完"
                    style="height:100%; width:auto; margin-left:0px;"
                  />
                </a>
              </figure>
              <section class="infoArea">
                <h5>
                  <a href="#" style="height:250px;">9月電影看不完 點數拿不完</a>
                </h5>
                <time>2019/09/06 ~ 2019/09/30</time>
              </section>
            </li>

            <li>
              <figure style="height:250px;">
                <a href="#" style="height:250px;">
                  <img
                    src="..\..\assets\event_2019_3.jpg"
                    alt="《林口限定》Mappa獨家加碼。 iShow卡友享好禮"
                    title="《林口限定》Mappa獨家加碼。 iShow卡友享好禮"
                    style="height:100%; width:auto; margin-left:0px;"
                  />
                </a>
              </figure>
              <section class="infoArea">
                <h5>
                  <a href="#" style="height:250px;">《林口限定》Mappa獨家加碼。 iShow卡友享好禮</a>
                </h5>
                <time>2019/09/20 ~ 2019/10/06</time>
              </section>
            </li>

            <li>
              <figure style="height:250px;">
                <a href="#" style="height:250px;">
                  <img
                    src="..\..\assets\about_2016_3.jpg"
                    alt="《林口限定》Mappa獨家加碼。 iShow卡友享好禮"
                    title="《林口限定》Mappa獨家加碼。 iShow卡友享好禮"
                    style="height:100%; width:auto; margin-left:0px;"
                  />
                </a>
              </figure>
              <section class="infoArea">
                <h5>
                  <a href="#" style="height:250px;">《林口限定》Mappa獨家加碼。 iShow卡友享好禮</a>
                </h5>
                <time>2019/09/20 ~ 2019/10/06</time>
              </section>
            </li>

            <li>
              <figure>
                <a href="#" data-toggle="modal" data-target=".bd-example-modal-lg">
                  <img
                    src="..\..\assets\event_2019_3.jpg"
                    alt="《林口限定》Mappa獨家加碼。 iShow卡友享好禮"
                    title="《林口限定》Mappa獨家加碼。 iShow卡友享好禮"
                  />
                </a>
              </figure>
              <section class="infoArea">
                <h5>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                  >《林口限定》Mappa獨家加碼。 iShow卡友享好禮</a>
                </h5>
                <time>2019/10/01~2019/10/31</time>
              </section>
            </li>

            <li v-for="(info, index) in infos" :key="index">
              <figure>
                <a
                  href="#"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                  @click.prevent="getInfo(index)"
                >
                  <img :src="info.img_normal_url" :alt="info.title" :title="info.title" />
                </a>
              </figure>
              <section class="infoArea">
                <h5>
                  <a href="#" @click.prevent="getInfo(index)" data-toggle="modal" data-target=".bd-example-modal-lg">{{info.title}}</a>
                </h5>
                
                <div v-if="(info.start_time && info.end_time) !==''">
                    <time>{{info.start_time}}~{{info.end_time}}</time>
                </div>
                <div v-else>
                    <time></time>
                </div>
              </section>
            </li>
          </ul>
        </div>
        <div class="col-sm-1">
          <h3></h3>
        </div>
      </div>
    </div>

    <div>
      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content" style="text-align:left; padding:40px">
            <h3>{{title}}</h3>
            <h6>
              <i class="fa fa-calendar" aria-hidden="true"></i>
              開始日期 : {{start_time}}
            </h6>
            <h6>
              <i class="fa fa-calendar" aria-hidden="true"></i>
              截止日期 : {{end_time}}
            </h6>
            <h6>
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              活動地點 : 中佑影城
            </h6>
            <h6>
              <i class="fa fa-file-text-o" aria-hidden="true"></i>
<<<<<<< HEAD
              <!-- 活動辦法 : <p>{{content}}</p> -->
            </p>

            
=======
              活動辦法 :
              <p style="line-height: 35px;">{{content}}</p>
            </h6>
>>>>>>> cba8d7e3b3bc192a620fc5e0ccc0a0c1391ca776
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      infos: null,
      content: "",
      end_time: "",
      id: "",
      img_normal_url: "",
      img_thumbs_url: "",
      release_time: "",
      start_time: "",
      title: ""
    };
  },
  mounted() {
    const _this = this;
    this.axios
      .get("https://cy-cinemas.ml/news/get")
      .then(response => {
        _this.infos = response.data;
        console.log(_this.infos);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    getInfo(index) {
      this.id = this.infos[index].id;
      this.content = this.infos[index].content;
      this.end_time = this.infos[index].end_time;
      this.img_normal_url = this.infos[index].img_normal_url;
      this.img_thumbs_url = this.infos[index].img_thumbs_url;
      this.release_time = this.infos[index].release_time;
      this.start_time = this.infos[index].start_time;
      this.title = this.infos[index].title;
    }
  }
};
</script>

<style>
* {
  padding: 0;
}
.eventList ul {
  list-style-type: none;
  margin: 0 auto;
  text-decoration: none;
}
.eventList li {
  float: left;
  display: block;
  width: 230px;
  height: 400px;
  text-align: center;
  margin: 0 auto;
  margin: 30px;
}
figure {
  display: block;
  height: 250px;
  width: auto;
  margin: 0 20px;
  padding-top: 30px;
}
figure a {
  height: 250px;
}
figure a img {
  margin: 0 auto;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
h5 a {
  height: 250px;
}
.eventList li:hover {
  background-color: #d9d9d9;
  text-decoration: none;
}
.infoArea {
  margin-top: 30px;
}
time {
  margin-top: 50px;
}
</style>

