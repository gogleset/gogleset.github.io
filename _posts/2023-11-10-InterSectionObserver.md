---
title: "React에서 viewport 내 요소 감지하기"
author: Jin
date: 2023-11-10 10:55:00 +0800
categories: "React"
tag: [react, intersectionObserver, js]
toc: true
comments: true
---

# React에서 viewport 내 요소 감지하기

---

## IntersectionObserever란?

`new IntersectionObserver()`를 통해 생성된 인스턴스는 관찰할 대상을 지정합니다. 관찰이란, 브라우저 내 viewport내에 요소를 감지하는 것을 뜻합니다. 즉, 어떠한 가시적 요소가 사용자에게 보여지는지 아닌지를 판별할 수 있게 됩니다.

기본적인 예제 및 개념은 mdn 및 좋은 [블로그 글](https://heropy.blog/2019/10/27/intersection-observer/)이 있습니다. 참고하시면서 적용하시면 될 것 같습니다.

### Custom Hook으로 Viewport 내 요소 감지하기

어떠한 DOM element 하나를 props로 받아 해당 DOM이 viewport내에 표시되는지 확인하는 custom hook입니다.

```tsx
import { useEffect, useState } from "react";
import type { RefObject } from "react";

const useIsInViewport = (ref: RefObject<HTMLElement>) => {
  // DOM이 다 보이는지 안보이는지 판단
  const [isFullInViewport, setIsFullInViewport] = useState(false);
  // DOM이 조금만 보이는지 안보이는지 판단
  const [isInViewport, setIsInViewport] = useState(false);
  // DOM이 얼마나 보이는지 수치화
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  // 1. useEffect의 의존성 배열은 빈 배열로 DOM 마운트 시에 실행됩니다.
  useEffect(() => {
    // 2. 만약 props로 받은 ref의 current객체가 없다면 리턴합니다.
    if (!ref.current) {
      return;
    }
    // 3. ref의 current객체가 있다면 observer객체를 생성합니다.
    const observer = new IntersectionObserver(
      (entries) => {
        // 5. observer객체가 보이기 시작하면
        if (entries[0].intersectionRatio > 0) {
          // state 수정
          setIsInViewport(true);
          setIntersectionRatio(entries[0].intersectionRatio);
        } else {
          setIntersectionRatio(0);
          setIsInViewport(false);
        }
        // 6. observer객체가 다 보이면
        if (entries[0].intersectionRatio === 1) {
          if (ref.current) {
            setIsFullInViewport(true);
          }
        } else {
          setIsFullInViewport(false);
        }
      },
      { threshold: [0, 0.3, 0.5, 0.7, 1] }
    );
    // 4. 생성한 객체를 observing합니다.
    observer.observe(ref.current);
    return () => {
      // 7. DOM이 unmount 시 모든 observing을 해제합니다.
      observer.disconnect();
    };
  }, []);

  return { isFullInViewport, isInViewport, intersectionRatio };
};

export default useIsInViewport;
```

### 활용하기

/App.css

```css
h1 {
  margin-bottom: 100vh;
}
.box {
  width: 100%;
  height: 200px;
  border: 1px solid;
  margin-bottom: 30px;
}
```

/App.tsx

```tsx
import "./App.css";
import { useRef } from "react";
import useIsInViewport from "./hooks/useIsInViewport";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const { isFullInViewport, isInViewport, intersectionRatio } =
    useIsInViewport(ref);
  console.log(isFullInViewport, isInViewport, intersectionRatio);
  return (
    <main>
      <h1>intersactionObserver</h1>
      <div className="box" ref={ref}></div>
    </main>
  );
}

export default App;
```

- ref 객체를 넣어주고 그 객체에 대한 viewport 정보를 추출했습니다.
  ![screenshot3](/assets/img/intersection.gif)
  ![screenshot](/assets/img/IntersectionConsole.png)

  콘솔이 많이 찍히는 이유는 strict-mode와 custom hook 내의 threshold 속성 때문입니다. threshold 배열값을 수정하시면 원하시는만큼 감지할 수 있습니다.

  ### 활용하여 만든 무한스크롤

  ![screenshot2](/assets/img/intersection2.gif)
