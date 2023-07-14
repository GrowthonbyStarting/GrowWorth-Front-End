import moment from 'moment';

export const fixLength = (str) => (str > 9 ? str : `0${str}`);
export function formatDate(date) {
	const dateData = new Date(date);
	return `${dateData.getFullYear()}-${fixLength(dateData.getMonth() + 1)}-${fixLength(
		dateData.getDate()
	)}`;
}
export const timeCompare = (str1, str2) => {
	const time1 = moment(`1970-01-01 ${str1}`);
	const time2 = moment(`1970-01-01 ${str2}`);
	return time2.diff(time1) >= 0;
};
export const dateKorea = (date, y = true) => {
	const d = new Date(date);
	return `${y ? `${d.getFullYear()}년` : ''}${d.getMonth()}월 ${d.getDate()}일(${
		locale.weekdays[d.getDay()]
	})`;
};
export const locale = {
	weekdays: ['일', '월', '화', '수', '목', '금', '토'],
	months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	weekStartsOn: 0
};
export const cookieOptions = {
	httpOnly: true,
	path: '/',
	secure: false,
	maxAge: 10 * 60 * 60
};
export const timeFormat = (date) => {
	const dates = date.split(':');
	return `${dates[0]}:${dates[1]}`;
};
