<template>
  <div class="container">
    <h1 class="text-center my-5">本周上映</h1>
    <div class="row">
      <!-- <MovieCard :img-ar="imgAr"></MovieCard> -->
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <a href="#" data-toggle="modal" data-target="#myModal">
              <img
                src="..\..\assets\movie\ADAstra_180x270_Poster_now_3.jpg"
                class="card-img"
                alt="..."
              />
            </a>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <a href="#" data-toggle="modal" data-target="#myModal">
                <h5 class="card-title">星際救援</h5>
              </a>
              <p
                class="card-text"
              ></p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
     







      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\AngelHasFallen_180x270_Poster__now_6.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">全面攻佔3</h5>
              <p
                class="card-text"
              ></p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\Detention_180x270_Poster_now_2.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">返校</h5>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\Fagara_180x270_Poster_now_4.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">花椒之味</h5>
              <p
                class="card-text"
              ></p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\TheBiggestLittleFarm_180x270_Poster_now_5.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">我家有個開心農場</h5>
              <p
                class="card-text"
              >。</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\WEATHERINGWITHYOU_180x270_Poster_now_1.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">天氣之子</h5>
              <p
                class="card-text"
              ></p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="text-center my-5">即將上映</h1>
    <div class="row">
      <!-- <MovieCard :img-ar="imgAr"></MovieCard> -->

      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\DOCTORSLEEP_180x270_Poster_soon_6.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">安眠醫生</h5>
              <p
                class="card-text"
              ></p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\FROZEN2_180x270_Poster_soon_2.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">冰雪奇緣2</h5>
              <p
                class="card-text"
              ></p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\LOVEANDRUN_180x270_Poster_soon_4.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">只有我能喜歡你</h5>
              <p
                class="card-text"
              ></p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\MOTHERLESSBROOKLYN_180x270_Poster_soon_5.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">布魯克林孤兒</h5>
              <p
                class="card-text"
              ></p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\RAMBOV_180x270_Poster_soon_3.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">最後一滴血</h5>
              <p
                class="card-text"
              ></p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="..\..\assets\movie\StarWarsTheRiseofSkywalker_180x270_Poster_soon_1.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">STAR WARS 天行者的崛起</h5>
              <p
                class="card-text"
              ></p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  </div>
</template>


      












<script >
// import MovieCard from '@/components/MovieCard.vue'
// export default {
//   components: {
//     // MovieCard
//   },
//   data() {
//     return {
//       imgAr: Array(8)
//     }
//   }
// }
</script>
<style scoped>
.card-img {
  /* width:auto;
  height: auto; */
  width: 100%;
  height: 100%;
  margin-right: 10px;
}
.card {
  margin-right: 10px;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 10px;
  }
</style>