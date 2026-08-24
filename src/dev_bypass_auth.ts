import { env } from "bun";

export const BYPASS_AUTH = (() => {
  if (env.DEV_BYPASS_AUTH === "true") {
    if (env.NODE_ENV === "development") {
      console.warn("⚠⚠警告⚠⚠\tDEV_BYPASS_AUTH環境変数が有効化されました。");
      console.warn("　　　　　　\t全ての認証機構は無効化されます。");
      console.warn("　　　　　　\t絶対に本番環境・公開環境で有効化しないでください。");
      return true;
    } else {
      console.error("エラー:\t開発環境ではない環境でDEV_BYPASS_AUTH環境変数が宣言されました。");
      console.error("    \tDEV_BYPASS_AUTH環境変数を削除してください。");
      console.error("    \t有効化したい場合、NODE_ENV環境変数にdevelopmentを設定してください。");
      process.exit(1);
    }
  }
  return false;
})();
