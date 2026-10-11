import type { CommandModule } from "../../../core/types/command";

function toBold(text: string): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const bold = "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗";
  return text
    .split("")
    .map((c) => {
      const idx = chars.indexOf(c);
      return idx >= 0 ? bold.slice(idx * 2, idx * 2 + 2) : c;
    })
    .join("");
}

function toCircled(text: string): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
  const circled = "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ①②③④⑤⑥⑦⑧⑨";
  return text
    .split("")
    .map((c) => {
      const idx = chars.indexOf(c);
      return idx >= 0 ? circled.slice(idx * 2, idx * 2 + 2) : c;
    })
    .join("");
}

function toGothic(text: string): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const gothic = "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢int𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷";
  return text
    .split("")
    .map((c) => {
      const idx = chars.indexOf(c);
      return idx >= 0 ? gothic.slice(idx * 2, idx * 2 + 2) : c;
    })
    .join("");
}

function toVaporwave(text: string): string {
  return text.split("").join(" ").toUpperCase();
}

export const logoCommand: CommandModule = {
  definition: {
    name: "logo",
    aliases: ["estilotexto", "fontes"],
    description: "Formata e estiliza textos em diversas tipografias e designs Unicode.",
    usage: "!logo <texto>",
    category: "logos",
    cooldownSeconds: 3
  },
  async execute(context) {
    const text = context.args.join(" ").trim();
    if (!text) {
      await context.reply("✏️ Envie um texto para estilizar!\nExemplo: `!logo Soul-List`");
      return;
    }

    const bold = toBold(text);
    const circled = toCircled(text);
    const gothic = toGothic(text);
    const vapor = toVaporwave(text);

    await context.reply(
      `🎨 *ESTILOS TIPOGRÁFICOS* 🎨\n\n` +
      `📌 *Original:* ${text}\n\n` +
      `1️⃣ *Bold Serif:*\n${bold}\n\n` +
      `2️⃣ *Circulado:*\n${circled}\n\n` +
      `3️⃣ *Gothic / Medieval:*\n${gothic}\n\n` +
      `4️⃣ *V A P O R W A V E:*\n${vapor}\n\n` +
      `💡 _Copie o estilo que mais gostar para usar nas suas mensagens!_`
    );
  }
};
