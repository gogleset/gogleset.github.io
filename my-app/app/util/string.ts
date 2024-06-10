export function convertSpaceToHyphen(str: string): string {
  // 1. 특수문자를 공백으로 변환
  const withoutSpecialChars = str.replace(/[^가-힣\w\s]/g, "");

  // 2. 공백을 하이픈으로 변환
  const result = withoutSpecialChars.split(" ").join("-");
  // table of contents에선 .과 대문자, (, ), [, ], , 문자를 모두 parsing하지 않는다.
  return result.toLowerCase();
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
