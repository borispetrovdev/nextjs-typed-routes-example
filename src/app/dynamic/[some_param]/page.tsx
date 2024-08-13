export default function DynamicRouteTest({
  params: { some_param },
}: {
  params: { some_param: string };
}) {
  return <h1>{some_param}</h1>;
}
