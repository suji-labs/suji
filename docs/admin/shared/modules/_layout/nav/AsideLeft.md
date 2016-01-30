##AsideLeft
LeftSide Bar 중앙의 화살표 버튼을 클릭하여 LeftSide Bar를 열거나 닫을 수 있게하는 페이지

![Alt text](./open.PNG)
![Alt text](./close.PNG)

###App.AsideLeft 컴포넌트 생성
```
App.AsideLeft = React.createClass({
```
###toggle(), hide() 함수
* 사용 안함
```
  statics: {
     toggle() {
      $('.layout').toggleClass('aside-left-on');
      //const container = document.getElementById('container');
      //container.className = (container.className) ? '' : 'aside-left-on';
    },

    hide() {
      $('.layout').removeClass('aside-left-on');
      //document.getElementById('container').className = '';
    }
  },
```
###getInitialState 함수
* 화살표 Icon 방향 초기 설정
* false -> true 일 경우, 화살표 방향이 반대로 표시됨.
```
  getInitialState() {
    return {
      iconView: false
    }
  },
```
###handleView함수
* $('.layout').toggleClass('aside-icon-view'); LeftSide Bar를 열거나 닫게 해주는 명령어 - JQuery
* this.setState({iconView: ! this.state.iconView}); 중앙의 화살표 버튼 방향을 toggle해주는 명령
```
  handleView() {
    $('.layout').toggleClass('aside-icon-view');
    this.setState({ iconView: ! this.state.iconView });
  },
```
###render 함수
* const icon = this.state.iconView ? 'fa fa-arrow-right' : 'fa fa-arrow-left'; LeftSide Bar가 열리거나 닫힌 상태를 체크하여, 화살표의 방향을 저장하는 변수
* <App.AsideNavs />; LeftSide Bar가 갖고 있는 메뉴 List 출력
* <div className="icon-view-handle"...; 화살표 버튼 생성 및 클릭 시 이벤트 발생 명령
```
  render() {
    const icon = this.state.iconView ? 'fa fa-arrow-right' : 'fa fa-arrow-left';
    return (
      <aside className="left">
        <App.AsideNavs />
        <div className="icon-view-handle" onClick={this.handleView}>
          <i className={icon}></i>
        </div>
      </aside>
    )
  }
});
```