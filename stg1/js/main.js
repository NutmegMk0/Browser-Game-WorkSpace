var type = "WebGL";
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}
PIXI.utils.sayHello(type);

function init () {
  // 新しいレンダラー作る
  var renderer = PIXI.autoDetectRenderer(640, 480);

  // それをHTMLファイルに入れる
  document.body.appendChild(renderer.view);

  // stageという名前の容器（オプジェクト）を作る
  var stage = new PIXI.Container();

  // レンダラーにstageを受け入れてって伝える
  renderer.render(stage);
}
