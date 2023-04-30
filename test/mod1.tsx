export const foo = 1;

const x = {
  foo: 1,
} satisfies Partial<{ foo: number }>;

const y = 1;
const z = (
  <>
    <div data={{ foo: 1 } satisfies typeof x}></div>
  </>
);
