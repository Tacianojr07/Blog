import { asyncDelay } from "@/utils/async-delay";
import { logColor } from "@/utils/log-color";

export async function deletePostAction(id: string) {
  await asyncDelay(3000);
  logColor("Apagar post:", id);
  return id;
}
