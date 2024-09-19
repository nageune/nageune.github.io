---
emoji: ✔️
title: 'BOJ 14369/14370 전화번호 수수께끼'
date: '2024-09-18'
categories: BOJ
---
## 📝 문제
<a href="https://boj.kr/14369" target="_blank">문제 링크(14369)</a>  
<a href="https://boj.kr/14370" target="_blank">문제 링크(14370)</a>
<br/><br/>

## 📖 설명
10진수 0부터 9를 영어로 하면 각 `ZERO`, `ONE`, `TWO`, `THREE`, `FOUR`, `FIVE`, `SIX`, `SEVEN`, `EIGHT`, `NINE`이다. 이 중에서 `Z`는 `ZERO`를 특정할 수 있는 유일한 문자이다. 그렇다면 `Z`의 수만큼 `ZERO`를 만들 수 있을 것이고 앞으로 `ZERO`가 나올 경우는 없다. 마찬가지로 `W`는 `TWO`를 특정할 수 있고 `X`는 `SIX`를, `G`는 `EIGHT`를 특정할 수 있다. `SEVEN`은 처음에는 특정할 수 있는 문자가 없었지만 `SIX`를 이미 특정하여 모두 제거한 후에는 `S`가 `SEVEN`을 특정할 수 있게 된다. 이러한 방식으로 순서를 적절히 조합하면 모든 수를 특정할 수 있다. 이 문제에선 다행히 숫자를 모두 구한 다음 오름차순으로 정렬하여 출력하면 AC를 받을 수 있다.
<br/><br/>

## ⌨️ 코드
```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long

signed main() {
    cin.tie(0)->sync_with_stdio(0);
    int t;
    cin >> t;
    for (int i = 1; i <= t; i++) {
        string s, ans = "";
        cin >> s;
        int arr[26] = {0};
        // 각 문자마다 몇 번 사용되었는지 arr배열에 저장
        for (char c : s)
            arr[c-'A']++;
        // 'Z'는 "ZERO"를 특정할 수 있는 문자
        while (arr['Z'-'A']) {
            // 답에 0을 추가하고 "ZERO"의 각 문자의 개수 1씩 감소
            ans += '0';
            arr['Z'-'A']--;
            arr['E'-'A']--;
            arr['R'-'A']--;
            arr['O'-'A']--;
        }
        // 위 과정을 모든 수에 대해 적절한 순서로 진행
        while (arr['W'-'A']) {
            ans += '2';
            arr['T'-'A']--;
            arr['W'-'A']--;
            arr['O'-'A']--;
        }
        while (arr['X'-'A']) {
            ans += '6';
            arr['S'-'A']--;
            arr['I'-'A']--;
            arr['X'-'A']--;
        }
        while (arr['S'-'A']) {
            ans += '7';
            arr['S'-'A']--;
            arr['E'-'A']--;
            arr['V'-'A']--;
            arr['E'-'A']--;
            arr['N'-'A']--;
        }
        while (arr['V'-'A']) {
            ans += '5';
            arr['F'-'A']--;
            arr['I'-'A']--;
            arr['V'-'A']--;
            arr['E'-'A']--;
        }
        while (arr['U'-'A']) {
            ans += '4';
            arr['F'-'A']--;
            arr['O'-'A']--;
            arr['U'-'A']--;
            arr['R'-'A']--;
        }
        while (arr['G'-'A']) {
            ans += '8';
            arr['E'-'A']--;
            arr['I'-'A']--;
            arr['G'-'A']--;
            arr['H'-'A']--;
            arr['T'-'A']--;
        }
        while (arr['T'-'A']) {
            ans += '3';
            arr['T'-'A']--;
            arr['H'-'A']--;
            arr['R'-'A']--;
            arr['E'-'A']--;
            arr['E'-'A']--;
        }
        while (arr['O'-'A']) {
            ans += '1';
            arr['O'-'A']--;
            arr['N'-'A']--;
            arr['E'-'A']--;
        }
        while (arr['N'-'A']) {
            ans += '9';
            arr['N'-'A']--;
            arr['I'-'A']--;
            arr['N'-'A']--;
            arr['E'-'A']--;
        }
        // 추가한 숫자들을 오름차순으로 정렬
        sort(ans.begin(), ans.end());
        // 출력 형식에 맞게 출력
        cout << "Case #" << i << ": " << ans << '\n';
    }
}
```

```toc
```