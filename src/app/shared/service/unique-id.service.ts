import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class UniqueIdService {
  constructor() {}

  generateUniqueIdWithPrefix(prefix: string): string {
    const uniqueId = this.generateUniqueId();
    return `${prefix}-${uniqueId}`;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
