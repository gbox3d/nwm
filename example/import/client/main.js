// 참고 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import

import {foo,bar} from './foo' //모듈에서 항목을 하나씩 가져다 쓰기
import topof_foo from  './foo' //전체 항목을 topof_foo 객체로 묶어서 가져다 쓰기
import {kaa as kar} from  './foo' //별명으로 외부모듈 접근하기

import topof_bar from './bar'

foo();

console.log(bar)

console.log(topof_foo)

console.log(topof_bar.bar())

topof_foo.foo()

console.log(topof_foo.bar)

window.onload = ()=> {
  document.querySelector('#test').innerText = bar + ' and ' + kar;
}