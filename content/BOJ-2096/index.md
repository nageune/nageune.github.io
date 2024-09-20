---
emoji: ✔️
title: 'BOJ 2096 내려가기'
date: '2024-09-20'
categories: BOJ
---
## 📝 문제
<a href="https://boj.kr/2096" target="_blank">문제 링크</a>
<br/><br/>

## 📖 설명
최솟값 및 최댓값을 저장하는 배열을 각각 만들고 0으로 초기화한 다음 각 라인의 입력을 받을 때마다 조건에 따라 갱신한다. `m` 배열과 `M` 배열은 각각 최솟값, 최댓값을 저장하는 배열이며, 각 index는 해당 위치에 내려왔을 때 최소 또는 최댓값을 저장하고 있다. `curr` 배열은 현재 입력받은 라인 값을 저장하는 배열이고 `prev` 배열은 `m` 또는 `M` 배열을 갱신하기 전에 값을 저장하는 용도이다.
<br/><br/>

## ⌨️ 코드
```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long

signed main() {
    cin.tie(0)->sync_with_stdio(0);
    int n;
    cin >> n;
    int prev[3], curr[3], m[3] = {0}, M[3] = {0};
    for (int i = 0; i < n; i++) {
        cin >> curr[0] >> curr[1] >> curr[2]; // 현재 라인 입력
        // 이전 라인의 최솟값을 저장
        for (int j = 0; j < 3; j++)
            prev[j] = m[j];
        // 현재 칸에 도달하는 모든 경우 중 최솟값
        m[0] = min(prev[0], prev[1]) + curr[0];
        m[1] = min(prev[0],min(prev[1], prev[2])) + curr[1];
        m[2] = min(prev[1], prev[2]) + curr[2];
         // 이전 라인의 최댓값을 저장
        for (int j = 0; j < 3; j++)
            prev[j] = M[j];
        // 현재 칸에 도달하는 모든 경우 중 최댓값
        M[0] = max(prev[0], prev[1]) + curr[0];
        M[1] = max(prev[0],max(prev[1], prev[2])) + curr[1];
        M[2] = max(prev[1], prev[2]) + curr[2];
    }
    // 마지막 라인의 각 칸에 도달했을 때 최댓값들 중 최댓값 및 최솟값들 중 최솟값을 출력
    cout << max(M[0], max(M[1], M[2])) << ' ' << min(m[0], min(m[1], m[2]));
}
```

```toc
```