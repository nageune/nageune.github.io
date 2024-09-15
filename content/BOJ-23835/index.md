---
emoji: ✔️
title: 'BOJ 23835 어떤 우유의 배달목록 (Easy)'
date: '2024-09-15'
categories: BOJ
---
## 📝 문제
<a href="https://boj.kr/23835" target="_blank">문제 링크</a>
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
    if (curr == dest) { // 목적지에 도달했다면
        arr[curr] += cnt; // 우유를 배달하고
        return 1; // 이전 우유들을 회수하지 않음
    }
	// 목적지에 도달한 것이 아니라면
    for (int i : adj[curr]) { // 현재 위치에서 각 간선으로
        if (!visited[i]) { // 아직 방문하지 않았다면
            visited[i] = 1; // 방문 체크하고
            arr[curr] += cnt; // 우유를 일단 배달하고
            int tmp = dfs(cnt + 1, dest, i); // 다음 방으로 이동
            visited[i] = 0; // 방문 체크 취소
            if (tmp == 1) // 만약 이후의 경로에서 목적지에 도달했다면
                return 1; // 이전 우유들을 회수하지 않음
            arr[curr] -= cnt; // 이후의 경로에서 목적지에 도달하지 못하면 우유를 회수
        }
    }
    return 0; // 목적지에 도달하지 않음
}

signed main() {
    cin.tie(0)->sync_with_stdio(0);
    cin >> n;
    for (int i = 0; i < n - 1; i++) { // 간선 입력
        int a, b;
        cin >> a >> b;
        adj[a].push_back(b);
        adj[b].push_back(a);
    }
    cin >> q;
    while (q--) {
        int t;
        cin >> t;
        if (t == 1) { // 1번 쿼리
            int u, v;
            cin >> u >> v;
			// u번 방부터 시작해서 v번 방에 도착하는 경로를 찾으며 우유 배달
            visited[u] = 1;
            dfs(0, v, u);
            visited[u] = 0;
        } else { // 2번 쿼리
			// 현재까지 x번 방에 배달된 우유의 수 조회
            int x;
            cin >> x;
            cout << arr[x] << '\n';
        }
    }
}
```

```toc
```