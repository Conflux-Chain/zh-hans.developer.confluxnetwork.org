---
id: introduction
title: 什么是 ConfluxPortal
custom_edit_url: https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/cn/portal/Introduction.md
---
欢迎使用ConfluxPortal 的 开发者文档. ConfluxPortal 是 Conflux 版本的 [MetaMask](https://github.com/MetaMask/metamask-extension#readme). 本文档用于学习开发 ConfluxPortal 的应用。

* 你可以在 [the github release page](https://github.com/Conflux-Chain/conflux-portal/releases) 找到ConfluxPortal的最新版本以及 [in this issue](https://github.com/Conflux-Chain/conflux-portal/issues/31) 上的安装说明。
* 为了获得使用ConfluxPortal的帮助, 在我们的github repo上提交问题[submit issues](https://github.com/Conflux-Chain/conflux-portal/issues/new/choose) 。
* 要了解如何为ConfluxPortal项目本身做出贡献, 访问我们的内部文档 [Internal Docs](https://github.com/Conflux-Chain/conflux-portal/tree/develop/docs)。
## 为什么是 ConfluxPortal 呢?

创建ConfluxPortal的初衷是能够创建基于Conflux技术的更安全可用的网站。特别的，它能对帐户进行管理并连接用户到区块链。

* 阅读我们的页面嵌入提供商的完整文档 [Read the full docs of our injected provider](https://developer.conflux-chain.org/docs/conflux-portal/docs/en/portal/API_Reference/provider_api)
* 阅读JSON RPC API的完整文档[Read the full docs of the JSON RPC API](https://developer.conflux-chain.org/docs/conflux-portal/docs/en/portal/API_Reference/json_rpc_api)
* 阅读其他支持API的相关内容[Read about other supported APIs](https://developer.conflux-chain.org/docs/conflux-portal/docs/en/portal/API_Reference/experimental_api)
### 账户管理

ConfluxPortal允许用户以多种方式管理帐户及其密钥，包括硬件钱包，能够将它们与网站环境隔离开来。与将用户密钥存储在单个中央服务器上，甚至存储在本地存储相比，这是一个极大的安全改进，因为使用中央服务器存储或本地储存可能会带来大量帐户被盗（ [mass account thefts](https://www.ccn.com/cryptocurrency-exchange-etherdelta-hacked-in-dns-hijacking-scheme/)）的风险。

此安全功能还为开发人员提供了便利：对于开发人员，您只需简单地与全球可用的 `conflux` API进行交互， conflux API会识别兼容web3的浏览器用户（比如ConfluxPortal用户）。无论何时您发起的交易签名请求（如`cfx_sendTransaction`, `cfx_signTypedData`, 或其他），ConfluxPortal都将以尽可能容易理解的方式提示用户，允许他们被通知，您有一个简单的API，尽管DNS黑客攻击仍然可以用于大规模钓鱼（[DNS hacks can still be used for phishing en masse](https://medium.com/metamask/new-phishing-strategy-becoming-common-1b1123837168)），但攻击者只能尝试钓鱼个人用户，而不可执行大规模黑客攻击。

### 区块链连接

ConfluxPortal预装了易用快捷连接到Conflux区块链和Conflux测试网络的功能。这允许用户在不同步全节点的情况下开始操作，同时仍然能提供选择区块链提供者以升级其安全性的选项。

今天，ConfluxPortal与任何公开 [Conflux Compatible JSON RPC API](https://conflux-chain.github.io/conflux-doc/json-rpc/)的区块链兼容，包括自定义链和私有链。对于开发，我们建议运行测试区块链，如[conflux-local-network-lite](https://github.com/yqrashawn/conflux-local-network-lite#readme)。

## 区块链应用

ConfluxPortal可以轻松编写基于区块链智能合约系统的用户界面。你可以在不知道如何写智能合约的情况下接受付款，但如果你知道如何编写智能合约，你将能够做更多有趣的事情。


### 新的Dapp开发者

* 我们推荐Karl Floersch的 [Learning Solidity](https://karl.tech/learning-solidity-part-1-deploy-a-contract/)教程系列。

 

