## 简介

用于 UV 统计，需求分 2 种情况

- 页面初始打开时统计（刷新不统计，加载 sdk 后自动执行）
- 登录用户统计

## 引入 sdk

sdk 支持各种模块加载方式，可通过 script 标签异步引入到 html 文件

引入文件后会生成全局方法： `nuoUVTrack`

```diff

+   <script>window.nuoAppTrackId = 'nuonuo-cloud-jz';</script>
+   <script src="//data.jss.com.cn/statisticsvu/nuoUVTrack.min.js"></script>

```

> 多页面应用 如 oa 确保在各页面头部都引入 sdk

## 使用注意

> 因各项目差异，之前的只在登录成功回调函数中手动发送请求
> 的方法在单点登录时并不会触发，所以每个项目都需要在`登录成功`后的应用首页的某个固定组件（每个页面都有，不常刷新，如 OA 中登录后首页的顶部标题栏）去发送统计请求。

> 单点登录可能跳转到应用的多个页面，需要在所有可能直接跳转到的页面加载完后手动发送请求

> 一般都会在登录成功跳转到首页，首页有相应接口查询用户信息，可在查询用户信息接口返回数据时拿到 userName,即可发送请求。

> 为防止各种奇葩问题，添加 try catch 捕获错误

> sdk 已做处理，同一用户同一标签页刷新新页面不会重复发送请求。

参数：

- userId 当前登录用户唯一识别代码，采用 userName

```diff
+   try {
+       window.nuoUVTrack && nuoUVTrack({userId: data.userName})
+   } catch (err) {
+       console.log('track error': err)
+   }
```

> 请求参数必需传入 userId，其他参数可按需添加

> nuoUVTrack 回调函数可选

## 测试

查看 network 面板，Filter 输入 `sendStatisticsData` 定位 uv 请求

> *2019-09-29*更新

## 本地测试

```
<script>window.nuoAppTrackId = 'nuonuo-cloud-jz';</script>
<script src="//nnfw.jss.com.cn/37AC9AC84DEA4C41B69F4947B675D2D4/nuoUVTrack.test.min.js"></script>



// host 绑定
192.168.206.53 uvstest.nntest.cn

```
