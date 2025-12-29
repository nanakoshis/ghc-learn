class IndexController {
    static home(req, res) {
        res.send('Hello, World!');
    }

    // ここに日付・日時・曜日を表示するアクションを追加する
    static about(req, res) {
        const now = new Date();

        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        const formattedDate = now.toLocaleDateString('ja-JP', options);
        const formattedTime = now.toLocaleTimeString('ja-JP');

        res.send(`今日は ${formattedDate} で、現在の時刻は ${formattedTime} です。`);
    }
}

module.exports = IndexController;