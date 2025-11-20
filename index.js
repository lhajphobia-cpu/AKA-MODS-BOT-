const { Client, GatewayIntentBits, Collection } = require('discord.js');
require('dotenv').config();

// إنشاء العميل (البوت)
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages
    ]
});

// عند اتصال البوت
client.once('ready', () => {
    console.log(`✅ البوت متصل! باسم: ${client.user.tag}`);
    console.log(`📊 البوت في ${client.guilds.cache.size} سيرفر`);
});

// أمر لإرسال رسائل خاصة لجميع الأعضاء
client.on('messageCreate', async (message) => {
    // تجاهل رسائل البوت نفسه
    if (message.author.bot) return;

    // أمر: !dmall <الرسالة>
    if (message.content.startsWith('!dmall')) {
        // التحقق من أن المستخدم لديه صلاحية إدارية
        if (!message.member.permissions.has('ADMINISTRATOR')) {
            return message.reply('❌ يجب أن تكون لديك صلاحية إدارية لاستخدام هذا الأمر!');
        }

        // استخراج الرسالة من الأمر
        const dmMessage = message.content.slice(7).trim();
        
        if (!dmMessage) {
            return message.reply('❌ يرجى كتابة الرسالة! مثال: `!dmall مرحبا بك في السيرفر!`');
        }

        // تأكيد البدء
        const confirmMsg = await message.reply('⏳ جاري إرسال الرسائل...');

        try {
            // الحصول على جميع الأعضاء في السيرفر
            const guild = message.guild;
            await guild.members.fetch(); // جلب جميع الأعضاء
            
            const members = guild.members.cache.filter(member => !member.user.bot);
            let successCount = 0;
            let failCount = 0;

            // إرسال الرسالة لكل عضو
            for (const [id, member] of members) {
                try {
                    await member.send(dmMessage);
                    successCount++;
                    console.log(`✅ تم إرسال رسالة إلى: ${member.user.tag}`);
                    
                    // تأخير صغير لتجنب rate limiting
                    await new Promise(resolve => setTimeout(resolve, 1000));
                } catch (error) {
                    failCount++;
                    console.log(`❌ فشل إرسال رسالة إلى: ${member.user.tag} - ${error.message}`);
                }
            }

            await confirmMsg.edit(`✅ تم إرسال الرسائل!\n✅ نجح: ${successCount}\n❌ فشل: ${failCount}`);
        } catch (error) {
            console.error('خطأ:', error);
            await confirmMsg.edit(`❌ حدث خطأ: ${error.message}`);
        }
    }

    // أمر: !dm <@المستخدم> <الرسالة>
    if (message.content.startsWith('!dm')) {
        if (!message.member.permissions.has('ADMINISTRATOR')) {
            return message.reply('❌ يجب أن تكون لديك صلاحية إدارية!');
        }

        const args = message.content.slice(4).trim().split(' ');
        const mention = args[0];
        const dmMessage = args.slice(1).join(' ');

        if (!mention || !dmMessage) {
            return message.reply('❌ الاستخدام: `!dm @المستخدم الرسالة`');
        }

        const member = message.mentions.members.first();
        if (!member) {
            return message.reply('❌ لم يتم العثور على العضو!');
        }

        try {
            await member.send(dmMessage);
            message.reply(`✅ تم إرسال الرسالة إلى ${member.user.tag}`);
        } catch (error) {
            message.reply(`❌ فشل إرسال الرسالة: ${error.message}`);
        }
    }
});

// معالجة الأخطاء
client.on('error', (error) => {
    console.error('خطأ في البوت:', error);
});

process.on('unhandledRejection', (error) => {
    console.error('خطأ غير معالج:', error);
});

// تسجيل الدخول
client.login(process.env.TOKEN);

