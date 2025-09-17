# 🎫 Ticket Writing Guidelines

Clear, well-structured tickets help the team understand, prioritize, and resolve issues efficiently.  
Use this guide when creating **bug reports**, **feature requests**, or **tasks**.

---

## 1. General Principles
- Be **clear, concise, and complete**.
- Use **simple language**; avoid jargon unless necessary.
- Provide **all relevant details** up front to prevent back-and-forth.
- Write tickets so that **anyone on the team** can pick them up.

---

## 2. Ticket Structure

### 🔹 Title
- Keep it short and descriptive.
- Follow the format:  
  - **Bug:** `[Bug] Login button unresponsive on Firefox`  
  - **Feature:** `[Feature] Add password reset functionality`  
  - **Task:** `[Task] Update dependencies in package.json`  

### 🔹 Description
Include:
- **What** is needed or what went wrong
- **Why** it matters
- **Where** (environment, page, module)

### 🔹 Steps to Reproduce (for bugs)
1. Go to `https://example.com/login`
2. Enter valid credentials
3. Click **Login**
4. Observe that nothing happens

### 🔹 Expected vs Actual (for bugs)
- **Expected:** User should be redirected to dashboard  
- **Actual:** No response, page stays on login form  

### 🔹 Acceptance Criteria (for features/tasks)
Define clear conditions of satisfaction, e.g.:
- [ ] User can reset password via email link  
- [ ] Confirmation message appears after reset  
- [ ] Works on Chrome, Firefox, Safari  

### 🔹 Attachments
- Screenshots, logs, error messages
- Links to relevant documentation or designs

---

## 3. Best Practices
- ✅ Use **checklists** for multi-step tasks
- ✅ Add **priority/severity labels** (e.g., P1, Critical, Low)
- ✅ Tag relevant **components/modules**
- ✅ Mention people if input is required (`@username`)
- ✅ Break down large issues into smaller tickets

---

## 4. Example Ticket

**Title:** `[Bug] Login button unresponsive on Firefox`  

**Description:**  
The login button does not trigger authentication when clicked on Firefox (v120). Works fine on Chrome.  

**Steps to Reproduce:**  
1. Open Firefox v120  
2. Navigate to `https://example.com/login`  
3. Enter valid credentials  
4. Click **Login**  

**Expected Result:**  
User is redirected to the dashboard.  

**Actual Result:**  
Nothing happens; user stays on login form.  

**Acceptance Criteria:**  
- [ ] Button works on Firefox, Chrome, Safari  
- [ ] Automated test added for login flow  

**Attachments:**  
![screenshot.png](./images/login-bug.png)  

---

## 5. Common Mistakes to Avoid
- ❌ Vague titles like "It doesn’t work"  
- ❌ Missing reproduction steps  
- ❌ Mixing multiple issues in one ticket  
- ❌ No acceptance criteria for new features  

---

✨ Following these guidelines ensures faster resolution, better collaboration, and higher quality work.
