import { Route } from "next";
import { redirect } from "next/navigation";
import router from "next/router";

export default function RedirectToDynamicRouteTest({
  params: { dynamic_route_param },
}: {
  params: { dynamic_route_param: string };
}) {
  const typedRoute: Route = "/dynamic/foo";
  console.log(typedRoute);
  // THIS SHOULD THROW A TYPE ERROR ("dynmc" should ge spelled "dynamic")
  redirect(`/dynmc/${dynamic_route_param}`);
}
