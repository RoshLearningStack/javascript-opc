'use strict';

(function() {

    function findAlerts(logData) {
        let regex = /ERROR:/;

        return regex.exec(logData);
    }

    let logData = 'INFO:ok;ERROR:Something broke;';
    let result = findAlerts(logData);

    display(result);

})();