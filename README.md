# Discord DM Bot

بوت Discord لإرسال رسائل خاصة (DMs) لأعضاء السيرفر.

## المتطلبات

- Node.js (الإصدار 16 أو أحدث)
- حساب Discord
- بوت Discord مع Token

## التثبيت

1. قم بتثبيت المكتبات المطلوبة:
```bash
npm install
```

2. أنشئ ملف `.env` وضيف Token البوت:
```
TOKEN=YOUR_BOT_TOKEN_HERE
```

## كيفية الحصول على Bot Token

1. اذهب إلى [Discord Developer Portal](https://discord.com/developers/applications)
2. أنشئ تطبيق جديد (New Application)
3. اذهب إلى قسم "Bot" وأنشئ بوت
4. انسخ الـ Token وضعها في ملف `.env`
5. في قسم "OAuth2 > URL Generator":
   - اختر Scopes: `bot`
   - اختر Bot Permissions: `Send Messages`, `Read Message History`, `View Channels`
   - استخدم الرابط المولد لدعوة البوت إلى السيرفر

## الاستخدام

### إرسال رسالة لجميع الأعضاء:
```
!dmall مرحبا بك في السيرفر!
```

### إرسال رسالة لعضو محدد:
```
!dm @المستخدم مرحبا!
```

**ملاحظة:** يجب أن يكون لديك صلاحية إدارية (Administrator) لاستخدام هذه الأوامر.

## الأوامر المتاحة

- `!dmall <الرسالة>` - إرسال رسالة لجميع الأعضاء في السيرفر
- `!dm @المستخدم <الرسالة>` - إرسال رسالة لعضو محدد

## تشغيل البوت

```bash
npm start
```

أو

```bash
node index.js
```

## النشر على Railway

### الخطوات:

1. **سجّل في Railway:**
   - اذهب إلى [Railway](https://railway.app)
   - سجّل الدخول بحساب GitHub

2. **أنشئ مشروع جديد:**
   - اضغط على "New Project"
   - اختر "Deploy from GitHub repo"
   - اختر المستودع الخاص بك

3. **أضف متغيرات البيئة:**
   - في Railway Dashboard، اذهب إلى "Variables"
   - أضف متغير: `TOKEN` = `YOUR_BOT_TOKEN_HERE`

4. **النشر:**
   - Railway سيقوم تلقائياً بنشر المشروع
   - البوت سيعمل 24/7

### ملاحظات Railway:

- ✅ المشروع جاهز للنشر على Railway
- ✅ تم إضافة `Procfile` و `railway.json`
- ✅ Node.js version محدد في `package.json`

## النشر على GitHub

### الخطوات:

1. **أنشئ مستودع جديد على GitHub**

2. **في Terminal، شغّل:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **ملفات مهمة:**
   - ✅ `.gitignore` - يتجاهل ملفات حساسة
   - ✅ `.env.example` - مثال لملف البيئة
   - ⚠️ **لا ترفع ملف `.env` أبداً!**

## تحذيرات

- ⚠️ **مهم جداً:** لا ترفع ملف `.env` على GitHub! يحتوي على Token سري
- ⚠️ تأكد من تفعيل `SERVER MEMBERS INTENT` و `MESSAGE CONTENT INTENT` في Discord Developer Portal
- ⚠️ تأكد من أن البوت لديه صلاحيات كافية في السيرفر
- ⚠️ بعض المستخدمين قد يمنعون استقبال DMs من البوتات
- ⚠️ Discord يحد من عدد الرسائل المرسلة (rate limiting) - البوت يحتوي على تأخير تلقائي

