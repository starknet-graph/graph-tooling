export const source = ({ startBlock }: { startBlock?: string }) =>
  `startBlock: ${startBlock ?? '0'}`;

export const mapping = () => `
      apiVersion: 0.0.5
      language: wasm/assemblyscript
      entities:
        - ExampleEntity
      blockHandlers:
        - handler: handleBlock
      file: ./src/contract.ts`;
