// 날짜문자열을 한국 연월일로 바꿔준다.
export const formatKoreanDate = (dateString) => {
    const date = new Date(dateString);
    const koreanDate = new Date(date.getTime() + (date.getTimezoneOffset() * 60000) + (9 * 3600000)); // KST로 변환
    return koreanDate.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};
