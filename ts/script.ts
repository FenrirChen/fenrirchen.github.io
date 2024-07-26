const formatDate = (dateObj: Date): string => {
  const reducedDateNum = (dateNum: number): string => dateNum.toString().padStart(2, "0");

  const year: string = dateObj.getFullYear().toString();
  const month: string = reducedDateNum(dateObj.getMonth() + 1);
  const day: string = reducedDateNum(dateObj.getDate());
  const hours: string = reducedDateNum(dateObj.getHours());
  const minutes: string = reducedDateNum(dateObj.getMinutes());
  const seconds: string = reducedDateNum(dateObj.getSeconds());
  return `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
};

const daysSinceYear2000 = (dateStr: string): number => {
  const curDate: Date = new Date(dateStr);
  if (isNaN(curDate.getTime())) {
    throw new Error("Invalid date string");
  }

  const startDate: Date = new Date(2000, 0, 1);
  const diffInDays: number = Math.ceil((curDate.getTime()
    - startDate.getTime()) / (1000 * 60 * 60 * 24));
  return diffInDays;
};

document.addEventListener("DOMContentLoaded", () => {
  // 主函数
  // 这里的内容会在网页加载完毕后执行
});
