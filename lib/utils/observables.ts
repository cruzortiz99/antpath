import { useEffect, useState } from "react";
import { Observable } from "rxjs";
import { Store } from "../data_sources/stores/store";

type ObservableLike<T> =
  | Observable<T>
  | Pick<Observable<T>, "subscribe">
  | Pick<Store<T>, "subscribe">;

export function useObservable<T>($obs: () => ObservableLike<T>, refs: unknown[]): [T | undefined] {
  const [value, setValue] = useState<T>();
  useEffect(() => {
    const subscription = $obs().subscribe(setValue);
    return () => subscription.unsubscribe();
  }, [$obs, refs]);
  return [value];
}
