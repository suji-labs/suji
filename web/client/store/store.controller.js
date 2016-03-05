/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('StoreController', function ($scope, $reactive) {
    $reactive(this).attach($scope);

    if (Store.find().count() === 0) {
        console.log("store");
        $state.go('store');
    }
});