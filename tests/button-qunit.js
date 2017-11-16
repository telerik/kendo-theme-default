module("Button size", {
    setup: function() {
        TestHelper.loadFixture( "/base/tests/fixtures/button.html" );
    },
    teardown: function() {
        //kendo.destroy(QUnit.fixture);
        TestHelper.clearFixture();
    }
});

test("Generic button height should be 30", function() {
    var button = $("#button");
    var buttonHeight = getHeight( button );

    equal( buttonHeight, metrics.button.height );
});
