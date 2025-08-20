import { BehaviorSubject } from "rxjs";
import { Store } from "./store";

export class OnboardingStore extends Store<boolean> {
  private static _instance: OnboardingStore;
  static get instance(): OnboardingStore {
   OnboardingStore._instance = OnboardingStore._instance ?? new OnboardingStore();
    return OnboardingStore._instance;
  }
  protected _observable: BehaviorSubject<boolean>;

  constructor() {
    super();
    this._observable = new BehaviorSubject(true);
  }
}