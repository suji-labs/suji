/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('CategoryController', function ($scope, $reactive) {
    $reactive(this).attach($scope);
    $scope.now = new Date();

    this.subscribe('category');

    $scope.helpers({
        categoryList: () => {
            return Category.find({});
        }
    });

    $scope.addCategory = () => {
        Category.insert({categoryName: $scope.newCategory});
        $scope.newCategory = null;
    };

    $scope.removeCategory = (item) => {
        Category.remove({_id: item._id});
    };
});