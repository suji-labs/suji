var extend = function(child, parent) {
        for (var key in parent) {
            if (hasProp.call(parent, key)) child[key] = parent[key];
        }

        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    },
    hasProp = {}.hasOwnProperty;

Router.map(function() {
    return this.route('about', {
        path: "/about",
        controller: "aboutController"
    });
});

this.aboutController = (function(superClass) {
    extend(aboutController, superClass);

    function aboutController() {
        return aboutController.__super__.constructor.apply(this, arguments);
    }

    return aboutController;

})(RouteController);

_.extend(Template.about, {
    rendered: function() {
        console.log("about is rendered");
    }
});