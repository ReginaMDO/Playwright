import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); 

test('Login com credenciais inválidas deve mostrar mensagem de erro', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Preenche com crendenciais incorretas
    await page.fill('#user-name', process.env.LOGIN_USERW || '');
    await page.fill('#password', process.env.LOGIN_PASSW || '');

    // Clica no botão de login
    await page.click('#login-button');

    // Verifica se a mensagem de erro aparece
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Epic sadface'); 
});