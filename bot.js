const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'TRKYE.aternos.me',  // Sunucu adresi
  port: 56944,               // Port
  username: 'botUsername',   // Bot kullanıcı adı
  password: 'botPassword'    // Eğer varsa şifre
});

bot.on('spawn', () => {
  console.log('Bot sunucuya başarıyla bağlandı!');
  // Bot hareket etmeyecek, sadece bağlandığını bildirecek
});

bot.on('error', (err) => {
  console.log('Botta hata oluştu:', err);
});

bot.on('end', () => {
  console.log('Bot bağlantısı kesildi.');
});
