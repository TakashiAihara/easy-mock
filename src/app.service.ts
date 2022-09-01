import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  get(url: string): string {
    if (url.includes('.')) {
      return '';
    }
    const mockPath = this.parsePath(url);
    return fs.readFileSync(mockPath, 'utf-8');
  }

  set(url: string, obj: object): void {
    const mockPath = this.parsePath(url);
    console.log();
    if (!fs.existsSync(path.dirname(mockPath))) {
      fs.mkdirSync(path.dirname(mockPath));
    }
    fs.writeFileSync(mockPath, JSON.stringify(obj, null, ' '));
  }

  parsePath(url: string): string {
    const parsedUrl = url.replace('?', '--');
    const mockDir = path.resolve(__dirname, '../mock');
    const mockPath = path.join(mockDir, parsedUrl) + '.json';
    console.log(mockPath);
    return mockPath;
  }
}
