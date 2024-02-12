import { Tokens } from "@pandacss/dev";
import { Recursive } from "@styled-system/types/composition";

type _TokenValue<T extends Record<string, unknown>> = {
  [K in keyof T]: K extends string | number
    ? K extends "value"
      ? ""
      : T[K] extends Record<string, unknown>
      ? `${K}.${_TokenValue<T[K]>}`
      : `${K}`
    : never;
}[keyof T];
type TokenValue<T extends Record<string, unknown>> =
  _TokenValue<T> extends `${infer V}.` ? `{${V}}` : never;

type SemanticToken<T extends Record<string, unknown>> = Recursive<{
  value: {
    base: TokenValue<T>;
    _dark?: TokenValue<T>;
  };
}>;

export const semanticTokens =
  <T extends Tokens>(_: T) =>
  <Value extends SemanticToken<T>>(definition: Value): Value =>
    definition;
