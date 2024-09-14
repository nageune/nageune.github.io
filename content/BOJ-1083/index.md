---
emoji: ✔️
title: 'BOJ 1083 소트'
date: '2024-09-14'
categories: BOJ
---
## 📝 문제
[문제 링크](https://boj.kr/1083)
<br/><br/>

## 📖 설명
크기가 N인 배열 A에서 최대 S번 연속된 두 개의 원소를 교환하여 사전순으로 가장 뒷서는 배열을 출력하는 문제이다. 최대 S번 이웃한 원소를 교환할 수 있다는 것은 i번째 원소로부터 S만큼 떨어진 위치의 수는 끌어올 수 있다는 뜻이다. 이 말은 A[i]부터 A[i+S]까지의 원소 중 가장 큰 값을 A[i]의 위치로 이동시키고 뒤로 한 칸씩 밀어내는 것이다. 이때 소모된 회수만큼 S를 감소시키고 S가 남아있다면 i를 1만큼 증가시켜 다시 한 번 반복한다.
<br/><br/>

## ⌨️ 코드
```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long

signed main() {
    cin.tie(0)->sync_with_stdio(0);
    int N, S;
    cin >> N;
    vector<int> A(N);
    for (int i = 0; i < N; i++)
        cin >> A[i];
    cin >> S;
    for (int i = 0; i < N && S > 0; i++) {
        int maxIndex = i;
        for (int j = i; j <= min(N - 1, i + S); j++)
            if (A[maxIndex] < A[j])
                maxIndex = j;
        for (int j = maxIndex; j > i; j--, S--)
            swap(A[j], A[j - 1]);
    }
    for (int i : A)
        cout << i << ' ';
}
```

```toc
```