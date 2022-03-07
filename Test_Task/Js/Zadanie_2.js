function getDayInfo (date) {
	let arr = date.split('.');
	let tY = arr[2];
	let tM = arr[1];
	let tD = arr[0];
	let datein = new Date(tY,tM-1,tD);
   	let dayWeak = datein.getDay();
   	const days = ['Воскресенье,', 'Понедельник,', 'Вторник,', 'Среда,', 'Четверг,', 'Пятница,', 'Суббота,'];
   	let M = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
   	function getWeekOfMonth(tD,tM,tY) {
        let month = datein.getMonth(tD);
             year = datein.getFullYear(tD,tM,tY);
             firstWeekday = (new Date(year, month, 1).getDay(tD,tM,tY)-1);
             lastDateOfMonth = new Date(year, month + 1, 0).getDate(tD,tM,tY);
             offsetDate = datein.getDate() + firstWeekday - 1;
             i = 1;
             weeksInMonth = i + Math.ceil((lastDateOfMonth + firstWeekday - 7) / 7);
             week = i + Math.floor(Math.abs(offsetDate) / 7);
        if ((tD,tM,tY) || week < 2 + i) return week;
        return week === weeksInMonth ? i + 5 : week;
    };
    console.log (days[dayWeak],getWeekOfMonth(tD,tM,tY),"неделя",M[tM-1],tY,"года");
}
getDayInfo("31.7.2022");