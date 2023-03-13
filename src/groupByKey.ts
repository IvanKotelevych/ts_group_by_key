type GroupsMap<T> = {
  [key: string]: T[];
};

interface Books {
  'author': string,
  'country': string,
  'imagitemink': string,
  'language': string,
  'pages': number,
  'title': string,
  'year': number,
}

interface Students {
  'name': string,
  'surname': string,
  'age': number,
  'married': boolean,
  'grades': number[],
}

type Result = Books & Students;

export function groupByKey(
  items: Result[],
  key: string,
): GroupsMap<Result> {
  const result: GroupsMap<Result> = {};

  items.forEach((item: any) => {
    if (!result[item[key]]) {
      result[item[key]] = [item];
    } else {
      result[item[key]].push(item);
    }
  });

  return result;
}
