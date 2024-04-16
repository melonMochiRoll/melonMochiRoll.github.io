
# 호이스팅(Hoisting)

호이스팅은 변수나 함수의 선언이 <strong style='color:red'>코드의 맨 위로</strong> 끌어올려지는 과정을 호이스팅이라고 합니다.

이는 var과 let, const에 각각 다르게 적용됩니다.

## <span style='color:red'>var</span>에서의 호이스팅

<hr>

기존에 사용되었던 변수 키워드 var는 선언과 동시에 초기화가 일어나 undefined를 할당하는 특징이 있습니다.
그렇기 때문에 같은 스코프라면 변수가 <strong style='color:red'>할당되기전에 참조</strong>가 가능합니다.

```javascript
console.log(str); // undefined
var str = 'VAR';
console.log(str); // VAR
```

## <span style='color:blue'>let, const</span>에서의 호이스팅

<hr>

ES2015부터 도입 된 let, const도 역시 호이스팅되지만 선언만 위로 끌어올려지고
초기화는 일어나지 않기 때문에 초기화 및 할당이 일어나는 변수 선언문 <strong style='color:red'>이전에 참조 시
에러</strong>가 발생하게 됩니다.

```javascript
console.log(str); // ReferenceError: str is not defined
const str = 'CONST';
console.log(str); // CONST
```

var는 함수 스코프이고 let, const는 블록 스코프이기 때문에 함수가 아닌 블록에서
정의 된 var 변수는 <strong>블록 바깥에서도 유효</strong>하게 되어
의도치 않는 결과가 일어나기도 합니다.

```javascript

var i = 7;

for (var i=0; i<6; i++) {
  /// ...
}

console.log(i); // 6
```

var은 할당 전 <strong>불필요한 접근</strong>을 허용하고 <strong>문맥과 어울리지 않는 동작</strong>을 하는 등
부작용이 일어날 가능성이 크기 때문에 현재는 <strong style='color:red'>사용하지 않는 것</strong>을 권장합니다.


## 함수에서의 호이스팅

<hr>

함수를 정의하는 방법은 두 가지가 있습니다.

```javascript
// 함수 선언식
function func1() {
  //...
}

// 함수 표현식
const func2 = () => {
  //...
};
```

위의 두가지 방법은 동일하게 동작하나 호이스팅에서의 차이가 존재합니다.
함수 선언식은 호이스팅되어 선언문에 도달하기 전에 호출이 가능합니다.

```javascript
func1(); // call;

function func1() {
  console.log('call');
}
```

반면에 함수 표현식은 const 변수와 비슷하게 동작하게 되어
선언문 이전에 호출 시 에러가 발생하게 됩니다.

```javascript
func2(); // ReferenceError: func2 is not defined

const func2 = () => {
  console.log('call');
};
```

두 방법 중 어느 방법을 써야하는지는 개발 환경에 따른<br>
<strong>일관성</strong>있는 기준을 정해야 한다고 생각합니다.