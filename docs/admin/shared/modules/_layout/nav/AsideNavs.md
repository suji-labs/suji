##AsideNavs
LeftSideBar에 나열되어 있는 List들을 담고 있는 페이지

![Alt text](./list.png)

###navs 배열
* List 각 항목들의 path, name, icon을 저장하는 배열
```
const navs = [
  { path: '/dashboard', name: 'label_dashboard', icon: 'fa fa-dashboard' },
  { path: '/accounts', name: 'label_account', icon: 'fa fa-user' },
  { path: '/categories', name: 'label_category', icon: 'fa fa-tags' },
  { path: '/posts', name: 'label_post', icon: 'fa fa-pencil-square-o' },
  { path: '/admins', name: 'label_admin', icon: 'fa fa-key' },
  { path: '/about', name: 'label_about', icon: 'fa fa-info-circle' }
];
```
###ReactRouter의 Link 변수를 가져옴
```
const { Link } = ReactRouter;
```
###navList 함수
* navs 배열에 저장된  path, name, icon을 적절한 위치에 mapping 시켜줌
```
App.AsideNavs = React.createClass({
  navList() {
    return navs.map((item, i) => {
      return (
        <Link key={i} to={item.path}>
          <i className={item.icon}></i><span>{L(item.name)}</span>
        </Link>
      )
    });
  },
```
###render 함수
* navList 함수를 실행 시킴
```
  render() {
    return (
      <div id="nav-main">
        <nav className="links">
          {this.navList()}
        </nav>
      </div>
    )
  }
});
```