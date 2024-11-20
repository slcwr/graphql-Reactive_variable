// cypress/e2e/login.cy.ts
describe('ログインテスト', () => {
    beforeEach(() => {
      // 各テストの前にデータベースをリセット
      cy.exec('npx prisma db seed')  // テストデータを投入
    });
  
    it('ログインが成功するケース', () => {
      // ログインページにアクセス
      cy.visit('http://localhost:3000/login');
  
      // フォームに入力
      cy.get('[data-testid="username-input"]').type('testuser');
      cy.get('[data-testid="password-input"]').type('password123');
  
      // ログインボタンをクリック
      cy.get('[data-testid="login-button"]').click();
  
      // ダッシュボードにリダイレクトされることを確認
      cy.url().should('include', '/dashboard');
  
      // ローカルストレージにトークンが保存されていることを確認
      cy.window().its('localStorage.token').should('exist');
    });
  
    it('ログインが失敗するケース - パスワードが間違っている', () => {
      cy.visit('http://localhost:3000/login');
  
      cy.get('[data-testid="username-input"]').type('testuser');
      cy.get('[data-testid="password-input"]').type('wrongpassword');
      cy.get('[data-testid="login-button"]').click();
  
      // エラーメッセージが表示されることを確認
      cy.get('[data-testid="error-message"]')
        .should('be.visible')
        .and('contain', 'Invalid password');
    });
  });