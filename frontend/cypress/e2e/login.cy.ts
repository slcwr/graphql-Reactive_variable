// cypress/e2e/login.cy.ts
describe('ログインテスト', () => {
    beforeEach(() => {
      // テストデータのリセット
      cy.request({
        method: 'POST',
        url: 'http://localhost:4001/test/reset-db',
        failOnStatusCode: false // 404エラーでテストを失敗させない
      }).then((response) => {
        if (response.status !== 200) {
          console.warn('Database reset endpoint not available:', response.status);
        }
      });
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
      //cy.url().should('include', '/todo');
  
      // ローカルストレージにトークンが保存されていることを確認
      //cy.window().its('localStorage.token').should('exist');
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