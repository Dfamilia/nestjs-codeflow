/* eslint-disable prettier/prettier */
let dogsDb: any = [];

export const setDogsDb = (dogs: any) => {
  if (Array.isArray(dogs)) {
    dogsDb = [...dogs];
  } else {
    dogsDb.push(dogs);
  }
};

export const getDogsDb = () => dogsDb;
