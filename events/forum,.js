const { Events, ChannelType, EmbedBuilder } = require('discord.js');

module.exports = {
    name: Events.ThreadCreate,
    async execute(thread) {
        try {
            if (thread.parent && thread.parent.type === ChannelType.GuildForum) {
                const embed = new EmbedBuilder()
                    .setTitle('新しいスレッドの作成')
                    .setDescription('メッセージ');

                await thread.send({ embeds: [embed] });
            }
        } catch (error) {
            console.error(`送信エラー: ${error}`);
        }
    },
};