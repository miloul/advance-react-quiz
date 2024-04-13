# 2024 상반기 해달 리액트 코스

먼저 `#2_이름`과 `#2_이름_working`으로 브랜치를 만들어주세요

`#2_이름_working` 브랜치의 readme에서 각 문제의 하단에 정답을 적어 수정한 후(커밋),

PR를 만들고, 제목은 **[n주차/이름] React 기초 과제** 로 만들어주세요

Reviewers에는 miloul을, Assignees엔 자기 자신을, Lable엔 Quiz 라벨과 자기 이름 라벨을 추가해주세요

제출 후 제가 확인하여 approve 할 시, `#2_이름` 으로 머지해주시면 됩니다 😉

과제 제출에 대해서 모르는 부분이 있다면 리액트 코스 단톡방에 편하게 물어봐주세요 😊

과제 마감은 과제가 나간 다음주 월요일 23:59입니다

퀴즈 과제에 대한 답안은 `#2_quiz_answer` 브랜치에 과제 마감 후 올라갑니다 (화요일 14:00 이전)

해당 답안에 대해 확인했다면 복습 차원으로 한번 더 읽어보시고 approve 해주세요 ㅎㅎ


## 퀴즈 과제

### 1. 아래 Javascript 코드를 Typescript와 styled component를 사용하는 코드로 변경해주세요
```
const Title = (title) => {
  return (
    <div style={{ fontSize: "50px", backgroundColor: "blue", color: "white" }}>
      {title}
    </div>
  );
};

Title.defaultProps = {
  title: "안녕",
};

Title.propTypes = {
  title: PropTyepes.string,
};

export default Title;```
