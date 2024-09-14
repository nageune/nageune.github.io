---
emoji: ✔️
title: 'BOJ 23835 어떤 우유의 배달목록 (Easy)'
date: '2024-09-15'
categories: BOJ
---
## 📝 문제
[문제 링크](https://boj.kr/23835)
<br/><br/>

## 📖 설명
임의의 두 방 사이의 경로는 정확히 한 개 있으므로 트리임을 알 수 있다. 1번 쿼리가 실행되면 DFS를 통해 경로를 탐색하고 2번 쿼리가 실행되면 저장한 배열을 통해 값을 조회만 한다.  
양방향(무방향) 간선을 입력받아 저장하고 1번 쿼리인 경우 DFS를 실시한다. DFS는 몇 번째 배달하는 방인지를 나타내는 `cnt`, 목적지 `dest`, 현재 위치 `curr`가 있다. 탐색하며 가는 모든 경로에 `cnt` 만큼의 우유를 배달하고, 경로를 돌아가는 경우 다시 제거한다. 만약 `curr == dest`인 경우 1을 `return`하여 경로 상 배달했던 우유를 제거하지 않도록 한다.  
2번 쿼리인 경우 배달한 우유를 저장한 `arr` 배열의 값을 조회하여 출력한다.
<br/><br/>

## ⌨️ 코드
```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long

int n, q;
vector<int> adj[1001];
int arr[1001], visited[1001];

int dfs(int cnt, int dest, int curr) {
    if (curr == dest) {
        arr[curr] += cnt;
        return 1;
    }
    for (int i : adj[curr]) {
        if (!visited[i]) {
            visited[i] = 1;
            arr[curr] += cnt;
            int tmp = dfs(cnt + 1, dest, i);
            visited[i] = 0;
            if (tmp == 1)
                return 1;
            arr[curr] -= cnt;
        }
    }
    return 0;
}

signed main() {
    cin.tie(0)->sync_with_stdio(0);
    cin >> n;
    for (int i = 0; i < n - 1; i++) {
        int a, b;
        cin >> a >> b;
        adj[a].push_back(b);
        adj[b].push_back(a);
    }
    cin >> q;
    while (q--) {
        int t;
        cin >> t;
        if (t == 1) {
            int u, v;
            cin >> u >> v;
            visited[u] = 1;
            dfs(0, v, u);
            visited[u] = 0;
        } else {
            int x;
            cin >> x;
            cout << arr[x] << '\n';
        }
    }
}
```

```toc
```