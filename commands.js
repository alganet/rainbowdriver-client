var rainbowDriver = rainbowDriver || {};

(function () {
    "use strict";

    rainbowDriver.commands = {
        click: function clickElement(data) {
            var element = document.querySelector(data.selector),
                rect = element.getClientRects()[0],
                event;

            if (!element) {
                return false;
            }

            event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, false, window, 1,
                (rect.left + element.clientWidth / 2),
                (rect.top + element.clientHeight / 2),
                (rect.left + element.clientWidth / 2),
                (rect.top + element.clientHeight / 2),
                false, false, false, false, /* keys */
                0, /* button */
                element);

            element.dispatchEvent(event);

            return true;
        },

        getValue: function getValue(data) {
            var element = document.querySelector(data.selector);

            if (!element) {
                return false;
            }

            var response = JSON.stringify({
                name: 'getElementText',
                value: element.textContent
            });

            return response;
        },

        sendKeysToElement: function sendKeysToElement(data) {
            var element = document.querySelector(data.selector);

            if (!element) {
                return false;
            }

            element.value = data.value;

            var response = JSON.stringify({
                name: 'sendKeysToElement',
                value: "ok"
            });

            return response;
        }
    };
})();
