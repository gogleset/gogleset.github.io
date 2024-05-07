export function convertSpaceToHyphen(str: string): string {
  // 문자열에서 공백 문자를 하이픈으로 대체
  const result = str.replace(/\s+/g, "-");

  return result;
}
export function extractDate(dateString: string): string {
  // year-month-day 형식으로 날짜 형식 맞추기
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function removeMdFileExtension(filePath: string): string {
  // .md 파일형식 삭제
  return filePath.replace(/\.md$/i, "");
}
