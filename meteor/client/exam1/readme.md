#promise

워터폴 구현하기
```js

(new Promise((resolve,reject) => {
  
  //비동기 처리
  resolve('ok step1')
  
  })).then(
    value => {
      //value is ok step1
      return new Promise(((resolve, reject) => {
        resolve('ok step2')
      }))
    },
    reason => {      //reject
    }
  ).then( 
    value => {
      //value is ok step2
      return new Promise(((resolve, reject) => {
        resolve('ok step3')
      }))
    },
    reason => {
    }
  ).then( 
    value => {    
    //value is ok step3
    },
    reason => {
    }
  )
  

```

