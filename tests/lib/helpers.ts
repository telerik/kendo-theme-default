/// <reference path="../data/metrics.ts" />

interface Window {
    jQuery: JQueryStatic
    QUnit: QUnit
}

class TestHelper {


    // #region Fields
    static fixture: HTMLElement = null;
    static fixtureID: string = `fixture_${Date.now()}`;
    static $fixture;
    // #endregion


    // #region Methods
    static createFixture(id?: string) {
        var fixture = document.createElement("div");
        fixture.id = id || TestHelper.fixtureID;
        document.body.appendChild(fixture);

        return fixture;
    }
    static loadFixture(url: string) {

        var $ = window.jQuery;

        if (!TestHelper.fixture) {
            TestHelper.fixture = TestHelper.createFixture();
            TestHelper.$fixture = $(TestHelper.fixture);
        }

        $.ajax(url, {
            async: false,
            cache: false,
            success: function(data, status, $xhr) {
                var tmp = document.createElement("_CONTAINER");
                tmp.innerHTML = data;
                $(tmp).find("title, meta, link, style, script").remove();
                tmp.innerHTML = tmp.innerHTML.trim();

                TestHelper.$fixture.append(tmp.innerHTML);

                tmp.innerHTML = "";
                tmp = null;
            },
            error: function() {}
        });
    }
    static clearFixture() {
        TestHelper.fixture.innerHTML = "";
    }
    static removeFixture() {
        TestHelper.clearFixture();
        delete TestHelper.$fixture;
        TestHelper.fixture.remove();
        TestHelper.fixture = null;
    }
    // #endregion


}


(function() {

    // Qunit settings
    QUnit.config.noglobals = true;
    QUnit.config.fixture = "";

    QUnit.testStart(function() {
        TestHelper.fixture = TestHelper.createFixture();
        TestHelper.$fixture = $(TestHelper.fixture);
    });

    QUnit.testDone(function() {
        TestHelper.removeFixture();
    });

})();


// Test methods
function getHeight(element: HTMLElement | JQuery ): Number {
    var $ = window.jQuery;

    return $(element).outerHeight();
}
function getWidth(element: HTMLElement | JQuery ): Number {
    var $ = window.jQuery;

    return $(element).outerWidth();
}
function getSize(element: HTMLElement | JQuery ): {width: Number, height: Number} {
    var $ = window.jQuery;
    var $element = $(element);

    return { width: $element.outerWidth(), height: $element.outerHeight() };
}
