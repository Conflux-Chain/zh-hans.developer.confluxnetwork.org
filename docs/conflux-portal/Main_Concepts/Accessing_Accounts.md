---
id: accessing_accounts
title: 获得账户信息
source_url: https://github.com/Conflux-Chain/conflux-portal-docs/blob/master/docs/en/portal/Main_Concepts/Accessing_Accounts.md
custom_edit_url: https://github.com/Conflux-Chain/zh-hans.developer.conflux-chain.org/edit/master/docs/conflux-portal/Main_Concepts/Accessing_Accounts.md
---
用户的账户在Conflux中的各种应用场境中都有使用，它们的标志整洁，但没有任何一项调用比调用_wallet methods_方法更重要。由于这类方法会涉及到签名或交易审批。所有这类方法都需要交易发送账户作为函数参数。

- `cfx_sendTransaction`

     一旦您连接到一个用户，您可以随时通过检查 `conflux.selectedAddress` 来重新检查当前账户。

    如果你想在地址改变时收到通知，我们提供了一个事件可供使用：

```javascript
conflux.on('accountsChanged', function (accounts) {
  // Time to reload your interface with accounts[0]!
})
```

如果返回的数组中的第一个账户不是你所期望的账户，你应该通知用户！在未来的工作中，账户数组内可能包含多个账户。但是，数组中的第一个账户将继续被认为是用户"选定"的账户。
