"use server";

import { getServicesList } from "./services";

export async function fetchServices() {
  return getServicesList();
}
