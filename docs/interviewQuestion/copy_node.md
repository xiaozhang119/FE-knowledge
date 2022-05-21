###### 题目描述

现在，我们的设计器需要实现一个复制选中的某个节点( Node-2 )并且可以插入到另外一个节点( Node-1 )中成为该节点的子节点。要求:复制后插入的节点的所有 NodeId 要求是唯一的。

###### 需求分析

##### 代码实现

```javascript
const editorState = {
  nodes: {
    0: {
      id: "0",
      name: "ROOT",
      nodes: ["1", "2"],
    },
    1: {
      id: "1",
      name: "Node-1",
      nodes: [],
      parent: "0",
    },
    2: {
      id: "2",
      name: "Node-2",
      nodes: ["3", "4"],
      parent: "0",
    },
    3: {
      id: "3",
      name: "Node-3",
      nodes: ["4"],
      parent: "2",
    },
    4: {
      id: "4",
      name: "Node-4",
      parent: "2",
    },
    5: {
      id: "5",
      name: "Node-5",
      parent: "3",
    },
  },
};

const getUniqueId = () => {
  return `copy-id-${Math.random().toFixed(32).slice(2)}`;
};
/**
 *
 * @param editorState 编辑器中所有节点的映射
 * @param sourceNode 需要被复制的选中节点
 * @param targetNode 要插入到的目标节点
 */

const copyFn = (nodes, sourceNode, targetNode) => {
  // 特别备注当前法法为处理有环的场景
  // 如果实际业务场景允许讲父节点copy到子节点就要做有环的处理，需要根据实际需求对有环场景结合需求做优化；
  const { nodes: nodesList } = sourceNode;

  const uniId = getUniqueId();
  const copyNode = {
    ...sourceNode,
    nodes: [],
    id: uniId,
    parent: targetNode.id,
  };
  nodes[uniId] = copyNode;
  const targetNodes = targetNode.nodes || [];
  targetNodes.push(uniId);
  // 兼容目标节点不存在nodes数组的场景
  targetNode.nodes = targetNodes;

  if (nodesList && nodesList.length) {
    const trace = nodesList.slice();
    while (trace.length) {
      const subSourceId = trace.shift();
      subSourceId && copyFn(nodes, nodes[subSourceId], copyNode);
    }
  }
};
```
