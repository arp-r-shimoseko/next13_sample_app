import styles from './page.module.css';

export default function Test() {
  return (
    <div className={styles.testPage}>
      <h1>This is the Test Page</h1>
      <p>これはルーティングテスト用ページ！</p>
    </div>
  );
}
