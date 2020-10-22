import moment from 'moment';

const formatDate = (date: string): string => moment(date).format('DD/MM/YYYY');

export default formatDate;
