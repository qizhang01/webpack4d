const html = `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
  </head>
  <body>
    <h3>奇安信规则列表查询：</h3>
    <div style="line-height: 36px;">
        <div>method: GET <span style="margin-left: 40px;">//language只有9和0有数据</span></div>
        <div>url: http://129.11.9.14:8752/file/resolver?language=9</div>
        <div>params: {</div>
        <div style="margin-left: 20px;">language : “9”</div>
        <div>}</div>
    </div>
    <h3>奇安信规则详情查询：</h3>
    <div>
      method: GET
      url:http://129.11.9.14:8752/file/detail?pkRule=29499&language=9
      params: {
        pkRule: “29499”,
        language : ”9”
      }     
    </div>
  </body>
</html>`

export default html
