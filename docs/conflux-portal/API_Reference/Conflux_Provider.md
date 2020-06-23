---
id: provider_api
title: Portal 的 Provider API
custom_edit_url: https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/cn/portal/API_Reference/Conflux_Provider.md
---
ConfluxPortal在`window.conflux`上向用户访问的网站注入一个全局API。这个API允许网站请求用户登录，从已连接的用户加载区块链数据，并建议用户签署消息和交易。您可以使用此API来侦测Conflux浏览器的用户。

```javascript
if (typeof window.conflux !== 'undefined') {
  // Conflux user detected. You can now use the provider.
  const provider = window['conflux']
}
```
提供程序API本身非常简单，并封装了[Conflux JSON-RPC](http://js-conflux-sdk, conffle)格式的消息，这就是开发人员通常使用便利库与提供程序交互的原因，比如[js-conflux-sdk](https://www.npmjs.com/package/js-conflux-sdk),[conffle](https://github.com/liuis/conffle#readme)或其他。通过这些工具，您通常可以找到足够的文档来与提供者交互，而无需阅读这个低级别的API

然而，对于便利库的开发人员和希望使用自己喜欢的库尚未支持的特性的开发人员来说，提供程序API的知识是必不可少的。

### 接下来提供者变更项 

在2020年初，我们会对这个API进行一些改动，而

开始舍弃一些旧的同步方法。你可以[阅读更多](https://medium.com/metamask/breaking-changes-to-the-metamask-inpage-provider-b4dde069dd0a)。

我们将在2020年初开始支持新的API。同时我们将支持旧的和新的APIs至少6周，之后一些旧的方法将被淘汰。这些更改将使ConfluxPortal插槽供应商与[EIP 1193](https://github.com/conflux/EIPs/blob/master/EIPS/eip-1193.md)和[EIP 1102](https://github.com/conflux/EIPs/blob/master/EIPS/eip-1102.md)完全兼容。

You can continue reading to learn about the current API. Otherwise, [click here

to learn about the upcoming API changes](#new-api). 

您可以继续阅读以了解当前的API。或者单击[此处](http://(#new-api). )了解即将进行的API更改。

### 关于语言的建议

在我们语法里，如果一个功能被否决，我们强烈建议不要使用，并可能删除它在未来。在某一特定日期将被删除或替换的功能将被清楚地标示出来。我们预计在2020年第一季度后不会有任何进一步的重大变更。

# 当前的API

## **Properties** （**属性**）

这些属性可用于检查已连接用户的当前状态，这在发起交易之前可能是需要验证的重要事项。

### **conflux.network****Version （conflux网络版本）**

 返回一个表示当前区块链网络ID的数字字符串。以下是几个示例值：

```javascript
'0': Conflux Main Network
'1': Conflux Test network
```
### **conflux.selectedAddress(选定的地址)**

返回一个十六进制前缀字符串，表示当前用户选择的地址，如: `"0xfdea65c8e26263f6d9a1b5de9555d2931a33b825"`. 

### **conflux.isConfluxPortal**

返回`true`或 `false`， 表示用户是否安装了ConfluxPortal。

## **Methods**

### **conflux.enable()**

请求用户提供要由其标识的Conflux地址。返回十六进制前缀Conflux地址字符串数组的承诺。

#### **示例(ES6)**

使用异步函数[async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

```javascript
try {
  const accounts = await conflux.enable()
  // You now have an array of accounts!
  // Currently only ever one:
  // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']
} catch (error) {
  // Handle error. Likely the user rejected the login
  console.error(error)
}
```
#### **示例(ES5)**

```javascript
conflux.enable()
.then(function (accounts) {
  // You now have an array of accounts!
  // Currently only ever one:
  // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']
})
.catch(function (error) {
  // Handle error. Likely the user rejected the login
  console.error(error)
})
```
### **conflux.send（**options, callback**）（讲被替换）**

这将在2020年1月13日被`conflux.send(method: string, params: Array<any>)`所取代。点击[这里了解更多信息](https://github.com/Conflux-Chain/conflux-portal-docs/blob/new-provider/03_API_Reference/01_Conflux_Provider.md#confluxsendmethod-string-params-array)

见 `conflux.sendAsync`, 正下方.

### conflux.sendAsync**（**options, callback**）**

在[Eip1193](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md)中被 promise-returning send()  method取代。

向web3浏览器发送一条消息。消息格式映射到[Conflux JSON-RPC API](https://conflux-chain.github.io/conflux-doc/json-rpc/)的格式。下面是每个人都喜欢的method`cfx_sendTransaction`的一个例子，它既是Ether的发送方式，也是 智能合约方法的调用方式：

```javascript
params: [{
  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
  "gas": "0x76c0", // 30400
  "gasPrice": "0x9184e72a000", // 10000000000000
  "value": "0x9184e72a", // 2441406250
  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
}]
conflux.sendAsync({
  method: 'cfx_sendTransaction',
  params: params,
  from: accounts[0], // Provide the user's account to use.
}, function (err, result) {
  // A typical node-style, error-first callback.
  // The result varies by method, per the JSON RPC API.
  // For example, this method will return a transaction hash on success.
})
```
### **conflux.autoRefreshOnNetworkChange（将被删除）**

主网发生变更时，ConfluxPortal将重新加载向提供程序发出请求的任何页面。这种自动重新加载行为将在未来版本的ConfluxPortal中删除，但同时它可以使用此标志禁用。

要禁用网络自动更新，您可以：

```javascript
conflux.autoRefreshOnNetworkChange = false;
```
这可以在任何时候打开或关闭。
**注意**：将此标志设置为true的结果将导致默认状态，该行为可能会更改。如果您的站点依赖于ConfluxPortal在网络更新时重新加载它，您将需要在`networkChanged`程序中触发自己的重新 加载，以确保它继续在未来的版本上工作。

### **conflux.on（**eventName, callback**）**

程序支持监听某些事件：

* `accountsChanged`, 返回更新的账户数组。
* `networkChanged`, 返回网络标识字符串。
#### 举例：

```javascript
conflux.on('accountsChanged', function (accounts) {
  // Time to reload your interface with accounts[0]!
})
```
**Note:** At the moment, the `networkChanged` event is only useful if you

disable auto-refresh on network change by setting

**注意**：目前，只有在通过设置[`conflux.autoRefreshOnNetworkChange`](http://#conflux.autorefreshonnetworkchange)时，`networkChanged`事件才有用。否则，ConfluxPortal将默认在网络更改时自动重新加载页面，如果他们已经向程序发出了请求。在2020年1月13日，网络更改上的重新加载页面将停止，这个设置将被删除。[点击这里了解更多细节](https://medium.com/metamask/no-longer-reloading-pages-on-network-change-fbf041942b44)

# 新 API

该API将在2019年11月25日的一周内可用。这将是自2020年1月13日起唯一得到支持的API。如果您想了解如何使用新的API设置DAPP，您可以查看[这里](https://gist.github.com/rekmarks/d318677c8fc89e5f7a2f526e00a0768a)。

## **函数**

### **conflux.send('cfx_requestAccounts')**

**conflux.enable() (已弃用)**

请求用户提供要由其标识的conflux地址。返回十六进制前缀汇流地址字符串数组的承诺。详情见[EIP 1102](https://github.com/conflux/EIPs/blob/master/EIPS/eip-1102.md) for more details)。

#### **Example (ES6)**

使用[异步函数]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

```javascript
try {
  const accounts = await conflux.send('cfx_requestAccounts')
  // You now have an array of accounts!
  // Currently only ever one:
  // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']
} catch (error) {
  if (error.code === 4001) { // EIP 1193 userRejectedRequest error
    console.log('Please connect to ConfluxPortal.')
  } else {
    console.error(error)
  }
}
```
#### 示例(ES5)

```javascript
conflux.send('cfx_requestAccounts')
.then(function (accounts) {
  // You now have an array of accounts!
  // Currently only ever one:
  // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']
})
.catch(function (error) {
  if (error.code === 4001) { // EIP 1193 userRejectedRequest error
    console.log('Please connect to ConfluxPortal.')
  } else {
    console.error(error)
  }
})
```
### `conflux.send(method: string, params: Array<any>)`

将请求发送到dapp浏览器的method。方法和参数应该遵循[Conflux JSON-RPC API](https://github.com/conflux/wiki/wiki/JSON-RPC#json-rpc-methods)。

 返回解析到方法结果的Promise。并非所有方法都需要`params`，例 如`conflux.send('cfx_accounts')`。

下面是每个人都喜欢的method`cfx_sendTransaction`的一个例子，它既是Ether的发送方式，也是 智能合约方法的调用方式： 

```javascript
params: [{
  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
  "gas": "0x76c0", // 30400
  "gasPrice": "0x9184e72a000", // 10000000000000
  "value": "0x9184e72a", // 2441406250
  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
}]
conflux.send('cfx_sendTransaction', params)
.then(function (result) {
  // The result varies by method, per the JSON RPC API.
  // For example, this method will return a transaction hash on success.
})
.catch(function (error) {
 // Like a typical promise, returns an error on rejection.
})
```
### **conflux.on(**eventName**，** callback**)**

程序支持监听[EIP 1193](https://github.com/conflux/EIPs/blob/master/EIPS/eip-1193.md#events)中指定的所有事件。

以下对于管理您的dapp状态特别重要：

* `accountsChanged`, returns an array of the currently available accounts.返回当前可用帐户的数组。
* `chainChanged`, 返回当前使用的链/网的十六进制ID字符串。
* `networkChanged`, .（不鼓励）返回当前使用的链/网络的十进制格式的网络ID字符串。
#### 举例：

```javascript
conflux.on('accountsChanged', function (accounts) {
  // Time to reload your interface with accounts[0]!
})
conflux.on('chainChanged', function (chainId) {
  // Time to make sure your any calls are directed to the correct chain!
})
```
#### 链和网络ID列表

```javascript
'0': Conflux Main Network
'1': Conflux Test network
```
### conflux.sendAsync(options, callback) (已弃用)

 我们强烈不建议使用这个函数，将来可能会被删除

 向dapp浏览器发送一条消息。消息格式映射到[Conflux JSON-RPC API](https://conflux-chain.github.io/conflux-doc/json-rpc/)的格式。

下面是每个人最喜欢的menthod`cfx_sendTransaction`的一个例子，它既是Ether的发送方式，也是 智能合约方法的调用方式：

```javascript
params: [{
  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
  "gas": "0x76c0", // 30400
  "gasPrice": "0x9184e72a000", // 10000000000000
  "value": "0x9184e72a", // 2441406250
  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
}]
conflux.sendAsync({
  method: 'cfx_sendTransaction',
  params: params,
  from: accounts[0], // Provide the user's account to use.
}, function (err, result) {
  // A typical node-style, error-first callback.
  // The result varies by method, per the JSON RPC API.
  // For example, this method will return a transaction hash on success.
})
```
## **Properties(属性)**

Useful for knowing whether `window.conflux` is ConfluxPortal, but not much else.

### **conflux.isConfluxPortal**

`true` 是否已安装 ConfluxPortal， `false`相反.

### **conflux.networkVersion (已弃用)**

_We strongly discourage the use of this property, which may be removed in the

future._ 

我们强烈反对不建议使用使用该属性，因为将来可能会被移除。

返回一个表示当前区块链网络ID的数字字符串。以下是几个示例值：

```javascript
'0': Conflux Main Network
'1': Conflux Test network
```
### **conflux.selectedAddress (已弃用)**

我们强烈反对不建议使用使用该属性，因为将来可能会被移除

返回一个十六进制前缀字符串，表示当前用户选择的地址，例如：`"0xfdea65c8e26263f6d9a1b5de9555d2931a33b825"`. 

