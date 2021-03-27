# Setup tokens

## Discord Bot Token

Note, that only a server admin can bring in bots. Perform the following steps.

1. Initial Bot Setup
Go to Discord https://discord.com/developers/applications
2. Click on **New Application**.
3. Write the name of the application and click create.
4. Now click on bot and build one
5. Go To **OAuth2** and Enter the scope as **Bot**.
6. Then enter Bot Permissions as required.
7. Copy the authorisation link generated. It will redirect to a page where you can add your bot to a server.
8. Copy the TOKEN and add it as DISCORD_BOT_TOKEN.

## Prefix

Prefix is used as a best practice to help bots better understand **bot commands**. In our workshop, PREFIX = ;;

## Channel ID

1. Enable developer mode by going into `User Settings > Appearance > Enable Developer Mode`.
2. Create a new **text** channel.
3. Right-click on the channel and select **Copy ID**.
4. Use this value as DISCORD_CHANNEL_NUMBER.