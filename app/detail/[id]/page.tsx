import welfare from "@/data/welfare.json";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function DetailPage({
  params,
}: Props) {
  const item = welfare.find(
    (v) => v.id === params.id
  );

  if (!item) return notFound();

  return (
    <div className="space-y-6">

      <h1 className="text-4xl font-bold">
        {item.title}
      </h1>

      <div className="rounded-xl bg-white p-6 shadow">

        <p>{item.description}</p>

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div>

            <h3 className="font-semibold">
              신청 대상
            </h3>

            <p>{item.target}</p>

          </div>

          <div>

            <h3 className="font-semibold">
              신청 기관
            </h3>

            <p>{item.organization}</p>

          </div>

          <div>

            <h3 className="font-semibold">
              신청 마감
            </h3>

            <p>{item.deadline}</p>

          </div>

          <div>

            <h3 className="font-semibold">
              지역
            </h3>

            <p>{item.region}</p>

          </div>

        </div>

        <a
          href={item.link}
          target="_blank"
          className="inline-block mt-8 bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          신청 사이트 이동
        </a>

      </div>

    </div>
  );
}
