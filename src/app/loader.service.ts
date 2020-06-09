import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private subject = new Subject<boolean>();

  constructor() { }

  enableLoader(): void {
    this.subject.next(true)
  }

  disableLoader(): void {
    this.subject.next(false)
  }

  getLoaderStatus(): Observable<boolean> {
    return this.subject.asObservable()
  }

}
