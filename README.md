# SUJI [![Build Status](https://travis-ci.org/naver-d2-suji/suji.svg)](https://travis-ci.org/naver-d2-suji/suji)
> 소상공인들이 수지 맞기를 기원하는 웹 기반 오픈소스 POS 시스템
![SUJI](https://cloud.githubusercontent.com/assets/7614353/12139794/1329ce44-b4a6-11e5-90a2-dd51d039e01d.png)
- [**소개 영상**](https://youtu.be/fMRXjG3Plu8)
- GIF TEST
![](https://cloud.githubusercontent.com/assets/7614353/13712462/1cc694fc-e807-11e5-90b4-de1691cf7fef.gif)

&nbsp;
## REST API
> REST API Definition

| Feature |	Method	| Request URL | Todo Status |
| :------------ |	:-------:	| :-----------------| :--------: |
| 회원가입 |	POST	| Meteor Library | complete |
| 로그인 |	GET	| Meteor Library | complete |
| 카테고리 목록 |	GET	| localhost:3000/category | complete |
| 카테고리 추가 |	POST	| localhost:3000/category | complete |
| 카테고리 제거 |	POST	| localhost:3000/category | complete |
| 카테고리별 메뉴 목록 |	GET	| localhost:3000/manage | complete |
| 메뉴 목록 |	GET	| localhost:3000/manage | complete |
| 메뉴 추가 |	POST	| localhost:3000/manage | complete |
| 메뉴 삭제 |	POST	| localhost:3000/manage | complete |
| 구매 목록 |	GET	| http://localhost:3000/manage | complete |
| 구매 리스트 추가 |	POST	| http://localhost:3000/startpos | complete |
| 구매 리스트 삭제 |	POST	| http://localhost:3000/startpos | complete |
| 일별 매출 현황 |	GET	| http://localhost:3000/purchase | complete |
| 직원 목록 보기 |	GET	| NULL | TODO |
| 직원 추가 |	POST	| NULL | TODO |
| 직원 삭제 |	DELETE	| NULL | TODO |
| 직원 추가 |	UPDATE	| NULL | TODO |
| 바코드 리더 | NULL | NULL | complete |
| 진동벨 | NULL | NULL | complete|


&nbsp;
## Prerequisites
* Node.js
* Meteor
    - *Windows* -  Download and Install [Meteor](https://www.meteor.com/)
    - *Linux/Mac* - `curl https://install.meteor.com/ | sh`

## Development Stack
> 개발 언어 및 스택 소개

- Language : Javascript
- Framework : [Angular](https://angularjs.org/), meteor(https://www.meteor.com/)
- Database : MongoDB

## Execution
```
git clone https://github.com/naver-d2-suji/suji-mr.git
cd suji-mr
git checkout develop
meteor
```

## Reference
- Meteor(https://www.meteor.com/)
- [Yeoman](http://yeoman.io/)
    - [Generator](https://github.com/ndxbxrme/generator-angular-meteor)

## License

2016 [MIT](http://opensource.org/licenses/mit-license.php) © [Dongkyu Lee](http://ledgku.tistory.com), [HyungTak Jin](http://njir.github.io), BoWoon Kim
