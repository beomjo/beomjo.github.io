var store = [{
        "title": "BOJ 9093. 단어 뒤집기",
        "excerpt":"BOJ 9093. 단어 뒤집기 www.acmicpc.net/problem/9093 문제 문장이 주어졌을 때, 단어를 모두 뒤집어서 출력하는 프로그램을 작성하시오. 단, 단어의 순서는 바꿀 수 없다. 단어는 영어 알파벳으로만 이루어져 있다. 입력 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 문장이 하나 주어진다. 단어의 길이는 최대 20, 문장의 길이는...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-9093/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 9012. 괄호",
        "excerpt":"BOJ 9012. 괄호 문제 괄호 문자열(Parenthesis String, PS)은 두 개의 괄호 기호인 (와 ) 만으로 구성되어 있는 문자열이다. 그중에서 괄호의 모양이 바르게 구성된 문자열을 올바른 괄호 문자열(Valid PS, VPS)이라고 부른다. 한 쌍의 괄호 기호로 된 ( ) 문자열은 기본 VPS이라고 부른다. 만일 x 가 VPS 라면 이것을 하나의 괄호에 넣은 새로운 문자열...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-9012/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 1157. 요세푸스 문제",
        "excerpt":"BOJ 1158. 요세푸스 문제 풀이 큐를 이용하여 요세푸스 순열을 만든다. 먼저 입력으로 N=7이 들어왔을 때 초기 상태로 1부터 7까지 큐에 넣는다. 그 다음  K=3이므로 3번째 사람을 제거해야 하므로 큐에서 순서대로 poll() 한 뒤 다시 offer()로 큐에 넣어준다. 그리고 3번째가 되었을 때 poll() 한뒤 다시 큐에 넣지 않고 출력 버퍼에 저장한다. 다시 반복하여 2번 poll(),...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-1158/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 1406. 에디터",
        "excerpt":"BOJ 1406. 에디터 풀이 커서의 왼쪽과 오른쪽에 각각 Stack으로 관리한다. 먼저 커서는 입력 문장의 끝에 위치하므로  커서 왼쪽 스택에 입력문장을 모두 넣고 시작한다. 입력문자 abcd  그 다음 P x를 수행한다. 왼쪽 스택에 x를 push()한다. 다음 L 명령을 수행한다. 왼쪽으로 커서를 한 칸 이동하게 되므로 왼쪽 스택에서 pop(), 오른쪽으로 push() 그다음 P y를...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-1406/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 1874. 스택수열",
        "excerpt":"BOJ 1874. 스택 수열 ​ 풀이 입력으로 4 3 6 8 7 5 2 1으로 주어졌을 때 먼저 1부터 시작하여 4까지 Stack에 순서대로 push(+)한다. ​ 입력인 4가 되었을 때 Stack에서 pop(-) 또 다음 입력인 3이 되었을 때 Stack에서 pop(-)한다. ​ ​ 다음 입력인 6이 될 때까지 Stack에 다시 push(+) ​...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-1874/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 10799. 쇠막대기",
        "excerpt":"BOJ 10799. 쇠막대기 풀이 레이저는 인접한 괄호쌍()로 표현한다. 쇠막대기의 왼쪽 끝은 여는 괄호(, 오른쪽 끝은 닫는괄호)로 표현한다. 여는 괄호(를 만났을 때는 Stack에 넣어준다. 닫는 괄호 )를 만났을때 Stack.peak()가 여는괄호(일 경우 Stack.pop() 한 후 남은 Stack의 size가 잘린 쇠막대기의 개수가 된다. Stack.peak()가 닫는괄호)일 경우 Stack.pop() 한 후 쇠막대기의 개수를 +1 한다 이때 쇠막대기의...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-10799/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 1676. 팩토리얼 0의 개수",
        "excerpt":"BOJ 1676. 팩토리얼 0의 개수 풀이 0의 개수는 10을 의미하고 10은 2*5로 나타낼 수 있다. 팩토리얼을 소인수 분해하여 2의 개수 5의 개수를 구한다. Java import java.util.Scanner; class Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int n = sc.nextInt(); int countOfTwo = 0; int countOfFive = 0; for (int...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-1676/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 17289. 오큰수",
        "excerpt":"BOJ 17298. 오큰수 풀이 오큰수란 입력된 숫자의 오른쪽에 있는 수들 중 가장 큰 수를 의미한다.  입력이 3 5 2 7 일 때 입력 개수가 4개이므로 0부터 3까지 루프를 돌아준다. i == 0 일 때  stack은 비어있으므로 stack.push i == 1 일때 stack.isNotEmpty &amp;&amp; number(5) &gt; stack.peek().element(3)은 true 이므로  while문을 돌아 answer[0]에 5를 넣는다. 그리고 stack에도 element:5,...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-17289/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 17413. 단어뒤집기2",
        "excerpt":"BOJ 17413. 단어 뒤집기 2 풀이 단어를 뒤집는 방법은 Stack에 순서대로 push 하고 다시 pop 하여 단어를 뒤집는다. 태그 &lt; or' 'or'\\n'를 만나면 만나면 이전까지 Stack에 쌓아놓은 단어들을 모두 pop 한다. import java.io.*; import java.util.Stack; class Main { public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); BufferedWriter...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-17413/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 1929. 소수구하기",
        "excerpt":"BOJ 1929. 소수 구하기 풀이 입력이 1 &lt;= M &lt;= N &lt;= 1,000,000 이므로  소수 찾기  방식을 사용하면 시간 초과가 발생한다 시간 복잡도를 잘 계산하지 않으면 시간 초과가 발생하는것이다. 시간 복잡도를 줄이기 위해 에라토스테네스의 체 [wiki] 알고리즘을 사용한다 1~120까지 수가 있을 때  1을 제외한 지워지지 않은 가장 작은 소수는 2이다. 2의 배수를 모두 제거...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-1929/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 1978. 소수 찾기",
        "excerpt":"BOJ 1978. 소수 찾기 풀이 소수란 1과 자기 자신밖에 존재하지 않는 수 소수 구하기 1 boolean isPrime(int n) { if (n &lt; 2) { return false; } for (int i = 2; i &lt;= n-1; i++) { if (n % i == 0) { return false; } } return true; }  N이 소수가...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-1978/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 2609. 최대공약수와 최소공배수",
        "excerpt":"BOJ 2609. 최대공약수와 최소공배수 풀이 최대 공약수를 구하는 방법 1 int getGCP(int a, int b) { int r = 1; for (int i = 2; i &lt; Math.min(a, b); i++) { if (a % i == 0 &amp;&amp; b % i == 0) { r = i; } } return r; } 2부터 a와...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-2609/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 6588. 골드바흐의 추측",
        "excerpt":"BOJ 6588. 골드바흐의 추측 풀이 골드바흐의 추측 4보다 큰 모든 짝수는 두 홀수 소수의 합으로 나타낼 수 있다. 먼저 소수를 찾아야 하므로 에라 토스트 테네스의 체 알고리즘을 활용하여 범위 내의 모든 소수를 찾는다. 그리고 !check[a] &amp;&amp; !check[b] 조건을 만족하는 a와 b를 찾는다. Java import java.util.Scanner; class Main { public static void main(String[] args) {...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-6588/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 17087. 숨바꼭질 6",
        "excerpt":"BOJ 17087. 숨바꼭질 6 풀이 첫 줄에  N(동생의 수), S(현재 위치)가 주어지고 둘째 줄에 동생들의 위치가 주어진다. 3 3 // 동생의수 3, 현재위치 3 1 7 11 // 동생들의 위치 현재 위치 3에서 동생들의 위치 (1, 7, 11)까지의 각각 거리를 계산하여 배열에 저장한다. 배열에 저장된 현재 위치와의 거리 차이들의 최대 공약수가 이동할 수...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-17087/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 2745, 11005, 1373, 1212, 2089 진법변환하기",
        "excerpt":"BOJ 2473, 11005, 1373, 1212, 2089 진법 변환하기  BOJ 2745. 진법 변환 ( N진법의 수를 10진법으로 변경하기) 풀이 B 진법의 수 N과, B가 주어진다. 10진법을 넘어가는 수는  A:10 B:11 C:12 D:13 .. .. .. Y:34 Z:35 위와 같이 A-Z로 표현한다. ZZZZZ 36을 입력하였다면 36진법으로 표시된 문자열ZZZZZ이므로 입력받은 문자열을 반복문을 통해 char를 처음부터 확인한다. char문자를 그대로 int로 캐스팅하면 ...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-2745-11005-1373-1212-2089/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 9613. GCD 합",
        "excerpt":"BOJ 9613. GCD 합 풀이 첫 줄에는 테스트 케이스 개수 t(1&lt;=t&lt;100)이 주어지고  그다음 줄부터 테스트 케이스를 입력받는다. 첫 줄에 테스트를 할 수의 개수 n (1&lt;n&lt;=100)이 주어지고, 그다음 n개의 수가 주어진다. 4 10 20 30 40 10과 20의 최대공약수, 20과 30의 최대공약수, 30과 40의 최대공약수를 각각 구하여 모두 더한다. import java.util.Scanner; class Main { public static void main(String[]...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-9613/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 11726. 2xn 타일링",
        "excerpt":"BOJ 11726. 2xn 타일링 풀이 d[n] = 2*n 크기의 직사각형을 채우는 방법의 수 앞부분들은 겹치는 부분들로 memo 해놓고 계속 사용하게 되니 점화식 d[n] = d[n-1] + d[n-2] 또한 d가 1일 때 방법은 1개이므로, d[1] = 1 d가 2일 때 방법은 1개이므로, d[2] = 2 Bottom-Up import java.util.Scanner; class Main { public static void...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-11726/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 1463. 1로만들기",
        "excerpt":"BOJ 1463. 1로 만들기 풀이 d[n]= 1로 만드는 연산을 하는 최솟값 점화식 d[n] = min(d[n-1] +1 , d[n2] + 1, d[n3] + 1 )  대략적인 논리로, 그대로 쓰지는 않고 2나 3으로 나누어 떨어지는지 확인 조건문으로 처리 필요 Bottom-Up 입력이 1일때는 어떠한 연산도 할 필요가 없으므로 d[1]에 0을 넣어 시작한다. import java.io.*; import java.util.Scanner;...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-1463/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 9095. 1, 2, 3 더하기",
        "excerpt":"BOJ 9095. 1, 2, 3 더하기 풀이 d[n] = 1, 2, 3의 합으로 나타내는 방법의 수 앞부분들은 겹치는 부분들로 memo 해놓고 계속 사용하게 되니 맨 마지막에 올 수 있는 1, 2, 3의 방법의 수만 찾아보면 된다. d[n] = O + O + O + …. = n 이므로 (n -1...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-9095/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 11052. 카드 구매하기",
        "excerpt":"BOJ 11052. 카드 구매하기 풀이 d[n] = N개의 카드를 갖기 위해 지불해야 하는 금액의 최댓값. 카드 1개를 p[1]에 구매 -&gt; 남은 카드의 수 i-1 -&gt; p[1] + d[i-1] 카드 2개를 p[2]에 구매 -&gt; 남은 카드의 수 i-2 -&gt; p[2] + d[i-2] 카드 3개를 p[3]에 구매 -&gt; 남은 카드의 수 i-3 -&gt; p[3] +...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-11052/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 16194. 카드 구매하기 2",
        "excerpt":"BOJ 16194. 카드 구매하기 2 풀이 d[n] = 카드 N개를 갖기 위한 금액의 최솟값. 카드 1개를 p[1]에 구매 -&gt; 남은 카드의 수 i-1 -&gt; p[1] + d[i-1] 카드 2개를 p[2]에 구매 -&gt; 남은 카드의 수 i-2 -&gt; p[2] + d[i-2] 카드 3개를 p[3]에 구매 -&gt; 남은 카드의 수 i-3 -&gt; p[3] + d[i-3] .....","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-16194/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "BOJ 15990. 1, 2, 3 더하기 5",
        "excerpt":"BOJ 15990. 1, 2, 3 더하기 5 풀이 d[n] =  n을 1, 2, 3으로 나타내는 방법의 수 (두 번 이상 연속 X)  마지막으로 오는 수가 1이면? 그 앞에 올 수 있는 숫자는 2 또는 3이 된다. 마지막으로 오는 수가 2이면? 그 앞에 올 수 있는 숫자는 1 또는 3이 된다. 마지막으로 오는 수가 3이면? 그 앞에 올 수 있는 숫자는 1 또는 2이 된다. 마지막이 1로 끝낫을경우, 2로 끝났을 경우, 3으로 끝났을 경우를 찾아서 2차원 배열에 저장해보자 d[i][j] 1로 끝났을경우 2로 끝났을 경우 3으로 끝낫을 경우 1 1 X X 2 X 1 X 3...","categories": ["BOJ"],
        "tags": ["Algorithm","BOJ"],
        "url": "/boj/boj-15990/",
        "teaser": "/assets/images/bio-photo.jpg"
      },{
        "title": "Jekyll, minimal-mistakes 테마를 적용하기",
        "excerpt":"설정 Github Pages 호스팅을 위해 ${GITHUB_ID}.github.io 라는 이름으로 리파지토리를 생성해야 한다 Gem을 이용해서 Jekyll 을 설치한다 테마 적용 minimal-mistake 빠른 시작 가이드를 참고하여 진행한다. minimal-mistake Repository에서 소스를 가져와 옮긴다. 옮긴 후 다음 과정을 진행한다. 불필요 내용 제거 minimal-mistakes-jekyll repository에서 소스를 가져왔다면 불필요한 내용을 제거한다. .editorconfig .gitattributes .github /docs /test CHANGELOG.md...","categories": ["Blogs"],
        "tags": ["Jekyll","minimal-mistakes"],
        "url": "/blogs/create-blog/",
        "teaser": "/assets/images/bio-photo.jpg"
      }]
