// duration.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration', standalone: true })
export class DurationPipe implements PipeTransform {
    transform(seconds: number): string {
        const m = Math.floor(seconds / 60).toString().padStart(1, '0');
        const s = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }
}
