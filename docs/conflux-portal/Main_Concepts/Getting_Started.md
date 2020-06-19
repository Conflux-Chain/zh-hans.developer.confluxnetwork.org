---
id: getting_started
title: Getting Started
source_url: https://github.com/Conflux-Chain/conflux-portal-docs/blob/master/docs/en/portal/Main_Concepts/Getting_Started.md
custom_edit_url: https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/conflux-portal/Main_Concepts/Getting_Started.md
---
要使用ConfluxPortal进行开发，首先你要将ConfluxPortal安装到你的开发设备上。[点此下载。](https://github.com/Conflux-Chain/conflux-portal/releases)

运行后，你可以看到控制台新的浏览器标签中有一个可用的`window.conflux`对象，这是ConfluxPortal提供的交互方式。 

你可以[点击此处](local://base_request.html/API_Reference/Conflux_Provider.md)查看该对象完整的API。

## 基本考虑因素

### ConfluxJS浏览器检测

你的APP要首先验证你是否在使用ConfluxPortal，只需要简单的调用检查命令即可：`if (typeof
window.conflux !== 'undefined') { /* deal with it */ }`. 

### 运行测试网络

在ConfluxPortal右上角的菜单中，你可以选择当前接入的网络，在几个常用的默认选项中，你可以找到`Custom RPC`和`Localhost 12539`，这些都有助于连接一个测试区块链网络，如[Conflux本地网络](https://github.com/yqrashawn/conflux-local-network-lite#readme)。如果你的电脑内安装了`npm`则可以通过调用`npm i -g ganache-cli && ganache-cli`快速安装并启用测试网络。

<!-- Ganache has some great features for starting it up with different states. If you -->
<!-- start it with the `-m` flag, you can feed it the same seed phrase you have in -->
<!-- your ConfluxPortal, and the test network will give your first 10 accounts 100 -->
<!-- test ether each, which makes it easier to start work.  -->

由于你持有的助记词具备控制你账户的能力，因此为方便起见请保存至少一个助记词用于开发，并将它和其他任何存储实际资产的助记词分开。一个用ConfluxPortal保存多个助记词的简单方法就是使用多个浏览器配置文件，且每个配置文件都整洁的安装了各自的浏览器扩展。

#### 重置本地Nonce计算

如果你在运行一个测试区块链网络，在重启它之后，可能会意外的使ConfluxPortal感到模糊，因为ConfluxPortal是基于网络状态_和_已知的已发送交易计算[Nonce](local://base_request.html/Sending_Transactions.md#nonce-[ignored])的。

要清除ConfluxPortal的交易队列，并有效地重置它的nonce计算，可以使用`Settings`中的`Reset Account`按钮实现（在右上角的三明治菜单中）。

### 检测ConfluxPortal

如果你想区分ConfluxPortal和其他与Conflux兼容的浏览器，可以用`conflux.isConfluxPortal`进行检测。

### 用户状态

当前使用这个API时，有一些状态性的问题需要您考虑：

- 当前的网络是什么？
- 当前的账户是什么？

这两个问题的答案在`conflux.networkVersion`和`conflux.selectedAddress`中以同步的形式提供。 你也可以用event监听变化，参见（[API参考](local://base_request.html/API_Reference/Conflux_Provider.md)）

### 连接到ConfluxPortal

“连接”或“登录”到ConfluxPortal意味着“访问用户的Conflux账户”。

你**只能**在响应用户直接操作时发起连接请求，如点击按钮，而**永远不能**在页面加载时发起请求。

我们建议你在你的DApp中设置一个连接ConfluxPortal的按钮，点击按钮即可调用以下方法：  

```javascript
conflux.enable()
```

这种承诺返回函数使用十六进制前缀的conflux地址数组进行解析，可在发起交易时用作一般帐户参考。

随着时间的推移，这个方法将发展为包含其他各种参数的方法，帮助你的站点在安装过程中向用户请求所需的所有安装选项。

由于返回值是一个Promise，如果你使用的是`async`函数，你的日志会像下面这样：

```javascript
const accounts = await conflux.enable()
const account = accounts[0] // We currently only ever provide a single account,
                            // but the array gives us some room to grow.
```

## 选择开发工具库

开发工具库的存在原因多种多样。

有些是为了简化了用户界面元素的创建流程，有些能够有效管理用户账户，还有的能够提供大量与智能合约进行交互的方法以适用于各类API的偏好，从promises到callbacks（回调函数），再到strong types（强类型）等等。

提供方的API本身非常简单，其内部封装了[Conflux
JSON-RPC](https://conflux-chain.github.io/conflux-doc/json-rpc/)格式的消息，因此开发者们通常会使用开发工具库与提供方进行交互，如[js-conflux-sdk](https://www.npmjs.com/package/js-conflux-sdk)、
[conffle](https://github.com/liuis/conffle#readme)等。针对这类开发工具库，一般都提供了足够多的文档支撑您与提供方进行交互，而不需要您阅读这类低等级API。