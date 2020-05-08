/*
  获得歌曲列表
  url: https://autumnfish.cn/search
  method: get
  parameter: keywords (search keywords)
  return: search result
  
  获得歌曲详情
  url: https://autumnfish.cn/song/url
  method: get
  parameter: id (id of a song)
  return: url of a song
*/

const urlListHead = "https://autumnfish.cn/search";
const urlSongHead = "https://autumnfish.cn/song/url";
const app = new Vue({
  el: '#app',
  data: {
    keywords: "",
    playList: [],
    songUrl: "",
    defaultSearchSuggestion: "life is good"
  },
  methods: {
    searchMusic() {
      if (this.keywords === "") {
        // default search suggestion
        this.keywords = this.defaultSearchSuggestion;
      }
      const url = urlListHead + "?keywords=" + this.keywords;
      axios.get(url)
        .then((response) => {
          // 确保歌曲有url，对每首歌先遍历一遍，没有url的灰色显示or直接不显示
          // for(i of response.data.result.songs){
          //   let url = this.getSongUrl(i.id);
          //   if(url != null){
          //     this.playList.pop(i);
          //   }else{
          //   }
          // }
          this.playList = response.data.result.songs;
          if (response.data.result.songCount == 0) {
            this.playList = [{ name: "no result for '" + this.keywords + "'... Go For a Random Song" }];
          }

        }, (err) => {

          console.log(err);
        });
    },
    songClick(songId) {
      this.setSongUrl(songId);
      // todo 自动开始播放 有禁止，需要解决
      const audioDOM = document.getElementById('audio');
      // audioDOM.play();
    },
    setSongUrl(songId) {
      // if (songId === "") {
      //   this.songId = "1234567";
      // }
      const url = urlSongHead + "?id=" + songId;
      axios.get(url).then((response) => {
        // 设置获得的url
        this.songUrl = response.data.data[0].url;
      }, (err) => {
        alert("请求失败了:" + err);
        // 随便给首歌吧
        this.songUrl = "tianyitimothy.github.io/resources/arcs.mp3";
      });
    }
  },
});