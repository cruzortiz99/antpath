import { BehaviorSubject, Observer, Subscription } from "rxjs";


export abstract class Store<T> {
  protected abstract _observable: BehaviorSubject<T>;

  public get observable(): BehaviorSubject<T> {
    return this._observable;
  }

  update(value: T): Store<T> {
    this._observable.next(value);
    return this;
  }
  mapUpdate(fn: (value: T) => T): Store<T> {
    this._observable.next(fn(this._observable.value));
    return this;
  }
  subscribe(fn: ((value: T) => void)|Partial<Observer<T>>|undefined): Subscription {
    return this._observable.subscribe(fn);
  }
}