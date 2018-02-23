# NWM
NodeJS Webkit and Meteor

## setup

먼저 미티어가 설치되어있어야한다.

미티어관련정보 [https://docs.meteor.com/](https://docs.meteor.com/)

깃에서 내려받음 다음 프로잭트 루트에서 다음과 같이 명령어 실행한다.
```shell
meteor npm install
```
이렇게 하면 nwjs가 설치될 것이다.

#### *주의사항
sdk 버전으로 설치되지 않았다면, 기본적인 바이너리는 디버깅창이 열리지 않는다. 개발용으로 사용하기 위해서는 디버깅용 바이너리를 설치해야한다.
빌드타입이 normal,sdk,nacl 3가지가 있는데 그중에 sdk를 선택하여 설치한다.

```shell
meteor npm install nw --nwjs_build_type=sdk
```
또는 

```shell
meteor npm install nw@0.28.0-sdk
```

## 실행하기

/meteor 디랙토리로 이동하여 아래 명령어를 실행한다.
```shell
meteor npm install
meteor npm start
```
install은 최초 한번한 한다.

미티어 서버가 동작을 시작하면 커멘드창을 하나 더 열고 프로잭트루트(/)에서 nwjs를 실행시킨다.
```shell
meteor npm start
```



