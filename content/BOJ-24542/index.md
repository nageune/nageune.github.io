---
emoji: ✔️
title: 'BOJ 24542 튜터-튜티 관계의 수'
date: '2024-09-19'
categories: BOJ
---
## 📝 문제
<a href="https://boj.kr/24542" target="_blank">문제 링크</a>
<br/><br/>

## 📖 설명
친분 관계가 있는 사람들은 서로서로 자료를 공유할 수 있으므로 이들 중 한 명에게만 자료를 건네면 된다. 즉, 친분 관계를 트리로 나타내면 트리의 수 만큼 자료를 건네면 되고, 각 트리 중 아무나에게 자료를 건네면 되기 때문에 각 트리의 노드 수를 모두 곱한 값이 답이 된다.  
친분 관계에 따라 트리를 구분하고 트리의 노드 수는 유니온-파인드 알고리즘을 사용하면 쉽게 구할 수 있다.
<br/><br/>

## ⌨️ 코드
```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long

vector<int> p; // 부모 노드를 저장하는 배열

// 파인드
int find(int x) {
    if (p[x] != x)
        p[x] = find(p[x]);
    return p[x];
}

// 유니온
void merge(int x, int y) {
    x = find(x);
    y = find(y);
    if (x < y)
        p[y] = x;
    else
        p[x] = y;
}

signed main() {
    cin.tie(0)->sync_with_stdio(0);
    int n, m;
    cin >> n >> m;
    p.resize(n + 1);
    iota(p.begin(), p.end(), 0);
    // 친분 관계를 서로 묶어서 같은 트리에 속하게 한다.
    while(m--) {
        int u, v;
        cin >> u >> v;
        merge(u, v);
    }
    int ans = 1, MOD = 1000000007;
    // 각 트리의 원소 수를 세고
    vector<int> cnt(n + 1, 0);
    for (int i = 1; i <= n; i++)
        cnt[find(i)]++;
    // 각 트리의 원소 수를 서로 곱한다.
    for (int i = 1; i <= n; i++)
        if (cnt[i])
            ans = ((ans % MOD) * (cnt[i] % MOD)) % MOD;
    cout << ans;
}
```

```toc
```