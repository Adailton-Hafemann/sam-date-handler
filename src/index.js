module.exports = {
    convertDateToNewDate,
    newDateWithGMT
};

const moment = require("moment");
function convertDateToNewDate(date) {
    var offset = moment(date);
    var momentDate = moment(date).utcOffset(offset._tzm);
    return new Date(momentDate.get('year'), momentDate.get('month'), momentDate.get('date'), momentDate.get('hour'), momentDate.get('minute'), momentDate.get('second'));
}

function applyDayLightSaving(date, offset, localTimeZone) {
    if (localTimeZone.useDaylightSaving) {
        if (moment(localTimeZone.daylightSavingStartDate).isSameOrBefore(date) && moment(localTimeZone.daylightSavingFinishDate).isSameOrAfter(date)) {
            var offsetDaylightSaving = 60;
            if (localTimeZone.offsetDaylightSaving === 2) {
                return offset + offsetDaylightSaving;
            }
            if (localTimeZone.offsetDaylightSaving === 1) {
                return offset - offsetDaylightSaving;
            }
        }
    }
    return offset;
}

function newDateWithGMT(offset, date, localTimeZone) {
    var dateOffset = moment(date).format();
    if (localTimeZone){
        offset = applyDayLightSaving(date, offset, localTimeZone);
    }
    var timeZoneHours = parseInt(offset / 60);
    var timeZoneMinute = Math.abs((offset % 60));
    var sinal = "-";
    if (timeZoneHours >= 0) {
        sinal = "+";
    }
    var minute = convertTimeZineToGMTMinute(timeZoneMinute);
    var hour = convertTimeZineToGMTHour(timeZoneHours);
    return dateOffset.substring(0, 19) + sinal + hour + ":" + minute;
}

function convertTimeZineToGMTMinute(timeZoneMinuteEnd) {
    if (timeZoneMinuteEnd < 10) {
        return "0" + timeZoneMinuteEnd;
    } else {
        return timeZoneMinuteEnd;
    }
}

function convertTimeZineToGMTHour(timeZoneHours) {
    if (timeZoneHours >= 0) {
        if (timeZoneHours < 10) {
            return "0" + timeZoneHours;
        } else {
            return timeZoneHours;
        }
    } else {
        if (timeZoneHours > -10) {
            timeZoneHours = (timeZoneHours * (-1));
            return "0" + timeZoneHours;
        } else {
            return timeZoneHours;
        }
    }
}