/*
  获得歌曲列表
  url: https://autumnfish.cn/search
  method: get
  parameter: keywords (search keywords)
  return: search result
  
  获得歌曲url
  url: https://autumnfish.cn/song/url
  method: get
  parameter: id (id of a song)
  return: url of a song

  获得歌曲详情
  url: https://autumnfish.cn/song/detail
  method: get
  parameter: ids (id of songs)
  return: detail of songs. including cover of the songs.

  获得歌曲MV
  url: https://autumnfish.cn/mv/url
  method: get
  parameter: id (mvid, 0 means there's no mv)
  return: url of the song's mv
*/

const urlListHead = "https://autumnfish.cn/search";
const urlSongUrlHead = "https://autumnfish.cn/song/url";
const urlSongDetailHead = "https://autumnfish.cn/song/detail";
const urlMvUrlHead = "https://autumnfish.cn/mv/url";
const app = new Vue({
  el: '#app',
  data: {
    defaultSearchSuggestion: "我真的没想好",
    keywords: "",
    playList: [],
    songUrl: "",
    songCoverUrl: "img/dontpanic.jpg",
    activeSongIndex: null,
    mvUrl: "",
    mvIsClicked: false
  },
  methods: {
    searchMusic() {
      // 实现了promise函数，这样调用这个可以用searchMusic().then(()=>{...})
      return new Promise((resolve) => {
        if (this.keywords === "") {
          // default search suggestion
          this.keywords = this.defaultSearchSuggestion;
        }
        const url = urlListHead + "?keywords=" + this.keywords;
        axios.get(url)
          .then((response) => {
            // console.log(response);
            // 确保歌曲有url，对每首歌先遍历一遍，没有url的灰色显示or直接不显示
            // for(i of response.data.result.songs){
            //   let url = this.getSongUrl(i.id);
            //   if(url != null){
            //     this.playList.pop(i);
            //   }else{
            //     console.log("nope");
            //   }
            // }
            this.playList = response.data.result.songs;
            // console.log(this.playList);
            if (response.data.result.songCount == 0) {
              this.playList = [{ name: "no result for '" + this.keywords + "'... Go For a Random Song" }];
            }
            console.log(this.playList);
            // 到这里就意味着可以执行then了
            resolve();
          }, (err) => {
            alert("error occurs:" + err);
            // console.log(err);
          });
      })
    },
    artistClick(artistName) {

      // 点击后搜索该artist的歌
      this.keywords = artistName;
      this.searchMusic();

    },
    songClick(songId, songIndex) {
      // songIndex是被点击的song在当前playList中的index
      this.activeSongIndex = songIndex;
      // 将url绑定到<audio>上的函数
      this.setSongUrl(songId);
      // 自动开始播放，暂时用的是autoplay属性，貌似会取消？
      const audioDOM = document.getElementById('audio');

      // 获得这首歌的歌曲详情 （考虑要不要封装到函数里）
      const url = urlSongDetailHead + "?ids=" + songId
      axios.get(url).then((response) => {
        this.songDetail = response.data.songs[0]; // can get publishTime & mv
        this.songCoverUrl = this.songDetail.al.picUrl;
        console.log(response);
      }, (err) => {
        alert("error occurs:" + err);
      })

    },
    setSongUrl(songId) {
      // if (songId === "") {
      //   this.songId = "1234567";
      // }
      const url = urlSongUrlHead + "?id=" + songId;
      axios.get(url).then((response) => {
        // console.log(response);
        // 设置获得的url
        this.songUrl = response.data.data[0].url;
      }, (err) => {
        alert("error occurs:" + err);
        // 随便给首歌吧
        this.songUrl = "tianyitimothy.github.io/resources/arcs.mp3";
      });
    }, randomTopHiphop() {
      // 点击后搜索hiphop
      this.keywords = "hiphop";
        // 先搜索音乐生成列表，再...
      this.searchMusic().then((res) => {

        // 放0-29随机一首
        const index = Math.floor(Math.random() * 30); // 30个数字，从0开始。floor是向下取整
        // 从playlist里掏出来一首（需要songid获取url）
        this.songClick(this.playList[index].id, index);
      });
    },
    mvClick(mvid){
      // const url = urlMvUrlHead + "?id=" + mvid;
      axios.post(urlMvUrlHead, {id: mvid}).then(response=>{
        this.mvUrl = response.data.data.url;
        this.mvIsClicked = true;
      }, err=>{
        alert(err);
      });
    }
  },
});