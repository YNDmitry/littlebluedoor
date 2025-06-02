const PRISMIC_REPO = process.env.PRISMIC_REPO; // типа 'littlebluedoor'
const PRISMIC_TOKEN = process.env.PRISMIC_TOKEN;
const BYPASS_TOKEN = process.env.VERCEL_BYPASS_TOKEN;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Защита по секрету вебхука, если настроено (добавь secret в настройках Prismic)
  if (process.env.PRISMIC_TOKEN && body.secret !== process.env.PRISMIC_TOKEN) {
    return { error: "unauthorized" };
  }

  // Извлекаем id документов
  const documentIds: string[] = body.documents || [];

  for (const id of documentIds) {
    // Получаем документ из Prismic по id (REST API)
    // Можно запросить всё скопом, но делаем по одному для читаемости
    const apiUrl = `https://${PRISMIC_REPO}.cdn.prismic.io/api/v2/documents/search?ref=${body.masterRef}&q=[[at(document.id,"${id}")]]&access_token=${PRISMIC_TOKEN}`;

    const docRes = await fetch(apiUrl);
    const docJson = await docRes.json();

    if (!docJson.results?.length) continue; // если документ не найден

    const doc = docJson.results[0];
    const type = doc.type;
    const uid = doc.uid;

    // Определи по своему роутингу!
    let url = "/";
    if (type === "travel_guide") {
      url = `https://www.littlebluedoor.co/travel-guides/${uid}`;
    } else if (type === "page") {
      url = `https://www.littlebluedoor.co/${uid}`;
    } else if (type === "experiences") {
      url = `https://www.littlebluedoor.co/experiences/${uid}`;
    } else {
      continue; // не поддерживаемый тип документа
    }

    // Триггерим on-demand ISR
    await fetch(url, {
      method: "GET",
      headers: {
        "x-prerender-revalidate": BYPASS_TOKEN,
      },
    });
  }

  // Можно инвалидировать /travel-guides или /experiences целиком, если нужно (добавь по своему вкусу)
  return { ok: true };
});
