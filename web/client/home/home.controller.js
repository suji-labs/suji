/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('HomeController', function ($scope, $reactive, $state) {
    $reactive(this).attach($scope);

    this.subscribe('store');

    if (Store.find().count() === 0) {
        console.log("store");
        $state.go('store');
    }
});