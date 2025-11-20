# دليل النشر - Discord DM Bot

## النشر على Railway

### المتطلبات:
- حساب GitHub
- حساب Railway (مجاني)
- Discord Bot Token

### الخطوات:

1. **رفع المشروع على GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **إنشاء حساب على Railway:**
   - اذهب إلى [railway.app](https://railway.app)
   - سجّل الدخول باستخدام GitHub

3. **إنشاء مشروع جديد:**
   - اضغط على "New Project"
   - اختر "Deploy from GitHub repo"
   - اختر المستودع الخاص بك

4. **إضافة متغيرات البيئة:**
   - في Railway Dashboard، اضغط على المشروع
   - اذهب إلى "Variables" أو "Environment"
   - أضف متغير جديد:
     - **Name:** `TOKEN`
     - **Value:** `YOUR_BOT_TOKEN_HERE` (ضع Token البوت هنا)

5. **النشر:**
   - Railway سيقوم تلقائياً بنشر المشروع
   - انتظر حتى يكتمل النشر (ستظهر رسالة "Deployed")
   - البوت سيعمل الآن 24/7!

### إعدادات Railway المهمة:

- ✅ تم إضافة `Procfile` - يخبر Railway كيف يشغل البوت
- ✅ تم إضافة `railway.json` - إعدادات إضافية
- ✅ Node.js version محدد في `package.json`

### التحقق من أن البوت يعمل:

1. افتح Discord
2. تحقق من أن البوت متصل (Online)
3. جرّب الأمر: `!dmall مرحبا`

---

## النشر على GitHub

### الخطوات:

1. **أنشئ مستودع جديد:**
   - اذهب إلى [GitHub](https://github.com)
   - اضغط على "New repository"
   - اختر اسم للمستودع
   - **لا** تضع README أو .gitignore (موجودان بالفعل)

2. **ارفع المشروع:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Discord DM Bot"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **ملفات مهمة:**
   - ✅ `.gitignore` - يتجاهل ملفات حساسة مثل `.env`
   - ✅ `.env.example` - مثال لملف البيئة (آمن للرفع)

### ⚠️ تحذيرات أمنية:

- ❌ **لا ترفع ملف `.env` أبداً!** يحتوي على Token سري
- ✅ استخدم `.env.example` كقالب
- ✅ تأكد من أن `.env` موجود في `.gitignore`

---

## استكشاف الأخطاء

### البوت لا يعمل على Railway:

1. تحقق من متغيرات البيئة (TOKEN)
2. تحقق من Logs في Railway Dashboard
3. تأكد من تفعيل Intents في Discord Developer Portal

### خطأ في النشر:

1. تحقق من أن جميع الملفات موجودة
2. تأكد من أن `package.json` صحيح
3. تحقق من Logs في Railway

---

## روابط مفيدة:

- [Railway Documentation](https://docs.railway.app)
- [Discord Developer Portal](https://discord.com/developers/applications)
- [GitHub Documentation](https://docs.github.com)

