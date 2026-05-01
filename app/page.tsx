export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 text-slate-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 md:px-10">
        <header className="rounded-3xl bg-white/80 p-8 text-center shadow-sm ring-1 ring-amber-100 backdrop-blur-sm">
          <p className="mb-3 inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-700">
            3–6 岁儿童数学启蒙
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-orange-700 md:text-5xl">
            在游戏中爱上数学，从第一次数数开始
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            通过图形、数字卡片和情景任务，帮助孩子建立数感、分类和逻辑思维。
          </p>
        </header>

        <section className="grid gap-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100 md:grid-cols-2 md:p-8">
          <div className="flex items-center justify-center rounded-2xl bg-orange-100/70 p-6">
            <div className="aspect-[4/3] w-full rounded-xl border-2 border-dashed border-orange-300 bg-white/70" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-orange-700">产品图片区</h2>
            <p className="mt-3 text-slate-600 leading-7">
              可放置产品主图、配件平铺图和儿童互动场景图，直观展示材质安全与玩法细节。
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-amber-100 md:p-8">
          <h2 className="text-2xl font-semibold text-orange-700">玩法介绍</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              {
                title: '数一数',
                desc: '通过实物卡片配对，学习 1–20 数量对应。',
              },
              {
                title: '分一分',
                desc: '按颜色、大小、形状分类，提升观察与归纳能力。',
              },
              {
                title: '比一比',
                desc: '在闯关任务中比较多少、长短、轻重，建立基础逻辑。',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-orange-50 p-5 ring-1 ring-orange-100"
              >
                <h3 className="text-lg font-semibold text-orange-700">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-rose-100 md:p-8">
          <h2 className="text-2xl font-semibold text-orange-700">家长评价</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              '孩子每天都会主动拿出来玩，数数速度明显提高。',
              '卡片设计很温暖，玩法循序渐进，家长也容易上手。',
            ].map((comment, idx) => (
              <blockquote
                key={idx}
                className="rounded-2xl bg-rose-50 p-5 text-slate-700 ring-1 ring-rose-100"
              >
                “{comment}”
              </blockquote>
            ))}
          </div>
        </section>

        <section className="pb-4 text-center">
          <button className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-orange-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200">
            立即购买
          </button>
          <p className="mt-3 text-sm text-slate-500">支持 7 天无理由退换 · 安全材质认证</p>
        </section>
      </div>
    </main>
  );
}
