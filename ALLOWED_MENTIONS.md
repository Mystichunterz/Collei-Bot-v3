# Mention Safety (`allowedMentions`) — read before adding commands

## TL;DR
**If a command/function puts user-controlled or externally-fetched text into a message's `content`, add `allowedMentions: { parse: [] }` to that send.** Otherwise an attacker can make the bot ping `@everyone`/`@here`/roles (e.g. `/echo message:@everyone`, or a Genshin signature / nickname set to `@everyone`).

---

## Why this matters
Discord parses mentions in **every message the bot sends** — `@everyone`, `@here`, `<@&roleId>` (role), `<@userId>` (user). If user input is reflected into a message's **`content`**, that input can contain a mention and the bot will fire the ping. This is **mention injection**, and it's the most common abuse vector for a community bot.

## The global default (already set in `index.js`)
```js
new Bot({
  ...,
  allowedMentions: { parse: ['users', 'roles'] },
});
```
This blocks `@everyone`/`@here` **everywhere**, but **still lets role and user mentions ping** (so welcomes and the LOTD role ping keep working). Treat it as a backstop only — it does **not** stop a reflected `<@&role>` ping. The per-send rule below is the real protection.

## The rule
Any send that includes user input or fetched data in `content` **must** disable mention parsing at the call site:
```js
{ content: someUserText, allowedMentions: { parse: [] } }
```
`parse: []` means "parse no mentions of any kind" — the message becomes incapable of pinging, no matter what the text is.

### Apply it to whichever send you use
```js
// slash commands / interactions
await interaction.reply({     content, allowedMentions: { parse: [] } });
await interaction.editReply({ content, allowedMentions: { parse: [] } });
await interaction.followUp({  content, allowedMentions: { parse: [] }, ephemeral: true });

// posting to a channel
await interaction.channel.send({ content, allowedMentions: { parse: [] } });
await channel.send({             content, allowedMentions: { parse: [] } });

// prefix commands / message events
await message.reply({        content, allowedMentions: { parse: [] } });
await message.channel.send({ content, allowedMentions: { parse: [] } });
```
> Note: passing a bare string (`channel.send(text)`) gives you no place to set this — always pass an **object** when the content contains user/fetched text.

## When you DON'T need it
- The text only appears inside an **embed** (`setDescription`/`setTitle`/`addFields`/footer) — embeds never trigger pings.
- The only interpolated value is a Discord **username** (`user.username`) — the username charset (`a-z 0-9 _ .`) can't form a mention. (A **nickname**/`displayName` or **global display name** CAN, so those still need `parse: []`.)
- The text is entirely static / hardcoded.

## When you WANT a ping (opt in explicitly)
Don't drop the protection — name exactly what may ping:
```js
{ content: `Welcome ${userMention}!`, allowedMentions: { users: [member.id] } }   // ping just this user
{ content: '<@&999532997323792405>',  allowedMentions: { roles: ['999532997323792405'] } } // ping just this role
```

## New-command checklist
- [ ] Does my `reply`/`send` put user input or fetched data in `content`? → add `allowedMentions: { parse: [] }`.
- [ ] Am I *intentionally* pinging someone/a role? → opt in with `{ users: [...] }` / `{ roles: [...] }`, not a blanket allow.
- [ ] Is the user text only in an embed, or only a `username`, or static? → no action needed.

## Already-hardened sinks (reference examples)
`slash_commands/echo.js`, `slash_commands/genshinprofile.js`, `slash_commands/wikisummary.js`, `managers/TaskManager.js` (birthday message) — each uses `allowedMentions: { parse: [] }`. Copy the pattern from any of them.
