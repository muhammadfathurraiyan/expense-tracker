export default function page({
  params,
}: {
  params: { lng: string; username: string };
}) {
  return (
    <div>
      {params.lng}, {params.username}
    </div>
  );
}
