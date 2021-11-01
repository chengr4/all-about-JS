# Memory

![](https://i.imgur.com/Joqgjjw.png)

Runtime 會分配 heap 的記憶體空間給程式使用

> 可以利用例如 Grafana 觀察

**Stack** (不用查找資料，存取速度很快): store static data (number, string, boolean), reference, function frames
**Heap**: function 本身, objects, 全域物件 (global, window), large Object, code space (編譯後的程式碼)

## Garbage Collection in V8

![](https://i.imgur.com/DqVFokl.png)

1. 標記: 區分 still used memory and unused memory
2. 清理: 清理未使用的記憶體
3. 整理: 重組 Heap

## Two different GC in V8

Major GC and Minor GC

![](https://i.imgur.com/dO4taEF.png)

- Young Generation
    - Nursery: 熱騰騰新的記憶體空間
    - Intermediate: 次新 (活過一次 GC) 
- Old Generation

> Semi-space design

## Major GC

標記:

1. 從起點開始 iterate (起點可以有多個)
2. 沒被 iterate 到的 unused memory 就是 free list

清理 (sweep): 產生 free list

整理 (Defragment): 整理不連續的記憶體空間

> 成本高， v8 不會頻繁地進行整理

## Find Memeory Leak in Application



## References

1. [Memory Leak 與你的距離](https://hackmd.io/@JSDC-tw/2021conference/%2Fjj21M_UCSji1ilmBjgjj2g)
2. [Orinoco: young generation garbage collection](https://v8.dev/blog/orinoco-parallel-scavenger)
3. [Kuan; 從你的 Node.js 專案裡找出 Memory leak，及早發現、及早治療！ (2021.8)](https://vocus.cc/article/61176c17fd89780001942f1c)
