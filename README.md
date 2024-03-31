# 2024 상반기 해달 리액트 코스

먼저 `#1_이름`과 `#1_이름_working`으로 브랜치를 만들어주세요

`#1_이름_working` 브랜치의 readme에서 각 문제의 하단에 정답을 적어 수정한 후(커밋),

PR를 만들고, 제목은 **[n주차/이름] React 기초 과제** 로 만들어주세요

Reviewers에는 miloul을, Assignees엔 자기 자신을, Lable엔 Quiz 라벨과 자기 이름 라벨을 추가해주세요

제출 후 제가 확인하여 approve 할 시, `#1_이름` 으로 머지해주시면 됩니다 😉

과제 제출에 대해서 모르는 부분이 있다면 리액트 코스 단톡방에 편하게 물어봐주세요 😊

과제 마감은 과제가 나간 다음주 월요일 23:59입니다

퀴즈 과제에 대한 답안은 `#1_quiz_answer` 브랜치에 과제 마감 후 올라갑니다 (화요일 14:00 이전)

해당 답안에 대해 확인했다면 복습 차원으로 한번 더 읽어보시고 approve 해주세요 ㅎㅎ


## 퀴즈 과제

### 1. React의 컴포넌트는 중첩할 수 있다 (O/X)
O
### 2. 리액트의 특징에 대해서 적으세요(2가지 이상)
1. 변수의 선언이 함수에 가깝다.
2. 컴포넌트의 조합으로 view를 구성한다.
### 3. JSX의 최상위 요소는 한개 이상이어야한다 (O/X)
O /** JSX는 JS xml**/
### 4. 컴포넌트란?
개인적으로 받아들이기로는, 특정 공통된 레이아웃을 나타내는 함수 또는 클래스 형식의 구
### 5. 다음과 같은 버튼 컴포넌트를 아래 사진과 같이 배경색이 파란색이고, 테두리가 없으며, borderRadius가 10px이고, 글자색이 하얀색인 스타일을 추가하세요 (방식은 자유)

```tsx
const Button = () => {
	return (
		<button style={{ backgroundColor : "blue" ,border : "0px", borderRadius : "10px" , color : "white"}}>날 꾸며줘~</button>
	)
}
```

### 6. 아래 코드 ???에 알맞은 값을 넣으세요 (분기와 반복)

6-1. 분기

```tsx
function App() {
	const [visible, setVisible] = useState(false)
    
	return (
    	<div>
		    	// 버튼을 누르면 visible이 !visible로.. (true -> false, false -> true)
        	<button onClick={() => setVisible(!visible)}>toggle</button>
            {visible && (
            	<h1>논리곱으로</h1>
		)}
             {visible ? (
            	<h1>삼항연산자로</h1> )
             : (<h1></h1>)}
        </div>
    )
}
```

6-2. 반복

```tsx
const Board = () => {
	const members = [
		{
			id: 1,
			name: "이승민",
			role: "교육운영진"
		},
		{
			id: 2,
			name: "김재원",
			role: "멤버"
		},
		{
			id: 3,
			name: "이동진",
			role: "멤버"
		},
	]
	
	return (
    	<div>
        	<ul>
        		{members.map((member) => (
            		<li>
                		{member.id} | {member.name} | {member.role}
                	</li>
            	))}
        	</ul>
        </div>
    )
}

export default Board;
```

### 7. 기존 App.tsx에서 p태그 내부를 “Hellow World! - (2024-1) 해달 리액트 코스 000” (000은 자기 이름)로 변경한 후의 화면 스크린샷

![image](https://github.com/miloul/advance-react-quiz/assets/42243993/401671b8-22e1-4d66-9eed-6510aa624ac6)

