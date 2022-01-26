function *idGenerator(count: number) {
  let id = 0;
  while (id < count) {
    yield id++;
  }
}

const generator = idGenerator(100000);

export const getId = () => {return 'id-' + String(generator.next().value)}
