// Polygol Chronos Language Dictionary
window.bcpMap = { EN: 'en-US', JP: 'ja-JP', KO: 'ko-KR', ZH: 'zh-CN' };
var bcpMap = window.bcpMap;

function getAppLanguage() {
    let l = (localStorage.getItem('language') || localStorage.getItem('selectedLanguage') || 'EN').toUpperCase();
    if (l === 'JA') l = 'JP';
    return ['EN', 'JP', 'KO', 'ZH'].includes(l) ? l : 'EN';
}
window.getAppLanguage = getAppLanguage;
var getAppLanguage = window.getAppLanguage;

function t(key, params = {}) {
    const lang = getAppLanguage();
    const dict = window['LANG_' + lang + '_CHRONOS'] || window['LANG_EN_CHRONOS'] || {};
    let str = dict[key] !== undefined ? dict[key] : key;
    if (params) {
        Object.keys(params).forEach(p => {
            str = str.replace(new RegExp('\\{' + p + '\\}', 'g'), params[p]);
        });
    }
    return str;
}
window.t = t;
var t = window.t;

window.LANG_EN_CHRONOS = {
    TITLE: "Chronos",
    ALARM: "Alarm",
    TIMER: "Timer",
    STOPWATCH: "Stopwatch",
    WORLDS: "Worlds",
    ADD_ALARM: "Add Alarm",
    START: "Start",
    STOP: "Stop",
    PAUSE: "Pause",
    LAP: "Lap",
    RESET: "Reset",
    ADD_CLOCK: "Add Clock",
    DISMISS_TIMER: "Dismiss",
    DISMISS_ALARM: "Dismiss",
    TIMER_FINISHED_TITLE: "Timer",
    TIMER_FINISHED_BODY: "Your timer has finished!",
    ALARM_TITLE: "Alarm",
    ALARM_NOTIFICATION_TITLE: "Alarm • {time}"
};

window.LANG_JP_CHRONOS = {
    TITLE: "Chronos",
    ALARM: "アラーム",
    TIMER: "タイマー",
    STOPWATCH: "ストップウォッチ",
    WORLDS: "世界時計",
    ADD_ALARM: "アラームを追加",
    START: "開始",
    STOP: "停止",
    PAUSE: "一時停止",
    LAP: "ラップ",
    RESET: "リセット",
    ADD_CLOCK: "時計を追加",
    DISMISS_TIMER: "閉じる",
    DISMISS_ALARM: "閉じる",
    TIMER_FINISHED_TITLE: "タイマー",
    TIMER_FINISHED_BODY: "タイマーが終了しました！",
    ALARM_TITLE: "アラーム",
    ALARM_NOTIFICATION_TITLE: "アラーム • {time}"
};

window.LANG_KO_CHRONOS = {
    TITLE: "Chronos",
    ALARM: "알람",
    TIMER: "타이머",
    STOPWATCH: "스톱워치",
    WORLDS: "세계 시계",
    ADD_ALARM: "알람 추가",
    START: "시작",
    STOP: "정지",
    PAUSE: "일시정지",
    LAP: "랩",
    RESET: "초기화",
    ADD_CLOCK: "시계 추가",
    DISMISS_TIMER: "닫기",
    DISMISS_ALARM: "닫기",
    TIMER_FINISHED_TITLE: "타이머",
    TIMER_FINISHED_BODY: "타이머가 종료되었습니다!",
    ALARM_TITLE: "알람",
    ALARM_NOTIFICATION_TITLE: "알람 • {time}"
};

window.LANG_ZH_CHRONOS = {
    TITLE: "Chronos",
    ALARM: "闹钟",
    TIMER: "计时器",
    STOPWATCH: "秒表",
    WORLDS: "世界时钟",
    ADD_ALARM: "添加闹钟",
    START: "开始",
    STOP: "停止",
    PAUSE: "暂停",
    LAP: "计次",
    RESET: "重置",
    ADD_CLOCK: "添加时钟",
    DISMISS_TIMER: "关闭",
    DISMISS_ALARM: "关闭",
    TIMER_FINISHED_TITLE: "计时器",
    TIMER_FINISHED_BODY: "计时结束！",
    ALARM_TITLE: "闹钟",
    ALARM_NOTIFICATION_TITLE: "闹钟 • {time}"
};

var LANG_EN_CHRONOS = window.LANG_EN_CHRONOS;
var LANG_JP_CHRONOS = window.LANG_JP_CHRONOS;
var LANG_KO_CHRONOS = window.LANG_KO_CHRONOS;
var LANG_ZH_CHRONOS = window.LANG_ZH_CHRONOS;
