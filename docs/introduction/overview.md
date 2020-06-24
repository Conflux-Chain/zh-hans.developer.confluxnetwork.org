---
id: conflux_overview
title: 概述
source_url: https://github.com/Conflux-Chain/conflux-developer-site/blob/master/docs/introduction/en/overview.md
custom_edit_url: https://github.com/Conflux-Chain/zh-hans.developer.conflux-chain.org/edit/master/docs/introduction/overview.md
keywords:
  - conflux
  - overview
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Conflux 是一种新型的安全可靠的公共区块链，具有高性能和可扩展性。 Conflux 可以实现与比特币和以太坊相同的去中心化水平和安全性，同时能够在交易吞吐量（TPS）和最终延迟方面有两个数量级以上的改进。

Conflux 的主要优势在于其新型的共识协议、可验证存储和交易转发协议。在 Conflux 分类帐本中，区块组织方式为树图方式，其中每个区块都引用其他区块，其中包含一个父区块。当仅观察与父边链接的区块时，分类帐本就像是树结构（父树），但如果观察所有区块时，分类帐本就像是有向无环图。 这也是我们将 Conflux 的分类帐本结构称为树图的原因。

<img alt="TreeGraph " src={useBaseUrl('img/tree_graph.jpg')} />

树图 
Conflux 的共识算法，被称为“贪婪的最重自适应权重子树”（Greedy-Heaviest-Adaptive-SubTree，GHAST），通过在帐本的父树上应用最重的子树规则，保证区块链网络中所有节点一致同意区块的枢轴链（Pivot Chain），然后基于枢轴链对所有区块的全序达成共识。GHAST 也允许 Conflux 节点检测某些可能损害存活性(即确认交易的能力)的攻击（如：试图生成两个平衡子树的平衡攻击），同时通过自适应地调整这些区块的权重来阻止这些攻击。

树图帐本和 GHAST 共识算法让 Conflux 节点能够快速产生新区快，而不需要担心帐本中出现的分叉会影响网络安全性。因此，Conflux 在实现了高通量的同时，保证了较低的交易确认延迟。

Conflux 采用了账户模型，并支持智能合约。Conflux 的智能合约与图灵完备的 Solidity 可以兼容，类似在以太坊中的使用。Conflux 使用 MPT 树（Merkle Patricia Tree）作为主结构，用于账户状态和智能合约的已认证存储。Conflux 并不是仅使用了单一的多版本默克尔树（Merkle Tree），而是为存储状态的每一个不同版本都采用了多个默克尔树。 从更高的层面上说，Conflux 是由一个快照树（Snapshot Tree）和增量树（Delta Tree）构成。增量树总是存储在内存中，包含自上一次快照之后的所有状态更新信息。快照树在交易执行过程中是只读的。这种设计让 Conflux 中的交易执行更加高效，因为这种方法在访问存储状态时，可以更高效地使用内存。增量树中通常包含了最常访问的数据，由于增量树中的状态信息很小，所以树深通常也很浅，这就保证了内存中能够保存更多有效数据。

另外，由于在 Conflux 中，网络带宽可能会是一个真正的瓶颈，因此，Conflux 采用了新型的交易转发协议来提高对网络带宽的有效利用，以促进交易广播。为了减少冗余的交易广播，一个 Conflux 节点首先向其他节点发出公告，公告中包含其他节点可能没有见过的交易 ID，然后让其他节点请求它们真正需要的交易。Conflux引入了一种高效的交易 ID 编码，在大小和安全性之间取得了良好的平衡。
