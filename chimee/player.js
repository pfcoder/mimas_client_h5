var player = new ChimeeMobilePlayer({
  // 播放地址
  src: "http://cdn.toxicjohann.com/lostStar.mp4",
  // 直播:live 点播：vod
  isLive: false,
  // 编解码容器
  poster: undefined,
  // dom容器
  wrapper: "#wrapper",
  // video
  autoplay: false,
  controls: false,
  playsInline: true,
  preload: "none",
  x5VideoPlayerType: "h5",
  x5VideoPlayerFullscreen: true,
  x5VideoOrientation: true,
  xWebkitAirplay: true,
  muted: false,
  box: "native",
  disableUA: [
    "Mozilla/5.0 (Linux; Android 4.4.2; HM NOTE 1TD Build/KOT49H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.97 Mobile Safari/537.36"
  ]
  // kernels: {
  //   hls: ChimeeKernelHls
  // }
  // removeInnerPlugins: ['chimeeMobiControlbar', 'chimeeState']
});

var buildAdPlayer = (adUrl, seconds) => {
  return new ChimeeMobilePlayer({
    // 播放地址
    src: "http://cdn.toxicjohann.com/lostStar.mp4",
    // 直播:live 点播：vod
    isLive: false,
    // 编解码容器
    poster: undefined,
    // dom容器
    wrapper: "#wrapper",
    // video
    autoplay: false,
    controls: false,
    playsInline: true,
    preload: "none",
    x5VideoPlayerType: "h5",
    x5VideoPlayerFullscreen: true,
    x5VideoOrientation: true,
    xWebkitAirplay: true,
    muted: false,
    box: "native",
    disableUA: [
      "Mozilla/5.0 (Linux; Android 4.4.2; HM NOTE 1TD Build/KOT49H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.97 Mobile Safari/537.36"
    ]
    // kernels: {
    //   hls: ChimeeKernelHls
    // }
    // removeInnerPlugins: ['chimeeMobiControlbar', 'chimeeState']
  });
};
