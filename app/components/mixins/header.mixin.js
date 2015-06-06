(function() {
    "use strict";
    var React = require("react");
    var HeaderMixin = {
        getHeader: function(title) {
            var header = <header id="page-header" className="clearfix">
                    <div className="container">
                        <h2>{title}</h2>
                    </div>
                </header>;

            return header;
        }
    }

    module.exports = HeaderMixin;
})();
