// layer is used to force load jquery
layui.define("layer", function(exports) {
  //提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
  var obj = {
    hello: str => {
      var $ = layui.jquery;
      //$.get("http://www.baidu.com").then(res => {
      //  console.log(res);
      //});
      //alert("Hello " + (str || "mymod"));
    }
  };

  //输出test接口
  exports("net", obj);
});
