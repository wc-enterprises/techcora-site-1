import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationStateService {
  private animationsPlayed: { [key: string]: boolean } = {};

  setAnimationPlayed(key: string): void {
    this.animationsPlayed[key] = true;
  }

  hasAnimationPlayed(key: string): boolean {
    return this.animationsPlayed[key] || false;
  }
}
