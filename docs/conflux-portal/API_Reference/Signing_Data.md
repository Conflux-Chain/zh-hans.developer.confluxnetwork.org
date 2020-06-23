---
id: signing_data_with_portal
title: 使用 ConfluxPortal 浏览器插件钱包对数据签名
custom_edit_url: https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/cn/portal/API_Reference/Signing_Data.md
---
## 签名方法[#](https://developer.conflux-chain.org/docs/introduction/en/conflux_overview/#history-of-the-signing-methods)

ConfluxPortal 是由 MetaMask 继承而来，MetaMask 中有多种签名方法，您可以在 MetaMask 文档中查阅所有签名方法。

## Portal 中有何改善[#](https://developer.conflux-chain.org/docs/introduction/en/conflux_overview/#what-changed-in-confluxportal)

* 我们使用`personal_sign`的逻辑来优化`cfx_sign`方法。并且我们推荐使用 `cfx_sign`方法代替 `personal_sign`方法。
* 在这里`signTypedData`, `signTypedData_v1`, `signTypedData_v3`和`signTypedData_v4`的原理仍然和 MetaMask 一样。但是我们计划在主网上线前对其进行优化。

 
