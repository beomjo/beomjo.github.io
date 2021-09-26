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
        "title": "Jekyll, minimal-mistakes 테마를 적용하기",
        "excerpt":"설정 Github Pages 호스팅을 위해 ${GITHUB_ID}.github.io 라는 이름으로 리파지토리를 생성해야 한다 Gem을 이용해서 Jekyll 을 설치한다 테마 적용 minimal-mistake 빠른 시작 가이드를 참고하여 진행한다. minimal-mistake Repository에서 소스를 가져와 옮긴다. 옮긴 후 다음 과정을 진행한다. 불필요 내용 제거 minimal-mistakes-jekyll repository에서 소스를 가져왔다면 불필요한 내용을 제거한다. .editorconfig .gitattributes .github /docs /test CHANGELOG.md...","categories": ["Blogs"],
        "tags": ["Jekyll","minimal-mistakes"],
        "url": "/blogs/create-blog/",
        "teaser": "/assets/images/bio-photo.jpg"
      }]
