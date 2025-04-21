import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('Deve fazer login com sucesso e redirecionar', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Preenche usuário e senha
  await page.fill('#user-name', process.env.LOGIN_USER || '');
  await page.fill('#password', process.env.LOGIN_PASS || '');

  // Clica no botão de login
  await page.click('#login-button');

  // Espera o redirecionamento para a nova página
  await page.waitForURL('**/inventory.html');

  // Valida que está na página correta após o login
  await expect(page).toHaveURL(/.*inventory.html/);
});
