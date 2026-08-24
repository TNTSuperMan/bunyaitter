import { env } from "bun";

export const BYPASS_AUTH = (() => {
  if (env.DEV_BYPASS_AUTH === "true") {
    if (env.NODE_ENV === "development") {
      console.warn("⚠⚠警告⚠⚠\t環境変数DEV_BYPASS_AUTHが有効化されました。");
      console.warn("　　　　　　\t全ての認証機構は無効化されます。");
      console.warn("　　　　　　\t絶対に本番環境・公開環境で有効化しないでください。");
      return true;
    } else {
      console.error("エラー:\t開発環境ではない環境で環境変数DEV_BYPASS_AUTHが宣言されました。");
      console.error("    \t環境変数DEV_BYPASS_AUTHを削除してください。");
      console.error("    \t有効化したい場合、環境変数NODE_ENVにdevelopmentを設定してください。");
      process.exit(1);
    }
  }
  return false;
})();

const valid = <Val>(envname: string, val_fn: (envval: string) => Val, is_valid: (v: Val) => boolean): Val => {
  if (env[envname] === undefined) {
    throw new TypeError(`環境変数${envname}が定義されていません`);
  }
  const val = val_fn(env[envname]);
  if (is_valid(val)) {
    return val;
  } // else
  throw new TypeError(`環境変数${envname}の値が不適切です`);
}

export const PORT = valid<number>("PORT", PORT => Number(PORT), port => Number.isInteger(port) && 0 <= port && port < 65536);
