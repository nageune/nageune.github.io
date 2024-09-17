---
emoji: ✔️
title: 'BOJ 2942 퍼거슨과 사과'
date: '2024-09-17'
categories: BOJ
---
## 📝 문제
<a href="https://boj.kr/2942" target="_blank">문제 링크</a>
<br/><br/>

## 📖 설명
사과가 남지 않으면서 사과를 받는 선수는 모두 같은 수의 사과를 받아야한다. 빨간 사과와 초록 사과의 최대공약수를 구하고 최대공약수의 약수를 구하면 위 조건을 만족하는 선수의 수를 모두 구할 수 있다. 빨간 사과와 초록 사과의 수를 선수의 수로 나눈 값을 출력한다.  
최대공약수는 유클리드 호제법을 사용해 구한다. 약수를 구하는 방법은 구하는 수의 제곱근까지 약수를 찾고 찾은 값으로 구하는 수를 나눈 값도 약수임을 이용해 시간을 줄인다.
<br/><br/>

## ⌨️ 코드
```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long

// 유클리드 호제법
int gcd(int a, int b) {
    return b ? gcd(b, a % b) : a;
}

signed main() {
    cin.tie(0)->sync_with_stdio(0);
    int r, g;
    cin >> r >> g;
    int G = gcd(r, g); // r과 g의 최대공약수
    vector<int> v;
    // 최대공약수의 약수
    for (int i = 1; i <= sqrt(G); i++) // 제곱근까지 탐색
        if (G % i == 0) { // 나누어 떨어지면
            v.push_back(i); // 추가
            if (G / i != i) // 제곱근이 아니면
                v.push_back(G / i); // 약수로 나눈 값도 추가
        }
    // 가능한 선수 수에 대해 출력
    for (int i : v)
        cout << i << ' ' << r / i << ' ' << g / i << '\n';
}
```

```toc
```