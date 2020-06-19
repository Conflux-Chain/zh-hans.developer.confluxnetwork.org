---
id: signing_data_with_portal
title: 使用Conflux Portal浏览器插件钱包对数据签名
custom_edit_url: https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/cn/portal/API_Reference/Signing_Data.md
---
## 签名方法的历史[#](https://developer.conflux-chain.org/docs/introduction/en/conflux_overview/#history-of-the-signing-methods)

Portal是由MetaMask继承而来，MetaMask中有多种签名方法，你可以在MetaMask文档中查阅所有历史签名方法。

## ConfluxPortal中有何改善[#](https://developer.conflux-chain.org/docs/introduction/en/conflux_overview/#what-changed-in-confluxportal)

* 我们将`personal_sign`逻辑优化为`cfx_sign`逻辑。并且我们推荐使用 `cfx_sign`方法来代替 `personal_sign`。
* 在这里`signTypedData`, `signTypedData_v1`, `signTypedData_v3`和`signTypedData_v4`的原理仍然和MetaMask一样。但是我们计划在主网上线前对其进行优化。

 
