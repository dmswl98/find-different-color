<div align=center>

# 🕹️ React 상태관리 라이브러리 사용하지 않고 다른색깔 찾기 게임 만들어보기

<img src='https://oopy.lazyrockets.com/api/rest/cdn/image/176fa361-35e4-4982-afd6-31737192047c.png' width='500px'/>

</br >

<video src='https://github.com/prgrms-web-devcourse/Team-JJINSA-HyperLink-FE/assets/76807107/643e17b3-f7d0-4748-97f0-618c50a4d792' />

</div>

</br >

## 요구 사항

- [x] `Math.pow(Math.floor((stage/2) + 1), 2)`개의 사각형이 표시되며, 그 중 하나만 색깔이 다릅니다.
- [x] 한 stage의 제한 시간은 15초입니다.
- [x] 색이 다른 사각형(정답)을 클릭한 경우 아래 변경사항이 적용됩니다.
  - [x] 다음 스테이지로 넘어갑니다.
  - [x] `stage * stage * 남은시간` 만큼의 score가 누적됩니다.
- [x] 오답을 클릭한 경우 아래 변경사항이 적용됩니다.
  - [x] 현재 stage의 남은 시간이 3초 줄어듭니다.
- [x] 남은 시간이 0초 이하가 되면 게임이 종료됩니다. 최종 stage와 누적 score를 출력하고, 새로운 게임을 시작할 수 있습니다.
- [x] stage가 올라갈수록 정답과 오답의 색상 차이가 줄어듭니다.

</br >

## 구현 조건

- [x] React Framework를 사용할 것
- [x] unction Component를 활용할 것
- [x] Javascript보다는 Typescript를 활용할 것
- [x] 서버에 배포할 것 (Vercel과 같은 서비스를 이용해보세요)
- [x] Context, Redux, Mobx, Recoil 등 상태관리 도구를 사용하지 않을 것
